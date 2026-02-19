import { build } from "esbuild"
import { readdirSync, readFileSync, writeFileSync, mkdirSync } from "fs"
import { join, dirname } from "path"
import { fileURLToPath } from "url"
import { extractClassCandidates } from "../lib/playground/transpile"

const __dirname = dirname(fileURLToPath(import.meta.url))

const UI_DIR = join(__dirname, "..", "components", "ui")
const OUT_DIR = join(__dirname, "..", "public", "playground", "modules")
const TEMP_DIR = join(__dirname, "..", ".tmp-playground-build")

mkdirSync(OUT_DIR, { recursive: true })
mkdirSync(TEMP_DIR, { recursive: true })

const uiFiles = readdirSync(UI_DIR).filter((f) => f.endsWith(".tsx"))

const barrelLines = uiFiles.map((f) => {
  const name = f.replace(".tsx", "")
  return `export * from "../components/ui/${name}";`
})
const barrelPath = join(TEMP_DIR, "ui-barrel.ts")
writeFileSync(barrelPath, barrelLines.join("\n"))

const EXTERNALS = [
  "react",
  "react/*",
  "react-dom",
  "react-dom/*",
  "radix-ui",
  "lucide-react",
  "@tabler/icons-react",
  "class-variance-authority",
  "clsx",
  "tailwind-merge",
  "cmdk",
  "input-otp",
  "embla-carousel-react",
  "react-day-picker",
  "recharts",
  "sonner",
  "vaul",
  "react-resizable-panels",
  "next-themes",
  "jotai",
  "jotai/*",
  "next/link",
  "next/image",
  "@base-ui/react",
  "@/lib/utils",
]

function patchRequireReact(filePath: string) {
  let source = readFileSync(filePath, "utf-8")
  if (source.includes("__require")) {
    source = source
      .replace(/var __require =[\s\S]*?\n\}\);?\n/, "")
      .replace(/__require\("react"\)/g, "__injected_react")
    source = 'import __injected_react from "react";\n' + source
    writeFileSync(filePath, source)
  }
}

function addNamedReexports(filePath: string, moduleId: string) {
  const mod = require(moduleId)
  const names = Object.keys(mod).filter(
    (k) => k !== "default" && k !== "__esModule" && /^[a-zA-Z_$][\w$]*$/.test(k),
  )
  if (names.length === 0) return
  let source = readFileSync(filePath, "utf-8")
  const match = source.match(/^export default ([\w$]+)\(\);?\s*$/m)
  if (!match) return
  const fnName = match[1]
  const reExports = names.map((n) => `export var ${n} = __mod.${n};`).join("\n")
  source = source.replace(
    match[0],
    `var __mod = ${fnName}();\nexport default __mod;\n${reExports}`,
  )
  writeFileSync(filePath, source)
}

