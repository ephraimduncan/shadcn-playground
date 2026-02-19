"use client";

import { useCallback, useEffect, useState } from "react";
import type { ShadcnExamplesIndex } from "@/lib/playground/shadcn-examples-index";
import { validateShadcnExamplesIndex } from "@/lib/playground/shadcn-examples";

interface UseShadcnExamplesResult {
  data: ShadcnExamplesIndex | null;
  isLoading: boolean;
  error: string | null;
  refetch: () => void;
}

export function useShadcnExamples(): UseShadcnExamplesResult {
  const [data, setData] = useState<ShadcnExamplesIndex | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async (ignore?: { current: boolean }) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/playground/shadcn-examples.json", {
        cache: "no-store",
      });

      if (!response.ok) {
        throw new Error(`Could not load examples (HTTP ${response.status}).`);
      }

      const json = (await response.json()) as unknown;
      const validation = validateShadcnExamplesIndex(json);

      if (!validation.success) {
        throw new Error(validation.error);
      }

      if (ignore?.current) return;
      setData(validation.data);
    } catch (err) {
      if (ignore?.current) return;
      const message =
        err instanceof Error ? err.message : "Could not load shadcn examples.";
      setError(message);
      setData(null);
    } finally {
      if (!ignore?.current) {
        setIsLoading(false);
      }
    }
  }, []);

  const refetch = load;

  useEffect(() => {
    const ignore = { current: false };
    void load(ignore);

    return () => {
      ignore.current = true;
    };
  }, [load]);

  return { data, isLoading, error, refetch };
}
