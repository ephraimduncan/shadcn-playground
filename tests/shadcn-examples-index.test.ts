import test from "node:test";
import assert from "node:assert/strict";
import {
  buildShadcnExamplesIndex,
  inferComponentId,
  normalizeExampleImports,
  wrapExampleWithCenteredPreview,
} from "@/lib/playground/shadcn-examples-index";
import { validateShadcnExamplesIndex } from "@/lib/playground/shadcn-examples";

test("inferComponentId resolves canonical and alias names", () => {
  assert.equal(inferComponentId("button-default.tsx"), "button");
  assert.equal(inferComponentId("button-group-demo.tsx"), "button-group");
  assert.equal(
    inferComponentId("data-picker-with-dropdowns.tsx"),
    "date-picker",
  );
  assert.equal(inferComponentId("unknown-widget.tsx"), null);
});

test("buildShadcnExamplesIndex groups and sorts examples", () => {
  const { index, warnings } = buildShadcnExamplesIndex([
    {
      fileName: "button-outline.tsx",
      sourcePath: "apps/v4/examples/base/button-outline.tsx",
      code: "export function ButtonOutline() {}",
    },
    {
      fileName: "button-default.tsx",
      sourcePath: "apps/v4/examples/base/button-default.tsx",
      code: "export function ButtonDefault() {}",
    },
    {
      fileName: "input-demo.tsx",
      sourcePath: "apps/v4/examples/base/input-demo.tsx",
      code: "export function InputDemo() {}",
    },
    {
      fileName: "input-rtl.tsx",
      sourcePath: "apps/v4/examples/base/input-rtl.tsx",
      code: "export function InputRtl() {}",
    },
    {
      fileName: "calendar-demo.tsx",
      sourcePath: "apps/v4/examples/base/calendar-demo.tsx",
      code: 'export function CalendarDemo() { return <div className="rtl:rotate-180" /> }',
    },
    {
      fileName: "not-real-component-demo.tsx",
      sourcePath: "apps/v4/examples/base/not-real-component-demo.tsx",
      code: "export function Unknown() {}",
    },
  ]);

  assert.equal(index.components.length, 2);
  assert.equal(index.components[0].id, "button");
  assert.deepEqual(
    index.components[0].examples.map((example) => example.label),
    ["Default", "Outline"],
  );
  assert.equal(index.components[1].id, "input");
  assert.deepEqual(
    index.components[1].examples.map((example) => example.id),
    ["input-demo"],
  );
  assert.equal(warnings.length, 1);
});

test("validateShadcnExamplesIndex accepts valid payload and rejects malformed payload", () => {
  const valid = validateShadcnExamplesIndex({
    components: [
      {
        id: "button",
        label: "Button",
        examples: [
          {
            id: "button-default",
            label: "Default",
            sourcePath: "apps/v4/examples/base/button-default.tsx",
            code: "export function ButtonDefault() {}",
          },
        ],
      },
    ],
  });
  assert.equal(valid.success, true);

  const invalid = validateShadcnExamplesIndex({
    components: [
      {
        id: "button",
        label: "Button",
        examples: [
          {
            id: "button-default",
            label: "Default",
            sourcePath: "apps/v4/examples/base/button-default.tsx",
          },
        ],
      },
    ],
  });
  assert.equal(invalid.success, false);
});

test("normalizeExampleImports rewrites examples imports to local ui components", () => {
  const source = [
    'import { Button } from "@/examples/base/ui/button"',
    'import { Input } from "@/examples/radix/ui/input"',
    'import { Dialog } from "@/examples/base/ui-rtl/dialog"',
  ].join("\n");

  const normalized = normalizeExampleImports(source);
  assert.equal(normalized.includes("@/examples/base/ui/"), false);
  assert.equal(normalized.includes("@/examples/radix/ui/"), false);
  assert.equal(normalized.includes("@/examples/base/ui-rtl/"), false);
  assert.equal(normalized.includes("@/components/ui/button"), true);
  assert.equal(normalized.includes("@/components/ui/input"), true);
  assert.equal(normalized.includes("@/components/ui/dialog"), true);
});

test("wrapExampleWithCenteredPreview adds centered wrapper export", () => {
  const source = [
    'import { Button } from "@/components/ui/button"',
    "",
    "export function ButtonDefault() {",
    "  return <Button>Default</Button>",
    "}",
  ].join("\n");

  const wrapped = wrapExampleWithCenteredPreview(source);
  assert.equal(wrapped.includes("CenteredPreview"), true);
  assert.equal(wrapped.includes("__SHADCN_PLAY_CENTER_WRAPPER__"), false);
  assert.equal(wrapped.includes("items-center justify-center"), true);
  assert.equal(wrapped.includes("<ButtonDefault />"), true);
});
