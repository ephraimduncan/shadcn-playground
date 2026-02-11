"use client";

import { useState, useCallback } from "react";
import Editor from "@monaco-editor/react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { IconCopy, IconCheck, IconWand } from "@tabler/icons-react";
import type { TranspileError } from "@/lib/playground/transpile";
import type { editor } from "monaco-editor";

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
}

export function EditorPanel({ code, onCodeChange, error }: EditorPanelProps) {
  const { resolvedTheme } = useTheme();
  const [copied, setCopied] = useState(false);
  const editorRef = useCallback(
    (editorInstance: editor.IStandaloneCodeEditor | null) => {
      if (!editorInstance) return;
      const model = editorInstance.getModel();
      if (!model) return;

      if (error) {
        const monaco = (window as unknown as { monaco: typeof import("monaco-editor") }).monaco;
        if (monaco) {
          monaco.editor.setModelMarkers(model, "playground", [
            {
              startLineNumber: error.line,
              startColumn: error.column + 1,
              endLineNumber: error.line,
              endColumn: model.getLineMaxColumn(error.line),
              message: error.message,
              severity: monaco.MarkerSeverity.Error,
            },
          ]);
        }
      } else {
        const monaco = (window as unknown as { monaco: typeof import("monaco-editor") }).monaco;
        if (monaco) {
          monaco.editor.setModelMarkers(model, "playground", []);
        }
      }
    },
    [error],
  );

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(code);
    setCopied(true);
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
              >
                <IconWand className="size-3.5" />
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
          theme={resolvedTheme === "dark" ? "vs-dark" : "light"}
          value={code}
          onChange={(value) => onCodeChange(value ?? "")}
          onMount={(instance) => editorRef(instance)}
          options={{
            minimap: { enabled: false },
            fontSize: 13,
            fontFamily: "var(--font-geist-mono), monospace",
            lineHeight: 20,
            padding: { top: 12 },
            scrollBeyondLastLine: false,
            renderLineHighlight: "none",
            overviewRulerLanes: 0,
            hideCursorInOverviewRuler: true,
            overviewRulerBorder: false,
            scrollbar: {
              verticalScrollbarSize: 8,
              horizontalScrollbarSize: 8,
            },
            wordWrap: "on",
            tabSize: 2,
            automaticLayout: true,
          }}
        />
      </div>
    </div>
  );
}
