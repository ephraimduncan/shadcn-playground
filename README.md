# Shadcn Play

A playground for building and previewing [shadcn/ui](https://ui.shadcn.com) components with a live editor.

Built with [Next.js](https://nextjs.org), [Monaco Editor](https://microsoft.github.io/monaco-editor/), and [Tailwind CSS](https://tailwindcss.com).

![Shadcn Play](public/screenshot.png)

## Getting Started

```bash
bun install
bun dev
```

Open [http://localhost:3000](http://localhost:3000).

## Open Registry Items in Playground

Use the `Open in Playground` API to deep-link a public shadcn registry item:

```text
https://your-playground-domain.com/api/open?url=https://ui.shadcn.com/r/styles/new-york/login-01.json
```

The endpoint fetches the registry item JSON, picks the most playable file, and redirects to the editor with the code loaded inline.

You can also use the helper button component:

```tsx
import { OpenInPlaygroundButton } from "@/components/open-in-playground-button";

<OpenInPlaygroundButton
  baseUrl="https://your-playground-domain.com"
  url="https://ui.shadcn.com/r/styles/new-york/login-01.json"
/>;
```
