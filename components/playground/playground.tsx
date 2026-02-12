"use client";

import { useState, useCallback } from "react";
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
import { useTranspile } from "@/hooks/use-transpile";
import { useTailwindWorker } from "@/hooks/use-tailwind-worker";

interface PlaygroundProps {
  initialCode?: string;
}

const codeStorage = createJSONStorage<string>(() => globalThis.localStorage);

const playgroundCodeAtom = atomWithStorage<string>(
  "playground.code",
  DEFAULT_TSX_CODE,
  codeStorage,
  { getOnInit: true },
);

export function Playground({ initialCode }: PlaygroundProps) {
  const [layoutMode, setLayoutMode] = useState<LayoutMode>("horizontal");
  const [persistedCode, setPersistedCode] = useAtom(playgroundCodeAtom);
  const [sharedCode, setSharedCode] = useState(initialCode ?? DEFAULT_TSX_CODE);
  const isSharedSnippet = initialCode !== undefined;
  const code = isSharedSnippet ? sharedCode : persistedCode;
  const setCode = isSharedSnippet ? setSharedCode : setPersistedCode;
  const compilationResult = useTranspile(code);
  const { resolvedTheme } = useTheme();
  const theme = resolvedTheme ?? "light";

  const candidates =
    compilationResult && !("error" in compilationResult)
      ? compilationResult.candidates
      : [];
  const tailwindCSS = useTailwindWorker(candidates);

  const transpileError =
    compilationResult && "error" in compilationResult
      ? compilationResult.error
      : null;
  const [runtimeError, setRuntimeError] = useState("");

  const [consoleLogs, setConsoleLogs] = useState<ConsoleEntry[]>([]);
  const handleConsoleMessage = useCallback((entry: ConsoleEntry) => {
    setConsoleLogs((prev) => {
      const next = [...prev, entry];
      return next.length > 500 ? next.slice(-500) : next;
    });
  }, []);
  const handleClearConsole = useCallback(() => setConsoleLogs([]), []);

  return (
    <div className="flex h-dvh flex-col bg-background">
      <Navbar
        layoutMode={layoutMode}
        onLayoutModeChange={setLayoutMode}
        code={code}
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
          />
        ) : (
          <ResizablePanelGroup orientation="horizontal" className="h-full">
            <ResizablePanel defaultSize={35} minSize={25}>
              <EditorPanel
                code={code}
                onCodeChange={setCode}
                error={transpileError}
                runtimeError={runtimeError}
              />
            </ResizablePanel>
            <ResizableHandle
              withHandle
              className="focus-visible:ring-0 focus-visible:ring-offset-0"
            />
            <ResizablePanel defaultSize={65} minSize={25}>
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
              />
            </ResizablePanel>
          </ResizablePanelGroup>
        )}
      </div>

      <StatusBar />
    </div>
  );
}
