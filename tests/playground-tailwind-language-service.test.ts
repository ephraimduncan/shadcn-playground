import test from "node:test";
import assert from "node:assert/strict";
import { detectTailwindClassListTextContext } from "@/lib/playground/tailwind-language-service";

test("detectTailwindClassListTextContext finds @apply class lists", () => {
  const source = "@apply bg-red-500 text-sm";
  const result = detectTailwindClassListTextContext(source, "css");

  assert.deepEqual(result, {
    classList: "bg-red-500 text-sm",
    startOffset: source.indexOf("bg-red-500"),
  });
});

test("detectTailwindClassListTextContext finds JSX className strings", () => {
  const source = 'const view = <div className="px-2 text-sm';
  const result = detectTailwindClassListTextContext(source, "typescriptreact");

  assert.deepEqual(result, {
    classList: "px-2 text-sm",
    startOffset: source.indexOf("px-2"),
  });
});

test("detectTailwindClassListTextContext finds helper strings after conditional expressions", () => {
  const source = 'const classes = cn(cond && "px-2 text-sm';
  const result = detectTailwindClassListTextContext(source, "typescriptreact");

  assert.deepEqual(result, {
    classList: "px-2 text-sm",
    startOffset: source.indexOf("px-2"),
  });
});

test("detectTailwindClassListTextContext skips nested helper calls and finds the active string", () => {
  const source = 'const classes = cn(foo("bar"), "px-2 text-sm';
  const result = detectTailwindClassListTextContext(source, "typescriptreact");

  assert.deepEqual(result, {
    classList: "px-2 text-sm",
    startOffset: source.lastIndexOf("px-2"),
  });
});
