"use client";

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import {
  IconSun,
  IconMoon,
  IconLayoutColumns,
  IconTerminal2,
  IconShare,
  IconRotate,
  IconReload,
  IconWand,
  IconBrandGithub,
  IconPalette,
  IconSparkles,
} from "@tabler/icons-react";

export interface CommandPaletteActions {
  toggleTheme: () => void;
  toggleLayout: () => void;
  toggleConsole: () => void;
  copyShareLink: () => void;
  reset: () => void;
  reloadPreview: () => void;
  format: () => void;
  openGithub: () => void;
  openPresets: () => void;
  openExamples: () => void;
}

interface CommandPaletteProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  actions: CommandPaletteActions;
}

export function CommandPalette({
  open,
  onOpenChange,
  actions,
}: CommandPaletteProps) {
  const run = (fn: () => void) => {
    onOpenChange(false);
    requestAnimationFrame(fn);
  };

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <Command>
      <CommandInput placeholder="Type a command or search…" />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Content">
          <CommandItem onSelect={() => run(actions.openExamples)}>
            <IconSparkles />
            Insert example
            <CommandShortcut>⇧E</CommandShortcut>
          </CommandItem>
          <CommandItem onSelect={() => run(actions.openPresets)}>
            <IconPalette />
            Apply preset
            <CommandShortcut>⇧P</CommandShortcut>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="View">
          <CommandItem onSelect={() => run(actions.toggleLayout)}>
            <IconLayoutColumns />
            Toggle layout
          </CommandItem>
          <CommandItem onSelect={() => run(actions.toggleTheme)}>
            <IconSun />
            <IconMoon className="-ml-6" />
            Toggle theme
            <CommandShortcut>⌘.</CommandShortcut>
          </CommandItem>
          <CommandItem onSelect={() => run(actions.toggleConsole)}>
            <IconTerminal2 />
            Toggle console
            <CommandShortcut>⌘/</CommandShortcut>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Actions">
          <CommandItem onSelect={() => run(actions.format)}>
            <IconWand />
            Format
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
          <CommandItem onSelect={() => run(actions.reloadPreview)}>
            <IconReload />
            Reload preview
            <CommandShortcut>⌘⏎</CommandShortcut>
          </CommandItem>
          <CommandItem onSelect={() => run(actions.copyShareLink)}>
            <IconShare />
            Share (copy link)
            <CommandShortcut>⇧C</CommandShortcut>
          </CommandItem>
          <CommandItem onSelect={() => run(actions.reset)}>
            <IconRotate />
            Reset
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Help">
          <CommandItem onSelect={() => run(actions.openGithub)}>
            <IconBrandGithub />
            Open GitHub
          </CommandItem>
        </CommandGroup>
      </CommandList>
      </Command>
    </CommandDialog>
  );
}
