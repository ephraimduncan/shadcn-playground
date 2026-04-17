"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { injectGoogleFontImports } from "@/lib/playground/google-fonts";

type WorkerMessage =
  | { type: "ready" }
  | { type: "css"; css: string; id: number }
  | { type: "error"; message: string; id?: number };

let uiCandidatesPromise: Promise<string[]> | null = null;

function loadUiCandidates(): Promise<string[]> {
  if (!uiCandidatesPromise) {
    uiCandidatesPromise = fetch("/playground/ui-candidates.json")
      .then((r) => (r.ok ? (r.json() as Promise<string[]>) : []))
      .catch(() => [] as string[]);
  }
  return uiCandidatesPromise;
}

export function useTailwindWorker(candidates: string[], userCss: string) {
  const [css, setCss] = useState<string | null>(null);
  const [ready, setReady] = useState(false);
  const workerRef = useRef<Worker | null>(null);
  const idRef = useRef(0);
  const prevKeyRef = useRef("");
  const uiCandidatesRef = useRef<string[]>([]);
  const latestCandidatesRef = useRef(candidates);
  latestCandidatesRef.current = candidates;

  const compile = useCallback(
    (classes: string[]) => {
      const worker = workerRef.current;
      if (!worker || !ready) return;

      const merged = new Set([...uiCandidatesRef.current, ...classes]);
      const sorted = Array.from(merged).sort();
      const processedCss = injectGoogleFontImports(userCss);
      const key = `${processedCss}\n\n${sorted.join(" ")}`;
      if (key === prevKeyRef.current) return;
      prevKeyRef.current = key;

      const id = ++idRef.current;
      worker.postMessage({
        type: "compile",
        css: processedCss,
        candidates: sorted,
        id,
      });
    },
    [ready, userCss],
  );
  const latestCompileRef = useRef<(classes: string[]) => void>(() => {});
  latestCompileRef.current = compile;

  useEffect(() => {
    let cancelled = false;

    loadUiCandidates().then((c) => {
      if (cancelled) return;
      uiCandidatesRef.current = c;
      prevKeyRef.current = "";
      latestCompileRef.current(latestCandidatesRef.current);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    let worker: Worker;
    try {
      worker = new Worker("/playground/tailwind-worker.js");
    } catch {
      console.error("Failed to create Tailwind worker");
      return;
    }

    worker.onmessage = (e: MessageEvent<WorkerMessage>) => {
      if (e.data.type === "ready") {
        setReady(true);
      } else if (e.data.type === "css") {
        if (e.data.id !== idRef.current) return;
        setCss(e.data.css);
      } else if (e.data.type === "error") {
        if (e.data.id !== undefined && e.data.id !== idRef.current) return;
        console.error("Tailwind worker error:", e.data.message);
        setCss("");
      }
    };

    worker.onerror = () => {
      console.error("Tailwind worker failed to load");
      setCss("");
    };

    workerRef.current = worker;

    return () => {
      worker.terminate();
      workerRef.current = null;
    };
  }, []);

  useEffect(() => {
    compile(candidates);
  }, [candidates, compile]);

  return css;
}