async function buildBundles() {
  console.log(`Bundling ${uiFiles.length} UI components...`)

  await build({
    entryPoints: [barrelPath],
    bundle: true,
    format: "esm",
    outfile: join(OUT_DIR, "ui.js"),
    external: EXTERNALS,
    jsx: "automatic",
    target: "es2022",
    minify: false,
    treeShaking: true,
    alias: {
      "@/lib/utils": "./lib/utils",
      "@/components/ui": "./components/ui",
    },
    tsconfig: join(__dirname, "..", "tsconfig.json"),
  })

  console.log(`✓ ui.js`)

  await build({
    entryPoints: ["@base-ui/react"],
    bundle: true,
    format: "esm",
    outfile: join(OUT_DIR, "base-ui.js"),
    external: [
      "react",
      "react/*",
      "react-dom",
      "react-dom/*",
      "use-sync-external-store",
      "use-sync-external-store/*",
    ],
    target: "es2022",
    minify: false,
    treeShaking: true,
    mainFields: ["module", "main"],
  })

  console.log(`✓ base-ui.js`)

  await build({
    entryPoints: ["radix-ui"],
    bundle: true,
    format: "esm",
    outfile: join(OUT_DIR, "radix-ui.js"),
    external: [
      "react",
      "react/*",
      "react-dom",
      "react-dom/*",
      "use-sync-external-store",
      "use-sync-external-store/*",
    ],
    target: "es2022",
    minify: false,
    treeShaking: true,
    mainFields: ["module", "main"],
  })

  console.log(`✓ radix-ui.js`)

  await build({
    entryPoints: [join(__dirname, "..", "lib", "utils.ts")],
    bundle: true,
    format: "esm",
    outfile: join(OUT_DIR, "utils.js"),
    external: ["clsx", "tailwind-merge"],
    target: "es2022",
    minify: false,
  })

  console.log(`✓ utils.js`)

  await build({
    entryPoints: ["react"],
    bundle: true,
    format: "esm",
    outfile: join(OUT_DIR, "react.js"),
    target: "es2022",
    platform: "browser",
    define: { "process.env.NODE_ENV": '"production"' },
    minify: false,
    treeShaking: true,
  })

  addNamedReexports(join(OUT_DIR, "react.js"), "react")
  console.log(`✓ react.js`)

  await build({
    entryPoints: ["react/jsx-runtime"],
    bundle: true,
    format: "esm",
    outfile: join(OUT_DIR, "react-jsx-runtime.js"),
    external: ["react"],
    target: "es2022",
    platform: "browser",
    define: { "process.env.NODE_ENV": '"production"' },
    minify: false,
  })

  addNamedReexports(join(OUT_DIR, "react-jsx-runtime.js"), "react/jsx-runtime")
  console.log(`✓ react-jsx-runtime.js`)

  await build({
    entryPoints: ["react-dom"],
    bundle: true,
    format: "esm",
    outfile: join(OUT_DIR, "react-dom.js"),
    external: ["react", "react/*"],
    target: "es2022",
    platform: "browser",
    define: { "process.env.NODE_ENV": '"production"' },
    minify: false,
  })

  patchRequireReact(join(OUT_DIR, "react-dom.js"))
  addNamedReexports(join(OUT_DIR, "react-dom.js"), "react-dom")
  console.log(`✓ react-dom.js`)

  await build({
    entryPoints: ["react-dom/client"],
    bundle: true,
    format: "esm",
    outfile: join(OUT_DIR, "react-dom-client.js"),
    external: ["react", "react/*"],
    target: "es2022",
    platform: "browser",
    define: { "process.env.NODE_ENV": '"production"' },
    minify: false,
  })

  patchRequireReact(join(OUT_DIR, "react-dom-client.js"))
  addNamedReexports(join(OUT_DIR, "react-dom-client.js"), "react-dom/client")
  console.log(`✓ react-dom-client.js`)

  await build({
    entryPoints: ["clsx"],
    bundle: true,
    format: "esm",
    outfile: join(OUT_DIR, "clsx.js"),
    target: "es2022",
    minify: false,
  })

  console.log(`✓ clsx.js`)

  await build({
    entryPoints: ["tailwind-merge"],
    bundle: true,
    format: "esm",
    outfile: join(OUT_DIR, "tailwind-merge.js"),
    target: "es2022",
    minify: false,
  })

  console.log(`✓ tailwind-merge.js`)

  await build({
    entryPoints: ["class-variance-authority"],
    bundle: true,
    format: "esm",
    outfile: join(OUT_DIR, "cva.js"),
    external: ["clsx"],
    target: "es2022",
    minify: false,
  })

  console.log(`✓ cva.js`)

  writeFileSync(
    join(OUT_DIR, "use-sync-external-store-shim.js"),
    'export { useSyncExternalStore } from "react";\n',
  )

  writeFileSync(
    join(OUT_DIR, "next-link.js"),
    [
      'import React from "react";',
      "const Link = React.forwardRef(function Link(props, ref) {",
      "  const { href, children, ...rest } = props;",
      '  return React.createElement("a", { ...rest, href, ref }, children);',
      "});",
      'Link.displayName = "Link";',
      "export default Link;",
      "",
    ].join("\n"),
  )

  console.log(`✓ next-link.js`)

  writeFileSync(
    join(OUT_DIR, "next-image.js"),
    [
      'import React from "react";',
      "const Image = React.forwardRef(function Image(props, ref) {",
      "  const { src, alt = \"\", width, height, ...rest } = props;",
      "  const resolvedSrc = typeof src === \"string\" ? src : src?.src ?? \"\";",
      '  return React.createElement("img", { ...rest, src: resolvedSrc, alt, width, height, ref });',
      "});",
      'Image.displayName = "Image";',
      "export default Image;",
      "",
    ].join("\n"),
  )

  console.log(`✓ next-image.js`)

  writeFileSync(
    join(OUT_DIR, "use-sync-external-store-with-selector.js"),
    [
      'import { useSyncExternalStore, useRef, useMemo } from "react";',
      "export function useSyncExternalStoreWithSelector(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {",
      "  const getSelection = () => {",
      "    const nextSnapshot = getSnapshot();",
      "    return selector(nextSnapshot);",
      "  };",
      "  const getServerSelection = getServerSnapshot ? () => selector(getServerSnapshot()) : undefined;",
      "  let prevSelection = useRef(undefined);",
      "  const memoizedGetSelection = () => {",
      "    const nextSelection = getSelection();",
      "    if (prevSelection.current !== undefined && isEqual && isEqual(prevSelection.current, nextSelection)) {",
      "      return prevSelection.current;",
      "    }",
      "    prevSelection.current = nextSelection;",
      "    return nextSelection;",
      "  };",
      "  return useSyncExternalStore(subscribe, memoizedGetSelection, getServerSelection);",
      "}",
      "",
    ].join("\n"),
  )

  console.log(`✓ use-sync-external-store shims`)

  await build({
    entryPoints: [join(__dirname, "..", "lib", "playground", "tailwind-worker.ts")],
    bundle: true,
    format: "iife",
    outfile: join(__dirname, "..", "public", "playground", "tailwind-worker.js"),
    target: "es2022",
    minify: false,
    loader: { ".css": "text" },
    alias: {
      "tw-animate-css": join(__dirname, "..", "node_modules", "tw-animate-css", "dist", "tw-animate.css"),
      "shadcn/tailwind.css": join(__dirname, "..", "node_modules", "shadcn", "dist", "tailwind.css"),
    },
  })

  console.log(`✓ tailwind-worker.js`)

  const uiSource = readFileSync(join(OUT_DIR, "ui.js"), "utf-8")
  const uiCandidates = extractClassCandidates(uiSource).sort()
  writeFileSync(
    join(__dirname, "..", "public", "playground", "ui-candidates.json"),
    JSON.stringify(uiCandidates),
  )

  console.log(`✓ ui-candidates.json (${uiCandidates.length} candidates)`)

  const { rmSync } = await import("fs")
  rmSync(TEMP_DIR, { recursive: true, force: true })

  console.log("Build complete.")
}

buildBundles().catch((err) => {
  console.error("Build failed:", err)
  process.exit(1)
})
