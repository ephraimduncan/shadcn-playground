"use client";

interface StatusBarProps {
  cursorLine: number;
  cursorColumn: number;
}

export function StatusBar({ cursorLine, cursorColumn }: StatusBarProps) {
  return (
    <footer className="flex h-6 shrink-0 items-center justify-between border-t border-border bg-background px-3">
      <div className="flex items-center gap-3">
        <span className="text-[11px] text-muted-foreground font-mono">
          {"Ln " + cursorLine + ", Col " + cursorColumn}
        </span>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-[11px] text-muted-foreground font-mono">
          TypeScript JSX
        </span>
        <span className="text-[11px] text-muted-foreground font-mono">
          UTF-8
        </span>
      </div>
    </footer>
  );
}
