"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import Editor, { type BeforeMount } from "@monaco-editor/react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  IconCopy,
  IconCheck,
  IconWand,
  IconLoader2,
  IconRotate,
} from "@tabler/icons-react";
import { toast } from "sonner";
import type { TranspileError } from "@/lib/playground/transpile";
import type { editor } from "monaco-editor";
import {
  MonacoJsxSyntaxHighlight,
  getWorker,
} from "monaco-jsx-syntax-highlight";
import pierreDarkJson from "@/lib/playground/themes/pierre-dark.json";
import pierreLightJson from "@/lib/playground/themes/pierre-light.json";
import { DEFAULT_GLOBALS_CSS } from "@/lib/playground/theme";

export const DEFAULT_TSX_CODE = `import { Example, ExampleWrapper } from "@/components/ui/example";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { PlusIcon, BluetoothIcon } from "lucide-react";

export function ComponentExample() {
  return (
    <ExampleWrapper className="md:grid-cols-1 place-items-center pt-4 sm:pt-6 lg:pt-12 max-w-lg">
      <Example title="Card" className="items-center justify-center">
        <Card className="relative w-full max-w-sm overflow-hidden pt-0">
          <div className="bg-primary absolute" />
           <img
            src="https://pbs.twimg.com/media/G9-l2e7aAAA46v2?format=jpg&name=900x900"
            alt="Writer.so"
            className="relative z-20 aspect-video w-full object-cover"
          />
          <CardHeader>
            <CardTitle>writer.so - AI workspace for writers</CardTitle>
            <CardDescription>
              Research, draft, and edit without leaving your flow.
              No switching, no friction, just writing that works smarter.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button>
                   <PlusIcon data-icon="inline-start" />
                   Try Writer
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent size="sm">
                <AlertDialogHeader>
                  <AlertDialogMedia>
                    <BluetoothIcon />
                  </AlertDialogMedia>
                  <AlertDialogTitle>
                    Allow accessory to connect?
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    Do you want to allow the USB accessory to connect to this
                    device?
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Don&apos;t allow</AlertDialogCancel>
                  <AlertDialogAction>Allow</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
            <Badge variant="secondary" className="ml-auto">
              New
            </Badge>
          </CardFooter>
        </Card>
      </Example>
    </ExampleWrapper>
  );
}`;

type EditorTab = "component.tsx" | "globals.css";

interface EditorPanelProps {
  code: string;
  onCodeChange: (code: string) => void;
  globalCode: string;
  onGlobalCodeChange: (code: string) => void;
  error?: TranspileError | null;
  runtimeError?: string;
  onReset?: () => void;
  onGlobalReset?: () => void;
}

function findIdentifierInSource(
  code: string,
  errorMessage: string,
): { line: number; startColumn: number; endColumn: number } | null {
  const patterns = [
    /(\w+) is not defined/,
    /(\w+) is not a function/,
    /Cannot read properties of (\w+)/,
    /(\w+) is not a constructor/,
    /Cannot find module ['"]([^'"]+)['"]/,
  ];

  let identifier: string | null = null;
  for (const pattern of patterns) {
    const match = errorMessage.match(pattern);
    if (match) {
      identifier = match[1];
      break;
    }
  }

  if (!identifier) return null;

  const lines = code.split("\n");
  for (let i = 0; i < lines.length; i++) {
    const col = lines[i].indexOf(identifier);
    if (col !== -1) {
      return {
        line: i + 1,
        startColumn: col + 1,
        endColumn: col + 1 + identifier.length,
      };
    }
  }

  return null;
}

const PRETTIER_OPTIONS = {
  semi: true,
  singleQuote: false,
  printWidth: 80,
  tabWidth: 2,
  trailingComma: "all" as const,
};

