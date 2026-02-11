"use client"

import { useRef, useEffect, useCallback, useState, useMemo } from "react"
import { generateIframeHTML } from "@/lib/playground/iframe-html"
import type { TranspileResult } from "@/lib/playground/transpile"

export type PreviewStatus = "idle" | "compiling" | "ready" | "error"

interface PreviewIframeProps {
  compilationResult: TranspileResult | null
  theme: string
  onRuntimeError: (message: string) => void
  onStatusChange: (status: PreviewStatus) => void
}

export function PreviewIframe({
  compilationResult,
  theme,
  onRuntimeError,
  onStatusChange,
}: PreviewIframeProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [iframeReady, setIframeReady] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pendingCodeRef = useRef<string | null>(null)

  useEffect(() => { setMounted(true) }, [])

  const initialThemeRef = useRef(theme)

  const html = useMemo(
    () => (mounted ? generateIframeHTML(initialThemeRef.current === "dark" ? "dark" : "light") : undefined),
    [mounted],
  )

  const sendCode = useCallback(
    (js: string) => {
      const iframe = iframeRef.current
      if (!iframe?.contentWindow) return
      if (!iframeReady) {
        pendingCodeRef.current = js
        return
      }
      onStatusChange("compiling")
      iframe.contentWindow.postMessage({ type: "code", js }, "*")
    },
    [iframeReady, onStatusChange],
  )

  useEffect(() => {
    const handler = (e: MessageEvent) => {
      if (e.source !== iframeRef.current?.contentWindow) return

      if (e.data.type === "iframe-ready") {
        setIframeReady(true)
      }

      if (e.data.type === "render-complete") {
        onRuntimeError("")
        onStatusChange("ready")
      }

      if (e.data.type === "runtime-error") {
        onRuntimeError(e.data.message)
        onStatusChange("error")
      }
    }

    window.addEventListener("message", handler)
    return () => window.removeEventListener("message", handler)
  }, [onRuntimeError, onStatusChange])

  useEffect(() => {
    if (!iframeReady) return
    if (pendingCodeRef.current) {
      sendCode(pendingCodeRef.current)
      pendingCodeRef.current = null
    }
  }, [iframeReady, sendCode])

  useEffect(() => {
    if (!compilationResult) return
    if ("error" in compilationResult) {
      onStatusChange("error")
      return
    }
    sendCode(compilationResult.js)
  }, [compilationResult, sendCode, onStatusChange])

  useEffect(() => {
    const iframe = iframeRef.current
    if (!iframe?.contentWindow || !iframeReady) return
    iframe.contentWindow.postMessage({ type: "theme", value: theme }, "*")
  }, [theme, iframeReady])

  if (!html) return null

  return (
    <iframe
      ref={iframeRef}
      srcDoc={html}
      sandbox="allow-scripts allow-same-origin"
      className="h-full w-full border-0"
      title="Preview"
    />
  )
}
