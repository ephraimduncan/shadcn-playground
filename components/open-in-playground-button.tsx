import { Button } from "@/components/ui/button";

interface OpenInPlaygroundButtonProps {
  url: string;
  baseUrl?: string;
}

export function OpenInPlaygroundButton({
  url,
  baseUrl,
}: OpenInPlaygroundButtonProps) {
  const targetBaseUrl = baseUrl ?? "";
  const href = `${targetBaseUrl}/api/open?url=${encodeURIComponent(url)}`;

  return (
    <Button
      aria-label="Open in playground"
      className="h-8 rounded-[6px] bg-black px-3 text-xs text-white hover:bg-black hover:text-white dark:bg-white dark:text-black"
      asChild
    >
      <a href={href} target="_blank" rel="noreferrer">
        Open in Playground
      </a>
    </Button>
  );
}
