"use client";

import { useState } from "react";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable";
import { Navbar, type LayoutMode } from "@/components/playground/navbar";
import { EditorPanel } from "@/components/playground/editor-panel";
import { PreviewPanel } from "@/components/playground/preview-panel";
import { StatusBar } from "@/components/playground/status-bar";

export default function Page() {
  const [layoutMode, setLayoutMode] = useState<LayoutMode>("horizontal");

  return (
    <div className="flex h-dvh flex-col bg-background">
      <Navbar layoutMode={layoutMode} onLayoutModeChange={setLayoutMode} />

      <div className="flex-1 min-h-0">
        {layoutMode === "preview-only" ? (
          <PreviewPanel />
        ) : (
          <ResizablePanelGroup
            direction={layoutMode === "horizontal" ? "horizontal" : "vertical"}
            className="h-full"
          >
            <ResizablePanel defaultSize={50} minSize={25}>
              <EditorPanel />
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={50} minSize={25}>
              <PreviewPanel />
            </ResizablePanel>
          </ResizablePanelGroup>
        )}
      </div>

      <StatusBar />
    </div>
  );
}
