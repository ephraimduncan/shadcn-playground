"use client";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  IconSun,
  IconMoon,
  IconShare,
  IconLayoutColumns,
  IconLayoutSidebarRight,
  IconBrandGithub,
} from "@tabler/icons-react";

export type LayoutMode = "horizontal" | "preview-only";

interface NavbarProps {
  layoutMode: LayoutMode;
  onLayoutModeChange: (mode: LayoutMode) => void;
}

export function Navbar({ layoutMode, onLayoutModeChange }: NavbarProps) {
  const { theme, setTheme } = useTheme();

  return (
    <header className="flex h-12 shrink-0 items-center justify-between border-b border-border bg-background px-4">
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            className="text-foreground"
          >
            <path
              d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-sm font-semibold text-foreground tracking-tight">
            shadcn/ui
          </span>
        </div>
        <Badge variant="secondary" className="font-mono text-[10px]">
          PLAY
        </Badge>
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
              <IconSun className="size-3.5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <IconMoon className="absolute size-3.5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Toggle theme</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon-sm" asChild>
              <a
                href="https://github.com/shadcn-ui/ui"
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

        <Button variant="default" size="sm">
          <IconShare className="size-3.5" />
          Share
        </Button>
      </div>
    </header>
  );
}
