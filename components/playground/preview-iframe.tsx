"use client";

import { useRef, useEffect, useCallback, useState, useMemo } from "react";
import { generateIframeHTML } from "@/lib/playground/iframe-html";
import type { TranspileResult } from "@/lib/playground/transpile";
import { injectGoogleFontImports } from "@/lib/playground/google-fonts";

export type PreviewStatus = "idle" | "compiling" | "ready" | "error";

export type ConsoleEntry = {
  id: string;
  method: "log" | "warn" | "error" | "info";
  args: string[];
  timestamp: number;
};

interface PreviewIframeProps {
  compilationResult: TranspileResult | null;
  tailwindCSS: string | null;
  globalCSS: string;
  theme: string;
  onRuntimeError: (message: string) => void;
  onStatusChange: (status: PreviewStatus) => void;
  onConsoleMessage: (entry: ConsoleEntry) => void;
}

export function PreviewIframe({
  compilationResult,
  tailwindCSS,
  globalCSS,
  theme,
  onRuntimeError,
  onStatusChange,
  onConsoleMessage,
}: PreviewIframeProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [iframeReady, setIframeReady] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pendingCodeRef = useRef<string | null>(null);
  const pendingGlobalCSSRef = useRef<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const initialThemeRef = useRef(theme);

  const html = useMemo(
    () =>
      mounted
        ? generateIframeHTML(
            initialThemeRef.current === "dark" ? "dark" : "light",
          )
        : undefined,
    [mounted],
  );

  const sendCode = useCallback(
    (js: string) => {
      const iframe = iframeRef.current;
      if (!iframe?.contentWindow) return;
      if (!iframeReady) {
        pendingCodeRef.current = js;
        return;
      }
      onStatusChange("compiling");
      iframe.contentWindow.postMessage({ type: "code", js }, "*");
    },
    [iframeReady, onStatusChange],
  );

  const sendGlobalCSS = useCallback(
    (css: string) => {
      const iframe = iframeRef.current;
      if (!iframe?.contentWindow) return;
      const processedCSS = injectGoogleFontImports(css);
      if (!iframeReady) {
        pendingGlobalCSSRef.current = processedCSS;
        return;
      }
      iframe.contentWindow.postMessage(
        { type: "theme-css", css: processedCSS },
        "*",
      );
    },
    [iframeReady],
  );

  useEffect(() => {
    const handler = (e: MessageEvent) => {
      if (e.source !== iframeRef.current?.contentWindow) return;

      if (e.data.type === "iframe-ready") {
        setIframeReady(true);
      }

      if (e.data.type === "render-complete") {
        onRuntimeError("");
        onStatusChange("ready");
      }

      if (e.data.type === "runtime-error") {
        onRuntimeError(e.data.message);
        onStatusChange("error");
      }

      if (e.data.type === "console") {
        onConsoleMessage({
          id: crypto.randomUUID(),
          method: e.data.method,
          args: e.data.args,
          timestamp: Date.now(),
        });
      }
    };

    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, [onRuntimeError, onStatusChange, onConsoleMessage]);

  useEffect(() => {
    if (!compilationResult) {
      const iframe = iframeRef.current;
      if (iframe?.contentWindow && iframeReady) {
        iframe.contentWindow.postMessage({ type: "clear" }, "*");
        onRuntimeError("");
        onStatusChange("idle");
      }
      return;
    }
    if ("error" in compilationResult) {
      onStatusChange("error");
      return;
    }
    sendCode(compilationResult.js);
  }, [
    compilationResult,
    sendCode,
    onStatusChange,
    iframeReady,
    onRuntimeError,
  ]);

  useEffect(() => {
    if (!iframeReady) return;
    sendGlobalCSS(globalCSS);
  }, [globalCSS, sendGlobalCSS, iframeReady]);

  useEffect(() => {
    if (!iframeReady) return;
    if (pendingCodeRef.current) {
      sendCode(pendingCodeRef.current);
      pendingCodeRef.current = null;
    }
    if (pendingGlobalCSSRef.current !== null) {
      sendGlobalCSS(pendingGlobalCSSRef.current);
      pendingGlobalCSSRef.current = null;
    }
  }, [iframeReady, sendCode, sendGlobalCSS]);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe?.contentWindow || !iframeReady || tailwindCSS === null) return;
    iframe.contentWindow.postMessage(
      { type: "tailwind-css", css: tailwindCSS },
      "*",
    );
  }, [tailwindCSS, iframeReady]);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe?.contentWindow || !iframeReady) return;
    iframe.contentWindow.postMessage({ type: "theme", value: theme }, "*");
  }, [theme, iframeReady]);

  if (!html) return null;

  return (
    <iframe
      ref={iframeRef}
      srcDoc={html}
      sandbox="allow-scripts"
      className="h-full w-full border-0"
      title="Preview"
    />
  );
}
