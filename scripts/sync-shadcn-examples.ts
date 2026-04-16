import { mkdtempSync, mkdirSync, rmSync, writeFileSync } from "fs";
import { tmpdir } from "os";
import { join } from "path";
import { execFileSync } from "child_process";
import {
  buildShadcnExamplesIndex,
  readRawExampleFiles,
} from "../lib/playground/shadcn-examples-index";

const REPO_URL = "https://github.com/shadcn-ui/ui.git";
const REPO_REF = "b9f78c8a35b0b894bba72f4df2d87661c85e7954";
const EXAMPLES_RELATIVE_DIR = "apps/v4/examples/base";
const OUTPUT_PATH = join(
  process.cwd(),
  "public",
  "playground",
  "shadcn-examples.json",
);

function runGit(args: string[], cwd: string) {
  execFileSync("git", args, { cwd, stdio: "pipe" });
}

function run() {
  const workspace = mkdtempSync(join(tmpdir(), "shadcn-ui-"));
  const cloneDir = join(workspace, "ui");

  try {
    mkdirSync(cloneDir, { recursive: true });
    console.log(`Fetching shadcn/ui @ ${REPO_REF.slice(0, 7)}...`);
    runGit(["init"], cloneDir);
    runGit(["remote", "add", "origin", REPO_URL], cloneDir);
    runGit(["fetch", "--depth", "1", "origin", REPO_REF], cloneDir);
    runGit(["checkout", "--detach", "FETCH_HEAD"], cloneDir);

    const examplesDir = join(cloneDir, EXAMPLES_RELATIVE_DIR);
    const files = readRawExampleFiles(examplesDir);
    const { index, warnings } = buildShadcnExamplesIndex(files);

    if (warnings.length > 0) {
      throw new Error(
        `Sync aborted because example classification needs an update:\n- ${warnings.join("\n- ")}`,
      );
    }

    mkdirSync(join(process.cwd(), "public", "playground"), { recursive: true });
    writeFileSync(OUTPUT_PATH, `${JSON.stringify(index, null, 2)}\n`, "utf-8");

    console.log(
      `Wrote ${index.components.length} components to public/playground/shadcn-examples.json`,
    );
  } catch (error) {
    console.error("Failed to sync shadcn examples.");
    throw error;
  } finally {
    rmSync(workspace, { recursive: true, force: true });
  }
}

run();
