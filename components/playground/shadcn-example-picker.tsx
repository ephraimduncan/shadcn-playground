"use client";

import { useMemo, useState } from "react";
import { toast } from "sonner";
import { IconChevronDown, IconLoader2 } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import type { ShadcnExample } from "@/lib/playground/shadcn-examples-index";
import { useShadcnExamples } from "@/hooks/use-shadcn-examples";

interface ShadcnExamplePickerProps {
  code: string;
  onReplaceCode: (nextCode: string) => void;
}

export function ShadcnExamplePicker({
  code,
  onReplaceCode,
}: ShadcnExamplePickerProps) {
  const { data, isLoading, error, refetch } = useShadcnExamples();
  const [selectedExampleId, setSelectedExampleId] = useState<string>("");
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [pendingExample, setPendingExample] = useState<ShadcnExample | null>(
    null,
  );

  const selectedSelection = useMemo(() => {
    if (!data) return null;

    for (const component of data.components) {
      const match = component.examples.find(
        (example) => example.id === selectedExampleId,
      );
      if (match) {
        return {
          componentLabel: component.label,
          exampleLabel: match.label,
        };
      }
    }

    return null;
  }, [data, selectedExampleId]);

  const applyExample = (example: ShadcnExample) => {
    onReplaceCode(example.code);
    setSelectedExampleId(example.id);
    toast.success(`Inserted ${example.label} example`);
  };

  const handleExampleClick = (example: ShadcnExample) => {
    if (code === example.code) {
      toast.info("That example is already loaded.");
      return;
    }

    if (code.trim().length > 0) {
      setPendingExample(example);
      setConfirmOpen(true);
      return;
    }

    applyExample(example);
  };

  if (isLoading) {
    return (
      <Button variant="outline" size="sm" disabled>
        <IconLoader2 className="size-3.5 animate-spin" />
        Loading examples
      </Button>
    );
  }

  if (error) {
    return (
      <Button variant="outline" size="sm" onClick={refetch}>
        Retry examples
      </Button>
    );
  }

  if (!data || data.components.length === 0) {
    return (
      <Button variant="outline" size="sm" disabled>
        No examples
      </Button>
    );
  }

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm">
            <span className="truncate">
              {selectedSelection
                ? `${selectedSelection.componentLabel} - ${selectedSelection.exampleLabel}`
                : "Insert shadcn example"}
            </span>
            <IconChevronDown className="size-3.5" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          align="start"
          className="no-scrollbar max-h-[66vh] overflow-y-auto"
        >
          {data.components.map((component) => (
            <DropdownMenuSub key={component.id}>
              <DropdownMenuSubTrigger>{component.label}</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent className="no-scrollbar max-h-[66vh] overflow-y-auto">
                  {component.examples.map((example) => (
                    <DropdownMenuItem
                      key={example.id}
                      data-checked={example.id === selectedExampleId}
                      onClick={() => handleExampleClick(example)}
                    >
                      {example.label}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <AlertDialog open={confirmOpen} onOpenChange={setConfirmOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Replace current component.tsx?</AlertDialogTitle>
            <AlertDialogDescription>
              Your current code will be replaced with the selected shadcn
              example.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setPendingExample(null)}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                if (pendingExample) {
                  applyExample(pendingExample);
                }
                setPendingExample(null);
                setConfirmOpen(false);
              }}
            >
              Replace
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
