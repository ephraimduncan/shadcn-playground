const GOOGLE_FONT_IMPORT_PREFIX = "https://fonts.googleapis.com/css2";
const UNSAFE_IFRAME_IMPORTS = new Set([
  "tailwindcss",
  "tw-animate-css",
  "shadcn/tailwind.css",
]);

const UNSAFE_IFRAME_IMPORT_RE =
  /^\s*@import\s+(?:url\()?\s*["']?([^"'\s)]+)["']?(?:\)\s*)?;?\s*$/i;

const GENERIC_FONT_FAMILIES = new Set([
  "serif",
  "sans-serif",
  "monospace",
  "cursive",
  "fantasy",
  "system-ui",
  "ui-sans-serif",
  "ui-serif",
  "ui-monospace",
  "ui-rounded",
  "emoji",
  "math",
  "fangsong",
  "times",
  "georgia",
  "courier",
  "arial",
  "helvetica",
  "-apple-system",
  "blinkmacsystemfont",
  "segoe ui",
  "trebuchet ms",
  "verdana",
  "new york",
  "lucida sans unicode",
  "lucida grande",
  "tahoma",
  "geneva",
]);

function stripFontQuotes(value: string): string {
  const trimmed = value.trim();
  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1).trim();
  }
  return trimmed;
}

function sanitizeFontName(value: string): string {
  const trimmed = stripFontQuotes(
    value
      .trim()
      .replace(/\s*!important$/i, "")
      .trim(),
  );

  if (!trimmed) return "";
  if (trimmed.startsWith("var(")) return "";
  if (trimmed.includes(")")) return "";

  const normalized = trimmed.toLowerCase();
  if (GENERIC_FONT_FAMILIES.has(normalized)) return "";
  if (trimmed === "inherit" || trimmed === "initial" || trimmed === "unset")
    return "";
  if (!/[a-zA-Z]/.test(trimmed)) return "";

  return trimmed;
}

function splitFontList(value: string): string[] {
  const parts: string[] = [];
  let current = "";
  let quote: "'" | '"' | null = null;
  let escaped = false;

  for (let i = 0; i < value.length; i++) {
    const char = value[i];
    if (escaped) {
      current += char;
      escaped = false;
      continue;
    }

    if (char === "\\") {
      escaped = true;
      current += char;
      continue;
    }

    if (char === quote) {
      quote = null;
      current += char;
      continue;
    }

    if ((char === '"' || char === "'") && !quote) {
      quote = char;
      current += char;
      continue;
    }

    if (char === "," && !quote) {
      parts.push(current);
      current = "";
      continue;
    }

    current += char;
  }

  if (current.trim()) {
    parts.push(current);
  }

  return parts;
}

function extractFontFromDeclaration(value: string): string | null {
  const list = splitFontList(value);
  for (const part of list) {
    const cleaned = sanitizeFontName(part);
    if (cleaned) return cleaned;
  }
  return null;
}

function parseFontImports(css: string): Set<string> {
  const families = new Set<string>();
  const importRegex =
    /@import\s+url\(\s*["']?(https?:\/\/fonts\.googleapis\.com\/css2\?[^"')\s]+)["']?\s*\)/gi;

  for (const match of css.matchAll(importRegex)) {
    const rawUrl = match[1];
    try {
      const params = new URL(rawUrl).searchParams;
      const importedFamilies = params.getAll("family");
      for (const rawFamily of importedFamilies) {
        const decoded = rawFamily.split(":")[0].replace(/\+/g, " ").trim();
        if (decoded) families.add(decoded.toLowerCase());
      }
    } catch {
      continue;
    }
  }

  return families;
}

function stripComments(css: string): string {
  return css.replace(/\/\*[\s\S]*?\*\//g, " ");
}

function sanitizeIframeImports(css: string): string {
  return css
    .split("\n")
    .filter((line) => {
      const match = line.match(UNSAFE_IFRAME_IMPORT_RE);
      if (!match) return true;

      const source = match[1].replace(/["']/g, "");
      return !UNSAFE_IFRAME_IMPORTS.has(source);
    })
    .join("\n");
}

export function extractFontFamilyNamesFromCSS(css: string): string[] {
  const source = stripComments(css);
  const fontNames = new Set<string>();

  const patterns = [
    /--font-(?:sans|serif|mono)\s*:\s*([^;]+);/gi,
    /font-family\s*:\s*([^;]+);/gi,
  ];

  for (const regex of patterns) {
    for (const match of source.matchAll(regex)) {
      const name = extractFontFromDeclaration(match[1]);
      if (name) fontNames.add(name);
    }
  }

  return Array.from(fontNames);
}

function normalizeFamilyQueryValue(name: string): string {
  return encodeURIComponent(name).replace(/%20/g, "+");
}

export function injectGoogleFontImports(css: string): string {
  const sanitized = sanitizeIframeImports(css);
  const existingImports = parseFontImports(sanitized);
  const fontNames = extractFontFamilyNamesFromCSS(sanitized);
  const imports: string[] = [];

  for (const name of fontNames) {
    const normalized = name.toLowerCase();
    if (existingImports.has(normalized)) continue;

    const family = normalizeFamilyQueryValue(name);
    imports.push(
      `@import url("${GOOGLE_FONT_IMPORT_PREFIX}?family=${family}&display=swap");`,
    );
    existingImports.add(normalized);
  }

  if (imports.length === 0) return sanitized;

  return `${imports.join("\n")}\n\n${sanitized}`;
}

export function sanitizeGlobalCSSForPreview(css: string): string {
  return sanitizeIframeImports(css);
}
