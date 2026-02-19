"use client";

import { useCallback, useEffect, useRef, useState } from "react";
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
  const requestIdRef = useRef(0);

  const load = useCallback(async () => {
    const requestId = requestIdRef.current + 1;
    requestIdRef.current = requestId;

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

      if (requestIdRef.current === requestId) {
        setData(validation.data);
      }
    } catch (err) {
      if (requestIdRef.current === requestId) {
        const message =
          err instanceof Error
            ? err.message
            : "Could not load shadcn examples.";
        setError(message);
        setData(null);
      }
    } finally {
      if (requestIdRef.current === requestId) {
        setIsLoading(false);
      }
    }
  }, []);

  const refetch = useCallback(() => {
    void load();
  }, [load]);

  useEffect(() => {
    void load();

    return () => {
      requestIdRef.current += 1;
    };
  }, [load]);

  return { data, isLoading, error, refetch };
}
