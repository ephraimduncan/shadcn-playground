import { Playground } from "@/components/playground/playground";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ code?: string; css?: string }>;
}) {
  const { code, css } = await searchParams;

  const initialCode = code
    ? Buffer.from(code, "base64url").toString("utf-8")
    : undefined;

  const initialGlobalCSS = css
    ? Buffer.from(css, "base64url").toString("utf-8")
    : undefined;

  return (
    <Playground initialCode={initialCode} initialGlobalCSS={initialGlobalCSS} />
  );
}
