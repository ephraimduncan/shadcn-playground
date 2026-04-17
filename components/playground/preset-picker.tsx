"use client";

import { useState } from "react";
import { toast } from "sonner";
import { IconPalette } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ConfirmReplaceDialog } from "@/components/playground/confirm-replace-dialog";
import { DEFAULT_GLOBALS_CSS } from "@/lib/playground/theme";
import {
  NAMED_PRESETS,
  decodePreset,
  isPresetCode,
  buildPresetCSS,
  type NamedPreset,
} from "@/lib/playground/preset";

interface PresetPickerProps {
  globalCSS: string;
  onApplyPreset: (css: string) => void;
}

export function PresetPicker({ globalCSS, onApplyPreset }: PresetPickerProps) {
  const [open, setOpen] = useState(false);
  const [customCode, setCustomCode] = useState("");
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [pendingCSS, setPendingCSS] = useState<string | null>(null);

  const hasCustomCSS = globalCSS !== DEFAULT_GLOBALS_CSS;

  function applyCSS(css: string) {
    onApplyPreset(css);
    setOpen(false);
    setCustomCode("");
    toast.success("Preset applied");
  }

  function tryApply(css: string) {
    if (hasCustomCSS) {
      setOpen(false);
      setPendingCSS(css);
      requestAnimationFrame(() => setConfirmOpen(true));
      return;
    }
    applyCSS(css);
  }

  function handleNamedPreset(preset: NamedPreset) {
    const css = buildPresetCSS(preset.config);
    if (!css) {
      toast.error("Failed to build preset theme");
      return;
    }
    tryApply(css);
  }

  function handleCustomCode() {
    let code = customCode.trim();
    const match = code.match(/^--preset\s+(.+)$/);
    if (match) code = match[1].trim();
    if (!code) return;

    if (!isPresetCode(code)) {
      toast.error("Invalid preset code");
      return;
    }

    const config = decodePreset(code);
    if (!config) {
      toast.error("Could not decode preset");
      return;
    }

    const css = buildPresetCSS(config);
    if (!css) {
      toast.error("Failed to build theme from preset");
      return;
    }

    tryApply(css);
  }

  return (
    <>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            data-slot="preset-picker-trigger"
          >
            <IconPalette className="size-3.5" />
            Apply preset
          </Button>
        </PopoverTrigger>
        <PopoverContent align="start" className="w-72 p-0">
          <div className="space-y-0.5 px-1 pt-1">
            {NAMED_PRESETS.map((preset) => (
              <button
                key={preset.name}
                onClick={() => handleNamedPreset(preset)}
                className="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground"
              >
                <span className="shrink-0 font-medium">{preset.title}</span>
                <span className="ml-auto truncate text-right text-xs text-muted-foreground">
                  {preset.description}
                </span>
              </button>
            ))}
          </div>

          <div className="border-t p-3 mt-1">
            <p className="mb-2 text-xs text-muted-foreground">
              Custom preset code
            </p>
            <div className="flex gap-1.5">
              <Input
                value={customCode}
                onChange={(e) => setCustomCode(e.target.value)}
                placeholder="e.g. aB3k"
                className="h-7 text-sm"
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleCustomCode();
                }}
              />
              <Button
                size="sm"
                variant="secondary"
                className="h-7"
                onClick={handleCustomCode}
                disabled={!customCode.trim()}
              >
                Apply
              </Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>

      <ConfirmReplaceDialog
        open={confirmOpen}
        onOpenChange={setConfirmOpen}
        title="Replace current globals.css?"
        description="Your current global CSS will be replaced with the preset theme."
        onConfirm={() => {
          if (pendingCSS) applyCSS(pendingCSS);
          setPendingCSS(null);
          setConfirmOpen(false);
        }}
        onCancel={() => setPendingCSS(null)}
      />
    </>
  );
}
