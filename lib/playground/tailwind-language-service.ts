"use client";

import type * as MonacoNS from "monaco-editor";
import type {
  State,
  Settings,
} from "@tailwindcss/language-service/dist/util/state";
import type {
  CompletionItem as LspCompletionItem,
  CompletionList as LspCompletionList,
  Hover as LspHover,
  ColorInformation as LspColorInformation,
  Range as LspRange,
  Position as LspPosition,
  MarkupContent,
} from "vscode-languageserver-types";
import type { TextDocument } from "vscode-languageserver-textdocument";
import type { TailwindStylesheets } from "./tailwind-stylesheets";

type Monaco = typeof MonacoNS;

const TAILWIND_CLASS_FUNCTIONS = ["cn", "clsx", "cva", "tw", "twMerge"] as const;


function isEscaped(text: string, index: number) {
  let backslashCount = 0;
  for (let i = index - 1; i >= 0 && text[i] === "\\"; i--) {
    backslashCount++;
  }
  return backslashCount % 2 === 1;
}

function findTailwindFunctionClassList(textUpToCursor: string) {
  for (let quoteIndex = textUpToCursor.length - 1; quoteIndex >= 0; quoteIndex--) {
    const quote = textUpToCursor[quoteIndex];
    if (
      (quote !== '"' && quote !== "'" && quote !== "`") ||
      isEscaped(textUpToCursor, quoteIndex)
    ) {
      continue;
    }

    let parenDepth = 0;
    for (let i = quoteIndex - 1; i >= 0; i--) {
      const char = textUpToCursor[i];

      if (
        (char === '"' || char === "'" || char === "`") &&
        !isEscaped(textUpToCursor, i)
      ) {
        const stringQuote = char;
        i--;
        while (i >= 0) {
          if (
            textUpToCursor[i] === stringQuote &&
            !isEscaped(textUpToCursor, i)
          ) {
            break;
          }
          i--;
        }
        continue;
      }

      if (char === ")") {
        parenDepth++;
        continue;
      }

      if (char !== "(") continue;
      if (parenDepth > 0) {
        parenDepth--;
        continue;
      }

      let end = i - 1;
      while (end >= 0 && /\s/.test(textUpToCursor[end])) end--;

      let start = end;
      while (start >= 0 && /[$\w]/.test(textUpToCursor[start])) start--;

      const fnName = textUpToCursor.slice(start + 1, end + 1);
      if (
        !TAILWIND_CLASS_FUNCTIONS.includes(
          fnName as (typeof TAILWIND_CLASS_FUNCTIONS)[number],
        )
      ) {
        continue;
      }

      return {
        classList: textUpToCursor.slice(quoteIndex + 1),
        startOffset: quoteIndex + 1,
      };
    }

    return null;
  }

  return null;
}

