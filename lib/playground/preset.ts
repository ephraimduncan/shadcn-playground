import { buildGlobalCSSFromTheme } from "@/lib/playground/build-global-css";
import { THEMES_DATA, FONTS_DATA } from "@/lib/playground/preset-data";

const RADIUS_VALUES: Record<string, string> = {
  none: "0",
  small: "0.45rem",
  medium: "0.625rem",
  large: "0.875rem",
};

// --- Preset decode (from shadcn/src/preset/preset.ts) ---

const PRESET_STYLES = ["nova", "vega", "maia", "lyra", "mira"] as const;

const PRESET_BASE_COLORS = [
  "neutral",
  "stone",
  "zinc",
  "gray",
  "mauve",
  "olive",
  "mist",
  "taupe",
] as const;

const PRESET_THEMES = [
  "neutral",
  "stone",
  "zinc",
  "gray",
  "amber",
  "blue",
  "cyan",
  "emerald",
  "fuchsia",
  "green",
  "indigo",
  "lime",
  "orange",
  "pink",
  "purple",
  "red",
  "rose",
  "sky",
  "teal",
  "violet",
  "yellow",
  "mauve",
  "olive",
  "mist",
  "taupe",
] as const;

const PRESET_ICON_LIBRARIES = [
  "lucide",
  "hugeicons",
  "tabler",
  "phosphor",
  "remixicon",
] as const;

const PRESET_FONTS = [
  "inter",
  "noto-sans",
  "nunito-sans",
  "figtree",
  "roboto",
  "raleway",
  "dm-sans",
  "public-sans",
  "outfit",
  "jetbrains-mono",
  "geist",
  "geist-mono",
  "lora",
  "merriweather",
  "playfair-display",
  "noto-serif",
  "roboto-slab",
] as const;

const PRESET_RADII = [
  "default",
  "none",
  "small",
  "medium",
  "large",
] as const;

const PRESET_MENU_ACCENTS = ["subtle", "bold"] as const;
const PRESET_MENU_COLORS = ["default", "inverted"] as const;

const PRESET_FIELDS = [
  { key: "menuColor", values: PRESET_MENU_COLORS, bits: 3 },
  { key: "menuAccent", values: PRESET_MENU_ACCENTS, bits: 3 },
  { key: "radius", values: PRESET_RADII, bits: 4 },
  { key: "font", values: PRESET_FONTS, bits: 6 },
  { key: "iconLibrary", values: PRESET_ICON_LIBRARIES, bits: 6 },
  { key: "theme", values: PRESET_THEMES, bits: 6 },
  { key: "baseColor", values: PRESET_BASE_COLORS, bits: 6 },
  { key: "style", values: PRESET_STYLES, bits: 6 },
] as const;

export type PresetConfig = {
  style: (typeof PRESET_STYLES)[number];
  baseColor: (typeof PRESET_BASE_COLORS)[number];
  theme: (typeof PRESET_THEMES)[number];
  iconLibrary: (typeof PRESET_ICON_LIBRARIES)[number];
  font: (typeof PRESET_FONTS)[number];
  radius: (typeof PRESET_RADII)[number];
  menuAccent: (typeof PRESET_MENU_ACCENTS)[number];
  menuColor: (typeof PRESET_MENU_COLORS)[number];
};

const BASE62 =
  "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const VERSION_CHAR = "a";

function fromBase62(str: string): number {
  let result = 0;
  for (let i = 0; i < str.length; i++) {
    const idx = BASE62.indexOf(str[i]);
    if (idx === -1) return -1;
    result = result * 62 + idx;
  }
  return result;
}

export function decodePreset(code: string): PresetConfig | null {
  if (!code || code.length < 2) return null;
  if (code[0] !== VERSION_CHAR) return null;

  const bits = fromBase62(code.slice(1));
  if (bits < 0) return null;

  const result = {} as Record<string, string>;
  let offset = 0;
  for (const field of PRESET_FIELDS) {
    const idx = Math.floor(bits / 2 ** offset) % 2 ** field.bits;
    result[field.key] =
      idx < field.values.length ? field.values[idx] : field.values[0];
    offset += field.bits;
  }

  return result as unknown as PresetConfig;
}

