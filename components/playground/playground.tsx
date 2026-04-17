"use client";

import {
  useState,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from "react";
import { useAtom } from "jotai";
import { atomWithStorage, createJSONStorage } from "jotai/utils";
import { useTheme } from "next-themes";
import type { ConsoleEntry } from "@/components/playground/preview-iframe";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable";
import { Navbar, type LayoutMode } from "@/components/playground/navbar";
import {
  EditorPanel,
  DEFAULT_TSX_CODE,
} from "@/components/playground/editor-panel";
import { PreviewPanel } from "@/components/playground/preview-panel";
import { StatusBar } from "@/components/playground/status-bar";
import { CommandPalette } from "@/components/playground/command-palette";
import { useTranspile } from "@/hooks/use-transpile";
import { useTailwindWorker } from "@/hooks/use-tailwind-worker";
import { DEFAULT_GLOBALS_CSS } from "@/lib/playground/theme";

interface PlaygroundProps {
  initialCode?: string;
  initialGlobalCSS?: string;
}

const codeStorage = createJSONStorage<string>(() => globalThis.localStorage);
const numberStorage = createJSONStorage<number>(() => globalThis.localStorage);

const playgroundCodeAtom = atomWithStorage<string>(
  "playground.code",
  DEFAULT_TSX_CODE,
  codeStorage,
  { getOnInit: true },
);

const playgroundGlobalCSSAtom = atomWithStorage<string>(
  "playground.globalCSS",
  DEFAULT_GLOBALS_CSS,
  codeStorage,
  { getOnInit: true },
);

const splitSizeAtom = atomWithStorage<number>(
  "playground.splitSize",
  40,
  numberStorage,
  { getOnInit: true },
);

export function Playground({ initialCode, initialGlobalCSS }: PlaygroundProps) {
  const [layoutMode, setLayoutMode] = useState<LayoutMode>("horizontal");
  const [persistedCode, setPersistedCode] = useAtom(playgroundCodeAtom);
  const [persistedGlobalCSS, setPersistedGlobalCSS] = useAtom(
    playgroundGlobalCSSAtom,
  );
  const [splitSize, setSplitSize] = useAtom(splitSizeAtom);
  const [sharedCode, setSharedCode] = useState(initialCode ?? DEFAULT_TSX_CODE);
  const [sharedGlobalCSS, setSharedGlobalCSS] = useState(
    initialGlobalCSS ?? DEFAULT_GLOBALS_CSS,
  );
  const isSharedSnippet =
    initialCode !== undefined || initialGlobalCSS !== undefined;

  useEffect(() => {
    const search = window.location.search;
    if (
      (initialCode && search.includes("code=")) ||
      (initialGlobalCSS && search.includes("css=")) ||
      search.includes("open=")
    ) {
      window.history.replaceState(null, "", window.location.pathname);
    }
  }, [initialCode, initialGlobalCSS]);
  const code = isSharedSnippet ? sharedCode : persistedCode;
  const setCode = isSharedSnippet ? setSharedCode : setPersistedCode;
  const globalCSS = isSharedSnippet ? sharedGlobalCSS : persistedGlobalCSS;
  const setGlobalCSS = isSharedSnippet
    ? setSharedGlobalCSS
    : setPersistedGlobalCSS;
  const compilationResult = useTranspile(code);
  const { resolvedTheme, setTheme } = useTheme();
  const theme = resolvedTheme ?? "light";

  const candidates =
    compilationResult && !("error" in compilationResult)
      ? compilationResult.candidates
      : [];
  const tailwindCSS = useTailwindWorker(candidates, globalCSS);

  const transpileError =
    compilationResult && "error" in compilationResult
      ? compilationResult.error
      : null;
  const [runtimeError, setRuntimeError] = useState("");
  const [consoleLogs, setConsoleLogs] = useState<ConsoleEntry[]>([]);
  const [consoleOpen, setConsoleOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [cursor, setCursor] = useState({ line: 1, column: 1 });
  const [activeFilename, setActiveFilename] = useState<
    "component.tsx" | "globals.css"
  >("component.tsx");

  const shareTriggerRef = useRef<(() => void) | null>(null);
  const formatTriggerRef = useRef<(() => void) | null>(null);
  const reloadTriggerRef = useRef<(() => void) | null>(null);

  const handleConsoleMessage = useCallback((entry: ConsoleEntry) => {
    setConsoleLogs((prev) => {
      const next = [...prev, entry];
      return next.length > 500 ? next.slice(-500) : next;
    });
  }, []);
  const handleClearConsole = useCallback(() => setConsoleLogs([]), []);

  const consoleErrorCount = useMemo(
    () => consoleLogs.filter((e) => e.method === "error").length,
    [consoleLogs],
  );

  const presetName = useMemo(() => {
    if (globalCSS === DEFAULT_GLOBALS_CSS) return "Default";
    return null;
  }, [globalCSS]);

  const resetAll = useCallback(() => {
    setCode(DEFAULT_TSX_CODE);
    setGlobalCSS(DEFAULT_GLOBALS_CSS);
  }, [setCode, setGlobalCSS]);

  const toggleLayout = useCallback(() => {
    setLayoutMode((m) => (m === "horizontal" ? "preview-only" : "horizontal"));
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [setTheme, theme]);

  const toggleConsole = useCallback(() => {
    setConsoleOpen((v) => !v);
  }, []);

  const openGithub = useCallback(() => {
    window.open(
      "https://github.com/ephraimduncan/shadcn-play",
      "_blank",
      "noopener,noreferrer",
    );
  }, []);

  const openExamples = useCallback(() => {
    const trigger = document.querySelector<HTMLElement>(
      '[data-slot="example-picker-trigger"]',
    );
    trigger?.click();
  }, []);

  const openPresets = useCallback(() => {
    const trigger = document.querySelector<HTMLElement>(
      '[data-slot="preset-picker-trigger"]',
    );
    trigger?.click();
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const meta = e.metaKey || e.ctrlKey;
      if (!meta) return;
      const tag = (e.target as HTMLElement | null)?.tagName;
      const isEditable =
        tag === "INPUT" || tag === "TEXTAREA" ||
        (e.target as HTMLElement | null)?.isContentEditable;

      if (e.key.toLowerCase() === "k") {
        e.preventDefault();
        e.stopPropagation();
        setPaletteOpen((v) => !v);
        return;
      }
      if (e.key === "." ) {
        e.preventDefault();
        toggleTheme();
        return;
      }
      if (e.key === "/") {
        e.preventDefault();
        toggleConsole();
        return;
      }
      if (e.key === "Enter") {
        e.preventDefault();
        reloadTriggerRef.current?.();
        return;
      }
      if (e.shiftKey && e.key.toLowerCase() === "c") {
        if (isEditable) return;
        e.preventDefault();
        shareTriggerRef.current?.();
        return;
      }
      if (e.shiftKey && e.key.toLowerCase() === "e") {
        if (isEditable) return;
        e.preventDefault();
        openExamples();
        return;
      }
      if (e.shiftKey && e.key.toLowerCase() === "p") {
        if (isEditable) return;
        e.preventDefault();
        openPresets();
        return;
      }
    };
    document.addEventListener("keydown", onKey, true);
    return () => document.removeEventListener("keydown", onKey, true);
  }, [toggleTheme, toggleConsole, openExamples, openPresets]);

  const registerShareTrigger = useCallback(
    (trigger: (() => void) | null) => {
      shareTriggerRef.current = trigger;
    },
    [],
  );
  const registerFormatTrigger = useCallback(
    (trigger: (() => void) | null) => {
      formatTriggerRef.current = trigger;
    },
    [],
  );
  const registerReloadTrigger = useCallback(
    (trigger: (() => void) | null) => {
      reloadTriggerRef.current = trigger;
    },
    [],
  );

  const handleCursorChange = useCallback((line: number, column: number) => {
    setCursor({ line, column });
  }, []);

  return (
    <div className="isolate flex h-dvh flex-col bg-background">
      <Navbar
        layoutMode={layoutMode}
        onLayoutModeChange={setLayoutMode}
        code={code}
        globalCode={globalCSS}
        onReplaceCode={setCode}
        onReplaceGlobalCSS={setGlobalCSS}
        registerShareTrigger={registerShareTrigger}
      />

      <div className="flex-1 min-h-0">
        {layoutMode === "preview-only" ? (
          <PreviewPanel
            compilationResult={compilationResult}
            tailwindCSS={tailwindCSS}
            transpileError={transpileError}
            theme={theme}
            runtimeError={runtimeError}
            onRuntimeError={setRuntimeError}
            consoleLogs={consoleLogs}
            onClearConsole={handleClearConsole}
            onConsoleMessage={handleConsoleMessage}
            consoleOpen={consoleOpen}
            onConsoleOpenChange={setConsoleOpen}
            registerReloadTrigger={registerReloadTrigger}
          />
        ) : (
          <ResizablePanelGroup orientation="horizontal" className="h-full">
            <ResizablePanel
              id="playground-editor"
              defaultSize={splitSize}
              minSize={25}
              onResize={(size) => {
                if (typeof size === "number") setSplitSize(size);
              }}
            >
              <EditorPanel
                code={code}
                onCodeChange={setCode}
                globalCode={globalCSS}
                onGlobalCodeChange={setGlobalCSS}
                error={transpileError}
                runtimeError={runtimeError}
                onReset={() => setCode(DEFAULT_TSX_CODE)}
                onGlobalReset={() => setGlobalCSS(DEFAULT_GLOBALS_CSS)}
                onCursorChange={handleCursorChange}
                onActiveTabChange={setActiveFilename}
                registerFormatTrigger={registerFormatTrigger}
              />
            </ResizablePanel>
            <ResizableHandle
              withHandle
              className="focus-visible:ring-0 focus-visible:ring-offset-0"
            />
            <ResizablePanel
              id="playground-preview"
              defaultSize={100 - splitSize}
              minSize={25}
            >
              <PreviewPanel
                compilationResult={compilationResult}
                tailwindCSS={tailwindCSS}
                transpileError={transpileError}
                theme={theme}
                runtimeError={runtimeError}
                onRuntimeError={setRuntimeError}
                consoleLogs={consoleLogs}
                onClearConsole={handleClearConsole}
                onConsoleMessage={handleConsoleMessage}
                consoleOpen={consoleOpen}
                onConsoleOpenChange={setConsoleOpen}
                registerReloadTrigger={registerReloadTrigger}
              />
            </ResizablePanel>
          </ResizablePanelGroup>
        )}
      </div>

      <StatusBar
        presetName={presetName}
        cursorLine={cursor.line}
        cursorColumn={cursor.column}
        consoleErrorCount={consoleErrorCount}
        activeFilename={activeFilename}
      />

      <CommandPalette
        open={paletteOpen}
        onOpenChange={setPaletteOpen}
        actions={{
          toggleTheme,
          toggleLayout,
          toggleConsole,
          copyShareLink: () => shareTriggerRef.current?.(),
          reset: resetAll,
          reloadPreview: () => reloadTriggerRef.current?.(),
          format: () => formatTriggerRef.current?.(),
          openGithub,
          openPresets,
          openExamples,
        }}
      />

    </div>
  );
}
