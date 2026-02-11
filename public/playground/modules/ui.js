// components/ui/aspect-ratio.tsx
import { AspectRatio as AspectRatioPrimitive } from "radix-ui";
import { jsx } from "react/jsx-runtime";
function AspectRatio({
  ...props
}) {
  return /* @__PURE__ */ jsx(AspectRatioPrimitive.Root, { "data-slot": "aspect-ratio", ...props });
}

// components/ui/alert-dialog.tsx
import { AlertDialog as AlertDialogPrimitive } from "radix-ui";

// lib/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// components/ui/button.tsx
import { cva } from "class-variance-authority";
import { Slot } from "radix-ui";
import { jsx as jsx2 } from "react/jsx-runtime";
var buttonVariants = cva(
  "focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 rounded-lg border border-transparent bg-clip-padding text-sm font-medium focus-visible:ring-3 aria-invalid:ring-3 [&_svg:not([class*='size-'])]:size-4 inline-flex items-center justify-center whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none group/button select-none",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
        outline: "border-border bg-background hover:bg-muted hover:text-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 aria-expanded:bg-muted aria-expanded:text-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost: "hover:bg-muted hover:text-foreground dark:hover:bg-muted/50 aria-expanded:bg-muted aria-expanded:text-foreground",
        destructive: "bg-destructive/10 hover:bg-destructive/20 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/20 text-destructive focus-visible:border-destructive/40 dark:hover:bg-destructive/30",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",
        icon: "size-8",
        "icon-xs": "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
        "icon-lg": "size-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot.Root : "button";
  return /* @__PURE__ */ jsx2(
    Comp,
    {
      "data-slot": "button",
      "data-variant": variant,
      "data-size": size,
      className: cn(buttonVariants({ variant, size, className })),
      ...props
    }
  );
}

// components/ui/alert-dialog.tsx
import { jsx as jsx3, jsxs } from "react/jsx-runtime";
function AlertDialog({
  ...props
}) {
  return /* @__PURE__ */ jsx3(AlertDialogPrimitive.Root, { "data-slot": "alert-dialog", ...props });
}
function AlertDialogTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsx3(AlertDialogPrimitive.Trigger, { "data-slot": "alert-dialog-trigger", ...props });
}
function AlertDialogPortal({
  ...props
}) {
  return /* @__PURE__ */ jsx3(AlertDialogPrimitive.Portal, { "data-slot": "alert-dialog-portal", ...props });
}
function AlertDialogOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx3(
    AlertDialogPrimitive.Overlay,
    {
      "data-slot": "alert-dialog-overlay",
      className: cn("data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs fixed inset-0 z-50", className),
      ...props
    }
  );
}
function AlertDialogContent({
  className,
  size = "default",
  ...props
}) {
  return /* @__PURE__ */ jsxs(AlertDialogPortal, { children: [
    /* @__PURE__ */ jsx3(AlertDialogOverlay, {}),
    /* @__PURE__ */ jsx3(
      AlertDialogPrimitive.Content,
      {
        "data-slot": "alert-dialog-content",
        "data-size": size,
        className: cn(
          "data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 bg-background ring-foreground/10 gap-4 rounded-xl p-4 ring-1 duration-100 data-[size=default]:max-w-xs data-[size=sm]:max-w-xs data-[size=default]:sm:max-w-sm group/alert-dialog-content fixed top-1/2 left-1/2 z-50 grid w-full -translate-x-1/2 -translate-y-1/2 outline-none",
          className
        ),
        ...props
      }
    )
  ] });
}
function AlertDialogHeader({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx3(
    "div",
    {
      "data-slot": "alert-dialog-header",
      className: cn("grid grid-rows-[auto_1fr] place-items-center gap-1.5 text-center has-data-[slot=alert-dialog-media]:grid-rows-[auto_auto_1fr] has-data-[slot=alert-dialog-media]:gap-x-4 sm:group-data-[size=default]/alert-dialog-content:place-items-start sm:group-data-[size=default]/alert-dialog-content:text-left sm:group-data-[size=default]/alert-dialog-content:has-data-[slot=alert-dialog-media]:grid-rows-[auto_1fr]", className),
      ...props
    }
  );
}
function AlertDialogFooter({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx3(
    "div",
    {
      "data-slot": "alert-dialog-footer",
      className: cn(
        "bg-muted/50 -mx-4 -mb-4 rounded-b-xl border-t p-4 flex flex-col-reverse gap-2 group-data-[size=sm]/alert-dialog-content:grid group-data-[size=sm]/alert-dialog-content:grid-cols-2 sm:flex-row sm:justify-end",
        className
      ),
      ...props
    }
  );
}
function AlertDialogMedia({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx3(
    "div",
    {
      "data-slot": "alert-dialog-media",
      className: cn("bg-muted mb-2 inline-flex size-10 items-center justify-center rounded-md sm:group-data-[size=default]/alert-dialog-content:row-span-2 *:[svg:not([class*='size-'])]:size-6", className),
      ...props
    }
  );
}
function AlertDialogTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx3(
    AlertDialogPrimitive.Title,
    {
      "data-slot": "alert-dialog-title",
      className: cn("text-base font-medium sm:group-data-[size=default]/alert-dialog-content:group-has-data-[slot=alert-dialog-media]/alert-dialog-content:col-start-2", className),
      ...props
    }
  );
}
function AlertDialogDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx3(
    AlertDialogPrimitive.Description,
    {
      "data-slot": "alert-dialog-description",
      className: cn("text-muted-foreground *:[a]:hover:text-foreground text-sm text-balance md:text-pretty *:[a]:underline *:[a]:underline-offset-3", className),
      ...props
    }
  );
}
function AlertDialogAction({
  className,
  variant = "default",
  size = "default",
  ...props
}) {
  return /* @__PURE__ */ jsx3(Button, { variant, size, asChild: true, children: /* @__PURE__ */ jsx3(
    AlertDialogPrimitive.Action,
    {
      "data-slot": "alert-dialog-action",
      className: cn(className),
      ...props
    }
  ) });
}
function AlertDialogCancel({
  className,
  variant = "outline",
  size = "default",
  ...props
}) {
  return /* @__PURE__ */ jsx3(Button, { variant, size, asChild: true, children: /* @__PURE__ */ jsx3(
    AlertDialogPrimitive.Cancel,
    {
      "data-slot": "alert-dialog-cancel",
      className: cn(className),
      ...props
    }
  ) });
}

// components/ui/pagination.tsx
import { IconChevronLeft, IconChevronRight, IconDots } from "@tabler/icons-react";
import { jsx as jsx4, jsxs as jsxs2 } from "react/jsx-runtime";
function Pagination({ className, ...props }) {
  return /* @__PURE__ */ jsx4(
    "nav",
    {
      role: "navigation",
      "aria-label": "pagination",
      "data-slot": "pagination",
      className: cn(
        "mx-auto flex w-full justify-center",
        className
      ),
      ...props
    }
  );
}
function PaginationContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx4(
    "ul",
    {
      "data-slot": "pagination-content",
      className: cn("gap-0.5 flex items-center", className),
      ...props
    }
  );
}
function PaginationItem({ ...props }) {
  return /* @__PURE__ */ jsx4("li", { "data-slot": "pagination-item", ...props });
}
function PaginationLink({
  className,
  isActive,
  size = "icon",
  ...props
}) {
  return /* @__PURE__ */ jsx4(
    Button,
    {
      asChild: true,
      variant: isActive ? "outline" : "ghost",
      size,
      className: cn(className),
      children: /* @__PURE__ */ jsx4(
        "a",
        {
          "aria-current": isActive ? "page" : void 0,
          "data-slot": "pagination-link",
          "data-active": isActive,
          ...props
        }
      )
    }
  );
}
function PaginationPrevious({
  className,
  text = "Previous",
  ...props
}) {
  return /* @__PURE__ */ jsxs2(
    PaginationLink,
    {
      "aria-label": "Go to previous page",
      size: "default",
      className: cn("pl-1.5!", className),
      ...props,
      children: [
        /* @__PURE__ */ jsx4(IconChevronLeft, { "data-icon": "inline-start" }),
        /* @__PURE__ */ jsx4("span", { className: "hidden sm:block", children: text })
      ]
    }
  );
}
function PaginationNext({
  className,
  text = "Next",
  ...props
}) {
  return /* @__PURE__ */ jsxs2(
    PaginationLink,
    {
      "aria-label": "Go to next page",
      size: "default",
      className: cn("pr-1.5!", className),
      ...props,
      children: [
        /* @__PURE__ */ jsx4("span", { className: "hidden sm:block", children: text }),
        /* @__PURE__ */ jsx4(IconChevronRight, { "data-icon": "inline-end" })
      ]
    }
  );
}
function PaginationEllipsis({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxs2(
    "span",
    {
      "aria-hidden": true,
      "data-slot": "pagination-ellipsis",
      className: cn(
        "size-8 [&_svg:not([class*='size-'])]:size-4 flex items-center justify-center",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx4(
          IconDots,
          {}
        ),
        /* @__PURE__ */ jsx4("span", { className: "sr-only", children: "More pages" })
      ]
    }
  );
}

// components/ui/direction.tsx
import { Direction } from "radix-ui";
import { jsx as jsx5 } from "react/jsx-runtime";
function DirectionProvider({
  dir,
  direction,
  children
}) {
  return /* @__PURE__ */ jsx5(Direction.DirectionProvider, { dir: direction ?? dir, children });
}
var useDirection = Direction.useDirection;

// components/ui/tabs.tsx
import { cva as cva2 } from "class-variance-authority";
import { Tabs as TabsPrimitive } from "radix-ui";
import { jsx as jsx6 } from "react/jsx-runtime";
function Tabs({
  className,
  orientation = "horizontal",
  ...props
}) {
  return /* @__PURE__ */ jsx6(
    TabsPrimitive.Root,
    {
      "data-slot": "tabs",
      "data-orientation": orientation,
      className: cn(
        "gap-2 group/tabs flex data-horizontal:flex-col",
        className
      ),
      ...props
    }
  );
}
var tabsListVariants = cva2(
  "rounded-lg p-[3px] group-data-horizontal/tabs:h-8 data-[variant=line]:rounded-none group/tabs-list text-muted-foreground inline-flex w-fit items-center justify-center group-data-vertical/tabs:h-fit group-data-vertical/tabs:flex-col",
  {
    variants: {
      variant: {
        default: "bg-muted",
        line: "gap-1 bg-transparent"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function TabsList({
  className,
  variant = "default",
  ...props
}) {
  return /* @__PURE__ */ jsx6(
    TabsPrimitive.List,
    {
      "data-slot": "tabs-list",
      "data-variant": variant,
      className: cn(tabsListVariants({ variant }), className),
      ...props
    }
  );
}
function TabsTrigger({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx6(
    TabsPrimitive.Trigger,
    {
      "data-slot": "tabs-trigger",
      className: cn(
        "gap-1.5 rounded-md border border-transparent px-1.5 py-0.5 text-sm font-medium group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none [&_svg:not([class*='size-'])]:size-4 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring text-foreground/60 hover:text-foreground dark:text-muted-foreground dark:hover:text-foreground relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center whitespace-nowrap transition-all group-data-vertical/tabs:w-full group-data-vertical/tabs:justify-start focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        "group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-active:bg-transparent dark:group-data-[variant=line]/tabs-list:data-active:border-transparent dark:group-data-[variant=line]/tabs-list:data-active:bg-transparent",
        "data-active:bg-background dark:data-active:text-foreground dark:data-active:border-input dark:data-active:bg-input/30 data-active:text-foreground",
        "after:bg-foreground after:absolute after:opacity-0 after:transition-opacity group-data-horizontal/tabs:after:inset-x-0 group-data-horizontal/tabs:after:bottom-[-5px] group-data-horizontal/tabs:after:h-0.5 group-data-vertical/tabs:after:inset-y-0 group-data-vertical/tabs:after:-right-1 group-data-vertical/tabs:after:w-0.5 group-data-[variant=line]/tabs-list:data-active:after:opacity-100",
        className
      ),
      ...props
    }
  );
}
function TabsContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx6(
    TabsPrimitive.Content,
    {
      "data-slot": "tabs-content",
      className: cn("text-sm flex-1 outline-none", className),
      ...props
    }
  );
}

// components/ui/button-group.tsx
import { cva as cva3 } from "class-variance-authority";
import { Slot as Slot2 } from "radix-ui";

// components/ui/separator.tsx
import { Separator as SeparatorPrimitive } from "radix-ui";
import { jsx as jsx7 } from "react/jsx-runtime";
function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}) {
  return /* @__PURE__ */ jsx7(
    SeparatorPrimitive.Root,
    {
      "data-slot": "separator",
      decorative,
      orientation,
      className: cn(
        "bg-border shrink-0 data-horizontal:h-px data-horizontal:w-full data-vertical:w-px data-vertical:self-stretch",
        className
      ),
      ...props
    }
  );
}

// components/ui/button-group.tsx
import { jsx as jsx8 } from "react/jsx-runtime";
var buttonGroupVariants = cva3(
  "has-[>[data-slot=button-group]]:gap-2 has-[select[aria-hidden=true]:last-child]:[&>[data-slot=select-trigger]:last-of-type]:rounded-r-lg flex w-fit items-stretch *:focus-visible:z-10 *:focus-visible:relative [&>[data-slot=select-trigger]:not([class*='w-'])]:w-fit [&>input]:flex-1",
  {
    variants: {
      orientation: {
        horizontal: "[&>[data-slot]:not(:has(~[data-slot]))]:rounded-r-lg! [&>*:not(:first-child)]:rounded-l-none [&>*:not(:first-child)]:border-l-0 [&>*:not(:last-child)]:rounded-r-none",
        vertical: "[&>[data-slot]:not(:has(~[data-slot]))]:rounded-b-lg! flex-col [&>*:not(:first-child)]:rounded-t-none [&>*:not(:first-child)]:border-t-0 [&>*:not(:last-child)]:rounded-b-none"
      }
    },
    defaultVariants: {
      orientation: "horizontal"
    }
  }
);
function ButtonGroup({
  className,
  orientation,
  ...props
}) {
  return /* @__PURE__ */ jsx8(
    "div",
    {
      role: "group",
      "data-slot": "button-group",
      "data-orientation": orientation,
      className: cn(buttonGroupVariants({ orientation }), className),
      ...props
    }
  );
}
function ButtonGroupText({
  className,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot2.Root : "div";
  return /* @__PURE__ */ jsx8(
    Comp,
    {
      className: cn(
        "bg-muted gap-2 rounded-lg border px-2.5 text-sm font-medium [&_svg:not([class*='size-'])]:size-4 flex items-center [&_svg]:pointer-events-none",
        className
      ),
      ...props
    }
  );
}
function ButtonGroupSeparator({
  className,
  orientation = "vertical",
  ...props
}) {
  return /* @__PURE__ */ jsx8(
    Separator,
    {
      "data-slot": "button-group-separator",
      orientation,
      className: cn(
        "bg-input relative self-stretch data-horizontal:mx-px data-horizontal:w-auto data-vertical:my-px data-vertical:h-auto",
        className
      ),
      ...props
    }
  );
}

// components/ui/card.tsx
import { jsx as jsx9 } from "react/jsx-runtime";
function Card({
  className,
  size = "default",
  ...props
}) {
  return /* @__PURE__ */ jsx9(
    "div",
    {
      "data-slot": "card",
      "data-size": size,
      className: cn("ring-foreground/10 bg-card text-card-foreground gap-4 overflow-hidden rounded-xl py-4 text-sm ring-1 has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0 data-[size=sm]:gap-3 data-[size=sm]:py-3 data-[size=sm]:has-data-[slot=card-footer]:pb-0 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl group/card flex flex-col", className),
      ...props
    }
  );
}
function CardHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx9(
    "div",
    {
      "data-slot": "card-header",
      className: cn(
        "gap-1 rounded-t-xl px-4 group-data-[size=sm]/card:px-3 [.border-b]:pb-4 group-data-[size=sm]/card:[.border-b]:pb-3 group/card-header @container/card-header grid auto-rows-min items-start has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto]",
        className
      ),
      ...props
    }
  );
}
function CardTitle({ className, ...props }) {
  return /* @__PURE__ */ jsx9(
    "div",
    {
      "data-slot": "card-title",
      className: cn("text-base leading-snug font-medium group-data-[size=sm]/card:text-sm", className),
      ...props
    }
  );
}
function CardDescription({ className, ...props }) {
  return /* @__PURE__ */ jsx9(
    "div",
    {
      "data-slot": "card-description",
      className: cn("text-muted-foreground text-sm", className),
      ...props
    }
  );
}
function CardAction({ className, ...props }) {
  return /* @__PURE__ */ jsx9(
    "div",
    {
      "data-slot": "card-action",
      className: cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      ),
      ...props
    }
  );
}
function CardContent({ className, ...props }) {
  return /* @__PURE__ */ jsx9(
    "div",
    {
      "data-slot": "card-content",
      className: cn("px-4 group-data-[size=sm]/card:px-3", className),
      ...props
    }
  );
}
function CardFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx9(
    "div",
    {
      "data-slot": "card-footer",
      className: cn("bg-muted/50 rounded-b-xl border-t p-4 group-data-[size=sm]/card:p-3 flex items-center", className),
      ...props
    }
  );
}

// components/ui/slider.tsx
import * as React from "react";
import { Slider as SliderPrimitive } from "radix-ui";
import { jsx as jsx10, jsxs as jsxs3 } from "react/jsx-runtime";
function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  ...props
}) {
  const _values = React.useMemo(
    () => Array.isArray(value) ? value : Array.isArray(defaultValue) ? defaultValue : [min, max],
    [value, defaultValue, min, max]
  );
  return /* @__PURE__ */ jsxs3(
    SliderPrimitive.Root,
    {
      "data-slot": "slider",
      defaultValue,
      value,
      min,
      max,
      className: cn(
        "data-vertical:min-h-40 relative flex w-full touch-none items-center select-none data-disabled:opacity-50 data-vertical:h-full data-vertical:w-auto data-vertical:flex-col",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx10(
          SliderPrimitive.Track,
          {
            "data-slot": "slider-track",
            className: "bg-muted rounded-full data-horizontal:h-1 data-vertical:w-1 relative grow overflow-hidden data-horizontal:w-full data-vertical:h-full",
            children: /* @__PURE__ */ jsx10(
              SliderPrimitive.Range,
              {
                "data-slot": "slider-range",
                className: "bg-primary absolute select-none data-horizontal:h-full data-vertical:w-full"
              }
            )
          }
        ),
        Array.from({ length: _values.length }, (_, index) => /* @__PURE__ */ jsx10(
          SliderPrimitive.Thumb,
          {
            "data-slot": "slider-thumb",
            className: "border-ring ring-ring/50 relative size-3 rounded-full border bg-white transition-[color,box-shadow] after:absolute after:-inset-2 hover:ring-3 focus-visible:ring-3 focus-visible:outline-hidden active:ring-3 block shrink-0 select-none disabled:pointer-events-none disabled:opacity-50"
          },
          index
        ))
      ]
    }
  );
}

// components/ui/input-group.tsx
import { cva as cva4 } from "class-variance-authority";

