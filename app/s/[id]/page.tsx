import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { eq } from "drizzle-orm";
import { getDb } from "@/lib/db";
import { snippets } from "@/lib/db/schema";
import { Playground } from "@/components/playground/playground";
import { siteConfig } from "@/lib/config";
import { DEFAULT_GLOBALS_CSS } from "@/lib/playground/theme";

async function getSnippet(id: string) {
  return getDb().query.snippets.findFirst({
    where: eq(snippets.id, id),
  });
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const snippet = await getSnippet(id);

  if (!snippet) return {};

  const title = "Shared Snippet";
  const description = `A shared shadcn/ui component snippet on ${siteConfig.name}`;

  return {
    title,
    description,
    openGraph: {
      title: `${title} - ${siteConfig.name}`,
      description,
      url: `${siteConfig.url}/s/${id}`,
      images: [
        {
          url: `/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`,
          width: 1200,
          height: 628,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} - ${siteConfig.name}`,
      description,
      images: [
        `/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`,
      ],
    },
    alternates: {
      canonical: `${siteConfig.url}/s/${id}`,
    },
  };
}

export default async function SharedSnippetPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const snippet = await getSnippet(id);

  if (!snippet) notFound();

  return (
    <Playground
      initialCode={snippet.code}
      initialGlobalCSS={snippet.globalCss ?? DEFAULT_GLOBALS_CSS}
    />
  );
}
