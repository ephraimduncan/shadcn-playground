"use client"

import { useState, useEffect, useRef } from "react"
import { transpileTSX, type TranspileResult } from "@/lib/playground/transpile"

const DEBOUNCE_MS = 150
const ERROR_GRACE_MS = 500

export function useTranspile(code: string): TranspileResult | null {
  const [result, setResult] = useState<TranspileResult | null>(null)
  const errorTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const codeRef = useRef(code)

  useEffect(() => {
    codeRef.current = code

    if (!code.trim()) {
      if (errorTimerRef.current) {
        clearTimeout(errorTimerRef.current)
        errorTimerRef.current = null
      }
      setResult(null)
      return
    }

    const debounceTimer = setTimeout(() => {
      const transpiled = transpileTSX(code)

      if ("error" in transpiled) {
        if (errorTimerRef.current) clearTimeout(errorTimerRef.current)
        errorTimerRef.current = setTimeout(() => {
          if (codeRef.current === code) {
            setResult(transpiled)
          }
        }, ERROR_GRACE_MS)
      } else {
        if (errorTimerRef.current) {
          clearTimeout(errorTimerRef.current)
          errorTimerRef.current = null
        }
        setResult(transpiled)
      }
    }, DEBOUNCE_MS)

    return () => {
      clearTimeout(debounceTimer)
    }
  }, [code])

  useEffect(() => {
    return () => {
      if (errorTimerRef.current) clearTimeout(errorTimerRef.current)
    }
  }, [])

  return result
}
