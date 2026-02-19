import type {
  ShadcnComponentExamples,
  ShadcnExample,
  ShadcnExamplesIndex,
} from "@/lib/playground/shadcn-examples-index";

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function isExample(value: unknown): value is ShadcnExample {
  if (!isRecord(value)) return false;

  return (
    typeof value.id === "string" &&
    value.id.length > 0 &&
    typeof value.label === "string" &&
    value.label.length > 0 &&
    typeof value.sourcePath === "string" &&
    value.sourcePath.length > 0 &&
    typeof value.code === "string" &&
    value.code.length > 0
  );
}

function isComponent(value: unknown): value is ShadcnComponentExamples {
  if (!isRecord(value)) return false;
  if (typeof value.id !== "string" || value.id.length === 0) return false;
  if (typeof value.label !== "string" || value.label.length === 0) return false;
  if (!Array.isArray(value.examples)) return false;

  return value.examples.every(isExample);
}

export function validateShadcnExamplesIndex(
  input: unknown,
):
  | { success: true; data: ShadcnExamplesIndex }
  | { success: false; error: string } {
  if (!isRecord(input)) {
    return { success: false, error: "Invalid example index: expected object." };
  }

  if (!Array.isArray(input.components)) {
    return {
      success: false,
      error: "Invalid example index: components must be an array.",
    };
  }

  if (!input.components.every(isComponent)) {
    return {
      success: false,
      error: "Invalid example index: malformed component or example entry.",
    };
  }

  const components = input.components as ShadcnComponentExamples[];
  return { success: true, data: { components } };
}
