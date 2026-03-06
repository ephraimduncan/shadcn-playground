type CSSVarEntries = Record<string, string>;

export type RegistryTheme = {
  cssVars: {
    theme?: CSSVarEntries;
    light?: CSSVarEntries;
    dark?: CSSVarEntries;
  };
  css?: Record<string, Record<string, Record<string, string>>>;
};

export const SHADCN_COLOR_VARS = new Set([
  "background",
  "foreground",
  "card",
  "card-foreground",
  "popover",
  "popover-foreground",
  "primary",
  "primary-foreground",
  "secondary",
  "secondary-foreground",
  "muted",
  "muted-foreground",
  "accent",
  "accent-foreground",
  "destructive",
  "destructive-foreground",
  "border",
  "input",
  "ring",
  "chart-1",
  "chart-2",
  "chart-3",
  "chart-4",
  "chart-5",
  "sidebar",
  "sidebar-foreground",
  "sidebar-primary",
  "sidebar-primary-foreground",
  "sidebar-accent",
  "sidebar-accent-foreground",
  "sidebar-border",
  "sidebar-ring",
]);

export function isRegistryTheme(value: unknown): value is RegistryTheme {
  if (!value || typeof value !== "object") return false;
  const item = value as Record<string, unknown>;
  if (!item.cssVars || typeof item.cssVars !== "object") return false;
  const vars = item.cssVars as Record<string, unknown>;
  return (
    (typeof vars.light === "object" && vars.light !== null) ||
    (typeof vars.dark === "object" && vars.dark !== null)
  );
}

export function buildGlobalCSSFromTheme(item: RegistryTheme): string {
  const light = item.cssVars.light ?? {};
  const dark = item.cssVars.dark ?? {};
  const theme = item.cssVars.theme ?? {};

  const themeInline = new Map<string, string>();

  for (const key of Object.keys(light)) {
    if (SHADCN_COLOR_VARS.has(key)) {
      themeInline.set(`--color-${key}`, `var(--${key})`);
    }
  }

  for (const key of ["font-sans", "font-mono", "font-serif"]) {
    if (key in light || key in theme) {
      themeInline.set(`--${key}`, `var(--${key})`);
    }
  }

  if ("radius" in light || "radius" in theme) {
    themeInline.set("--radius-sm", "calc(var(--radius) - 4px)");
    themeInline.set("--radius-md", "calc(var(--radius) - 2px)");
    themeInline.set("--radius-lg", "var(--radius)");
    themeInline.set("--radius-xl", "calc(var(--radius) + 4px)");
    themeInline.set("--radius-2xl", "calc(var(--radius) + 8px)");
    themeInline.set("--radius-3xl", "calc(var(--radius) + 12px)");
    themeInline.set("--radius-4xl", "calc(var(--radius) + 16px)");
  }

  for (const key of Object.keys(light)) {
    if (
      key.startsWith("shadow-") ||
      key === "shadow" ||
      key === "spacing" ||
      key.startsWith("tracking-")
    ) {
      themeInline.set(`--${key}`, `var(--${key})`);
    }
  }

  for (const [key, value] of Object.entries(theme)) {
    if (SHADCN_COLOR_VARS.has(key)) continue;
    if (key === "radius") continue;
    if (key.startsWith("font-")) continue;
    themeInline.set(`--${key}`, String(value));
  }

  const themeBlock = Array.from(themeInline.entries())
    .map(([prop, value]) => `  ${prop}: ${value};`)
    .join("\n");

  const rootBlock = Object.entries(light)
    .map(([key, value]) => `  --${key}: ${value};`)
    .join("\n");

  const darkBlock = Object.entries(dark)
    .map(([key, value]) => `  --${key}: ${value};`)
    .join("\n");

  let extraLayerRules = "";
  if (item.css) {
    const layerBase = item.css["@layer base"];
    if (layerBase) {
      for (const [selector, props] of Object.entries(layerBase)) {
        extraLayerRules += `  ${selector} {\n`;
        for (const [prop, val] of Object.entries(props)) {
          extraLayerRules += `    ${prop}: ${val};\n`;
        }
        extraLayerRules += `  }\n`;
      }
    }
  }

  return `@import "tailwindcss";
@import "tw-animate-css";
@import "shadcn/tailwind.css";

@custom-variant dark (&:is(.dark *));

@theme inline {
${themeBlock}
}

:root {
${rootBlock}
}

.dark {
${darkBlock}
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
    font-family: var(--font-sans, system-ui, -apple-system, sans-serif);
  }
${extraLayerRules}}
`;
}
