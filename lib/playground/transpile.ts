import { transform } from "sucrase";
import { isAllowedImport, getAllowedModulesList } from "./modules";

export type TranspileResult =
  | {
      js: string;
      imports: string[];
      candidates: string[];
    }
  | {
      error: TranspileError;
    };

export type TranspileError = {
  message: string;
  line: number;
  column: number;
};

const IMPORT_REGEX =
  /(?:import|export)\s+(?:[\s\S]*?from\s+)?['"]([^'"]+)['"]/g;

function extractImportSpecifiers(code: string): string[] {
  const specifiers: string[] = [];
  IMPORT_REGEX.lastIndex = 0;
  let match: RegExpExecArray | null = IMPORT_REGEX.exec(code);
  while (match !== null) {
    specifiers.push(match[1]);
    match = IMPORT_REGEX.exec(code);
  }
  return specifiers;
}

function findImportLine(
  code: string,
  specifier: string,
): { line: number; column: number } {
  const lines = code.split("\n");
  for (let i = 0; i < lines.length; i++) {
    const col = lines[i].indexOf(`"${specifier}"`);
    if (col !== -1) return { line: i + 1, column: col };
    const col2 = lines[i].indexOf(`'${specifier}'`);
    if (col2 !== -1) return { line: i + 1, column: col2 };
  }
  return { line: 1, column: 0 };
}

const SINGLE_QUOTE_REGEX = /'([^'\\]|\\.)*'/g;
const DOUBLE_QUOTE_REGEX = /"([^"\\]|\\.)*"/g;
const TEMPLATE_LITERAL_REGEX = /`([^`\\]|\\.)*`/g;

export function extractClassCandidates(source: string): string[] {
  const singles = source.match(SINGLE_QUOTE_REGEX) ?? [];
  const doubles = source.match(DOUBLE_QUOTE_REGEX) ?? [];
  const templates = source.match(TEMPLATE_LITERAL_REGEX) ?? [];

  const seen = new Set<string>();
  for (const match of [...singles, ...doubles, ...templates]) {
    const tokens = match.slice(1, -1).split(/\s+/);
    for (const token of tokens) {
      if (token) seen.add(token);
    }
  }
  return Array.from(seen);
}

const LOOP_REGEX = /\b(for|while|do)\s*(\([^)]*\))?\s*\{/g;

function injectLoopGuards(code: string): string {
  return code.replace(LOOP_REGEX, (match) => {
    return `${match} if(++__loopGuard>100000)throw new Error("Possible infinite loop detected");`;
  });
}

export function transpileTSX(source: string): TranspileResult {
  const sourceImports = extractImportSpecifiers(source);
  for (const specifier of sourceImports) {
    if (!isAllowedImport(specifier)) {
      const pos = findImportLine(source, specifier);
      return {
        error: {
          message: `Module "${specifier}" is not available in the playground. Available modules: ${getAllowedModulesList()}`,
          line: pos.line,
          column: pos.column,
        },
      };
    }
  }

  try {
    const result = transform(source, {
      transforms: ["typescript", "jsx"],
      jsxRuntime: "automatic",
      jsxImportSource: "react",
      production: true,
    });

    const js = `let __loopGuard=0;\n${injectLoopGuards(result.code)}`;
    const candidates = extractClassCandidates(source);

    return { js, imports: sourceImports, candidates };
  } catch (err: unknown) {
    const sucraseError = err as {
      message?: string;
      loc?: { line: number; column: number };
      pos?: number;
    };
    let line = 1;
    let column = 0;

    if (sucraseError.loc) {
      line = sucraseError.loc.line;
      column = sucraseError.loc.column;
    } else if (typeof sucraseError.pos === "number") {
      const before = source.slice(0, sucraseError.pos);
      const lines = before.split("\n");
      line = lines.length;
      column = lines[lines.length - 1].length;
    }

    return {
      error: {
        message: sucraseError.message ?? "Transpilation failed",
        line,
        column,
      },
    };
  }
}
