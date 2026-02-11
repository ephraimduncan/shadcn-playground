import { importMap } from "./modules"
import { themeVarsCSS, tailwindThemeConfig } from "./theme"

export function generateIframeHTML(initialTheme: "light" | "dark"): string {
  const darkClass = initialTheme === "dark" ? " class=\"dark\"" : ""
  const importMapJSON = JSON.stringify(importMap, null, 2)

  return `<!DOCTYPE html>
<html lang="en"${darkClass}>
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<script type="importmap">
${importMapJSON}
</script>
<style>${themeVarsCSS}</style>
<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
<style type="text/tailwindcss">
${tailwindThemeConfig}
</style>
<style>
  #__error {
    position: fixed;
    inset: 0;
    z-index: 9999;
    display: none;
    align-items: flex-end;
    padding: 16px;
    background: rgba(0,0,0,0.15);
    backdrop-filter: blur(2px);
    font-family: ui-monospace, monospace;
  }
  #__error.visible { display: flex; }
  #__error-content {
    width: 100%;
    max-height: 40%;
    overflow: auto;
    padding: 12px 16px;
    border-radius: 8px;
    background: oklch(0.15 0.01 15);
    color: oklch(0.9 0.05 25);
    font-size: 13px;
    line-height: 1.5;
    white-space: pre-wrap;
    word-break: break-word;
  }
</style>
</head>
<body style="margin:0">
<div id="root"></div>
<div id="__error"><div id="__error-content"></div></div>
<script type="module">
import React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));
let prevBlobUrl = null;

class ErrorBoundary extends React.Component {
  constructor(props) { super(props); this.state = { error: null }; }
  static getDerivedStateFromError(error) { return { error }; }
  componentDidCatch(error) {
    window.parent.postMessage({ type: "runtime-error", message: error.message, stack: error.stack }, "*");
  }
  render() {
    if (this.state.error) {
      return React.createElement("div", {
        style: { padding: 24, color: "oklch(0.9 0.05 25)", fontFamily: "ui-monospace, monospace", fontSize: 13 }
      }, this.state.error.message);
    }
    return this.props.children;
  }
}

function showError(msg) {
  const el = document.getElementById("__error");
  const content = document.getElementById("__error-content");
  content.textContent = msg;
  el.classList.add("visible");
}

function hideError() {
  document.getElementById("__error").classList.remove("visible");
}

window.addEventListener("message", async (e) => {
  if (e.data.type === "code") {
    try {
      hideError();
      window.__loopGuard = 0;
      const blob = new Blob([e.data.js], { type: "application/javascript" });
      const blobUrl = URL.createObjectURL(blob);
      const mod = await import(blobUrl);
      if (prevBlobUrl) URL.revokeObjectURL(prevBlobUrl);
      prevBlobUrl = blobUrl;
      const Comp = mod.default || Object.values(mod).find(v => typeof v === "function");
      if (typeof Comp !== "function") {
        root.render(null);
        window.parent.postMessage({ type: "render-complete" }, "*");
        return;
      }
      root.render(React.createElement(ErrorBoundary, { key: Date.now() }, React.createElement(Comp)));
      window.parent.postMessage({ type: "render-complete" }, "*");
    } catch (err) {
      showError(err.message);
      window.parent.postMessage({ type: "runtime-error", message: err.message, stack: err.stack || "" }, "*");
    }
  }

  if (e.data.type === "clear") {
    hideError();
    root.render(null);
    if (prevBlobUrl) { URL.revokeObjectURL(prevBlobUrl); prevBlobUrl = null; }
    return;
  }

  if (e.data.type === "theme") {
    document.documentElement.classList.toggle("dark", e.data.value === "dark");
  }
});

window.onerror = (msg) => {
  showError(String(msg));
  window.parent.postMessage({ type: "runtime-error", message: String(msg), stack: "" }, "*");
};

window.onunhandledrejection = (e) => {
  const msg = e.reason?.message || String(e.reason);
  showError(msg);
  window.parent.postMessage({ type: "runtime-error", message: msg, stack: e.reason?.stack || "" }, "*");
};

window.parent.postMessage({ type: "iframe-ready" }, "*");
</script>
</body>
</html>`
}
