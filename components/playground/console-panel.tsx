"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { IconTrash, IconX } from "@tabler/icons-react";
import type { ConsoleEntry } from "./preview-iframe";
import { cn } from "@/lib/utils";

type LevelFilter = "all" | "log" | "warn" | "error";

const methodColors: Record<ConsoleEntry["method"], string> = {
  log: "text-foreground",
  info: "text-chart-1",
  warn: "text-warning",
  error: "text-destructive",
};

function formatTime(ts: number): string {
  const d = new Date(ts);
  const h = String(d.getHours()).padStart(2, "0");
  const m = String(d.getMinutes()).padStart(2, "0");
  const s = String(d.getSeconds()).padStart(2, "0");
  const ms = String(d.getMilliseconds()).padStart(3, "0");
  return `${h}:${m}:${s}.${ms}`;
}

interface ConsolePanelProps {
  logs: ConsoleEntry[];
  onClear: () => void;
}

export function ConsolePanel({ logs, onClear }: ConsolePanelProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [level, setLevel] = useState<LevelFilter>("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return logs.filter((entry) => {
      if (level !== "all") {
        if (level === "log" && entry.method !== "log" && entry.method !== "info")
          return false;
        if (level === "warn" && entry.method !== "warn") return false;
        if (level === "error" && entry.method !== "error") return false;
      }
      if (q && !entry.args.join(" ").toLowerCase().includes(q)) return false;
      return true;
    });
  }, [logs, level, query]);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [filtered.length]);

  return (
    <div className="flex h-full flex-col bg-background">
      <div className="flex h-9 shrink-0 items-center gap-2 border-b border-border px-2">
        <span className="text-xs font-medium text-muted-foreground px-1">
          Console
        </span>
        <ToggleGroup
          type="single"
          variant="outline"
          size="sm"
          value={level}
          onValueChange={(value) => value && setLevel(value as LevelFilter)}
        >
          <ToggleGroupItem value="all" className="text-xs h-6 px-2">
            All
          </ToggleGroupItem>
          <ToggleGroupItem value="log" className="text-xs h-6 px-2">
            Log
          </ToggleGroupItem>
          <ToggleGroupItem value="warn" className="text-xs h-6 px-2">
            Warn
          </ToggleGroupItem>
          <ToggleGroupItem value="error" className="text-xs h-6 px-2">
            Error
          </ToggleGroupItem>
        </ToggleGroup>
        <div className="relative flex-1 max-w-xs">
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Filter…"
            aria-label="Filter console"
            className="h-6 text-xs pr-6"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Clear filter"
              className="absolute right-1 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <IconX className="size-3" />
            </button>
          )}
        </div>
        <span className="ml-auto text-xs text-muted-foreground tabular-nums">
          {filtered.length}/{logs.length}
        </span>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon-sm"
              aria-label="Clear console"
              onClick={onClear}
            >
              <IconTrash className="size-3" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Clear</TooltipContent>
        </Tooltip>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-auto p-2">
        {filtered.length === 0 ? (
          <p className="text-xs text-muted-foreground/60 px-1 py-0.5">
            {logs.length === 0 ? "No logs yet" : "No matches"}
          </p>
        ) : (
          filtered.map((entry) => (
            <div
              key={entry.id}
              className={cn(
                "flex gap-2 px-1 py-0.5 text-xs font-mono leading-relaxed",
                methodColors[entry.method],
              )}
            >
              <span className="shrink-0 text-muted-foreground/60 tabular-nums">
                {formatTime(entry.timestamp)}
              </span>
              <span className="whitespace-pre-wrap break-all">
                {entry.args.join(" ")}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
