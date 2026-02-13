"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import Editor, { type BeforeMount } from "@monaco-editor/react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  IconCopy,
  IconCheck,
  IconWand,
  IconLoader2,
  IconRotate,
} from "@tabler/icons-react";
import { toast } from "sonner";
import type { TranspileError } from "@/lib/playground/transpile";
import type { editor } from "monaco-editor";
import {
  MonacoJsxSyntaxHighlight,
  getWorker,
} from "monaco-jsx-syntax-highlight";
import pierreDarkJson from "@/lib/playground/themes/pierre-dark.json";
import pierreLightJson from "@/lib/playground/themes/pierre-light.json";
import { DEFAULT_GLOBALS_CSS } from "@/lib/playground/theme";

export const DEFAULT_TSX_CODE = `import * as React from "react";
import Link from "next/link";
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
} from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { Spinner } from "@/components/ui/spinner";
import { Switch } from "@/components/ui/switch";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  AudioLinesIcon,
  ArrowUpIcon,
  BadgeCheckIcon,
  ChevronRightIcon,
  MinusIcon,
  PlusIcon,
  Search,
} from "lucide-react";
import {
  IconCheck,
  IconInfoCircle,
  IconPlus,
  IconStar,
} from "@tabler/icons-react";

export function RootComponents() {
  return (
    <div className="flex min-h-full items-start justify-center p-10">
      <div className="grid grid-cols-2 gap-8">
        <div className="flex flex-col gap-6">
          <EmptyAvatarGroup />
          <SpinnerBadge />
          <ButtonGroupInputGroup />
          <FieldSlider />
          <InputGroupDemo />
        </div>
        <div className="flex flex-col gap-6">
          <InputGroupButtonExample />
          <ItemDemo />
          <FieldSeparator className="my-4">Appearance Settings</FieldSeparator>
          <AppearanceSettings />
        </div>
      </div>
    </div>
  );
}

function AppearanceSettings() {
  const [gpuCount, setGpuCount] = React.useState(8);

  const handleGpuAdjustment = React.useCallback((adjustment: number) => {
    setGpuCount((prevCount) =>
      Math.max(1, Math.min(99, prevCount + adjustment)),
    );
  }, []);

  const handleGpuInputChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = parseInt(e.target.value, 10);
      if (!Number.isNaN(value) && value >= 1 && value <= 99) {
        setGpuCount(value);
      }
    },
    [],
  );

  return (
    <FieldSet>
      <FieldGroup>
        <FieldSet>
          <FieldLegend>Compute Environment</FieldLegend>
          <FieldDescription>
            Select the compute environment for your cluster.
          </FieldDescription>
          <RadioGroup defaultValue="kubernetes">
            <FieldLabel htmlFor="kubernetes-r2h">
              <Field orientation="horizontal">
                <FieldContent>
                  <FieldTitle>Kubernetes</FieldTitle>
                  <FieldDescription>
                    Run GPU workloads on a K8s configured cluster. This is the
                    default.
                  </FieldDescription>
                </FieldContent>
                <RadioGroupItem
                  value="kubernetes"
                  id="kubernetes-r2h"
                  aria-label="Kubernetes"
                />
              </Field>
            </FieldLabel>
            <FieldLabel htmlFor="vm-z4k">
              <Field orientation="horizontal">
                <FieldContent>
                  <FieldTitle>Virtual Machine</FieldTitle>
                  <FieldDescription>
                    Access a VM configured cluster to run workloads. (Coming
                    soon)
                  </FieldDescription>
                </FieldContent>
                <RadioGroupItem
                  value="vm"
                  id="vm-z4k"
                  aria-label="Virtual Machine"
                />
              </Field>
            </FieldLabel>
          </RadioGroup>
        </FieldSet>
        <FieldSeparator />
        <Field orientation="horizontal">
          <FieldContent>
            <FieldLabel htmlFor="number-of-gpus-f6l">Number of GPUs</FieldLabel>
            <FieldDescription>You can add more later.</FieldDescription>
          </FieldContent>
          <ButtonGroup>
            <Input
              id="number-of-gpus-f6l"
              value={gpuCount}
              onChange={handleGpuInputChange}
              size={3}
              className="h-7 w-14! font-mono"
              maxLength={3}
            />
            <Button
              variant="outline"
              size="icon-sm"
              type="button"
              aria-label="Decrement"
              onClick={() => handleGpuAdjustment(-1)}
              disabled={gpuCount <= 1}
            >
              <MinusIcon />
            </Button>
            <Button
              variant="outline"
              size="icon-sm"
              type="button"
              aria-label="Increment"
              onClick={() => handleGpuAdjustment(1)}
              disabled={gpuCount >= 99}
            >
              <PlusIcon />
            </Button>
          </ButtonGroup>
        </Field>
        <FieldSeparator />
        <Field orientation="horizontal">
          <FieldContent>
            <FieldLabel htmlFor="tinting">Wallpaper Tinting</FieldLabel>
            <FieldDescription>
              Allow the wallpaper to be tinted.
            </FieldDescription>
          </FieldContent>
          <Switch id="tinting" defaultChecked />
        </Field>
      </FieldGroup>
    </FieldSet>
  );
}

function ButtonGroupInputGroup() {
  const [voiceEnabled, setVoiceEnabled] = React.useState(false);
  return (
    <ButtonGroup className="[--radius:9999rem]">
      <ButtonGroup>
        <Button variant="outline" size="icon" aria-label="Add">
          <PlusIcon />
        </Button>
      </ButtonGroup>
      <ButtonGroup className="flex-1">
        <InputGroup>
          <InputGroupInput
            placeholder={
              voiceEnabled ? "Record and send audio..." : "Send a message..."
            }
            disabled={voiceEnabled}
          />
          <InputGroupAddon align="inline-end">
            <Tooltip>
              <TooltipTrigger asChild>
                <InputGroupButton
                  onClick={() => setVoiceEnabled(!voiceEnabled)}
                  data-active={voiceEnabled}
                  className="data-[active=true]:bg-primary data-[active=true]:text-primary-foreground"
                  aria-pressed={voiceEnabled}
                  size="icon-xs"
                  aria-label="Voice Mode"
                >
                  <AudioLinesIcon />
                </InputGroupButton>
              </TooltipTrigger>
              <TooltipContent>Voice Mode</TooltipContent>
            </Tooltip>
          </InputGroupAddon>
        </InputGroup>
      </ButtonGroup>
    </ButtonGroup>
  );
}

function EmptyAvatarGroup() {
  return (
    <Empty className="flex-none border py-10">
      <EmptyHeader>
        <EmptyMedia>
          <AvatarGroup className="grayscale">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage
                src="https://github.com/maxleiter.png"
                alt="@maxleiter"
              />
              <AvatarFallback>LR</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage
                src="https://github.com/evilrabbit.png"
                alt="@evilrabbit"
              />
              <AvatarFallback>ER</AvatarFallback>
            </Avatar>
          </AvatarGroup>
        </EmptyMedia>
        <EmptyTitle>No Team Members</EmptyTitle>
        <EmptyDescription>
          Invite your team to collaborate on this project.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button size="sm">
          <PlusIcon />
          Invite Members
        </Button>
      </EmptyContent>
    </Empty>
  );
}

function FieldSlider() {
  const [value, setValue] = React.useState([200, 800]);
  return (
    <div className="w-full max-w-md">
      <Field>
        <FieldTitle>Price Range</FieldTitle>
        <FieldDescription>
          Set your budget range ($
          <span className="font-medium tabular-nums">{value[0]}</span> -{" "}
          <span className="font-medium tabular-nums">{value[1]}</span>).
        </FieldDescription>
        <Slider
          value={value}
          onValueChange={setValue}
          max={1000}
          min={0}
          step={10}
          className="mt-2 w-full"
          aria-label="Price Range"
        />
      </Field>
    </div>
  );
}

function InputGroupButtonExample() {
  const [isFavorite, setIsFavorite] = React.useState(false);

  return (
    <div className="grid w-full max-w-sm gap-6">
      <Label htmlFor="input-secure-19" className="sr-only">
        Input Secure
      </Label>
      <InputGroup className="[--radius:9999px]">
        <InputGroupInput id="input-secure-19" className="pl-0.5!" />
        <Popover>
          <PopoverTrigger asChild>
            <InputGroupAddon>
              <InputGroupButton
                variant="secondary"
                size="icon-xs"
                aria-label="Info"
              >
                <IconInfoCircle />
              </InputGroupButton>
            </InputGroupAddon>
          </PopoverTrigger>
          <PopoverContent
            align="start"
            alignOffset={10}
            className="flex flex-col gap-1 rounded-xl text-sm"
          >
            <p className="font-medium">Your connection is not secure.</p>
            <p>You should not enter any sensitive information on this site.</p>
          </PopoverContent>
        </Popover>
        <InputGroupAddon className="text-muted-foreground pl-1!">
          https://
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          <InputGroupButton
            onClick={() => setIsFavorite(!isFavorite)}
            size="icon-xs"
            aria-label="Favorite"
          >
            <IconStar
              data-favorite={isFavorite}
              className="data-[favorite=true]:fill-primary data-[favorite=true]:stroke-primary"
            />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}

function InputGroupDemo() {
  return (
    <div className="grid w-full max-w-sm gap-6">
      <InputGroup>
        <InputGroupInput placeholder="Search..." />
        <InputGroupAddon>
          <Search />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">12 results</InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="example.com" className="pl-1!" />
        <InputGroupAddon>
          <InputGroupText>https://</InputGroupText>
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          <Tooltip>
            <TooltipTrigger asChild>
              <InputGroupButton
                className="rounded-full"
                size="icon-xs"
                aria-label="Info"
              >
                <IconInfoCircle />
              </InputGroupButton>
            </TooltipTrigger>
            <TooltipContent>This is content in a tooltip.</TooltipContent>
          </Tooltip>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupTextarea placeholder="Ask, Search or Chat..." />
        <InputGroupAddon align="block-end">
          <InputGroupButton
            variant="outline"
            className="rounded-full"
            size="icon-xs"
            aria-label="Add"
          >
            <IconPlus />
          </InputGroupButton>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <InputGroupButton variant="ghost">Auto</InputGroupButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent side="top" align="start">
              <DropdownMenuItem>Auto</DropdownMenuItem>
              <DropdownMenuItem>Agent</DropdownMenuItem>
              <DropdownMenuItem>Manual</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <InputGroupText className="ml-auto">52% used</InputGroupText>
          <Separator orientation="vertical" className="h-4!" />
          <InputGroupButton
            variant="default"
            className="rounded-full"
            size="icon-xs"
          >
            <ArrowUpIcon />
            <span className="sr-only">Send</span>
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="@shadcn" />
        <InputGroupAddon align="inline-end">
          <div className="bg-primary text-foreground flex size-4 items-center justify-center rounded-full">
            <IconCheck className="size-3 text-white" />
          </div>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}

function ItemDemo() {
  return (
    <div className="flex w-full max-w-md flex-col gap-6">
      <Item variant="outline">
        <ItemContent>
          <ItemTitle>Two-factor authentication</ItemTitle>
          <ItemDescription className="text-pretty xl:hidden 2xl:block">
            Verify via email or phone number.
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button size="sm">Enable</Button>
        </ItemActions>
      </Item>
      <Item variant="outline" size="sm" asChild>
        <Link href="/">
          <ItemMedia>
            <BadgeCheckIcon className="size-5" />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Your profile has been verified.</ItemTitle>
          </ItemContent>
          <ItemActions>
            <ChevronRightIcon className="size-4" />
          </ItemActions>
        </Link>
      </Item>
    </div>
  );
}

function SpinnerBadge() {
  return (
    <div className="flex items-center gap-2">
      <Badge>
        <Spinner />
        Syncing
      </Badge>
      <Badge variant="secondary">
        <Spinner />
        Updating
      </Badge>
      <Badge variant="outline">
        <Spinner />
        Loading
      </Badge>
    </div>
  );
}`;

