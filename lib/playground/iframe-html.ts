import { importMap } from "./modules";
import { DEFAULT_GLOBALS_CSS } from "./theme";
import { sanitizeGlobalCSSForPreview } from "./google-fonts";

const LOCAL_PRELOADS = [
  "/playground/modules/react.js",
  "/playground/modules/react-jsx-runtime.js",
  "/playground/modules/react-dom.js",
  "/playground/modules/react-dom-client.js",
  "/playground/modules/radix-ui.js",
  "/playground/modules/ui.js",
  "/playground/modules/utils.js",
  "/playground/modules/clsx.js",
  "/playground/modules/tailwind-merge.js",
  "/playground/modules/cva.js",
  "/playground/modules/base-ui.js",
  "/playground/modules/use-sync-external-store-shim.js",
];

const preloadTags = LOCAL_PRELOADS.map(
  (href) => `<link rel="modulepreload" href="${href}" />`,
).join("\n");

export function generateIframeHTML(initialTheme: "light" | "dark"): string {
  const darkClass = initialTheme === "dark" ? ' class="dark"' : "";
  const importMapJSON = JSON.stringify(importMap, null, 2);

  return `<!DOCTYPE html>
<html lang="en"${darkClass}>
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<script type="importmap">
${importMapJSON}
</script>
${preloadTags}
<style id="__globals-css">${sanitizeGlobalCSSForPreview(DEFAULT_GLOBALS_CSS)}</style>
<style id="__tailwind"></style>
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
import { Tooltip as RadixTooltip } from "radix-ui";

const TooltipProvider = RadixTooltip.Provider || RadixTooltip.TooltipProvider;
const root = createRoot(document.getElementById("root"));
let prevBlobUrl = null;

const _origConsole = { log: console.log, warn: console.warn, error: console.error, info: console.info };
['log', 'warn', 'error', 'info'].forEach(method => {
  console[method] = (...args) => {
    _origConsole[method]('[SHADCN/PLAY]', ...args);
    window.parent.postMessage({
      type: 'console',
      method,
      args: args.map(a => {
        try { return typeof a === 'object' ? JSON.stringify(a) : String(a); }
        catch { return String(a); }
      })
    }, '*');
  };
});

let latestComp = null;
let errorKey = 0;
let hadError = false;
const forceUpdateRef = { current: null };

class ErrorBoundary extends React.Component {
  constructor(props) { super(props); this.state = { error: null }; }
  static getDerivedStateFromError(error) { return { error }; }
  componentDidCatch(error) {
    hadError = true;
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

function AppShell() {
  const [, forceUpdate] = React.useReducer(x => x + 1, 0);
  forceUpdateRef.current = forceUpdate;
  if (!latestComp) return null;
  const content = React.createElement(latestComp);
  if (!TooltipProvider) return content;
  return React.createElement(TooltipProvider, null, content);
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

root.render(
  React.createElement(ErrorBoundary, { key: errorKey },
    React.createElement(AppShell)
  )
);

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
        latestComp = null;
        forceUpdateRef.current?.();
        window.parent.postMessage({ type: "render-complete" }, "*");
        return;
      }

      if (hadError) {
        errorKey++;
        hadError = false;
        latestComp = Comp;
        root.render(
          React.createElement(ErrorBoundary, { key: errorKey },
            React.createElement(AppShell)
          )
        );
      } else {
        latestComp = Comp;
        forceUpdateRef.current?.();
      }
      window.parent.postMessage({ type: "render-complete" }, "*");
    } catch (err) {
      hadError = true;
      showError(err.message);
      window.parent.postMessage({ type: "runtime-error", message: err.message, stack: err.stack || "" }, "*");
    }
  }

  if (e.data.type === "clear") {
    hideError();
    latestComp = null;
    forceUpdateRef.current?.();
    if (prevBlobUrl) { URL.revokeObjectURL(prevBlobUrl); prevBlobUrl = null; }
    return;
  }

  if (e.data.type === "tailwind-css") {
    document.getElementById("__tailwind").textContent = e.data.css;
  }

  if (e.data.type === "theme-css") {
    const globalsCSS = document.getElementById("__globals-css");
    if (globalsCSS) {
      globalsCSS.textContent = e.data.css;
    }
  }

  if (e.data.type === "theme") {
    document.documentElement.classList.toggle("dark", e.data.value === "dark");
  }
});

window.onerror = (msg) => {
  hadError = true;
  showError(String(msg));
  window.parent.postMessage({ type: "runtime-error", message: String(msg), stack: "" }, "*");
};

window.onunhandledrejection = (e) => {
  hadError = true;
  const msg = e.reason?.message || String(e.reason);
  showError(msg);
  window.parent.postMessage({ type: "runtime-error", message: msg, stack: e.reason?.stack || "" }, "*");
};

window.parent.postMessage({ type: "iframe-ready" }, "*");
</script>
</body>
</html>`;
}
