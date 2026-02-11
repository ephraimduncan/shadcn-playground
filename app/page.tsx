"use client";

import { useState, useCallback } from "react";
import { useTheme } from "next-themes";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable";
import { Navbar, type LayoutMode } from "@/components/playground/navbar";
import { EditorPanel, DEFAULT_TSX_CODE } from "@/components/playground/editor-panel";
import { PreviewPanel } from "@/components/playground/preview-panel";
import { StatusBar } from "@/components/playground/status-bar";
import { useTranspile } from "@/hooks/use-transpile";

export default function Page() {
  const [layoutMode, setLayoutMode] = useState<LayoutMode>("horizontal");
  const [code, setCode] = useState(DEFAULT_TSX_CODE);
  const compilationResult = useTranspile(code);
  const { resolvedTheme } = useTheme();
  const theme = resolvedTheme ?? "light";

  const transpileError = compilationResult && "error" in compilationResult ? compilationResult.error : null;
  const [runtimeError, setRuntimeError] = useState("");
  const handleRuntimeError = useCallback((msg: string) => setRuntimeError(msg), []);

  return (
    <div className="flex h-dvh flex-col bg-background">
      <Navbar layoutMode={layoutMode} onLayoutModeChange={setLayoutMode} />

      <div className="flex-1 min-h-0">
        {layoutMode === "preview-only" ? (
          <PreviewPanel compilationResult={compilationResult} transpileError={transpileError} theme={theme} runtimeError={runtimeError} onRuntimeError={handleRuntimeError} />
        ) : (
          <ResizablePanelGroup
            orientation="horizontal"
            className="h-full"
          >
            <ResizablePanel defaultSize={35} minSize={25}>
              <EditorPanel code={code} onCodeChange={setCode} error={transpileError} runtimeError={runtimeError} />
            </ResizablePanel>
            <ResizableHandle withHandle className="focus-visible:ring-0 focus-visible:ring-offset-0" />
            <ResizablePanel defaultSize={65} minSize={25}>
              <PreviewPanel compilationResult={compilationResult} transpileError={transpileError} theme={theme} runtimeError={runtimeError} onRuntimeError={handleRuntimeError} />
            </ResizablePanel>
          </ResizablePanelGroup>
        )}
      </div>

      <StatusBar />
    </div>
  );
}
