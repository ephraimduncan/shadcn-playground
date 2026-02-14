import { createClient } from "@libsql/client";

let ensureGlobalCssColumnPromise: Promise<void> | null = null;

export async function ensureSnippetsGlobalCssColumn() {
  if (ensureGlobalCssColumnPromise) {
    return ensureGlobalCssColumnPromise;
  }

  ensureGlobalCssColumnPromise = (async () => {
    const client = createClient({
      url: process.env.TURSO_DATABASE_URL ?? "file:local.db",
      authToken: process.env.TURSO_AUTH_TOKEN,
    });

    try {
      const tableInfo = await client.execute("PRAGMA table_info(snippets)");

      const hasGlobalCssColumn = tableInfo.rows.some((row) => {
        if (!row || typeof row !== "object") {
          return false;
        }

        const record = row as Record<string, unknown>;
        return record.name === "global_css";
      });

      if (!hasGlobalCssColumn) {
        await client.execute("ALTER TABLE snippets ADD COLUMN global_css text");
      }
    } finally {
      client.close();
    }
  })().catch((error) => {
    ensureGlobalCssColumnPromise = null;
    throw error;
  });

  return ensureGlobalCssColumnPromise;
}
