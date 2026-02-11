export function StatusBar() {
  return (
    <footer className="flex h-7 shrink-0 items-center justify-between border-t border-border bg-background px-3">
      <span className="text-[11px] text-muted-foreground">
        {"Built for "}
        <a
          href="https://blocks.so"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-foreground transition-colors"
        >
          blocks.so
        </a>
      </span>
      <span className="text-[11px] text-muted-foreground">
        {"Built by "}
        <a
          href="https://ephraimduncan.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-foreground transition-colors"
        >
          ephraimduncan
        </a>
        {". The source code is available on "}
        <a
          href="https://github.com/ephraimduncan/shadcn-play"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-foreground transition-colors"
        >
          GitHub
        </a>
        {"."}
      </span>
    </footer>
  );
}
