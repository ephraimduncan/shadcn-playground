"use client";

import { useTheme } from "next-themes";
import { IconCircleFilled, IconSun, IconMoon } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

interface StatusBarProps {
  presetName: string | null;
  cursorLine: number;
  cursorColumn: number;
  consoleErrorCount: number;
  activeFilename: string;
}

export function StatusBar({
  presetName,
  cursorLine,
  cursorColumn,
  consoleErrorCount,
  activeFilename,
}: StatusBarProps) {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <footer className="flex h-7 shrink-0 items-center justify-between border-t border-border bg-background px-3 text-xs text-muted-foreground">
      <div className="flex items-center gap-3">
        <span>{activeFilename}</span>
        <span
          className="tabular-nums"
          aria-label={`Line ${cursorLine}, column ${cursorColumn}`}
        >
          Ln <span className="text-foreground">{cursorLine}</span>, Col{" "}
          <span className="text-foreground">{cursorColumn}</span>
        </span>
        <span className="flex items-center gap-1">
          {isDark ? (
            <IconMoon className="size-3" aria-hidden="true" />
          ) : (
            <IconSun className="size-3" aria-hidden="true" />
          )}
          <span className="capitalize">{isDark ? "Dark" : "Light"}</span>
        </span>
        <span>
          Preset:{" "}
          <span className="text-foreground">{presetName ?? "Custom"}</span>
        </span>
        <span
          className={cn(
            "flex items-center gap-1 tabular-nums",
            consoleErrorCount > 0 && "text-destructive",
          )}
          aria-label={`${consoleErrorCount} console error${consoleErrorCount === 1 ? "" : "s"}`}
        >
          <IconCircleFilled
            className={cn(
              "size-2",
              consoleErrorCount > 0
                ? "text-destructive"
                : "text-muted-foreground/40",
            )}
            aria-hidden="true"
          />
          {consoleErrorCount} error{consoleErrorCount === 1 ? "" : "s"}
        </span>
      </div>
      <div className="flex items-center gap-1">
        <a
          href="https://blocks.so"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-foreground transition-colors"
        >
          blocks.so
        </a>
        <span aria-hidden="true">·</span>
        <span>by </span>
        <a
          href="https://ephraimduncan.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-foreground transition-colors"
        >
          ephraimduncan
        </a>
        <span aria-hidden="true">·</span>
        <a
          href="https://github.com/ephraimduncan/shadcn-play"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-foreground transition-colors"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}
