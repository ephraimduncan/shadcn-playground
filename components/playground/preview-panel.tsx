"use client";

import { useState, useCallback, useEffect, useMemo, useRef } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  IconDeviceDesktop,
  IconDeviceTablet,
  IconDeviceMobile,
  IconReload,
  IconTerminal2,
} from "@tabler/icons-react";
import {
  PreviewIframe,
  type PreviewStatus,
  type ConsoleEntry,
} from "./preview-iframe";
import { ConsolePanel } from "./console-panel";
import type {
  TranspileResult,
  TranspileError,
} from "@/lib/playground/transpile";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

type Viewport = "desktop" | "tablet" | "mobile";

type ViewportConfig = {
  width?: number;
  height?: number;
  showBoundary: boolean;
  contentPadding: string;
};

const viewportConfigs: Record<Viewport, ViewportConfig> = {
  desktop: {
    showBoundary: false,
    contentPadding: "0px",
  },
  tablet: {
    width: 834,
    height: 1194,
    showBoundary: true,
    contentPadding: "32px",
  },
  mobile: {
    width: 390,
    height: 844,
    showBoundary: true,
    contentPadding: "16px",
  },
};

interface PreviewPanelProps {
  compilationResult: TranspileResult | null;
  tailwindCSS: string | null;
  globalCSS: string;
  transpileError?: TranspileError | null;
  theme: string;
  runtimeError: string;
  onRuntimeError: (message: string) => void;
  consoleLogs: ConsoleEntry[];
  onClearConsole: () => void;
  onConsoleMessage: (entry: ConsoleEntry) => void;
}

export function PreviewPanel({
  compilationResult,
  tailwindCSS,
  globalCSS,
  transpileError,
  theme,
  runtimeError,
  onRuntimeError,
  consoleLogs,
  onClearConsole,
  onConsoleMessage,
}: PreviewPanelProps) {
  const [viewport, setViewport] = useState<Viewport>("desktop");
  const [refreshKey, setRefreshKey] = useState(0);
  const [consoleOpen, setConsoleOpen] = useState(false);
  const [availableSize, setAvailableSize] = useState({ width: 0, height: 0 });
  const [status, setStatus] = useState<PreviewStatus>("idle");

  const handleStatusChange = useCallback(
    (nextStatus: PreviewStatus) => {
      setStatus(nextStatus);
      if (nextStatus === "compiling") onClearConsole();
    },
    [onClearConsole],
  );
  const activeViewportConfig = viewportConfigs[viewport];
  const viewportContainerRef = useRef<HTMLDivElement | null>(null);

  const handleRefresh = useCallback(() => {
    onRuntimeError("");
    onClearConsole();
    setStatus("idle");
    setRefreshKey((k) => k + 1);
    toast.success("Preview reloaded");
  }, [onRuntimeError, onClearConsole]);

  const displayError = runtimeError || transpileError?.message || "";

  useEffect(() => {
    const container = viewportContainerRef.current;
    if (!container || typeof ResizeObserver === "undefined") return;

    const resizeObserver = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setAvailableSize({ width, height });
    });

    resizeObserver.observe(container);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  const frameScale = useMemo(() => {
    if (!activeViewportConfig.width || !activeViewportConfig.height) return 1;
    if (!availableSize.width || !availableSize.height) return 1;

    return Math.min(
      availableSize.width / activeViewportConfig.width,
      availableSize.height / activeViewportConfig.height,
      1,
    );
  }, [activeViewportConfig, availableSize]);

  return (
    <div className="flex h-full flex-col bg-background">
      <div className="flex h-10 shrink-0 items-center justify-between border-b border-border px-3">
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-muted-foreground">
            Preview
          </span>
          {status === "ready" && (
            <span className="size-1.5 rounded-full bg-emerald-500 animate-in fade-in duration-300" />
          )}
          {status === "error" && (
            <span className="size-1.5 rounded-full bg-red-500" />
          )}
          {status === "compiling" && (
            <span className="size-1.5 rounded-full bg-amber-500 animate-pulse" />
          )}
        </div>

        <div className="flex items-center gap-1">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant={consoleOpen ? "secondary" : "ghost"}
                size="icon-sm"
                aria-label="Toggle console"
                onClick={() => setConsoleOpen((v) => !v)}
              >
                <IconTerminal2 className="size-3.5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Console</TooltipContent>
          </Tooltip>

          <ToggleGroup
            type="single"
            variant="outline"
            value={viewport}
            onValueChange={(value) => {
              if (value) setViewport(value as Viewport);
            }}
            size="sm"
          >
            <Tooltip>
              <TooltipTrigger asChild>
                <ToggleGroupItem value="desktop" aria-label="Desktop">
                  <IconDeviceDesktop className="size-3.5" />
                </ToggleGroupItem>
              </TooltipTrigger>
              <TooltipContent>Desktop</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <ToggleGroupItem value="tablet" aria-label="Tablet">
                  <IconDeviceTablet className="size-3.5" />
                </ToggleGroupItem>
              </TooltipTrigger>
              <TooltipContent>Tablet</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <ToggleGroupItem value="mobile" aria-label="Mobile">
                  <IconDeviceMobile className="size-3.5" />
                </ToggleGroupItem>
              </TooltipTrigger>
              <TooltipContent>Mobile</TooltipContent>
            </Tooltip>
          </ToggleGroup>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon-sm"
                aria-label="Reload preview"
                onClick={handleRefresh}
              >
                <IconReload className="size-3.5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Reload</TooltipContent>
          </Tooltip>
        </div>
      </div>

      <div className="flex flex-1 flex-col overflow-hidden">
        <div className="flex-1 min-h-0 overflow-hidden">
          <div
            ref={viewportContainerRef}
            className={cn(
              "flex h-full w-full items-center justify-center",
              activeViewportConfig.showBoundary && "p-4",
            )}
          >
            <div
              className="origin-center transition-[width,height,transform] duration-150"
              style={{
                width: activeViewportConfig.width
                  ? `${activeViewportConfig.width}px`
                  : "100%",
                height: activeViewportConfig.height
                  ? `${activeViewportConfig.height}px`
                  : "100%",
                transform: `scale(${frameScale})`,
              }}
            >
              <div
                className={cn(
                  "relative flex h-full items-center justify-center overflow-hidden",
                  activeViewportConfig.showBoundary &&
                    "rounded-xl border border-border bg-background shadow-sm",
                )}
                style={{
                  padding: activeViewportConfig.showBoundary
                    ? undefined
                    : activeViewportConfig.contentPadding,
                }}
              >
                <PreviewIframe
                  key={refreshKey}
                  compilationResult={compilationResult}
                  tailwindCSS={tailwindCSS}
                  globalCSS={globalCSS}
                  theme={theme}
                  onRuntimeError={onRuntimeError}
                  onStatusChange={handleStatusChange}
                  onConsoleMessage={onConsoleMessage}
                />
                {displayError && (
                  <div className="absolute inset-x-0 bottom-0 z-10 max-h-[40%] overflow-auto bg-background/90 backdrop-blur-sm border-t border-border p-3">
                    <pre className="text-xs text-red-500 whitespace-pre-wrap break-words font-mono leading-relaxed">
                      {displayError}
                    </pre>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {consoleOpen && (
          <div className="h-[200px] shrink-0 border-t border-border">
            <ConsolePanel logs={consoleLogs} onClear={onClearConsole} />
          </div>
        )}
      </div>
    </div>
  );
}