export function EditorPanel({
  code,
  onCodeChange,
  globalCode,
  onGlobalCodeChange,
  error,
  runtimeError,
  onReset,
  onGlobalReset = () => onGlobalCodeChange(DEFAULT_GLOBALS_CSS),
}: EditorPanelProps) {
  const { resolvedTheme } = useTheme();
  const [copied, setCopied] = useState(false);
  const [isFormatting, setIsFormatting] = useState(false);
  const [activeTab, setActiveTab] = useState<EditorTab>("component.tsx");
  const editorInstanceRef = useRef<editor.IStandaloneCodeEditor | null>(null);
  const monacoRef = useRef<typeof import("monaco-editor") | null>(null);
  const jsxHighlightDisposeRef = useRef<(() => void) | null>(null);
  const handleFormatRef = useRef<() => void>(() => {});
  const pendingCursorRestoreRef = useRef<{
    cursorOffset: number;
    scrollTop: number;
    scrollLeft: number;
    formattedCode: string;
  } | null>(null);
  const [isEditorReady, setIsEditorReady] = useState(false);

  const isComponentTab = activeTab === "component.tsx";
  const activeCode = isComponentTab ? code : globalCode;
  const activeLanguage = isComponentTab ? "typescript" : "css";
  const activePath = isComponentTab
    ? "file:///component.tsx"
    : "file:///globals.css";
  const activeFilename = isComponentTab ? "component.tsx" : "globals.css";

  const handleFormat = useCallback(async () => {
    if (isFormatting || !activeCode.trim()) return;

    setIsFormatting(true);
    try {
      const editorInstance = editorInstanceRef.current;
      const model = editorInstance?.getModel();
      const position = editorInstance?.getPosition();
      const cursorOffset = model && position ? model.getOffsetAt(position) : 0;
      const scrollTop = editorInstance?.getScrollTop() ?? 0;

      if (isComponentTab) {
        const [prettier, babel, estree] = await Promise.all([
          import("prettier/standalone"),
          import("prettier/plugins/babel"),
          import("prettier/plugins/estree"),
        ]);

        const result = await prettier.formatWithCursor(activeCode, {
          cursorOffset,
          plugins: [babel, estree],
          parser: "babel-ts",
          ...PRETTIER_OPTIONS,
        });

        if (editorInstance && model) {
          pendingCursorRestoreRef.current = {
            cursorOffset: result.cursorOffset,
            scrollTop,
            scrollLeft: editorInstance.getScrollLeft(),
            formattedCode: result.formatted,
          };
        }

        onCodeChange(result.formatted);
      } else {
        const [prettier, postcss] = await Promise.all([
          import("prettier/standalone"),
          import("prettier/plugins/postcss"),
        ]);

        const result = await prettier.formatWithCursor(activeCode, {
          cursorOffset,
          plugins: [postcss],
          parser: "css",
          ...PRETTIER_OPTIONS,
        });

        if (editorInstance && model) {
          pendingCursorRestoreRef.current = {
            cursorOffset: result.cursorOffset,
            scrollTop,
            scrollLeft: editorInstance.getScrollLeft(),
            formattedCode: result.formatted,
          };
        }

        onGlobalCodeChange(result.formatted);
      }

      toast.success("Formatted");
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unknown error";
      toast.error(`Could not format: ${message}`);
    } finally {
      setIsFormatting(false);
    }
  }, [
    activeCode,
    isComponentTab,
    isFormatting,
    onCodeChange,
    onGlobalCodeChange,
  ]);

  handleFormatRef.current = handleFormat;

  useEffect(() => {
    const pending = pendingCursorRestoreRef.current;
    if (!pending) return;
    if (pending.formattedCode !== activeCode) return;

    const editorInstance = editorInstanceRef.current;
    const model = editorInstance?.getModel();
    if (!editorInstance || !model) return;

    if (model.getValue() !== pending.formattedCode) return;

    const newPosition = model.getPositionAt(pending.cursorOffset);
    editorInstance.setPosition(newPosition);
    editorInstance.setScrollTop(pending.scrollTop);
    editorInstance.setScrollLeft(pending.scrollLeft);
    pendingCursorRestoreRef.current = null;
  }, [activeCode]);

  useEffect(() => {
    const editorInstance = editorInstanceRef.current;
    if (!editorInstance) return;
    const model = editorInstance.getModel();
    if (!model) return;

    const monaco = monacoRef.current;
    if (!monaco) return;

    const markers: Parameters<typeof monaco.editor.setModelMarkers>[2] = [];

    if (!isComponentTab) {
      monaco.editor.setModelMarkers(model, "playground", markers);
      return;
    }

    if (error) {
      markers.push({
        startLineNumber: error.line,
        startColumn: error.column + 1,
        endLineNumber: error.line,
        endColumn: model.getLineMaxColumn(error.line),
        message: error.message,
        severity: monaco.MarkerSeverity.Error,
      });
    }

    if (runtimeError && !error) {
      const loc = findIdentifierInSource(code, runtimeError);
      if (loc) {
        markers.push({
          startLineNumber: loc.line,
          startColumn: loc.startColumn,
          endLineNumber: loc.line,
          endColumn: loc.endColumn,
          message: runtimeError,
          severity: monaco.MarkerSeverity.Error,
        });
      } else {
        markers.push({
          startLineNumber: 1,
          startColumn: 1,
          endLineNumber: 1,
          endColumn: model.getLineMaxColumn(1),
          message: runtimeError,
          severity: monaco.MarkerSeverity.Error,
        });
      }
    }

    monaco.editor.setModelMarkers(model, "playground", markers);
  }, [error, runtimeError, isComponentTab, code]);

  useEffect(() => {
    if (!isEditorReady) return;
    const editorInstance = editorInstanceRef.current;
    const monaco = monacoRef.current;
    if (!editorInstance || !monaco) return;

    if (!isComponentTab) {
      jsxHighlightDisposeRef.current?.();
      jsxHighlightDisposeRef.current = null;
      return;
    }

    const jsxHighlight = new MonacoJsxSyntaxHighlight(getWorker(), monaco);
    const { highlighter, dispose } = jsxHighlight.highlighterBuilder({
      editor: editorInstance,
      filePath: editorInstance.getModel()?.uri.toString(),
    });
    highlighter();
    const disposeListener = editorInstance.onDidChangeModelContent(() => highlighter());

    jsxHighlightDisposeRef.current = () => {
      disposeListener.dispose();
      dispose();
    };

    return () => {
      jsxHighlightDisposeRef.current?.();
      jsxHighlightDisposeRef.current = null;
    };
  }, [isComponentTab, isEditorReady]);

  const handleBeforeMount: BeforeMount = useCallback((monaco) => {
    function defineVscodeTheme(name: string, json: typeof pierreDarkJson) {
      const base: editor.BuiltinTheme = json.type === "dark" ? "vs-dark" : "vs";
      const rules: editor.ITokenThemeRule[] = [];
      for (const tc of json.tokenColors) {
        const scopes = Array.isArray(tc.scope) ? tc.scope : [tc.scope];
        for (const scope of scopes) {
          if (!scope) continue;
          rules.push({
            token: scope,
            foreground: tc.settings.foreground?.replace("#", ""),
            fontStyle: tc.settings.fontStyle,
          });
        }
      }
      monaco.editor.defineTheme(name, {
        base,
        inherit: true,
        rules,
        colors: { ...json.colors },
      });
    }

    defineVscodeTheme("pierre-dark", pierreDarkJson);
    defineVscodeTheme("pierre-light", pierreLightJson);

    monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
      jsx: monaco.languages.typescript.JsxEmit.ReactJSX,
      esModuleInterop: true,
      allowNonTsExtensions: true,
    });
    monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
      noSemanticValidation: true,
    });
  }, []);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(activeCode);
    setCopied(true);
    toast.success(`${activeFilename} copied to clipboard`);
    setTimeout(() => setCopied(false), 2000);
  }, [activeCode, activeFilename]);

  const handleReset = useCallback(() => {
    if (isComponentTab) {
      onReset?.();
    } else {
      onGlobalReset();
    }
  }, [isComponentTab, onReset, onGlobalReset]);

  return (
    <div className="flex h-full flex-col bg-background">
      <div className="flex h-10 shrink-0 items-center justify-between border-b border-border pr-3">
        <div className="flex h-full">
          <button
            type="button"
            onClick={() => setActiveTab("component.tsx")}
            className={`inline-flex h-full items-center px-3 text-xs font-medium leading-none transition-colors ${
              isComponentTab
                ? "bg-background text-foreground border-b-2 border-primary font-semibold"
                : "bg-background/80 text-muted-foreground hover:bg-background border-b-2 border-transparent"
            }`}
          >
            component.tsx
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("globals.css")}
            className={`inline-flex h-full items-center px-3 text-xs font-medium leading-none transition-colors ${
              isComponentTab
                ? "bg-background/80 text-muted-foreground hover:bg-background border-b-2 border-transparent"
                : "bg-background text-foreground border-b-2 border-primary font-semibold"
            }`}
          >
            globals.css
          </button>
        </div>
        <div className="flex items-center gap-1">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon-sm"
                onClick={handleCopy}
                aria-label={`Copy ${activeFilename}`}
              >
                {copied ? (
                  <IconCheck className="size-3.5 text-emerald-500" />
                ) : (
                  <IconCopy className="size-3.5" />
                )}
              </Button>
            </TooltipTrigger>
            <TooltipContent>{`Copy ${activeFilename}`}</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon-sm"
                onClick={handleReset}
                aria-label={`Reset ${activeFilename}`}
              >
                <IconRotate className="size-3.5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>{`Reset ${activeFilename}`}</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon-sm"
                onClick={handleFormat}
                aria-label="Format code"
                disabled={isFormatting}
              >
                {isFormatting ? (
                  <IconLoader2 className="size-3.5 animate-spin" />
                ) : (
                  <IconWand className="size-3.5" />
                )}
              </Button>
            </TooltipTrigger>
            <TooltipContent>Format</TooltipContent>
          </Tooltip>
        </div>
      </div>

      <div className="flex-1 min-h-0">
        <Editor
          height="100%"
          language={activeLanguage}
          path={activePath}
          theme={resolvedTheme === "dark" ? "pierre-dark" : "pierre-light"}
          value={activeCode}
          onChange={(value) => {
            const next = value ?? "";
            if (isComponentTab) {
              onCodeChange(next);
            } else {
              onGlobalCodeChange(next);
            }
          }}
          beforeMount={handleBeforeMount}
          onMount={(instance, monaco) => {
            editorInstanceRef.current = instance;
            monacoRef.current = monaco;
            instance.addAction({
              id: "format-document",
              label: "Format Document",
              keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS],
              run: () => {
                handleFormatRef.current();
              },
            });

            if ("fonts" in document) {
              void document.fonts
                .load("400 14px 'Berkeley Mono'")
                .then(() => {
                  monaco.editor.remeasureFonts();
                  instance.render();
                })
                .catch(() => undefined);
            }
            setIsEditorReady(true);
          }}
          options={{
            minimap: { enabled: false },
            fontSize: 15,
            fontFamily: "'Berkeley Mono', monospace",
            fontWeight: "550",
            lineHeight: 24,
            padding: { top: 12 },
            scrollBeyondLastLine: false,
            renderLineHighlight: "none",
            overviewRulerLanes: 0,
            hideCursorInOverviewRuler: true,
            overviewRulerBorder: false,
            scrollbar: {
              verticalScrollbarSize: 8,
              horizontalScrollbarSize: 8,
              useShadows: false,
            },
            wordWrap: "on",
            tabSize: 2,
            stickyScroll: { enabled: false },
            automaticLayout: true,
            "semanticHighlighting.enabled": false,
          }}
        />
      </div>
    </div>
  );
}
