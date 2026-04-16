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
  assert.equal(inferComponentId("file-upload-list.tsx"), "item");
  assert.equal(inferComponentId("muted-item-group.tsx"), "item");
  assert.equal(inferComponentId("outline-item-group.tsx"), "item");
  assert.equal(inferComponentId("radio-fields.tsx"), "radio-group");
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
      fileName: "file-upload-list.tsx",
      sourcePath: "apps/v4/examples/base/file-upload-list.tsx",
      code: "export function FileUploadList() {}",
    },
    {
      fileName: "radio-fields.tsx",
      sourcePath: "apps/v4/examples/base/radio-fields.tsx",
      code: "export function RadioFields() {}",
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

  assert.equal(index.components.length, 4);
  assert.deepEqual(
    index.components.map((component) => component.id),
    ["button", "input", "item", "radio-group"],
  );
  assert.deepEqual(
    index.components[0].examples.map((example) => example.label),
    ["Default", "Outline"],
  );
  assert.deepEqual(
    index.components[2].examples.map((example) => example.id),
    ["item-file-upload-list"],
  );
  assert.deepEqual(
    index.components[3].examples.map((example) => example.id),
    ["radio-group-fields"],
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
    'import { Item } from "@/styles/base-nova/ui/item"',
    'import { Tooltip } from "@/styles/base-nova/ui-rtl/tooltip"',
  ].join("\n");

  const normalized = normalizeExampleImports(source);
  assert.equal(normalized.includes("@/examples/base/ui/"), false);
  assert.equal(normalized.includes("@/examples/radix/ui/"), false);
  assert.equal(normalized.includes("@/examples/base/ui-rtl/"), false);
  assert.equal(normalized.includes("@/styles/base-nova/ui/"), false);
  assert.equal(normalized.includes("@/styles/base-nova/ui-rtl/"), false);
  assert.equal(normalized.includes("@/components/ui/button"), true);
  assert.equal(normalized.includes("@/components/ui/input"), true);
  assert.equal(normalized.includes("@/components/ui/dialog"), true);
  assert.equal(normalized.includes("@/components/ui/item"), true);
  assert.equal(normalized.includes("@/components/ui/tooltip"), true);
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
