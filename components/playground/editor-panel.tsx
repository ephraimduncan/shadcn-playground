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
          <div className="bg-primary absolute inset-0 z-30 aspect-video opacity-50 mix-blend-color" />
          <img
            src="https://images.unsplash.com/photo-1604076850742-4c7221f3101b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Card of a card"
            title="Photo by mymind on Unsplash"
            className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale"
          />
          <CardHeader>
            <CardTitle>Observability Plus is replacing Monitoring</CardTitle>
            <CardDescription>
              Switch to the improved way to explore your data, with natural
              language. Monitoring will no longer be available on the Pro plan
              in November, 2025
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button>
                  <PlusIcon data-icon="inline-start" />
                  Show Dialog
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
              Warning
            </Badge>
          </CardFooter>
        </Card>
      </Example>
    </ExampleWrapper>
  );
}`;

interface EditorPanelProps {
  code: string;
  onCodeChange: (code: string) => void;
  error?: TranspileError | null;
  runtimeError?: string;
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
  parser: "babel-ts" as const,
  semi: true,
  singleQuote: false,
  printWidth: 80,
  tabWidth: 2,
  trailingComma: "all" as const,
};

export function EditorPanel({
  code,
  onCodeChange,
  error,
  runtimeError,
}: EditorPanelProps) {
  const { resolvedTheme } = useTheme();
  const [copied, setCopied] = useState(false);
  const [isFormatting, setIsFormatting] = useState(false);
  const editorInstanceRef = useRef<editor.IStandaloneCodeEditor | null>(null);
  const jsxHighlightDisposeRef = useRef<(() => void) | null>(null);
  const handleFormatRef = useRef<() => void>(() => {});
  const pendingCursorRestoreRef = useRef<{
    cursorOffset: number;
    scrollTop: number;
    scrollLeft: number;
    formattedCode: string;
  } | null>(null);

  const handleFormat = useCallback(async () => {
    if (isFormatting || !code.trim()) return;

    setIsFormatting(true);
    try {
      const [prettier, babel, estree] = await Promise.all([
        import("prettier/standalone"),
        import("prettier/plugins/babel"),
        import("prettier/plugins/estree"),
      ]);

      const editorInstance = editorInstanceRef.current;
      const model = editorInstance?.getModel();
      const position = editorInstance?.getPosition();
      const cursorOffset = model && position ? model.getOffsetAt(position) : 0;
      const scrollTop = editorInstance?.getScrollTop() ?? 0;

      const result = await prettier.formatWithCursor(code, {
        cursorOffset,
        plugins: [babel, estree],
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

      toast.success("Formatted");
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unknown error";
      toast.error(`Could not format: ${message}`);
    } finally {
      setIsFormatting(false);
    }
  }, [code, isFormatting, onCodeChange]);

  handleFormatRef.current = handleFormat;

  useEffect(() => {
    const pending = pendingCursorRestoreRef.current;
    if (!pending) return;
    if (pending.formattedCode !== code) return;

    const editorInstance = editorInstanceRef.current;
    const model = editorInstance?.getModel();
    if (!editorInstance || !model) return;

    if (model.getValue() !== pending.formattedCode) return;

    const newPosition = model.getPositionAt(pending.cursorOffset);
    editorInstance.setPosition(newPosition);
    editorInstance.setScrollTop(pending.scrollTop);
    editorInstance.setScrollLeft(pending.scrollLeft);
    pendingCursorRestoreRef.current = null;
  }, [code]);

  useEffect(() => {
    const editorInstance = editorInstanceRef.current;
    if (!editorInstance) return;
    const model = editorInstance.getModel();
    if (!model) return;

    const monaco = (
      window as unknown as { monaco: typeof import("monaco-editor") }
    ).monaco;
    if (!monaco) return;

    const markers: Parameters<typeof monaco.editor.setModelMarkers>[2] = [];

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
  }, [error, runtimeError, code]);

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
    navigator.clipboard.writeText(code);
    setCopied(true);
    toast.success("Copied to clipboard");
    setTimeout(() => setCopied(false), 2000);
  }, [code]);

  return (
    <div className="flex h-full flex-col bg-background">
      <div className="flex h-10 shrink-0 items-center justify-between border-b border-border px-3">
        <span className="text-xs text-muted-foreground">component.tsx</span>
        <div className="flex items-center gap-1">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon-sm"
                onClick={handleCopy}
                aria-label="Copy code"
              >
                {copied ? (
                  <IconCheck className="size-3.5 text-emerald-500" />
                ) : (
                  <IconCopy className="size-3.5" />
                )}
              </Button>
            </TooltipTrigger>
            <TooltipContent>Copy code</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon-sm"
                aria-label="Format code"
                onClick={handleFormat}
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
          language="typescript"
          path="file:///component.tsx"
          theme={resolvedTheme === "dark" ? "pierre-dark" : "pierre-light"}
          value={code}
          onChange={(value) => onCodeChange(value ?? "")}
          beforeMount={handleBeforeMount}
          onMount={(instance, monaco) => {
            editorInstanceRef.current = instance;
            instance.addAction({
              id: "format-document",
              label: "Format Document",
              keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS],
              run: () => {
                handleFormatRef.current();
              },
            });

            jsxHighlightDisposeRef.current?.();
            const jsxHighlight = new MonacoJsxSyntaxHighlight(
              getWorker(),
              monaco,
            );
            const { highlighter, dispose } = jsxHighlight.highlighterBuilder({
              editor: instance,
              filePath: instance.getModel()?.uri.toString(),
            });
            highlighter();
            instance.onDidChangeModelContent(() => highlighter());
            jsxHighlightDisposeRef.current = dispose;
          }}
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            fontFamily: "var(--font-geist-mono), monospace",
            lineHeight: 22,
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
