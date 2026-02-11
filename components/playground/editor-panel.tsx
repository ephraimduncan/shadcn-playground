"use client";

import { useState, useCallback } from "react";
import Editor, { type OnMount } from "@monaco-editor/react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { IconCopy, IconCheck, IconWand } from "@tabler/icons-react";

const DEFAULT_TSX_CODE = `import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function CardWithForm() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>
          Deploy your new project in one-click.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Name of your project"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="framework">Framework</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue
                    placeholder="Select"
                  />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next">
                    Next.js
                  </SelectItem>
                  <SelectItem value="sveltekit">
                    SvelteKit
                  </SelectItem>
                  <SelectItem value="astro">
                    Astro
                  </SelectItem>
                  <SelectItem value="nuxt">
                    Nuxt.js
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  )
}`;

const DEFAULT_CSS_CODE = `@import "tailwindcss";

:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
  --secondary: oklch(0.97 0 0);
  --secondary-foreground: oklch(0.205 0 0);
  --muted: oklch(0.97 0 0);
  --muted-foreground: oklch(0.556 0 0);
  --accent: oklch(0.97 0 0);
  --accent-foreground: oklch(0.205 0 0);
  --border: oklch(0.922 0 0);
  --input: oklch(0.922 0 0);
  --ring: oklch(0.708 0 0);
  --radius: 0.625rem;
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --card: oklch(0.205 0 0);
  --card-foreground: oklch(0.985 0 0);
  --primary: oklch(0.87 0.00 0);
  --primary-foreground: oklch(0.205 0 0);
  --secondary: oklch(0.269 0 0);
  --secondary-foreground: oklch(0.985 0 0);
  --muted: oklch(0.269 0 0);
  --muted-foreground: oklch(0.708 0 0);
  --accent: oklch(0.371 0 0);
  --accent-foreground: oklch(0.985 0 0);
  --border: oklch(1 0 0 / 10%);
  --input: oklch(1 0 0 / 15%);
  --ring: oklch(0.556 0 0);
}`;

interface EditorPanelProps {
  onCursorChange?: (line: number, column: number) => void;
}

export function EditorPanel({ onCursorChange }: EditorPanelProps) {
  const { resolvedTheme } = useTheme();
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState("tsx");

  const handleEditorMount: OnMount = useCallback(
    (editor) => {
      editor.onDidChangeCursorPosition((e) => {
        onCursorChange?.(e.position.lineNumber, e.position.column);
      });
    },
    [onCursorChange]
  );

  const handleCopy = useCallback(() => {
    const code = activeTab === "tsx" ? DEFAULT_TSX_CODE : DEFAULT_CSS_CODE;
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [activeTab]);

  return (
    <div className="flex h-full flex-col bg-background">
      <div className="flex h-10 shrink-0 items-center justify-between border-b border-border px-2">
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="gap-0"
        >
          <TabsList variant="line" className="h-10">
            <TabsTrigger value="tsx" className="text-xs px-3 data-[state=active]:text-foreground">
              Component.tsx
            </TabsTrigger>
            <TabsTrigger value="css" className="text-xs px-3 data-[state=active]:text-foreground">
              globals.css
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="flex items-center gap-1">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon-sm"
                onClick={handleCopy}
                aria-label="Copy code"
              >
                {copied ? (
                  <IconCheck className="size-3.5 text-emerald-500" />
                ) : (
                  <IconCopy className="size-3.5" />
                )}
              </Button>
            </TooltipTrigger>
            <TooltipContent>Copy code</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon-sm"
                aria-label="Format code"
              >
                <IconWand className="size-3.5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Format</TooltipContent>
          </Tooltip>
        </div>
      </div>

      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="flex-1 min-h-0 gap-0"
      >
        <TabsContent value="tsx" className="h-full m-0 min-h-0">
          <Editor
            height="100%"
            language="typescript"
            theme={resolvedTheme === "dark" ? "vs-dark" : "light"}
            value={DEFAULT_TSX_CODE}
            onMount={handleEditorMount}
            options={{
              minimap: { enabled: false },
              fontSize: 13,
              fontFamily: "var(--font-geist-mono), monospace",
              lineHeight: 20,
              padding: { top: 12 },
              scrollBeyondLastLine: false,
              renderLineHighlight: "none",
              overviewRulerLanes: 0,
              hideCursorInOverviewRuler: true,
              overviewRulerBorder: false,
              scrollbar: {
                verticalScrollbarSize: 8,
                horizontalScrollbarSize: 8,
              },
              wordWrap: "on",
              tabSize: 2,
              automaticLayout: true,
            }}
          />
        </TabsContent>
        <TabsContent value="css" className="h-full m-0 min-h-0">
          <Editor
            height="100%"
            language="css"
            theme={resolvedTheme === "dark" ? "vs-dark" : "light"}
            value={DEFAULT_CSS_CODE}
            onMount={handleEditorMount}
            options={{
              minimap: { enabled: false },
              fontSize: 13,
              fontFamily: "var(--font-geist-mono), monospace",
              lineHeight: 20,
              padding: { top: 12 },
              scrollBeyondLastLine: false,
              renderLineHighlight: "none",
              overviewRulerLanes: 0,
              hideCursorInOverviewRuler: true,
              overviewRulerBorder: false,
              scrollbar: {
                verticalScrollbarSize: 8,
                horizontalScrollbarSize: 8,
              },
              wordWrap: "on",
              tabSize: 2,
              automaticLayout: true,
            }}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}
