import test from "node:test";
import assert from "node:assert/strict";
import { shouldConfirmExampleReplace } from "@/lib/playground/example-insert";

test("shouldConfirmExampleReplace prompts whenever replacing non-empty code", () => {
  assert.equal(shouldConfirmExampleReplace("a", "b"), true);
  assert.equal(shouldConfirmExampleReplace("a", "a"), false);
  assert.equal(shouldConfirmExampleReplace("   ", "b"), false);
});