type EditorTab = "component.tsx" | "globals.css";

interface EditorPanelProps {
  code: string;
  onCodeChange: (code: string) => void;
  globalCode: string;
  onGlobalCodeChange: (code: string) => void;
  error?: TranspileError | null;
  runtimeError?: string;
  onReset?: () => void;
  onGlobalReset?: () => void;
}

function findIdentifierInSource(
  code: string,
  errorMessage: string,
): { line: number; startColumn: number; endColumn: number } | null {
  const patterns = [
    /(\w+) is not defined/,
    /(\w+) is not a function/,
    /Cannot read properties of (\w+)/,
    /(\w+) is not a constructor/,
    /Cannot find module ['"]([^'"]+)['"]/,
  ];

  let identifier: string | null = null;
  for (const pattern of patterns) {
    const match = errorMessage.match(pattern);
    if (match) {
      identifier = match[1];
      break;
    }
  }

  if (!identifier) return null;

  const lines = code.split("\n");
  for (let i = 0; i < lines.length; i++) {
    const col = lines[i].indexOf(identifier);
    if (col !== -1) {
      return {
        line: i + 1,
        startColumn: col + 1,
        endColumn: col + 1 + identifier.length,
      };
    }
  }

  return null;
}

const PRETTIER_OPTIONS = {
  semi: true,
  singleQuote: false,
  printWidth: 80,
  tabWidth: 2,
  trailingComma: "all" as const,
};

