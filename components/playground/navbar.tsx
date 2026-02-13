"use client";

import { useState, useCallback } from "react";
import { useTheme } from "next-themes";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  IconCircleHalf2,
  IconShare,
  IconLayoutColumns,
  IconLayoutSidebarRight,
  IconBrandGithub,
  IconLoader2,
} from "@tabler/icons-react";

export type LayoutMode = "horizontal" | "preview-only";

interface NavbarProps {
  layoutMode: LayoutMode;
  onLayoutModeChange: (mode: LayoutMode) => void;
  code: string;
  globalCode: string;
}

export function Navbar({ layoutMode, onLayoutModeChange, code, globalCode }: NavbarProps) {
  const { theme, setTheme } = useTheme();
  const [isSharing, setIsSharing] = useState(false);

  const handleShare = useCallback(async () => {
    setIsSharing(true);

    try {
      const res = await fetch("/api/share", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code, globalCss: globalCode }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error ?? "Failed to share");
      }

      const { id } = await res.json();
      const url = `${window.location.origin}/s/${id}`;

      await navigator.clipboard.writeText(url);
      toast.success("Link copied to clipboard");
    } catch (err) {
      const message = err instanceof Error ? err.message : "Failed to share";
      toast.error(message);
    } finally {
      setIsSharing(false);
    }
  }, [code, globalCode]);

  return (
    <header className="flex h-12 shrink-0 items-center justify-between border-b border-border bg-background px-4">
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            className="size-5"
          >
            <rect width="256" height="256" fill="none" />
            <line
              x1="208"
              y1="128"
              x2="128"
              y2="208"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
            />
            <line
              x1="192"
              y1="40"
              x2="40"
              y2="192"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
            />
          </svg>
          <span className="text-base font-semibold text-foreground tracking-tight">
            shadcn/play
          </span>
        </div>
      </div>

      <div className="flex items-center gap-1">
        <ToggleGroup
          type="single"
          value={layoutMode}
          onValueChange={(value) => {
            if (value) onLayoutModeChange(value as LayoutMode);
          }}
          variant="outline"
          size="sm"
        >
          <Tooltip>
            <TooltipTrigger asChild>
              <ToggleGroupItem value="horizontal" aria-label="Side by side">
                <IconLayoutColumns className="size-3.5" />
              </ToggleGroupItem>
            </TooltipTrigger>
            <TooltipContent>Side by side</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <ToggleGroupItem value="preview-only" aria-label="Preview only">
                <IconLayoutSidebarRight className="size-3.5" />
              </ToggleGroupItem>
            </TooltipTrigger>
            <TooltipContent>Preview only</TooltipContent>
          </Tooltip>
        </ToggleGroup>

        <Separator orientation="vertical" className="mx-1 self-stretch" />

        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon-sm"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
            >
              <IconCircleHalf2 className="size-3.5 text-black dark:text-white" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Toggle theme</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon-sm" asChild>
              <a
                href="https://github.com/ephraimduncan/shadcn-play"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <IconBrandGithub className="size-3.5" />
              </a>
            </Button>
          </TooltipTrigger>
          <TooltipContent>View on GitHub</TooltipContent>
        </Tooltip>

        <Separator orientation="vertical" className="mx-1 self-stretch" />

        <Button
          variant="default"
          size="sm"
          onClick={handleShare}
          disabled={isSharing}
          className="dark:!bg-white dark:!text-black dark:hover:!bg-white/90"
        >
          {isSharing ? (
            <IconLoader2 className="size-3.5 animate-spin" />
          ) : (
            <IconShare className="size-3.5" />
          )}
          {isSharing ? "Sharing…" : "Share"}
        </Button>
      </div>
    </header>
  );
}
