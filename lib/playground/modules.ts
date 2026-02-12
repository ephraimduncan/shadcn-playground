const CDN = "https://esm.sh"
const REACT_VERSION = "19.1.0"
const RADIX_VERSION = "1.4.3"

const UI_COMPONENT_NAMES = [
  "accordion",
  "alert",
  "alert-dialog",
  "aspect-ratio",
  "avatar",
  "badge",
  "breadcrumb",
  "button",
  "button-group",
  "calendar",
  "card",
  "carousel",
  "chart",
  "checkbox",
  "collapsible",
  "combobox",
  "command",
  "context-menu",
  "dialog",
  "direction",
  "drawer",
  "dropdown-menu",
  "empty",
  "example",
  "field",
  "hover-card",
  "input",
  "input-group",
  "input-otp",
  "item",
  "kbd",
  "label",
  "menubar",
  "native-select",
  "navigation-menu",
  "pagination",
  "popover",
  "progress",
  "radio-group",
  "resizable",
  "scroll-area",
  "select",
  "separator",
  "sheet",
  "sidebar",
  "skeleton",
  "slider",
  "sonner",
  "spinner",
  "switch",
  "table",
  "tabs",
  "textarea",
  "toggle",
  "toggle-group",
  "tooltip",
] as const

const uiImportEntries: Record<string, string> = {}
for (const name of UI_COMPONENT_NAMES) {
  uiImportEntries[`@/components/ui/${name}`] = "/playground/modules/ui.js"
}

const reactExternal = `?external=react,react-dom`

export const importMap = {
  imports: {
    "react": `${CDN}/react@${REACT_VERSION}`,
    "react/": `${CDN}/react@${REACT_VERSION}/`,
    "react-dom": `${CDN}/react-dom@${REACT_VERSION}`,
    "react-dom/": `${CDN}/react-dom@${REACT_VERSION}/`,
    "radix-ui": `${CDN}/radix-ui@${RADIX_VERSION}${reactExternal}`,
    "lucide-react": `${CDN}/lucide-react@0.469.0${reactExternal}`,
    "@tabler/icons-react": `${CDN}/@tabler/icons-react@3.30.0${reactExternal}`,
    "class-variance-authority": `${CDN}/class-variance-authority@0.7.1`,
    "clsx": `${CDN}/clsx@2.1.1`,
    "tailwind-merge": `${CDN}/tailwind-merge@3.4.0`,
    "cmdk": `${CDN}/cmdk@1.1.1${reactExternal}`,
    "input-otp": `${CDN}/input-otp@1.4.2${reactExternal}`,
    "embla-carousel-react": `${CDN}/embla-carousel-react@8.6.0${reactExternal}`,
    "react-day-picker": `${CDN}/react-day-picker@9.13.2${reactExternal}`,
    "recharts": `${CDN}/recharts@2.15.4${reactExternal}`,
    "sonner": `${CDN}/sonner@2.0.7${reactExternal}`,
    "vaul": `${CDN}/vaul@1.1.2${reactExternal}`,
    "use-sync-external-store": `${CDN}/use-sync-external-store@1.6.0${reactExternal}`,
    "use-sync-external-store/shim": `${CDN}/use-sync-external-store@1.6.0/shim${reactExternal}`,
    "use-sync-external-store/shim/index.js": `${CDN}/use-sync-external-store@1.6.0/shim/index.js${reactExternal}`,
    "use-sync-external-store/shim/with-selector": `${CDN}/use-sync-external-store@1.6.0/shim/with-selector${reactExternal}`,
    "use-sync-external-store/shim/with-selector.js": `${CDN}/use-sync-external-store@1.6.0/shim/with-selector.js${reactExternal}`,
    "react-resizable-panels": `${CDN}/react-resizable-panels@4.6.2${reactExternal}`,
    "next-themes": `${CDN}/next-themes@0.4.6${reactExternal}`,
    "@base-ui/react": "/playground/modules/base-ui.js",
    "@/lib/utils": "/playground/modules/utils.js",
    ...uiImportEntries,
  },
}

const pinnedSpecifiers = new Set(Object.keys(importMap.imports))

function isLocalSpecifier(s: string): boolean {
  return (
    s.startsWith("@/") ||
    s.startsWith("./") ||
    s.startsWith("../") ||
    s.startsWith("/")
  )
}

const FROM_REGEX = /(from\s+["'])([^"']+)(["'])/g
const DYNAMIC_IMPORT_REGEX = /(import\s*\(\s*["'])([^"']+)(["']\s*\))/g

export function rewriteBareImports(js: string): string {
  function normalize(specifier: string): string {
    // Base UI snippets are commonly imported via subpaths (e.g. @base-ui/react/dialog).
    // We collapse these to the pre-bundled local module for faster first render.
    if (specifier.startsWith("@base-ui/react/")) return "@base-ui/react"
    return specifier
  }

  function rewrite(specifier: string): string {
    const normalized = normalize(specifier)
    if (pinnedSpecifiers.has(normalized)) return normalized
    if (isLocalSpecifier(normalized)) return normalized
    return `${CDN}/${normalized}${reactExternal}`
  }

  return js
    .replace(
      FROM_REGEX,
      (_, pre, spec, post) => `${pre}${rewrite(spec)}${post}`,
    )
    .replace(
      DYNAMIC_IMPORT_REGEX,
      (_, pre, spec, post) => `${pre}${rewrite(spec)}${post}`,
    )
}
