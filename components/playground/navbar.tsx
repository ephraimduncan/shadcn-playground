"use client";

import { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Kbd, KbdGroup } from "@/components/ui/kbd";
import {
  IconSun,
  IconMoon,
  IconShare,
  IconCheck,
  IconLayoutColumns,
  IconLayoutSidebarRight,
  IconBrandGithub,
  IconLoader2,
} from "@tabler/icons-react";
import dynamic from "next/dynamic";
import { ShadcnExamplePicker } from "@/components/playground/shadcn-example-picker";

const PresetPicker = dynamic(
  () =>
    import("@/components/playground/preset-picker").then(
      (m) => m.PresetPicker,
    ),
  { ssr: false },
);

export type LayoutMode = "horizontal" | "preview-only";

interface NavbarProps {
  layoutMode: LayoutMode;
  onLayoutModeChange: (mode: LayoutMode) => void;
  code: string;
  globalCode: string;
  onReplaceCode: (nextCode: string) => void;
  onReplaceGlobalCSS: (css: string) => void;
  onSharedUrl?: (url: string) => void;
  registerShareTrigger?: (trigger: (() => void) | null) => void;
}

export function Navbar({
  layoutMode,
  onLayoutModeChange,
  code,
  globalCode,
  onReplaceCode,
  onReplaceGlobalCSS,
  onSharedUrl,
  registerShareTrigger,
}: NavbarProps) {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [isSharing, setIsSharing] = useState(false);
  const [justShared, setJustShared] = useState(false);

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
      onSharedUrl?.(url);
      setJustShared(true);
      toast.success("Link copied to clipboard");
      setTimeout(() => setJustShared(false), 2000);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Failed to share";
      toast.error(message);
    } finally {
      setIsSharing(false);
    }
  }, [code, globalCode, onSharedUrl]);

  useEffect(() => {
    registerShareTrigger?.(handleShare);
    return () => registerShareTrigger?.(null);
  }, [handleShare, registerShareTrigger]);

  const isDark = (resolvedTheme ?? theme) === "dark";

  return (
    <header className="flex h-12 shrink-0 items-center justify-between border-b border-border bg-background px-4">
      <div className="flex items-center gap-3">
        <Link
          href="/"
          aria-label="Homepage"
          className="flex items-center gap-2 rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            className="size-5"
            aria-hidden="true"
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
        </Link>
        <span
          aria-hidden="true"
          className="h-4 w-px bg-border/60 self-center"
        />
        <ShadcnExamplePicker code={code} onReplaceCode={onReplaceCode} />
        <PresetPicker globalCSS={globalCode} onApplyPreset={onReplaceGlobalCSS} />
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

        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon-sm"
              onClick={() => setTheme(isDark ? "light" : "dark")}
              aria-label="Toggle theme"
            >
              {isDark ? (
                <IconSun className="size-3.5 text-foreground" />
              ) : (
                <IconMoon className="size-3.5 text-foreground" />
              )}
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <KbdGroup>
              Toggle theme
              <Kbd>⌘</Kbd>
              <Kbd>.</Kbd>
            </KbdGroup>
          </TooltipContent>
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

        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="default"
              size="sm"
              onClick={handleShare}
              disabled={isSharing}
              className="ml-1"
            >
              {isSharing ? (
                <IconLoader2 className="size-3.5 animate-spin" />
              ) : justShared ? (
                <IconCheck className="size-3.5" />
              ) : (
                <IconShare className="size-3.5" />
              )}
              {isSharing ? "Sharing…" : justShared ? "Copied" : "Share"}
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <KbdGroup>
              Copy share link
              <Kbd>⌘</Kbd>
              <Kbd>⇧</Kbd>
              <Kbd>C</Kbd>
            </KbdGroup>
          </TooltipContent>
        </Tooltip>
      </div>
    </header>
  );
}