export function EditorPanel({
  code,
  onCodeChange,
  globalCode,
  onGlobalCodeChange,
  error,
  runtimeError,
  onReset,
  onGlobalReset = () => onGlobalCodeChange(DEFAULT_GLOBALS_CSS),
}: EditorPanelProps) {
  const { resolvedTheme } = useTheme();
  const [copied, setCopied] = useState(false);
  const [isFormatting, setIsFormatting] = useState(false);
  const [activeTab, setActiveTab] = useState<EditorTab>("component.tsx");
  const editorInstanceRef = useRef<editor.IStandaloneCodeEditor | null>(null);
  const monacoRef = useRef<typeof import("monaco-editor") | null>(null);
  const jsxHighlightDisposeRef = useRef<(() => void) | null>(null);
  const handleFormatRef = useRef<() => void>(() => {});
  const pendingCursorRestoreRef = useRef<{
    cursorOffset: number;
    scrollTop: number;
    scrollLeft: number;
    formattedCode: string;
  } | null>(null);
  const [isEditorReady, setIsEditorReady] = useState(false);

  const isComponentTab = activeTab === "component.tsx";
  const activeCode = isComponentTab ? code : globalCode;
  const activeLanguage = isComponentTab ? "typescript" : "css";
  const activePath = isComponentTab
    ? "file:///component.tsx"
    : "file:///globals.css";
  const activeFilename = isComponentTab ? "component.tsx" : "globals.css";

  const handleFormat = useCallback(async () => {
    if (isFormatting || !activeCode.trim()) return;

    setIsFormatting(true);
    try {
      const editorInstance = editorInstanceRef.current;
      const model = editorInstance?.getModel();
      const position = editorInstance?.getPosition();
      const cursorOffset = model && position ? model.getOffsetAt(position) : 0;
      const scrollTop = editorInstance?.getScrollTop() ?? 0;

      if (isComponentTab) {
        const [prettier, babel, estree] = await Promise.all([
          import("prettier/standalone"),
          import("prettier/plugins/babel"),
          import("prettier/plugins/estree"),
        ]);

        const result = await prettier.formatWithCursor(activeCode, {
          cursorOffset,
          plugins: [babel, estree],
          parser: "babel-ts",
          ...PRETTIER_OPTIONS,
        });

        if (editorInstance && model) {
          pendingCursorRestoreRef.current = {
            cursorOffset: result.cursorOffset,
            scrollTop,
            scrollLeft: editorInstance.getScrollLeft(),
            formattedCode: result.formatted,
          };
        }

        onCodeChange(result.formatted);
      } else {
        const [prettier, postcss] = await Promise.all([
          import("prettier/standalone"),
          import("prettier/plugins/postcss"),
        ]);

        const result = await prettier.formatWithCursor(activeCode, {
          cursorOffset,
          plugins: [postcss],
          parser: "css",
          ...PRETTIER_OPTIONS,
        });

        if (editorInstance && model) {
          pendingCursorRestoreRef.current = {
            cursorOffset: result.cursorOffset,
            scrollTop,
            scrollLeft: editorInstance.getScrollLeft(),
            formattedCode: result.formatted,
          };
        }

        onGlobalCodeChange(result.formatted);
      }

      toast.success("Formatted");
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unknown error";
      toast.error(`Could not format: ${message}`);
    } finally {
      setIsFormatting(false);
    }
  }, [
    activeCode,
    isComponentTab,
    isFormatting,
    onCodeChange,
    onGlobalCodeChange,
  ]);

  handleFormatRef.current = handleFormat;

  useEffect(() => {
    const pending = pendingCursorRestoreRef.current;
    if (!pending) return;
    if (pending.formattedCode !== activeCode) return;

    const editorInstance = editorInstanceRef.current;
    const model = editorInstance?.getModel();
    if (!editorInstance || !model) return;

    if (model.getValue() !== pending.formattedCode) return;

    const newPosition = model.getPositionAt(pending.cursorOffset);
    editorInstance.setPosition(newPosition);
    editorInstance.setScrollTop(pending.scrollTop);
    editorInstance.setScrollLeft(pending.scrollLeft);
    pendingCursorRestoreRef.current = null;
  }, [activeCode]);

  useEffect(() => {
    const editorInstance = editorInstanceRef.current;
    if (!editorInstance) return;
    const model = editorInstance.getModel();
    if (!model) return;

    const monaco = monacoRef.current;
    if (!monaco) return;

    const markers: Parameters<typeof monaco.editor.setModelMarkers>[2] = [];

    if (!isComponentTab) {
      monaco.editor.setModelMarkers(model, "playground", markers);
      return;
    }

    if (error) {
      markers.push({
        startLineNumber: error.line,
        startColumn: error.column + 1,
        endLineNumber: error.line,
        endColumn: model.getLineMaxColumn(error.line),
        message: error.message,
        severity: monaco.MarkerSeverity.Error,
      });
    }

    if (runtimeError && !error) {
      const loc = findIdentifierInSource(code, runtimeError);
      if (loc) {
        markers.push({
          startLineNumber: loc.line,
          startColumn: loc.startColumn,
          endLineNumber: loc.line,
          endColumn: loc.endColumn,
          message: runtimeError,
          severity: monaco.MarkerSeverity.Error,
        });
      } else {
        markers.push({
          startLineNumber: 1,
          startColumn: 1,
          endLineNumber: 1,
          endColumn: model.getLineMaxColumn(1),
          message: runtimeError,
          severity: monaco.MarkerSeverity.Error,
        });
      }
    }

    monaco.editor.setModelMarkers(model, "playground", markers);
  }, [error, runtimeError, isComponentTab, code]);

  useEffect(() => {
    if (!isEditorReady) return;
    const editorInstance = editorInstanceRef.current;
    const monaco = monacoRef.current;
    if (!editorInstance || !monaco) return;

    if (!isComponentTab) {
      jsxHighlightDisposeRef.current?.();
      jsxHighlightDisposeRef.current = null;
      return;
    }

    const jsxHighlight = new MonacoJsxSyntaxHighlight(getWorker(), monaco);
    const { highlighter, dispose } = jsxHighlight.highlighterBuilder({
      editor: editorInstance,
      filePath: editorInstance.getModel()?.uri.toString(),
    });
    highlighter();
    const disposeListener = editorInstance.onDidChangeModelContent(() =>
      highlighter(),
    );

    jsxHighlightDisposeRef.current = () => {
      disposeListener.dispose();
      dispose();
    };

    return () => {
      jsxHighlightDisposeRef.current?.();
      jsxHighlightDisposeRef.current = null;
    };
  }, [isComponentTab, isEditorReady]);

  const handleBeforeMount: BeforeMount = useCallback((monaco) => {
    function defineVscodeTheme(name: string, json: typeof pierreDarkJson) {
      const base: editor.BuiltinTheme = json.type === "dark" ? "vs-dark" : "vs";
      const rules: editor.ITokenThemeRule[] = [];
      for (const tc of json.tokenColors) {
        const scopes = Array.isArray(tc.scope) ? tc.scope : [tc.scope];
        for (const scope of scopes) {
          if (!scope) continue;
          rules.push({
            token: scope,
            foreground: tc.settings.foreground?.replace("#", ""),
            fontStyle: tc.settings.fontStyle,
          });
        }
      }
      monaco.editor.defineTheme(name, {
        base,
        inherit: true,
        rules,
        colors: { ...json.colors },
      });
    }

    defineVscodeTheme("pierre-dark", pierreDarkJson);
    defineVscodeTheme("pierre-light", pierreLightJson);

    monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
      jsx: monaco.languages.typescript.JsxEmit.ReactJSX,
      esModuleInterop: true,
      allowNonTsExtensions: true,
    });
    monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
      noSemanticValidation: true,
    });
  }, []);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(activeCode);
    setCopied(true);
    toast.success(`${activeFilename} copied to clipboard`);
    setTimeout(() => setCopied(false), 2000);
  }, [activeCode, activeFilename]);

  const handleReset = useCallback(() => {
    if (isComponentTab) {
      onReset?.();
    } else {
      onGlobalReset();
    }
  }, [isComponentTab, onReset, onGlobalReset]);

  return (
    <div className="flex h-full flex-col bg-background">
      <div className="flex h-10 shrink-0 items-center justify-between border-b border-border pr-3">
        <div className="flex h-full">
          <button
            type="button"
            onClick={() => setActiveTab("component.tsx")}
            className={`inline-flex h-full items-center px-3 text-xs font-medium leading-none transition-colors ${
              isComponentTab
                ? "bg-background text-foreground border-b-2 border-primary font-semibold"
                : "bg-background/80 text-muted-foreground hover:bg-background border-b-2 border-transparent"
            }`}
          >
            component.tsx
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("globals.css")}
            className={`inline-flex h-full items-center px-3 text-xs font-medium leading-none transition-colors ${
              isComponentTab
                ? "bg-background/80 text-muted-foreground hover:bg-background border-b-2 border-transparent"
                : "bg-background text-foreground border-b-2 border-primary font-semibold"
            }`}
          >
            globals.css
          </button>
        </div>
        <div className="flex items-center gap-1">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon-sm"
                onClick={handleCopy}
                aria-label={`Copy ${activeFilename}`}
              >
                {copied ? (
                  <IconCheck className="size-3.5 text-emerald-500" />
                ) : (
                  <IconCopy className="size-3.5" />
                )}
              </Button>
            </TooltipTrigger>
            <TooltipContent>{`Copy ${activeFilename}`}</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon-sm"
                onClick={handleReset}
                aria-label={`Reset ${activeFilename}`}
              >
                <IconRotate className="size-3.5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>{`Reset ${activeFilename}`}</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon-sm"
                onClick={handleFormat}
                aria-label="Format code"
                disabled={isFormatting}
              >
                {isFormatting ? (
                  <IconLoader2 className="size-3.5 animate-spin" />
                ) : (
                  <IconWand className="size-3.5" />
                )}
              </Button>
            </TooltipTrigger>
            <TooltipContent>Format</TooltipContent>
          </Tooltip>
        </div>
      </div>

      <div className="flex-1 min-h-0">
        <Editor
          height="100%"
          language={activeLanguage}
          path={activePath}
          theme={resolvedTheme === "dark" ? "pierre-dark" : "pierre-light"}
          value={activeCode}
          onChange={(value) => {
            const next = value ?? "";
            if (isComponentTab) {
              onCodeChange(next);
            } else {
              onGlobalCodeChange(next);
            }
          }}
          beforeMount={handleBeforeMount}
          onMount={(instance, monaco) => {
            editorInstanceRef.current = instance;
            monacoRef.current = monaco;
            instance.addAction({
              id: "format-document",
              label: "Format Document",
              keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS],
              run: () => {
                handleFormatRef.current();
              },
            });

            if ("fonts" in document) {
              void document.fonts
                .load("400 14px 'Berkeley Mono'")
                .then(() => {
                  monaco.editor.remeasureFonts();
                  instance.render();
                })
                .catch(() => undefined);
            }
            setIsEditorReady(true);
          }}
          options={{
            minimap: { enabled: false },
            fontSize: 15,
            fontFamily: "'Berkeley Mono', monospace",
            fontWeight: "550",
            lineHeight: 24,
            padding: { top: 12 },
            scrollBeyondLastLine: false,
            renderLineHighlight: "none",
            overviewRulerLanes: 0,
            hideCursorInOverviewRuler: true,
            overviewRulerBorder: false,
            scrollbar: {
              verticalScrollbarSize: 8,
              horizontalScrollbarSize: 8,
              useShadows: false,
            },
            wordWrap: "on",
            tabSize: 2,
            stickyScroll: { enabled: false },
            automaticLayout: true,
            "semanticHighlighting.enabled": false,
          }}
        />
      </div>
    </div>
  );
}
