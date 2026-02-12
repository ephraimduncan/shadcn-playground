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
  "@base-ui/react",
  "@/lib/utils",
]

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
      // Keep these shims external. Their npm package only ships CJS entrypoints,
      // which otherwise emit dynamic require() in browser ESM output.
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