export function detectTailwindClassListTextContext(
  textUpToCursor: string,
  languageId: "typescriptreact" | "css",
): { classList: string; startOffset: number } | null {
  if (languageId === "css") {
    const applyMatch = /@apply\s+([^;}\r\n]*)$/.exec(textUpToCursor);
    if (!applyMatch) return null;
    const classList = applyMatch[1];
    return {
      classList,
      startOffset: textUpToCursor.length - classList.length,
    };
  }

  const attrRe = /(?:\s|:|\()(?:class|className|ngClass|class:list)\s*=\s*(['"`])((?:(?!\1)[\s\S])*)$/;
  const attrMatch = attrRe.exec(textUpToCursor);
  if (attrMatch) {
    const classList = attrMatch[2];
    return {
      classList,
      startOffset: textUpToCursor.length - classList.length,
    };
  }

  return findTailwindFunctionClassList(textUpToCursor);
}
let cachedStylesheetsPromise: Promise<TailwindStylesheets> | null = null;

function loadStylesheets(): Promise<TailwindStylesheets> {
  if (!cachedStylesheetsPromise) {
    cachedStylesheetsPromise = fetch("/playground/tailwind-stylesheets.json")
      .then((r) => {
        if (!r.ok) throw new Error(`stylesheets fetch ${r.status}`);
        return r.json() as Promise<TailwindStylesheets>;
      })
      .catch((err) => {
        cachedStylesheetsPromise = null;
        throw err;
      });
  }
  return cachedStylesheetsPromise;
}

async function buildState(userCss: string): Promise<State> {
  const [{ __unstable__loadDesignSystem }, ls, postcssModule, stylesheets] =
    await Promise.all([
      import("tailwindcss"),
      import("@tailwindcss/language-service"),
      import("postcss"),
      loadStylesheets(),
    ]);
  const postcss = postcssModule.default ?? postcssModule;

  const designSystem = await __unstable__loadDesignSystem(userCss, {
    base: "/",
    loadStylesheet: async (id: string, base: string) => {
      const content = stylesheets[id as keyof TailwindStylesheets];
      if (content === undefined) {
        throw new Error(`Unknown stylesheet: ${id}`);
      }
      return { path: id, base, content };
    },
    loadModule: async () => {
      throw new Error("Loading modules is not supported in the playground");
    },
  });

  const ds = designSystem as unknown as {
    compile?: (classes: string[]) => unknown[];
    candidatesToCss: (classes: string[]) => (string | null)[];
  };
  if (typeof ds.compile !== "function") {
    ds.compile = (classes: string[]) => {
      const css = ds.candidatesToCss(classes);
      return css.map((c) => {
        if (!c) return postcss.root();
        try {
          return postcss.parse(c);
        } catch {
          return postcss.root();
        }
      });
    };
  }

  const defaults = ls.getDefaultTailwindSettings();
  const settings: Settings = {
    ...defaults,
    tailwindCSS: {
      ...defaults.tailwindCSS,
      classAttributes: ["class", "className", "ngClass", "class:list"],
      classFunctions: [...TAILWIND_CLASS_FUNCTIONS],
    },
  };

  const state = ls.createState({
    enabled: true,
    v4: true,
    features: [],
    separator: ":",
    designSystem: designSystem as unknown as State["designSystem"],
    classList: designSystem.getClassList().map(([name, meta]) => [
      name,
      {
        color: null,
        modifiers: meta.modifiers,
      },
    ]),
    variants: designSystem.getVariants() as unknown as State["variants"],
    editor: {
      getConfiguration: async () => settings,
    },
  });

  return state;
}

function lspRangeToMonaco(range: LspRange): MonacoNS.IRange {
  return {
    startLineNumber: range.start.line + 1,
    startColumn: range.start.character + 1,
    endLineNumber: range.end.line + 1,
    endColumn: range.end.character + 1,
  };
}

function monacoPosToLsp(position: MonacoNS.Position): LspPosition {
  return { line: position.lineNumber - 1, character: position.column - 1 };
}

function markupToMonaco(
  monaco: Monaco,
  content: string | MarkupContent | Array<string | MarkupContent> | undefined,
): MonacoNS.IMarkdownString[] {
  if (content === undefined) return [];
  const arr = Array.isArray(content) ? content : [content];
  return arr.map((c) => {
    if (typeof c === "string") return { value: c };
    if (c.kind === "markdown") return { value: c.value };
    return { value: "```\n" + c.value + "\n```" };
  });
}

const LSP_KIND_TO_MONACO: Record<number, number> = {
  1: 17,
  2: 1,
  3: 0,
  4: 2,
  5: 4,
  6: 5,
  7: 6,
  8: 7,
  9: 8,
  10: 9,
  11: 12,
  12: 13,
  13: 14,
  14: 15,
  15: 16,
  16: 19,
  17: 16,
  18: 18,
  19: 20,
  20: 21,
  21: 14,
  22: 22,
  23: 23,
  24: 24,
  25: 25,
};

function mapLspKind(
  monaco: Monaco,
  kind: number | undefined,
): MonacoNS.languages.CompletionItemKind {
  const CompletionItemKind = monaco.languages.CompletionItemKind;
  if (kind === undefined) return CompletionItemKind.Text;
  const mapped = LSP_KIND_TO_MONACO[kind];
  return mapped === undefined ? CompletionItemKind.Text : mapped;
}

function convertCompletionItem(
  monaco: Monaco,
  item: LspCompletionItem,
  fallbackRange: MonacoNS.IRange,
): MonacoNS.languages.CompletionItem {
  let insertText = item.insertText ?? item.label;
  let range: MonacoNS.IRange | MonacoNS.languages.CompletionItemRanges =
    fallbackRange;

  const edit = item.textEdit;
  if (edit) {
    insertText = edit.newText;
    if ("range" in edit) {
      range = lspRangeToMonaco(edit.range);
    } else if ("insert" in edit && "replace" in edit) {
      range = {
        insert: lspRangeToMonaco(edit.insert),
        replace: lspRangeToMonaco(edit.replace),
      };
    }
  }

  const documentation =
    item.documentation === undefined
      ? undefined
      : typeof item.documentation === "string"
        ? item.documentation
        : item.documentation.kind === "markdown"
          ? { value: item.documentation.value }
          : item.documentation.value;

  const converted: MonacoNS.languages.CompletionItem & {
    _lsp?: LspCompletionItem;
  } = {
    label: item.label,
    kind: mapLspKind(monaco, item.kind),
    detail: item.detail,
    documentation,
    sortText: item.sortText,
    filterText: item.filterText,
    preselect: item.preselect,
    insertText,
    range,
    commitCharacters: item.commitCharacters,
    additionalTextEdits: item.additionalTextEdits?.map((e) => ({
      range: lspRangeToMonaco(e.range),
      text: e.newText,
    })),
  };
  converted._lsp = item;
  return converted;
}

function createTextDocument(
  TextDocumentCtor: typeof TextDocument,
  model: MonacoNS.editor.ITextModel,
  languageId: string,
): TextDocument {
  return TextDocumentCtor.create(
    model.uri.toString(),
    languageId,
    model.getVersionId(),
    model.getValue(),
  );
}

export interface TailwindProviderContext {
  getUserCss: () => string;
}

export interface TailwindProviderHandle {
  dispose: () => void;
  refresh: () => void;
}

export function registerTailwindProviders(
  monaco: Monaco,
  context: TailwindProviderContext,
): TailwindProviderHandle {
  let state: State | null = null;
  let rebuildTimer: ReturnType<typeof setTimeout> | null = null;
  let generation = 0;
  let disposed = false;

  let tdModulePromise: Promise<
    typeof import("vscode-languageserver-textdocument")
  > | null = null;
  let lsModulePromise: Promise<
    typeof import("@tailwindcss/language-service")
  > | null = null;

  function loadTextDocumentModule() {
    if (!tdModulePromise) {
      tdModulePromise = import("vscode-languageserver-textdocument");
    }
    return tdModulePromise;
  }
  function loadLsModule() {
    if (!lsModulePromise) {
      lsModulePromise = import("@tailwindcss/language-service");
    }
    return lsModulePromise;
  }

  async function rebuildNow() {
    const myGen = ++generation;
    const userCss = context.getUserCss();
    try {
      const next = await buildState(userCss);
      if (disposed || myGen !== generation) return;
      state = next;
    } catch (err) {
      if (disposed || myGen !== generation) return;
      state = null;
      console.error("[tailwind-ls] failed to build design system:", err);
    }
  }

  function scheduleRebuild(delayMs: number) {
    if (rebuildTimer) clearTimeout(rebuildTimer);
    rebuildTimer = setTimeout(() => {
      rebuildTimer = null;
      void rebuildNow();
    }, delayMs);
  }

  void rebuildNow();

  let postcssPromise: Promise<typeof import("postcss")> | null = null;
  function loadPostcss() {
    if (!postcssPromise) postcssPromise = import("postcss");
    return postcssPromise;
  }
  async function ensureDesignSystemPolyfill(s: State | null) {
    if (!s) return;
    const ds = s.designSystem as unknown as {
      compile?: (classes: string[]) => unknown[];
      candidatesToCss?: (classes: string[]) => (string | null)[];
    };
    if (typeof ds.compile === "function") return;
    if (typeof ds.candidatesToCss !== "function") return;
    const pc = await loadPostcss();
    const postcss =
      (pc as unknown as { default?: typeof pc }).default ?? pc;
    ds.compile = (classes: string[]) => {
      const css = ds.candidatesToCss!(classes);
      return css.map((c) => {
        if (!c) return postcss.root();
        try {
          return postcss.parse(c);
        } catch {
          return postcss.root();
        }
      });
    };
  }

  const TRIGGER_CHARS_JS = [
    '"',
    "'",
    "`",
    " ",
    ".",
    "/",
    "-",
    ":",
    "(",
    "[",
  ];
  const TRIGGER_CHARS_CSS = [" ", ".", "/", "-", ":", "(", "["];

  function detectClassListContext(
    model: MonacoNS.editor.ITextModel,
    position: MonacoNS.Position,
    languageId: "typescriptreact" | "css",
  ): { classList: string; startPos: MonacoNS.Position } | null {
    const textUpToCursor = model.getValueInRange({
      startLineNumber: 1,
      startColumn: 1,
      endLineNumber: position.lineNumber,
      endColumn: position.column,
    });
    const context = detectTailwindClassListTextContext(
      textUpToCursor,
      languageId,
    );
    if (!context) return null;
    return {
      classList: context.classList,
      startPos: model.getPositionAt(context.startOffset),
    };
  }


  async function provideCompletions(
    model: MonacoNS.editor.ITextModel,
    position: MonacoNS.Position,
    languageId: "typescriptreact" | "css",
  ): Promise<MonacoNS.languages.CompletionList> {
    if (!state) return { suggestions: [] };
    await ensureDesignSystemPolyfill(state);
    const ls = await loadLsModule();

    const ctx = detectClassListContext(model, position, languageId);
    if (!ctx) return { suggestions: [] };

    const settings = state.editor
      ? await state.editor.getConfiguration("")
      : null;
    const range: LspRange = {
      start: {
        line: ctx.startPos.lineNumber - 1,
        character: ctx.startPos.column - 1,
      },
      end: { line: position.lineNumber - 1, character: position.column - 1 },
    };
    let result: LspCompletionList | null;
    try {
      result = (ls as unknown as {
        completionsFromClassList: (
          state: State,
          classList: string,
          range: LspRange,
          rootFontSize?: number,
        ) => LspCompletionList;
      }).completionsFromClassList(
        state,
        ctx.classList,
        range,
        settings?.tailwindCSS.rootFontSize,
      );
    } catch (err) {
      console.error("[tailwind-ls] completionsFromClassList error:", err);
      return { suggestions: [] };
    }
    if (!result) return { suggestions: [] };
    const word = model.getWordUntilPosition(position);
    const fallbackRange: MonacoNS.IRange = {
      startLineNumber: position.lineNumber,
      startColumn: word.startColumn,
      endLineNumber: position.lineNumber,
      endColumn: word.endColumn,
    };
    return {
      suggestions: result.items.map((item) =>
        convertCompletionItem(monaco, item, fallbackRange),
      ),
      incomplete: result.isIncomplete,
    };
  }

  async function resolveCompletion(
    item: MonacoNS.languages.CompletionItem,
  ): Promise<MonacoNS.languages.CompletionItem> {
    if (!state) return item;
    const raw = (item as { _lsp?: LspCompletionItem })._lsp;
    if (!raw) return item;
    const ls = await loadLsModule();
    try {
      const resolved = await ls.resolveCompletionItem(state, raw);
      if (resolved.documentation) {
        item.documentation =
          typeof resolved.documentation === "string"
            ? resolved.documentation
            : resolved.documentation.kind === "markdown"
              ? { value: resolved.documentation.value }
              : resolved.documentation.value;
      }
      if (resolved.detail) item.detail = resolved.detail;
    } catch (err) {
      console.error("[tailwind-ls] resolveCompletionItem:", err);
    }
    return item;
  }

  async function provideHover(
    model: MonacoNS.editor.ITextModel,
    position: MonacoNS.Position,
    languageId: "typescriptreact" | "css",
  ): Promise<MonacoNS.languages.Hover | null> {
    if (!state) return null;
    await ensureDesignSystemPolyfill(state);
    const [{ TextDocument }, ls] = await Promise.all([
      loadTextDocumentModule(),
      loadLsModule(),
    ]);
    const doc = createTextDocument(TextDocument, model, languageId);
    let result: LspHover | null;
    try {
      result = await ls.doHover(state, doc, monacoPosToLsp(position));
    } catch (err) {
      console.error("[tailwind-ls] doHover:", err);
      return null;
    }
    if (!result) return null;
    return {
      range: result.range ? lspRangeToMonaco(result.range) : undefined,
      contents: markupToMonaco(monaco, result.contents as never),
    };
  }

  async function provideColors(
    model: MonacoNS.editor.ITextModel,
    languageId: "typescriptreact" | "css",
  ): Promise<MonacoNS.languages.IColorInformation[]> {
    if (!state) return [];
    await ensureDesignSystemPolyfill(state);
    const [{ TextDocument }, ls] = await Promise.all([
      loadTextDocumentModule(),
      loadLsModule(),
    ]);
    const doc = createTextDocument(TextDocument, model, languageId);
    let result: LspColorInformation[];
    try {
      result = await ls.getDocumentColors(state, doc);
    } catch (err) {
      console.error("[tailwind-ls] getDocumentColors:", err);
      return [];
    }
    return result.map((c) => ({
      range: lspRangeToMonaco(c.range),
      color: c.color,
    }));
  }

  const completionTsx = monaco.languages.registerCompletionItemProvider(
    "typescript",
    {
      triggerCharacters: TRIGGER_CHARS_JS,
      provideCompletionItems: (model, position) =>
        provideCompletions(model, position, "typescriptreact"),
      resolveCompletionItem: (item) => resolveCompletion(item),
    },
  );

  const completionCss = monaco.languages.registerCompletionItemProvider("css", {
    triggerCharacters: TRIGGER_CHARS_CSS,
    provideCompletionItems: (model, position) =>
      provideCompletions(model, position, "css"),
    resolveCompletionItem: (item) => resolveCompletion(item),
  });

  const hoverTsx = monaco.languages.registerHoverProvider("typescript", {
    provideHover: (model, position) =>
      provideHover(model, position, "typescriptreact"),
  });

  const hoverCss = monaco.languages.registerHoverProvider("css", {
    provideHover: (model, position) => provideHover(model, position, "css"),
  });

  const colorTsx = monaco.languages.registerColorProvider("typescript", {
    provideDocumentColors: (model) => provideColors(model, "typescriptreact"),
    provideColorPresentations: () => [],
  });

  const colorCss = monaco.languages.registerColorProvider("css", {
    provideDocumentColors: (model) => provideColors(model, "css"),
    provideColorPresentations: () => [],
  });

  return {
    dispose: () => {
      disposed = true;
      if (rebuildTimer) clearTimeout(rebuildTimer);
      completionTsx.dispose();
      completionCss.dispose();
      hoverTsx.dispose();
      hoverCss.dispose();
      colorTsx.dispose();
      colorCss.dispose();
    },
    refresh: () => scheduleRebuild(300),
  };
}
