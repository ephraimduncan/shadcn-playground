export const TAILWIND_STYLESHEET_IDS = [
  "tailwindcss",
  "tailwindcss/preflight",
  "tailwindcss/theme",
  "tailwindcss/utilities",
  "tw-animate-css",
  "shadcn/tailwind.css",
] as const;

export type TailwindStylesheetId = (typeof TAILWIND_STYLESHEET_IDS)[number];

export type TailwindStylesheets = Record<TailwindStylesheetId, string>;
