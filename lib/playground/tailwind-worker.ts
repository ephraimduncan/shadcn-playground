import { compile } from "tailwindcss";
// @ts-expect-error -- esbuild inlines these as text via loader config
import indexCss from "tailwindcss/index.css";
// @ts-expect-error -- esbuild inlines these as text via loader config
import preflightCss from "tailwindcss/preflight.css";
// @ts-expect-error -- esbuild inlines these as text via loader config
import themeCss from "tailwindcss/theme.css";
// @ts-expect-error -- esbuild inlines these as text via loader config
import utilitiesCss from "tailwindcss/utilities.css";
// @ts-expect-error -- esbuild inlines these as text via loader config
import twAnimateCss from "tw-animate-css";
// @ts-expect-error -- esbuild inlines these as text via loader config
import shadcnTailwindCss from "shadcn/tailwind.css";

type CompileRequest = { type: "compile"; candidates: string[]; id: number };
type CompileResponse = { type: "css"; css: string; id: number };
type ReadyMessage = { type: "ready" };
type ErrorMessage = { type: "error"; message: string; id?: number };

const themeConfig = `
@import "tailwindcss";
@import "tw-animate-css";
@import "shadcn/tailwind.css";

@custom-variant dark (&:is(.dark *));

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-sans);
  --font-mono: var(--font-mono);
  --color-sidebar-ring: var(--sidebar-ring);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar: var(--sidebar);
  --color-chart-5: var(--chart-5);
  --color-chart-4: var(--chart-4);
  --color-chart-3: var(--chart-3);
  --color-chart-2: var(--chart-2);
  --color-chart-1: var(--chart-1);
  --color-ring: var(--ring);
  --color-input: var(--input);
  --color-border: var(--border);
  --color-destructive: var(--destructive);
  --color-accent-foreground: var(--accent-foreground);
  --color-accent: var(--accent);
  --color-muted-foreground: var(--muted-foreground);
  --color-muted: var(--muted);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-secondary: var(--secondary);
  --color-primary-foreground: var(--primary-foreground);
  --color-primary: var(--primary);
  --color-popover-foreground: var(--popover-foreground);
  --color-popover: var(--popover);
  --color-card-foreground: var(--card-foreground);
  --color-card: var(--card);
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --radius-2xl: calc(var(--radius) + 8px);
  --radius-3xl: calc(var(--radius) + 12px);
  --radius-4xl: calc(var(--radius) + 16px);
}

@layer base {
  * {
    border-color: var(--color-border);
    outline-color: color-mix(in oklch, var(--color-ring) 50%, transparent);
  }

  body {
    background-color: var(--color-background);
    color: var(--color-foreground);
    font-family: var(--font-sans, system-ui, -apple-system, sans-serif);
  }
}
`;

const stylesheets: Record<string, string> = {
  tailwindcss: indexCss,
  "tailwindcss/preflight": preflightCss,
  "tailwindcss/theme": themeCss,
  "tailwindcss/utilities": utilitiesCss,
  "tw-animate-css": twAnimateCss,
  "shadcn/tailwind.css": shadcnTailwindCss,
};

let compiler: Awaited<ReturnType<typeof compile>> | null = null;
let previousClasses: string[] = [];
let previousCss = "";

async function init() {
  compiler = await compile(themeConfig, {
    base: "/",
    loadStylesheet: async (id: string, base: string) => {
      const content = stylesheets[id];
      if (!content) throw new Error(`Unknown stylesheet: ${id}`);
      return { path: id, base, content };
    },
    loadModule: async () => {
      throw new Error("Loading modules is not supported in the playground");
    },
  });
}

self.onmessage = async (e: MessageEvent<CompileRequest>) => {
  if (e.data.type !== "compile") return;

  const { candidates, id } = e.data;

  try {
    if (!compiler) {
      throw new Error("Compiler not initialized");
    }

    if (
      candidates.length > 0 &&
      candidates.every((c) => previousClasses.includes(c))
    ) {
      self.postMessage({
        type: "css",
        css: previousCss,
        id,
      } satisfies CompileResponse);
      return;
    }

    const css = compiler.build(candidates);
    previousClasses = candidates;
    previousCss = css;
    self.postMessage({ type: "css", css, id } satisfies CompileResponse);
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    self.postMessage({ type: "error", message, id } satisfies ErrorMessage);
  }
};

init()
  .then(() => {
    self.postMessage({ type: "ready" } satisfies ReadyMessage);
  })
  .catch((err) => {
    const message = err instanceof Error ? err.message : String(err);
    self.postMessage({ type: "error", message } satisfies ErrorMessage);
  });
