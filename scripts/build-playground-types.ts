import ts from "typescript";
import {
  readdirSync,
  readFileSync,
  writeFileSync,
  mkdirSync,
  existsSync,
} from "fs";
import { join, dirname, basename } from "path";
import { fileURLToPath } from "url";
import { importMap } from "../lib/playground/modules";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const UI_DIR = join(ROOT, "components", "ui");
const OUT_DIR = join(ROOT, ".generated", "playground-types");

mkdirSync(OUT_DIR, { recursive: true });

// ── 1. Generate .d.ts for UI components + lib/utils ──

const uiFiles = readdirSync(UI_DIR)
  .filter((f) => f.endsWith(".tsx"))
  .map((f) => join(UI_DIR, f));

const utilsFile = join(ROOT, "lib", "utils.ts");

const program = ts.createProgram([...uiFiles, utilsFile], {
  declaration: true,
  emitDeclarationOnly: true,
  jsx: ts.JsxEmit.ReactJSX,
  module: ts.ModuleKind.ESNext,
  moduleResolution: ts.ModuleResolutionKind.Bundler,
  target: ts.ScriptTarget.ESNext,
  esModuleInterop: true,
  skipLibCheck: true,
  strict: false,
  paths: { "@/*": ["./*"] },
  baseUrl: ROOT,
});

const declFiles: Record<string, string> = {};

program.emit(undefined, (fileName, text) => {
  declFiles[fileName] = text;
});

// ── 2. Post-process declarations ──

const EXTERNAL_PKGS = [
  "radix-ui",
  "cmdk",
  "input-otp",
  "embla-carousel-react",
  "react-day-picker",
  "recharts",
  "sonner",
  "vaul",
  "react-resizable-panels",
  "next-themes",
  "@base-ui\\/react",
  "@tabler\\/icons-react",
  "lucide-react",
  "date-fns",
];
const EXTERNAL_RE = new RegExp(
  `^import .+ from ["'](${EXTERNAL_PKGS.join("|")})[^"']*["'];?\\s*$`,
  "gm"
);

const VARIANT_PROPS_ALIAS = `type VariantProps<T extends (...args: any) => any> = Omit<NonNullable<Parameters<T>[0]>, "class" | "className">;`;

