import { build } from "esbuild"
import { readdirSync, writeFileSync, mkdirSync } from "fs"
import { join, dirname } from "path"
import { fileURLToPath } from "url"

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
    entryPoints: [join(__dirname, "..", "lib", "utils.ts")],
    bundle: true,
    format: "esm",
    outfile: join(OUT_DIR, "utils.js"),
    external: ["clsx", "tailwind-merge"],
    target: "es2022",
    minify: false,
  })

  console.log(`✓ utils.js`)

  const { rmSync } = await import("fs")
  rmSync(TEMP_DIR, { recursive: true, force: true })

  console.log("Build complete.")
}

buildBundles().catch((err) => {
  console.error("Build failed:", err)
  process.exit(1)
})
