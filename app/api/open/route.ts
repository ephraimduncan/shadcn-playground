import { NextResponse } from "next/server";
import { customAlphabet } from "nanoid";
import { getDb } from "@/lib/db";
import { snippets } from "@/lib/db/schema";
import { ensureSnippetsGlobalCssColumn } from "@/lib/db/snippets";

const nanoid = customAlphabet(
  "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
  10,
);

const MAX_CODE_SIZE = 100 * 1024;
const FETCH_TIMEOUT_MS = 8000;
const PRIVATE_HOST_PATTERNS = [
  /^localhost$/i,
  /^127\./,
  /^10\./,
  /^192\.168\./,
  /^169\.254\./,
  /^::1$/i,
  /^\[::1\]$/i,
  /^fc/i,
  /^fd/i,
];

type RegistryFile = {
  path?: unknown;
  content?: unknown;
  type?: unknown;
};

type RegistryItem = {
  files?: unknown;
};

type CSSVarEntries = Record<string, string>;

type RegistryTheme = {
  cssVars: {
    theme?: CSSVarEntries;
    light?: CSSVarEntries;
    dark?: CSSVarEntries;
  };
  css?: Record<string, Record<string, Record<string, string>>>;
};

const REGISTRY_UI_IMPORT_REGEX = /@\/registry\/[^/]+\/ui\//g;
const REGISTRY_UTILS_IMPORT_REGEX = /@\/registry\/[^/]+\/lib\/utils/g;
const REGISTRY_INTERNAL_COMPONENT_IMPORT_REGEX =
  /@\/registry\/[^/]+\/(blocks|components|examples)\//;

function isHttpUrl(value: string): boolean {
  try {
    const parsed = new URL(value);
    return parsed.protocol === "https:" || parsed.protocol === "http:";
  } catch {
    return false;
  }
}

function isPrivateHost(hostname: string): boolean {
  const normalized = hostname.trim().toLowerCase();

  if (PRIVATE_HOST_PATTERNS.some((pattern) => pattern.test(normalized))) {
    return true;
  }

  if (/^172\.(1[6-9]|2\d|3[0-1])\./.test(normalized)) {
    return true;
  }

  if (normalized.endsWith(".local")) {
    return true;
  }

  return false;
}

function isRegistryFile(value: unknown): value is RegistryFile {
  if (!value || typeof value !== "object") return false;
  const file = value as Record<string, unknown>;
  return (
    typeof file.path === "string" &&
    typeof file.type === "string" &&
    (file.content === undefined || typeof file.content === "string")
  );
}

function isRegistryItem(value: unknown): value is RegistryItem {
  if (!value || typeof value !== "object") return false;
  const item = value as Record<string, unknown>;
  if (!Array.isArray(item.files)) return false;
  return item.files.every((file) => isRegistryFile(file));
}

function scoreRegistryFile(file: RegistryFile): number {
  const path = typeof file.path === "string" ? file.path : "";
  const type = typeof file.type === "string" ? file.type : "";
  const content = typeof file.content === "string" ? file.content : "";

  let score = content.length;

  if (type === "registry:component") score += 100_000;
  if (type === "registry:ui") score += 95_000;
  if (type === "registry:block") score += 90_000;
  if (type === "registry:page") score += 40_000;

  if (path.includes("/components/")) score += 25_000;
  if (path.endsWith("/page.tsx")) score -= 20_000;
  if (REGISTRY_INTERNAL_COMPONENT_IMPORT_REGEX.test(content)) score -= 80_000;

  return score;
}

function rewriteRegistryImports(source: string): string {
  return source
    .replace(REGISTRY_UI_IMPORT_REGEX, "@/components/ui/")
    .replace(REGISTRY_UTILS_IMPORT_REGEX, "@/lib/utils");
}

function isRegistryTheme(value: unknown): value is RegistryTheme {
  if (!value || typeof value !== "object") return false;
  const item = value as Record<string, unknown>;
  if (!item.cssVars || typeof item.cssVars !== "object") return false;
  const vars = item.cssVars as Record<string, unknown>;
  return (
    (typeof vars.light === "object" && vars.light !== null) ||
    (typeof vars.dark === "object" && vars.dark !== null)
  );
}