export function isPresetCode(value: string): boolean {
  if (!value || value.length < 2 || value.length > 10) return false;
  if (value[0] !== VERSION_CHAR) return false;
  for (let i = 1; i < value.length; i++) {
    if (BASE62.indexOf(value[i]) === -1) return false;
  }
  return true;
}

// --- Theme building ---

function findTheme(name: string) {
  return THEMES_DATA.find((t) => t.name === name);
}

function findFont(name: string) {
  return FONTS_DATA.find((f) => f.name === name);
}

export function buildPresetCSS(config: PresetConfig): string | null {
  // "gray" is in the preset encoding but not in the actual theme data — fall back to "zinc"
  const baseColorName =
    config.baseColor === "gray" ? "zinc" : config.baseColor;
  const themeName = config.theme === "gray" ? "zinc" : config.theme;

  const baseColor = findTheme(baseColorName);
  const theme = findTheme(themeName);

  if (!baseColor || !theme) return null;

  const lightVars: Record<string, string> = {
    ...baseColor.cssVars.light,
    ...theme.cssVars.light,
  };
  const darkVars: Record<string, string> = {
    ...baseColor.cssVars.dark,
    ...theme.cssVars.dark,
  };

  if (config.menuAccent === "bold") {
    lightVars.accent = lightVars.primary;
    lightVars["accent-foreground"] = lightVars["primary-foreground"];
    darkVars.accent = darkVars.primary;
    darkVars["accent-foreground"] = darkVars["primary-foreground"];
  }

  const radiusValue = RADIUS_VALUES[config.radius];
  if (radiusValue) {
    lightVars.radius = radiusValue;
  }

  const font = findFont(config.font);
  if (font) {
    lightVars[font.variable.replace("--", "")] = font.family;
    darkVars[font.variable.replace("--", "")] = font.family;
  }

  return buildGlobalCSSFromTheme({
    cssVars: { light: lightVars, dark: darkVars },
  });
}

// --- Named presets ---

export type NamedPreset = {
  name: string;
  title: string;
  description: string;
  config: PresetConfig;
  code: string;
};

export const NAMED_PRESETS: NamedPreset[] = [
  {
    name: "nova",
    title: "Nova",
    description: "Geist font, clean and modern",
    code: "a2fA",
    config: {
      style: "nova",
      baseColor: "neutral",
      theme: "neutral",
      iconLibrary: "lucide",
      font: "geist",
      radius: "default",
      menuAccent: "subtle",
      menuColor: "default",
    },
  },
  {
    name: "vega",
    title: "Vega",
    description: "Inter font, balanced and readable",
    code: "aIkeymG",
    config: {
      style: "vega",
      baseColor: "neutral",
      theme: "neutral",
      iconLibrary: "lucide",
      font: "inter",
      radius: "default",
      menuAccent: "subtle",
      menuColor: "default",
    },
  },
  {
    name: "maia",
    title: "Maia",
    description: "Figtree font, friendly and warm",
    code: "abVKFP6",
    config: {
      style: "maia",
      baseColor: "neutral",
      theme: "neutral",
      iconLibrary: "hugeicons",
      font: "figtree",
      radius: "default",
      menuAccent: "subtle",
      menuColor: "default",
    },
  },
  {
    name: "lyra",
    title: "Lyra",
    description: "JetBrains Mono, developer-focused",
    code: "auFznsW",
    config: {
      style: "lyra",
      baseColor: "neutral",
      theme: "neutral",
      iconLibrary: "phosphor",
      font: "jetbrains-mono",
      radius: "default",
      menuAccent: "subtle",
      menuColor: "default",
    },
  },
  {
    name: "mira",
    title: "Mira",
    description: "Inter font, soft and approachable",
    code: "a1D0eCA4",
    config: {
      style: "mira",
      baseColor: "neutral",
      theme: "neutral",
      iconLibrary: "hugeicons",
      font: "inter",
      radius: "default",
      menuAccent: "subtle",
      menuColor: "default",
    },
  },
];