// components/ui/input.tsx
import { jsx as jsx11 } from "react/jsx-runtime";
function Input({ className, type, ...props }) {
  return /* @__PURE__ */ jsx11(
    "input",
    {
      type,
      "data-slot": "input",
      className: cn(
        "dark:bg-input/30 border-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 disabled:bg-input/50 dark:disabled:bg-input/80 h-8 rounded-lg border bg-transparent px-2.5 py-1 text-base transition-colors file:h-6 file:text-sm file:font-medium focus-visible:ring-3 aria-invalid:ring-3 md:text-sm file:text-foreground placeholder:text-muted-foreground w-full min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props
    }
  );
}

// components/ui/textarea.tsx
import { jsx as jsx12 } from "react/jsx-runtime";
function Textarea({ className, ...props }) {
  return /* @__PURE__ */ jsx12(
    "textarea",
    {
      "data-slot": "textarea",
      className: cn(
        "border-input dark:bg-input/30 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 disabled:bg-input/50 dark:disabled:bg-input/80 rounded-lg border bg-transparent px-2.5 py-2 text-base transition-colors focus-visible:ring-3 aria-invalid:ring-3 md:text-sm placeholder:text-muted-foreground flex field-sizing-content min-h-16 w-full outline-none disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props
    }
  );
}

// components/ui/input-group.tsx
import { jsx as jsx13 } from "react/jsx-runtime";
function InputGroup({ className, ...props }) {
  return /* @__PURE__ */ jsx13(
    "div",
    {
      "data-slot": "input-group",
      role: "group",
      className: cn(
        "border-input dark:bg-input/30 has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50 has-[[data-slot][aria-invalid=true]]:ring-destructive/20 has-[[data-slot][aria-invalid=true]]:border-destructive dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40 has-disabled:bg-input/50 dark:has-disabled:bg-input/80 h-8 rounded-lg border transition-colors in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 has-disabled:opacity-50 has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-3 has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-end]]:[&>input]:pt-3 has-[>[data-align=block-start]]:[&>input]:pb-3 has-[>[data-align=inline-end]]:[&>input]:pr-1.5 has-[>[data-align=inline-start]]:[&>input]:pl-1.5 group/input-group relative flex w-full min-w-0 items-center outline-none has-[>textarea]:h-auto",
        className
      ),
      ...props
    }
  );
}
var inputGroupAddonVariants = cva4(
  "text-muted-foreground h-auto gap-2 py-1.5 text-sm font-medium group-data-[disabled=true]/input-group:opacity-50 [&>kbd]:rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-4 flex cursor-text items-center justify-center select-none",
  {
    variants: {
      align: {
        "inline-start": "pl-2 has-[>button]:ml-[-0.3rem] has-[>kbd]:ml-[-0.15rem] order-first",
        "inline-end": "pr-2 has-[>button]:mr-[-0.3rem] has-[>kbd]:mr-[-0.15rem] order-last",
        "block-start": "px-2.5 pt-2 group-has-[>input]/input-group:pt-2 [.border-b]:pb-2 order-first w-full justify-start",
        "block-end": "px-2.5 pb-2 group-has-[>input]/input-group:pb-2 [.border-t]:pt-2 order-last w-full justify-start"
      }
    },
    defaultVariants: {
      align: "inline-start"
    }
  }
);
function InputGroupAddon({
  className,
  align = "inline-start",
  ...props
}) {
  return /* @__PURE__ */ jsx13(
    "div",
    {
      role: "group",
      "data-slot": "input-group-addon",
      "data-align": align,
      className: cn(inputGroupAddonVariants({ align }), className),
      onClick: (e) => {
        if (e.target.closest("button")) {
          return;
        }
        e.currentTarget.parentElement?.querySelector("input")?.focus();
      },
      ...props
    }
  );
}
var inputGroupButtonVariants = cva4(
  "gap-2 text-sm shadow-none flex items-center",
  {
    variants: {
      size: {
        xs: "h-6 gap-1 rounded-[calc(var(--radius)-3px)] px-1.5 [&>svg:not([class*='size-'])]:size-3.5",
        sm: "",
        "icon-xs": "size-6 rounded-[calc(var(--radius)-3px)] p-0 has-[>svg]:p-0",
        "icon-sm": "size-8 p-0 has-[>svg]:p-0"
      }
    },
    defaultVariants: {
      size: "xs"
    }
  }
);
function InputGroupButton({
  className,
  type = "button",
  variant = "ghost",
  size = "xs",
  ...props
}) {
  return /* @__PURE__ */ jsx13(
    Button,
    {
      type,
      "data-size": size,
      variant,
      className: cn(inputGroupButtonVariants({ size }), className),
      ...props
    }
  );
}
function InputGroupText({ className, ...props }) {
  return /* @__PURE__ */ jsx13(
    "span",
    {
      className: cn(
        "text-muted-foreground gap-2 text-sm [&_svg:not([class*='size-'])]:size-4 flex items-center [&_svg]:pointer-events-none",
        className
      ),
      ...props
    }
  );
}
function InputGroupInput({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx13(
    Input,
    {
      "data-slot": "input-group-control",
      className: cn("rounded-none border-0 bg-transparent shadow-none ring-0 focus-visible:ring-0 disabled:bg-transparent aria-invalid:ring-0 dark:bg-transparent dark:disabled:bg-transparent flex-1", className),
      ...props
    }
  );
}
function InputGroupTextarea({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx13(
    Textarea,
    {
      "data-slot": "input-group-control",
      className: cn("rounded-none border-0 bg-transparent py-2 shadow-none ring-0 focus-visible:ring-0 disabled:bg-transparent aria-invalid:ring-0 dark:bg-transparent dark:disabled:bg-transparent flex-1 resize-none", className),
      ...props
    }
  );
}

// components/ui/popover.tsx
import { Popover as PopoverPrimitive } from "radix-ui";
import { jsx as jsx14 } from "react/jsx-runtime";
function Popover({
  ...props
}) {
  return /* @__PURE__ */ jsx14(PopoverPrimitive.Root, { "data-slot": "popover", ...props });
}
function PopoverTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsx14(PopoverPrimitive.Trigger, { "data-slot": "popover-trigger", ...props });
}
function PopoverContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}) {
  return /* @__PURE__ */ jsx14(PopoverPrimitive.Portal, { children: /* @__PURE__ */ jsx14(
    PopoverPrimitive.Content,
    {
      "data-slot": "popover-content",
      align,
      sideOffset,
      className: cn(
        "bg-popover text-popover-foreground data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ring-foreground/10 flex flex-col gap-2.5 rounded-lg p-2.5 text-sm shadow-md ring-1 duration-100 z-50 w-72 origin-(--radix-popover-content-transform-origin) outline-hidden",
        className
      ),
      ...props
    }
  ) });
}
function PopoverAnchor({
  ...props
}) {
  return /* @__PURE__ */ jsx14(PopoverPrimitive.Anchor, { "data-slot": "popover-anchor", ...props });
}
function PopoverHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx14(
    "div",
    {
      "data-slot": "popover-header",
      className: cn("flex flex-col gap-0.5 text-sm", className),
      ...props
    }
  );
}
function PopoverTitle({ className, ...props }) {
  return /* @__PURE__ */ jsx14(
    "div",
    {
      "data-slot": "popover-title",
      className: cn("font-medium", className),
      ...props
    }
  );
}
function PopoverDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx14(
    "p",
    {
      "data-slot": "popover-description",
      className: cn("text-muted-foreground", className),
      ...props
    }
  );
}