const SHADCN_COLOR_VARS = new Set([
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

function buildGlobalCSSFromTheme(item: RegistryTheme): string {
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

function pickBestPlayableFile(item: RegistryItem): RegistryFile | null {
  const files = item.files as RegistryFile[];
  const playable = files.filter((file) => {
    if (typeof file.content !== "string" || file.content.trim().length === 0) {
      return false;
    }

    if (typeof file.path !== "string") {
      return false;
    }

    return /\.(tsx|ts|jsx|js)$/.test(file.path);
  });

  if (playable.length === 0) return null;

  const sorted = [...playable].sort(
    (a, b) => scoreRegistryFile(b) - scoreRegistryFile(a),
  );

  return sorted[0];
}

async function fetchRegistryJSON(url: string): Promise<unknown> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);

  try {
    const response = await fetch(url, {
      method: "GET",
      redirect: "follow",
      headers: {
        Accept: "application/json",
      },
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new Error(`Registry request failed with ${response.status}`);
    }

    return (await response.json()) as unknown;
  } finally {
    clearTimeout(timeout);
  }
}

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const registryUrl = requestUrl.searchParams.get("url");

  if (!registryUrl || !isHttpUrl(registryUrl)) {
    return NextResponse.json(
      {
        error: "Invalid registry URL",
        message:
          "Provide a valid http(s) registry item URL in the `url` query param.",
      },
      { status: 400 },
    );
  }

  const parsedRegistryUrl = new URL(registryUrl);
  if (isPrivateHost(parsedRegistryUrl.hostname)) {
    return NextResponse.json(
      {
        error: "Blocked registry host",
        message: "Private or localhost registry hosts are not allowed.",
      },
      { status: 400 },
    );
  }

  let payload: unknown;
  try {
    payload = await fetchRegistryJSON(parsedRegistryUrl.toString());
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to fetch registry item";
    return NextResponse.json(
      {
        error: "Unable to load registry item",
        message,
      },
      { status: 400 },
    );
  }

  const hasFiles = isRegistryItem(payload);
  const hasTheme = isRegistryTheme(payload);

  if (!hasFiles && !hasTheme) {
    return NextResponse.json(
      {
        error: "Invalid registry item",
        message:
          "The URL did not return a valid registry item with files or theme variables.",
      },
      { status: 400 },
    );
  }

  let finalCode: string | undefined;
  let finalCss: string | undefined;

  if (hasFiles) {
    const selectedFile = pickBestPlayableFile(payload as RegistryItem);

    if (!selectedFile || typeof selectedFile.content !== "string") {
      if (!hasTheme) {
        return NextResponse.json(
          {
            error: "No playable file found",
            message:
              "This registry item does not include any file content we can preview.",
          },
          { status: 422 },
        );
      }
    } else {
      const code = rewriteRegistryImports(selectedFile.content);

      if (code.length > MAX_CODE_SIZE) {
        return NextResponse.json(
          {
            error: "Code exceeds limit",
            message:
              "Selected registry file exceeds the 100KB playground limit.",
          },
          { status: 413 },
        );
      }

      finalCode = code;
    }
  }

  if (hasTheme) {
    const css = buildGlobalCSSFromTheme(payload as RegistryTheme);

    if (css.length > MAX_CODE_SIZE) {
      return NextResponse.json(
        {
          error: "CSS exceeds limit",
          message: "Generated theme CSS exceeds the 100KB playground limit.",
        },
        { status: 413 },
      );
    }

    finalCss = css;
  }

  await ensureSnippetsGlobalCssColumn();

  const id = nanoid();
  const db = getDb();
  await db.insert(snippets).values({
    id,
    code: finalCode ?? "",
    globalCss: finalCss,
    source: "open",
  });

  return NextResponse.redirect(new URL(`/?open=${id}`, request.url));
}
