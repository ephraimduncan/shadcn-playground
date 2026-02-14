import { eq } from "drizzle-orm";
import { getDb } from "@/lib/db";
import { snippets } from "@/lib/db/schema";
import { Playground } from "@/components/playground/playground";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ code?: string; css?: string; open?: string }>;
}) {
  const { code, css, open } = await searchParams;

  let initialCode: string | undefined;
  let initialGlobalCSS: string | undefined;

  if (open) {
    const snippet = await getDb().query.snippets.findFirst({
      where: eq(snippets.id, open),
    });
    if (snippet) {
      initialCode = snippet.code || undefined;
      initialGlobalCSS = snippet.globalCss ?? undefined;
    }
  } else {
    initialCode = code
      ? Buffer.from(code, "base64url").toString("utf-8")
      : undefined;

    initialGlobalCSS = css
      ? Buffer.from(css, "base64url").toString("utf-8")
      : undefined;
  }

  return (
    <Playground initialCode={initialCode} initialGlobalCSS={initialGlobalCSS} />
  );
}
