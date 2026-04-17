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

type CompileRequest = {
  type: "compile";
  css: string;
  candidates: string[];
  id: number;
};
type CompileResponse = { type: "css"; css: string; id: number };
type ReadyMessage = { type: "ready" };
type ErrorMessage = { type: "error"; message: string; id?: number };

const stylesheets: Record<string, string> = {
  tailwindcss: indexCss,
  "tailwindcss/preflight": preflightCss,
  "tailwindcss/theme": themeCss,
  "tailwindcss/utilities": utilitiesCss,
  "tw-animate-css": twAnimateCss,
  "shadcn/tailwind.css": shadcnTailwindCss,
};

let compiler: Awaited<ReturnType<typeof compile>> | null = null;
let previousInputCss = "";
let previousCandidateKey = "";
let previousCss = "";

function resetCache() {
  compiler = null;
  previousInputCss = "";
  previousCandidateKey = "";
  previousCss = "";
}

async function loadCompiler(inputCss: string) {
  if (compiler && inputCss === previousInputCss) {
    return compiler;
  }

  try {
    const nextCompiler = await compile(inputCss, {
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

    compiler = nextCompiler;
    previousInputCss = inputCss;
    previousCandidateKey = "";
    previousCss = "";
    return nextCompiler;
  } catch (err) {
    resetCache();
    throw err;
  }
}

self.onmessage = async (e: MessageEvent<CompileRequest>) => {
  if (e.data.type !== "compile") return;

  const {
    candidates,
    css: inputCss,
    id,
  } = e.data;

  try {
    const candidateKey = candidates.join(" ");
    if (
      compiler &&
      inputCss === previousInputCss &&
      candidateKey === previousCandidateKey
    ) {
      self.postMessage({
        type: "css",
        css: previousCss,
        id,
      } satisfies CompileResponse);
      return;
    }

    const activeCompiler = await loadCompiler(inputCss);
    const css = activeCompiler.build(candidates);
    previousCandidateKey = candidateKey;
    previousCss = css;
    self.postMessage({ type: "css", css, id } satisfies CompileResponse);
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    self.postMessage({ type: "error", message, id } satisfies ErrorMessage);
  }
};

self.postMessage({ type: "ready" } satisfies ReadyMessage);
