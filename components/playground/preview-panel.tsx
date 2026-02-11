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
} from "@tabler/icons-react";
import { SamplePreview } from "./sample-preview";
import { cn } from "@/lib/utils";

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
    contentPadding: "32px",
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

export function PreviewPanel() {
  const [viewport, setViewport] = useState<Viewport>("desktop");
  const [refreshKey, setRefreshKey] = useState(0);
  const [availableSize, setAvailableSize] = useState({ width: 0, height: 0 });
  const activeViewportConfig = viewportConfigs[viewport];
  const viewportContainerRef = useRef<HTMLDivElement | null>(null);

  const handleRefresh = useCallback(() => {
    setRefreshKey((k) => k + 1);
  }, []);

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
        <span className="text-xs font-medium text-muted-foreground">
          Preview
        </span>

        <div className="flex items-center gap-1">
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

      <div
        className="flex-1 overflow-hidden"
        style={{
          backgroundImage:
            "radial-gradient(circle, oklch(0.5 0 0 / 15%) 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      >
        <div
          ref={viewportContainerRef}
          className="flex h-full w-full items-center justify-center p-4"
        >
          <div
            className="origin-center transition-[width,height,transform] duration-300"
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
              key={refreshKey}
              className={cn(
                "flex h-full items-center justify-center",
                activeViewportConfig.showBoundary &&
                  "rounded-xl border border-border bg-background shadow-sm",
              )}
              style={{ padding: activeViewportConfig.contentPadding }}
            >
              <SamplePreview />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