// components/ui/progress.tsx
import { Progress as ProgressPrimitive } from "radix-ui";
import { jsx as jsx15 } from "react/jsx-runtime";
function Progress({
  className,
  value,
  ...props
}) {
  return /* @__PURE__ */ jsx15(
    ProgressPrimitive.Root,
    {
      "data-slot": "progress",
      className: cn(
        "bg-muted h-1 rounded-full relative flex w-full items-center overflow-x-hidden",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx15(
        ProgressPrimitive.Indicator,
        {
          "data-slot": "progress-indicator",
          className: "bg-primary size-full flex-1 transition-all",
          style: { transform: `translateX(-${100 - (value || 0)}%)` }
        }
      )
    }
  );
}

// components/ui/input-otp.tsx
import * as React2 from "react";
import { OTPInput, OTPInputContext } from "input-otp";
import { IconMinus } from "@tabler/icons-react";
import { jsx as jsx16, jsxs as jsxs4 } from "react/jsx-runtime";
function InputOTP({
  className,
  containerClassName,
  ...props
}) {
  return /* @__PURE__ */ jsx16(
    OTPInput,
    {
      "data-slot": "input-otp",
      containerClassName: cn(
        "cn-input-otp flex items-center has-disabled:opacity-50",
        containerClassName
      ),
      spellCheck: false,
      className: cn(
        "disabled:cursor-not-allowed",
        className
      ),
      ...props
    }
  );
}
function InputOTPGroup({ className, ...props }) {
  return /* @__PURE__ */ jsx16(
    "div",
    {
      "data-slot": "input-otp-group",
      className: cn("has-aria-invalid:ring-destructive/20 dark:has-aria-invalid:ring-destructive/40 has-aria-invalid:border-destructive rounded-lg has-aria-invalid:ring-3 flex items-center", className),
      ...props
    }
  );
}
function InputOTPSlot({
  index,
  className,
  ...props
}) {
  const inputOTPContext = React2.useContext(OTPInputContext);
  const { char, hasFakeCaret, isActive } = inputOTPContext?.slots[index] ?? {};
  return /* @__PURE__ */ jsxs4(
    "div",
    {
      "data-slot": "input-otp-slot",
      "data-active": isActive,
      className: cn(
        "dark:bg-input/30 border-input data-[active=true]:border-ring data-[active=true]:ring-ring/50 data-[active=true]:aria-invalid:ring-destructive/20 dark:data-[active=true]:aria-invalid:ring-destructive/40 aria-invalid:border-destructive data-[active=true]:aria-invalid:border-destructive size-8 border-y border-r text-sm transition-all outline-none first:rounded-l-lg first:border-l last:rounded-r-lg data-[active=true]:ring-3 relative flex items-center justify-center data-[active=true]:z-10",
        className
      ),
      ...props,
      children: [
        char,
        hasFakeCaret && /* @__PURE__ */ jsx16("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsx16("div", { className: "animate-caret-blink bg-foreground h-4 w-px duration-1000" }) })
      ]
    }
  );
}
function InputOTPSeparator({ ...props }) {
  return /* @__PURE__ */ jsx16(
    "div",
    {
      "data-slot": "input-otp-separator",
      className: "[&_svg:not([class*='size-'])]:size-4 flex items-center",
      role: "separator",
      ...props,
      children: /* @__PURE__ */ jsx16(
        IconMinus,
        {}
      )
    }
  );
}

// components/ui/chart.tsx
import * as React3 from "react";
import * as RechartsPrimitive from "recharts";
import { Fragment, jsx as jsx17, jsxs as jsxs5 } from "react/jsx-runtime";
var THEMES = { light: "", dark: ".dark" };
var ChartContext = React3.createContext(null);
function useChart() {
  const context = React3.useContext(ChartContext);
  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />");
  }
  return context;
}
function ChartContainer({
  id,
  className,
  children,
  config,
  ...props
}) {
  const uniqueId = React3.useId();
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;
  return /* @__PURE__ */ jsx17(ChartContext.Provider, { value: { config }, children: /* @__PURE__ */ jsxs5(
    "div",
    {
      "data-slot": "chart",
      "data-chart": chartId,
      className: cn(
        "[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border flex aspect-video justify-center text-xs [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-sector]:outline-hidden [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-surface]:outline-hidden",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx17(ChartStyle, { id: chartId, config }),
        /* @__PURE__ */ jsx17(RechartsPrimitive.ResponsiveContainer, { children })
      ]
    }
  ) });
}
var ChartStyle = ({ id, config }) => {
  const colorConfig = Object.entries(config).filter(
    ([, config2]) => config2.theme || config2.color
  );
  if (!colorConfig.length) {
    return null;
  }
  return /* @__PURE__ */ jsx17(
    "style",
    {
      dangerouslySetInnerHTML: {
        __html: Object.entries(THEMES).map(
          ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig.map(([key, itemConfig]) => {
            const color = itemConfig.theme?.[theme] || itemConfig.color;
            return color ? `  --color-${key}: ${color};` : null;
          }).join("\n")}
}
`
        ).join("\n")
      }
    }
  );
};
var ChartTooltip = RechartsPrimitive.Tooltip;
function ChartTooltipContent({
  active,
  payload,
  className,
  indicator = "dot",
  hideLabel = false,
  hideIndicator = false,
  label,
  labelFormatter,
  labelClassName,
  formatter,
  color,
  nameKey,
  labelKey
}) {
  const { config } = useChart();
  const tooltipLabel = React3.useMemo(() => {
    if (hideLabel || !payload?.length) {
      return null;
    }
    const [item] = payload;
    const key = `${labelKey || item?.dataKey || item?.name || "value"}`;
    const itemConfig = getPayloadConfigFromPayload(config, item, key);
    const value = !labelKey && typeof label === "string" ? config[label]?.label || label : itemConfig?.label;
    if (labelFormatter) {
      return /* @__PURE__ */ jsx17("div", { className: cn("font-medium", labelClassName), children: labelFormatter(value, payload) });
    }
    if (!value) {
      return null;
    }
    return /* @__PURE__ */ jsx17("div", { className: cn("font-medium", labelClassName), children: value });
  }, [
    label,
    labelFormatter,
    payload,
    hideLabel,
    labelClassName,
    config,
    labelKey
  ]);
  if (!active || !payload?.length) {
    return null;
  }
  const nestLabel = payload.length === 1 && indicator !== "dot";
  return /* @__PURE__ */ jsxs5(
    "div",
    {
      className: cn("border-border/50 bg-background gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs shadow-xl grid min-w-32 items-start", className),
      children: [
        !nestLabel ? tooltipLabel : null,
        /* @__PURE__ */ jsx17("div", { className: "grid gap-1.5", children: payload.filter((item) => item.type !== "none").map((item, index) => {
          const key = `${nameKey || item.name || item.dataKey || "value"}`;
          const itemConfig = getPayloadConfigFromPayload(config, item, key);
          const indicatorColor = color || item.payload.fill || item.color;
          return /* @__PURE__ */ jsx17(
            "div",
            {
              className: cn(
                "[&>svg]:text-muted-foreground flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5",
                indicator === "dot" && "items-center"
              ),
              children: formatter && item?.value !== void 0 && item.name ? formatter(item.value, item.name, item, index, item.payload) : /* @__PURE__ */ jsxs5(Fragment, { children: [
                itemConfig?.icon ? /* @__PURE__ */ jsx17(itemConfig.icon, {}) : !hideIndicator && /* @__PURE__ */ jsx17(
                  "div",
                  {
                    className: cn(
                      "shrink-0 rounded-[2px] border-(--color-border) bg-(--color-bg)",
                      {
                        "h-2.5 w-2.5": indicator === "dot",
                        "w-1": indicator === "line",
                        "w-0 border-[1.5px] border-dashed bg-transparent": indicator === "dashed",
                        "my-0.5": nestLabel && indicator === "dashed"
                      }
                    ),
                    style: {
                      "--color-bg": indicatorColor,
                      "--color-border": indicatorColor
                    }
                  }
                ),
                /* @__PURE__ */ jsxs5(
                  "div",
                  {
                    className: cn(
                      "flex flex-1 justify-between leading-none",
                      nestLabel ? "items-end" : "items-center"
                    ),
                    children: [
                      /* @__PURE__ */ jsxs5("div", { className: "grid gap-1.5", children: [
                        nestLabel ? tooltipLabel : null,
                        /* @__PURE__ */ jsx17("span", { className: "text-muted-foreground", children: itemConfig?.label || item.name })
                      ] }),
                      item.value && /* @__PURE__ */ jsx17("span", { className: "text-foreground font-mono font-medium tabular-nums", children: item.value.toLocaleString() })
                    ]
                  }
                )
              ] })
            },
            item.dataKey
          );
        }) })
      ]
    }
  );
}
var ChartLegend = RechartsPrimitive.Legend;
function ChartLegendContent({
  className,
  hideIcon = false,
  payload,
  verticalAlign = "bottom",
  nameKey
}) {
  const { config } = useChart();
  if (!payload?.length) {
    return null;
  }
  return /* @__PURE__ */ jsx17(
    "div",
    {
      className: cn(
        "flex items-center justify-center gap-4",
        verticalAlign === "top" ? "pb-3" : "pt-3",
        className
      ),
      children: payload.filter((item) => item.type !== "none").map((item) => {
        const key = `${nameKey || item.dataKey || "value"}`;
        const itemConfig = getPayloadConfigFromPayload(config, item, key);
        return /* @__PURE__ */ jsxs5(
          "div",
          {
            className: cn(
              "[&>svg]:text-muted-foreground flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3"
            ),
            children: [
              itemConfig?.icon && !hideIcon ? /* @__PURE__ */ jsx17(itemConfig.icon, {}) : /* @__PURE__ */ jsx17(
                "div",
                {
                  className: "h-2 w-2 shrink-0 rounded-[2px]",
                  style: {
                    backgroundColor: item.color
                  }
                }
              ),
              itemConfig?.label
            ]
          },
          item.value
        );
      })
    }
  );
}
function getPayloadConfigFromPayload(config, payload, key) {
  if (typeof payload !== "object" || payload === null) {
    return void 0;
  }
  const payloadPayload = "payload" in payload && typeof payload.payload === "object" && payload.payload !== null ? payload.payload : void 0;
  let configLabelKey = key;
  if (key in payload && typeof payload[key] === "string") {
    configLabelKey = payload[key];
  } else if (payloadPayload && key in payloadPayload && typeof payloadPayload[key] === "string") {
    configLabelKey = payloadPayload[key];
  }
  return configLabelKey in config ? config[configLabelKey] : config[key];
}

// components/ui/hover-card.tsx
import { HoverCard as HoverCardPrimitive } from "radix-ui";
import { jsx as jsx18 } from "react/jsx-runtime";
function HoverCard({
  ...props
}) {
  return /* @__PURE__ */ jsx18(HoverCardPrimitive.Root, { "data-slot": "hover-card", ...props });
}
function HoverCardTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsx18(HoverCardPrimitive.Trigger, { "data-slot": "hover-card-trigger", ...props });
}
function HoverCardContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}) {
  return /* @__PURE__ */ jsx18(HoverCardPrimitive.Portal, { "data-slot": "hover-card-portal", children: /* @__PURE__ */ jsx18(
    HoverCardPrimitive.Content,
    {
      "data-slot": "hover-card-content",
      align,
      sideOffset,
      className: cn(
        "data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ring-foreground/10 bg-popover text-popover-foreground w-64 rounded-lg p-2.5 text-sm shadow-md ring-1 duration-100 z-50 origin-(--radix-hover-card-content-transform-origin) outline-hidden",
        className
      ),
      ...props
    }
  ) });
}

// components/ui/sheet.tsx
import { Dialog as SheetPrimitive } from "radix-ui";
import { IconX } from "@tabler/icons-react";
import { jsx as jsx19, jsxs as jsxs6 } from "react/jsx-runtime";
function Sheet({ ...props }) {
  return /* @__PURE__ */ jsx19(SheetPrimitive.Root, { "data-slot": "sheet", ...props });
}
function SheetTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsx19(SheetPrimitive.Trigger, { "data-slot": "sheet-trigger", ...props });
}
function SheetClose({
  ...props
}) {
  return /* @__PURE__ */ jsx19(SheetPrimitive.Close, { "data-slot": "sheet-close", ...props });
}
function SheetPortal({
  ...props
}) {
  return /* @__PURE__ */ jsx19(SheetPrimitive.Portal, { "data-slot": "sheet-portal", ...props });
}
function SheetOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx19(
    SheetPrimitive.Overlay,
    {
      "data-slot": "sheet-overlay",
      className: cn("data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 bg-black/10 duration-100 data-ending-style:opacity-0 data-starting-style:opacity-0 supports-backdrop-filter:backdrop-blur-xs fixed inset-0 z-50", className),
      ...props
    }
  );
}
function SheetContent({
  className,
  children,
  side = "right",
  showCloseButton = true,
  ...props
}) {
  return /* @__PURE__ */ jsxs6(SheetPortal, { children: [
    /* @__PURE__ */ jsx19(SheetOverlay, {}),
    /* @__PURE__ */ jsxs6(
      SheetPrimitive.Content,
      {
        "data-slot": "sheet-content",
        "data-side": side,
        className: cn("bg-background data-open:animate-in data-closed:animate-out data-[side=right]:data-closed:slide-out-to-right-10 data-[side=right]:data-open:slide-in-from-right-10 data-[side=left]:data-closed:slide-out-to-left-10 data-[side=left]:data-open:slide-in-from-left-10 data-[side=top]:data-closed:slide-out-to-top-10 data-[side=top]:data-open:slide-in-from-top-10 data-closed:fade-out-0 data-open:fade-in-0 data-[side=bottom]:data-closed:slide-out-to-bottom-10 data-[side=bottom]:data-open:slide-in-from-bottom-10 fixed z-50 flex flex-col gap-4 bg-clip-padding text-sm shadow-lg transition duration-200 ease-in-out data-[side=bottom]:inset-x-0 data-[side=bottom]:bottom-0 data-[side=bottom]:h-auto data-[side=bottom]:border-t data-[side=left]:inset-y-0 data-[side=left]:left-0 data-[side=left]:h-full data-[side=left]:w-3/4 data-[side=left]:border-r data-[side=right]:inset-y-0 data-[side=right]:right-0 data-[side=right]:h-full data-[side=right]:w-3/4 data-[side=right]:border-l data-[side=top]:inset-x-0 data-[side=top]:top-0 data-[side=top]:h-auto data-[side=top]:border-b data-[side=left]:sm:max-w-sm data-[side=right]:sm:max-w-sm", className),
        ...props,
        children: [
          children,
          showCloseButton && /* @__PURE__ */ jsx19(SheetPrimitive.Close, { "data-slot": "sheet-close", asChild: true, children: /* @__PURE__ */ jsxs6(Button, { variant: "ghost", className: "absolute top-3 right-3", size: "icon-sm", children: [
            /* @__PURE__ */ jsx19(
              IconX,
              {}
            ),
            /* @__PURE__ */ jsx19("span", { className: "sr-only", children: "Close" })
          ] }) })
        ]
      }
    )
  ] });
}
function SheetHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx19(
    "div",
    {
      "data-slot": "sheet-header",
      className: cn("gap-0.5 p-4 flex flex-col", className),
      ...props
    }
  );
}
function SheetFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx19(
    "div",
    {
      "data-slot": "sheet-footer",
      className: cn("gap-2 p-4 mt-auto flex flex-col", className),
      ...props
    }
  );
}
function SheetTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx19(
    SheetPrimitive.Title,
    {
      "data-slot": "sheet-title",
      className: cn("text-foreground text-base font-medium", className),
      ...props
    }
  );
}
function SheetDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx19(
    SheetPrimitive.Description,
    {
      "data-slot": "sheet-description",
      className: cn("text-muted-foreground text-sm", className),
      ...props
    }
  );
}

// components/ui/field.tsx
import { useMemo as useMemo3 } from "react";
import { cva as cva5 } from "class-variance-authority";

// components/ui/label.tsx
import { Label as LabelPrimitive } from "radix-ui";
import { jsx as jsx20 } from "react/jsx-runtime";
function Label({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx20(
    LabelPrimitive.Root,
    {
      "data-slot": "label",
      className: cn(
        "gap-2 text-sm leading-none font-medium group-data-[disabled=true]:opacity-50 peer-disabled:opacity-50 flex items-center select-none group-data-[disabled=true]:pointer-events-none peer-disabled:cursor-not-allowed",
        className
      ),
      ...props
    }
  );
}

// components/ui/field.tsx
import { jsx as jsx21, jsxs as jsxs7 } from "react/jsx-runtime";
function FieldSet({ className, ...props }) {
  return /* @__PURE__ */ jsx21(
    "fieldset",
    {
      "data-slot": "field-set",
      className: cn("gap-4 has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3 flex flex-col", className),
      ...props
    }
  );
}
function FieldLegend({
  className,
  variant = "legend",
  ...props
}) {
  return /* @__PURE__ */ jsx21(
    "legend",
    {
      "data-slot": "field-legend",
      "data-variant": variant,
      className: cn("mb-1.5 font-medium data-[variant=label]:text-sm data-[variant=legend]:text-base", className),
      ...props
    }
  );
}
function FieldGroup({ className, ...props }) {
  return /* @__PURE__ */ jsx21(
    "div",
    {
      "data-slot": "field-group",
      className: cn(
        "gap-5 data-[slot=checkbox-group]:gap-3 *:data-[slot=field-group]:gap-4 group/field-group @container/field-group flex w-full flex-col",
        className
      ),
      ...props
    }
  );
}
var fieldVariants = cva5("data-[invalid=true]:text-destructive gap-2 group/field flex w-full", {
  variants: {
    orientation: {
      vertical: "flex-col *:w-full [&>.sr-only]:w-auto",
      horizontal: "flex-row items-center *:data-[slot=field-label]:flex-auto has-[>[data-slot=field-content]]:items-start has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
      responsive: "flex-col *:w-full [&>.sr-only]:w-auto @md/field-group:flex-row @md/field-group:items-center @md/field-group:*:w-auto @md/field-group:*:data-[slot=field-label]:flex-auto @md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px"
    }
  },
  defaultVariants: {
    orientation: "vertical"
  }
});
function Field({
  className,
  orientation = "vertical",
  ...props
}) {
  return /* @__PURE__ */ jsx21(
    "div",
    {
      role: "group",
      "data-slot": "field",
      "data-orientation": orientation,
      className: cn(fieldVariants({ orientation }), className),
      ...props
    }
  );
}
function FieldContent({ className, ...props }) {
  return /* @__PURE__ */ jsx21(
    "div",
    {
      "data-slot": "field-content",
      className: cn(
        "gap-0.5 group/field-content flex flex-1 flex-col leading-snug",
        className
      ),
      ...props
    }
  );
}
function FieldLabel({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx21(
    Label,
    {
      "data-slot": "field-label",
      className: cn(
        "has-data-checked:bg-primary/5 has-data-checked:border-primary/30 dark:has-data-checked:border-primary/20 dark:has-data-checked:bg-primary/10 gap-2 group-data-[disabled=true]/field:opacity-50 has-[>[data-slot=field]]:rounded-lg has-[>[data-slot=field]]:border *:data-[slot=field]:p-2.5 group/field-label peer/field-label flex w-fit leading-snug",
        "has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col",
        className
      ),
      ...props
    }
  );
}
function FieldTitle({ className, ...props }) {
  return /* @__PURE__ */ jsx21(
    "div",
    {
      "data-slot": "field-label",
      className: cn(
        "gap-2 text-sm font-medium group-data-[disabled=true]/field:opacity-50 flex w-fit items-center leading-snug",
        className
      ),
      ...props
    }
  );
}
function FieldDescription({ className, ...props }) {
  return /* @__PURE__ */ jsx21(
    "p",
    {
      "data-slot": "field-description",
      className: cn(
        "text-muted-foreground text-left text-sm [[data-variant=legend]+&]:-mt-1.5 leading-normal font-normal group-has-data-horizontal/field:text-balance",
        "last:mt-0 nth-last-2:-mt-1",
        "[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4",
        className
      ),
      ...props
    }
  );
}
function FieldSeparator({
  children,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxs7(
    "div",
    {
      "data-slot": "field-separator",
      "data-content": !!children,
      className: cn("-my-2 h-5 text-sm group-data-[variant=outline]/field-group:-mb-2 relative", className),
      ...props,
      children: [
        /* @__PURE__ */ jsx21(Separator, { className: "absolute inset-0 top-1/2" }),
        children && /* @__PURE__ */ jsx21(
          "span",
          {
            className: "text-muted-foreground px-2 bg-background relative mx-auto block w-fit",
            "data-slot": "field-separator-content",
            children
          }
        )
      ]
    }
  );
}
function FieldError({
  className,
  children,
  errors,
  ...props
}) {
  const content = useMemo3(() => {
    if (children) {
      return children;
    }
    if (!errors?.length) {
      return null;
    }
    const uniqueErrors = [
      ...new Map(errors.map((error) => [error?.message, error])).values()
    ];
    if (uniqueErrors?.length == 1) {
      return uniqueErrors[0]?.message;
    }
    return /* @__PURE__ */ jsx21("ul", { className: "ml-4 flex list-disc flex-col gap-1", children: uniqueErrors.map(
      (error, index) => error?.message && /* @__PURE__ */ jsx21("li", { children: error.message }, index)
    ) });
  }, [children, errors]);
  if (!content) {
    return null;
  }
  return /* @__PURE__ */ jsx21(
    "div",
    {
      role: "alert",
      "data-slot": "field-error",
      className: cn("text-destructive text-sm font-normal", className),
      ...props,
      children: content
    }
  );
}

// components/ui/scroll-area.tsx
import { ScrollArea as ScrollAreaPrimitive } from "radix-ui";
import { jsx as jsx22, jsxs as jsxs8 } from "react/jsx-runtime";
function ScrollArea({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs8(
    ScrollAreaPrimitive.Root,
    {
      "data-slot": "scroll-area",
      className: cn("relative", className),
      ...props,
      children: [
        /* @__PURE__ */ jsx22(
          ScrollAreaPrimitive.Viewport,
          {
            "data-slot": "scroll-area-viewport",
            className: "focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1",
            children
          }
        ),
        /* @__PURE__ */ jsx22(ScrollBar, {}),
        /* @__PURE__ */ jsx22(ScrollAreaPrimitive.Corner, {})
      ]
    }
  );
}
function ScrollBar({
  className,
  orientation = "vertical",
  ...props
}) {
  return /* @__PURE__ */ jsx22(
    ScrollAreaPrimitive.ScrollAreaScrollbar,
    {
      "data-slot": "scroll-area-scrollbar",
      "data-orientation": orientation,
      orientation,
      className: cn(
        "data-horizontal:h-2.5 data-horizontal:flex-col data-horizontal:border-t data-horizontal:border-t-transparent data-vertical:h-full data-vertical:w-2.5 data-vertical:border-l data-vertical:border-l-transparent flex touch-none p-px transition-colors select-none",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx22(
        ScrollAreaPrimitive.ScrollAreaThumb,
        {
          "data-slot": "scroll-area-thumb",
          className: "rounded-full bg-border relative flex-1"
        }
      )
    }
  );
}

// components/ui/resizable.tsx
import * as ResizablePrimitive from "react-resizable-panels";
import { jsx as jsx23 } from "react/jsx-runtime";
function ResizablePanelGroup({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx23(
    ResizablePrimitive.Group,
    {
      "data-slot": "resizable-panel-group",
      className: cn(
        "flex h-full w-full aria-[orientation=vertical]:flex-col",
        className
      ),
      ...props
    }
  );
}
function ResizablePanel({ ...props }) {
  return /* @__PURE__ */ jsx23(ResizablePrimitive.Panel, { "data-slot": "resizable-panel", ...props });
}
function ResizableHandle({
  withHandle,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx23(
    ResizablePrimitive.Separator,
    {
      "data-slot": "resizable-handle",
      className: cn(
        "bg-border focus-visible:ring-ring ring-offset-background relative flex w-px items-center justify-center after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:ring-1 focus-visible:outline-hidden aria-[orientation=horizontal]:h-px aria-[orientation=horizontal]:w-full aria-[orientation=horizontal]:after:left-0 aria-[orientation=horizontal]:after:h-1 aria-[orientation=horizontal]:after:w-full aria-[orientation=horizontal]:after:translate-x-0 aria-[orientation=horizontal]:after:-translate-y-1/2 [&[aria-orientation=horizontal]>div]:rotate-90",
        className
      ),
      ...props,
      children: withHandle && /* @__PURE__ */ jsx23("div", { className: "bg-border h-6 w-1 rounded-lg z-10 flex shrink-0" })
    }
  );
}

// components/ui/sonner.tsx
import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";
import { IconCircleCheck, IconInfoCircle, IconAlertTriangle, IconAlertOctagon, IconLoader } from "@tabler/icons-react";
import { jsx as jsx24 } from "react/jsx-runtime";
var Toaster = ({ ...props }) => {
  const { theme = "system" } = useTheme();
  return /* @__PURE__ */ jsx24(
    Sonner,
    {
      theme,
      className: "toaster group",
      icons: {
        success: /* @__PURE__ */ jsx24(IconCircleCheck, { className: "size-4" }),
        info: /* @__PURE__ */ jsx24(IconInfoCircle, { className: "size-4" }),
        warning: /* @__PURE__ */ jsx24(IconAlertTriangle, { className: "size-4" }),
        error: /* @__PURE__ */ jsx24(IconAlertOctagon, { className: "size-4" }),
        loading: /* @__PURE__ */ jsx24(IconLoader, { className: "size-4 animate-spin" })
      },
      style: {
        "--normal-bg": "var(--popover)",
        "--normal-text": "var(--popover-foreground)",
        "--normal-border": "var(--border)",
        "--border-radius": "var(--radius)"
      },
      toastOptions: {
        classNames: {
          toast: "cn-toast"
        }
      },
      ...props
    }
  );
};

// components/ui/navigation-menu.tsx
import { cva as cva6 } from "class-variance-authority";
import { NavigationMenu as NavigationMenuPrimitive } from "radix-ui";
import { IconChevronDown } from "@tabler/icons-react";
import { jsx as jsx25, jsxs as jsxs9 } from "react/jsx-runtime";
function NavigationMenu({
  className,
  children,
  viewport = true,
  ...props
}) {
  return /* @__PURE__ */ jsxs9(
    NavigationMenuPrimitive.Root,
    {
      "data-slot": "navigation-menu",
      "data-viewport": viewport,
      className: cn(
        "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
        className
      ),
      ...props,
      children: [
        children,
        viewport && /* @__PURE__ */ jsx25(NavigationMenuViewport, {})
      ]
    }
  );
}
function NavigationMenuList({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx25(
    NavigationMenuPrimitive.List,
    {
      "data-slot": "navigation-menu-list",
      className: cn(
        "gap-0 group flex flex-1 list-none items-center justify-center",
        className
      ),
      ...props
    }
  );
}
function NavigationMenuItem({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx25(
    NavigationMenuPrimitive.Item,
    {
      "data-slot": "navigation-menu-item",
      className: cn("relative", className),
      ...props
    }
  );
}
var navigationMenuTriggerStyle = cva6(
  "bg-background hover:bg-muted focus:bg-muted data-open:hover:bg-muted data-open:focus:bg-muted data-open:bg-muted/50 focus-visible:ring-ring/50 data-popup-open:bg-muted/50 data-popup-open:hover:bg-muted rounded-lg px-2.5 py-1.5 text-sm font-medium transition-all focus-visible:ring-3 focus-visible:outline-1 disabled:opacity-50 group/navigation-menu-trigger inline-flex h-9 w-max items-center justify-center disabled:pointer-events-none outline-none"
);
function NavigationMenuTrigger({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs9(
    NavigationMenuPrimitive.Trigger,
    {
      "data-slot": "navigation-menu-trigger",
      className: cn(navigationMenuTriggerStyle(), "group", className),
      ...props,
      children: [
        children,
        " ",
        /* @__PURE__ */ jsx25(IconChevronDown, { className: "relative top-px ml-1 size-3 transition duration-300 group-data-open/navigation-menu-trigger:rotate-180 group-data-popup-open/navigation-menu-trigger:rotate-180", "aria-hidden": "true" })
      ]
    }
  );
}
function NavigationMenuContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx25(
    NavigationMenuPrimitive.Content,
    {
      "data-slot": "navigation-menu-content",
      className: cn(
        "data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:data-open:animate-in group-data-[viewport=false]/navigation-menu:data-closed:animate-out group-data-[viewport=false]/navigation-menu:data-closed:zoom-out-95 group-data-[viewport=false]/navigation-menu:data-open:zoom-in-95 group-data-[viewport=false]/navigation-menu:data-open:fade-in-0 group-data-[viewport=false]/navigation-menu:data-closed:fade-out-0 group-data-[viewport=false]/navigation-menu:ring-foreground/10 p-1 ease-[cubic-bezier(0.22,1,0.36,1)] group-data-[viewport=false]/navigation-menu:rounded-lg group-data-[viewport=false]/navigation-menu:shadow group-data-[viewport=false]/navigation-menu:ring-1 group-data-[viewport=false]/navigation-menu:duration-300 top-0 left-0 w-full group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5 group-data-[viewport=false]/navigation-menu:overflow-hidden **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none md:absolute md:w-auto",
        className
      ),
      ...props
    }
  );
}
function NavigationMenuViewport({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx25(
    "div",
    {
      className: cn(
        "absolute top-full left-0 isolate z-50 flex justify-center"
      ),
      children: /* @__PURE__ */ jsx25(
        NavigationMenuPrimitive.Viewport,
        {
          "data-slot": "navigation-menu-viewport",
          className: cn(
            "bg-popover text-popover-foreground data-open:animate-in data-closed:animate-out data-closed:zoom-out-95 data-open:zoom-in-90 ring-foreground/10 rounded-lg shadow ring-1 duration-100 origin-top-center relative mt-1.5 h-(--radix-navigation-menu-viewport-height) w-full overflow-hidden md:w-(--radix-navigation-menu-viewport-width)",
            className
          ),
          ...props
        }
      )
    }
  );
}
function NavigationMenuLink({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx25(
    NavigationMenuPrimitive.Link,
    {
      "data-slot": "navigation-menu-link",
      className: cn("data-active:focus:bg-muted data-active:hover:bg-muted data-active:bg-muted/50 focus-visible:ring-ring/50 hover:bg-muted focus:bg-muted flex items-center gap-2 rounded-lg p-2 text-sm transition-all outline-none focus-visible:ring-3 focus-visible:outline-1 in-data-[slot=navigation-menu-content]:rounded-md [&_svg:not([class*='size-'])]:size-4", className),
      ...props
    }
  );
}
function NavigationMenuIndicator({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx25(
    NavigationMenuPrimitive.Indicator,
    {
      "data-slot": "navigation-menu-indicator",
      className: cn(
        "data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in top-full z-1 flex h-1.5 items-end justify-center overflow-hidden",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx25("div", { className: "bg-border rounded-tl-sm shadow-md relative top-[60%] h-2 w-2 rotate-45" })
    }
  );
}

// components/ui/accordion.tsx
import { Accordion as AccordionPrimitive } from "radix-ui";
import { IconChevronDown as IconChevronDown2, IconChevronUp } from "@tabler/icons-react";
import { jsx as jsx26, jsxs as jsxs10 } from "react/jsx-runtime";
function Accordion({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx26(
    AccordionPrimitive.Root,
    {
      "data-slot": "accordion",
      className: cn("flex w-full flex-col", className),
      ...props
    }
  );
}
function AccordionItem({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx26(
    AccordionPrimitive.Item,
    {
      "data-slot": "accordion-item",
      className: cn("not-last:border-b", className),
      ...props
    }
  );
}
function AccordionTrigger({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsx26(AccordionPrimitive.Header, { className: "flex", children: /* @__PURE__ */ jsxs10(
    AccordionPrimitive.Trigger,
    {
      "data-slot": "accordion-trigger",
      className: cn(
        "focus-visible:ring-ring/50 focus-visible:border-ring focus-visible:after:border-ring **:data-[slot=accordion-trigger-icon]:text-muted-foreground rounded-lg py-2.5 text-left text-sm font-medium hover:underline focus-visible:ring-3 **:data-[slot=accordion-trigger-icon]:ml-auto **:data-[slot=accordion-trigger-icon]:size-4 group/accordion-trigger relative flex flex-1 items-start justify-between border border-transparent transition-all outline-none disabled:pointer-events-none disabled:opacity-50",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsx26(IconChevronDown2, { "data-slot": "accordion-trigger-icon", className: "pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:hidden" }),
        /* @__PURE__ */ jsx26(IconChevronUp, { "data-slot": "accordion-trigger-icon", className: "pointer-events-none hidden shrink-0 group-aria-expanded/accordion-trigger:inline" })
      ]
    }
  ) });
}
function AccordionContent({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsx26(
    AccordionPrimitive.Content,
    {
      "data-slot": "accordion-content",
      className: "data-open:animate-accordion-down data-closed:animate-accordion-up text-sm overflow-hidden",
      ...props,
      children: /* @__PURE__ */ jsx26(
        "div",
        {
          className: cn(
            "pt-0 pb-2.5 [&_a]:hover:text-foreground h-(--radix-accordion-content-height) [&_a]:underline [&_a]:underline-offset-3 [&_p:not(:last-child)]:mb-4",
            className
          ),
          children
        }
      )
    }
  );
}

// components/ui/drawer.tsx
import { Drawer as DrawerPrimitive } from "vaul";
import { jsx as jsx27, jsxs as jsxs11 } from "react/jsx-runtime";
function Drawer({
  ...props
}) {
  return /* @__PURE__ */ jsx27(DrawerPrimitive.Root, { "data-slot": "drawer", ...props });
}
function DrawerTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsx27(DrawerPrimitive.Trigger, { "data-slot": "drawer-trigger", ...props });
}
function DrawerPortal({
  ...props
}) {
  return /* @__PURE__ */ jsx27(DrawerPrimitive.Portal, { "data-slot": "drawer-portal", ...props });
}
function DrawerClose({
  ...props
}) {
  return /* @__PURE__ */ jsx27(DrawerPrimitive.Close, { "data-slot": "drawer-close", ...props });
}
function DrawerOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx27(
    DrawerPrimitive.Overlay,
    {
      "data-slot": "drawer-overlay",
      className: cn("data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 bg-black/10 supports-backdrop-filter:backdrop-blur-xs fixed inset-0 z-50", className),
      ...props
    }
  );
}
function DrawerContent({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs11(DrawerPortal, { "data-slot": "drawer-portal", children: [
    /* @__PURE__ */ jsx27(DrawerOverlay, {}),
    /* @__PURE__ */ jsxs11(
      DrawerPrimitive.Content,
      {
        "data-slot": "drawer-content",
        className: cn(
          "bg-background flex h-auto flex-col text-sm data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=bottom]:rounded-t-xl data-[vaul-drawer-direction=bottom]:border-t data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:rounded-r-xl data-[vaul-drawer-direction=left]:border-r data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:rounded-l-xl data-[vaul-drawer-direction=right]:border-l data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=top]:rounded-b-xl data-[vaul-drawer-direction=top]:border-b data-[vaul-drawer-direction=left]:sm:max-w-sm data-[vaul-drawer-direction=right]:sm:max-w-sm group/drawer-content fixed z-50",
          className
        ),
        ...props,
        children: [
          /* @__PURE__ */ jsx27("div", { className: "bg-muted mt-4 h-1 w-[100px] rounded-full mx-auto hidden shrink-0 group-data-[vaul-drawer-direction=bottom]/drawer-content:block" }),
          children
        ]
      }
    )
  ] });
}
function DrawerHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx27(
    "div",
    {
      "data-slot": "drawer-header",
      className: cn("gap-0.5 p-4 group-data-[vaul-drawer-direction=bottom]/drawer-content:text-center group-data-[vaul-drawer-direction=top]/drawer-content:text-center md:gap-0.5 md:text-left flex flex-col", className),
      ...props
    }
  );
}
function DrawerFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx27(
    "div",
    {
      "data-slot": "drawer-footer",
      className: cn("gap-2 p-4 mt-auto flex flex-col", className),
      ...props
    }
  );
}
function DrawerTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx27(
    DrawerPrimitive.Title,
    {
      "data-slot": "drawer-title",
      className: cn("text-foreground text-base font-medium", className),
      ...props
    }
  );
}
function DrawerDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx27(
    DrawerPrimitive.Description,
    {
      "data-slot": "drawer-description",
      className: cn("text-muted-foreground text-sm", className),
      ...props
    }
  );
}

// components/ui/empty.tsx
import { cva as cva7 } from "class-variance-authority";
import { jsx as jsx28 } from "react/jsx-runtime";
function Empty({ className, ...props }) {
  return /* @__PURE__ */ jsx28(
    "div",
    {
      "data-slot": "empty",
      className: cn(
        "gap-4 rounded-xl border-dashed p-6 flex w-full min-w-0 flex-1 flex-col items-center justify-center text-center text-balance",
        className
      ),
      ...props
    }
  );
}
function EmptyHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx28(
    "div",
    {
      "data-slot": "empty-header",
      className: cn(
        "gap-2 flex max-w-sm flex-col items-center",
        className
      ),
      ...props
    }
  );
}
var emptyMediaVariants = cva7(
  "mb-2 flex shrink-0 items-center justify-center [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        icon: "bg-muted text-foreground flex size-8 shrink-0 items-center justify-center rounded-lg [&_svg:not([class*='size-'])]:size-4"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function EmptyMedia({
  className,
  variant = "default",
  ...props
}) {
  return /* @__PURE__ */ jsx28(
    "div",
    {
      "data-slot": "empty-icon",
      "data-variant": variant,
      className: cn(emptyMediaVariants({ variant, className })),
      ...props
    }
  );
}
function EmptyTitle({ className, ...props }) {
  return /* @__PURE__ */ jsx28(
    "div",
    {
      "data-slot": "empty-title",
      className: cn("text-sm font-medium tracking-tight", className),
      ...props
    }
  );
}
function EmptyDescription({ className, ...props }) {
  return /* @__PURE__ */ jsx28(
    "div",
    {
      "data-slot": "empty-description",
      className: cn(
        "text-sm/relaxed text-muted-foreground [&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4",
        className
      ),
      ...props
    }
  );
}
function EmptyContent({ className, ...props }) {
  return /* @__PURE__ */ jsx28(
    "div",
    {
      "data-slot": "empty-content",
      className: cn(
        "gap-2.5 text-sm flex w-full max-w-sm min-w-0 flex-col items-center text-balance",
        className
      ),
      ...props
    }
  );
}

// components/ui/tooltip.tsx
import { Tooltip as TooltipPrimitive } from "radix-ui";
import { jsx as jsx29, jsxs as jsxs12 } from "react/jsx-runtime";
function TooltipProvider({
  delayDuration = 0,
  ...props
}) {
  return /* @__PURE__ */ jsx29(
    TooltipPrimitive.Provider,
    {
      "data-slot": "tooltip-provider",
      delayDuration,
      ...props
    }
  );
}
function Tooltip2({
  ...props
}) {
  return /* @__PURE__ */ jsx29(TooltipPrimitive.Root, { "data-slot": "tooltip", ...props });
}
function TooltipTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsx29(TooltipPrimitive.Trigger, { "data-slot": "tooltip-trigger", ...props });
}
function TooltipContent({
  className,
  sideOffset = 0,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsx29(TooltipPrimitive.Portal, { children: /* @__PURE__ */ jsxs12(
    TooltipPrimitive.Content,
    {
      "data-slot": "tooltip-content",
      sideOffset,
      className: cn(
        "data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-[state=delayed-open]:animate-in data-[state=delayed-open]:fade-in-0 data-[state=delayed-open]:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 rounded-md px-3 py-1.5 text-xs bg-foreground text-background z-50 w-fit max-w-xs origin-(--radix-tooltip-content-transform-origin)",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsx29(TooltipPrimitive.Arrow, { className: "size-2.5 rotate-45 rounded-[2px] bg-foreground fill-foreground z-50 translate-y-[calc(-50%_-_2px)]" })
      ]
    }
  ) });
}

// components/ui/alert.tsx
import { cva as cva8 } from "class-variance-authority";
import { jsx as jsx30 } from "react/jsx-runtime";
var alertVariants = cva8("grid gap-0.5 rounded-lg border px-2.5 py-2 text-left text-sm has-data-[slot=alert-action]:relative has-data-[slot=alert-action]:pr-18 has-[>svg]:grid-cols-[auto_1fr] has-[>svg]:gap-x-2 *:[svg]:row-span-2 *:[svg]:translate-y-0.5 *:[svg]:text-current *:[svg:not([class*='size-'])]:size-4 w-full relative group/alert", {
  variants: {
    variant: {
      default: "bg-card text-card-foreground",
      destructive: "text-destructive bg-card *:data-[slot=alert-description]:text-destructive/90 *:[svg]:text-current"
    }
  },
  defaultVariants: {
    variant: "default"
  }
});
function Alert({
  className,
  variant,
  ...props
}) {
  return /* @__PURE__ */ jsx30(
    "div",
    {
      "data-slot": "alert",
      role: "alert",
      className: cn(alertVariants({ variant }), className),
      ...props
    }
  );
}
function AlertTitle({ className, ...props }) {
  return /* @__PURE__ */ jsx30(
    "div",
    {
      "data-slot": "alert-title",
      className: cn(
        "font-medium group-has-[>svg]/alert:col-start-2 [&_a]:hover:text-foreground [&_a]:underline [&_a]:underline-offset-3",
        className
      ),
      ...props
    }
  );
}
function AlertDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx30(
    "div",
    {
      "data-slot": "alert-description",
      className: cn(
        "text-muted-foreground text-sm text-balance md:text-pretty [&_p:not(:last-child)]:mb-4 [&_a]:hover:text-foreground [&_a]:underline [&_a]:underline-offset-3",
        className
      ),
      ...props
    }
  );
}
function AlertAction({ className, ...props }) {
  return /* @__PURE__ */ jsx30(
    "div",
    {
      "data-slot": "alert-action",
      className: cn("absolute top-2 right-2", className),
      ...props
    }
  );
}

// components/ui/combobox.tsx
import * as React4 from "react";
import { Combobox as ComboboxPrimitive } from "@base-ui/react";
import { IconChevronDown as IconChevronDown3, IconX as IconX2, IconCheck } from "@tabler/icons-react";
import { jsx as jsx31, jsxs as jsxs13 } from "react/jsx-runtime";
var Combobox = ComboboxPrimitive.Root;
function ComboboxValue({ ...props }) {
  return /* @__PURE__ */ jsx31(ComboboxPrimitive.Value, { "data-slot": "combobox-value", ...props });
}
function ComboboxTrigger({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs13(
    ComboboxPrimitive.Trigger,
    {
      "data-slot": "combobox-trigger",
      className: cn("[&_svg:not([class*='size-'])]:size-4", className),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsx31(IconChevronDown3, { className: "text-muted-foreground size-4 pointer-events-none" })
      ]
    }
  );
}
function ComboboxClear({ className, ...props }) {
  return /* @__PURE__ */ jsx31(
    ComboboxPrimitive.Clear,
    {
      "data-slot": "combobox-clear",
      render: /* @__PURE__ */ jsx31(InputGroupButton, { variant: "ghost", size: "icon-xs" }),
      className: cn(className),
      ...props,
      children: /* @__PURE__ */ jsx31(IconX2, { className: "pointer-events-none" })
    }
  );
}
function ComboboxInput({
  className,
  children,
  disabled = false,
  showTrigger = true,
  showClear = false,
  ...props
}) {
  return /* @__PURE__ */ jsxs13(InputGroup, { className: cn("w-auto", className), children: [
    /* @__PURE__ */ jsx31(
      ComboboxPrimitive.Input,
      {
        render: /* @__PURE__ */ jsx31(InputGroupInput, { disabled }),
        ...props
      }
    ),
    /* @__PURE__ */ jsxs13(InputGroupAddon, { align: "inline-end", children: [
      showTrigger && /* @__PURE__ */ jsx31(
        InputGroupButton,
        {
          size: "icon-xs",
          variant: "ghost",
          asChild: true,
          "data-slot": "input-group-button",
          className: "group-has-data-[slot=combobox-clear]/input-group:hidden data-pressed:bg-transparent",
          disabled,
          children: /* @__PURE__ */ jsx31(ComboboxTrigger, {})
        }
      ),
      showClear && /* @__PURE__ */ jsx31(ComboboxClear, { disabled })
    ] }),
    children
  ] });
}
function ComboboxContent({
  className,
  side = "bottom",
  sideOffset = 6,
  align = "start",
  alignOffset = 0,
  anchor,
  ...props
}) {
  return /* @__PURE__ */ jsx31(ComboboxPrimitive.Portal, { children: /* @__PURE__ */ jsx31(
    ComboboxPrimitive.Positioner,
    {
      side,
      sideOffset,
      align,
      alignOffset,
      anchor,
      className: "isolate z-50",
      children: /* @__PURE__ */ jsx31(
        ComboboxPrimitive.Popup,
        {
          "data-slot": "combobox-content",
          "data-chips": !!anchor,
          className: cn("bg-popover text-popover-foreground data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ring-foreground/10 *:data-[slot=input-group]:bg-input/30 *:data-[slot=input-group]:border-input/30 overflow-hidden rounded-lg shadow-md ring-1 duration-100 *:data-[slot=input-group]:m-1 *:data-[slot=input-group]:mb-0 *:data-[slot=input-group]:h-8 *:data-[slot=input-group]:shadow-none data-[side=inline-start]:slide-in-from-right-2 data-[side=inline-end]:slide-in-from-left-2 group/combobox-content relative max-h-(--available-height) w-(--anchor-width) max-w-(--available-width) min-w-[calc(var(--anchor-width)+--spacing(7))] origin-(--transform-origin) data-[chips=true]:min-w-(--anchor-width)", className),
          ...props
        }
      )
    }
  ) });
}
function ComboboxList({ className, ...props }) {
  return /* @__PURE__ */ jsx31(
    ComboboxPrimitive.List,
    {
      "data-slot": "combobox-list",
      className: cn(
        "no-scrollbar max-h-[min(calc(--spacing(72)---spacing(9)),calc(var(--available-height)---spacing(9)))] scroll-py-1 p-1 data-empty:p-0 overflow-y-auto overscroll-contain",
        className
      ),
      ...props
    }
  );
}
function ComboboxItem({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs13(
    ComboboxPrimitive.Item,
    {
      "data-slot": "combobox-item",
      className: cn(
        "data-highlighted:bg-accent data-highlighted:text-accent-foreground not-data-[variant=destructive]:data-highlighted:**:text-accent-foreground gap-2 rounded-md py-1 pr-8 pl-1.5 text-sm [&_svg:not([class*='size-'])]:size-4 relative flex w-full cursor-default items-center outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsx31(
          ComboboxPrimitive.ItemIndicator,
          {
            render: /* @__PURE__ */ jsx31("span", { className: "pointer-events-none absolute right-2 flex size-4 items-center justify-center" }),
            children: /* @__PURE__ */ jsx31(IconCheck, { className: "pointer-events-none" })
          }
        )
      ]
    }
  );
}
function ComboboxGroup({ className, ...props }) {
  return /* @__PURE__ */ jsx31(
    ComboboxPrimitive.Group,
    {
      "data-slot": "combobox-group",
      className: cn(className),
      ...props
    }
  );
}
function ComboboxLabel({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx31(
    ComboboxPrimitive.GroupLabel,
    {
      "data-slot": "combobox-label",
      className: cn("text-muted-foreground px-2 py-1.5 text-xs", className),
      ...props
    }
  );
}
function ComboboxCollection({ ...props }) {
  return /* @__PURE__ */ jsx31(ComboboxPrimitive.Collection, { "data-slot": "combobox-collection", ...props });
}
function ComboboxEmpty({ className, ...props }) {
  return /* @__PURE__ */ jsx31(
    ComboboxPrimitive.Empty,
    {
      "data-slot": "combobox-empty",
      className: cn("text-muted-foreground hidden w-full justify-center py-2 text-center text-sm group-data-empty/combobox-content:flex", className),
      ...props
    }
  );
}
function ComboboxSeparator({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx31(
    ComboboxPrimitive.Separator,
    {
      "data-slot": "combobox-separator",
      className: cn("bg-border -mx-1 my-1 h-px", className),
      ...props
    }
  );
}
function ComboboxChips({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx31(
    ComboboxPrimitive.Chips,
    {
      "data-slot": "combobox-chips",
      className: cn("dark:bg-input/30 border-input focus-within:border-ring focus-within:ring-ring/50 has-aria-invalid:ring-destructive/20 dark:has-aria-invalid:ring-destructive/40 has-aria-invalid:border-destructive dark:has-aria-invalid:border-destructive/50 flex min-h-8 flex-wrap items-center gap-1 rounded-lg border bg-transparent bg-clip-padding px-2.5 py-1 text-sm transition-colors focus-within:ring-3 has-aria-invalid:ring-3 has-data-[slot=combobox-chip]:px-1", className),
      ...props
    }
  );
}
function ComboboxChip({
  className,
  children,
  showRemove = true,
  ...props
}) {
  return /* @__PURE__ */ jsxs13(
    ComboboxPrimitive.Chip,
    {
      "data-slot": "combobox-chip",
      className: cn(
        "bg-muted text-foreground flex h-[calc(--spacing(5.25))] w-fit items-center justify-center gap-1 rounded-sm px-1.5 text-xs font-medium whitespace-nowrap has-data-[slot=combobox-chip-remove]:pr-0 has-disabled:pointer-events-none has-disabled:cursor-not-allowed has-disabled:opacity-50",
        className
      ),
      ...props,
      children: [
        children,
        showRemove && /* @__PURE__ */ jsx31(
          ComboboxPrimitive.ChipRemove,
          {
            render: /* @__PURE__ */ jsx31(Button, { variant: "ghost", size: "icon-xs" }),
            className: "-ml-1 opacity-50 hover:opacity-100",
            "data-slot": "combobox-chip-remove",
            children: /* @__PURE__ */ jsx31(IconX2, { className: "pointer-events-none" })
          }
        )
      ]
    }
  );
}
function ComboboxChipsInput({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx31(
    ComboboxPrimitive.Input,
    {
      "data-slot": "combobox-chip-input",
      className: cn(
        "min-w-16 flex-1 outline-none",
        className
      ),
      ...props
    }
  );
}
function useComboboxAnchor() {
  return React4.useRef(null);
}

// components/ui/switch.tsx
import { Switch as SwitchPrimitive } from "radix-ui";
import { jsx as jsx32 } from "react/jsx-runtime";
function Switch({
  className,
  size = "default",
  ...props
}) {
  return /* @__PURE__ */ jsx32(
    SwitchPrimitive.Root,
    {
      "data-slot": "switch",
      "data-size": size,
      className: cn(
        "data-checked:bg-primary data-unchecked:bg-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 dark:data-unchecked:bg-input/80 shrink-0 rounded-full border border-transparent focus-visible:ring-3 aria-invalid:ring-3 data-[size=default]:h-[18.4px] data-[size=default]:w-[32px] data-[size=sm]:h-[14px] data-[size=sm]:w-[24px] peer group/switch relative inline-flex items-center transition-all outline-none after:absolute after:-inset-x-3 after:-inset-y-2 data-disabled:cursor-not-allowed data-disabled:opacity-50",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx32(
        SwitchPrimitive.Thumb,
        {
          "data-slot": "switch-thumb",
          className: "bg-background dark:data-unchecked:bg-foreground dark:data-checked:bg-primary-foreground rounded-full group-data-[size=default]/switch:size-4 group-data-[size=sm]/switch:size-3 group-data-[size=default]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=sm]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=default]/switch:data-unchecked:translate-x-0 group-data-[size=sm]/switch:data-unchecked:translate-x-0 pointer-events-none block ring-0 transition-transform"
        }
      )
    }
  );
}

// components/ui/calendar.tsx
import * as React5 from "react";
import {
  DayPicker,
  getDefaultClassNames
} from "react-day-picker";
import { IconChevronLeft as IconChevronLeft2, IconChevronRight as IconChevronRight2, IconChevronDown as IconChevronDown4 } from "@tabler/icons-react";
import { jsx as jsx33 } from "react/jsx-runtime";
function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  buttonVariant = "ghost",
  locale,
  formatters,
  components,
  ...props
}) {
  const defaultClassNames = getDefaultClassNames();
  return /* @__PURE__ */ jsx33(
    DayPicker,
    {
      showOutsideDays,
      className: cn(
        "p-2 [--cell-radius:var(--radius-md)] [--cell-size:--spacing(7)] bg-background group/calendar in-data-[slot=card-content]:bg-transparent in-data-[slot=popover-content]:bg-transparent",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        className
      ),
      captionLayout,
      locale,
      formatters: {
        formatMonthDropdown: (date) => date.toLocaleString(locale?.code, { month: "short" }),
        ...formatters
      },
      classNames: {
        root: cn("w-fit", defaultClassNames.root),
        months: cn(
          "flex gap-4 flex-col md:flex-row relative",
          defaultClassNames.months
        ),
        month: cn("flex flex-col w-full gap-4", defaultClassNames.month),
        nav: cn(
          "flex items-center gap-1 w-full absolute top-0 inset-x-0 justify-between",
          defaultClassNames.nav
        ),
        button_previous: cn(
          buttonVariants({ variant: buttonVariant }),
          "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
          defaultClassNames.button_previous
        ),
        button_next: cn(
          buttonVariants({ variant: buttonVariant }),
          "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
          defaultClassNames.button_next
        ),
        month_caption: cn(
          "flex items-center justify-center h-(--cell-size) w-full px-(--cell-size)",
          defaultClassNames.month_caption
        ),
        dropdowns: cn(
          "w-full flex items-center text-sm font-medium justify-center h-(--cell-size) gap-1.5",
          defaultClassNames.dropdowns
        ),
        dropdown_root: cn(
          "relative rounded-(--cell-radius)",
          defaultClassNames.dropdown_root
        ),
        dropdown: cn(
          "absolute bg-popover inset-0 opacity-0",
          defaultClassNames.dropdown
        ),
        caption_label: cn(
          "select-none font-medium",
          captionLayout === "label" ? "text-sm" : "rounded-(--cell-radius) flex items-center gap-1 text-sm [&>svg]:text-muted-foreground [&>svg]:size-3.5",
          defaultClassNames.caption_label
        ),
        table: "w-full border-collapse",
        weekdays: cn("flex", defaultClassNames.weekdays),
        weekday: cn(
          "text-muted-foreground rounded-(--cell-radius) flex-1 font-normal text-[0.8rem] select-none",
          defaultClassNames.weekday
        ),
        week: cn("flex w-full mt-2", defaultClassNames.week),
        week_number_header: cn(
          "select-none w-(--cell-size)",
          defaultClassNames.week_number_header
        ),
        week_number: cn(
          "text-[0.8rem] select-none text-muted-foreground",
          defaultClassNames.week_number
        ),
        day: cn(
          "relative w-full rounded-(--cell-radius) h-full p-0 text-center [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) group/day aspect-square select-none",
          props.showWeekNumber ? "[&:nth-child(2)[data-selected=true]_button]:rounded-l-(--cell-radius)" : "[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius)",
          defaultClassNames.day
        ),
        range_start: cn(
          "rounded-l-(--cell-radius) bg-muted relative after:bg-muted after:absolute after:inset-y-0 after:w-4 after:right-0 z-0 isolate",
          defaultClassNames.range_start
        ),
        range_middle: cn("rounded-none", defaultClassNames.range_middle),
        range_end: cn(
          "rounded-r-(--cell-radius) bg-muted relative after:bg-muted after:absolute after:inset-y-0 after:w-4 after:left-0 z-0 isolate",
          defaultClassNames.range_end
        ),
        today: cn(
          "bg-muted text-foreground rounded-(--cell-radius) data-[selected=true]:rounded-none",
          defaultClassNames.today
        ),
        outside: cn(
          "text-muted-foreground aria-selected:text-muted-foreground",
          defaultClassNames.outside
        ),
        disabled: cn(
          "text-muted-foreground opacity-50",
          defaultClassNames.disabled
        ),
        hidden: cn("invisible", defaultClassNames.hidden),
        ...classNames
      },
      components: {
        Root: ({ className: className2, rootRef, ...props2 }) => {
          return /* @__PURE__ */ jsx33(
            "div",
            {
              "data-slot": "calendar",
              ref: rootRef,
              className: cn(className2),
              ...props2
            }
          );
        },
        Chevron: ({ className: className2, orientation, ...props2 }) => {
          if (orientation === "left") {
            return /* @__PURE__ */ jsx33(IconChevronLeft2, { className: cn("size-4", className2), ...props2 });
          }
          if (orientation === "right") {
            return /* @__PURE__ */ jsx33(IconChevronRight2, { className: cn("size-4", className2), ...props2 });
          }
          return /* @__PURE__ */ jsx33(IconChevronDown4, { className: cn("size-4", className2), ...props2 });
        },
        DayButton: ({ ...props2 }) => /* @__PURE__ */ jsx33(CalendarDayButton, { locale, ...props2 }),
        WeekNumber: ({ children, ...props2 }) => {
          return /* @__PURE__ */ jsx33("td", { ...props2, children: /* @__PURE__ */ jsx33("div", { className: "flex size-(--cell-size) items-center justify-center text-center", children }) });
        },
        ...components
      },
      ...props
    }
  );
}
function CalendarDayButton({
  className,
  day,
  modifiers,
  locale,
  ...props
}) {
  const defaultClassNames = getDefaultClassNames();
  const ref = React5.useRef(null);
  React5.useEffect(() => {
    if (modifiers.focused) ref.current?.focus();
  }, [modifiers.focused]);
  return /* @__PURE__ */ jsx33(
    Button,
    {
      ref,
      variant: "ghost",
      size: "icon",
      "data-day": day.date.toLocaleDateString(locale?.code),
      "data-selected-single": modifiers.selected && !modifiers.range_start && !modifiers.range_end && !modifiers.range_middle,
      "data-range-start": modifiers.range_start,
      "data-range-end": modifiers.range_end,
      "data-range-middle": modifiers.range_middle,
      className: cn(
        "data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-ring/50 dark:hover:text-foreground relative isolate z-10 flex aspect-square size-auto w-full min-w-(--cell-size) flex-col gap-1 border-0 leading-none font-normal group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-[3px] data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) [&>span]:text-xs [&>span]:opacity-70",
        defaultClassNames.day,
        className
      ),
      ...props
    }
  );
}

// components/ui/native-select.tsx
import { IconSelector } from "@tabler/icons-react";
import { jsx as jsx34, jsxs as jsxs14 } from "react/jsx-runtime";
function NativeSelect({
  className,
  size = "default",
  ...props
}) {
  return /* @__PURE__ */ jsxs14(
    "div",
    {
      className: cn(
        "group/native-select relative w-fit has-[select:disabled]:opacity-50",
        className
      ),
      "data-slot": "native-select-wrapper",
      "data-size": size,
      children: [
        /* @__PURE__ */ jsx34(
          "select",
          {
            "data-slot": "native-select",
            "data-size": size,
            className: "border-input placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 dark:hover:bg-input/50 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 h-8 w-full min-w-0 appearance-none rounded-lg border bg-transparent py-1 pr-8 pl-2.5 text-sm transition-colors select-none focus-visible:ring-3 aria-invalid:ring-3 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] data-[size=sm]:py-0.5 outline-none disabled:pointer-events-none disabled:cursor-not-allowed",
            ...props
          }
        ),
        /* @__PURE__ */ jsx34(IconSelector, { className: "text-muted-foreground top-1/2 right-2.5 size-4 -translate-y-1/2 pointer-events-none absolute select-none", "aria-hidden": "true", "data-slot": "native-select-icon" })
      ]
    }
  );
}
function NativeSelectOption({ ...props }) {
  return /* @__PURE__ */ jsx34("option", { "data-slot": "native-select-option", ...props });
}
function NativeSelectOptGroup({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx34(
    "optgroup",
    {
      "data-slot": "native-select-optgroup",
      className: cn(className),
      ...props
    }
  );
}

// components/ui/breadcrumb.tsx
import { Slot as Slot3 } from "radix-ui";
import { IconChevronRight as IconChevronRight3, IconDots as IconDots2 } from "@tabler/icons-react";
import { jsx as jsx35, jsxs as jsxs15 } from "react/jsx-runtime";
function Breadcrumb({ className, ...props }) {
  return /* @__PURE__ */ jsx35(
    "nav",
    {
      "aria-label": "breadcrumb",
      "data-slot": "breadcrumb",
      className: cn(className),
      ...props
    }
  );
}
function BreadcrumbList({ className, ...props }) {
  return /* @__PURE__ */ jsx35(
    "ol",
    {
      "data-slot": "breadcrumb-list",
      className: cn(
        "text-muted-foreground gap-1.5 text-sm flex flex-wrap items-center wrap-break-word",
        className
      ),
      ...props
    }
  );
}
function BreadcrumbItem({ className, ...props }) {
  return /* @__PURE__ */ jsx35(
    "li",
    {
      "data-slot": "breadcrumb-item",
      className: cn("gap-1 inline-flex items-center", className),
      ...props
    }
  );
}
function BreadcrumbLink({
  asChild,
  className,
  ...props
}) {
  const Comp = asChild ? Slot3.Root : "a";
  return /* @__PURE__ */ jsx35(
    Comp,
    {
      "data-slot": "breadcrumb-link",
      className: cn("hover:text-foreground transition-colors", className),
      ...props
    }
  );
}
function BreadcrumbPage({ className, ...props }) {
  return /* @__PURE__ */ jsx35(
    "span",
    {
      "data-slot": "breadcrumb-page",
      role: "link",
      "aria-disabled": "true",
      "aria-current": "page",
      className: cn("text-foreground font-normal", className),
      ...props
    }
  );
}
function BreadcrumbSeparator({
  children,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx35(
    "li",
    {
      "data-slot": "breadcrumb-separator",
      role: "presentation",
      "aria-hidden": "true",
      className: cn("[&>svg]:size-3.5", className),
      ...props,
      children: children ?? /* @__PURE__ */ jsx35(IconChevronRight3, {})
    }
  );
}
function BreadcrumbEllipsis({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxs15(
    "span",
    {
      "data-slot": "breadcrumb-ellipsis",
      role: "presentation",
      "aria-hidden": "true",
      className: cn(
        "size-5 [&>svg]:size-4 flex items-center justify-center",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx35(
          IconDots2,
          {}
        ),
        /* @__PURE__ */ jsx35("span", { className: "sr-only", children: "More" })
      ]
    }
  );
}

// components/ui/radio-group.tsx
import { RadioGroup as RadioGroupPrimitive } from "radix-ui";
import { IconCircle } from "@tabler/icons-react";
import { jsx as jsx36 } from "react/jsx-runtime";
function RadioGroup({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx36(
    RadioGroupPrimitive.Root,
    {
      "data-slot": "radio-group",
      className: cn("grid gap-2 w-full", className),
      ...props
    }
  );
}
function RadioGroupItem({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx36(
    RadioGroupPrimitive.Item,
    {
      "data-slot": "radio-group-item",
      className: cn(
        "border-input text-primary dark:bg-input/30 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 flex size-4 rounded-full focus-visible:ring-3 aria-invalid:ring-3 group/radio-group-item peer relative aspect-square shrink-0 border outline-none after:absolute after:-inset-x-3 after:-inset-y-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx36(
        RadioGroupPrimitive.Indicator,
        {
          "data-slot": "radio-group-indicator",
          className: "group-aria-invalid/radio-group-item:text-destructive text-primary flex size-4 items-center justify-center",
          children: /* @__PURE__ */ jsx36(IconCircle, { className: "absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 fill-current" })
        }
      )
    }
  );
}

// components/ui/command.tsx
import { Command as CommandPrimitive } from "cmdk";

// components/ui/dialog.tsx
import { Dialog as DialogPrimitive } from "radix-ui";
import { IconX as IconX3 } from "@tabler/icons-react";
import { jsx as jsx37, jsxs as jsxs16 } from "react/jsx-runtime";
function Dialog({
  ...props
}) {
  return /* @__PURE__ */ jsx37(DialogPrimitive.Root, { "data-slot": "dialog", ...props });
}
function DialogTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsx37(DialogPrimitive.Trigger, { "data-slot": "dialog-trigger", ...props });
}
function DialogPortal({
  ...props
}) {
  return /* @__PURE__ */ jsx37(DialogPrimitive.Portal, { "data-slot": "dialog-portal", ...props });
}
function DialogClose({
  ...props
}) {
  return /* @__PURE__ */ jsx37(DialogPrimitive.Close, { "data-slot": "dialog-close", ...props });
}
function DialogOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx37(
    DialogPrimitive.Overlay,
    {
      "data-slot": "dialog-overlay",
      className: cn("data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs fixed inset-0 isolate z-50", className),
      ...props
    }
  );
}
function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}) {
  return /* @__PURE__ */ jsxs16(DialogPortal, { children: [
    /* @__PURE__ */ jsx37(DialogOverlay, {}),
    /* @__PURE__ */ jsxs16(
      DialogPrimitive.Content,
      {
        "data-slot": "dialog-content",
        className: cn(
          "bg-background data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 ring-foreground/10 grid max-w-[calc(100%-2rem)] gap-4 rounded-xl p-4 text-sm ring-1 duration-100 sm:max-w-sm fixed top-1/2 left-1/2 z-50 w-full -translate-x-1/2 -translate-y-1/2 outline-none",
          className
        ),
        ...props,
        children: [
          children,
          showCloseButton && /* @__PURE__ */ jsx37(DialogPrimitive.Close, { "data-slot": "dialog-close", asChild: true, children: /* @__PURE__ */ jsxs16(Button, { variant: "ghost", className: "absolute top-2 right-2", size: "icon-sm", children: [
            /* @__PURE__ */ jsx37(
              IconX3,
              {}
            ),
            /* @__PURE__ */ jsx37("span", { className: "sr-only", children: "Close" })
          ] }) })
        ]
      }
    )
  ] });
}
function DialogHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx37(
    "div",
    {
      "data-slot": "dialog-header",
      className: cn("gap-2 flex flex-col", className),
      ...props
    }
  );
}
function DialogFooter({
  className,
  showCloseButton = false,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs16(
    "div",
    {
      "data-slot": "dialog-footer",
      className: cn(
        "bg-muted/50 -mx-4 -mb-4 rounded-b-xl border-t p-4 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      ),
      ...props,
      children: [
        children,
        showCloseButton && /* @__PURE__ */ jsx37(DialogPrimitive.Close, { asChild: true, children: /* @__PURE__ */ jsx37(Button, { variant: "outline", children: "Close" }) })
      ]
    }
  );
}
function DialogTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx37(
    DialogPrimitive.Title,
    {
      "data-slot": "dialog-title",
      className: cn("text-base leading-none font-medium", className),
      ...props
    }
  );
}
function DialogDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx37(
    DialogPrimitive.Description,
    {
      "data-slot": "dialog-description",
      className: cn("text-muted-foreground *:[a]:hover:text-foreground text-sm *:[a]:underline *:[a]:underline-offset-3", className),
      ...props
    }
  );
}

// components/ui/command.tsx
import { IconSearch, IconCheck as IconCheck2 } from "@tabler/icons-react";
import { jsx as jsx38, jsxs as jsxs17 } from "react/jsx-runtime";
function Command({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx38(
    CommandPrimitive,
    {
      "data-slot": "command",
      className: cn(
        "bg-popover text-popover-foreground rounded-xl! p-1 flex size-full flex-col overflow-hidden",
        className
      ),
      ...props
    }
  );
}
function CommandDialog({
  title = "Command Palette",
  description = "Search for a command to run...",
  children,
  className,
  showCloseButton = false,
  ...props
}) {
  return /* @__PURE__ */ jsxs17(Dialog, { ...props, children: [
    /* @__PURE__ */ jsxs17(DialogHeader, { className: "sr-only", children: [
      /* @__PURE__ */ jsx38(DialogTitle, { children: title }),
      /* @__PURE__ */ jsx38(DialogDescription, { children: description })
    ] }),
    /* @__PURE__ */ jsx38(
      DialogContent,
      {
        className: cn(
          "rounded-xl! top-1/3 translate-y-0 overflow-hidden p-0",
          className
        ),
        showCloseButton,
        children
      }
    )
  ] });
}
function CommandInput({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx38("div", { "data-slot": "command-input-wrapper", className: "p-1 pb-0", children: /* @__PURE__ */ jsxs17(InputGroup, { className: "bg-input/30 border-input/30 h-8! rounded-lg! shadow-none! *:data-[slot=input-group-addon]:pl-2!", children: [
    /* @__PURE__ */ jsx38(
      CommandPrimitive.Input,
      {
        "data-slot": "command-input",
        className: cn(
          "w-full text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50",
          className
        ),
        ...props
      }
    ),
    /* @__PURE__ */ jsx38(InputGroupAddon, { children: /* @__PURE__ */ jsx38(IconSearch, { className: "size-4 shrink-0 opacity-50" }) })
  ] }) });
}
function CommandList({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx38(
    CommandPrimitive.List,
    {
      "data-slot": "command-list",
      className: cn(
        "no-scrollbar max-h-72 scroll-py-1 outline-none overflow-x-hidden overflow-y-auto",
        className
      ),
      ...props
    }
  );
}
function CommandEmpty({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx38(
    CommandPrimitive.Empty,
    {
      "data-slot": "command-empty",
      className: cn("py-6 text-center text-sm", className),
      ...props
    }
  );
}
function CommandGroup({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx38(
    CommandPrimitive.Group,
    {
      "data-slot": "command-group",
      className: cn("text-foreground **:[[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 **:[[cmdk-group-heading]]:px-2 **:[[cmdk-group-heading]]:py-1.5 **:[[cmdk-group-heading]]:text-xs **:[[cmdk-group-heading]]:font-medium", className),
      ...props
    }
  );
}
function CommandSeparator({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx38(
    CommandPrimitive.Separator,
    {
      "data-slot": "command-separator",
      className: cn("bg-border -mx-1 h-px", className),
      ...props
    }
  );
}
function CommandItem({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs17(
    CommandPrimitive.Item,
    {
      "data-slot": "command-item",
      className: cn(
        "data-selected:bg-muted data-selected:text-foreground data-selected:*:[svg]:text-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none in-data-[slot=dialog-content]:rounded-lg! [&_svg:not([class*='size-'])]:size-4 group/command-item data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsx38(IconCheck2, { className: "ml-auto opacity-0 group-has-data-[slot=command-shortcut]/command-item:hidden group-data-[checked=true]/command-item:opacity-100" })
      ]
    }
  );
}
function CommandShortcut({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx38(
    "span",
    {
      "data-slot": "command-shortcut",
      className: cn("text-muted-foreground group-data-selected/command-item:text-foreground ml-auto text-xs tracking-widest", className),
      ...props
    }
  );
}

// components/ui/item.tsx
import { cva as cva9 } from "class-variance-authority";
import { Slot as Slot4 } from "radix-ui";
import { jsx as jsx39 } from "react/jsx-runtime";
function ItemGroup({ className, ...props }) {
  return /* @__PURE__ */ jsx39(
    "div",
    {
      role: "list",
      "data-slot": "item-group",
      className: cn(
        "gap-4 has-data-[size=sm]:gap-2.5 has-data-[size=xs]:gap-2 group/item-group flex w-full flex-col",
        className
      ),
      ...props
    }
  );
}
function ItemSeparator({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx39(
    Separator,
    {
      "data-slot": "item-separator",
      orientation: "horizontal",
      className: cn("my-2", className),
      ...props
    }
  );
}
var itemVariants = cva9(
  "[a]:hover:bg-muted rounded-lg border text-sm w-full group/item focus-visible:border-ring focus-visible:ring-ring/50 flex items-center flex-wrap outline-none transition-colors duration-100 focus-visible:ring-[3px] [a]:transition-colors",
  {
    variants: {
      variant: {
        default: "border-transparent",
        outline: "border-border",
        muted: "bg-muted/50 border-transparent"
      },
      size: {
        default: "gap-2.5 px-3 py-2.5",
        sm: "gap-2.5 px-3 py-2.5",
        xs: "gap-2 px-2.5 py-2 in-data-[slot=dropdown-menu-content]:p-0"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Item({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot4.Root : "div";
  return /* @__PURE__ */ jsx39(
    Comp,
    {
      "data-slot": "item",
      "data-variant": variant,
      "data-size": size,
      className: cn(itemVariants({ variant, size, className })),
      ...props
    }
  );
}
var itemMediaVariants = cva9(
  "gap-2 group-has-data-[slot=item-description]/item:translate-y-0.5 group-has-data-[slot=item-description]/item:self-start flex shrink-0 items-center justify-center [&_svg]:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        icon: "[&_svg:not([class*='size-'])]:size-4",
        image: "size-10 overflow-hidden rounded-sm group-data-[size=sm]/item:size-8 group-data-[size=xs]/item:size-6 [&_img]:size-full [&_img]:object-cover"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function ItemMedia({
  className,
  variant = "default",
  ...props
}) {
  return /* @__PURE__ */ jsx39(
    "div",
    {
      "data-slot": "item-media",
      "data-variant": variant,
      className: cn(itemMediaVariants({ variant, className })),
      ...props
    }
  );
}
function ItemContent({ className, ...props }) {
  return /* @__PURE__ */ jsx39(
    "div",
    {
      "data-slot": "item-content",
      className: cn(
        "gap-1 group-data-[size=xs]/item:gap-0 flex flex-1 flex-col [&+[data-slot=item-content]]:flex-none",
        className
      ),
      ...props
    }
  );
}
function ItemTitle({ className, ...props }) {
  return /* @__PURE__ */ jsx39(
    "div",
    {
      "data-slot": "item-title",
      className: cn(
        "gap-2 text-sm leading-snug font-medium underline-offset-4 line-clamp-1 flex w-fit items-center",
        className
      ),
      ...props
    }
  );
}
function ItemDescription({ className, ...props }) {
  return /* @__PURE__ */ jsx39(
    "p",
    {
      "data-slot": "item-description",
      className: cn(
        "text-muted-foreground text-left text-sm leading-normal group-data-[size=xs]/item:text-xs [&>a:hover]:text-primary line-clamp-2 font-normal [&>a]:underline [&>a]:underline-offset-4",
        className
      ),
      ...props
    }
  );
}
function ItemActions({ className, ...props }) {
  return /* @__PURE__ */ jsx39(
    "div",
    {
      "data-slot": "item-actions",
      className: cn("gap-2 flex items-center", className),
      ...props
    }
  );
}
function ItemHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx39(
    "div",
    {
      "data-slot": "item-header",
      className: cn(
        "gap-2 flex basis-full items-center justify-between",
        className
      ),
      ...props
    }
  );
}
function ItemFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx39(
    "div",
    {
      "data-slot": "item-footer",
      className: cn(
        "gap-2 flex basis-full items-center justify-between",
        className
      ),
      ...props
    }
  );
}

// components/ui/toggle-group.tsx
import * as React6 from "react";
import { ToggleGroup as ToggleGroupPrimitive } from "radix-ui";

// components/ui/toggle.tsx
import { cva as cva10 } from "class-variance-authority";
import { Toggle as TogglePrimitive } from "radix-ui";
import { jsx as jsx40 } from "react/jsx-runtime";
var toggleVariants = cva10(
  "hover:text-foreground aria-pressed:bg-muted focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive data-[state=on]:bg-muted gap-1 rounded-lg text-sm font-medium transition-all [&_svg:not([class*='size-'])]:size-4 group/toggle hover:bg-muted inline-flex items-center justify-center whitespace-nowrap outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border-input hover:bg-muted border bg-transparent"
      },
      size: {
        default: "h-8 min-w-8 px-2",
        sm: "h-7 min-w-7 rounded-[min(var(--radius-md),12px)] px-1.5 text-[0.8rem]",
        lg: "h-9 min-w-9 px-2.5"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Toggle({
  className,
  variant = "default",
  size = "default",
  ...props
}) {
  return /* @__PURE__ */ jsx40(
    TogglePrimitive.Root,
    {
      "data-slot": "toggle",
      className: cn(toggleVariants({ variant, size, className })),
      ...props
    }
  );
}

// components/ui/toggle-group.tsx
import { jsx as jsx41 } from "react/jsx-runtime";
var ToggleGroupContext = React6.createContext({
  size: "default",
  variant: "default",
  spacing: 0,
  orientation: "horizontal"
});
function ToggleGroup({
  className,
  variant,
  size,
  spacing = 0,
  orientation = "horizontal",
  children,
  ...props
}) {
  return /* @__PURE__ */ jsx41(
    ToggleGroupPrimitive.Root,
    {
      "data-slot": "toggle-group",
      "data-variant": variant,
      "data-size": size,
      "data-spacing": spacing,
      "data-orientation": orientation,
      style: { "--gap": spacing },
      className: cn(
        "rounded-lg data-[size=sm]:rounded-[min(var(--radius-md),10px)] group/toggle-group flex w-fit flex-row items-center gap-[--spacing(var(--gap))] data-vertical:flex-col data-vertical:items-stretch",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx41(
        ToggleGroupContext.Provider,
        {
          value: { variant, size, spacing, orientation },
          children
        }
      )
    }
  );
}
function ToggleGroupItem({
  className,
  children,
  variant = "default",
  size = "default",
  ...props
}) {
  const context = React6.useContext(ToggleGroupContext);
  return /* @__PURE__ */ jsx41(
    ToggleGroupPrimitive.Item,
    {
      "data-slot": "toggle-group-item",
      "data-variant": context.variant || variant,
      "data-size": context.size || size,
      "data-spacing": context.spacing,
      className: cn(
        "group-data-[spacing=0]/toggle-group:rounded-none group-data-[spacing=0]/toggle-group:px-2 group-data-horizontal/toggle-group:data-[spacing=0]:first:rounded-l-lg group-data-vertical/toggle-group:data-[spacing=0]:first:rounded-t-lg group-data-horizontal/toggle-group:data-[spacing=0]:last:rounded-r-lg group-data-vertical/toggle-group:data-[spacing=0]:last:rounded-b-lg shrink-0 focus:z-10 focus-visible:z-10 group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:border-l-0 group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:border-t-0 group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-l group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-t",
        toggleVariants({
          variant: context.variant || variant,
          size: context.size || size
        }),
        className
      ),
      ...props,
      children
    }
  );
}

// components/ui/avatar.tsx
import { Avatar as AvatarPrimitive } from "radix-ui";
import { jsx as jsx42 } from "react/jsx-runtime";
function Avatar({
  className,
  size = "default",
  ...props
}) {
  return /* @__PURE__ */ jsx42(
    AvatarPrimitive.Root,
    {
      "data-slot": "avatar",
      "data-size": size,
      className: cn(
        "size-8 rounded-full after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 after:border-border group/avatar relative flex shrink-0 select-none after:absolute after:inset-0 after:border after:mix-blend-darken dark:after:mix-blend-lighten",
        className
      ),
      ...props
    }
  );
}
function AvatarImage({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx42(
    AvatarPrimitive.Image,
    {
      "data-slot": "avatar-image",
      className: cn(
        "rounded-full aspect-square size-full object-cover",
        className
      ),
      ...props
    }
  );
}
function AvatarFallback({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx42(
    AvatarPrimitive.Fallback,
    {
      "data-slot": "avatar-fallback",
      className: cn(
        "bg-muted text-muted-foreground rounded-full flex size-full items-center justify-center text-sm group-data-[size=sm]/avatar:text-xs",
        className
      ),
      ...props
    }
  );
}
function AvatarBadge({ className, ...props }) {
  return /* @__PURE__ */ jsx42(
    "span",
    {
      "data-slot": "avatar-badge",
      className: cn(
        "bg-primary text-primary-foreground ring-background absolute right-0 bottom-0 z-10 inline-flex items-center justify-center rounded-full bg-blend-color ring-2 select-none",
        "group-data-[size=sm]/avatar:size-2 group-data-[size=sm]/avatar:[&>svg]:hidden",
        "group-data-[size=default]/avatar:size-2.5 group-data-[size=default]/avatar:[&>svg]:size-2",
        "group-data-[size=lg]/avatar:size-3 group-data-[size=lg]/avatar:[&>svg]:size-2",
        className
      ),
      ...props
    }
  );
}
function AvatarGroup({ className, ...props }) {
  return /* @__PURE__ */ jsx42(
    "div",
    {
      "data-slot": "avatar-group",
      className: cn(
        "*:data-[slot=avatar]:ring-background group/avatar-group flex -space-x-2 *:data-[slot=avatar]:ring-2",
        className
      ),
      ...props
    }
  );
}
function AvatarGroupCount({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx42(
    "div",
    {
      "data-slot": "avatar-group-count",
      className: cn("bg-muted text-muted-foreground size-8 rounded-full text-sm group-has-data-[size=lg]/avatar-group:size-10 group-has-data-[size=sm]/avatar-group:size-6 [&>svg]:size-4 group-has-data-[size=lg]/avatar-group:[&>svg]:size-5 group-has-data-[size=sm]/avatar-group:[&>svg]:size-3 ring-background relative flex shrink-0 items-center justify-center ring-2", className),
      ...props
    }
  );
}

// components/ui/menubar.tsx
import { Menubar as MenubarPrimitive } from "radix-ui";
import { IconCheck as IconCheck3, IconChevronRight as IconChevronRight4 } from "@tabler/icons-react";
import { jsx as jsx43, jsxs as jsxs18 } from "react/jsx-runtime";
function Menubar({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx43(
    MenubarPrimitive.Root,
    {
      "data-slot": "menubar",
      className: cn("bg-background h-8 gap-0.5 rounded-lg border p-[3px] flex items-center", className),
      ...props
    }
  );
}
function MenubarMenu({
  ...props
}) {
  return /* @__PURE__ */ jsx43(MenubarPrimitive.Menu, { "data-slot": "menubar-menu", ...props });
}
function MenubarGroup({
  ...props
}) {
  return /* @__PURE__ */ jsx43(MenubarPrimitive.Group, { "data-slot": "menubar-group", ...props });
}
function MenubarPortal({
  ...props
}) {
  return /* @__PURE__ */ jsx43(MenubarPrimitive.Portal, { "data-slot": "menubar-portal", ...props });
}
function MenubarRadioGroup({
  ...props
}) {
  return /* @__PURE__ */ jsx43(MenubarPrimitive.RadioGroup, { "data-slot": "menubar-radio-group", ...props });
}
function MenubarTrigger({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx43(
    MenubarPrimitive.Trigger,
    {
      "data-slot": "menubar-trigger",
      className: cn(
        "hover:bg-muted aria-expanded:bg-muted rounded-sm px-1.5 py-[2px] text-sm font-medium flex items-center outline-hidden select-none",
        className
      ),
      ...props
    }
  );
}
function MenubarContent({
  className,
  align = "start",
  alignOffset = -4,
  sideOffset = 8,
  ...props
}) {
  return /* @__PURE__ */ jsx43(MenubarPortal, { children: /* @__PURE__ */ jsx43(
    MenubarPrimitive.Content,
    {
      "data-slot": "menubar-content",
      align,
      alignOffset,
      sideOffset,
      className: cn("bg-popover text-popover-foreground data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ring-foreground/10 min-w-36 rounded-lg p-1 shadow-md ring-1 duration-100 z-50 origin-(--radix-menubar-content-transform-origin) overflow-hidden", className),
      ...props
    }
  ) });
}
function MenubarItem({
  className,
  inset,
  variant = "default",
  ...props
}) {
  return /* @__PURE__ */ jsx43(
    MenubarPrimitive.Item,
    {
      "data-slot": "menubar-item",
      "data-inset": inset,
      "data-variant": variant,
      className: cn(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:text-destructive! not-data-[variant=destructive]:focus:**:text-accent-foreground gap-1.5 rounded-md px-1.5 py-1 text-sm data-disabled:opacity-50 data-inset:pl-7 [&_svg:not([class*='size-'])]:size-4 group/menubar-item relative flex cursor-default items-center outline-hidden select-none data-disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      ),
      ...props
    }
  );
}
function MenubarCheckboxItem({
  className,
  children,
  checked,
  inset,
  ...props
}) {
  return /* @__PURE__ */ jsxs18(
    MenubarPrimitive.CheckboxItem,
    {
      "data-slot": "menubar-checkbox-item",
      "data-inset": inset,
      className: cn(
        "focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground gap-1.5 rounded-md py-1 pr-1.5 pl-7 text-sm data-inset:pl-7 relative flex cursor-default items-center outline-hidden select-none data-disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      ),
      checked,
      ...props,
      children: [
        /* @__PURE__ */ jsx43("span", { className: "left-1.5 size-4 [&_svg:not([class*='size-'])]:size-4 pointer-events-none absolute flex items-center justify-center", children: /* @__PURE__ */ jsx43(MenubarPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx43(
          IconCheck3,
          {}
        ) }) }),
        children
      ]
    }
  );
}
function MenubarRadioItem({
  className,
  children,
  inset,
  ...props
}) {
  return /* @__PURE__ */ jsxs18(
    MenubarPrimitive.RadioItem,
    {
      "data-slot": "menubar-radio-item",
      "data-inset": inset,
      className: cn(
        "focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground gap-1.5 rounded-md py-1 pr-1.5 pl-7 text-sm data-disabled:opacity-50 data-inset:pl-7 [&_svg:not([class*='size-'])]:size-4 relative flex cursor-default items-center outline-hidden select-none data-disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx43("span", { className: "left-1.5 size-4 [&_svg:not([class*='size-'])]:size-4 pointer-events-none absolute flex items-center justify-center", children: /* @__PURE__ */ jsx43(MenubarPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx43(
          IconCheck3,
          {}
        ) }) }),
        children
      ]
    }
  );
}
function MenubarLabel({
  className,
  inset,
  ...props
}) {
  return /* @__PURE__ */ jsx43(
    MenubarPrimitive.Label,
    {
      "data-slot": "menubar-label",
      "data-inset": inset,
      className: cn("px-1.5 py-1 text-sm font-medium data-inset:pl-7", className),
      ...props
    }
  );
}
function MenubarSeparator({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx43(
    MenubarPrimitive.Separator,
    {
      "data-slot": "menubar-separator",
      className: cn("bg-border -mx-1 my-1 h-px", className),
      ...props
    }
  );
}
function MenubarShortcut({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx43(
    "span",
    {
      "data-slot": "menubar-shortcut",
      className: cn("text-muted-foreground group-focus/menubar-item:text-accent-foreground text-xs tracking-widest ml-auto", className),
      ...props
    }
  );
}
function MenubarSub({
  ...props
}) {
  return /* @__PURE__ */ jsx43(MenubarPrimitive.Sub, { "data-slot": "menubar-sub", ...props });
}
function MenubarSubTrigger({
  className,
  inset,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs18(
    MenubarPrimitive.SubTrigger,
    {
      "data-slot": "menubar-sub-trigger",
      "data-inset": inset,
      className: cn(
        "focus:bg-accent focus:text-accent-foreground data-open:bg-accent data-open:text-accent-foreground gap-1.5 rounded-md px-1.5 py-1 text-sm data-inset:pl-7 [&_svg:not([class*='size-'])]:size-4 flex cursor-default items-center outline-none select-none",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsx43(IconChevronRight4, { className: "ml-auto size-4" })
      ]
    }
  );
}
function MenubarSubContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx43(
    MenubarPrimitive.SubContent,
    {
      "data-slot": "menubar-sub-content",
      className: cn("bg-popover text-popover-foreground data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ring-foreground/10 min-w-32 rounded-lg p-1 shadow-lg ring-1 duration-100 z-50 origin-(--radix-menubar-content-transform-origin) overflow-hidden", className),
      ...props
    }
  );
}

// components/ui/kbd.tsx
import { jsx as jsx44 } from "react/jsx-runtime";
function Kbd({ className, ...props }) {
  return /* @__PURE__ */ jsx44(
    "kbd",
    {
      "data-slot": "kbd",
      className: cn(
        "bg-muted text-muted-foreground in-data-[slot=tooltip-content]:bg-background/20 in-data-[slot=tooltip-content]:text-background dark:in-data-[slot=tooltip-content]:bg-background/10 h-5 w-fit min-w-5 gap-1 rounded-sm px-1 font-sans text-xs font-medium [&_svg:not([class*='size-'])]:size-3 pointer-events-none inline-flex items-center justify-center select-none",
        className
      ),
      ...props
    }
  );
}
function KbdGroup({ className, ...props }) {
  return /* @__PURE__ */ jsx44(
    "kbd",
    {
      "data-slot": "kbd-group",
      className: cn("gap-1 inline-flex items-center", className),
      ...props
    }
  );
}

// components/ui/badge.tsx
import { cva as cva11 } from "class-variance-authority";
import { Slot as Slot5 } from "radix-ui";
import { jsx as jsx45 } from "react/jsx-runtime";
var badgeVariants = cva11(
  "h-5 gap-1 rounded-4xl border border-transparent px-2 py-0.5 text-xs font-medium transition-all has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&>svg]:size-3! inline-flex items-center justify-center w-fit whitespace-nowrap shrink-0 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive overflow-hidden group/badge",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
        secondary: "bg-secondary text-secondary-foreground [a]:hover:bg-secondary/80",
        destructive: "bg-destructive/10 [a]:hover:bg-destructive/20 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 text-destructive dark:bg-destructive/20",
        outline: "border-border text-foreground [a]:hover:bg-muted [a]:hover:text-muted-foreground",
        ghost: "hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted/50",
        link: "text-primary underline-offset-4 hover:underline"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({
  className,
  variant = "default",
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot5.Root : "span";
  return /* @__PURE__ */ jsx45(
    Comp,
    {
      "data-slot": "badge",
      "data-variant": variant,
      className: cn(badgeVariants({ variant }), className),
      ...props
    }
  );
}

// components/ui/sidebar.tsx
import * as React8 from "react";
import { cva as cva12 } from "class-variance-authority";
import { Slot as Slot6 } from "radix-ui";

// hooks/use-mobile.ts
import * as React7 from "react";
var MOBILE_BREAKPOINT = 768;
function useIsMobile() {
  const [isMobile, setIsMobile] = React7.useState(void 0);
  React7.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);
  return !!isMobile;
}

// components/ui/skeleton.tsx
import { jsx as jsx46 } from "react/jsx-runtime";
function Skeleton({ className, ...props }) {
  return /* @__PURE__ */ jsx46(
    "div",
    {
      "data-slot": "skeleton",
      className: cn("bg-muted rounded-md animate-pulse", className),
      ...props
    }
  );
}

// components/ui/sidebar.tsx
import { IconLayoutSidebar } from "@tabler/icons-react";
import { jsx as jsx47, jsxs as jsxs19 } from "react/jsx-runtime";
var SIDEBAR_COOKIE_NAME = "sidebar_state";
var SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
var SIDEBAR_WIDTH = "16rem";
var SIDEBAR_WIDTH_MOBILE = "18rem";
var SIDEBAR_WIDTH_ICON = "3rem";
var SIDEBAR_KEYBOARD_SHORTCUT = "b";
var SidebarContext = React8.createContext(null);
function useSidebar() {
  const context = React8.useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }
  return context;
}
function SidebarProvider({
  defaultOpen = true,
  open: openProp,
  onOpenChange: setOpenProp,
  className,
  style,
  children,
  ...props
}) {
  const isMobile = useIsMobile();
  const [openMobile, setOpenMobile] = React8.useState(false);
  const [_open, _setOpen] = React8.useState(defaultOpen);
  const open = openProp ?? _open;
  const setOpen = React8.useCallback(
    (value) => {
      const openState = typeof value === "function" ? value(open) : value;
      if (setOpenProp) {
        setOpenProp(openState);
      } else {
        _setOpen(openState);
      }
      document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
    },
    [setOpenProp, open]
  );
  const toggleSidebar = React8.useCallback(() => {
    return isMobile ? setOpenMobile((open2) => !open2) : setOpen((open2) => !open2);
  }, [isMobile, setOpen, setOpenMobile]);
  React8.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        toggleSidebar();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggleSidebar]);
  const state = open ? "expanded" : "collapsed";
  const contextValue = React8.useMemo(
    () => ({
      state,
      open,
      setOpen,
      isMobile,
      openMobile,
      setOpenMobile,
      toggleSidebar
    }),
    [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]
  );
  return /* @__PURE__ */ jsx47(SidebarContext.Provider, { value: contextValue, children: /* @__PURE__ */ jsx47(
    "div",
    {
      "data-slot": "sidebar-wrapper",
      style: {
        "--sidebar-width": SIDEBAR_WIDTH,
        "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
        ...style
      },
      className: cn(
        "group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full",
        className
      ),
      ...props,
      children
    }
  ) });
}
function Sidebar({
  side = "left",
  variant = "sidebar",
  collapsible = "offcanvas",
  className,
  children,
  dir,
  ...props
}) {
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar();
  if (collapsible === "none") {
    return /* @__PURE__ */ jsx47(
      "div",
      {
        "data-slot": "sidebar",
        className: cn(
          "bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col",
          className
        ),
        ...props,
        children
      }
    );
  }
  if (isMobile) {
    return /* @__PURE__ */ jsx47(Sheet, { open: openMobile, onOpenChange: setOpenMobile, ...props, children: /* @__PURE__ */ jsxs19(
      SheetContent,
      {
        dir,
        "data-sidebar": "sidebar",
        "data-slot": "sidebar",
        "data-mobile": "true",
        className: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden",
        style: {
          "--sidebar-width": SIDEBAR_WIDTH_MOBILE
        },
        side,
        children: [
          /* @__PURE__ */ jsxs19(SheetHeader, { className: "sr-only", children: [
            /* @__PURE__ */ jsx47(SheetTitle, { children: "Sidebar" }),
            /* @__PURE__ */ jsx47(SheetDescription, { children: "Displays the mobile sidebar." })
          ] }),
          /* @__PURE__ */ jsx47("div", { className: "flex h-full w-full flex-col", children })
        ]
      }
    ) });
  }
  return /* @__PURE__ */ jsxs19(
    "div",
    {
      className: "group peer text-sidebar-foreground hidden md:block",
      "data-state": state,
      "data-collapsible": state === "collapsed" ? collapsible : "",
      "data-variant": variant,
      "data-side": side,
      "data-slot": "sidebar",
      children: [
        /* @__PURE__ */ jsx47(
          "div",
          {
            "data-slot": "sidebar-gap",
            className: cn(
              "transition-[width] duration-200 ease-linear relative w-(--sidebar-width) bg-transparent",
              "group-data-[collapsible=offcanvas]:w-0",
              "group-data-[side=right]:rotate-180",
              variant === "floating" || variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
            )
          }
        ),
        /* @__PURE__ */ jsx47(
          "div",
          {
            "data-slot": "sidebar-container",
            "data-side": side,
            className: cn(
              "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear data-[side=left]:left-0 data-[side=left]:group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)] data-[side=right]:right-0 data-[side=right]:group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)] md:flex",
              // Adjust the padding for floating and inset variants.
              variant === "floating" || variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
              className
            ),
            ...props,
            children: /* @__PURE__ */ jsx47(
              "div",
              {
                "data-sidebar": "sidebar",
                "data-slot": "sidebar-inner",
                className: "bg-sidebar group-data-[variant=floating]:ring-sidebar-border group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:shadow-sm group-data-[variant=floating]:ring-1 flex size-full flex-col",
                children
              }
            )
          }
        )
      ]
    }
  );
}
function SidebarTrigger({
  className,
  onClick,
  ...props
}) {
  const { toggleSidebar } = useSidebar();
  return /* @__PURE__ */ jsxs19(
    Button,
    {
      "data-sidebar": "trigger",
      "data-slot": "sidebar-trigger",
      variant: "ghost",
      size: "icon-sm",
      className: cn(className),
      onClick: (event) => {
        onClick?.(event);
        toggleSidebar();
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx47(IconLayoutSidebar, {}),
        /* @__PURE__ */ jsx47("span", { className: "sr-only", children: "Toggle Sidebar" })
      ]
    }
  );
}
function SidebarRail({ className, ...props }) {
  const { toggleSidebar } = useSidebar();
  return /* @__PURE__ */ jsx47(
    "button",
    {
      "data-sidebar": "rail",
      "data-slot": "sidebar-rail",
      "aria-label": "Toggle Sidebar",
      tabIndex: -1,
      onClick: toggleSidebar,
      title: "Toggle Sidebar",
      className: cn(
        "hover:after:bg-sidebar-border absolute inset-y-0 z-20 hidden w-4 transition-all ease-linear group-data-[side=left]:-right-4 group-data-[side=right]:left-0 after:absolute after:inset-y-0 after:start-1/2 after:w-[2px] sm:flex ltr:-translate-x-1/2 rtl:-translate-x-1/2",
        "in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize",
        "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
        "hover:group-data-[collapsible=offcanvas]:bg-sidebar group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full",
        "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
        "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
        className
      ),
      ...props
    }
  );
}
function SidebarInset({ className, ...props }) {
  return /* @__PURE__ */ jsx47(
    "main",
    {
      "data-slot": "sidebar-inset",
      className: cn(
        "bg-background md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2 relative flex w-full flex-1 flex-col",
        className
      ),
      ...props
    }
  );
}
function SidebarInput({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx47(
    Input,
    {
      "data-slot": "sidebar-input",
      "data-sidebar": "input",
      className: cn("bg-background h-8 w-full shadow-none", className),
      ...props
    }
  );
}
function SidebarHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx47(
    "div",
    {
      "data-slot": "sidebar-header",
      "data-sidebar": "header",
      className: cn("gap-2 p-2 flex flex-col", className),
      ...props
    }
  );
}
function SidebarFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx47(
    "div",
    {
      "data-slot": "sidebar-footer",
      "data-sidebar": "footer",
      className: cn("gap-2 p-2 flex flex-col", className),
      ...props
    }
  );
}
function SidebarSeparator({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx47(
    Separator,
    {
      "data-slot": "sidebar-separator",
      "data-sidebar": "separator",
      className: cn("bg-sidebar-border mx-2 w-auto", className),
      ...props
    }
  );
}
function SidebarContent({ className, ...props }) {
  return /* @__PURE__ */ jsx47(
    "div",
    {
      "data-slot": "sidebar-content",
      "data-sidebar": "content",
      className: cn(
        "no-scrollbar gap-0 flex min-h-0 flex-1 flex-col overflow-auto group-data-[collapsible=icon]:overflow-hidden",
        className
      ),
      ...props
    }
  );
}
function SidebarGroup({ className, ...props }) {
  return /* @__PURE__ */ jsx47(
    "div",
    {
      "data-slot": "sidebar-group",
      "data-sidebar": "group",
      className: cn(
        "p-2 relative flex w-full min-w-0 flex-col",
        className
      ),
      ...props
    }
  );
}
function SidebarGroupLabel({
  className,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot6.Root : "div";
  return /* @__PURE__ */ jsx47(
    Comp,
    {
      "data-slot": "sidebar-group-label",
      "data-sidebar": "group-label",
      className: cn(
        "text-sidebar-foreground/70 ring-sidebar-ring h-8 rounded-md px-2 text-xs font-medium transition-[margin,opacity] duration-200 ease-linear group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0 focus-visible:ring-2 [&>svg]:size-4 flex shrink-0 items-center outline-hidden [&>svg]:shrink-0",
        className
      ),
      ...props
    }
  );
}
function SidebarGroupAction({
  className,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot6.Root : "button";
  return /* @__PURE__ */ jsx47(
    Comp,
    {
      "data-slot": "sidebar-group-action",
      "data-sidebar": "group-action",
      className: cn(
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground absolute top-3.5 right-3 w-5 rounded-md p-0 focus-visible:ring-2 [&>svg]:size-4 flex aspect-square items-center justify-center outline-hidden transition-transform group-data-[collapsible=icon]:hidden after:absolute after:-inset-2 md:after:hidden [&>svg]:shrink-0",
        className
      ),
      ...props
    }
  );
}
function SidebarGroupContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx47(
    "div",
    {
      "data-slot": "sidebar-group-content",
      "data-sidebar": "group-content",
      className: cn("text-sm w-full", className),
      ...props
    }
  );
}
function SidebarMenu({ className, ...props }) {
  return /* @__PURE__ */ jsx47(
    "ul",
    {
      "data-slot": "sidebar-menu",
      "data-sidebar": "menu",
      className: cn("gap-0 flex w-full min-w-0 flex-col", className),
      ...props
    }
  );
}
function SidebarMenuItem({ className, ...props }) {
  return /* @__PURE__ */ jsx47(
    "li",
    {
      "data-slot": "sidebar-menu-item",
      "data-sidebar": "menu-item",
      className: cn("group/menu-item relative", className),
      ...props
    }
  );
}
var sidebarMenuButtonVariants = cva12(
  "ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground gap-2 rounded-md p-2 text-left text-sm transition-[width,height,padding] group-has-data-[sidebar=menu-action]/menu-item:pr-8 group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! focus-visible:ring-2 data-active:font-medium peer/menu-button flex w-full items-center overflow-hidden outline-hidden group/menu-button disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline: "bg-background hover:bg-sidebar-accent hover:text-sidebar-accent-foreground shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]"
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:p-0!"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function SidebarMenuButton({
  asChild = false,
  isActive = false,
  variant = "default",
  size = "default",
  tooltip,
  className,
  ...props
}) {
  const Comp = asChild ? Slot6.Root : "button";
  const { isMobile, state } = useSidebar();
  const button = /* @__PURE__ */ jsx47(
    Comp,
    {
      "data-slot": "sidebar-menu-button",
      "data-sidebar": "menu-button",
      "data-size": size,
      "data-active": isActive,
      className: cn(sidebarMenuButtonVariants({ variant, size }), className),
      ...props
    }
  );
  if (!tooltip) {
    return button;
  }
  if (typeof tooltip === "string") {
    tooltip = {
      children: tooltip
    };
  }
  return /* @__PURE__ */ jsxs19(Tooltip2, { children: [
    /* @__PURE__ */ jsx47(TooltipTrigger, { asChild: true, children: button }),
    /* @__PURE__ */ jsx47(
      TooltipContent,
      {
        side: "right",
        align: "center",
        hidden: state !== "collapsed" || isMobile,
        ...tooltip
      }
    )
  ] });
}
function SidebarMenuAction({
  className,
  asChild = false,
  showOnHover = false,
  ...props
}) {
  const Comp = asChild ? Slot6.Root : "button";
  return /* @__PURE__ */ jsx47(
    Comp,
    {
      "data-slot": "sidebar-menu-action",
      "data-sidebar": "menu-action",
      className: cn(
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground absolute top-1.5 right-1 aspect-square w-5 rounded-md p-0 peer-data-[size=default]/menu-button:top-1.5 peer-data-[size=lg]/menu-button:top-2.5 peer-data-[size=sm]/menu-button:top-1 focus-visible:ring-2 [&>svg]:size-4 flex items-center justify-center outline-hidden transition-transform group-data-[collapsible=icon]:hidden after:absolute after:-inset-2 md:after:hidden [&>svg]:shrink-0",
        showOnHover && "peer-data-active/menu-button:text-sidebar-accent-foreground group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 aria-expanded:opacity-100 md:opacity-0",
        className
      ),
      ...props
    }
  );
}
function SidebarMenuBadge({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx47(
    "div",
    {
      "data-slot": "sidebar-menu-badge",
      "data-sidebar": "menu-badge",
      className: cn(
        "text-sidebar-foreground peer-hover/menu-button:text-sidebar-accent-foreground peer-data-active/menu-button:text-sidebar-accent-foreground pointer-events-none absolute right-1 h-5 min-w-5 rounded-md px-1 text-xs font-medium peer-data-[size=default]/menu-button:top-1.5 peer-data-[size=lg]/menu-button:top-2.5 peer-data-[size=sm]/menu-button:top-1 flex items-center justify-center tabular-nums select-none group-data-[collapsible=icon]:hidden",
        className
      ),
      ...props
    }
  );
}
function SidebarMenuSkeleton({
  className,
  showIcon = false,
  ...props
}) {
  const [width] = React8.useState(() => {
    return `${Math.floor(Math.random() * 40) + 50}%`;
  });
  return /* @__PURE__ */ jsxs19(
    "div",
    {
      "data-slot": "sidebar-menu-skeleton",
      "data-sidebar": "menu-skeleton",
      className: cn("h-8 gap-2 rounded-md px-2 flex items-center", className),
      ...props,
      children: [
        showIcon && /* @__PURE__ */ jsx47(
          Skeleton,
          {
            className: "size-4 rounded-md",
            "data-sidebar": "menu-skeleton-icon"
          }
        ),
        /* @__PURE__ */ jsx47(
          Skeleton,
          {
            className: "h-4 max-w-(--skeleton-width) flex-1",
            "data-sidebar": "menu-skeleton-text",
            style: {
              "--skeleton-width": width
            }
          }
        )
      ]
    }
  );
}
function SidebarMenuSub({ className, ...props }) {
  return /* @__PURE__ */ jsx47(
    "ul",
    {
      "data-slot": "sidebar-menu-sub",
      "data-sidebar": "menu-sub",
      className: cn("border-sidebar-border mx-3.5 translate-x-px gap-1 border-l px-2.5 py-0.5 group-data-[collapsible=icon]:hidden flex min-w-0 flex-col", className),
      ...props
    }
  );
}
function SidebarMenuSubItem({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx47(
    "li",
    {
      "data-slot": "sidebar-menu-sub-item",
      "data-sidebar": "menu-sub-item",
      className: cn("group/menu-sub-item relative", className),
      ...props
    }
  );
}
function SidebarMenuSubButton({
  asChild = false,
  size = "md",
  isActive = false,
  className,
  ...props
}) {
  const Comp = asChild ? Slot6.Root : "a";
  return /* @__PURE__ */ jsx47(
    Comp,
    {
      "data-slot": "sidebar-menu-sub-button",
      "data-sidebar": "menu-sub-button",
      "data-size": size,
      "data-active": isActive,
      className: cn(
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground [&>svg]:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:text-sidebar-accent-foreground h-7 gap-2 rounded-md px-2 focus-visible:ring-2 data-[size=md]:text-sm data-[size=sm]:text-xs [&>svg]:size-4 flex min-w-0 -translate-x-px items-center overflow-hidden outline-hidden group-data-[collapsible=icon]:hidden disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:shrink-0",
        className
      ),
      ...props
    }
  );
}

// components/ui/table.tsx
import { jsx as jsx48 } from "react/jsx-runtime";
function Table({ className, ...props }) {
  return /* @__PURE__ */ jsx48("div", { "data-slot": "table-container", className: "relative w-full overflow-x-auto", children: /* @__PURE__ */ jsx48(
    "table",
    {
      "data-slot": "table",
      className: cn("w-full caption-bottom text-sm", className),
      ...props
    }
  ) });
}
function TableHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx48(
    "thead",
    {
      "data-slot": "table-header",
      className: cn("[&_tr]:border-b", className),
      ...props
    }
  );
}
function TableBody({ className, ...props }) {
  return /* @__PURE__ */ jsx48(
    "tbody",
    {
      "data-slot": "table-body",
      className: cn("[&_tr:last-child]:border-0", className),
      ...props
    }
  );
}
function TableFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx48(
    "tfoot",
    {
      "data-slot": "table-footer",
      className: cn("bg-muted/50 border-t font-medium [&>tr]:last:border-b-0", className),
      ...props
    }
  );
}
function TableRow({ className, ...props }) {
  return /* @__PURE__ */ jsx48(
    "tr",
    {
      "data-slot": "table-row",
      className: cn("hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors", className),
      ...props
    }
  );
}
function TableHead({ className, ...props }) {
  return /* @__PURE__ */ jsx48(
    "th",
    {
      "data-slot": "table-head",
      className: cn("text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0", className),
      ...props
    }
  );
}
function TableCell({ className, ...props }) {
  return /* @__PURE__ */ jsx48(
    "td",
    {
      "data-slot": "table-cell",
      className: cn("p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0", className),
      ...props
    }
  );
}
function TableCaption({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx48(
    "caption",
    {
      "data-slot": "table-caption",
      className: cn("text-muted-foreground mt-4 text-sm", className),
      ...props
    }
  );
}

// components/ui/example.tsx
import { jsx as jsx49, jsxs as jsxs20 } from "react/jsx-runtime";
function ExampleWrapper({ className, ...props }) {
  return /* @__PURE__ */ jsx49("div", { className: "bg-background w-full", children: /* @__PURE__ */ jsx49(
    "div",
    {
      "data-slot": "example-wrapper",
      className: cn(
        "mx-auto grid min-h-screen w-full max-w-5xl min-w-0 content-center items-start gap-8 p-4 pt-2 sm:gap-12 sm:p-6 md:grid-cols-2 md:gap-8 lg:p-12 2xl:max-w-6xl",
        className
      ),
      ...props
    }
  ) });
}
function Example({
  title,
  children,
  className,
  containerClassName,
  ...props
}) {
  return /* @__PURE__ */ jsxs20(
    "div",
    {
      "data-slot": "example",
      className: cn(
        "mx-auto flex w-full max-w-lg min-w-0 flex-col gap-1 self-stretch lg:max-w-none",
        containerClassName
      ),
      ...props,
      children: [
        title && /* @__PURE__ */ jsx49("div", { className: "text-muted-foreground px-1.5 py-2 text-xs font-medium", children: title }),
        /* @__PURE__ */ jsx49(
          "div",
          {
            "data-slot": "example-content",
            className: cn(
              "bg-background text-foreground flex min-w-0 flex-1 flex-col items-start gap-6 border border-dashed p-4 sm:p-6 *:[div:not([class*='w-'])]:w-full",
              className
            ),
            children
          }
        )
      ]
    }
  );
}

// components/ui/checkbox.tsx
import { Checkbox as CheckboxPrimitive } from "radix-ui";
import { IconCheck as IconCheck4 } from "@tabler/icons-react";
import { jsx as jsx50 } from "react/jsx-runtime";
function Checkbox({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx50(
    CheckboxPrimitive.Root,
    {
      "data-slot": "checkbox",
      className: cn(
        "border-input dark:bg-input/30 data-checked:bg-primary data-checked:text-primary-foreground dark:data-checked:bg-primary data-checked:border-primary aria-invalid:aria-checked:border-primary aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 flex size-4 items-center justify-center rounded-[4px] border transition-colors group-has-disabled/field:opacity-50 focus-visible:ring-3 aria-invalid:ring-3 peer relative shrink-0 outline-none after:absolute after:-inset-x-3 after:-inset-y-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx50(
        CheckboxPrimitive.Indicator,
        {
          "data-slot": "checkbox-indicator",
          className: "[&>svg]:size-3.5 grid place-content-center text-current transition-none",
          children: /* @__PURE__ */ jsx50(
            IconCheck4,
            {}
          )
        }
      )
    }
  );
}

// components/ui/spinner.tsx
import { IconLoader as IconLoader2 } from "@tabler/icons-react";
import { jsx as jsx51 } from "react/jsx-runtime";
function Spinner({ className, ...props }) {
  return /* @__PURE__ */ jsx51(IconLoader2, { role: "status", "aria-label": "Loading", className: cn("size-4 animate-spin", className), ...props });
}

// components/ui/collapsible.tsx
import { Collapsible as CollapsiblePrimitive } from "radix-ui";
import { jsx as jsx52 } from "react/jsx-runtime";
function Collapsible({
  ...props
}) {
  return /* @__PURE__ */ jsx52(CollapsiblePrimitive.Root, { "data-slot": "collapsible", ...props });
}
function CollapsibleTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsx52(
    CollapsiblePrimitive.CollapsibleTrigger,
    {
      "data-slot": "collapsible-trigger",
      ...props
    }
  );
}
function CollapsibleContent({
  ...props
}) {
  return /* @__PURE__ */ jsx52(
    CollapsiblePrimitive.CollapsibleContent,
    {
      "data-slot": "collapsible-content",
      ...props
    }
  );
}

// components/ui/dropdown-menu.tsx
import { DropdownMenu as DropdownMenuPrimitive } from "radix-ui";
import { IconCheck as IconCheck5, IconChevronRight as IconChevronRight5 } from "@tabler/icons-react";
import { jsx as jsx53, jsxs as jsxs21 } from "react/jsx-runtime";
function DropdownMenu({
  ...props
}) {
  return /* @__PURE__ */ jsx53(DropdownMenuPrimitive.Root, { "data-slot": "dropdown-menu", ...props });
}
function DropdownMenuPortal({
  ...props
}) {
  return /* @__PURE__ */ jsx53(DropdownMenuPrimitive.Portal, { "data-slot": "dropdown-menu-portal", ...props });
}
function DropdownMenuTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsx53(
    DropdownMenuPrimitive.Trigger,
    {
      "data-slot": "dropdown-menu-trigger",
      ...props
    }
  );
}
function DropdownMenuContent({
  className,
  align = "start",
  sideOffset = 4,
  ...props
}) {
  return /* @__PURE__ */ jsx53(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ jsx53(
    DropdownMenuPrimitive.Content,
    {
      "data-slot": "dropdown-menu-content",
      sideOffset,
      align,
      className: cn("data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ring-foreground/10 bg-popover text-popover-foreground min-w-32 rounded-lg p-1 shadow-md ring-1 duration-100 z-50 max-h-(--radix-dropdown-menu-content-available-height) w-(--radix-dropdown-menu-trigger-width) origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto data-[state=closed]:overflow-hidden", className),
      ...props
    }
  ) });
}
function DropdownMenuGroup({
  ...props
}) {
  return /* @__PURE__ */ jsx53(DropdownMenuPrimitive.Group, { "data-slot": "dropdown-menu-group", ...props });
}
function DropdownMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}) {
  return /* @__PURE__ */ jsx53(
    DropdownMenuPrimitive.Item,
    {
      "data-slot": "dropdown-menu-item",
      "data-inset": inset,
      "data-variant": variant,
      className: cn(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:text-destructive not-data-[variant=destructive]:focus:**:text-accent-foreground gap-1.5 rounded-md px-1.5 py-1 text-sm data-inset:pl-7 [&_svg:not([class*='size-'])]:size-4 group/dropdown-menu-item relative flex cursor-default items-center outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      ),
      ...props
    }
  );
}
function DropdownMenuCheckboxItem({
  className,
  children,
  checked,
  inset,
  ...props
}) {
  return /* @__PURE__ */ jsxs21(
    DropdownMenuPrimitive.CheckboxItem,
    {
      "data-slot": "dropdown-menu-checkbox-item",
      "data-inset": inset,
      className: cn(
        "focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground gap-1.5 rounded-md py-1 pr-8 pl-1.5 text-sm data-inset:pl-7 [&_svg:not([class*='size-'])]:size-4 relative flex cursor-default items-center outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      ),
      checked,
      ...props,
      children: [
        /* @__PURE__ */ jsx53(
          "span",
          {
            className: "absolute right-2 flex items-center justify-center pointer-events-none",
            "data-slot": "dropdown-menu-checkbox-item-indicator",
            children: /* @__PURE__ */ jsx53(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx53(
              IconCheck5,
              {}
            ) })
          }
        ),
        children
      ]
    }
  );
}
function DropdownMenuRadioGroup({
  ...props
}) {
  return /* @__PURE__ */ jsx53(
    DropdownMenuPrimitive.RadioGroup,
    {
      "data-slot": "dropdown-menu-radio-group",
      ...props
    }
  );
}
function DropdownMenuRadioItem({
  className,
  children,
  inset,
  ...props
}) {
  return /* @__PURE__ */ jsxs21(
    DropdownMenuPrimitive.RadioItem,
    {
      "data-slot": "dropdown-menu-radio-item",
      "data-inset": inset,
      className: cn(
        "focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground gap-1.5 rounded-md py-1 pr-8 pl-1.5 text-sm data-inset:pl-7 [&_svg:not([class*='size-'])]:size-4 relative flex cursor-default items-center outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx53(
          "span",
          {
            className: "absolute right-2 flex items-center justify-center pointer-events-none",
            "data-slot": "dropdown-menu-radio-item-indicator",
            children: /* @__PURE__ */ jsx53(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx53(
              IconCheck5,
              {}
            ) })
          }
        ),
        children
      ]
    }
  );
}
function DropdownMenuLabel({
  className,
  inset,
  ...props
}) {
  return /* @__PURE__ */ jsx53(
    DropdownMenuPrimitive.Label,
    {
      "data-slot": "dropdown-menu-label",
      "data-inset": inset,
      className: cn("text-muted-foreground px-1.5 py-1 text-xs font-medium data-inset:pl-7", className),
      ...props
    }
  );
}
function DropdownMenuSeparator({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx53(
    DropdownMenuPrimitive.Separator,
    {
      "data-slot": "dropdown-menu-separator",
      className: cn("bg-border -mx-1 my-1 h-px", className),
      ...props
    }
  );
}
function DropdownMenuShortcut({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx53(
    "span",
    {
      "data-slot": "dropdown-menu-shortcut",
      className: cn("text-muted-foreground group-focus/dropdown-menu-item:text-accent-foreground ml-auto text-xs tracking-widest", className),
      ...props
    }
  );
}
function DropdownMenuSub({
  ...props
}) {
  return /* @__PURE__ */ jsx53(DropdownMenuPrimitive.Sub, { "data-slot": "dropdown-menu-sub", ...props });
}
function DropdownMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs21(
    DropdownMenuPrimitive.SubTrigger,
    {
      "data-slot": "dropdown-menu-sub-trigger",
      "data-inset": inset,
      className: cn(
        "focus:bg-accent focus:text-accent-foreground data-open:bg-accent data-open:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground gap-1.5 rounded-md px-1.5 py-1 text-sm data-inset:pl-7 [&_svg:not([class*='size-'])]:size-4 flex cursor-default items-center outline-hidden select-none [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsx53(IconChevronRight5, { className: "ml-auto" })
      ]
    }
  );
}
function DropdownMenuSubContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx53(
    DropdownMenuPrimitive.SubContent,
    {
      "data-slot": "dropdown-menu-sub-content",
      className: cn("data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ring-foreground/10 bg-popover text-popover-foreground min-w-[96px] rounded-md p-1 shadow-lg ring-1 duration-100 z-50 origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden", className),
      ...props
    }
  );
}

// components/ui/select.tsx
import { Select as SelectPrimitive } from "radix-ui";
import { IconSelector as IconSelector2, IconCheck as IconCheck6, IconChevronUp as IconChevronUp2, IconChevronDown as IconChevronDown5 } from "@tabler/icons-react";
import { jsx as jsx54, jsxs as jsxs22 } from "react/jsx-runtime";
function Select({
  ...props
}) {
  return /* @__PURE__ */ jsx54(SelectPrimitive.Root, { "data-slot": "select", ...props });
}
function SelectGroup({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx54(
    SelectPrimitive.Group,
    {
      "data-slot": "select-group",
      className: cn("scroll-my-1 p-1", className),
      ...props
    }
  );
}
function SelectValue({
  ...props
}) {
  return /* @__PURE__ */ jsx54(SelectPrimitive.Value, { "data-slot": "select-value", ...props });
}
function SelectTrigger({
  className,
  size = "default",
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs22(
    SelectPrimitive.Trigger,
    {
      "data-slot": "select-trigger",
      "data-size": size,
      className: cn(
        "border-input data-placeholder:text-muted-foreground dark:bg-input/30 dark:hover:bg-input/50 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 gap-1.5 rounded-lg border bg-transparent py-2 pr-2 pl-2.5 text-sm transition-colors select-none focus-visible:ring-3 aria-invalid:ring-3 data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] *:data-[slot=select-value]:gap-1.5 [&_svg:not([class*='size-'])]:size-4 flex w-fit items-center justify-between whitespace-nowrap outline-none disabled:cursor-not-allowed disabled:opacity-50 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsx54(SelectPrimitive.Icon, { asChild: true, children: /* @__PURE__ */ jsx54(IconSelector2, { className: "text-muted-foreground size-4 pointer-events-none" }) })
      ]
    }
  );
}
function SelectContent({
  className,
  children,
  position = "item-aligned",
  align = "center",
  ...props
}) {
  return /* @__PURE__ */ jsx54(SelectPrimitive.Portal, { children: /* @__PURE__ */ jsxs22(
    SelectPrimitive.Content,
    {
      "data-slot": "select-content",
      "data-align-trigger": position === "item-aligned",
      className: cn("bg-popover text-popover-foreground data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ring-foreground/10 min-w-36 rounded-lg shadow-md ring-1 duration-100 relative z-50 max-h-(--radix-select-content-available-height) origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto data-[align-trigger=true]:animate-none", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
      position,
      align,
      ...props,
      children: [
        /* @__PURE__ */ jsx54(SelectScrollUpButton, {}),
        /* @__PURE__ */ jsx54(
          SelectPrimitive.Viewport,
          {
            "data-position": position,
            className: cn(
              "data-[position=popper]:h-(--radix-select-trigger-height) data-[position=popper]:w-full data-[position=popper]:min-w-(--radix-select-trigger-width)",
              position === "popper" && ""
            ),
            children
          }
        ),
        /* @__PURE__ */ jsx54(SelectScrollDownButton, {})
      ]
    }
  ) });
}
function SelectLabel({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx54(
    SelectPrimitive.Label,
    {
      "data-slot": "select-label",
      className: cn("text-muted-foreground px-1.5 py-1 text-xs", className),
      ...props
    }
  );
}
function SelectItem({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs22(
    SelectPrimitive.Item,
    {
      "data-slot": "select-item",
      className: cn(
        "focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground gap-1.5 rounded-md py-1 pr-8 pl-1.5 text-sm [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2 relative flex w-full cursor-default items-center outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx54("span", { className: "pointer-events-none absolute right-2 flex size-4 items-center justify-center", children: /* @__PURE__ */ jsx54(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx54(IconCheck6, { className: "pointer-events-none" }) }) }),
        /* @__PURE__ */ jsx54(SelectPrimitive.ItemText, { children })
      ]
    }
  );
}
function SelectSeparator({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx54(
    SelectPrimitive.Separator,
    {
      "data-slot": "select-separator",
      className: cn("bg-border -mx-1 my-1 h-px pointer-events-none", className),
      ...props
    }
  );
}
function SelectScrollUpButton({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx54(
    SelectPrimitive.ScrollUpButton,
    {
      "data-slot": "select-scroll-up-button",
      className: cn("bg-popover z-10 flex cursor-default items-center justify-center py-1 [&_svg:not([class*='size-'])]:size-4", className),
      ...props,
      children: /* @__PURE__ */ jsx54(
        IconChevronUp2,
        {}
      )
    }
  );
}
function SelectScrollDownButton({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx54(
    SelectPrimitive.ScrollDownButton,
    {
      "data-slot": "select-scroll-down-button",
      className: cn("bg-popover z-10 flex cursor-default items-center justify-center py-1 [&_svg:not([class*='size-'])]:size-4", className),
      ...props,
      children: /* @__PURE__ */ jsx54(
        IconChevronDown5,
        {}
      )
    }
  );
}

// components/ui/context-menu.tsx
import { ContextMenu as ContextMenuPrimitive } from "radix-ui";
import { IconChevronRight as IconChevronRight6, IconCheck as IconCheck7 } from "@tabler/icons-react";
import { jsx as jsx55, jsxs as jsxs23 } from "react/jsx-runtime";
function ContextMenu({
  ...props
}) {
  return /* @__PURE__ */ jsx55(ContextMenuPrimitive.Root, { "data-slot": "context-menu", ...props });
}
function ContextMenuTrigger({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx55(
    ContextMenuPrimitive.Trigger,
    {
      "data-slot": "context-menu-trigger",
      className: cn("select-none", className),
      ...props
    }
  );
}
function ContextMenuGroup({
  ...props
}) {
  return /* @__PURE__ */ jsx55(ContextMenuPrimitive.Group, { "data-slot": "context-menu-group", ...props });
}
function ContextMenuPortal({
  ...props
}) {
  return /* @__PURE__ */ jsx55(ContextMenuPrimitive.Portal, { "data-slot": "context-menu-portal", ...props });
}
function ContextMenuSub({
  ...props
}) {
  return /* @__PURE__ */ jsx55(ContextMenuPrimitive.Sub, { "data-slot": "context-menu-sub", ...props });
}
function ContextMenuRadioGroup({
  ...props
}) {
  return /* @__PURE__ */ jsx55(
    ContextMenuPrimitive.RadioGroup,
    {
      "data-slot": "context-menu-radio-group",
      ...props
    }
  );
}
function ContextMenuContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx55(ContextMenuPrimitive.Portal, { children: /* @__PURE__ */ jsx55(
    ContextMenuPrimitive.Content,
    {
      "data-slot": "context-menu-content",
      className: cn("data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ring-foreground/10 bg-popover text-popover-foreground min-w-36 rounded-lg p-1 shadow-md ring-1 duration-100 z-50 max-h-(--radix-context-menu-content-available-height) origin-(--radix-context-menu-content-transform-origin) overflow-x-hidden overflow-y-auto", className),
      ...props
    }
  ) });
}
function ContextMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}) {
  return /* @__PURE__ */ jsx55(
    ContextMenuPrimitive.Item,
    {
      "data-slot": "context-menu-item",
      "data-inset": inset,
      "data-variant": variant,
      className: cn(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:text-destructive focus:*:[svg]:text-accent-foreground gap-1.5 rounded-md px-1.5 py-1 text-sm data-inset:pl-7 [&_svg:not([class*='size-'])]:size-4 group/context-menu-item relative flex cursor-default items-center outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      ),
      ...props
    }
  );
}
function ContextMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs23(
    ContextMenuPrimitive.SubTrigger,
    {
      "data-slot": "context-menu-sub-trigger",
      "data-inset": inset,
      className: cn(
        "focus:bg-accent focus:text-accent-foreground data-open:bg-accent data-open:text-accent-foreground gap-1.5 rounded-md px-1.5 py-1 text-sm data-inset:pl-7 [&_svg:not([class*='size-'])]:size-4 flex cursor-default items-center outline-hidden select-none [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsx55(IconChevronRight6, { className: "ml-auto" })
      ]
    }
  );
}
function ContextMenuSubContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx55(
    ContextMenuPrimitive.SubContent,
    {
      "data-slot": "context-menu-sub-content",
      className: cn("data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 bg-popover text-popover-foreground min-w-32 rounded-lg border p-1 shadow-lg duration-100 z-50 origin-(--radix-context-menu-content-transform-origin) overflow-hidden", className),
      ...props
    }
  );
}
function ContextMenuCheckboxItem({
  className,
  children,
  checked,
  inset,
  ...props
}) {
  return /* @__PURE__ */ jsxs23(
    ContextMenuPrimitive.CheckboxItem,
    {
      "data-slot": "context-menu-checkbox-item",
      "data-inset": inset,
      className: cn(
        "focus:bg-accent focus:text-accent-foreground gap-1.5 rounded-md py-1 pr-8 pl-1.5 text-sm data-inset:pl-7 [&_svg:not([class*='size-'])]:size-4 relative flex cursor-default items-center outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      ),
      checked,
      ...props,
      children: [
        /* @__PURE__ */ jsx55("span", { className: "absolute right-2 pointer-events-none", children: /* @__PURE__ */ jsx55(ContextMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx55(
          IconCheck7,
          {}
        ) }) }),
        children
      ]
    }
  );
}
function ContextMenuRadioItem({
  className,
  children,
  inset,
  ...props
}) {
  return /* @__PURE__ */ jsxs23(
    ContextMenuPrimitive.RadioItem,
    {
      "data-slot": "context-menu-radio-item",
      "data-inset": inset,
      className: cn(
        "focus:bg-accent focus:text-accent-foreground gap-1.5 rounded-md py-1 pr-8 pl-1.5 text-sm data-inset:pl-7 [&_svg:not([class*='size-'])]:size-4 relative flex cursor-default items-center outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx55("span", { className: "absolute right-2 pointer-events-none", children: /* @__PURE__ */ jsx55(ContextMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx55(
          IconCheck7,
          {}
        ) }) }),
        children
      ]
    }
  );
}
function ContextMenuLabel({
  className,
  inset,
  ...props
}) {
  return /* @__PURE__ */ jsx55(
    ContextMenuPrimitive.Label,
    {
      "data-slot": "context-menu-label",
      "data-inset": inset,
      className: cn("text-muted-foreground px-1.5 py-1 text-xs font-medium data-inset:pl-7", className),
      ...props
    }
  );
}
function ContextMenuSeparator({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx55(
    ContextMenuPrimitive.Separator,
    {
      "data-slot": "context-menu-separator",
      className: cn("bg-border -mx-1 my-1 h-px", className),
      ...props
    }
  );
}
function ContextMenuShortcut({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx55(
    "span",
    {
      "data-slot": "context-menu-shortcut",
      className: cn("text-muted-foreground group-focus/context-menu-item:text-accent-foreground ml-auto text-xs tracking-widest", className),
      ...props
    }
  );
}

// components/ui/carousel.tsx
import * as React9 from "react";
import useEmblaCarousel from "embla-carousel-react";
import { IconChevronLeft as IconChevronLeft3, IconChevronRight as IconChevronRight7 } from "@tabler/icons-react";
import { jsx as jsx56, jsxs as jsxs24 } from "react/jsx-runtime";
var CarouselContext = React9.createContext(null);
function useCarousel() {
  const context = React9.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}
function Carousel({
  orientation = "horizontal",
  opts,
  setApi,
  plugins,
  className,
  children,
  ...props
}) {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y"
    },
    plugins
  );
  const [canScrollPrev, setCanScrollPrev] = React9.useState(false);
  const [canScrollNext, setCanScrollNext] = React9.useState(false);
  const onSelect = React9.useCallback((api2) => {
    if (!api2) return;
    setCanScrollPrev(api2.canScrollPrev());
    setCanScrollNext(api2.canScrollNext());
  }, []);
  const scrollPrev = React9.useCallback(() => {
    api?.scrollPrev();
  }, [api]);
  const scrollNext = React9.useCallback(() => {
    api?.scrollNext();
  }, [api]);
  const handleKeyDown = React9.useCallback(
    (event) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext]
  );
  React9.useEffect(() => {
    if (!api || !setApi) return;
    setApi(api);
  }, [api, setApi]);
  React9.useEffect(() => {
    if (!api) return;
    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);
    return () => {
      api?.off("select", onSelect);
    };
  }, [api, onSelect]);
  return /* @__PURE__ */ jsx56(
    CarouselContext.Provider,
    {
      value: {
        carouselRef,
        api,
        opts,
        orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext
      },
      children: /* @__PURE__ */ jsx56(
        "div",
        {
          onKeyDownCapture: handleKeyDown,
          className: cn("relative", className),
          role: "region",
          "aria-roledescription": "carousel",
          "data-slot": "carousel",
          ...props,
          children
        }
      )
    }
  );
}
function CarouselContent({ className, ...props }) {
  const { carouselRef, orientation } = useCarousel();
  return /* @__PURE__ */ jsx56(
    "div",
    {
      ref: carouselRef,
      className: "overflow-hidden",
      "data-slot": "carousel-content",
      children: /* @__PURE__ */ jsx56(
        "div",
        {
          className: cn(
            "flex",
            orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
            className
          ),
          ...props
        }
      )
    }
  );
}
function CarouselItem({ className, ...props }) {
  const { orientation } = useCarousel();
  return /* @__PURE__ */ jsx56(
    "div",
    {
      role: "group",
      "aria-roledescription": "slide",
      "data-slot": "carousel-item",
      className: cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      ),
      ...props
    }
  );
}
function CarouselPrevious({
  className,
  variant = "outline",
  size = "icon-sm",
  ...props
}) {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();
  return /* @__PURE__ */ jsxs24(
    Button,
    {
      "data-slot": "carousel-previous",
      variant,
      size,
      className: cn(
        "rounded-full absolute touch-manipulation",
        orientation === "horizontal" ? "top-1/2 -left-12 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      ),
      disabled: !canScrollPrev,
      onClick: scrollPrev,
      ...props,
      children: [
        /* @__PURE__ */ jsx56(IconChevronLeft3, {}),
        /* @__PURE__ */ jsx56("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
}
function CarouselNext({
  className,
  variant = "outline",
  size = "icon-sm",
  ...props
}) {
  const { orientation, scrollNext, canScrollNext } = useCarousel();
  return /* @__PURE__ */ jsxs24(
    Button,
    {
      "data-slot": "carousel-next",
      variant,
      size,
      className: cn(
        "rounded-full absolute touch-manipulation",
        orientation === "horizontal" ? "top-1/2 -right-12 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      ),
      disabled: !canScrollNext,
      onClick: scrollNext,
      ...props,
      children: [
        /* @__PURE__ */ jsx56(IconChevronRight7, {}),
        /* @__PURE__ */ jsx56("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
}
export {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Alert,
  AlertAction,
  AlertDescription,
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertTitle,
  AspectRatio,
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
  Badge,
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Button,
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
  Calendar,
  CalendarDayButton,
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
  ChartTooltip,
  ChartTooltipContent,
  Checkbox,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxCollection,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxLabel,
  ComboboxList,
  ComboboxSeparator,
  ComboboxTrigger,
  ComboboxValue,
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuPortal,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
  DirectionProvider,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerPortal,
  DrawerTitle,
  DrawerTrigger,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  Example,
  ExampleWrapper,
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemGroup,
  ItemHeader,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
  Kbd,
  KbdGroup,
  Label,
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarPortal,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
  NativeSelect,
  NativeSelectOptGroup,
  NativeSelectOption,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  Popover,
  PopoverAnchor,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
  Progress,
  RadioGroup,
  RadioGroupItem,
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
  ScrollArea,
  ScrollBar,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
  Separator,
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  Skeleton,
  Slider,
  Spinner,
  Switch,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Textarea,
  Toaster,
  Toggle,
  ToggleGroup,
  ToggleGroupItem,
  Tooltip2 as Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  badgeVariants,
  buttonGroupVariants,
  buttonVariants,
  navigationMenuTriggerStyle,
  tabsListVariants,
  toggleVariants,
  useCarousel,
  useComboboxAnchor,
  useDirection,
  useSidebar
};
