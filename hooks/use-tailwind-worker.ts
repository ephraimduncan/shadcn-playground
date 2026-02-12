"use client";

import { useState, useEffect, useRef, useCallback } from "react";

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

export function useTailwindWorker(candidates: string[]) {
  const [css, setCss] = useState<string | null>(null);
  const [ready, setReady] = useState(false);
  const workerRef = useRef<Worker | null>(null);
  const idRef = useRef(0);
  const prevKeyRef = useRef("");
  const uiCandidatesRef = useRef<string[]>([]);

  useEffect(() => {
    loadUiCandidates().then((c) => {
      uiCandidatesRef.current = c;
    });
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
        setCss(e.data.css);
      } else if (e.data.type === "error") {
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

  const compile = useCallback(
    (classes: string[]) => {
      const worker = workerRef.current;
      if (!worker || !ready) return;

      const merged = new Set([...uiCandidatesRef.current, ...classes]);
      if (merged.size === 0) return;

      const sorted = Array.from(merged).sort();
      const key = sorted.join(" ");
      if (key === prevKeyRef.current) return;
      prevKeyRef.current = key;

      const id = ++idRef.current;
      worker.postMessage({ type: "compile", candidates: sorted, id });
    },
    [ready],
  );

  useEffect(() => {
    compile(candidates);
  }, [candidates, compile]);

  return css;
}