function simplifyExternalRefs(dts: string): string {
  let result = dts;

  // Replace CVA imports with an inlined VariantProps alias so generic stays resolvable.
  result = result.replace(
    /import\s*\{\s*type\s+VariantProps\s*\}\s*from\s*["']class-variance-authority["'];?\s*/g,
    `${VARIANT_PROPS_ALIAS}\n`
  );
  result = result.replace(
    /import\s+type\s*\{\s*VariantProps\s*\}\s*from\s*["']class-variance-authority["'];?\s*/g,
    `${VARIANT_PROPS_ALIAS}\n`
  );
  result = result.replace(
    /import\(["']class-variance-authority[^"']*["']\)(?:\.\w+)*/g,
    "{}"
  );

  result = result.replace(EXTERNAL_RE, "");
  result = result.replace(
    /import\(["']react\/jsx-runtime["']\)\.JSX\.Element/g,
    "React.JSX.Element"
  );

  // Radix / primitive prop refs → permissive: keep div completion, accept any extra prop.
  const permissive = "(React.ComponentProps<'div'> & Record<string, any>)";
  result = result.replace(
    /React\.ComponentProps<typeof \w+\.\w+>/g,
    permissive
  );
  result = result.replace(
    /React\.ComponentProps<typeof (?:OTPInput|Direction)>/g,
    permissive
  );
  result = result.replace(
    /(?:React\.)?ComponentPropsWithoutRef<typeof \w+\.\w+>/g,
    permissive
  );

  result = result.replace(/typeof \w+\.\w+/g, "any");
  result = result.replace(/\w+Primitive\.\w+/g, "any");
  result = result.replace(/\bDirection\.\w+/g, "any");
  result = result.replace(/\bToasterProps\b/g, "any");
  result = result.replace(/\bOTPInput\b/g, "any");

  const importRefRe = new RegExp(
    `import\\(["'](?:${EXTERNAL_PKGS.join("|")})[^"']*["']\\)(?:\\.\\w+)*`,
    "g"
  );
  result = result.replace(importRefRe, "any");

  return result;
}

// Build module declarations for each UI component
const uiModuleDecls: Record<string, string> = {};
let utilsDts = "";

for (const [filePath, content] of Object.entries(declFiles)) {
  const rel = filePath.replace(ROOT + "/", "").replace(/\\/g, "/");

  if (rel.startsWith("components/ui/")) {
    const name = basename(rel, ".d.ts");
    const moduleName = `@/components/ui/${name}`;
    let processed = simplifyExternalRefs(content);
    processed = processed.replace(
      /import .+ from ["']@\/lib\/utils["'];?\s*/g,
      ""
    );
    if (
      processed.includes("React.") &&
      !processed.includes('import * as React from "react"')
    ) {
      processed = 'import * as React from "react";\n' + processed;
    }
    uiModuleDecls[moduleName] = processed;
  } else if (rel === "lib/utils.d.ts") {
    let processed = content;
    processed = processed.replace(
      /import .+ from ["']clsx["'];?\s*/g,
      "type ClassValue = string | number | bigint | boolean | ClassArray | ClassDictionary | null | undefined;\ntype ClassDictionary = Record<string, any>;\ntype ClassArray = ClassValue[];\n"
    );
    processed = processed.replace(
      /import .+ from ["']tailwind-merge["'];?\s*/g,
      ""
    );
    utilsDts = processed;
  }
}

const uiModulesBundle = Object.entries(uiModuleDecls)
  .map(([name, content]) => `declare module "${name}" {\n${content}\n}`)
  .join("\n\n");

const utilsModule = `declare module "@/lib/utils" {\n${utilsDts}\n}`;

// ── 3. Read core type files ──

function readTypeFile(relPath: string): string {
  const fullPath = join(ROOT, "node_modules", relPath);
  if (!existsSync(fullPath)) {
    console.warn(`Warning: ${relPath} not found, skipping`);
    return "";
  }
  return readFileSync(fullPath, "utf-8");
}

const coreTypes = {
  reactIndex: readTypeFile("@types/react/index.d.ts"),
  reactGlobal: readTypeFile("@types/react/global.d.ts"),
  reactJsxRuntime: readTypeFile("@types/react/jsx-runtime.d.ts"),
  reactDomIndex: readTypeFile("@types/react-dom/index.d.ts"),
  reactDomClient: readTypeFile("@types/react-dom/client.d.ts"),
  csstype: readTypeFile("csstype/index.d.ts"),
};

// ── 4. Icon shims (@tabler/icons-react) ──

const tablerIcons = readTypeFile(
  "@tabler/icons-react/dist/tabler-icons-react.d.ts"
);

// ── 5. Next shims (match runtime shims in build-playground-modules.ts) ──

const nextShims = `declare module "next/link" {
  import type { ReactNode, AnchorHTMLAttributes, MouseEventHandler } from "react";
  export interface LinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
    href: string | { pathname?: string; query?: Record<string, string | number | undefined> };
    children?: ReactNode;
    prefetch?: boolean;
    replace?: boolean;
    scroll?: boolean;
    shallow?: boolean;
    onClick?: MouseEventHandler<HTMLAnchorElement>;
  }
  const Link: React.ForwardRefExoticComponent<LinkProps & React.RefAttributes<HTMLAnchorElement>>;
  export default Link;
}

declare module "next/image" {
  import type { ImgHTMLAttributes } from "react";
  export interface ImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "alt" | "width" | "height"> {
    src: string | { src: string; width?: number; height?: number };
    alt: string;
    width?: number | string;
    height?: number | string;
    priority?: boolean;
    fill?: boolean;
    sizes?: string;
    quality?: number;
    placeholder?: "blur" | "empty";
    blurDataURL?: string;
    unoptimized?: boolean;
  }
  const Image: React.ForwardRefExoticComponent<ImageProps & React.RefAttributes<HTMLImageElement>>;
  export default Image;
}
`;

// ── 6. Explicit shims for supported bare imports ──

const typedModuleSpecifiers = new Set([
  "react",
  "react/jsx-runtime",
  "react-dom",
  "react-dom/client",
  "@tabler/icons-react",
  "next/link",
  "next/image",
  "@/lib/utils",
  ...Object.keys(uiModuleDecls),
]);

const catchAll = Object.keys(importMap.imports)
  .filter((specifier) => !typedModuleSpecifiers.has(specifier))
  .map((specifier) => `declare module "${specifier}";`)
  .join("\n");

// ── 7. Output index.ts with all declarations as string exports ──

const lines: string[] = [];

for (const [key, content] of Object.entries(coreTypes)) {
  if (!content) continue;
  lines.push(`export const ${key}: string = ${JSON.stringify(content)};\n`);
}

lines.push(
  `export const tablerIcons: string = ${JSON.stringify(tablerIcons)};\n`
);
lines.push(`export const nextShims: string = ${JSON.stringify(nextShims)};\n`);
lines.push(
  `export const uiModulesBundle: string = ${JSON.stringify(uiModulesBundle)};\n`
);
lines.push(
  `export const utilsModule: string = ${JSON.stringify(utilsModule)};\n`
);
lines.push(`export const catchAll: string = ${JSON.stringify(catchAll)};\n`);

writeFileSync(join(OUT_DIR, "index.ts"), lines.join("\n"));

console.log(
  `Generated ${Object.keys(uiModuleDecls).length} UI module decls + ${
    Object.keys(coreTypes).filter((k) => coreTypes[k as keyof typeof coreTypes])
      .length
  } core type files + icon & next shims`
);
console.log(`Output: .generated/playground-types/index.ts`);
