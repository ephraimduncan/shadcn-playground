"use client";

import { useState, useCallback } from "react";
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

type Viewport = "desktop" | "tablet" | "mobile";

const viewportWidths: Record<Viewport, string> = {
  desktop: "100%",
  tablet: "768px",
  mobile: "375px",
};

export function PreviewPanel() {
  const [viewport, setViewport] = useState<Viewport>("desktop");
  const [refreshKey, setRefreshKey] = useState(0);

  const handleRefresh = useCallback(() => {
    setRefreshKey((k) => k + 1);
  }, []);

  return (
    <div className="flex h-full flex-col bg-background">
      <div className="flex h-10 shrink-0 items-center justify-between border-b border-border px-3">
        <span className="text-xs font-medium text-muted-foreground">
          Preview
        </span>

        <div className="flex items-center gap-1">
          <ToggleGroup
            type="single"
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
        className="flex-1 overflow-auto"
        style={{
          backgroundImage:
            "radial-gradient(circle, oklch(0.5 0 0 / 15%) 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      >
        <div
          className="mx-auto h-full transition-all duration-300"
          style={{ width: viewportWidths[viewport] }}
        >
          <div
            key={refreshKey}
            className="flex h-full items-center justify-center p-8"
          >
            <SamplePreview />
          </div>
        </div>
      </div>
    </div>
  );
}
