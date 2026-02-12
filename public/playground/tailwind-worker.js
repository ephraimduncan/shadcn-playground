"use strict";
(() => {
  // node_modules/tailwindcss/dist/chunk-HTB5LLOP.mjs
  var l = { inherit: "inherit", current: "currentcolor", transparent: "transparent", black: "#000", white: "#fff", slate: { 50: "oklch(98.4% 0.003 247.858)", 100: "oklch(96.8% 0.007 247.896)", 200: "oklch(92.9% 0.013 255.508)", 300: "oklch(86.9% 0.022 252.894)", 400: "oklch(70.4% 0.04 256.788)", 500: "oklch(55.4% 0.046 257.417)", 600: "oklch(44.6% 0.043 257.281)", 700: "oklch(37.2% 0.044 257.287)", 800: "oklch(27.9% 0.041 260.031)", 900: "oklch(20.8% 0.042 265.755)", 950: "oklch(12.9% 0.042 264.695)" }, gray: { 50: "oklch(98.5% 0.002 247.839)", 100: "oklch(96.7% 0.003 264.542)", 200: "oklch(92.8% 0.006 264.531)", 300: "oklch(87.2% 0.01 258.338)", 400: "oklch(70.7% 0.022 261.325)", 500: "oklch(55.1% 0.027 264.364)", 600: "oklch(44.6% 0.03 256.802)", 700: "oklch(37.3% 0.034 259.733)", 800: "oklch(27.8% 0.033 256.848)", 900: "oklch(21% 0.034 264.665)", 950: "oklch(13% 0.028 261.692)" }, zinc: { 50: "oklch(98.5% 0 0)", 100: "oklch(96.7% 0.001 286.375)", 200: "oklch(92% 0.004 286.32)", 300: "oklch(87.1% 0.006 286.286)", 400: "oklch(70.5% 0.015 286.067)", 500: "oklch(55.2% 0.016 285.938)", 600: "oklch(44.2% 0.017 285.786)", 700: "oklch(37% 0.013 285.805)", 800: "oklch(27.4% 0.006 286.033)", 900: "oklch(21% 0.006 285.885)", 950: "oklch(14.1% 0.005 285.823)" }, neutral: { 50: "oklch(98.5% 0 0)", 100: "oklch(97% 0 0)", 200: "oklch(92.2% 0 0)", 300: "oklch(87% 0 0)", 400: "oklch(70.8% 0 0)", 500: "oklch(55.6% 0 0)", 600: "oklch(43.9% 0 0)", 700: "oklch(37.1% 0 0)", 800: "oklch(26.9% 0 0)", 900: "oklch(20.5% 0 0)", 950: "oklch(14.5% 0 0)" }, stone: { 50: "oklch(98.5% 0.001 106.423)", 100: "oklch(97% 0.001 106.424)", 200: "oklch(92.3% 0.003 48.717)", 300: "oklch(86.9% 0.005 56.366)", 400: "oklch(70.9% 0.01 56.259)", 500: "oklch(55.3% 0.013 58.071)", 600: "oklch(44.4% 0.011 73.639)", 700: "oklch(37.4% 0.01 67.558)", 800: "oklch(26.8% 0.007 34.298)", 900: "oklch(21.6% 0.006 56.043)", 950: "oklch(14.7% 0.004 49.25)" }, red: { 50: "oklch(97.1% 0.013 17.38)", 100: "oklch(93.6% 0.032 17.717)", 200: "oklch(88.5% 0.062 18.334)", 300: "oklch(80.8% 0.114 19.571)", 400: "oklch(70.4% 0.191 22.216)", 500: "oklch(63.7% 0.237 25.331)", 600: "oklch(57.7% 0.245 27.325)", 700: "oklch(50.5% 0.213 27.518)", 800: "oklch(44.4% 0.177 26.899)", 900: "oklch(39.6% 0.141 25.723)", 950: "oklch(25.8% 0.092 26.042)" }, orange: { 50: "oklch(98% 0.016 73.684)", 100: "oklch(95.4% 0.038 75.164)", 200: "oklch(90.1% 0.076 70.697)", 300: "oklch(83.7% 0.128 66.29)", 400: "oklch(75% 0.183 55.934)", 500: "oklch(70.5% 0.213 47.604)", 600: "oklch(64.6% 0.222 41.116)", 700: "oklch(55.3% 0.195 38.402)", 800: "oklch(47% 0.157 37.304)", 900: "oklch(40.8% 0.123 38.172)", 950: "oklch(26.6% 0.079 36.259)" }, amber: { 50: "oklch(98.7% 0.022 95.277)", 100: "oklch(96.2% 0.059 95.617)", 200: "oklch(92.4% 0.12 95.746)", 300: "oklch(87.9% 0.169 91.605)", 400: "oklch(82.8% 0.189 84.429)", 500: "oklch(76.9% 0.188 70.08)", 600: "oklch(66.6% 0.179 58.318)", 700: "oklch(55.5% 0.163 48.998)", 800: "oklch(47.3% 0.137 46.201)", 900: "oklch(41.4% 0.112 45.904)", 950: "oklch(27.9% 0.077 45.635)" }, yellow: { 50: "oklch(98.7% 0.026 102.212)", 100: "oklch(97.3% 0.071 103.193)", 200: "oklch(94.5% 0.129 101.54)", 300: "oklch(90.5% 0.182 98.111)", 400: "oklch(85.2% 0.199 91.936)", 500: "oklch(79.5% 0.184 86.047)", 600: "oklch(68.1% 0.162 75.834)", 700: "oklch(55.4% 0.135 66.442)", 800: "oklch(47.6% 0.114 61.907)", 900: "oklch(42.1% 0.095 57.708)", 950: "oklch(28.6% 0.066 53.813)" }, lime: { 50: "oklch(98.6% 0.031 120.757)", 100: "oklch(96.7% 0.067 122.328)", 200: "oklch(93.8% 0.127 124.321)", 300: "oklch(89.7% 0.196 126.665)", 400: "oklch(84.1% 0.238 128.85)", 500: "oklch(76.8% 0.233 130.85)", 600: "oklch(64.8% 0.2 131.684)", 700: "oklch(53.2% 0.157 131.589)", 800: "oklch(45.3% 0.124 130.933)", 900: "oklch(40.5% 0.101 131.063)", 950: "oklch(27.4% 0.072 132.109)" }, green: { 50: "oklch(98.2% 0.018 155.826)", 100: "oklch(96.2% 0.044 156.743)", 200: "oklch(92.5% 0.084 155.995)", 300: "oklch(87.1% 0.15 154.449)", 400: "oklch(79.2% 0.209 151.711)", 500: "oklch(72.3% 0.219 149.579)", 600: "oklch(62.7% 0.194 149.214)", 700: "oklch(52.7% 0.154 150.069)", 800: "oklch(44.8% 0.119 151.328)", 900: "oklch(39.3% 0.095 152.535)", 950: "oklch(26.6% 0.065 152.934)" }, emerald: { 50: "oklch(97.9% 0.021 166.113)", 100: "oklch(95% 0.052 163.051)", 200: "oklch(90.5% 0.093 164.15)", 300: "oklch(84.5% 0.143 164.978)", 400: "oklch(76.5% 0.177 163.223)", 500: "oklch(69.6% 0.17 162.48)", 600: "oklch(59.6% 0.145 163.225)", 700: "oklch(50.8% 0.118 165.612)", 800: "oklch(43.2% 0.095 166.913)", 900: "oklch(37.8% 0.077 168.94)", 950: "oklch(26.2% 0.051 172.552)" }, teal: { 50: "oklch(98.4% 0.014 180.72)", 100: "oklch(95.3% 0.051 180.801)", 200: "oklch(91% 0.096 180.426)", 300: "oklch(85.5% 0.138 181.071)", 400: "oklch(77.7% 0.152 181.912)", 500: "oklch(70.4% 0.14 182.503)", 600: "oklch(60% 0.118 184.704)", 700: "oklch(51.1% 0.096 186.391)", 800: "oklch(43.7% 0.078 188.216)", 900: "oklch(38.6% 0.063 188.416)", 950: "oklch(27.7% 0.046 192.524)" }, cyan: { 50: "oklch(98.4% 0.019 200.873)", 100: "oklch(95.6% 0.045 203.388)", 200: "oklch(91.7% 0.08 205.041)", 300: "oklch(86.5% 0.127 207.078)", 400: "oklch(78.9% 0.154 211.53)", 500: "oklch(71.5% 0.143 215.221)", 600: "oklch(60.9% 0.126 221.723)", 700: "oklch(52% 0.105 223.128)", 800: "oklch(45% 0.085 224.283)", 900: "oklch(39.8% 0.07 227.392)", 950: "oklch(30.2% 0.056 229.695)" }, sky: { 50: "oklch(97.7% 0.013 236.62)", 100: "oklch(95.1% 0.026 236.824)", 200: "oklch(90.1% 0.058 230.902)", 300: "oklch(82.8% 0.111 230.318)", 400: "oklch(74.6% 0.16 232.661)", 500: "oklch(68.5% 0.169 237.323)", 600: "oklch(58.8% 0.158 241.966)", 700: "oklch(50% 0.134 242.749)", 800: "oklch(44.3% 0.11 240.79)", 900: "oklch(39.1% 0.09 240.876)", 950: "oklch(29.3% 0.066 243.157)" }, blue: { 50: "oklch(97% 0.014 254.604)", 100: "oklch(93.2% 0.032 255.585)", 200: "oklch(88.2% 0.059 254.128)", 300: "oklch(80.9% 0.105 251.813)", 400: "oklch(70.7% 0.165 254.624)", 500: "oklch(62.3% 0.214 259.815)", 600: "oklch(54.6% 0.245 262.881)", 700: "oklch(48.8% 0.243 264.376)", 800: "oklch(42.4% 0.199 265.638)", 900: "oklch(37.9% 0.146 265.522)", 950: "oklch(28.2% 0.091 267.935)" }, indigo: { 50: "oklch(96.2% 0.018 272.314)", 100: "oklch(93% 0.034 272.788)", 200: "oklch(87% 0.065 274.039)", 300: "oklch(78.5% 0.115 274.713)", 400: "oklch(67.3% 0.182 276.935)", 500: "oklch(58.5% 0.233 277.117)", 600: "oklch(51.1% 0.262 276.966)", 700: "oklch(45.7% 0.24 277.023)", 800: "oklch(39.8% 0.195 277.366)", 900: "oklch(35.9% 0.144 278.697)", 950: "oklch(25.7% 0.09 281.288)" }, violet: { 50: "oklch(96.9% 0.016 293.756)", 100: "oklch(94.3% 0.029 294.588)", 200: "oklch(89.4% 0.057 293.283)", 300: "oklch(81.1% 0.111 293.571)", 400: "oklch(70.2% 0.183 293.541)", 500: "oklch(60.6% 0.25 292.717)", 600: "oklch(54.1% 0.281 293.009)", 700: "oklch(49.1% 0.27 292.581)", 800: "oklch(43.2% 0.232 292.759)", 900: "oklch(38% 0.189 293.745)", 950: "oklch(28.3% 0.141 291.089)" }, purple: { 50: "oklch(97.7% 0.014 308.299)", 100: "oklch(94.6% 0.033 307.174)", 200: "oklch(90.2% 0.063 306.703)", 300: "oklch(82.7% 0.119 306.383)", 400: "oklch(71.4% 0.203 305.504)", 500: "oklch(62.7% 0.265 303.9)", 600: "oklch(55.8% 0.288 302.321)", 700: "oklch(49.6% 0.265 301.924)", 800: "oklch(43.8% 0.218 303.724)", 900: "oklch(38.1% 0.176 304.987)", 950: "oklch(29.1% 0.149 302.717)" }, fuchsia: { 50: "oklch(97.7% 0.017 320.058)", 100: "oklch(95.2% 0.037 318.852)", 200: "oklch(90.3% 0.076 319.62)", 300: "oklch(83.3% 0.145 321.434)", 400: "oklch(74% 0.238 322.16)", 500: "oklch(66.7% 0.295 322.15)", 600: "oklch(59.1% 0.293 322.896)", 700: "oklch(51.8% 0.253 323.949)", 800: "oklch(45.2% 0.211 324.591)", 900: "oklch(40.1% 0.17 325.612)", 950: "oklch(29.3% 0.136 325.661)" }, pink: { 50: "oklch(97.1% 0.014 343.198)", 100: "oklch(94.8% 0.028 342.258)", 200: "oklch(89.9% 0.061 343.231)", 300: "oklch(82.3% 0.12 346.018)", 400: "oklch(71.8% 0.202 349.761)", 500: "oklch(65.6% 0.241 354.308)", 600: "oklch(59.2% 0.249 0.584)", 700: "oklch(52.5% 0.223 3.958)", 800: "oklch(45.9% 0.187 3.815)", 900: "oklch(40.8% 0.153 2.432)", 950: "oklch(28.4% 0.109 3.907)" }, rose: { 50: "oklch(96.9% 0.015 12.422)", 100: "oklch(94.1% 0.03 12.58)", 200: "oklch(89.2% 0.058 10.001)", 300: "oklch(81% 0.117 11.638)", 400: "oklch(71.2% 0.194 13.428)", 500: "oklch(64.5% 0.246 16.439)", 600: "oklch(58.6% 0.253 17.585)", 700: "oklch(51.4% 0.222 16.935)", 800: "oklch(45.5% 0.188 13.697)", 900: "oklch(41% 0.159 10.272)", 950: "oklch(27.1% 0.105 12.094)" } };

  // node_modules/tailwindcss/dist/chunk-GFBUASX3.mjs
  var _ = /* @__PURE__ */ new Set(["black", "silver", "gray", "white", "maroon", "red", "purple", "fuchsia", "green", "lime", "olive", "yellow", "navy", "blue", "teal", "aqua", "aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque", "black", "blanchedalmond", "blue", "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgreen", "darkgrey", "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategray", "darkslategrey", "darkturquoise", "darkviolet", "deeppink", "deepskyblue", "dimgray", "dimgrey", "dodgerblue", "firebrick", "floralwhite", "forestgreen", "fuchsia", "gainsboro", "ghostwhite", "gold", "goldenrod", "gray", "green", "greenyellow", "grey", "honeydew", "hotpink", "indianred", "indigo", "ivory", "khaki", "lavender", "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgreen", "lightgrey", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightslategrey", "lightsteelblue", "lightyellow", "lime", "limegreen", "linen", "magenta", "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin", "navajowhite", "navy", "oldlace", "olive", "olivedrab", "orange", "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "purple", "rebeccapurple", "red", "rosybrown", "royalblue", "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell", "sienna", "silver", "skyblue", "slateblue", "slategray", "slategrey", "snow", "springgreen", "steelblue", "tan", "teal", "thistle", "tomato", "turquoise", "violet", "wheat", "white", "whitesmoke", "yellow", "yellowgreen", "transparent", "currentcolor", "canvas", "canvastext", "linktext", "visitedtext", "activetext", "buttonface", "buttontext", "buttonborder", "field", "fieldtext", "highlight", "highlighttext", "selecteditem", "selecteditemtext", "mark", "marktext", "graytext", "accentcolor", "accentcolortext"]);
  var U = /^(rgba?|hsla?|hwb|color|(ok)?(lab|lch)|light-dark|color-mix)\(/i;
  function S(e) {
    return e.charCodeAt(0) === 35 || U.test(e) || _.has(e.toLowerCase());
  }
  var A = ["calc", "min", "max", "clamp", "mod", "rem", "sin", "cos", "tan", "asin", "acos", "atan", "atan2", "pow", "sqrt", "hypot", "log", "exp", "round"];
  function b(e) {
    return e.indexOf("(") !== -1 && A.some((t2) => e.includes(`${t2}(`));
  }
  function oe(e) {
    if (!A.some((n) => e.includes(n))) return e;
    let t2 = "", r = [], s = null, m = null;
    for (let n = 0; n < e.length; n++) {
      let a = e.charCodeAt(n);
      if (a >= 48 && a <= 57 || s !== null && (a === 37 || a >= 97 && a <= 122 || a >= 65 && a <= 90) ? s = n : (m = s, s = null), a === 40) {
        t2 += e[n];
        let i = n;
        for (let p = n - 1; p >= 0; p--) {
          let c = e.charCodeAt(p);
          if (c >= 48 && c <= 57) i = p;
          else if (c >= 97 && c <= 122) i = p;
          else break;
        }
        let o2 = e.slice(i, n);
        if (A.includes(o2)) {
          r.unshift(true);
          continue;
        } else if (r[0] && o2 === "") {
          r.unshift(true);
          continue;
        }
        r.unshift(false);
        continue;
      } else if (a === 41) t2 += e[n], r.shift();
      else if (a === 44 && r[0]) {
        t2 += ", ";
        continue;
      } else {
        if (a === 32 && r[0] && t2.charCodeAt(t2.length - 1) === 32) continue;
        if ((a === 43 || a === 42 || a === 47 || a === 45) && r[0]) {
          let i = t2.trimEnd(), o2 = i.charCodeAt(i.length - 1), p = i.charCodeAt(i.length - 2), c = e.charCodeAt(n + 1);
          if ((o2 === 101 || o2 === 69) && p >= 48 && p <= 57) {
            t2 += e[n];
            continue;
          } else if (o2 === 43 || o2 === 42 || o2 === 47 || o2 === 45) {
            t2 += e[n];
            continue;
          } else if (o2 === 40 || o2 === 44) {
            t2 += e[n];
            continue;
          } else e.charCodeAt(n - 1) === 32 ? t2 += `${e[n]} ` : o2 >= 48 && o2 <= 57 || c >= 48 && c <= 57 || o2 === 41 || c === 40 || c === 43 || c === 42 || c === 47 || c === 45 || m !== null && m === n - 1 ? t2 += ` ${e[n]} ` : t2 += e[n];
        } else t2 += e[n];
      }
    }
    return t2;
  }
  var E = new Uint8Array(256);
  function d(e, t2) {
    let r = 0, s = [], m = 0, n = e.length, a = t2.charCodeAt(0);
    for (let i = 0; i < n; i++) {
      let o2 = e.charCodeAt(i);
      if (r === 0 && o2 === a) {
        s.push(e.slice(m, i)), m = i + 1;
        continue;
      }
      switch (o2) {
        case 92:
          i += 1;
          break;
        case 39:
        case 34:
          for (; ++i < n; ) {
            let p = e.charCodeAt(i);
            if (p === 92) {
              i += 1;
              continue;
            }
            if (p === o2) break;
          }
          break;
        case 40:
          E[r] = 41, r++;
          break;
        case 91:
          E[r] = 93, r++;
          break;
        case 123:
          E[r] = 125, r++;
          break;
        case 93:
        case 125:
        case 41:
          r > 0 && o2 === E[r - 1] && r--;
          break;
      }
    }
    return s.push(e.slice(m)), s;
  }
  var P = { color: S, length: y, percentage: C, ratio: G, number: v, integer: u, url: R, position: K, "bg-size": Y, "line-width": T, image: F, "family-name": M, "generic-name": H, "absolute-size": $, "relative-size": W, angle: X, vector: te };
  function me(e, t2) {
    if (e.startsWith("var(")) return null;
    for (let r of t2) if (P[r]?.(e)) return r;
    return null;
  }
  var z = /^url\(.*\)$/;
  function R(e) {
    return z.test(e);
  }
  function T(e) {
    return d(e, " ").every((t2) => y(t2) || v(t2) || t2 === "thin" || t2 === "medium" || t2 === "thick");
  }
  var D = /^(?:element|image|cross-fade|image-set)\(/;
  var I = /^(repeating-)?(conic|linear|radial)-gradient\(/;
  function F(e) {
    let t2 = 0;
    for (let r of d(e, ",")) if (!r.startsWith("var(")) {
      if (R(r)) {
        t2 += 1;
        continue;
      }
      if (I.test(r)) {
        t2 += 1;
        continue;
      }
      if (D.test(r)) {
        t2 += 1;
        continue;
      }
      return false;
    }
    return t2 > 0;
  }
  function H(e) {
    return e === "serif" || e === "sans-serif" || e === "monospace" || e === "cursive" || e === "fantasy" || e === "system-ui" || e === "ui-serif" || e === "ui-sans-serif" || e === "ui-monospace" || e === "ui-rounded" || e === "math" || e === "emoji" || e === "fangsong";
  }
  function M(e) {
    let t2 = 0;
    for (let r of d(e, ",")) {
      let s = r.charCodeAt(0);
      if (s >= 48 && s <= 57) return false;
      r.startsWith("var(") || (t2 += 1);
    }
    return t2 > 0;
  }
  function $(e) {
    return e === "xx-small" || e === "x-small" || e === "small" || e === "medium" || e === "large" || e === "x-large" || e === "xx-large" || e === "xxx-large";
  }
  function W(e) {
    return e === "larger" || e === "smaller";
  }
  var x = /[+-]?\d*\.?\d+(?:[eE][+-]?\d+)?/;
  var B = new RegExp(`^${x.source}$`);
  function v(e) {
    return B.test(e) || b(e);
  }
  var q = new RegExp(`^${x.source}%$`);
  function C(e) {
    return q.test(e) || b(e);
  }
  var V = new RegExp(`^${x.source}s*/s*${x.source}$`);
  function G(e) {
    return V.test(e) || b(e);
  }
  var Z = ["cm", "mm", "Q", "in", "pc", "pt", "px", "em", "ex", "ch", "rem", "lh", "rlh", "vw", "vh", "vmin", "vmax", "vb", "vi", "svw", "svh", "lvw", "lvh", "dvw", "dvh", "cqw", "cqh", "cqi", "cqb", "cqmin", "cqmax"];
  var j = new RegExp(`^${x.source}(${Z.join("|")})$`);
  function y(e) {
    return j.test(e) || b(e);
  }
  function K(e) {
    let t2 = 0;
    for (let r of d(e, " ")) {
      if (r === "center" || r === "top" || r === "right" || r === "bottom" || r === "left") {
        t2 += 1;
        continue;
      }
      if (!r.startsWith("var(")) {
        if (y(r) || C(r)) {
          t2 += 1;
          continue;
        }
        return false;
      }
    }
    return t2 > 0;
  }
  function Y(e) {
    let t2 = 0;
    for (let r of d(e, ",")) {
      if (r === "cover" || r === "contain") {
        t2 += 1;
        continue;
      }
      let s = d(r, " ");
      if (s.length !== 1 && s.length !== 2) return false;
      if (s.every((m) => m === "auto" || y(m) || C(m))) {
        t2 += 1;
        continue;
      }
    }
    return t2 > 0;
  }
  var Q = ["deg", "rad", "grad", "turn"];
  var J = new RegExp(`^${x.source}(${Q.join("|")})$`);
  function X(e) {
    return J.test(e);
  }
  var ee = new RegExp(`^${x.source} +${x.source} +${x.source}$`);
  function te(e) {
    return ee.test(e);
  }
  function u(e) {
    let t2 = Number(e);
    return Number.isInteger(t2) && t2 >= 0 && String(t2) === String(e);
  }
  function pe(e) {
    let t2 = Number(e);
    return Number.isInteger(t2) && t2 > 0 && String(t2) === String(e);
  }
  function ge(e) {
    return N(e, 0.25);
  }
  function ue(e) {
    return N(e, 0.25);
  }
  function N(e, t2) {
    let r = Number(e);
    return r >= 0 && r % t2 === 0 && String(r) === String(e);
  }
  function h(e) {
    return { __BARE_VALUE__: e };
  }
  var g = h((e) => {
    if (u(e.value)) return e.value;
  });
  var l2 = h((e) => {
    if (u(e.value)) return `${e.value}%`;
  });
  var f = h((e) => {
    if (u(e.value)) return `${e.value}px`;
  });
  var O = h((e) => {
    if (u(e.value)) return `${e.value}ms`;
  });
  var w = h((e) => {
    if (u(e.value)) return `${e.value}deg`;
  });
  var re = h((e) => {
    if (e.fraction === null) return;
    let [t2, r] = d(e.fraction, "/");
    if (!(!u(t2) || !u(r))) return e.fraction;
  });
  var L = h((e) => {
    if (u(Number(e.value))) return `repeat(${e.value}, minmax(0, 1fr))`;
  });
  var be = { accentColor: ({ theme: e }) => e("colors"), animation: { none: "none", spin: "spin 1s linear infinite", ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite", pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite", bounce: "bounce 1s infinite" }, aria: { busy: 'busy="true"', checked: 'checked="true"', disabled: 'disabled="true"', expanded: 'expanded="true"', hidden: 'hidden="true"', pressed: 'pressed="true"', readonly: 'readonly="true"', required: 'required="true"', selected: 'selected="true"' }, aspectRatio: { auto: "auto", square: "1 / 1", video: "16 / 9", ...re }, backdropBlur: ({ theme: e }) => e("blur"), backdropBrightness: ({ theme: e }) => ({ ...e("brightness"), ...l2 }), backdropContrast: ({ theme: e }) => ({ ...e("contrast"), ...l2 }), backdropGrayscale: ({ theme: e }) => ({ ...e("grayscale"), ...l2 }), backdropHueRotate: ({ theme: e }) => ({ ...e("hueRotate"), ...w }), backdropInvert: ({ theme: e }) => ({ ...e("invert"), ...l2 }), backdropOpacity: ({ theme: e }) => ({ ...e("opacity"), ...l2 }), backdropSaturate: ({ theme: e }) => ({ ...e("saturate"), ...l2 }), backdropSepia: ({ theme: e }) => ({ ...e("sepia"), ...l2 }), backgroundColor: ({ theme: e }) => e("colors"), backgroundImage: { none: "none", "gradient-to-t": "linear-gradient(to top, var(--tw-gradient-stops))", "gradient-to-tr": "linear-gradient(to top right, var(--tw-gradient-stops))", "gradient-to-r": "linear-gradient(to right, var(--tw-gradient-stops))", "gradient-to-br": "linear-gradient(to bottom right, var(--tw-gradient-stops))", "gradient-to-b": "linear-gradient(to bottom, var(--tw-gradient-stops))", "gradient-to-bl": "linear-gradient(to bottom left, var(--tw-gradient-stops))", "gradient-to-l": "linear-gradient(to left, var(--tw-gradient-stops))", "gradient-to-tl": "linear-gradient(to top left, var(--tw-gradient-stops))" }, backgroundOpacity: ({ theme: e }) => e("opacity"), backgroundPosition: { bottom: "bottom", center: "center", left: "left", "left-bottom": "left bottom", "left-top": "left top", right: "right", "right-bottom": "right bottom", "right-top": "right top", top: "top" }, backgroundSize: { auto: "auto", cover: "cover", contain: "contain" }, blur: { 0: "0", none: "", sm: "4px", DEFAULT: "8px", md: "12px", lg: "16px", xl: "24px", "2xl": "40px", "3xl": "64px" }, borderColor: ({ theme: e }) => ({ DEFAULT: "currentcolor", ...e("colors") }), borderOpacity: ({ theme: e }) => e("opacity"), borderRadius: { none: "0px", sm: "0.125rem", DEFAULT: "0.25rem", md: "0.375rem", lg: "0.5rem", xl: "0.75rem", "2xl": "1rem", "3xl": "1.5rem", full: "9999px" }, borderSpacing: ({ theme: e }) => e("spacing"), borderWidth: { DEFAULT: "1px", 0: "0px", 2: "2px", 4: "4px", 8: "8px", ...f }, boxShadow: { sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)", DEFAULT: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)", md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)", lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)", xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)", "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)", inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)", none: "none" }, boxShadowColor: ({ theme: e }) => e("colors"), brightness: { 0: "0", 50: ".5", 75: ".75", 90: ".9", 95: ".95", 100: "1", 105: "1.05", 110: "1.1", 125: "1.25", 150: "1.5", 200: "2", ...l2 }, caretColor: ({ theme: e }) => e("colors"), colors: () => ({ ...l }), columns: { auto: "auto", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 10: "10", 11: "11", 12: "12", "3xs": "16rem", "2xs": "18rem", xs: "20rem", sm: "24rem", md: "28rem", lg: "32rem", xl: "36rem", "2xl": "42rem", "3xl": "48rem", "4xl": "56rem", "5xl": "64rem", "6xl": "72rem", "7xl": "80rem", ...g }, container: {}, content: { none: "none" }, contrast: { 0: "0", 50: ".5", 75: ".75", 100: "1", 125: "1.25", 150: "1.5", 200: "2", ...l2 }, cursor: { auto: "auto", default: "default", pointer: "pointer", wait: "wait", text: "text", move: "move", help: "help", "not-allowed": "not-allowed", none: "none", "context-menu": "context-menu", progress: "progress", cell: "cell", crosshair: "crosshair", "vertical-text": "vertical-text", alias: "alias", copy: "copy", "no-drop": "no-drop", grab: "grab", grabbing: "grabbing", "all-scroll": "all-scroll", "col-resize": "col-resize", "row-resize": "row-resize", "n-resize": "n-resize", "e-resize": "e-resize", "s-resize": "s-resize", "w-resize": "w-resize", "ne-resize": "ne-resize", "nw-resize": "nw-resize", "se-resize": "se-resize", "sw-resize": "sw-resize", "ew-resize": "ew-resize", "ns-resize": "ns-resize", "nesw-resize": "nesw-resize", "nwse-resize": "nwse-resize", "zoom-in": "zoom-in", "zoom-out": "zoom-out" }, divideColor: ({ theme: e }) => e("borderColor"), divideOpacity: ({ theme: e }) => e("borderOpacity"), divideWidth: ({ theme: e }) => ({ ...e("borderWidth"), ...f }), dropShadow: { sm: "0 1px 1px rgb(0 0 0 / 0.05)", DEFAULT: ["0 1px 2px rgb(0 0 0 / 0.1)", "0 1px 1px rgb(0 0 0 / 0.06)"], md: ["0 4px 3px rgb(0 0 0 / 0.07)", "0 2px 2px rgb(0 0 0 / 0.06)"], lg: ["0 10px 8px rgb(0 0 0 / 0.04)", "0 4px 3px rgb(0 0 0 / 0.1)"], xl: ["0 20px 13px rgb(0 0 0 / 0.03)", "0 8px 5px rgb(0 0 0 / 0.08)"], "2xl": "0 25px 25px rgb(0 0 0 / 0.15)", none: "0 0 #0000" }, fill: ({ theme: e }) => e("colors"), flex: { 1: "1 1 0%", auto: "1 1 auto", initial: "0 1 auto", none: "none" }, flexBasis: ({ theme: e }) => ({ auto: "auto", "1/2": "50%", "1/3": "33.333333%", "2/3": "66.666667%", "1/4": "25%", "2/4": "50%", "3/4": "75%", "1/5": "20%", "2/5": "40%", "3/5": "60%", "4/5": "80%", "1/6": "16.666667%", "2/6": "33.333333%", "3/6": "50%", "4/6": "66.666667%", "5/6": "83.333333%", "1/12": "8.333333%", "2/12": "16.666667%", "3/12": "25%", "4/12": "33.333333%", "5/12": "41.666667%", "6/12": "50%", "7/12": "58.333333%", "8/12": "66.666667%", "9/12": "75%", "10/12": "83.333333%", "11/12": "91.666667%", full: "100%", ...e("spacing") }), flexGrow: { 0: "0", DEFAULT: "1", ...g }, flexShrink: { 0: "0", DEFAULT: "1", ...g }, fontFamily: { sans: ["ui-sans-serif", "system-ui", "sans-serif", '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'], serif: ["ui-serif", "Georgia", "Cambria", '"Times New Roman"', "Times", "serif"], mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", '"Liberation Mono"', '"Courier New"', "monospace"] }, fontSize: { xs: ["0.75rem", { lineHeight: "1rem" }], sm: ["0.875rem", { lineHeight: "1.25rem" }], base: ["1rem", { lineHeight: "1.5rem" }], lg: ["1.125rem", { lineHeight: "1.75rem" }], xl: ["1.25rem", { lineHeight: "1.75rem" }], "2xl": ["1.5rem", { lineHeight: "2rem" }], "3xl": ["1.875rem", { lineHeight: "2.25rem" }], "4xl": ["2.25rem", { lineHeight: "2.5rem" }], "5xl": ["3rem", { lineHeight: "1" }], "6xl": ["3.75rem", { lineHeight: "1" }], "7xl": ["4.5rem", { lineHeight: "1" }], "8xl": ["6rem", { lineHeight: "1" }], "9xl": ["8rem", { lineHeight: "1" }] }, fontWeight: { thin: "100", extralight: "200", light: "300", normal: "400", medium: "500", semibold: "600", bold: "700", extrabold: "800", black: "900" }, gap: ({ theme: e }) => e("spacing"), gradientColorStops: ({ theme: e }) => e("colors"), gradientColorStopPositions: { "0%": "0%", "5%": "5%", "10%": "10%", "15%": "15%", "20%": "20%", "25%": "25%", "30%": "30%", "35%": "35%", "40%": "40%", "45%": "45%", "50%": "50%", "55%": "55%", "60%": "60%", "65%": "65%", "70%": "70%", "75%": "75%", "80%": "80%", "85%": "85%", "90%": "90%", "95%": "95%", "100%": "100%", ...l2 }, grayscale: { 0: "0", DEFAULT: "100%", ...l2 }, gridAutoColumns: { auto: "auto", min: "min-content", max: "max-content", fr: "minmax(0, 1fr)" }, gridAutoRows: { auto: "auto", min: "min-content", max: "max-content", fr: "minmax(0, 1fr)" }, gridColumn: { auto: "auto", "span-1": "span 1 / span 1", "span-2": "span 2 / span 2", "span-3": "span 3 / span 3", "span-4": "span 4 / span 4", "span-5": "span 5 / span 5", "span-6": "span 6 / span 6", "span-7": "span 7 / span 7", "span-8": "span 8 / span 8", "span-9": "span 9 / span 9", "span-10": "span 10 / span 10", "span-11": "span 11 / span 11", "span-12": "span 12 / span 12", "span-full": "1 / -1" }, gridColumnEnd: { auto: "auto", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 10: "10", 11: "11", 12: "12", 13: "13", ...g }, gridColumnStart: { auto: "auto", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 10: "10", 11: "11", 12: "12", 13: "13", ...g }, gridRow: { auto: "auto", "span-1": "span 1 / span 1", "span-2": "span 2 / span 2", "span-3": "span 3 / span 3", "span-4": "span 4 / span 4", "span-5": "span 5 / span 5", "span-6": "span 6 / span 6", "span-7": "span 7 / span 7", "span-8": "span 8 / span 8", "span-9": "span 9 / span 9", "span-10": "span 10 / span 10", "span-11": "span 11 / span 11", "span-12": "span 12 / span 12", "span-full": "1 / -1" }, gridRowEnd: { auto: "auto", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 10: "10", 11: "11", 12: "12", 13: "13", ...g }, gridRowStart: { auto: "auto", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 10: "10", 11: "11", 12: "12", 13: "13", ...g }, gridTemplateColumns: { none: "none", subgrid: "subgrid", 1: "repeat(1, minmax(0, 1fr))", 2: "repeat(2, minmax(0, 1fr))", 3: "repeat(3, minmax(0, 1fr))", 4: "repeat(4, minmax(0, 1fr))", 5: "repeat(5, minmax(0, 1fr))", 6: "repeat(6, minmax(0, 1fr))", 7: "repeat(7, minmax(0, 1fr))", 8: "repeat(8, minmax(0, 1fr))", 9: "repeat(9, minmax(0, 1fr))", 10: "repeat(10, minmax(0, 1fr))", 11: "repeat(11, minmax(0, 1fr))", 12: "repeat(12, minmax(0, 1fr))", ...L }, gridTemplateRows: { none: "none", subgrid: "subgrid", 1: "repeat(1, minmax(0, 1fr))", 2: "repeat(2, minmax(0, 1fr))", 3: "repeat(3, minmax(0, 1fr))", 4: "repeat(4, minmax(0, 1fr))", 5: "repeat(5, minmax(0, 1fr))", 6: "repeat(6, minmax(0, 1fr))", 7: "repeat(7, minmax(0, 1fr))", 8: "repeat(8, minmax(0, 1fr))", 9: "repeat(9, minmax(0, 1fr))", 10: "repeat(10, minmax(0, 1fr))", 11: "repeat(11, minmax(0, 1fr))", 12: "repeat(12, minmax(0, 1fr))", ...L }, height: ({ theme: e }) => ({ auto: "auto", "1/2": "50%", "1/3": "33.333333%", "2/3": "66.666667%", "1/4": "25%", "2/4": "50%", "3/4": "75%", "1/5": "20%", "2/5": "40%", "3/5": "60%", "4/5": "80%", "1/6": "16.666667%", "2/6": "33.333333%", "3/6": "50%", "4/6": "66.666667%", "5/6": "83.333333%", full: "100%", screen: "100vh", svh: "100svh", lvh: "100lvh", dvh: "100dvh", min: "min-content", max: "max-content", fit: "fit-content", ...e("spacing") }), hueRotate: { 0: "0deg", 15: "15deg", 30: "30deg", 60: "60deg", 90: "90deg", 180: "180deg", ...w }, inset: ({ theme: e }) => ({ auto: "auto", "1/2": "50%", "1/3": "33.333333%", "2/3": "66.666667%", "1/4": "25%", "2/4": "50%", "3/4": "75%", full: "100%", ...e("spacing") }), invert: { 0: "0", DEFAULT: "100%", ...l2 }, keyframes: { spin: { to: { transform: "rotate(360deg)" } }, ping: { "75%, 100%": { transform: "scale(2)", opacity: "0" } }, pulse: { "50%": { opacity: ".5" } }, bounce: { "0%, 100%": { transform: "translateY(-25%)", animationTimingFunction: "cubic-bezier(0.8,0,1,1)" }, "50%": { transform: "none", animationTimingFunction: "cubic-bezier(0,0,0.2,1)" } } }, letterSpacing: { tighter: "-0.05em", tight: "-0.025em", normal: "0em", wide: "0.025em", wider: "0.05em", widest: "0.1em" }, lineHeight: { none: "1", tight: "1.25", snug: "1.375", normal: "1.5", relaxed: "1.625", loose: "2", 3: ".75rem", 4: "1rem", 5: "1.25rem", 6: "1.5rem", 7: "1.75rem", 8: "2rem", 9: "2.25rem", 10: "2.5rem" }, listStyleType: { none: "none", disc: "disc", decimal: "decimal" }, listStyleImage: { none: "none" }, margin: ({ theme: e }) => ({ auto: "auto", ...e("spacing") }), lineClamp: { 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", ...g }, maxHeight: ({ theme: e }) => ({ none: "none", full: "100%", screen: "100vh", svh: "100svh", lvh: "100lvh", dvh: "100dvh", min: "min-content", max: "max-content", fit: "fit-content", ...e("spacing") }), maxWidth: ({ theme: e }) => ({ none: "none", xs: "20rem", sm: "24rem", md: "28rem", lg: "32rem", xl: "36rem", "2xl": "42rem", "3xl": "48rem", "4xl": "56rem", "5xl": "64rem", "6xl": "72rem", "7xl": "80rem", full: "100%", min: "min-content", max: "max-content", fit: "fit-content", prose: "65ch", ...e("spacing") }), minHeight: ({ theme: e }) => ({ full: "100%", screen: "100vh", svh: "100svh", lvh: "100lvh", dvh: "100dvh", min: "min-content", max: "max-content", fit: "fit-content", ...e("spacing") }), minWidth: ({ theme: e }) => ({ full: "100%", min: "min-content", max: "max-content", fit: "fit-content", ...e("spacing") }), objectPosition: { bottom: "bottom", center: "center", left: "left", "left-bottom": "left bottom", "left-top": "left top", right: "right", "right-bottom": "right bottom", "right-top": "right top", top: "top" }, opacity: { 0: "0", 5: "0.05", 10: "0.1", 15: "0.15", 20: "0.2", 25: "0.25", 30: "0.3", 35: "0.35", 40: "0.4", 45: "0.45", 50: "0.5", 55: "0.55", 60: "0.6", 65: "0.65", 70: "0.7", 75: "0.75", 80: "0.8", 85: "0.85", 90: "0.9", 95: "0.95", 100: "1", ...l2 }, order: { first: "-9999", last: "9999", none: "0", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 10: "10", 11: "11", 12: "12", ...g }, outlineColor: ({ theme: e }) => e("colors"), outlineOffset: { 0: "0px", 1: "1px", 2: "2px", 4: "4px", 8: "8px", ...f }, outlineWidth: { 0: "0px", 1: "1px", 2: "2px", 4: "4px", 8: "8px", ...f }, padding: ({ theme: e }) => e("spacing"), placeholderColor: ({ theme: e }) => e("colors"), placeholderOpacity: ({ theme: e }) => e("opacity"), ringColor: ({ theme: e }) => ({ DEFAULT: "currentcolor", ...e("colors") }), ringOffsetColor: ({ theme: e }) => e("colors"), ringOffsetWidth: { 0: "0px", 1: "1px", 2: "2px", 4: "4px", 8: "8px", ...f }, ringOpacity: ({ theme: e }) => ({ DEFAULT: "0.5", ...e("opacity") }), ringWidth: { DEFAULT: "3px", 0: "0px", 1: "1px", 2: "2px", 4: "4px", 8: "8px", ...f }, rotate: { 0: "0deg", 1: "1deg", 2: "2deg", 3: "3deg", 6: "6deg", 12: "12deg", 45: "45deg", 90: "90deg", 180: "180deg", ...w }, saturate: { 0: "0", 50: ".5", 100: "1", 150: "1.5", 200: "2", ...l2 }, scale: { 0: "0", 50: ".5", 75: ".75", 90: ".9", 95: ".95", 100: "1", 105: "1.05", 110: "1.1", 125: "1.25", 150: "1.5", ...l2 }, screens: { sm: "40rem", md: "48rem", lg: "64rem", xl: "80rem", "2xl": "96rem" }, scrollMargin: ({ theme: e }) => e("spacing"), scrollPadding: ({ theme: e }) => e("spacing"), sepia: { 0: "0", DEFAULT: "100%", ...l2 }, skew: { 0: "0deg", 1: "1deg", 2: "2deg", 3: "3deg", 6: "6deg", 12: "12deg", ...w }, space: ({ theme: e }) => e("spacing"), spacing: { px: "1px", 0: "0px", 0.5: "0.125rem", 1: "0.25rem", 1.5: "0.375rem", 2: "0.5rem", 2.5: "0.625rem", 3: "0.75rem", 3.5: "0.875rem", 4: "1rem", 5: "1.25rem", 6: "1.5rem", 7: "1.75rem", 8: "2rem", 9: "2.25rem", 10: "2.5rem", 11: "2.75rem", 12: "3rem", 14: "3.5rem", 16: "4rem", 20: "5rem", 24: "6rem", 28: "7rem", 32: "8rem", 36: "9rem", 40: "10rem", 44: "11rem", 48: "12rem", 52: "13rem", 56: "14rem", 60: "15rem", 64: "16rem", 72: "18rem", 80: "20rem", 96: "24rem" }, stroke: ({ theme: e }) => ({ none: "none", ...e("colors") }), strokeWidth: { 0: "0", 1: "1", 2: "2", ...g }, supports: {}, data: {}, textColor: ({ theme: e }) => e("colors"), textDecorationColor: ({ theme: e }) => e("colors"), textDecorationThickness: { auto: "auto", "from-font": "from-font", 0: "0px", 1: "1px", 2: "2px", 4: "4px", 8: "8px", ...f }, textIndent: ({ theme: e }) => e("spacing"), textOpacity: ({ theme: e }) => e("opacity"), textUnderlineOffset: { auto: "auto", 0: "0px", 1: "1px", 2: "2px", 4: "4px", 8: "8px", ...f }, transformOrigin: { center: "center", top: "top", "top-right": "top right", right: "right", "bottom-right": "bottom right", bottom: "bottom", "bottom-left": "bottom left", left: "left", "top-left": "top left" }, transitionDelay: { 0: "0s", 75: "75ms", 100: "100ms", 150: "150ms", 200: "200ms", 300: "300ms", 500: "500ms", 700: "700ms", 1e3: "1000ms", ...O }, transitionDuration: { DEFAULT: "150ms", 0: "0s", 75: "75ms", 100: "100ms", 150: "150ms", 200: "200ms", 300: "300ms", 500: "500ms", 700: "700ms", 1e3: "1000ms", ...O }, transitionProperty: { none: "none", all: "all", DEFAULT: "color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter", colors: "color, background-color, border-color, outline-color, text-decoration-color, fill, stroke", opacity: "opacity", shadow: "box-shadow", transform: "transform" }, transitionTimingFunction: { DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)", linear: "linear", in: "cubic-bezier(0.4, 0, 1, 1)", out: "cubic-bezier(0, 0, 0.2, 1)", "in-out": "cubic-bezier(0.4, 0, 0.2, 1)" }, translate: ({ theme: e }) => ({ "1/2": "50%", "1/3": "33.333333%", "2/3": "66.666667%", "1/4": "25%", "2/4": "50%", "3/4": "75%", full: "100%", ...e("spacing") }), size: ({ theme: e }) => ({ auto: "auto", "1/2": "50%", "1/3": "33.333333%", "2/3": "66.666667%", "1/4": "25%", "2/4": "50%", "3/4": "75%", "1/5": "20%", "2/5": "40%", "3/5": "60%", "4/5": "80%", "1/6": "16.666667%", "2/6": "33.333333%", "3/6": "50%", "4/6": "66.666667%", "5/6": "83.333333%", "1/12": "8.333333%", "2/12": "16.666667%", "3/12": "25%", "4/12": "33.333333%", "5/12": "41.666667%", "6/12": "50%", "7/12": "58.333333%", "8/12": "66.666667%", "9/12": "75%", "10/12": "83.333333%", "11/12": "91.666667%", full: "100%", min: "min-content", max: "max-content", fit: "fit-content", ...e("spacing") }), width: ({ theme: e }) => ({ auto: "auto", "1/2": "50%", "1/3": "33.333333%", "2/3": "66.666667%", "1/4": "25%", "2/4": "50%", "3/4": "75%", "1/5": "20%", "2/5": "40%", "3/5": "60%", "4/5": "80%", "1/6": "16.666667%", "2/6": "33.333333%", "3/6": "50%", "4/6": "66.666667%", "5/6": "83.333333%", "1/12": "8.333333%", "2/12": "16.666667%", "3/12": "25%", "4/12": "33.333333%", "5/12": "41.666667%", "6/12": "50%", "7/12": "58.333333%", "8/12": "66.666667%", "9/12": "75%", "10/12": "83.333333%", "11/12": "91.666667%", full: "100%", screen: "100vw", svw: "100svw", lvw: "100lvw", dvw: "100dvw", min: "min-content", max: "max-content", fit: "fit-content", ...e("spacing") }), willChange: { auto: "auto", scroll: "scroll-position", contents: "contents", transform: "transform" }, zIndex: { auto: "auto", 0: "0", 10: "10", 20: "20", 30: "30", 40: "40", 50: "50", ...g } };

  // node_modules/tailwindcss/dist/chunk-CT46QCH7.mjs
  var ir = "4.1.18";
  function tt(t2) {
    let r = [0];
    for (let n = 0; n < t2.length; n++) t2.charCodeAt(n) === 10 && r.push(n + 1);
    function i(n) {
      let s = 0, a = r.length;
      for (; a > 0; ) {
        let u2 = (a | 0) >> 1, f2 = s + u2;
        r[f2] <= n ? (s = f2 + 1, a = a - u2 - 1) : a = u2;
      }
      s -= 1;
      let p = n - r[s];
      return { line: s + 1, column: p };
    }
    function e({ line: n, column: s }) {
      n -= 1, n = Math.min(Math.max(n, 0), r.length - 1);
      let a = r[n], p = r[n + 1] ?? a;
      return Math.min(Math.max(a + s, 0), p);
    }
    return { find: i, findOffset: e };
  }
  var Fe = 92;
  var rt = 47;
  var it = 42;
  var nr = 34;
  var ar = 39;
  var Yi = 58;
  var nt = 59;
  var le = 10;
  var at = 13;
  var We = 32;
  var Be = 9;
  var or = 123;
  var $t = 125;
  var Vt = 40;
  var lr = 41;
  var Gi = 91;
  var qi = 93;
  var sr = 45;
  var St = 64;
  var Zi = 33;
  var se = class t extends Error {
    loc;
    constructor(r, i) {
      if (i) {
        let e = i[0], n = tt(e.code).find(i[1]);
        r = `${e.file}:${n.line}:${n.column + 1}: ${r}`;
      }
      super(r), this.name = "CssSyntaxError", this.loc = i, Error.captureStackTrace && Error.captureStackTrace(this, t);
    }
  };
  function $e(t2, r) {
    let i = r?.from ? { file: r.from, code: t2 } : null;
    t2[0] === "\uFEFF" && (t2 = " " + t2.slice(1));
    let e = [], n = [], s = [], a = null, p = null, u2 = "", f2 = "", m = 0, d2;
    for (let c = 0; c < t2.length; c++) {
      let w2 = t2.charCodeAt(c);
      if (!(w2 === at && (d2 = t2.charCodeAt(c + 1), d2 === le))) if (w2 === Fe) u2 === "" && (m = c), u2 += t2.slice(c, c + 2), c += 1;
      else if (w2 === rt && t2.charCodeAt(c + 1) === it) {
        let h2 = c;
        for (let x2 = c + 2; x2 < t2.length; x2++) if (d2 = t2.charCodeAt(x2), d2 === Fe) x2 += 1;
        else if (d2 === it && t2.charCodeAt(x2 + 1) === rt) {
          c = x2 + 1;
          break;
        }
        let y2 = t2.slice(h2, c + 1);
        if (y2.charCodeAt(2) === Zi) {
          let x2 = ot(y2.slice(2, -2));
          n.push(x2), i && (x2.src = [i, h2, c + 1], x2.dst = [i, h2, c + 1]);
        }
      } else if (w2 === ar || w2 === nr) {
        let h2 = ur(t2, c, w2, i);
        u2 += t2.slice(c, h2 + 1), c = h2;
      } else {
        if ((w2 === We || w2 === le || w2 === Be) && (d2 = t2.charCodeAt(c + 1)) && (d2 === We || d2 === le || d2 === Be || d2 === at && (d2 = t2.charCodeAt(c + 2)) && d2 == le)) continue;
        if (w2 === le) {
          if (u2.length === 0) continue;
          d2 = u2.charCodeAt(u2.length - 1), d2 !== We && d2 !== le && d2 !== Be && (u2 += " ");
        } else if (w2 === sr && t2.charCodeAt(c + 1) === sr && u2.length === 0) {
          let h2 = "", y2 = c, x2 = -1;
          for (let A2 = c + 2; A2 < t2.length; A2++) if (d2 = t2.charCodeAt(A2), d2 === Fe) A2 += 1;
          else if (d2 === ar || d2 === nr) A2 = ur(t2, A2, d2, i);
          else if (d2 === rt && t2.charCodeAt(A2 + 1) === it) {
            for (let k = A2 + 2; k < t2.length; k++) if (d2 = t2.charCodeAt(k), d2 === Fe) k += 1;
            else if (d2 === it && t2.charCodeAt(k + 1) === rt) {
              A2 = k + 1;
              break;
            }
          } else if (x2 === -1 && d2 === Yi) x2 = u2.length + A2 - y2;
          else if (d2 === nt && h2.length === 0) {
            u2 += t2.slice(y2, A2), c = A2;
            break;
          } else if (d2 === Vt) h2 += ")";
          else if (d2 === Gi) h2 += "]";
          else if (d2 === or) h2 += "}";
          else if ((d2 === $t || t2.length - 1 === A2) && h2.length === 0) {
            c = A2 - 1, u2 += t2.slice(y2, A2);
            break;
          } else (d2 === lr || d2 === qi || d2 === $t) && h2.length > 0 && t2[A2] === h2[h2.length - 1] && (h2 = h2.slice(0, -1));
          let $2 = Tt(u2, x2);
          if (!$2) throw new se("Invalid custom property, expected a value", i ? [i, y2, c] : null);
          i && ($2.src = [i, y2, c], $2.dst = [i, y2, c]), a ? a.nodes.push($2) : e.push($2), u2 = "";
        } else if (w2 === nt && u2.charCodeAt(0) === St) p = Ye(u2), i && (p.src = [i, m, c], p.dst = [i, m, c]), a ? a.nodes.push(p) : e.push(p), u2 = "", p = null;
        else if (w2 === nt && f2[f2.length - 1] !== ")") {
          let h2 = Tt(u2);
          if (!h2) {
            if (u2.length === 0) continue;
            throw new se(`Invalid declaration: \`${u2.trim()}\``, i ? [i, m, c] : null);
          }
          i && (h2.src = [i, m, c], h2.dst = [i, m, c]), a ? a.nodes.push(h2) : e.push(h2), u2 = "";
        } else if (w2 === or && f2[f2.length - 1] !== ")") f2 += "}", p = J2(u2.trim()), i && (p.src = [i, m, c], p.dst = [i, m, c]), a && a.nodes.push(p), s.push(a), a = p, u2 = "", p = null;
        else if (w2 === $t && f2[f2.length - 1] !== ")") {
          if (f2 === "") throw new se("Missing opening {", i ? [i, c, c] : null);
          if (f2 = f2.slice(0, -1), u2.length > 0) if (u2.charCodeAt(0) === St) p = Ye(u2), i && (p.src = [i, m, c], p.dst = [i, m, c]), a ? a.nodes.push(p) : e.push(p), u2 = "", p = null;
          else {
            let y2 = u2.indexOf(":");
            if (a) {
              let x2 = Tt(u2, y2);
              if (!x2) throw new se(`Invalid declaration: \`${u2.trim()}\``, i ? [i, m, c] : null);
              i && (x2.src = [i, m, c], x2.dst = [i, m, c]), a.nodes.push(x2);
            }
          }
          let h2 = s.pop() ?? null;
          h2 === null && a && e.push(a), a = h2, u2 = "", p = null;
        } else if (w2 === Vt) f2 += ")", u2 += "(";
        else if (w2 === lr) {
          if (f2[f2.length - 1] !== ")") throw new se("Missing opening (", i ? [i, c, c] : null);
          f2 = f2.slice(0, -1), u2 += ")";
        } else {
          if (u2.length === 0 && (w2 === We || w2 === le || w2 === Be)) continue;
          u2 === "" && (m = c), u2 += String.fromCharCode(w2);
        }
      }
    }
    if (u2.charCodeAt(0) === St) {
      let c = Ye(u2);
      i && (c.src = [i, m, t2.length], c.dst = [i, m, t2.length]), e.push(c);
    }
    if (f2.length > 0 && a) {
      if (a.kind === "rule") throw new se(`Missing closing } at ${a.selector}`, a.src ? [a.src[0], a.src[1], a.src[1]] : null);
      if (a.kind === "at-rule") throw new se(`Missing closing } at ${a.name} ${a.params}`, a.src ? [a.src[0], a.src[1], a.src[1]] : null);
    }
    return n.length > 0 ? n.concat(e) : e;
  }
  function Ye(t2, r = []) {
    let i = t2, e = "";
    for (let n = 5; n < t2.length; n++) {
      let s = t2.charCodeAt(n);
      if (s === We || s === Be || s === Vt) {
        i = t2.slice(0, n), e = t2.slice(n);
        break;
      }
    }
    return F2(i.trim(), e.trim(), r);
  }
  function Tt(t2, r = t2.indexOf(":")) {
    if (r === -1) return null;
    let i = t2.indexOf("!important", r + 1);
    return o(t2.slice(0, r).trim(), t2.slice(r + 1, i === -1 ? t2.length : i).trim(), i !== -1);
  }
  function ur(t2, r, i, e = null) {
    let n;
    for (let s = r + 1; s < t2.length; s++) if (n = t2.charCodeAt(s), n === Fe) s += 1;
    else {
      if (n === i) return s;
      if (n === nt && (t2.charCodeAt(s + 1) === le || t2.charCodeAt(s + 1) === at && t2.charCodeAt(s + 2) === le)) throw new se(`Unterminated string: ${t2.slice(r, s + 1) + String.fromCharCode(i)}`, e ? [e, r, s + 1] : null);
      if (n === le || n === at && t2.charCodeAt(s + 1) === le) throw new se(`Unterminated string: ${t2.slice(r, s) + String.fromCharCode(i)}`, e ? [e, r, s + 1] : null);
    }
    return r;
  }
  function ye(t2) {
    if (arguments.length === 0) throw new TypeError("`CSS.escape` requires an argument.");
    let r = String(t2), i = r.length, e = -1, n, s = "", a = r.charCodeAt(0);
    if (i === 1 && a === 45) return "\\" + r;
    for (; ++e < i; ) {
      if (n = r.charCodeAt(e), n === 0) {
        s += "\uFFFD";
        continue;
      }
      if (n >= 1 && n <= 31 || n === 127 || e === 0 && n >= 48 && n <= 57 || e === 1 && n >= 48 && n <= 57 && a === 45) {
        s += "\\" + n.toString(16) + " ";
        continue;
      }
      if (n >= 128 || n === 45 || n === 95 || n >= 48 && n <= 57 || n >= 65 && n <= 90 || n >= 97 && n <= 122) {
        s += r.charAt(e);
        continue;
      }
      s += "\\" + r.charAt(e);
    }
    return s;
  }
  function Se(t2) {
    return t2.replace(/\\([\dA-Fa-f]{1,6}[\t\n\f\r ]?|[\S\s])/g, (r) => r.length > 2 ? String.fromCodePoint(Number.parseInt(r.slice(1).trim(), 16)) : r[1]);
  }
  var cr = /* @__PURE__ */ new Map([["--font", ["--font-weight", "--font-size"]], ["--inset", ["--inset-shadow", "--inset-ring"]], ["--text", ["--text-color", "--text-decoration-color", "--text-decoration-thickness", "--text-indent", "--text-shadow", "--text-underline-offset"]], ["--grid-column", ["--grid-column-start", "--grid-column-end"]], ["--grid-row", ["--grid-row-start", "--grid-row-end"]]]);
  function fr(t2, r) {
    return (cr.get(r) ?? []).some((i) => t2 === i || t2.startsWith(`${i}-`));
  }
  var lt = class {
    constructor(r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Set([])) {
      this.values = r;
      this.keyframes = i;
    }
    prefix = null;
    get size() {
      return this.values.size;
    }
    add(r, i, e = 0, n) {
      if (r.endsWith("-*")) {
        if (i !== "initial") throw new Error(`Invalid theme value \`${i}\` for namespace \`${r}\``);
        r === "--*" ? this.values.clear() : this.clearNamespace(r.slice(0, -2), 0);
      }
      if (e & 4) {
        let s = this.values.get(r);
        if (s && !(s.options & 4)) return;
      }
      i === "initial" ? this.values.delete(r) : this.values.set(r, { value: i, options: e, src: n });
    }
    keysInNamespaces(r) {
      let i = [];
      for (let e of r) {
        let n = `${e}-`;
        for (let s of this.values.keys()) s.startsWith(n) && s.indexOf("--", 2) === -1 && (fr(s, e) || i.push(s.slice(n.length)));
      }
      return i;
    }
    get(r) {
      for (let i of r) {
        let e = this.values.get(i);
        if (e) return e.value;
      }
      return null;
    }
    hasDefault(r) {
      return (this.getOptions(r) & 4) === 4;
    }
    getOptions(r) {
      return r = Se(this.#r(r)), this.values.get(r)?.options ?? 0;
    }
    entries() {
      return this.prefix ? Array.from(this.values, (r) => (r[0] = this.prefixKey(r[0]), r)) : this.values.entries();
    }
    prefixKey(r) {
      return this.prefix ? `--${this.prefix}-${r.slice(2)}` : r;
    }
    #r(r) {
      return this.prefix ? `--${r.slice(3 + this.prefix.length)}` : r;
    }
    clearNamespace(r, i) {
      let e = cr.get(r) ?? [];
      e: for (let n of this.values.keys()) if (n.startsWith(r)) {
        if (i !== 0 && (this.getOptions(n) & i) !== i) continue;
        for (let s of e) if (n.startsWith(s)) continue e;
        this.values.delete(n);
      }
    }
    #e(r, i) {
      for (let e of i) {
        let n = r !== null ? `${e}-${r}` : e;
        if (!this.values.has(n)) if (r !== null && r.includes(".")) {
          if (n = `${e}-${r.replaceAll(".", "_")}`, !this.values.has(n)) continue;
        } else continue;
        if (!fr(n, e)) return n;
      }
      return null;
    }
    #t(r) {
      let i = this.values.get(r);
      if (!i) return null;
      let e = null;
      return i.options & 2 && (e = i.value), `var(${ye(this.prefixKey(r))}${e ? `, ${e}` : ""})`;
    }
    markUsedVariable(r) {
      let i = Se(this.#r(r)), e = this.values.get(i);
      if (!e) return false;
      let n = e.options & 16;
      return e.options |= 16, !n;
    }
    resolve(r, i, e = 0) {
      let n = this.#e(r, i);
      if (!n) return null;
      let s = this.values.get(n);
      return (e | s.options) & 1 ? s.value : this.#t(n);
    }
    resolveValue(r, i) {
      let e = this.#e(r, i);
      return e ? this.values.get(e).value : null;
    }
    resolveWith(r, i, e = []) {
      let n = this.#e(r, i);
      if (!n) return null;
      let s = {};
      for (let p of e) {
        let u2 = `${n}${p}`, f2 = this.values.get(u2);
        f2 && (f2.options & 1 ? s[p] = f2.value : s[p] = this.#t(u2));
      }
      let a = this.values.get(n);
      return a.options & 1 ? [a.value, s] : [this.#t(n), s];
    }
    namespace(r) {
      let i = /* @__PURE__ */ new Map(), e = `${r}-`;
      for (let [n, s] of this.values) n === r ? i.set(null, s.value) : n.startsWith(`${e}-`) ? i.set(n.slice(r.length), s.value) : n.startsWith(e) && i.set(n.slice(e.length), s.value);
      return i;
    }
    addKeyframes(r) {
      this.keyframes.add(r);
    }
    getKeyframes() {
      return Array.from(this.keyframes);
    }
  };
  var K2 = class extends Map {
    constructor(i) {
      super();
      this.factory = i;
    }
    get(i) {
      let e = super.get(i);
      return e === void 0 && (e = this.factory(i, this), this.set(i, e)), e;
    }
  };
  function ne(t2) {
    return { kind: "word", value: t2 };
  }
  function Hi(t2, r) {
    return { kind: "function", value: t2, nodes: r };
  }
  function Ji(t2) {
    return { kind: "separator", value: t2 };
  }
  function Z2(t2) {
    let r = "";
    for (let i of t2) switch (i.kind) {
      case "word":
      case "separator": {
        r += i.value;
        break;
      }
      case "function":
        r += i.value + "(" + Z2(i.nodes) + ")";
    }
    return r;
  }
  var pr = 92;
  var Qi = 41;
  var dr = 58;
  var mr = 44;
  var Xi = 34;
  var gr = 61;
  var hr = 62;
  var vr = 60;
  var wr = 10;
  var en = 40;
  var tn = 39;
  var rn = 47;
  var yr = 32;
  var kr = 9;
  function B2(t2) {
    t2 = t2.replaceAll(`\r
`, `
`);
    let r = [], i = [], e = null, n = "", s;
    for (let a = 0; a < t2.length; a++) {
      let p = t2.charCodeAt(a);
      switch (p) {
        case pr: {
          n += t2[a] + t2[a + 1], a++;
          break;
        }
        case rn: {
          if (n.length > 0) {
            let f2 = ne(n);
            e ? e.nodes.push(f2) : r.push(f2), n = "";
          }
          let u2 = ne(t2[a]);
          e ? e.nodes.push(u2) : r.push(u2);
          break;
        }
        case dr:
        case mr:
        case gr:
        case hr:
        case vr:
        case wr:
        case yr:
        case kr: {
          if (n.length > 0) {
            let d2 = ne(n);
            e ? e.nodes.push(d2) : r.push(d2), n = "";
          }
          let u2 = a, f2 = a + 1;
          for (; f2 < t2.length && (s = t2.charCodeAt(f2), !(s !== dr && s !== mr && s !== gr && s !== hr && s !== vr && s !== wr && s !== yr && s !== kr)); f2++) ;
          a = f2 - 1;
          let m = Ji(t2.slice(u2, f2));
          e ? e.nodes.push(m) : r.push(m);
          break;
        }
        case tn:
        case Xi: {
          let u2 = a;
          for (let f2 = a + 1; f2 < t2.length; f2++) if (s = t2.charCodeAt(f2), s === pr) f2 += 1;
          else if (s === p) {
            a = f2;
            break;
          }
          n += t2.slice(u2, a + 1);
          break;
        }
        case en: {
          let u2 = Hi(n, []);
          n = "", e ? e.nodes.push(u2) : r.push(u2), i.push(u2), e = u2;
          break;
        }
        case Qi: {
          let u2 = i.pop();
          if (n.length > 0) {
            let f2 = ne(n);
            u2?.nodes.push(f2), n = "";
          }
          i.length > 0 ? e = i[i.length - 1] : e = null;
          break;
        }
        default:
          n += String.fromCharCode(p);
      }
    }
    return n.length > 0 && r.push(ne(n)), r;
  }
  var Et = ((a) => (a[a.Continue = 0] = "Continue", a[a.Skip = 1] = "Skip", a[a.Stop = 2] = "Stop", a[a.Replace = 3] = "Replace", a[a.ReplaceSkip = 4] = "ReplaceSkip", a[a.ReplaceStop = 5] = "ReplaceStop", a))(Et || {});
  var E2 = { Continue: { kind: 0 }, Skip: { kind: 1 }, Stop: { kind: 2 }, Replace: (t2) => ({ kind: 3, nodes: Array.isArray(t2) ? t2 : [t2] }), ReplaceSkip: (t2) => ({ kind: 4, nodes: Array.isArray(t2) ? t2 : [t2] }), ReplaceStop: (t2) => ({ kind: 5, nodes: Array.isArray(t2) ? t2 : [t2] }) };
  function I2(t2, r) {
    typeof r == "function" ? br(t2, r) : br(t2, r.enter, r.exit);
  }
  function br(t2, r = () => E2.Continue, i = () => E2.Continue) {
    let e = [[t2, 0, null]], n = { parent: null, depth: 0, path() {
      let s = [];
      for (let a = 1; a < e.length; a++) {
        let p = e[a][2];
        p && s.push(p);
      }
      return s;
    } };
    for (; e.length > 0; ) {
      let s = e.length - 1, a = e[s], p = a[0], u2 = a[1], f2 = a[2];
      if (u2 >= p.length) {
        e.pop();
        continue;
      }
      if (n.parent = f2, n.depth = s, u2 >= 0) {
        let w2 = p[u2], h2 = r(w2, n) ?? E2.Continue;
        switch (h2.kind) {
          case 0: {
            w2.nodes && w2.nodes.length > 0 && e.push([w2.nodes, 0, w2]), a[1] = ~u2;
            continue;
          }
          case 2:
            return;
          case 1: {
            a[1] = ~u2;
            continue;
          }
          case 3: {
            p.splice(u2, 1, ...h2.nodes);
            continue;
          }
          case 5: {
            p.splice(u2, 1, ...h2.nodes);
            return;
          }
          case 4: {
            p.splice(u2, 1, ...h2.nodes), a[1] += h2.nodes.length;
            continue;
          }
          default:
            throw new Error(`Invalid \`WalkAction.${Et[h2.kind] ?? `Unknown(${h2.kind})`}\` in enter.`);
        }
      }
      let m = ~u2, d2 = p[m], c = i(d2, n) ?? E2.Continue;
      switch (c.kind) {
        case 0:
          a[1] = m + 1;
          continue;
        case 2:
          return;
        case 3: {
          p.splice(m, 1, ...c.nodes), a[1] = m + c.nodes.length;
          continue;
        }
        case 5: {
          p.splice(m, 1, ...c.nodes);
          return;
        }
        case 4: {
          p.splice(m, 1, ...c.nodes), a[1] = m + c.nodes.length;
          continue;
        }
        default:
          throw new Error(`Invalid \`WalkAction.${Et[c.kind] ?? `Unknown(${c.kind})`}\` in exit.`);
      }
    }
  }
  function st(t2) {
    let r = [];
    return I2(B2(t2), (i) => {
      if (!(i.kind !== "function" || i.value !== "var")) return I2(i.nodes, (e) => {
        e.kind !== "word" || e.value[0] !== "-" || e.value[1] !== "-" || r.push(e.value);
      }), E2.Skip;
    }), r;
  }
  var nn = 64;
  function G2(t2, r = []) {
    return { kind: "rule", selector: t2, nodes: r };
  }
  function F2(t2, r = "", i = []) {
    return { kind: "at-rule", name: t2, params: r, nodes: i };
  }
  function J2(t2, r = []) {
    return t2.charCodeAt(0) === nn ? Ye(t2, r) : G2(t2, r);
  }
  function o(t2, r, i = false) {
    return { kind: "declaration", property: t2, value: r, important: i };
  }
  function ot(t2) {
    return { kind: "comment", value: t2 };
  }
  function ce(t2, r) {
    return { kind: "context", context: t2, nodes: r };
  }
  function W2(t2) {
    return { kind: "at-root", nodes: t2 };
  }
  function ee2(t2) {
    switch (t2.kind) {
      case "rule":
        return { kind: t2.kind, selector: t2.selector, nodes: t2.nodes.map(ee2), src: t2.src, dst: t2.dst };
      case "at-rule":
        return { kind: t2.kind, name: t2.name, params: t2.params, nodes: t2.nodes.map(ee2), src: t2.src, dst: t2.dst };
      case "at-root":
        return { kind: t2.kind, nodes: t2.nodes.map(ee2), src: t2.src, dst: t2.dst };
      case "context":
        return { kind: t2.kind, context: { ...t2.context }, nodes: t2.nodes.map(ee2), src: t2.src, dst: t2.dst };
      case "declaration":
        return { kind: t2.kind, property: t2.property, value: t2.value, important: t2.important, src: t2.src, dst: t2.dst };
      case "comment":
        return { kind: t2.kind, value: t2.value, src: t2.src, dst: t2.dst };
      default:
        throw new Error(`Unknown node kind: ${t2.kind}`);
    }
  }
  function qe(t2) {
    return { depth: t2.depth, get context() {
      let r = {};
      for (let i of t2.path()) i.kind === "context" && Object.assign(r, i.context);
      return Object.defineProperty(this, "context", { value: r }), r;
    }, get parent() {
      let r = this.path().pop() ?? null;
      return Object.defineProperty(this, "parent", { value: r }), r;
    }, path() {
      return t2.path().filter((r) => r.kind !== "context");
    } };
  }
  function Te(t2, r, i = 3) {
    let e = [], n = /* @__PURE__ */ new Set(), s = new K2(() => /* @__PURE__ */ new Set()), a = new K2(() => /* @__PURE__ */ new Set()), p = /* @__PURE__ */ new Set(), u2 = /* @__PURE__ */ new Set(), f2 = [], m = [], d2 = new K2(() => /* @__PURE__ */ new Set());
    function c(h2, y2, x2 = {}, $2 = 0) {
      if (h2.kind === "declaration") {
        if (h2.property === "--tw-sort" || h2.value === void 0 || h2.value === null) return;
        if (x2.theme && h2.property[0] === "-" && h2.property[1] === "-") {
          if (h2.value === "initial") {
            h2.value = void 0;
            return;
          }
          x2.keyframes || s.get(y2).add(h2);
        }
        if (h2.value.includes("var(")) if (x2.theme && h2.property[0] === "-" && h2.property[1] === "-") for (let A2 of st(h2.value)) d2.get(A2).add(h2.property);
        else r.trackUsedVariables(h2.value);
        if (h2.property === "animation") for (let A2 of xr(h2.value)) u2.add(A2);
        i & 2 && h2.value.includes("color-mix(") && !x2.keyframes && a.get(y2).add(h2), y2.push(h2);
      } else if (h2.kind === "rule") {
        let A2 = [];
        for (let N2 of h2.nodes) c(N2, A2, x2, $2 + 1);
        let k = {}, U2 = /* @__PURE__ */ new Set();
        for (let N2 of A2) {
          if (N2.kind !== "declaration") continue;
          let O2 = `${N2.property}:${N2.value}:${N2.important}`;
          k[O2] ??= [], k[O2].push(N2);
        }
        for (let N2 in k) for (let O2 = 0; O2 < k[N2].length - 1; ++O2) U2.add(k[N2][O2]);
        if (U2.size > 0 && (A2 = A2.filter((N2) => !U2.has(N2))), A2.length === 0) return;
        h2.selector === "&" ? y2.push(...A2) : y2.push({ ...h2, nodes: A2 });
      } else if (h2.kind === "at-rule" && h2.name === "@property" && $2 === 0) {
        if (n.has(h2.params)) return;
        if (i & 1) {
          let k = h2.params, U2 = null, N2 = false;
          for (let L2 of h2.nodes) L2.kind === "declaration" && (L2.property === "initial-value" ? U2 = L2.value : L2.property === "inherits" && (N2 = L2.value === "true"));
          let O2 = o(k, U2 ?? "initial");
          O2.src = h2.src, N2 ? f2.push(O2) : m.push(O2);
        }
        n.add(h2.params);
        let A2 = { ...h2, nodes: [] };
        for (let k of h2.nodes) c(k, A2.nodes, x2, $2 + 1);
        y2.push(A2);
      } else if (h2.kind === "at-rule") {
        h2.name === "@keyframes" && (x2 = { ...x2, keyframes: true });
        let A2 = { ...h2, nodes: [] };
        for (let k of h2.nodes) c(k, A2.nodes, x2, $2 + 1);
        h2.name === "@keyframes" && x2.theme && p.add(A2), (A2.nodes.length > 0 || A2.name === "@layer" || A2.name === "@charset" || A2.name === "@custom-media" || A2.name === "@namespace" || A2.name === "@import") && y2.push(A2);
      } else if (h2.kind === "at-root") for (let A2 of h2.nodes) {
        let k = [];
        c(A2, k, x2, 0);
        for (let U2 of k) e.push(U2);
      }
      else if (h2.kind === "context") {
        if (h2.context.reference) return;
        for (let A2 of h2.nodes) c(A2, y2, { ...x2, ...h2.context }, $2);
      } else h2.kind === "comment" && y2.push(h2);
    }
    let w2 = [];
    for (let h2 of t2) c(h2, w2, {}, 0);
    e: for (let [h2, y2] of s) for (let x2 of y2) {
      if (Ar(x2.property, r.theme, d2)) {
        if (x2.property.startsWith(r.theme.prefixKey("--animate-"))) for (let k of xr(x2.value)) u2.add(k);
        continue;
      }
      let A2 = h2.indexOf(x2);
      if (h2.splice(A2, 1), h2.length === 0) {
        let k = an(w2, (U2) => U2.kind === "rule" && U2.nodes === h2);
        if (!k || k.length === 0) continue e;
        k.unshift({ kind: "at-root", nodes: w2 });
        do {
          let U2 = k.pop();
          if (!U2) break;
          let N2 = k[k.length - 1];
          if (!N2 || N2.kind !== "at-root" && N2.kind !== "at-rule") break;
          let O2 = N2.nodes.indexOf(U2);
          if (O2 === -1) break;
          N2.nodes.splice(O2, 1);
        } while (true);
        continue e;
      }
    }
    for (let h2 of p) if (!u2.has(h2.params)) {
      let y2 = e.indexOf(h2);
      e.splice(y2, 1);
    }
    if (w2 = w2.concat(e), i & 2) for (let [h2, y2] of a) for (let x2 of y2) {
      let $2 = h2.indexOf(x2);
      if ($2 === -1 || x2.value == null) continue;
      let A2 = B2(x2.value), k = false;
      if (I2(A2, (O2) => {
        if (O2.kind !== "function" || O2.value !== "color-mix") return;
        let L2 = false, _2 = false;
        if (I2(O2.nodes, (z2) => {
          if (z2.kind == "word" && z2.value.toLowerCase() === "currentcolor") {
            _2 = true, k = true;
            return;
          }
          let Y2 = z2, q2 = null, ae = /* @__PURE__ */ new Set();
          do {
            if (Y2.kind !== "function" || Y2.value !== "var") return;
            let oe2 = Y2.nodes[0];
            if (!oe2 || oe2.kind !== "word") return;
            let l3 = oe2.value;
            if (ae.has(l3)) {
              L2 = true;
              return;
            }
            if (ae.add(l3), k = true, q2 = r.theme.resolveValue(null, [oe2.value]), !q2) {
              L2 = true;
              return;
            }
            if (q2.toLowerCase() === "currentcolor") {
              _2 = true;
              return;
            }
            q2.startsWith("var(") ? Y2 = B2(q2)[0] : Y2 = null;
          } while (Y2);
          return E2.Replace({ kind: "word", value: q2 });
        }), L2 || _2) {
          let z2 = O2.nodes.findIndex((q2) => q2.kind === "separator" && q2.value.trim().includes(","));
          if (z2 === -1) return;
          let Y2 = O2.nodes.length > z2 ? O2.nodes[z2 + 1] : null;
          return Y2 ? E2.Replace(Y2) : void 0;
        } else if (k) {
          let z2 = O2.nodes[2];
          z2.kind === "word" && (z2.value === "oklab" || z2.value === "oklch" || z2.value === "lab" || z2.value === "lch") && (z2.value = "srgb");
        }
      }), !k) continue;
      let U2 = { ...x2, value: Z2(A2) }, N2 = J2("@supports (color: color-mix(in lab, red, red))", [x2]);
      N2.src = x2.src, h2.splice($2, 1, U2, N2);
    }
    if (i & 1) {
      let h2 = [];
      if (f2.length > 0) {
        let y2 = J2(":root, :host", f2);
        y2.src = f2[0].src, h2.push(y2);
      }
      if (m.length > 0) {
        let y2 = J2("*, ::before, ::after, ::backdrop", m);
        y2.src = m[0].src, h2.push(y2);
      }
      if (h2.length > 0) {
        let y2 = w2.findIndex((A2) => !(A2.kind === "comment" || A2.kind === "at-rule" && (A2.name === "@charset" || A2.name === "@import"))), x2 = F2("@layer", "properties", []);
        x2.src = h2[0].src, w2.splice(y2 < 0 ? w2.length : y2, 0, x2);
        let $2 = J2("@layer properties", [F2("@supports", "((-webkit-hyphens: none) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color:rgb(from red r g b))))", h2)]);
        $2.src = h2[0].src, $2.nodes[0].src = h2[0].src, w2.push($2);
      }
    }
    return w2;
  }
  function re2(t2, r) {
    let i = 0, e = { file: null, code: "" };
    function n(a, p = 0) {
      let u2 = "", f2 = "  ".repeat(p);
      if (a.kind === "declaration") {
        if (u2 += `${f2}${a.property}: ${a.value}${a.important ? " !important" : ""};
`, r) {
          i += f2.length;
          let m = i;
          i += a.property.length, i += 2, i += a.value?.length ?? 0, a.important && (i += 11);
          let d2 = i;
          i += 2, a.dst = [e, m, d2];
        }
      } else if (a.kind === "rule") {
        if (u2 += `${f2}${a.selector} {
`, r) {
          i += f2.length;
          let m = i;
          i += a.selector.length, i += 1;
          let d2 = i;
          a.dst = [e, m, d2], i += 2;
        }
        for (let m of a.nodes) u2 += n(m, p + 1);
        u2 += `${f2}}
`, r && (i += f2.length, i += 2);
      } else if (a.kind === "at-rule") {
        if (a.nodes.length === 0) {
          let m = `${f2}${a.name} ${a.params};
`;
          if (r) {
            i += f2.length;
            let d2 = i;
            i += a.name.length, i += 1, i += a.params.length;
            let c = i;
            i += 2, a.dst = [e, d2, c];
          }
          return m;
        }
        if (u2 += `${f2}${a.name}${a.params ? ` ${a.params} ` : " "}{
`, r) {
          i += f2.length;
          let m = i;
          i += a.name.length, a.params && (i += 1, i += a.params.length), i += 1;
          let d2 = i;
          a.dst = [e, m, d2], i += 2;
        }
        for (let m of a.nodes) u2 += n(m, p + 1);
        u2 += `${f2}}
`, r && (i += f2.length, i += 2);
      } else if (a.kind === "comment") {
        if (u2 += `${f2}/*${a.value}*/
`, r) {
          i += f2.length;
          let m = i;
          i += 2 + a.value.length + 2;
          let d2 = i;
          a.dst = [e, m, d2], i += 1;
        }
      } else if (a.kind === "context" || a.kind === "at-root") return "";
      return u2;
    }
    let s = "";
    for (let a of t2) s += n(a, 0);
    return e.code = s, s;
  }
  function an(t2, r) {
    let i = [];
    return I2(t2, (e, n) => {
      if (r(e)) return i = n.path(), i.push(e), E2.Stop;
    }), i;
  }
  function Ar(t2, r, i, e = /* @__PURE__ */ new Set()) {
    if (e.has(t2) || (e.add(t2), r.getOptions(t2) & 24)) return true;
    {
      let s = i.get(t2) ?? [];
      for (let a of s) if (Ar(a, r, i, e)) return true;
    }
    return false;
  }
  function xr(t2) {
    return t2.split(/[\s,]+/);
  }
  function ke(t2) {
    if (t2.indexOf("(") === -1) return Ie(t2);
    let r = B2(t2);
    return Ot(r), t2 = Z2(r), t2 = oe(t2), t2;
  }
  function Ie(t2, r = false) {
    let i = "";
    for (let e = 0; e < t2.length; e++) {
      let n = t2[e];
      n === "\\" && t2[e + 1] === "_" ? (i += "_", e += 1) : n === "_" && !r ? i += " " : i += n;
    }
    return i;
  }
  function Ot(t2) {
    for (let r of t2) switch (r.kind) {
      case "function": {
        if (r.value === "url" || r.value.endsWith("_url")) {
          r.value = Ie(r.value);
          break;
        }
        if (r.value === "var" || r.value.endsWith("_var") || r.value === "theme" || r.value.endsWith("_theme")) {
          r.value = Ie(r.value);
          for (let i = 0; i < r.nodes.length; i++) {
            if (i == 0 && r.nodes[i].kind === "word") {
              r.nodes[i].value = Ie(r.nodes[i].value, true);
              continue;
            }
            Ot([r.nodes[i]]);
          }
          break;
        }
        r.value = Ie(r.value), Ot(r.nodes);
        break;
      }
      case "separator":
      case "word": {
        r.value = Ie(r.value);
        break;
      }
      default:
        on(r);
    }
  }
  function on(t2) {
    throw new Error(`Unexpected value: ${t2}`);
  }
  var Pt = new Uint8Array(256);
  function he(t2) {
    let r = 0, i = t2.length;
    for (let e = 0; e < i; e++) {
      let n = t2.charCodeAt(e);
      switch (n) {
        case 92:
          e += 1;
          break;
        case 39:
        case 34:
          for (; ++e < i; ) {
            let s = t2.charCodeAt(e);
            if (s === 92) {
              e += 1;
              continue;
            }
            if (s === n) break;
          }
          break;
        case 40:
          Pt[r] = 41, r++;
          break;
        case 91:
          Pt[r] = 93, r++;
          break;
        case 123:
          break;
        case 93:
        case 125:
        case 41:
          if (r === 0) return false;
          r > 0 && n === Pt[r - 1] && r--;
          break;
        case 59:
          if (r === 0) return false;
          break;
      }
    }
    return true;
  }
  var ln = 58;
  var Cr = 45;
  var $r = 97;
  var Sr = 122;
  var Dt = /^[a-zA-Z0-9_.%-]+$/;
  function Tr(t2) {
    switch (t2.kind) {
      case "arbitrary":
        return { kind: t2.kind, property: t2.property, value: t2.value, modifier: t2.modifier ? { kind: t2.modifier.kind, value: t2.modifier.value } : null, variants: t2.variants.map(_e), important: t2.important, raw: t2.raw };
      case "static":
        return { kind: t2.kind, root: t2.root, variants: t2.variants.map(_e), important: t2.important, raw: t2.raw };
      case "functional":
        return { kind: t2.kind, root: t2.root, value: t2.value ? t2.value.kind === "arbitrary" ? { kind: t2.value.kind, dataType: t2.value.dataType, value: t2.value.value } : { kind: t2.value.kind, value: t2.value.value, fraction: t2.value.fraction } : null, modifier: t2.modifier ? { kind: t2.modifier.kind, value: t2.modifier.value } : null, variants: t2.variants.map(_e), important: t2.important, raw: t2.raw };
      default:
        throw new Error("Unknown candidate kind");
    }
  }
  function _e(t2) {
    switch (t2.kind) {
      case "arbitrary":
        return { kind: t2.kind, selector: t2.selector, relative: t2.relative };
      case "static":
        return { kind: t2.kind, root: t2.root };
      case "functional":
        return { kind: t2.kind, root: t2.root, value: t2.value ? { kind: t2.value.kind, value: t2.value.value } : null, modifier: t2.modifier ? { kind: t2.modifier.kind, value: t2.modifier.value } : null };
      case "compound":
        return { kind: t2.kind, root: t2.root, variant: _e(t2.variant), modifier: t2.modifier ? { kind: t2.modifier.kind, value: t2.modifier.value } : null };
      default:
        throw new Error("Unknown variant kind");
    }
  }
  function* Vr(t2, r) {
    let i = d(t2, ":");
    if (r.theme.prefix) {
      if (i.length === 1 || i[0] !== r.theme.prefix) return null;
      i.shift();
    }
    let e = i.pop(), n = [];
    for (let d2 = i.length - 1; d2 >= 0; --d2) {
      let c = r.parseVariant(i[d2]);
      if (c === null) return;
      n.push(c);
    }
    let s = false;
    e[e.length - 1] === "!" ? (s = true, e = e.slice(0, -1)) : e[0] === "!" && (s = true, e = e.slice(1)), r.utilities.has(e, "static") && !e.includes("[") && (yield { kind: "static", root: e, variants: n, important: s, raw: t2 });
    let [a, p = null, u2] = d(e, "/");
    if (u2) return;
    let f2 = p === null ? null : It(p);
    if (p !== null && f2 === null) return;
    if (a[0] === "[") {
      if (a[a.length - 1] !== "]") return;
      let d2 = a.charCodeAt(1);
      if (d2 !== Cr && !(d2 >= $r && d2 <= Sr)) return;
      a = a.slice(1, -1);
      let c = a.indexOf(":");
      if (c === -1 || c === 0 || c === a.length - 1) return;
      let w2 = a.slice(0, c), h2 = ke(a.slice(c + 1));
      if (!he(h2)) return;
      yield { kind: "arbitrary", property: w2, value: h2, modifier: f2, variants: n, important: s, raw: t2 };
      return;
    }
    let m;
    if (a[a.length - 1] === "]") {
      let d2 = a.indexOf("-[");
      if (d2 === -1) return;
      let c = a.slice(0, d2);
      if (!r.utilities.has(c, "functional")) return;
      let w2 = a.slice(d2 + 1);
      m = [[c, w2]];
    } else if (a[a.length - 1] === ")") {
      let d2 = a.indexOf("-(");
      if (d2 === -1) return;
      let c = a.slice(0, d2);
      if (!r.utilities.has(c, "functional")) return;
      let w2 = a.slice(d2 + 2, -1), h2 = d(w2, ":"), y2 = null;
      if (h2.length === 2 && (y2 = h2[0], w2 = h2[1]), w2[0] !== "-" || w2[1] !== "-" || !he(w2)) return;
      m = [[c, y2 === null ? `[var(${w2})]` : `[${y2}:var(${w2})]`]];
    } else m = Er(a, (d2) => r.utilities.has(d2, "functional"));
    for (let [d2, c] of m) {
      let w2 = { kind: "functional", root: d2, modifier: f2, value: null, variants: n, important: s, raw: t2 };
      if (c === null) {
        yield w2;
        continue;
      }
      {
        let h2 = c.indexOf("[");
        if (h2 !== -1) {
          if (c[c.length - 1] !== "]") return;
          let x2 = ke(c.slice(h2 + 1, -1));
          if (!he(x2)) continue;
          let $2 = null;
          for (let A2 = 0; A2 < x2.length; A2++) {
            let k = x2.charCodeAt(A2);
            if (k === ln) {
              $2 = x2.slice(0, A2), x2 = x2.slice(A2 + 1);
              break;
            }
            if (!(k === Cr || k >= $r && k <= Sr)) break;
          }
          if (x2.length === 0 || x2.trim().length === 0 || $2 === "") continue;
          w2.value = { kind: "arbitrary", dataType: $2 || null, value: x2 };
        } else {
          let x2 = p === null || w2.modifier?.kind === "arbitrary" ? null : `${c}/${p}`;
          if (!Dt.test(c)) continue;
          w2.value = { kind: "named", value: c, fraction: x2 };
        }
      }
      yield w2;
    }
  }
  function It(t2) {
    if (t2[0] === "[" && t2[t2.length - 1] === "]") {
      let r = ke(t2.slice(1, -1));
      return !he(r) || r.length === 0 || r.trim().length === 0 ? null : { kind: "arbitrary", value: r };
    }
    return t2[0] === "(" && t2[t2.length - 1] === ")" ? (t2 = t2.slice(1, -1), t2[0] !== "-" || t2[1] !== "-" || !he(t2) ? null : (t2 = `var(${t2})`, { kind: "arbitrary", value: ke(t2) })) : Dt.test(t2) ? { kind: "named", value: t2 } : null;
  }
  function Nr(t2, r) {
    if (t2[0] === "[" && t2[t2.length - 1] === "]") {
      if (t2[1] === "@" && t2.includes("&")) return null;
      let i = ke(t2.slice(1, -1));
      if (!he(i) || i.length === 0 || i.trim().length === 0) return null;
      let e = i[0] === ">" || i[0] === "+" || i[0] === "~";
      return !e && i[0] !== "@" && !i.includes("&") && (i = `&:is(${i})`), { kind: "arbitrary", selector: i, relative: e };
    }
    {
      let [i, e = null, n] = d(t2, "/");
      if (n) return null;
      let s = Er(i, (a) => r.variants.has(a));
      for (let [a, p] of s) switch (r.variants.kind(a)) {
        case "static":
          return p !== null || e !== null ? null : { kind: "static", root: a };
        case "functional": {
          let u2 = e === null ? null : It(e);
          if (e !== null && u2 === null) return null;
          if (p === null) return { kind: "functional", root: a, modifier: u2, value: null };
          if (p[p.length - 1] === "]") {
            if (p[0] !== "[") continue;
            let f2 = ke(p.slice(1, -1));
            return !he(f2) || f2.length === 0 || f2.trim().length === 0 ? null : { kind: "functional", root: a, modifier: u2, value: { kind: "arbitrary", value: f2 } };
          }
          if (p[p.length - 1] === ")") {
            if (p[0] !== "(") continue;
            let f2 = ke(p.slice(1, -1));
            return !he(f2) || f2.length === 0 || f2.trim().length === 0 || f2[0] !== "-" || f2[1] !== "-" ? null : { kind: "functional", root: a, modifier: u2, value: { kind: "arbitrary", value: `var(${f2})` } };
          }
          if (!Dt.test(p)) continue;
          return { kind: "functional", root: a, modifier: u2, value: { kind: "named", value: p } };
        }
        case "compound": {
          if (p === null) return null;
          e && (a === "not" || a === "has" || a === "in") && (p = `${p}/${e}`, e = null);
          let u2 = r.parseVariant(p);
          if (u2 === null || !r.variants.compoundsWith(a, u2)) return null;
          let f2 = e === null ? null : It(e);
          return e !== null && f2 === null ? null : { kind: "compound", root: a, modifier: f2, variant: u2 };
        }
      }
    }
    return null;
  }
  function* Er(t2, r) {
    r(t2) && (yield [t2, null]);
    let i = t2.lastIndexOf("-");
    for (; i > 0; ) {
      let e = t2.slice(0, i);
      if (r(e)) {
        let n = [e, t2.slice(i + 1)];
        if (n[1] === "" || n[0] === "@" && r("@") && t2[i] === "-") break;
        yield n;
      }
      i = t2.lastIndexOf("-", i - 1);
    }
    t2[0] === "@" && r("@") && (yield ["@", t2.slice(1)]);
  }
  function Rr(t2, r) {
    let i = [];
    for (let n of r.variants) i.unshift(ut(n));
    t2.theme.prefix && i.unshift(t2.theme.prefix);
    let e = "";
    if (r.kind === "static" && (e += r.root), r.kind === "functional" && (e += r.root, r.value)) if (r.value.kind === "arbitrary") {
      if (r.value !== null) {
        let n = Kt(r.value.value), s = n ? r.value.value.slice(4, -1) : r.value.value, [a, p] = n ? ["(", ")"] : ["[", "]"];
        r.value.dataType ? e += `-${a}${r.value.dataType}:${be2(s)}${p}` : e += `-${a}${be2(s)}${p}`;
      }
    } else r.value.kind === "named" && (e += `-${r.value.value}`);
    return r.kind === "arbitrary" && (e += `[${r.property}:${be2(r.value)}]`), (r.kind === "arbitrary" || r.kind === "functional") && (e += He(r.modifier)), r.important && (e += "!"), i.push(e), i.join(":");
  }
  function He(t2) {
    if (t2 === null) return "";
    let r = Kt(t2.value), i = r ? t2.value.slice(4, -1) : t2.value, [e, n] = r ? ["(", ")"] : ["[", "]"];
    return t2.kind === "arbitrary" ? `/${e}${be2(i)}${n}` : t2.kind === "named" ? `/${t2.value}` : "";
  }
  function ut(t2) {
    if (t2.kind === "static") return t2.root;
    if (t2.kind === "arbitrary") return `[${be2(fn(t2.selector))}]`;
    let r = "";
    if (t2.kind === "functional") {
      r += t2.root;
      let i = t2.root !== "@";
      if (t2.value) if (t2.value.kind === "arbitrary") {
        let e = Kt(t2.value.value), n = e ? t2.value.value.slice(4, -1) : t2.value.value, [s, a] = e ? ["(", ")"] : ["[", "]"];
        r += `${i ? "-" : ""}${s}${be2(n)}${a}`;
      } else t2.value.kind === "named" && (r += `${i ? "-" : ""}${t2.value.value}`);
    }
    return t2.kind === "compound" && (r += t2.root, r += "-", r += ut(t2.variant)), (t2.kind === "functional" || t2.kind === "compound") && (r += He(t2.modifier)), r;
  }
  var sn = new K2((t2) => {
    let r = B2(t2), i = /* @__PURE__ */ new Set();
    return I2(r, (e, n) => {
      let s = n.parent === null ? r : n.parent.nodes ?? [];
      if (e.kind === "word" && (e.value === "+" || e.value === "-" || e.value === "*" || e.value === "/")) {
        let a = s.indexOf(e) ?? -1;
        if (a === -1) return;
        let p = s[a - 1];
        if (p?.kind !== "separator" || p.value !== " ") return;
        let u2 = s[a + 1];
        if (u2?.kind !== "separator" || u2.value !== " ") return;
        i.add(p), i.add(u2);
      } else e.kind === "separator" && e.value.length > 0 && e.value.trim() === "" ? (s[0] === e || s[s.length - 1] === e) && i.add(e) : e.kind === "separator" && e.value.trim() === "," && (e.value = ",");
    }), i.size > 0 && I2(r, (e) => {
      if (i.has(e)) return i.delete(e), E2.ReplaceSkip([]);
    }), _t(r), Z2(r);
  });
  function be2(t2) {
    return sn.get(t2);
  }
  var un = new K2((t2) => {
    let r = B2(t2);
    return r.length === 3 && r[0].kind === "word" && r[0].value === "&" && r[1].kind === "separator" && r[1].value === ":" && r[2].kind === "function" && r[2].value === "is" ? Z2(r[2].nodes) : t2;
  });
  function fn(t2) {
    return un.get(t2);
  }
  function _t(t2) {
    for (let r of t2) switch (r.kind) {
      case "function": {
        if (r.value === "url" || r.value.endsWith("_url")) {
          r.value = Ze(r.value);
          break;
        }
        if (r.value === "var" || r.value.endsWith("_var") || r.value === "theme" || r.value.endsWith("_theme")) {
          r.value = Ze(r.value);
          for (let i = 0; i < r.nodes.length; i++) _t([r.nodes[i]]);
          break;
        }
        r.value = Ze(r.value), _t(r.nodes);
        break;
      }
      case "separator":
        r.value = Ze(r.value);
        break;
      case "word": {
        (r.value[0] !== "-" || r.value[1] !== "-") && (r.value = Ze(r.value));
        break;
      }
      default:
        pn(r);
    }
  }
  var cn = new K2((t2) => {
    let r = B2(t2);
    return r.length === 1 && r[0].kind === "function" && r[0].value === "var";
  });
  function Kt(t2) {
    return cn.get(t2);
  }
  function pn(t2) {
    throw new Error(`Unexpected value: ${t2}`);
  }
  function Ze(t2) {
    return t2.replaceAll("_", String.raw`\_`).replaceAll(" ", "_");
  }
  function Ve(t2, r, i) {
    if (t2 === r) return 0;
    let e = t2.indexOf("("), n = r.indexOf("("), s = e === -1 ? t2.replace(/[\d.]+/g, "") : t2.slice(0, e), a = n === -1 ? r.replace(/[\d.]+/g, "") : r.slice(0, n), p = (s === a ? 0 : s < a ? -1 : 1) || (i === "asc" ? parseInt(t2) - parseInt(r) : parseInt(r) - parseInt(t2));
    return Number.isNaN(p) ? t2 < r ? -1 : 1 : p;
  }
  var dn = /* @__PURE__ */ new Set(["inset", "inherit", "initial", "revert", "unset"]);
  var Or = /^-?(\d+|\.\d+)(.*?)$/g;
  function Je(t2, r) {
    return d(t2, ",").map((e) => {
      e = e.trim();
      let n = d(e, " ").filter((f2) => f2.trim() !== ""), s = null, a = null, p = null;
      for (let f2 of n) dn.has(f2) || (Or.test(f2) ? (a === null ? a = f2 : p === null && (p = f2), Or.lastIndex = 0) : s === null && (s = f2));
      if (a === null || p === null) return e;
      let u2 = r(s ?? "currentcolor");
      return s !== null ? e.replace(s, u2) : `${e} ${u2}`;
    }).join(", ");
  }
  var gn = /^-?[a-z][a-zA-Z0-9/%._-]*$/;
  var hn = /^-?[a-z][a-zA-Z0-9/%._-]*-\*$/;
  var ct = ["0", "0.5", "1", "1.5", "2", "2.5", "3", "3.5", "4", "5", "6", "7", "8", "9", "10", "11", "12", "14", "16", "20", "24", "28", "32", "36", "40", "44", "48", "52", "56", "60", "64", "72", "80", "96"];
  var Ut = class {
    utilities = new K2(() => []);
    completions = /* @__PURE__ */ new Map();
    static(r, i) {
      this.utilities.get(r).push({ kind: "static", compileFn: i });
    }
    functional(r, i, e) {
      this.utilities.get(r).push({ kind: "functional", compileFn: i, options: e });
    }
    has(r, i) {
      return this.utilities.has(r) && this.utilities.get(r).some((e) => e.kind === i);
    }
    get(r) {
      return this.utilities.has(r) ? this.utilities.get(r) : [];
    }
    getCompletions(r) {
      return this.has(r, "static") ? this.completions.get(r)?.() ?? [{ supportsNegative: false, values: [], modifiers: [] }] : this.completions.get(r)?.() ?? [];
    }
    suggest(r, i) {
      let e = this.completions.get(r);
      e ? this.completions.set(r, () => [...e?.(), ...i?.()]) : this.completions.set(r, i);
    }
    keys(r) {
      let i = [];
      for (let [e, n] of this.utilities.entries()) for (let s of n) if (s.kind === r) {
        i.push(e);
        break;
      }
      return i;
    }
  };
  function S2(t2, r, i) {
    return F2("@property", t2, [o("syntax", i ? `"${i}"` : '"*"'), o("inherits", "false"), ...r ? [o("initial-value", r)] : []]);
  }
  function Q2(t2, r) {
    if (r === null) return t2;
    let i = Number(r);
    return Number.isNaN(i) || (r = `${i * 100}%`), r === "100%" ? t2 : `color-mix(in oklab, ${t2} ${r}, transparent)`;
  }
  function Ir(t2, r) {
    let i = Number(r);
    return Number.isNaN(i) || (r = `${i * 100}%`), `oklab(from ${t2} l a b / ${r})`;
  }
  function X2(t2, r, i) {
    if (!r) return t2;
    if (r.kind === "arbitrary") return Q2(t2, r.value);
    let e = i.resolve(r.value, ["--opacity"]);
    return e ? Q2(t2, e) : ue(r.value) ? Q2(t2, `${r.value}%`) : null;
  }
  function te2(t2, r, i) {
    let e = null;
    switch (t2.value.value) {
      case "inherit": {
        e = "inherit";
        break;
      }
      case "transparent": {
        e = "transparent";
        break;
      }
      case "current": {
        e = "currentcolor";
        break;
      }
      default: {
        e = r.resolve(t2.value.value, i);
        break;
      }
    }
    return e ? X2(e, t2.modifier, r) : null;
  }
  var _r = /(\d+)_(\d+)/g;
  function Dr(t2) {
    let r = new Ut();
    function i(l3, g2) {
      function* v2(b2) {
        for (let T2 of t2.keysInNamespaces(b2)) yield T2.replace(_r, (D2, V2, R2) => `${V2}.${R2}`);
      }
      let C2 = ["1/2", "1/3", "2/3", "1/4", "2/4", "3/4", "1/5", "2/5", "3/5", "4/5", "1/6", "2/6", "3/6", "4/6", "5/6", "1/12", "2/12", "3/12", "4/12", "5/12", "6/12", "7/12", "8/12", "9/12", "10/12", "11/12"];
      r.suggest(l3, () => {
        let b2 = [];
        for (let T2 of g2()) {
          if (typeof T2 == "string") {
            b2.push({ values: [T2], modifiers: [] });
            continue;
          }
          let D2 = [...T2.values ?? [], ...v2(T2.valueThemeKeys ?? [])], V2 = [...T2.modifiers ?? [], ...v2(T2.modifierThemeKeys ?? [])];
          T2.supportsFractions && D2.push(...C2), T2.hasDefaultValue && D2.unshift(null), b2.push({ supportsNegative: T2.supportsNegative, values: D2, modifiers: V2 });
        }
        return b2;
      });
    }
    function e(l3, g2) {
      r.static(l3, () => g2.map((v2) => typeof v2 == "function" ? v2() : o(v2[0], v2[1])));
    }
    function n(l3, g2) {
      function v2({ negative: C2 }) {
        return (b2) => {
          let T2 = null, D2 = null;
          if (b2.value) if (b2.value.kind === "arbitrary") {
            if (b2.modifier) return;
            T2 = b2.value.value, D2 = b2.value.dataType;
          } else {
            if (T2 = t2.resolve(b2.value.fraction ?? b2.value.value, g2.themeKeys ?? []), T2 === null && g2.supportsFractions && b2.value.fraction) {
              let [V2, R2] = d(b2.value.fraction, "/");
              if (!u(V2) || !u(R2)) return;
              T2 = `calc(${b2.value.fraction} * 100%)`;
            }
            if (T2 === null && C2 && g2.handleNegativeBareValue) {
              if (T2 = g2.handleNegativeBareValue(b2.value), !T2?.includes("/") && b2.modifier) return;
              if (T2 !== null) return g2.handle(T2, null);
            }
            if (T2 === null && g2.handleBareValue && (T2 = g2.handleBareValue(b2.value), !T2?.includes("/") && b2.modifier)) return;
            if (T2 === null && !C2 && g2.staticValues && !b2.modifier) {
              let V2 = g2.staticValues[b2.value.value];
              if (V2) return V2.map(ee2);
            }
          }
          else {
            if (b2.modifier) return;
            T2 = g2.defaultValue !== void 0 ? g2.defaultValue : t2.resolve(null, g2.themeKeys ?? []);
          }
          if (T2 !== null) return g2.handle(C2 ? `calc(${T2} * -1)` : T2, D2);
        };
      }
      if (g2.supportsNegative && r.functional(`-${l3}`, v2({ negative: true })), r.functional(l3, v2({ negative: false })), i(l3, () => [{ supportsNegative: g2.supportsNegative, valueThemeKeys: g2.themeKeys ?? [], hasDefaultValue: g2.defaultValue !== void 0 && g2.defaultValue !== null, supportsFractions: g2.supportsFractions }]), g2.staticValues && Object.keys(g2.staticValues).length > 0) {
        let C2 = Object.keys(g2.staticValues);
        i(l3, () => [{ values: C2 }]);
      }
    }
    function s(l3, g2) {
      r.functional(l3, (v2) => {
        if (!v2.value) return;
        let C2 = null;
        if (v2.value.kind === "arbitrary" ? (C2 = v2.value.value, C2 = X2(C2, v2.modifier, t2)) : C2 = te2(v2, t2, g2.themeKeys), C2 !== null) return g2.handle(C2);
      }), i(l3, () => [{ values: ["current", "inherit", "transparent"], valueThemeKeys: g2.themeKeys, modifiers: Array.from({ length: 21 }, (v2, C2) => `${C2 * 5}`) }]);
    }
    function a(l3, g2, v2, { supportsNegative: C2 = false, supportsFractions: b2 = false, staticValues: T2 } = {}) {
      C2 && r.static(`-${l3}-px`, () => v2("-1px")), r.static(`${l3}-px`, () => v2("1px")), n(l3, { themeKeys: g2, supportsFractions: b2, supportsNegative: C2, defaultValue: null, handleBareValue: ({ value: D2 }) => {
        let V2 = t2.resolve(null, ["--spacing"]);
        return !V2 || !ge(D2) ? null : `calc(${V2} * ${D2})`;
      }, handleNegativeBareValue: ({ value: D2 }) => {
        let V2 = t2.resolve(null, ["--spacing"]);
        return !V2 || !ge(D2) ? null : `calc(${V2} * -${D2})`;
      }, handle: v2, staticValues: T2 }), i(l3, () => [{ values: t2.get(["--spacing"]) ? ct : [], supportsNegative: C2, supportsFractions: b2, valueThemeKeys: g2 }]);
    }
    e("sr-only", [["position", "absolute"], ["width", "1px"], ["height", "1px"], ["padding", "0"], ["margin", "-1px"], ["overflow", "hidden"], ["clip-path", "inset(50%)"], ["white-space", "nowrap"], ["border-width", "0"]]), e("not-sr-only", [["position", "static"], ["width", "auto"], ["height", "auto"], ["padding", "0"], ["margin", "0"], ["overflow", "visible"], ["clip-path", "none"], ["white-space", "normal"]]), e("pointer-events-none", [["pointer-events", "none"]]), e("pointer-events-auto", [["pointer-events", "auto"]]), e("visible", [["visibility", "visible"]]), e("invisible", [["visibility", "hidden"]]), e("collapse", [["visibility", "collapse"]]), e("static", [["position", "static"]]), e("fixed", [["position", "fixed"]]), e("absolute", [["position", "absolute"]]), e("relative", [["position", "relative"]]), e("sticky", [["position", "sticky"]]);
    for (let [l3, g2] of [["inset", "inset"], ["inset-x", "inset-inline"], ["inset-y", "inset-block"], ["start", "inset-inline-start"], ["end", "inset-inline-end"], ["top", "top"], ["right", "right"], ["bottom", "bottom"], ["left", "left"]]) e(`${l3}-auto`, [[g2, "auto"]]), e(`${l3}-full`, [[g2, "100%"]]), e(`-${l3}-full`, [[g2, "-100%"]]), a(l3, ["--inset", "--spacing"], (v2) => [o(g2, v2)], { supportsNegative: true, supportsFractions: true });
    e("isolate", [["isolation", "isolate"]]), e("isolation-auto", [["isolation", "auto"]]), n("z", { supportsNegative: true, handleBareValue: ({ value: l3 }) => u(l3) ? l3 : null, themeKeys: ["--z-index"], handle: (l3) => [o("z-index", l3)], staticValues: { auto: [o("z-index", "auto")] } }), i("z", () => [{ supportsNegative: true, values: ["0", "10", "20", "30", "40", "50"], valueThemeKeys: ["--z-index"] }]), n("order", { supportsNegative: true, handleBareValue: ({ value: l3 }) => u(l3) ? l3 : null, themeKeys: ["--order"], handle: (l3) => [o("order", l3)], staticValues: { first: [o("order", "-9999")], last: [o("order", "9999")] } }), i("order", () => [{ supportsNegative: true, values: Array.from({ length: 12 }, (l3, g2) => `${g2 + 1}`), valueThemeKeys: ["--order"] }]), n("col", { supportsNegative: true, handleBareValue: ({ value: l3 }) => u(l3) ? l3 : null, themeKeys: ["--grid-column"], handle: (l3) => [o("grid-column", l3)], staticValues: { auto: [o("grid-column", "auto")] } }), n("col-span", { handleBareValue: ({ value: l3 }) => u(l3) ? l3 : null, handle: (l3) => [o("grid-column", `span ${l3} / span ${l3}`)], staticValues: { full: [o("grid-column", "1 / -1")] } }), n("col-start", { supportsNegative: true, handleBareValue: ({ value: l3 }) => u(l3) ? l3 : null, themeKeys: ["--grid-column-start"], handle: (l3) => [o("grid-column-start", l3)], staticValues: { auto: [o("grid-column-start", "auto")] } }), n("col-end", { supportsNegative: true, handleBareValue: ({ value: l3 }) => u(l3) ? l3 : null, themeKeys: ["--grid-column-end"], handle: (l3) => [o("grid-column-end", l3)], staticValues: { auto: [o("grid-column-end", "auto")] } }), i("col-span", () => [{ values: Array.from({ length: 12 }, (l3, g2) => `${g2 + 1}`), valueThemeKeys: [] }]), i("col-start", () => [{ supportsNegative: true, values: Array.from({ length: 13 }, (l3, g2) => `${g2 + 1}`), valueThemeKeys: ["--grid-column-start"] }]), i("col-end", () => [{ supportsNegative: true, values: Array.from({ length: 13 }, (l3, g2) => `${g2 + 1}`), valueThemeKeys: ["--grid-column-end"] }]), n("row", { supportsNegative: true, handleBareValue: ({ value: l3 }) => u(l3) ? l3 : null, themeKeys: ["--grid-row"], handle: (l3) => [o("grid-row", l3)], staticValues: { auto: [o("grid-row", "auto")] } }), n("row-span", { themeKeys: [], handleBareValue: ({ value: l3 }) => u(l3) ? l3 : null, handle: (l3) => [o("grid-row", `span ${l3} / span ${l3}`)], staticValues: { full: [o("grid-row", "1 / -1")] } }), n("row-start", { supportsNegative: true, handleBareValue: ({ value: l3 }) => u(l3) ? l3 : null, themeKeys: ["--grid-row-start"], handle: (l3) => [o("grid-row-start", l3)], staticValues: { auto: [o("grid-row-start", "auto")] } }), n("row-end", { supportsNegative: true, handleBareValue: ({ value: l3 }) => u(l3) ? l3 : null, themeKeys: ["--grid-row-end"], handle: (l3) => [o("grid-row-end", l3)], staticValues: { auto: [o("grid-row-end", "auto")] } }), i("row-span", () => [{ values: Array.from({ length: 12 }, (l3, g2) => `${g2 + 1}`), valueThemeKeys: [] }]), i("row-start", () => [{ supportsNegative: true, values: Array.from({ length: 13 }, (l3, g2) => `${g2 + 1}`), valueThemeKeys: ["--grid-row-start"] }]), i("row-end", () => [{ supportsNegative: true, values: Array.from({ length: 13 }, (l3, g2) => `${g2 + 1}`), valueThemeKeys: ["--grid-row-end"] }]), e("float-start", [["float", "inline-start"]]), e("float-end", [["float", "inline-end"]]), e("float-right", [["float", "right"]]), e("float-left", [["float", "left"]]), e("float-none", [["float", "none"]]), e("clear-start", [["clear", "inline-start"]]), e("clear-end", [["clear", "inline-end"]]), e("clear-right", [["clear", "right"]]), e("clear-left", [["clear", "left"]]), e("clear-both", [["clear", "both"]]), e("clear-none", [["clear", "none"]]);
    for (let [l3, g2] of [["m", "margin"], ["mx", "margin-inline"], ["my", "margin-block"], ["ms", "margin-inline-start"], ["me", "margin-inline-end"], ["mt", "margin-top"], ["mr", "margin-right"], ["mb", "margin-bottom"], ["ml", "margin-left"]]) e(`${l3}-auto`, [[g2, "auto"]]), a(l3, ["--margin", "--spacing"], (v2) => [o(g2, v2)], { supportsNegative: true });
    e("box-border", [["box-sizing", "border-box"]]), e("box-content", [["box-sizing", "content-box"]]), n("line-clamp", { themeKeys: ["--line-clamp"], handleBareValue: ({ value: l3 }) => u(l3) ? l3 : null, handle: (l3) => [o("overflow", "hidden"), o("display", "-webkit-box"), o("-webkit-box-orient", "vertical"), o("-webkit-line-clamp", l3)], staticValues: { none: [o("overflow", "visible"), o("display", "block"), o("-webkit-box-orient", "horizontal"), o("-webkit-line-clamp", "unset")] } }), i("line-clamp", () => [{ values: ["1", "2", "3", "4", "5", "6"], valueThemeKeys: ["--line-clamp"] }]), e("block", [["display", "block"]]), e("inline-block", [["display", "inline-block"]]), e("inline", [["display", "inline"]]), e("hidden", [["display", "none"]]), e("inline-flex", [["display", "inline-flex"]]), e("table", [["display", "table"]]), e("inline-table", [["display", "inline-table"]]), e("table-caption", [["display", "table-caption"]]), e("table-cell", [["display", "table-cell"]]), e("table-column", [["display", "table-column"]]), e("table-column-group", [["display", "table-column-group"]]), e("table-footer-group", [["display", "table-footer-group"]]), e("table-header-group", [["display", "table-header-group"]]), e("table-row-group", [["display", "table-row-group"]]), e("table-row", [["display", "table-row"]]), e("flow-root", [["display", "flow-root"]]), e("flex", [["display", "flex"]]), e("grid", [["display", "grid"]]), e("inline-grid", [["display", "inline-grid"]]), e("contents", [["display", "contents"]]), e("list-item", [["display", "list-item"]]), e("field-sizing-content", [["field-sizing", "content"]]), e("field-sizing-fixed", [["field-sizing", "fixed"]]), n("aspect", { themeKeys: ["--aspect"], handleBareValue: ({ fraction: l3 }) => {
      if (l3 === null) return null;
      let [g2, v2] = d(l3, "/");
      return !u(g2) || !u(v2) ? null : l3;
    }, handle: (l3) => [o("aspect-ratio", l3)], staticValues: { auto: [o("aspect-ratio", "auto")], square: [o("aspect-ratio", "1 / 1")] } });
    for (let [l3, g2] of [["full", "100%"], ["svw", "100svw"], ["lvw", "100lvw"], ["dvw", "100dvw"], ["svh", "100svh"], ["lvh", "100lvh"], ["dvh", "100dvh"], ["min", "min-content"], ["max", "max-content"], ["fit", "fit-content"]]) e(`size-${l3}`, [["--tw-sort", "size"], ["width", g2], ["height", g2]]), e(`w-${l3}`, [["width", g2]]), e(`h-${l3}`, [["height", g2]]), e(`min-w-${l3}`, [["min-width", g2]]), e(`min-h-${l3}`, [["min-height", g2]]), e(`max-w-${l3}`, [["max-width", g2]]), e(`max-h-${l3}`, [["max-height", g2]]);
    e("size-auto", [["--tw-sort", "size"], ["width", "auto"], ["height", "auto"]]), e("w-auto", [["width", "auto"]]), e("h-auto", [["height", "auto"]]), e("min-w-auto", [["min-width", "auto"]]), e("min-h-auto", [["min-height", "auto"]]), e("h-lh", [["height", "1lh"]]), e("min-h-lh", [["min-height", "1lh"]]), e("max-h-lh", [["max-height", "1lh"]]), e("w-screen", [["width", "100vw"]]), e("min-w-screen", [["min-width", "100vw"]]), e("max-w-screen", [["max-width", "100vw"]]), e("h-screen", [["height", "100vh"]]), e("min-h-screen", [["min-height", "100vh"]]), e("max-h-screen", [["max-height", "100vh"]]), e("max-w-none", [["max-width", "none"]]), e("max-h-none", [["max-height", "none"]]), a("size", ["--size", "--spacing"], (l3) => [o("--tw-sort", "size"), o("width", l3), o("height", l3)], { supportsFractions: true });
    for (let [l3, g2, v2] of [["w", ["--width", "--spacing", "--container"], "width"], ["min-w", ["--min-width", "--spacing", "--container"], "min-width"], ["max-w", ["--max-width", "--spacing", "--container"], "max-width"], ["h", ["--height", "--spacing"], "height"], ["min-h", ["--min-height", "--height", "--spacing"], "min-height"], ["max-h", ["--max-height", "--height", "--spacing"], "max-height"]]) a(l3, g2, (C2) => [o(v2, C2)], { supportsFractions: true });
    r.static("container", () => {
      let l3 = [...t2.namespace("--breakpoint").values()];
      l3.sort((v2, C2) => Ve(v2, C2, "asc"));
      let g2 = [o("--tw-sort", "--tw-container-component"), o("width", "100%")];
      for (let v2 of l3) g2.push(F2("@media", `(width >= ${v2})`, [o("max-width", v2)]));
      return g2;
    }), e("flex-auto", [["flex", "auto"]]), e("flex-initial", [["flex", "0 auto"]]), e("flex-none", [["flex", "none"]]), r.functional("flex", (l3) => {
      if (l3.value) {
        if (l3.value.kind === "arbitrary") return l3.modifier ? void 0 : [o("flex", l3.value.value)];
        if (l3.value.fraction) {
          let [g2, v2] = d(l3.value.fraction, "/");
          return !u(g2) || !u(v2) ? void 0 : [o("flex", `calc(${l3.value.fraction} * 100%)`)];
        }
        if (u(l3.value.value)) return l3.modifier ? void 0 : [o("flex", l3.value.value)];
      }
    }), i("flex", () => [{ supportsFractions: true }, { values: Array.from({ length: 12 }, (l3, g2) => `${g2 + 1}`) }]), n("shrink", { defaultValue: "1", handleBareValue: ({ value: l3 }) => u(l3) ? l3 : null, handle: (l3) => [o("flex-shrink", l3)] }), n("grow", { defaultValue: "1", handleBareValue: ({ value: l3 }) => u(l3) ? l3 : null, handle: (l3) => [o("flex-grow", l3)] }), i("shrink", () => [{ values: ["0"], valueThemeKeys: [], hasDefaultValue: true }]), i("grow", () => [{ values: ["0"], valueThemeKeys: [], hasDefaultValue: true }]), e("basis-auto", [["flex-basis", "auto"]]), e("basis-full", [["flex-basis", "100%"]]), a("basis", ["--flex-basis", "--spacing", "--container"], (l3) => [o("flex-basis", l3)], { supportsFractions: true }), e("table-auto", [["table-layout", "auto"]]), e("table-fixed", [["table-layout", "fixed"]]), e("caption-top", [["caption-side", "top"]]), e("caption-bottom", [["caption-side", "bottom"]]), e("border-collapse", [["border-collapse", "collapse"]]), e("border-separate", [["border-collapse", "separate"]]);
    let p = () => W2([S2("--tw-border-spacing-x", "0", "<length>"), S2("--tw-border-spacing-y", "0", "<length>")]);
    a("border-spacing", ["--border-spacing", "--spacing"], (l3) => [p(), o("--tw-border-spacing-x", l3), o("--tw-border-spacing-y", l3), o("border-spacing", "var(--tw-border-spacing-x) var(--tw-border-spacing-y)")]), a("border-spacing-x", ["--border-spacing", "--spacing"], (l3) => [p(), o("--tw-border-spacing-x", l3), o("border-spacing", "var(--tw-border-spacing-x) var(--tw-border-spacing-y)")]), a("border-spacing-y", ["--border-spacing", "--spacing"], (l3) => [p(), o("--tw-border-spacing-y", l3), o("border-spacing", "var(--tw-border-spacing-x) var(--tw-border-spacing-y)")]), n("origin", { themeKeys: ["--transform-origin"], handle: (l3) => [o("transform-origin", l3)], staticValues: { center: [o("transform-origin", "center")], top: [o("transform-origin", "top")], "top-right": [o("transform-origin", "100% 0")], right: [o("transform-origin", "100%")], "bottom-right": [o("transform-origin", "100% 100%")], bottom: [o("transform-origin", "bottom")], "bottom-left": [o("transform-origin", "0 100%")], left: [o("transform-origin", "0")], "top-left": [o("transform-origin", "0 0")] } }), n("perspective-origin", { themeKeys: ["--perspective-origin"], handle: (l3) => [o("perspective-origin", l3)], staticValues: { center: [o("perspective-origin", "center")], top: [o("perspective-origin", "top")], "top-right": [o("perspective-origin", "100% 0")], right: [o("perspective-origin", "100%")], "bottom-right": [o("perspective-origin", "100% 100%")], bottom: [o("perspective-origin", "bottom")], "bottom-left": [o("perspective-origin", "0 100%")], left: [o("perspective-origin", "0")], "top-left": [o("perspective-origin", "0 0")] } }), n("perspective", { themeKeys: ["--perspective"], handle: (l3) => [o("perspective", l3)], staticValues: { none: [o("perspective", "none")] } });
    let u2 = () => W2([S2("--tw-translate-x", "0"), S2("--tw-translate-y", "0"), S2("--tw-translate-z", "0")]);
    e("translate-none", [["translate", "none"]]), e("-translate-full", [u2, ["--tw-translate-x", "-100%"], ["--tw-translate-y", "-100%"], ["translate", "var(--tw-translate-x) var(--tw-translate-y)"]]), e("translate-full", [u2, ["--tw-translate-x", "100%"], ["--tw-translate-y", "100%"], ["translate", "var(--tw-translate-x) var(--tw-translate-y)"]]), a("translate", ["--translate", "--spacing"], (l3) => [u2(), o("--tw-translate-x", l3), o("--tw-translate-y", l3), o("translate", "var(--tw-translate-x) var(--tw-translate-y)")], { supportsNegative: true, supportsFractions: true });
    for (let l3 of ["x", "y"]) e(`-translate-${l3}-full`, [u2, [`--tw-translate-${l3}`, "-100%"], ["translate", "var(--tw-translate-x) var(--tw-translate-y)"]]), e(`translate-${l3}-full`, [u2, [`--tw-translate-${l3}`, "100%"], ["translate", "var(--tw-translate-x) var(--tw-translate-y)"]]), a(`translate-${l3}`, ["--translate", "--spacing"], (g2) => [u2(), o(`--tw-translate-${l3}`, g2), o("translate", "var(--tw-translate-x) var(--tw-translate-y)")], { supportsNegative: true, supportsFractions: true });
    a("translate-z", ["--translate", "--spacing"], (l3) => [u2(), o("--tw-translate-z", l3), o("translate", "var(--tw-translate-x) var(--tw-translate-y) var(--tw-translate-z)")], { supportsNegative: true }), e("translate-3d", [u2, ["translate", "var(--tw-translate-x) var(--tw-translate-y) var(--tw-translate-z)"]]);
    let f2 = () => W2([S2("--tw-scale-x", "1"), S2("--tw-scale-y", "1"), S2("--tw-scale-z", "1")]);
    e("scale-none", [["scale", "none"]]);
    function m({ negative: l3 }) {
      return (g2) => {
        if (!g2.value || g2.modifier) return;
        let v2;
        return g2.value.kind === "arbitrary" ? (v2 = g2.value.value, v2 = l3 ? `calc(${v2} * -1)` : v2, [o("scale", v2)]) : (v2 = t2.resolve(g2.value.value, ["--scale"]), !v2 && u(g2.value.value) && (v2 = `${g2.value.value}%`), v2 ? (v2 = l3 ? `calc(${v2} * -1)` : v2, [f2(), o("--tw-scale-x", v2), o("--tw-scale-y", v2), o("--tw-scale-z", v2), o("scale", "var(--tw-scale-x) var(--tw-scale-y)")]) : void 0);
      };
    }
    r.functional("-scale", m({ negative: true })), r.functional("scale", m({ negative: false })), i("scale", () => [{ supportsNegative: true, values: ["0", "50", "75", "90", "95", "100", "105", "110", "125", "150", "200"], valueThemeKeys: ["--scale"] }]);
    for (let l3 of ["x", "y", "z"]) n(`scale-${l3}`, { supportsNegative: true, themeKeys: ["--scale"], handleBareValue: ({ value: g2 }) => u(g2) ? `${g2}%` : null, handle: (g2) => [f2(), o(`--tw-scale-${l3}`, g2), o("scale", `var(--tw-scale-x) var(--tw-scale-y)${l3 === "z" ? " var(--tw-scale-z)" : ""}`)] }), i(`scale-${l3}`, () => [{ supportsNegative: true, values: ["0", "50", "75", "90", "95", "100", "105", "110", "125", "150", "200"], valueThemeKeys: ["--scale"] }]);
    e("scale-3d", [f2, ["scale", "var(--tw-scale-x) var(--tw-scale-y) var(--tw-scale-z)"]]), e("rotate-none", [["rotate", "none"]]);
    function d2({ negative: l3 }) {
      return (g2) => {
        if (!g2.value || g2.modifier) return;
        let v2;
        if (g2.value.kind === "arbitrary") {
          v2 = g2.value.value;
          let C2 = g2.value.dataType ?? me(v2, ["angle", "vector"]);
          if (C2 === "vector") return [o("rotate", `${v2} var(--tw-rotate)`)];
          if (C2 !== "angle") return [o("rotate", l3 ? `calc(${v2} * -1)` : v2)];
        } else if (v2 = t2.resolve(g2.value.value, ["--rotate"]), !v2 && u(g2.value.value) && (v2 = `${g2.value.value}deg`), !v2) return;
        return [o("rotate", l3 ? `calc(${v2} * -1)` : v2)];
      };
    }
    r.functional("-rotate", d2({ negative: true })), r.functional("rotate", d2({ negative: false })), i("rotate", () => [{ supportsNegative: true, values: ["0", "1", "2", "3", "6", "12", "45", "90", "180"], valueThemeKeys: ["--rotate"] }]);
    {
      let l3 = ["var(--tw-rotate-x,)", "var(--tw-rotate-y,)", "var(--tw-rotate-z,)", "var(--tw-skew-x,)", "var(--tw-skew-y,)"].join(" "), g2 = () => W2([S2("--tw-rotate-x"), S2("--tw-rotate-y"), S2("--tw-rotate-z"), S2("--tw-skew-x"), S2("--tw-skew-y")]);
      for (let v2 of ["x", "y", "z"]) n(`rotate-${v2}`, { supportsNegative: true, themeKeys: ["--rotate"], handleBareValue: ({ value: C2 }) => u(C2) ? `${C2}deg` : null, handle: (C2) => [g2(), o(`--tw-rotate-${v2}`, `rotate${v2.toUpperCase()}(${C2})`), o("transform", l3)] }), i(`rotate-${v2}`, () => [{ supportsNegative: true, values: ["0", "1", "2", "3", "6", "12", "45", "90", "180"], valueThemeKeys: ["--rotate"] }]);
      n("skew", { supportsNegative: true, themeKeys: ["--skew"], handleBareValue: ({ value: v2 }) => u(v2) ? `${v2}deg` : null, handle: (v2) => [g2(), o("--tw-skew-x", `skewX(${v2})`), o("--tw-skew-y", `skewY(${v2})`), o("transform", l3)] }), n("skew-x", { supportsNegative: true, themeKeys: ["--skew"], handleBareValue: ({ value: v2 }) => u(v2) ? `${v2}deg` : null, handle: (v2) => [g2(), o("--tw-skew-x", `skewX(${v2})`), o("transform", l3)] }), n("skew-y", { supportsNegative: true, themeKeys: ["--skew"], handleBareValue: ({ value: v2 }) => u(v2) ? `${v2}deg` : null, handle: (v2) => [g2(), o("--tw-skew-y", `skewY(${v2})`), o("transform", l3)] }), i("skew", () => [{ supportsNegative: true, values: ["0", "1", "2", "3", "6", "12"], valueThemeKeys: ["--skew"] }]), i("skew-x", () => [{ supportsNegative: true, values: ["0", "1", "2", "3", "6", "12"], valueThemeKeys: ["--skew"] }]), i("skew-y", () => [{ supportsNegative: true, values: ["0", "1", "2", "3", "6", "12"], valueThemeKeys: ["--skew"] }]), r.functional("transform", (v2) => {
        if (v2.modifier) return;
        let C2 = null;
        if (v2.value ? v2.value.kind === "arbitrary" && (C2 = v2.value.value) : C2 = l3, C2 !== null) return [g2(), o("transform", C2)];
      }), i("transform", () => [{ hasDefaultValue: true }]), e("transform-cpu", [["transform", l3]]), e("transform-gpu", [["transform", `translateZ(0) ${l3}`]]), e("transform-none", [["transform", "none"]]);
    }
    e("transform-flat", [["transform-style", "flat"]]), e("transform-3d", [["transform-style", "preserve-3d"]]), e("transform-content", [["transform-box", "content-box"]]), e("transform-border", [["transform-box", "border-box"]]), e("transform-fill", [["transform-box", "fill-box"]]), e("transform-stroke", [["transform-box", "stroke-box"]]), e("transform-view", [["transform-box", "view-box"]]), e("backface-visible", [["backface-visibility", "visible"]]), e("backface-hidden", [["backface-visibility", "hidden"]]);
    for (let l3 of ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out"]) e(`cursor-${l3}`, [["cursor", l3]]);
    n("cursor", { themeKeys: ["--cursor"], handle: (l3) => [o("cursor", l3)] });
    for (let l3 of ["auto", "none", "manipulation"]) e(`touch-${l3}`, [["touch-action", l3]]);
    let c = () => W2([S2("--tw-pan-x"), S2("--tw-pan-y"), S2("--tw-pinch-zoom")]);
    for (let l3 of ["x", "left", "right"]) e(`touch-pan-${l3}`, [c, ["--tw-pan-x", `pan-${l3}`], ["touch-action", "var(--tw-pan-x,) var(--tw-pan-y,) var(--tw-pinch-zoom,)"]]);
    for (let l3 of ["y", "up", "down"]) e(`touch-pan-${l3}`, [c, ["--tw-pan-y", `pan-${l3}`], ["touch-action", "var(--tw-pan-x,) var(--tw-pan-y,) var(--tw-pinch-zoom,)"]]);
    e("touch-pinch-zoom", [c, ["--tw-pinch-zoom", "pinch-zoom"], ["touch-action", "var(--tw-pan-x,) var(--tw-pan-y,) var(--tw-pinch-zoom,)"]]);
    for (let l3 of ["none", "text", "all", "auto"]) e(`select-${l3}`, [["-webkit-user-select", l3], ["user-select", l3]]);
    e("resize-none", [["resize", "none"]]), e("resize-x", [["resize", "horizontal"]]), e("resize-y", [["resize", "vertical"]]), e("resize", [["resize", "both"]]), e("snap-none", [["scroll-snap-type", "none"]]);
    let w2 = () => W2([S2("--tw-scroll-snap-strictness", "proximity", "*")]);
    for (let l3 of ["x", "y", "both"]) e(`snap-${l3}`, [w2, ["scroll-snap-type", `${l3} var(--tw-scroll-snap-strictness)`]]);
    e("snap-mandatory", [w2, ["--tw-scroll-snap-strictness", "mandatory"]]), e("snap-proximity", [w2, ["--tw-scroll-snap-strictness", "proximity"]]), e("snap-align-none", [["scroll-snap-align", "none"]]), e("snap-start", [["scroll-snap-align", "start"]]), e("snap-end", [["scroll-snap-align", "end"]]), e("snap-center", [["scroll-snap-align", "center"]]), e("snap-normal", [["scroll-snap-stop", "normal"]]), e("snap-always", [["scroll-snap-stop", "always"]]);
    for (let [l3, g2] of [["scroll-m", "scroll-margin"], ["scroll-mx", "scroll-margin-inline"], ["scroll-my", "scroll-margin-block"], ["scroll-ms", "scroll-margin-inline-start"], ["scroll-me", "scroll-margin-inline-end"], ["scroll-mt", "scroll-margin-top"], ["scroll-mr", "scroll-margin-right"], ["scroll-mb", "scroll-margin-bottom"], ["scroll-ml", "scroll-margin-left"]]) a(l3, ["--scroll-margin", "--spacing"], (v2) => [o(g2, v2)], { supportsNegative: true });
    for (let [l3, g2] of [["scroll-p", "scroll-padding"], ["scroll-px", "scroll-padding-inline"], ["scroll-py", "scroll-padding-block"], ["scroll-ps", "scroll-padding-inline-start"], ["scroll-pe", "scroll-padding-inline-end"], ["scroll-pt", "scroll-padding-top"], ["scroll-pr", "scroll-padding-right"], ["scroll-pb", "scroll-padding-bottom"], ["scroll-pl", "scroll-padding-left"]]) a(l3, ["--scroll-padding", "--spacing"], (v2) => [o(g2, v2)]);
    e("list-inside", [["list-style-position", "inside"]]), e("list-outside", [["list-style-position", "outside"]]), n("list", { themeKeys: ["--list-style-type"], handle: (l3) => [o("list-style-type", l3)], staticValues: { none: [o("list-style-type", "none")], disc: [o("list-style-type", "disc")], decimal: [o("list-style-type", "decimal")] } }), n("list-image", { themeKeys: ["--list-style-image"], handle: (l3) => [o("list-style-image", l3)], staticValues: { none: [o("list-style-image", "none")] } }), e("appearance-none", [["appearance", "none"]]), e("appearance-auto", [["appearance", "auto"]]), e("scheme-normal", [["color-scheme", "normal"]]), e("scheme-dark", [["color-scheme", "dark"]]), e("scheme-light", [["color-scheme", "light"]]), e("scheme-light-dark", [["color-scheme", "light dark"]]), e("scheme-only-dark", [["color-scheme", "only dark"]]), e("scheme-only-light", [["color-scheme", "only light"]]), n("columns", { themeKeys: ["--columns", "--container"], handleBareValue: ({ value: l3 }) => u(l3) ? l3 : null, handle: (l3) => [o("columns", l3)], staticValues: { auto: [o("columns", "auto")] } }), i("columns", () => [{ values: Array.from({ length: 12 }, (l3, g2) => `${g2 + 1}`), valueThemeKeys: ["--columns", "--container"] }]);
    for (let l3 of ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]) e(`break-before-${l3}`, [["break-before", l3]]);
    for (let l3 of ["auto", "avoid", "avoid-page", "avoid-column"]) e(`break-inside-${l3}`, [["break-inside", l3]]);
    for (let l3 of ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]) e(`break-after-${l3}`, [["break-after", l3]]);
    e("grid-flow-row", [["grid-auto-flow", "row"]]), e("grid-flow-col", [["grid-auto-flow", "column"]]), e("grid-flow-dense", [["grid-auto-flow", "dense"]]), e("grid-flow-row-dense", [["grid-auto-flow", "row dense"]]), e("grid-flow-col-dense", [["grid-auto-flow", "column dense"]]), n("auto-cols", { themeKeys: ["--grid-auto-columns"], handle: (l3) => [o("grid-auto-columns", l3)], staticValues: { auto: [o("grid-auto-columns", "auto")], min: [o("grid-auto-columns", "min-content")], max: [o("grid-auto-columns", "max-content")], fr: [o("grid-auto-columns", "minmax(0, 1fr)")] } }), n("auto-rows", { themeKeys: ["--grid-auto-rows"], handle: (l3) => [o("grid-auto-rows", l3)], staticValues: { auto: [o("grid-auto-rows", "auto")], min: [o("grid-auto-rows", "min-content")], max: [o("grid-auto-rows", "max-content")], fr: [o("grid-auto-rows", "minmax(0, 1fr)")] } }), n("grid-cols", { themeKeys: ["--grid-template-columns"], handleBareValue: ({ value: l3 }) => pe(l3) ? `repeat(${l3}, minmax(0, 1fr))` : null, handle: (l3) => [o("grid-template-columns", l3)], staticValues: { none: [o("grid-template-columns", "none")], subgrid: [o("grid-template-columns", "subgrid")] } }), n("grid-rows", { themeKeys: ["--grid-template-rows"], handleBareValue: ({ value: l3 }) => pe(l3) ? `repeat(${l3}, minmax(0, 1fr))` : null, handle: (l3) => [o("grid-template-rows", l3)], staticValues: { none: [o("grid-template-rows", "none")], subgrid: [o("grid-template-rows", "subgrid")] } }), i("grid-cols", () => [{ values: Array.from({ length: 12 }, (l3, g2) => `${g2 + 1}`), valueThemeKeys: ["--grid-template-columns"] }]), i("grid-rows", () => [{ values: Array.from({ length: 12 }, (l3, g2) => `${g2 + 1}`), valueThemeKeys: ["--grid-template-rows"] }]), e("flex-row", [["flex-direction", "row"]]), e("flex-row-reverse", [["flex-direction", "row-reverse"]]), e("flex-col", [["flex-direction", "column"]]), e("flex-col-reverse", [["flex-direction", "column-reverse"]]), e("flex-wrap", [["flex-wrap", "wrap"]]), e("flex-nowrap", [["flex-wrap", "nowrap"]]), e("flex-wrap-reverse", [["flex-wrap", "wrap-reverse"]]), e("place-content-center", [["place-content", "center"]]), e("place-content-start", [["place-content", "start"]]), e("place-content-end", [["place-content", "end"]]), e("place-content-center-safe", [["place-content", "safe center"]]), e("place-content-end-safe", [["place-content", "safe end"]]), e("place-content-between", [["place-content", "space-between"]]), e("place-content-around", [["place-content", "space-around"]]), e("place-content-evenly", [["place-content", "space-evenly"]]), e("place-content-baseline", [["place-content", "baseline"]]), e("place-content-stretch", [["place-content", "stretch"]]), e("place-items-center", [["place-items", "center"]]), e("place-items-start", [["place-items", "start"]]), e("place-items-end", [["place-items", "end"]]), e("place-items-center-safe", [["place-items", "safe center"]]), e("place-items-end-safe", [["place-items", "safe end"]]), e("place-items-baseline", [["place-items", "baseline"]]), e("place-items-stretch", [["place-items", "stretch"]]), e("content-normal", [["align-content", "normal"]]), e("content-center", [["align-content", "center"]]), e("content-start", [["align-content", "flex-start"]]), e("content-end", [["align-content", "flex-end"]]), e("content-center-safe", [["align-content", "safe center"]]), e("content-end-safe", [["align-content", "safe flex-end"]]), e("content-between", [["align-content", "space-between"]]), e("content-around", [["align-content", "space-around"]]), e("content-evenly", [["align-content", "space-evenly"]]), e("content-baseline", [["align-content", "baseline"]]), e("content-stretch", [["align-content", "stretch"]]), e("items-center", [["align-items", "center"]]), e("items-start", [["align-items", "flex-start"]]), e("items-end", [["align-items", "flex-end"]]), e("items-center-safe", [["align-items", "safe center"]]), e("items-end-safe", [["align-items", "safe flex-end"]]), e("items-baseline", [["align-items", "baseline"]]), e("items-baseline-last", [["align-items", "last baseline"]]), e("items-stretch", [["align-items", "stretch"]]), e("justify-normal", [["justify-content", "normal"]]), e("justify-center", [["justify-content", "center"]]), e("justify-start", [["justify-content", "flex-start"]]), e("justify-end", [["justify-content", "flex-end"]]), e("justify-center-safe", [["justify-content", "safe center"]]), e("justify-end-safe", [["justify-content", "safe flex-end"]]), e("justify-between", [["justify-content", "space-between"]]), e("justify-around", [["justify-content", "space-around"]]), e("justify-evenly", [["justify-content", "space-evenly"]]), e("justify-baseline", [["justify-content", "baseline"]]), e("justify-stretch", [["justify-content", "stretch"]]), e("justify-items-normal", [["justify-items", "normal"]]), e("justify-items-center", [["justify-items", "center"]]), e("justify-items-start", [["justify-items", "start"]]), e("justify-items-end", [["justify-items", "end"]]), e("justify-items-center-safe", [["justify-items", "safe center"]]), e("justify-items-end-safe", [["justify-items", "safe end"]]), e("justify-items-stretch", [["justify-items", "stretch"]]), a("gap", ["--gap", "--spacing"], (l3) => [o("gap", l3)]), a("gap-x", ["--gap", "--spacing"], (l3) => [o("column-gap", l3)]), a("gap-y", ["--gap", "--spacing"], (l3) => [o("row-gap", l3)]), a("space-x", ["--space", "--spacing"], (l3) => [W2([S2("--tw-space-x-reverse", "0")]), G2(":where(& > :not(:last-child))", [o("--tw-sort", "row-gap"), o("--tw-space-x-reverse", "0"), o("margin-inline-start", `calc(${l3} * var(--tw-space-x-reverse))`), o("margin-inline-end", `calc(${l3} * calc(1 - var(--tw-space-x-reverse)))`)])], { supportsNegative: true }), a("space-y", ["--space", "--spacing"], (l3) => [W2([S2("--tw-space-y-reverse", "0")]), G2(":where(& > :not(:last-child))", [o("--tw-sort", "column-gap"), o("--tw-space-y-reverse", "0"), o("margin-block-start", `calc(${l3} * var(--tw-space-y-reverse))`), o("margin-block-end", `calc(${l3} * calc(1 - var(--tw-space-y-reverse)))`)])], { supportsNegative: true }), e("space-x-reverse", [() => W2([S2("--tw-space-x-reverse", "0")]), () => G2(":where(& > :not(:last-child))", [o("--tw-sort", "row-gap"), o("--tw-space-x-reverse", "1")])]), e("space-y-reverse", [() => W2([S2("--tw-space-y-reverse", "0")]), () => G2(":where(& > :not(:last-child))", [o("--tw-sort", "column-gap"), o("--tw-space-y-reverse", "1")])]), e("accent-auto", [["accent-color", "auto"]]), s("accent", { themeKeys: ["--accent-color", "--color"], handle: (l3) => [o("accent-color", l3)] }), s("caret", { themeKeys: ["--caret-color", "--color"], handle: (l3) => [o("caret-color", l3)] }), s("divide", { themeKeys: ["--divide-color", "--border-color", "--color"], handle: (l3) => [G2(":where(& > :not(:last-child))", [o("--tw-sort", "divide-color"), o("border-color", l3)])] }), e("place-self-auto", [["place-self", "auto"]]), e("place-self-start", [["place-self", "start"]]), e("place-self-end", [["place-self", "end"]]), e("place-self-center", [["place-self", "center"]]), e("place-self-end-safe", [["place-self", "safe end"]]), e("place-self-center-safe", [["place-self", "safe center"]]), e("place-self-stretch", [["place-self", "stretch"]]), e("self-auto", [["align-self", "auto"]]), e("self-start", [["align-self", "flex-start"]]), e("self-end", [["align-self", "flex-end"]]), e("self-center", [["align-self", "center"]]), e("self-end-safe", [["align-self", "safe flex-end"]]), e("self-center-safe", [["align-self", "safe center"]]), e("self-stretch", [["align-self", "stretch"]]), e("self-baseline", [["align-self", "baseline"]]), e("self-baseline-last", [["align-self", "last baseline"]]), e("justify-self-auto", [["justify-self", "auto"]]), e("justify-self-start", [["justify-self", "flex-start"]]), e("justify-self-end", [["justify-self", "flex-end"]]), e("justify-self-center", [["justify-self", "center"]]), e("justify-self-end-safe", [["justify-self", "safe flex-end"]]), e("justify-self-center-safe", [["justify-self", "safe center"]]), e("justify-self-stretch", [["justify-self", "stretch"]]);
    for (let l3 of ["auto", "hidden", "clip", "visible", "scroll"]) e(`overflow-${l3}`, [["overflow", l3]]), e(`overflow-x-${l3}`, [["overflow-x", l3]]), e(`overflow-y-${l3}`, [["overflow-y", l3]]);
    for (let l3 of ["auto", "contain", "none"]) e(`overscroll-${l3}`, [["overscroll-behavior", l3]]), e(`overscroll-x-${l3}`, [["overscroll-behavior-x", l3]]), e(`overscroll-y-${l3}`, [["overscroll-behavior-y", l3]]);
    e("scroll-auto", [["scroll-behavior", "auto"]]), e("scroll-smooth", [["scroll-behavior", "smooth"]]), e("truncate", [["overflow", "hidden"], ["text-overflow", "ellipsis"], ["white-space", "nowrap"]]), e("text-ellipsis", [["text-overflow", "ellipsis"]]), e("text-clip", [["text-overflow", "clip"]]), e("hyphens-none", [["-webkit-hyphens", "none"], ["hyphens", "none"]]), e("hyphens-manual", [["-webkit-hyphens", "manual"], ["hyphens", "manual"]]), e("hyphens-auto", [["-webkit-hyphens", "auto"], ["hyphens", "auto"]]), e("whitespace-normal", [["white-space", "normal"]]), e("whitespace-nowrap", [["white-space", "nowrap"]]), e("whitespace-pre", [["white-space", "pre"]]), e("whitespace-pre-line", [["white-space", "pre-line"]]), e("whitespace-pre-wrap", [["white-space", "pre-wrap"]]), e("whitespace-break-spaces", [["white-space", "break-spaces"]]), e("text-wrap", [["text-wrap", "wrap"]]), e("text-nowrap", [["text-wrap", "nowrap"]]), e("text-balance", [["text-wrap", "balance"]]), e("text-pretty", [["text-wrap", "pretty"]]), e("break-normal", [["overflow-wrap", "normal"], ["word-break", "normal"]]), e("break-all", [["word-break", "break-all"]]), e("break-keep", [["word-break", "keep-all"]]), e("wrap-anywhere", [["overflow-wrap", "anywhere"]]), e("wrap-break-word", [["overflow-wrap", "break-word"]]), e("wrap-normal", [["overflow-wrap", "normal"]]);
    for (let [l3, g2] of [["rounded", ["border-radius"]], ["rounded-s", ["border-start-start-radius", "border-end-start-radius"]], ["rounded-e", ["border-start-end-radius", "border-end-end-radius"]], ["rounded-t", ["border-top-left-radius", "border-top-right-radius"]], ["rounded-r", ["border-top-right-radius", "border-bottom-right-radius"]], ["rounded-b", ["border-bottom-right-radius", "border-bottom-left-radius"]], ["rounded-l", ["border-top-left-radius", "border-bottom-left-radius"]], ["rounded-ss", ["border-start-start-radius"]], ["rounded-se", ["border-start-end-radius"]], ["rounded-ee", ["border-end-end-radius"]], ["rounded-es", ["border-end-start-radius"]], ["rounded-tl", ["border-top-left-radius"]], ["rounded-tr", ["border-top-right-radius"]], ["rounded-br", ["border-bottom-right-radius"]], ["rounded-bl", ["border-bottom-left-radius"]]]) n(l3, { themeKeys: ["--radius"], handle: (v2) => g2.map((C2) => o(C2, v2)), staticValues: { none: g2.map((v2) => o(v2, "0")), full: g2.map((v2) => o(v2, "calc(infinity * 1px)")) } });
    e("border-solid", [["--tw-border-style", "solid"], ["border-style", "solid"]]), e("border-dashed", [["--tw-border-style", "dashed"], ["border-style", "dashed"]]), e("border-dotted", [["--tw-border-style", "dotted"], ["border-style", "dotted"]]), e("border-double", [["--tw-border-style", "double"], ["border-style", "double"]]), e("border-hidden", [["--tw-border-style", "hidden"], ["border-style", "hidden"]]), e("border-none", [["--tw-border-style", "none"], ["border-style", "none"]]);
    {
      let g2 = function(v2, C2) {
        r.functional(v2, (b2) => {
          if (!b2.value) {
            if (b2.modifier) return;
            let T2 = t2.get(["--default-border-width"]) ?? "1px", D2 = C2.width(T2);
            return D2 ? [l3(), ...D2] : void 0;
          }
          if (b2.value.kind === "arbitrary") {
            let T2 = b2.value.value;
            switch (b2.value.dataType ?? me(T2, ["color", "line-width", "length"])) {
              case "line-width":
              case "length": {
                if (b2.modifier) return;
                let V2 = C2.width(T2);
                return V2 ? [l3(), ...V2] : void 0;
              }
              default:
                return T2 = X2(T2, b2.modifier, t2), T2 === null ? void 0 : C2.color(T2);
            }
          }
          {
            let T2 = te2(b2, t2, ["--border-color", "--color"]);
            if (T2) return C2.color(T2);
          }
          {
            if (b2.modifier) return;
            let T2 = t2.resolve(b2.value.value, ["--border-width"]);
            if (T2) {
              let D2 = C2.width(T2);
              return D2 ? [l3(), ...D2] : void 0;
            }
            if (u(b2.value.value)) {
              let D2 = C2.width(`${b2.value.value}px`);
              return D2 ? [l3(), ...D2] : void 0;
            }
          }
        }), i(v2, () => [{ values: ["current", "inherit", "transparent"], valueThemeKeys: ["--border-color", "--color"], modifiers: Array.from({ length: 21 }, (b2, T2) => `${T2 * 5}`), hasDefaultValue: true }, { values: ["0", "2", "4", "8"], valueThemeKeys: ["--border-width"] }]);
      };
      var _2 = g2;
      let l3 = () => W2([S2("--tw-border-style", "solid")]);
      g2("border", { width: (v2) => [o("border-style", "var(--tw-border-style)"), o("border-width", v2)], color: (v2) => [o("border-color", v2)] }), g2("border-x", { width: (v2) => [o("border-inline-style", "var(--tw-border-style)"), o("border-inline-width", v2)], color: (v2) => [o("border-inline-color", v2)] }), g2("border-y", { width: (v2) => [o("border-block-style", "var(--tw-border-style)"), o("border-block-width", v2)], color: (v2) => [o("border-block-color", v2)] }), g2("border-s", { width: (v2) => [o("border-inline-start-style", "var(--tw-border-style)"), o("border-inline-start-width", v2)], color: (v2) => [o("border-inline-start-color", v2)] }), g2("border-e", { width: (v2) => [o("border-inline-end-style", "var(--tw-border-style)"), o("border-inline-end-width", v2)], color: (v2) => [o("border-inline-end-color", v2)] }), g2("border-t", { width: (v2) => [o("border-top-style", "var(--tw-border-style)"), o("border-top-width", v2)], color: (v2) => [o("border-top-color", v2)] }), g2("border-r", { width: (v2) => [o("border-right-style", "var(--tw-border-style)"), o("border-right-width", v2)], color: (v2) => [o("border-right-color", v2)] }), g2("border-b", { width: (v2) => [o("border-bottom-style", "var(--tw-border-style)"), o("border-bottom-width", v2)], color: (v2) => [o("border-bottom-color", v2)] }), g2("border-l", { width: (v2) => [o("border-left-style", "var(--tw-border-style)"), o("border-left-width", v2)], color: (v2) => [o("border-left-color", v2)] }), n("divide-x", { defaultValue: t2.get(["--default-border-width"]) ?? "1px", themeKeys: ["--divide-width", "--border-width"], handleBareValue: ({ value: v2 }) => u(v2) ? `${v2}px` : null, handle: (v2) => [W2([S2("--tw-divide-x-reverse", "0")]), G2(":where(& > :not(:last-child))", [o("--tw-sort", "divide-x-width"), l3(), o("--tw-divide-x-reverse", "0"), o("border-inline-style", "var(--tw-border-style)"), o("border-inline-start-width", `calc(${v2} * var(--tw-divide-x-reverse))`), o("border-inline-end-width", `calc(${v2} * calc(1 - var(--tw-divide-x-reverse)))`)])] }), n("divide-y", { defaultValue: t2.get(["--default-border-width"]) ?? "1px", themeKeys: ["--divide-width", "--border-width"], handleBareValue: ({ value: v2 }) => u(v2) ? `${v2}px` : null, handle: (v2) => [W2([S2("--tw-divide-y-reverse", "0")]), G2(":where(& > :not(:last-child))", [o("--tw-sort", "divide-y-width"), l3(), o("--tw-divide-y-reverse", "0"), o("border-bottom-style", "var(--tw-border-style)"), o("border-top-style", "var(--tw-border-style)"), o("border-top-width", `calc(${v2} * var(--tw-divide-y-reverse))`), o("border-bottom-width", `calc(${v2} * calc(1 - var(--tw-divide-y-reverse)))`)])] }), i("divide-x", () => [{ values: ["0", "2", "4", "8"], valueThemeKeys: ["--divide-width", "--border-width"], hasDefaultValue: true }]), i("divide-y", () => [{ values: ["0", "2", "4", "8"], valueThemeKeys: ["--divide-width", "--border-width"], hasDefaultValue: true }]), e("divide-x-reverse", [() => W2([S2("--tw-divide-x-reverse", "0")]), () => G2(":where(& > :not(:last-child))", [o("--tw-divide-x-reverse", "1")])]), e("divide-y-reverse", [() => W2([S2("--tw-divide-y-reverse", "0")]), () => G2(":where(& > :not(:last-child))", [o("--tw-divide-y-reverse", "1")])]);
      for (let v2 of ["solid", "dashed", "dotted", "double", "none"]) e(`divide-${v2}`, [() => G2(":where(& > :not(:last-child))", [o("--tw-sort", "divide-style"), o("--tw-border-style", v2), o("border-style", v2)])]);
    }
    e("bg-auto", [["background-size", "auto"]]), e("bg-cover", [["background-size", "cover"]]), e("bg-contain", [["background-size", "contain"]]), n("bg-size", { handle(l3) {
      if (l3) return [o("background-size", l3)];
    } }), e("bg-fixed", [["background-attachment", "fixed"]]), e("bg-local", [["background-attachment", "local"]]), e("bg-scroll", [["background-attachment", "scroll"]]), e("bg-top", [["background-position", "top"]]), e("bg-top-left", [["background-position", "left top"]]), e("bg-top-right", [["background-position", "right top"]]), e("bg-bottom", [["background-position", "bottom"]]), e("bg-bottom-left", [["background-position", "left bottom"]]), e("bg-bottom-right", [["background-position", "right bottom"]]), e("bg-left", [["background-position", "left"]]), e("bg-right", [["background-position", "right"]]), e("bg-center", [["background-position", "center"]]), n("bg-position", { handle(l3) {
      if (l3) return [o("background-position", l3)];
    } }), e("bg-repeat", [["background-repeat", "repeat"]]), e("bg-no-repeat", [["background-repeat", "no-repeat"]]), e("bg-repeat-x", [["background-repeat", "repeat-x"]]), e("bg-repeat-y", [["background-repeat", "repeat-y"]]), e("bg-repeat-round", [["background-repeat", "round"]]), e("bg-repeat-space", [["background-repeat", "space"]]), e("bg-none", [["background-image", "none"]]);
    {
      let v2 = function(T2) {
        let D2 = "in oklab";
        if (T2?.kind === "named") switch (T2.value) {
          case "longer":
          case "shorter":
          case "increasing":
          case "decreasing":
            D2 = `in oklch ${T2.value} hue`;
            break;
          default:
            D2 = `in ${T2.value}`;
        }
        else T2?.kind === "arbitrary" && (D2 = T2.value);
        return D2;
      }, C2 = function({ negative: T2 }) {
        return (D2) => {
          if (!D2.value) return;
          if (D2.value.kind === "arbitrary") {
            if (D2.modifier) return;
            let M2 = D2.value.value;
            switch (D2.value.dataType ?? me(M2, ["angle"])) {
              case "angle":
                return M2 = T2 ? `calc(${M2} * -1)` : `${M2}`, [o("--tw-gradient-position", M2), o("background-image", `linear-gradient(var(--tw-gradient-stops,${M2}))`)];
              default:
                return T2 ? void 0 : [o("--tw-gradient-position", M2), o("background-image", `linear-gradient(var(--tw-gradient-stops,${M2}))`)];
            }
          }
          let V2 = D2.value.value;
          if (!T2 && g2.has(V2)) V2 = g2.get(V2);
          else if (u(V2)) V2 = T2 ? `calc(${V2}deg * -1)` : `${V2}deg`;
          else return;
          let R2 = v2(D2.modifier);
          return [o("--tw-gradient-position", `${V2}`), J2("@supports (background-image: linear-gradient(in lab, red, red))", [o("--tw-gradient-position", `${V2} ${R2}`)]), o("background-image", "linear-gradient(var(--tw-gradient-stops))")];
        };
      }, b2 = function({ negative: T2 }) {
        return (D2) => {
          if (D2.value?.kind === "arbitrary") {
            if (D2.modifier) return;
            let M2 = D2.value.value;
            return [o("--tw-gradient-position", M2), o("background-image", `conic-gradient(var(--tw-gradient-stops,${M2}))`)];
          }
          let V2 = v2(D2.modifier);
          if (!D2.value) return [o("--tw-gradient-position", V2), o("background-image", "conic-gradient(var(--tw-gradient-stops))")];
          let R2 = D2.value.value;
          if (u(R2)) return R2 = T2 ? `calc(${R2}deg * -1)` : `${R2}deg`, [o("--tw-gradient-position", `from ${R2} ${V2}`), o("background-image", "conic-gradient(var(--tw-gradient-stops))")];
        };
      };
      var z2 = v2, Y2 = C2, q2 = b2;
      let l3 = ["oklab", "oklch", "srgb", "hsl", "longer", "shorter", "increasing", "decreasing"], g2 = /* @__PURE__ */ new Map([["to-t", "to top"], ["to-tr", "to top right"], ["to-r", "to right"], ["to-br", "to bottom right"], ["to-b", "to bottom"], ["to-bl", "to bottom left"], ["to-l", "to left"], ["to-tl", "to top left"]]);
      r.functional("-bg-linear", C2({ negative: true })), r.functional("bg-linear", C2({ negative: false })), i("bg-linear", () => [{ values: [...g2.keys()], modifiers: l3 }, { values: ["0", "30", "60", "90", "120", "150", "180", "210", "240", "270", "300", "330"], supportsNegative: true, modifiers: l3 }]), r.functional("-bg-conic", b2({ negative: true })), r.functional("bg-conic", b2({ negative: false })), i("bg-conic", () => [{ hasDefaultValue: true, modifiers: l3 }, { values: ["0", "30", "60", "90", "120", "150", "180", "210", "240", "270", "300", "330"], supportsNegative: true, modifiers: l3 }]), r.functional("bg-radial", (T2) => {
        if (!T2.value) {
          let D2 = v2(T2.modifier);
          return [o("--tw-gradient-position", D2), o("background-image", "radial-gradient(var(--tw-gradient-stops))")];
        }
        if (T2.value.kind === "arbitrary") {
          if (T2.modifier) return;
          let D2 = T2.value.value;
          return [o("--tw-gradient-position", D2), o("background-image", `radial-gradient(var(--tw-gradient-stops,${D2}))`)];
        }
      }), i("bg-radial", () => [{ hasDefaultValue: true, modifiers: l3 }]);
    }
    r.functional("bg", (l3) => {
      if (l3.value) {
        if (l3.value.kind === "arbitrary") {
          let g2 = l3.value.value;
          switch (l3.value.dataType ?? me(g2, ["image", "color", "percentage", "position", "bg-size", "length", "url"])) {
            case "percentage":
            case "position":
              return l3.modifier ? void 0 : [o("background-position", g2)];
            case "bg-size":
            case "length":
            case "size":
              return l3.modifier ? void 0 : [o("background-size", g2)];
            case "image":
            case "url":
              return l3.modifier ? void 0 : [o("background-image", g2)];
            default:
              return g2 = X2(g2, l3.modifier, t2), g2 === null ? void 0 : [o("background-color", g2)];
          }
        }
        {
          let g2 = te2(l3, t2, ["--background-color", "--color"]);
          if (g2) return [o("background-color", g2)];
        }
        {
          if (l3.modifier) return;
          let g2 = t2.resolve(l3.value.value, ["--background-image"]);
          if (g2) return [o("background-image", g2)];
        }
      }
    }), i("bg", () => [{ values: ["current", "inherit", "transparent"], valueThemeKeys: ["--background-color", "--color"], modifiers: Array.from({ length: 21 }, (l3, g2) => `${g2 * 5}`) }, { values: [], valueThemeKeys: ["--background-image"] }]);
    let h2 = () => W2([S2("--tw-gradient-position"), S2("--tw-gradient-from", "#0000", "<color>"), S2("--tw-gradient-via", "#0000", "<color>"), S2("--tw-gradient-to", "#0000", "<color>"), S2("--tw-gradient-stops"), S2("--tw-gradient-via-stops"), S2("--tw-gradient-from-position", "0%", "<length-percentage>"), S2("--tw-gradient-via-position", "50%", "<length-percentage>"), S2("--tw-gradient-to-position", "100%", "<length-percentage>")]);
    function y2(l3, g2) {
      r.functional(l3, (v2) => {
        if (v2.value) {
          if (v2.value.kind === "arbitrary") {
            let C2 = v2.value.value;
            switch (v2.value.dataType ?? me(C2, ["color", "length", "percentage"])) {
              case "length":
              case "percentage":
                return v2.modifier ? void 0 : g2.position(C2);
              default:
                return C2 = X2(C2, v2.modifier, t2), C2 === null ? void 0 : g2.color(C2);
            }
          }
          {
            let C2 = te2(v2, t2, ["--background-color", "--color"]);
            if (C2) return g2.color(C2);
          }
          {
            if (v2.modifier) return;
            let C2 = t2.resolve(v2.value.value, ["--gradient-color-stop-positions"]);
            if (C2) return g2.position(C2);
            if (v2.value.value[v2.value.value.length - 1] === "%" && u(v2.value.value.slice(0, -1))) return g2.position(v2.value.value);
          }
        }
      }), i(l3, () => [{ values: ["current", "inherit", "transparent"], valueThemeKeys: ["--background-color", "--color"], modifiers: Array.from({ length: 21 }, (v2, C2) => `${C2 * 5}`) }, { values: Array.from({ length: 21 }, (v2, C2) => `${C2 * 5}%`), valueThemeKeys: ["--gradient-color-stop-positions"] }]);
    }
    y2("from", { color: (l3) => [h2(), o("--tw-sort", "--tw-gradient-from"), o("--tw-gradient-from", l3), o("--tw-gradient-stops", "var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))")], position: (l3) => [h2(), o("--tw-gradient-from-position", l3)] }), e("via-none", [["--tw-gradient-via-stops", "initial"]]), y2("via", { color: (l3) => [h2(), o("--tw-sort", "--tw-gradient-via"), o("--tw-gradient-via", l3), o("--tw-gradient-via-stops", "var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position)"), o("--tw-gradient-stops", "var(--tw-gradient-via-stops)")], position: (l3) => [h2(), o("--tw-gradient-via-position", l3)] }), y2("to", { color: (l3) => [h2(), o("--tw-sort", "--tw-gradient-to"), o("--tw-gradient-to", l3), o("--tw-gradient-stops", "var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))")], position: (l3) => [h2(), o("--tw-gradient-to-position", l3)] }), e("mask-none", [["mask-image", "none"]]), r.functional("mask", (l3) => {
      if (!l3.value || l3.modifier || l3.value.kind !== "arbitrary") return;
      let g2 = l3.value.value;
      switch (l3.value.dataType ?? me(g2, ["image", "percentage", "position", "bg-size", "length", "url"])) {
        case "percentage":
        case "position":
          return l3.modifier ? void 0 : [o("mask-position", g2)];
        case "bg-size":
        case "length":
        case "size":
          return [o("mask-size", g2)];
        case "image":
        case "url":
        default:
          return [o("mask-image", g2)];
      }
    }), e("mask-add", [["mask-composite", "add"]]), e("mask-subtract", [["mask-composite", "subtract"]]), e("mask-intersect", [["mask-composite", "intersect"]]), e("mask-exclude", [["mask-composite", "exclude"]]), e("mask-alpha", [["mask-mode", "alpha"]]), e("mask-luminance", [["mask-mode", "luminance"]]), e("mask-match", [["mask-mode", "match-source"]]), e("mask-type-alpha", [["mask-type", "alpha"]]), e("mask-type-luminance", [["mask-type", "luminance"]]), e("mask-auto", [["mask-size", "auto"]]), e("mask-cover", [["mask-size", "cover"]]), e("mask-contain", [["mask-size", "contain"]]), n("mask-size", { handle(l3) {
      if (l3) return [o("mask-size", l3)];
    } }), e("mask-top", [["mask-position", "top"]]), e("mask-top-left", [["mask-position", "left top"]]), e("mask-top-right", [["mask-position", "right top"]]), e("mask-bottom", [["mask-position", "bottom"]]), e("mask-bottom-left", [["mask-position", "left bottom"]]), e("mask-bottom-right", [["mask-position", "right bottom"]]), e("mask-left", [["mask-position", "left"]]), e("mask-right", [["mask-position", "right"]]), e("mask-center", [["mask-position", "center"]]), n("mask-position", { handle(l3) {
      if (l3) return [o("mask-position", l3)];
    } }), e("mask-repeat", [["mask-repeat", "repeat"]]), e("mask-no-repeat", [["mask-repeat", "no-repeat"]]), e("mask-repeat-x", [["mask-repeat", "repeat-x"]]), e("mask-repeat-y", [["mask-repeat", "repeat-y"]]), e("mask-repeat-round", [["mask-repeat", "round"]]), e("mask-repeat-space", [["mask-repeat", "space"]]), e("mask-clip-border", [["mask-clip", "border-box"]]), e("mask-clip-padding", [["mask-clip", "padding-box"]]), e("mask-clip-content", [["mask-clip", "content-box"]]), e("mask-clip-fill", [["mask-clip", "fill-box"]]), e("mask-clip-stroke", [["mask-clip", "stroke-box"]]), e("mask-clip-view", [["mask-clip", "view-box"]]), e("mask-no-clip", [["mask-clip", "no-clip"]]), e("mask-origin-border", [["mask-origin", "border-box"]]), e("mask-origin-padding", [["mask-origin", "padding-box"]]), e("mask-origin-content", [["mask-origin", "content-box"]]), e("mask-origin-fill", [["mask-origin", "fill-box"]]), e("mask-origin-stroke", [["mask-origin", "stroke-box"]]), e("mask-origin-view", [["mask-origin", "view-box"]]);
    let x2 = () => W2([S2("--tw-mask-linear", "linear-gradient(#fff, #fff)"), S2("--tw-mask-radial", "linear-gradient(#fff, #fff)"), S2("--tw-mask-conic", "linear-gradient(#fff, #fff)")]);
    function $2(l3, g2) {
      r.functional(l3, (v2) => {
        if (v2.value) {
          if (v2.value.kind === "arbitrary") {
            let C2 = v2.value.value;
            switch (v2.value.dataType ?? me(C2, ["length", "percentage", "color"])) {
              case "color":
                return C2 = X2(C2, v2.modifier, t2), C2 === null ? void 0 : g2.color(C2);
              case "percentage":
                return v2.modifier || !u(C2.slice(0, -1)) ? void 0 : g2.position(C2);
              default:
                return v2.modifier ? void 0 : g2.position(C2);
            }
          }
          {
            let C2 = te2(v2, t2, ["--background-color", "--color"]);
            if (C2) return g2.color(C2);
          }
          {
            if (v2.modifier) return;
            let C2 = me(v2.value.value, ["number", "percentage"]);
            if (!C2) return;
            switch (C2) {
              case "number": {
                let b2 = t2.resolve(null, ["--spacing"]);
                return !b2 || !ge(v2.value.value) ? void 0 : g2.position(`calc(${b2} * ${v2.value.value})`);
              }
              case "percentage":
                return u(v2.value.value.slice(0, -1)) ? g2.position(v2.value.value) : void 0;
              default:
                return;
            }
          }
        }
      }), i(l3, () => [{ values: ["current", "inherit", "transparent"], valueThemeKeys: ["--background-color", "--color"], modifiers: Array.from({ length: 21 }, (v2, C2) => `${C2 * 5}`) }, { values: Array.from({ length: 21 }, (v2, C2) => `${C2 * 5}%`), valueThemeKeys: ["--gradient-color-stop-positions"] }]), i(l3, () => [{ values: Array.from({ length: 21 }, (v2, C2) => `${C2 * 5}%`) }, { values: t2.get(["--spacing"]) ? ct : [] }, { values: ["current", "inherit", "transparent"], valueThemeKeys: ["--background-color", "--color"], modifiers: Array.from({ length: 21 }, (v2, C2) => `${C2 * 5}`) }]);
    }
    let A2 = () => W2([S2("--tw-mask-left", "linear-gradient(#fff, #fff)"), S2("--tw-mask-right", "linear-gradient(#fff, #fff)"), S2("--tw-mask-bottom", "linear-gradient(#fff, #fff)"), S2("--tw-mask-top", "linear-gradient(#fff, #fff)")]);
    function k(l3, g2, v2) {
      $2(l3, { color(C2) {
        let b2 = [x2(), A2(), o("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"), o("mask-composite", "intersect"), o("--tw-mask-linear", "var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top)")];
        for (let T2 of ["top", "right", "bottom", "left"]) v2[T2] && (b2.push(o(`--tw-mask-${T2}`, `linear-gradient(to ${T2}, var(--tw-mask-${T2}-from-color) var(--tw-mask-${T2}-from-position), var(--tw-mask-${T2}-to-color) var(--tw-mask-${T2}-to-position))`)), b2.push(W2([S2(`--tw-mask-${T2}-from-position`, "0%"), S2(`--tw-mask-${T2}-to-position`, "100%"), S2(`--tw-mask-${T2}-from-color`, "black"), S2(`--tw-mask-${T2}-to-color`, "transparent")])), b2.push(o(`--tw-mask-${T2}-${g2}-color`, C2)));
        return b2;
      }, position(C2) {
        let b2 = [x2(), A2(), o("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"), o("mask-composite", "intersect"), o("--tw-mask-linear", "var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top)")];
        for (let T2 of ["top", "right", "bottom", "left"]) v2[T2] && (b2.push(o(`--tw-mask-${T2}`, `linear-gradient(to ${T2}, var(--tw-mask-${T2}-from-color) var(--tw-mask-${T2}-from-position), var(--tw-mask-${T2}-to-color) var(--tw-mask-${T2}-to-position))`)), b2.push(W2([S2(`--tw-mask-${T2}-from-position`, "0%"), S2(`--tw-mask-${T2}-to-position`, "100%"), S2(`--tw-mask-${T2}-from-color`, "black"), S2(`--tw-mask-${T2}-to-color`, "transparent")])), b2.push(o(`--tw-mask-${T2}-${g2}-position`, C2)));
        return b2;
      } });
    }
    k("mask-x-from", "from", { top: false, right: true, bottom: false, left: true }), k("mask-x-to", "to", { top: false, right: true, bottom: false, left: true }), k("mask-y-from", "from", { top: true, right: false, bottom: true, left: false }), k("mask-y-to", "to", { top: true, right: false, bottom: true, left: false }), k("mask-t-from", "from", { top: true, right: false, bottom: false, left: false }), k("mask-t-to", "to", { top: true, right: false, bottom: false, left: false }), k("mask-r-from", "from", { top: false, right: true, bottom: false, left: false }), k("mask-r-to", "to", { top: false, right: true, bottom: false, left: false }), k("mask-b-from", "from", { top: false, right: false, bottom: true, left: false }), k("mask-b-to", "to", { top: false, right: false, bottom: true, left: false }), k("mask-l-from", "from", { top: false, right: false, bottom: false, left: true }), k("mask-l-to", "to", { top: false, right: false, bottom: false, left: true });
    let U2 = () => W2([S2("--tw-mask-linear-position", "0deg"), S2("--tw-mask-linear-from-position", "0%"), S2("--tw-mask-linear-to-position", "100%"), S2("--tw-mask-linear-from-color", "black"), S2("--tw-mask-linear-to-color", "transparent")]);
    n("mask-linear", { defaultValue: null, supportsNegative: true, supportsFractions: false, handleBareValue(l3) {
      return u(l3.value) ? `calc(1deg * ${l3.value})` : null;
    }, handleNegativeBareValue(l3) {
      return u(l3.value) ? `calc(1deg * -${l3.value})` : null;
    }, handle: (l3) => [x2(), U2(), o("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"), o("mask-composite", "intersect"), o("--tw-mask-linear", "linear-gradient(var(--tw-mask-linear-stops, var(--tw-mask-linear-position)))"), o("--tw-mask-linear-position", l3)] }), i("mask-linear", () => [{ supportsNegative: true, values: ["0", "1", "2", "3", "6", "12", "45", "90", "180"] }]), $2("mask-linear-from", { color: (l3) => [x2(), U2(), o("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"), o("mask-composite", "intersect"), o("--tw-mask-linear-stops", "var(--tw-mask-linear-position), var(--tw-mask-linear-from-color) var(--tw-mask-linear-from-position), var(--tw-mask-linear-to-color) var(--tw-mask-linear-to-position)"), o("--tw-mask-linear", "linear-gradient(var(--tw-mask-linear-stops))"), o("--tw-mask-linear-from-color", l3)], position: (l3) => [x2(), U2(), o("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"), o("mask-composite", "intersect"), o("--tw-mask-linear-stops", "var(--tw-mask-linear-position), var(--tw-mask-linear-from-color) var(--tw-mask-linear-from-position), var(--tw-mask-linear-to-color) var(--tw-mask-linear-to-position)"), o("--tw-mask-linear", "linear-gradient(var(--tw-mask-linear-stops))"), o("--tw-mask-linear-from-position", l3)] }), $2("mask-linear-to", { color: (l3) => [x2(), U2(), o("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"), o("mask-composite", "intersect"), o("--tw-mask-linear-stops", "var(--tw-mask-linear-position), var(--tw-mask-linear-from-color) var(--tw-mask-linear-from-position), var(--tw-mask-linear-to-color) var(--tw-mask-linear-to-position)"), o("--tw-mask-linear", "linear-gradient(var(--tw-mask-linear-stops))"), o("--tw-mask-linear-to-color", l3)], position: (l3) => [x2(), U2(), o("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"), o("mask-composite", "intersect"), o("--tw-mask-linear-stops", "var(--tw-mask-linear-position), var(--tw-mask-linear-from-color) var(--tw-mask-linear-from-position), var(--tw-mask-linear-to-color) var(--tw-mask-linear-to-position)"), o("--tw-mask-linear", "linear-gradient(var(--tw-mask-linear-stops))"), o("--tw-mask-linear-to-position", l3)] });
    let N2 = () => W2([S2("--tw-mask-radial-from-position", "0%"), S2("--tw-mask-radial-to-position", "100%"), S2("--tw-mask-radial-from-color", "black"), S2("--tw-mask-radial-to-color", "transparent"), S2("--tw-mask-radial-shape", "ellipse"), S2("--tw-mask-radial-size", "farthest-corner"), S2("--tw-mask-radial-position", "center")]);
    e("mask-circle", [["--tw-mask-radial-shape", "circle"]]), e("mask-ellipse", [["--tw-mask-radial-shape", "ellipse"]]), e("mask-radial-closest-side", [["--tw-mask-radial-size", "closest-side"]]), e("mask-radial-farthest-side", [["--tw-mask-radial-size", "farthest-side"]]), e("mask-radial-closest-corner", [["--tw-mask-radial-size", "closest-corner"]]), e("mask-radial-farthest-corner", [["--tw-mask-radial-size", "farthest-corner"]]), e("mask-radial-at-top", [["--tw-mask-radial-position", "top"]]), e("mask-radial-at-top-left", [["--tw-mask-radial-position", "top left"]]), e("mask-radial-at-top-right", [["--tw-mask-radial-position", "top right"]]), e("mask-radial-at-bottom", [["--tw-mask-radial-position", "bottom"]]), e("mask-radial-at-bottom-left", [["--tw-mask-radial-position", "bottom left"]]), e("mask-radial-at-bottom-right", [["--tw-mask-radial-position", "bottom right"]]), e("mask-radial-at-left", [["--tw-mask-radial-position", "left"]]), e("mask-radial-at-right", [["--tw-mask-radial-position", "right"]]), e("mask-radial-at-center", [["--tw-mask-radial-position", "center"]]), n("mask-radial-at", { defaultValue: null, supportsNegative: false, supportsFractions: false, handle: (l3) => [o("--tw-mask-radial-position", l3)] }), n("mask-radial", { defaultValue: null, supportsNegative: false, supportsFractions: false, handle: (l3) => [x2(), N2(), o("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"), o("mask-composite", "intersect"), o("--tw-mask-radial", "radial-gradient(var(--tw-mask-radial-stops, var(--tw-mask-radial-size)))"), o("--tw-mask-radial-size", l3)] }), $2("mask-radial-from", { color: (l3) => [x2(), N2(), o("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"), o("mask-composite", "intersect"), o("--tw-mask-radial-stops", "var(--tw-mask-radial-shape) var(--tw-mask-radial-size) at var(--tw-mask-radial-position), var(--tw-mask-radial-from-color) var(--tw-mask-radial-from-position), var(--tw-mask-radial-to-color) var(--tw-mask-radial-to-position)"), o("--tw-mask-radial", "radial-gradient(var(--tw-mask-radial-stops))"), o("--tw-mask-radial-from-color", l3)], position: (l3) => [x2(), N2(), o("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"), o("mask-composite", "intersect"), o("--tw-mask-radial-stops", "var(--tw-mask-radial-shape) var(--tw-mask-radial-size) at var(--tw-mask-radial-position), var(--tw-mask-radial-from-color) var(--tw-mask-radial-from-position), var(--tw-mask-radial-to-color) var(--tw-mask-radial-to-position)"), o("--tw-mask-radial", "radial-gradient(var(--tw-mask-radial-stops))"), o("--tw-mask-radial-from-position", l3)] }), $2("mask-radial-to", { color: (l3) => [x2(), N2(), o("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"), o("mask-composite", "intersect"), o("--tw-mask-radial-stops", "var(--tw-mask-radial-shape) var(--tw-mask-radial-size) at var(--tw-mask-radial-position), var(--tw-mask-radial-from-color) var(--tw-mask-radial-from-position), var(--tw-mask-radial-to-color) var(--tw-mask-radial-to-position)"), o("--tw-mask-radial", "radial-gradient(var(--tw-mask-radial-stops))"), o("--tw-mask-radial-to-color", l3)], position: (l3) => [x2(), N2(), o("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"), o("mask-composite", "intersect"), o("--tw-mask-radial-stops", "var(--tw-mask-radial-shape) var(--tw-mask-radial-size) at var(--tw-mask-radial-position), var(--tw-mask-radial-from-color) var(--tw-mask-radial-from-position), var(--tw-mask-radial-to-color) var(--tw-mask-radial-to-position)"), o("--tw-mask-radial", "radial-gradient(var(--tw-mask-radial-stops))"), o("--tw-mask-radial-to-position", l3)] });
    let O2 = () => W2([S2("--tw-mask-conic-position", "0deg"), S2("--tw-mask-conic-from-position", "0%"), S2("--tw-mask-conic-to-position", "100%"), S2("--tw-mask-conic-from-color", "black"), S2("--tw-mask-conic-to-color", "transparent")]);
    n("mask-conic", { defaultValue: null, supportsNegative: true, supportsFractions: false, handleBareValue(l3) {
      return u(l3.value) ? `calc(1deg * ${l3.value})` : null;
    }, handleNegativeBareValue(l3) {
      return u(l3.value) ? `calc(1deg * -${l3.value})` : null;
    }, handle: (l3) => [x2(), O2(), o("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"), o("mask-composite", "intersect"), o("--tw-mask-conic", "conic-gradient(var(--tw-mask-conic-stops, var(--tw-mask-conic-position)))"), o("--tw-mask-conic-position", l3)] }), i("mask-conic", () => [{ supportsNegative: true, values: ["0", "1", "2", "3", "6", "12", "45", "90", "180"] }]), $2("mask-conic-from", { color: (l3) => [x2(), O2(), o("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"), o("mask-composite", "intersect"), o("--tw-mask-conic-stops", "from var(--tw-mask-conic-position), var(--tw-mask-conic-from-color) var(--tw-mask-conic-from-position), var(--tw-mask-conic-to-color) var(--tw-mask-conic-to-position)"), o("--tw-mask-conic", "conic-gradient(var(--tw-mask-conic-stops))"), o("--tw-mask-conic-from-color", l3)], position: (l3) => [x2(), O2(), o("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"), o("mask-composite", "intersect"), o("--tw-mask-conic-stops", "from var(--tw-mask-conic-position), var(--tw-mask-conic-from-color) var(--tw-mask-conic-from-position), var(--tw-mask-conic-to-color) var(--tw-mask-conic-to-position)"), o("--tw-mask-conic", "conic-gradient(var(--tw-mask-conic-stops))"), o("--tw-mask-conic-from-position", l3)] }), $2("mask-conic-to", { color: (l3) => [x2(), O2(), o("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"), o("mask-composite", "intersect"), o("--tw-mask-conic-stops", "from var(--tw-mask-conic-position), var(--tw-mask-conic-from-color) var(--tw-mask-conic-from-position), var(--tw-mask-conic-to-color) var(--tw-mask-conic-to-position)"), o("--tw-mask-conic", "conic-gradient(var(--tw-mask-conic-stops))"), o("--tw-mask-conic-to-color", l3)], position: (l3) => [x2(), O2(), o("mask-image", "var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"), o("mask-composite", "intersect"), o("--tw-mask-conic-stops", "from var(--tw-mask-conic-position), var(--tw-mask-conic-from-color) var(--tw-mask-conic-from-position), var(--tw-mask-conic-to-color) var(--tw-mask-conic-to-position)"), o("--tw-mask-conic", "conic-gradient(var(--tw-mask-conic-stops))"), o("--tw-mask-conic-to-position", l3)] }), e("box-decoration-slice", [["-webkit-box-decoration-break", "slice"], ["box-decoration-break", "slice"]]), e("box-decoration-clone", [["-webkit-box-decoration-break", "clone"], ["box-decoration-break", "clone"]]), e("bg-clip-text", [["background-clip", "text"]]), e("bg-clip-border", [["background-clip", "border-box"]]), e("bg-clip-padding", [["background-clip", "padding-box"]]), e("bg-clip-content", [["background-clip", "content-box"]]), e("bg-origin-border", [["background-origin", "border-box"]]), e("bg-origin-padding", [["background-origin", "padding-box"]]), e("bg-origin-content", [["background-origin", "content-box"]]);
    for (let l3 of ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]) e(`bg-blend-${l3}`, [["background-blend-mode", l3]]), e(`mix-blend-${l3}`, [["mix-blend-mode", l3]]);
    e("mix-blend-plus-darker", [["mix-blend-mode", "plus-darker"]]), e("mix-blend-plus-lighter", [["mix-blend-mode", "plus-lighter"]]), e("fill-none", [["fill", "none"]]), r.functional("fill", (l3) => {
      if (!l3.value) return;
      if (l3.value.kind === "arbitrary") {
        let v2 = X2(l3.value.value, l3.modifier, t2);
        return v2 === null ? void 0 : [o("fill", v2)];
      }
      let g2 = te2(l3, t2, ["--fill", "--color"]);
      if (g2) return [o("fill", g2)];
    }), i("fill", () => [{ values: ["current", "inherit", "transparent"], valueThemeKeys: ["--fill", "--color"], modifiers: Array.from({ length: 21 }, (l3, g2) => `${g2 * 5}`) }]), e("stroke-none", [["stroke", "none"]]), r.functional("stroke", (l3) => {
      if (l3.value) {
        if (l3.value.kind === "arbitrary") {
          let g2 = l3.value.value;
          switch (l3.value.dataType ?? me(g2, ["color", "number", "length", "percentage"])) {
            case "number":
            case "length":
            case "percentage":
              return l3.modifier ? void 0 : [o("stroke-width", g2)];
            default:
              return g2 = X2(l3.value.value, l3.modifier, t2), g2 === null ? void 0 : [o("stroke", g2)];
          }
        }
        {
          let g2 = te2(l3, t2, ["--stroke", "--color"]);
          if (g2) return [o("stroke", g2)];
        }
        {
          let g2 = t2.resolve(l3.value.value, ["--stroke-width"]);
          if (g2) return [o("stroke-width", g2)];
          if (u(l3.value.value)) return [o("stroke-width", l3.value.value)];
        }
      }
    }), i("stroke", () => [{ values: ["current", "inherit", "transparent"], valueThemeKeys: ["--stroke", "--color"], modifiers: Array.from({ length: 21 }, (l3, g2) => `${g2 * 5}`) }, { values: ["0", "1", "2", "3"], valueThemeKeys: ["--stroke-width"] }]), e("object-contain", [["object-fit", "contain"]]), e("object-cover", [["object-fit", "cover"]]), e("object-fill", [["object-fit", "fill"]]), e("object-none", [["object-fit", "none"]]), e("object-scale-down", [["object-fit", "scale-down"]]), n("object", { themeKeys: ["--object-position"], handle: (l3) => [o("object-position", l3)], staticValues: { top: [o("object-position", "top")], "top-left": [o("object-position", "left top")], "top-right": [o("object-position", "right top")], bottom: [o("object-position", "bottom")], "bottom-left": [o("object-position", "left bottom")], "bottom-right": [o("object-position", "right bottom")], left: [o("object-position", "left")], right: [o("object-position", "right")], center: [o("object-position", "center")] } });
    for (let [l3, g2] of [["p", "padding"], ["px", "padding-inline"], ["py", "padding-block"], ["ps", "padding-inline-start"], ["pe", "padding-inline-end"], ["pt", "padding-top"], ["pr", "padding-right"], ["pb", "padding-bottom"], ["pl", "padding-left"]]) a(l3, ["--padding", "--spacing"], (v2) => [o(g2, v2)]);
    e("text-left", [["text-align", "left"]]), e("text-center", [["text-align", "center"]]), e("text-right", [["text-align", "right"]]), e("text-justify", [["text-align", "justify"]]), e("text-start", [["text-align", "start"]]), e("text-end", [["text-align", "end"]]), a("indent", ["--text-indent", "--spacing"], (l3) => [o("text-indent", l3)], { supportsNegative: true }), e("align-baseline", [["vertical-align", "baseline"]]), e("align-top", [["vertical-align", "top"]]), e("align-middle", [["vertical-align", "middle"]]), e("align-bottom", [["vertical-align", "bottom"]]), e("align-text-top", [["vertical-align", "text-top"]]), e("align-text-bottom", [["vertical-align", "text-bottom"]]), e("align-sub", [["vertical-align", "sub"]]), e("align-super", [["vertical-align", "super"]]), n("align", { themeKeys: [], handle: (l3) => [o("vertical-align", l3)] }), r.functional("font", (l3) => {
      if (!(!l3.value || l3.modifier)) {
        if (l3.value.kind === "arbitrary") {
          let g2 = l3.value.value;
          switch (l3.value.dataType ?? me(g2, ["number", "generic-name", "family-name"])) {
            case "generic-name":
            case "family-name":
              return [o("font-family", g2)];
            default:
              return [W2([S2("--tw-font-weight")]), o("--tw-font-weight", g2), o("font-weight", g2)];
          }
        }
        {
          let g2 = t2.resolveWith(l3.value.value, ["--font"], ["--font-feature-settings", "--font-variation-settings"]);
          if (g2) {
            let [v2, C2 = {}] = g2;
            return [o("font-family", v2), o("font-feature-settings", C2["--font-feature-settings"]), o("font-variation-settings", C2["--font-variation-settings"])];
          }
        }
        {
          let g2 = t2.resolve(l3.value.value, ["--font-weight"]);
          if (g2) return [W2([S2("--tw-font-weight")]), o("--tw-font-weight", g2), o("font-weight", g2)];
        }
      }
    }), i("font", () => [{ values: [], valueThemeKeys: ["--font"] }, { values: [], valueThemeKeys: ["--font-weight"] }]), e("uppercase", [["text-transform", "uppercase"]]), e("lowercase", [["text-transform", "lowercase"]]), e("capitalize", [["text-transform", "capitalize"]]), e("normal-case", [["text-transform", "none"]]), e("italic", [["font-style", "italic"]]), e("not-italic", [["font-style", "normal"]]), e("underline", [["text-decoration-line", "underline"]]), e("overline", [["text-decoration-line", "overline"]]), e("line-through", [["text-decoration-line", "line-through"]]), e("no-underline", [["text-decoration-line", "none"]]), e("font-stretch-normal", [["font-stretch", "normal"]]), e("font-stretch-ultra-condensed", [["font-stretch", "ultra-condensed"]]), e("font-stretch-extra-condensed", [["font-stretch", "extra-condensed"]]), e("font-stretch-condensed", [["font-stretch", "condensed"]]), e("font-stretch-semi-condensed", [["font-stretch", "semi-condensed"]]), e("font-stretch-semi-expanded", [["font-stretch", "semi-expanded"]]), e("font-stretch-expanded", [["font-stretch", "expanded"]]), e("font-stretch-extra-expanded", [["font-stretch", "extra-expanded"]]), e("font-stretch-ultra-expanded", [["font-stretch", "ultra-expanded"]]), n("font-stretch", { handleBareValue: ({ value: l3 }) => {
      if (!l3.endsWith("%")) return null;
      let g2 = Number(l3.slice(0, -1));
      return !u(g2) || Number.isNaN(g2) || g2 < 50 || g2 > 200 ? null : l3;
    }, handle: (l3) => [o("font-stretch", l3)] }), i("font-stretch", () => [{ values: ["50%", "75%", "90%", "95%", "100%", "105%", "110%", "125%", "150%", "200%"] }]), s("placeholder", { themeKeys: ["--background-color", "--color"], handle: (l3) => [G2("&::placeholder", [o("--tw-sort", "placeholder-color"), o("color", l3)])] }), e("decoration-solid", [["text-decoration-style", "solid"]]), e("decoration-double", [["text-decoration-style", "double"]]), e("decoration-dotted", [["text-decoration-style", "dotted"]]), e("decoration-dashed", [["text-decoration-style", "dashed"]]), e("decoration-wavy", [["text-decoration-style", "wavy"]]), e("decoration-auto", [["text-decoration-thickness", "auto"]]), e("decoration-from-font", [["text-decoration-thickness", "from-font"]]), r.functional("decoration", (l3) => {
      if (l3.value) {
        if (l3.value.kind === "arbitrary") {
          let g2 = l3.value.value;
          switch (l3.value.dataType ?? me(g2, ["color", "length", "percentage"])) {
            case "length":
            case "percentage":
              return l3.modifier ? void 0 : [o("text-decoration-thickness", g2)];
            default:
              return g2 = X2(g2, l3.modifier, t2), g2 === null ? void 0 : [o("text-decoration-color", g2)];
          }
        }
        {
          let g2 = t2.resolve(l3.value.value, ["--text-decoration-thickness"]);
          if (g2) return l3.modifier ? void 0 : [o("text-decoration-thickness", g2)];
          if (u(l3.value.value)) return l3.modifier ? void 0 : [o("text-decoration-thickness", `${l3.value.value}px`)];
        }
        {
          let g2 = te2(l3, t2, ["--text-decoration-color", "--color"]);
          if (g2) return [o("text-decoration-color", g2)];
        }
      }
    }), i("decoration", () => [{ values: ["current", "inherit", "transparent"], valueThemeKeys: ["--text-decoration-color", "--color"], modifiers: Array.from({ length: 21 }, (l3, g2) => `${g2 * 5}`) }, { values: ["0", "1", "2"], valueThemeKeys: ["--text-decoration-thickness"] }]), n("animate", { themeKeys: ["--animate"], handle: (l3) => [o("animation", l3)], staticValues: { none: [o("animation", "none")] } });
    {
      let l3 = ["var(--tw-blur,)", "var(--tw-brightness,)", "var(--tw-contrast,)", "var(--tw-grayscale,)", "var(--tw-hue-rotate,)", "var(--tw-invert,)", "var(--tw-saturate,)", "var(--tw-sepia,)", "var(--tw-drop-shadow,)"].join(" "), g2 = ["var(--tw-backdrop-blur,)", "var(--tw-backdrop-brightness,)", "var(--tw-backdrop-contrast,)", "var(--tw-backdrop-grayscale,)", "var(--tw-backdrop-hue-rotate,)", "var(--tw-backdrop-invert,)", "var(--tw-backdrop-opacity,)", "var(--tw-backdrop-saturate,)", "var(--tw-backdrop-sepia,)"].join(" "), v2 = () => W2([S2("--tw-blur"), S2("--tw-brightness"), S2("--tw-contrast"), S2("--tw-grayscale"), S2("--tw-hue-rotate"), S2("--tw-invert"), S2("--tw-opacity"), S2("--tw-saturate"), S2("--tw-sepia"), S2("--tw-drop-shadow"), S2("--tw-drop-shadow-color"), S2("--tw-drop-shadow-alpha", "100%", "<percentage>"), S2("--tw-drop-shadow-size")]), C2 = () => W2([S2("--tw-backdrop-blur"), S2("--tw-backdrop-brightness"), S2("--tw-backdrop-contrast"), S2("--tw-backdrop-grayscale"), S2("--tw-backdrop-hue-rotate"), S2("--tw-backdrop-invert"), S2("--tw-backdrop-opacity"), S2("--tw-backdrop-saturate"), S2("--tw-backdrop-sepia")]);
      r.functional("filter", (b2) => {
        if (!b2.modifier) {
          if (b2.value === null) return [v2(), o("filter", l3)];
          if (b2.value.kind === "arbitrary") return [o("filter", b2.value.value)];
          switch (b2.value.value) {
            case "none":
              return [o("filter", "none")];
          }
        }
      }), r.functional("backdrop-filter", (b2) => {
        if (!b2.modifier) {
          if (b2.value === null) return [C2(), o("-webkit-backdrop-filter", g2), o("backdrop-filter", g2)];
          if (b2.value.kind === "arbitrary") return [o("-webkit-backdrop-filter", b2.value.value), o("backdrop-filter", b2.value.value)];
          switch (b2.value.value) {
            case "none":
              return [o("-webkit-backdrop-filter", "none"), o("backdrop-filter", "none")];
          }
        }
      }), n("blur", { themeKeys: ["--blur"], handle: (b2) => [v2(), o("--tw-blur", `blur(${b2})`), o("filter", l3)], staticValues: { none: [v2(), o("--tw-blur", " "), o("filter", l3)] } }), n("backdrop-blur", { themeKeys: ["--backdrop-blur", "--blur"], handle: (b2) => [C2(), o("--tw-backdrop-blur", `blur(${b2})`), o("-webkit-backdrop-filter", g2), o("backdrop-filter", g2)], staticValues: { none: [C2(), o("--tw-backdrop-blur", " "), o("-webkit-backdrop-filter", g2), o("backdrop-filter", g2)] } }), n("brightness", { themeKeys: ["--brightness"], handleBareValue: ({ value: b2 }) => u(b2) ? `${b2}%` : null, handle: (b2) => [v2(), o("--tw-brightness", `brightness(${b2})`), o("filter", l3)] }), n("backdrop-brightness", { themeKeys: ["--backdrop-brightness", "--brightness"], handleBareValue: ({ value: b2 }) => u(b2) ? `${b2}%` : null, handle: (b2) => [C2(), o("--tw-backdrop-brightness", `brightness(${b2})`), o("-webkit-backdrop-filter", g2), o("backdrop-filter", g2)] }), i("brightness", () => [{ values: ["0", "50", "75", "90", "95", "100", "105", "110", "125", "150", "200"], valueThemeKeys: ["--brightness"] }]), i("backdrop-brightness", () => [{ values: ["0", "50", "75", "90", "95", "100", "105", "110", "125", "150", "200"], valueThemeKeys: ["--backdrop-brightness", "--brightness"] }]), n("contrast", { themeKeys: ["--contrast"], handleBareValue: ({ value: b2 }) => u(b2) ? `${b2}%` : null, handle: (b2) => [v2(), o("--tw-contrast", `contrast(${b2})`), o("filter", l3)] }), n("backdrop-contrast", { themeKeys: ["--backdrop-contrast", "--contrast"], handleBareValue: ({ value: b2 }) => u(b2) ? `${b2}%` : null, handle: (b2) => [C2(), o("--tw-backdrop-contrast", `contrast(${b2})`), o("-webkit-backdrop-filter", g2), o("backdrop-filter", g2)] }), i("contrast", () => [{ values: ["0", "50", "75", "100", "125", "150", "200"], valueThemeKeys: ["--contrast"] }]), i("backdrop-contrast", () => [{ values: ["0", "50", "75", "100", "125", "150", "200"], valueThemeKeys: ["--backdrop-contrast", "--contrast"] }]), n("grayscale", { themeKeys: ["--grayscale"], handleBareValue: ({ value: b2 }) => u(b2) ? `${b2}%` : null, defaultValue: "100%", handle: (b2) => [v2(), o("--tw-grayscale", `grayscale(${b2})`), o("filter", l3)] }), n("backdrop-grayscale", { themeKeys: ["--backdrop-grayscale", "--grayscale"], handleBareValue: ({ value: b2 }) => u(b2) ? `${b2}%` : null, defaultValue: "100%", handle: (b2) => [C2(), o("--tw-backdrop-grayscale", `grayscale(${b2})`), o("-webkit-backdrop-filter", g2), o("backdrop-filter", g2)] }), i("grayscale", () => [{ values: ["0", "25", "50", "75", "100"], valueThemeKeys: ["--grayscale"], hasDefaultValue: true }]), i("backdrop-grayscale", () => [{ values: ["0", "25", "50", "75", "100"], valueThemeKeys: ["--backdrop-grayscale", "--grayscale"], hasDefaultValue: true }]), n("hue-rotate", { supportsNegative: true, themeKeys: ["--hue-rotate"], handleBareValue: ({ value: b2 }) => u(b2) ? `${b2}deg` : null, handle: (b2) => [v2(), o("--tw-hue-rotate", `hue-rotate(${b2})`), o("filter", l3)] }), n("backdrop-hue-rotate", { supportsNegative: true, themeKeys: ["--backdrop-hue-rotate", "--hue-rotate"], handleBareValue: ({ value: b2 }) => u(b2) ? `${b2}deg` : null, handle: (b2) => [C2(), o("--tw-backdrop-hue-rotate", `hue-rotate(${b2})`), o("-webkit-backdrop-filter", g2), o("backdrop-filter", g2)] }), i("hue-rotate", () => [{ values: ["0", "15", "30", "60", "90", "180"], valueThemeKeys: ["--hue-rotate"] }]), i("backdrop-hue-rotate", () => [{ values: ["0", "15", "30", "60", "90", "180"], valueThemeKeys: ["--backdrop-hue-rotate", "--hue-rotate"] }]), n("invert", { themeKeys: ["--invert"], handleBareValue: ({ value: b2 }) => u(b2) ? `${b2}%` : null, defaultValue: "100%", handle: (b2) => [v2(), o("--tw-invert", `invert(${b2})`), o("filter", l3)] }), n("backdrop-invert", { themeKeys: ["--backdrop-invert", "--invert"], handleBareValue: ({ value: b2 }) => u(b2) ? `${b2}%` : null, defaultValue: "100%", handle: (b2) => [C2(), o("--tw-backdrop-invert", `invert(${b2})`), o("-webkit-backdrop-filter", g2), o("backdrop-filter", g2)] }), i("invert", () => [{ values: ["0", "25", "50", "75", "100"], valueThemeKeys: ["--invert"], hasDefaultValue: true }]), i("backdrop-invert", () => [{ values: ["0", "25", "50", "75", "100"], valueThemeKeys: ["--backdrop-invert", "--invert"], hasDefaultValue: true }]), n("saturate", { themeKeys: ["--saturate"], handleBareValue: ({ value: b2 }) => u(b2) ? `${b2}%` : null, handle: (b2) => [v2(), o("--tw-saturate", `saturate(${b2})`), o("filter", l3)] }), n("backdrop-saturate", { themeKeys: ["--backdrop-saturate", "--saturate"], handleBareValue: ({ value: b2 }) => u(b2) ? `${b2}%` : null, handle: (b2) => [C2(), o("--tw-backdrop-saturate", `saturate(${b2})`), o("-webkit-backdrop-filter", g2), o("backdrop-filter", g2)] }), i("saturate", () => [{ values: ["0", "50", "100", "150", "200"], valueThemeKeys: ["--saturate"] }]), i("backdrop-saturate", () => [{ values: ["0", "50", "100", "150", "200"], valueThemeKeys: ["--backdrop-saturate", "--saturate"] }]), n("sepia", { themeKeys: ["--sepia"], handleBareValue: ({ value: b2 }) => u(b2) ? `${b2}%` : null, defaultValue: "100%", handle: (b2) => [v2(), o("--tw-sepia", `sepia(${b2})`), o("filter", l3)] }), n("backdrop-sepia", { themeKeys: ["--backdrop-sepia", "--sepia"], handleBareValue: ({ value: b2 }) => u(b2) ? `${b2}%` : null, defaultValue: "100%", handle: (b2) => [C2(), o("--tw-backdrop-sepia", `sepia(${b2})`), o("-webkit-backdrop-filter", g2), o("backdrop-filter", g2)] }), i("sepia", () => [{ values: ["0", "50", "100"], valueThemeKeys: ["--sepia"], hasDefaultValue: true }]), i("backdrop-sepia", () => [{ values: ["0", "50", "100"], valueThemeKeys: ["--backdrop-sepia", "--sepia"], hasDefaultValue: true }]), e("drop-shadow-none", [v2, ["--tw-drop-shadow", " "], ["filter", l3]]), r.functional("drop-shadow", (b2) => {
        let T2;
        if (b2.modifier && (b2.modifier.kind === "arbitrary" ? T2 = b2.modifier.value : u(b2.modifier.value) && (T2 = `${b2.modifier.value}%`)), !b2.value) {
          let D2 = t2.get(["--drop-shadow"]), V2 = t2.resolve(null, ["--drop-shadow"]);
          return D2 === null || V2 === null ? void 0 : [v2(), o("--tw-drop-shadow-alpha", T2), ...ft("--tw-drop-shadow-size", D2, T2, (R2) => `var(--tw-drop-shadow-color, ${R2})`), o("--tw-drop-shadow", d(V2, ",").map((R2) => `drop-shadow(${R2})`).join(" ")), o("filter", l3)];
        }
        if (b2.value.kind === "arbitrary") {
          let D2 = b2.value.value;
          switch (b2.value.dataType ?? me(D2, ["color"])) {
            case "color":
              return D2 = X2(D2, b2.modifier, t2), D2 === null ? void 0 : [v2(), o("--tw-drop-shadow-color", Q2(D2, "var(--tw-drop-shadow-alpha)")), o("--tw-drop-shadow", "var(--tw-drop-shadow-size)")];
            default:
              return b2.modifier && !T2 ? void 0 : [v2(), o("--tw-drop-shadow-alpha", T2), ...ft("--tw-drop-shadow-size", D2, T2, (R2) => `var(--tw-drop-shadow-color, ${R2})`), o("--tw-drop-shadow", "var(--tw-drop-shadow-size)"), o("filter", l3)];
          }
        }
        {
          let D2 = t2.get([`--drop-shadow-${b2.value.value}`]), V2 = t2.resolve(b2.value.value, ["--drop-shadow"]);
          if (D2 && V2) return b2.modifier && !T2 ? void 0 : T2 ? [v2(), o("--tw-drop-shadow-alpha", T2), ...ft("--tw-drop-shadow-size", D2, T2, (R2) => `var(--tw-drop-shadow-color, ${R2})`), o("--tw-drop-shadow", "var(--tw-drop-shadow-size)"), o("filter", l3)] : [v2(), o("--tw-drop-shadow-alpha", T2), ...ft("--tw-drop-shadow-size", D2, T2, (R2) => `var(--tw-drop-shadow-color, ${R2})`), o("--tw-drop-shadow", d(V2, ",").map((R2) => `drop-shadow(${R2})`).join(" ")), o("filter", l3)];
        }
        {
          let D2 = te2(b2, t2, ["--drop-shadow-color", "--color"]);
          if (D2) return D2 === "inherit" ? [v2(), o("--tw-drop-shadow-color", "inherit"), o("--tw-drop-shadow", "var(--tw-drop-shadow-size)")] : [v2(), o("--tw-drop-shadow-color", Q2(D2, "var(--tw-drop-shadow-alpha)")), o("--tw-drop-shadow", "var(--tw-drop-shadow-size)")];
        }
      }), i("drop-shadow", () => [{ values: ["current", "inherit", "transparent"], valueThemeKeys: ["--drop-shadow-color", "--color"], modifiers: Array.from({ length: 21 }, (b2, T2) => `${T2 * 5}`) }, { valueThemeKeys: ["--drop-shadow"] }]), n("backdrop-opacity", { themeKeys: ["--backdrop-opacity", "--opacity"], handleBareValue: ({ value: b2 }) => ue(b2) ? `${b2}%` : null, handle: (b2) => [C2(), o("--tw-backdrop-opacity", `opacity(${b2})`), o("-webkit-backdrop-filter", g2), o("backdrop-filter", g2)] }), i("backdrop-opacity", () => [{ values: Array.from({ length: 21 }, (b2, T2) => `${T2 * 5}`), valueThemeKeys: ["--backdrop-opacity", "--opacity"] }]);
    }
    {
      let l3 = `var(--tw-ease, ${t2.resolve(null, ["--default-transition-timing-function"]) ?? "ease"})`, g2 = `var(--tw-duration, ${t2.resolve(null, ["--default-transition-duration"]) ?? "0s"})`;
      n("transition", { defaultValue: "color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to, opacity, box-shadow, transform, translate, scale, rotate, filter, -webkit-backdrop-filter, backdrop-filter, display, content-visibility, overlay, pointer-events", themeKeys: ["--transition-property"], handle: (v2) => [o("transition-property", v2), o("transition-timing-function", l3), o("transition-duration", g2)], staticValues: { none: [o("transition-property", "none")], all: [o("transition-property", "all"), o("transition-timing-function", l3), o("transition-duration", g2)], colors: [o("transition-property", "color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to"), o("transition-timing-function", l3), o("transition-duration", g2)], opacity: [o("transition-property", "opacity"), o("transition-timing-function", l3), o("transition-duration", g2)], shadow: [o("transition-property", "box-shadow"), o("transition-timing-function", l3), o("transition-duration", g2)], transform: [o("transition-property", "transform, translate, scale, rotate"), o("transition-timing-function", l3), o("transition-duration", g2)] } }), e("transition-discrete", [["transition-behavior", "allow-discrete"]]), e("transition-normal", [["transition-behavior", "normal"]]), n("delay", { handleBareValue: ({ value: v2 }) => u(v2) ? `${v2}ms` : null, themeKeys: ["--transition-delay"], handle: (v2) => [o("transition-delay", v2)] });
      {
        let v2 = () => W2([S2("--tw-duration")]);
        e("duration-initial", [v2, ["--tw-duration", "initial"]]), r.functional("duration", (C2) => {
          if (C2.modifier || !C2.value) return;
          let b2 = null;
          if (C2.value.kind === "arbitrary" ? b2 = C2.value.value : (b2 = t2.resolve(C2.value.fraction ?? C2.value.value, ["--transition-duration"]), b2 === null && u(C2.value.value) && (b2 = `${C2.value.value}ms`)), b2 !== null) return [v2(), o("--tw-duration", b2), o("transition-duration", b2)];
        });
      }
      i("delay", () => [{ values: ["75", "100", "150", "200", "300", "500", "700", "1000"], valueThemeKeys: ["--transition-delay"] }]), i("duration", () => [{ values: ["75", "100", "150", "200", "300", "500", "700", "1000"], valueThemeKeys: ["--transition-duration"] }]);
    }
    {
      let l3 = () => W2([S2("--tw-ease")]);
      n("ease", { themeKeys: ["--ease"], handle: (g2) => [l3(), o("--tw-ease", g2), o("transition-timing-function", g2)], staticValues: { initial: [l3(), o("--tw-ease", "initial")], linear: [l3(), o("--tw-ease", "linear"), o("transition-timing-function", "linear")] } });
    }
    e("will-change-auto", [["will-change", "auto"]]), e("will-change-scroll", [["will-change", "scroll-position"]]), e("will-change-contents", [["will-change", "contents"]]), e("will-change-transform", [["will-change", "transform"]]), n("will-change", { themeKeys: [], handle: (l3) => [o("will-change", l3)] }), e("content-none", [["--tw-content", "none"], ["content", "none"]]), n("content", { themeKeys: ["--content"], handle: (l3) => [W2([S2("--tw-content", '""')]), o("--tw-content", l3), o("content", "var(--tw-content)")] });
    {
      let l3 = "var(--tw-contain-size,) var(--tw-contain-layout,) var(--tw-contain-paint,) var(--tw-contain-style,)", g2 = () => W2([S2("--tw-contain-size"), S2("--tw-contain-layout"), S2("--tw-contain-paint"), S2("--tw-contain-style")]);
      e("contain-none", [["contain", "none"]]), e("contain-content", [["contain", "content"]]), e("contain-strict", [["contain", "strict"]]), e("contain-size", [g2, ["--tw-contain-size", "size"], ["contain", l3]]), e("contain-inline-size", [g2, ["--tw-contain-size", "inline-size"], ["contain", l3]]), e("contain-layout", [g2, ["--tw-contain-layout", "layout"], ["contain", l3]]), e("contain-paint", [g2, ["--tw-contain-paint", "paint"], ["contain", l3]]), e("contain-style", [g2, ["--tw-contain-style", "style"], ["contain", l3]]), n("contain", { themeKeys: [], handle: (v2) => [o("contain", v2)] });
    }
    e("forced-color-adjust-none", [["forced-color-adjust", "none"]]), e("forced-color-adjust-auto", [["forced-color-adjust", "auto"]]), a("leading", ["--leading", "--spacing"], (l3) => [W2([S2("--tw-leading")]), o("--tw-leading", l3), o("line-height", l3)], { staticValues: { none: [W2([S2("--tw-leading")]), o("--tw-leading", "1"), o("line-height", "1")] } }), n("tracking", { supportsNegative: true, themeKeys: ["--tracking"], handle: (l3) => [W2([S2("--tw-tracking")]), o("--tw-tracking", l3), o("letter-spacing", l3)] }), e("antialiased", [["-webkit-font-smoothing", "antialiased"], ["-moz-osx-font-smoothing", "grayscale"]]), e("subpixel-antialiased", [["-webkit-font-smoothing", "auto"], ["-moz-osx-font-smoothing", "auto"]]);
    {
      let l3 = "var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)", g2 = () => W2([S2("--tw-ordinal"), S2("--tw-slashed-zero"), S2("--tw-numeric-figure"), S2("--tw-numeric-spacing"), S2("--tw-numeric-fraction")]);
      e("normal-nums", [["font-variant-numeric", "normal"]]), e("ordinal", [g2, ["--tw-ordinal", "ordinal"], ["font-variant-numeric", l3]]), e("slashed-zero", [g2, ["--tw-slashed-zero", "slashed-zero"], ["font-variant-numeric", l3]]), e("lining-nums", [g2, ["--tw-numeric-figure", "lining-nums"], ["font-variant-numeric", l3]]), e("oldstyle-nums", [g2, ["--tw-numeric-figure", "oldstyle-nums"], ["font-variant-numeric", l3]]), e("proportional-nums", [g2, ["--tw-numeric-spacing", "proportional-nums"], ["font-variant-numeric", l3]]), e("tabular-nums", [g2, ["--tw-numeric-spacing", "tabular-nums"], ["font-variant-numeric", l3]]), e("diagonal-fractions", [g2, ["--tw-numeric-fraction", "diagonal-fractions"], ["font-variant-numeric", l3]]), e("stacked-fractions", [g2, ["--tw-numeric-fraction", "stacked-fractions"], ["font-variant-numeric", l3]]);
    }
    {
      let l3 = () => W2([S2("--tw-outline-style", "solid")]);
      r.static("outline-hidden", () => [o("--tw-outline-style", "none"), o("outline-style", "none"), F2("@media", "(forced-colors: active)", [o("outline", "2px solid transparent"), o("outline-offset", "2px")])]), e("outline-none", [["--tw-outline-style", "none"], ["outline-style", "none"]]), e("outline-solid", [["--tw-outline-style", "solid"], ["outline-style", "solid"]]), e("outline-dashed", [["--tw-outline-style", "dashed"], ["outline-style", "dashed"]]), e("outline-dotted", [["--tw-outline-style", "dotted"], ["outline-style", "dotted"]]), e("outline-double", [["--tw-outline-style", "double"], ["outline-style", "double"]]), r.functional("outline", (g2) => {
        if (g2.value === null) {
          if (g2.modifier) return;
          let v2 = t2.get(["--default-outline-width"]) ?? "1px";
          return [l3(), o("outline-style", "var(--tw-outline-style)"), o("outline-width", v2)];
        }
        if (g2.value.kind === "arbitrary") {
          let v2 = g2.value.value;
          switch (g2.value.dataType ?? me(v2, ["color", "length", "number", "percentage"])) {
            case "length":
            case "number":
            case "percentage":
              return g2.modifier ? void 0 : [l3(), o("outline-style", "var(--tw-outline-style)"), o("outline-width", v2)];
            default:
              return v2 = X2(v2, g2.modifier, t2), v2 === null ? void 0 : [o("outline-color", v2)];
          }
        }
        {
          let v2 = te2(g2, t2, ["--outline-color", "--color"]);
          if (v2) return [o("outline-color", v2)];
        }
        {
          if (g2.modifier) return;
          let v2 = t2.resolve(g2.value.value, ["--outline-width"]);
          if (v2) return [l3(), o("outline-style", "var(--tw-outline-style)"), o("outline-width", v2)];
          if (u(g2.value.value)) return [l3(), o("outline-style", "var(--tw-outline-style)"), o("outline-width", `${g2.value.value}px`)];
        }
      }), i("outline", () => [{ values: ["current", "inherit", "transparent"], valueThemeKeys: ["--outline-color", "--color"], modifiers: Array.from({ length: 21 }, (g2, v2) => `${v2 * 5}`), hasDefaultValue: true }, { values: ["0", "1", "2", "4", "8"], valueThemeKeys: ["--outline-width"] }]), n("outline-offset", { supportsNegative: true, themeKeys: ["--outline-offset"], handleBareValue: ({ value: g2 }) => u(g2) ? `${g2}px` : null, handle: (g2) => [o("outline-offset", g2)] }), i("outline-offset", () => [{ supportsNegative: true, values: ["0", "1", "2", "4", "8"], valueThemeKeys: ["--outline-offset"] }]);
    }
    n("opacity", { themeKeys: ["--opacity"], handleBareValue: ({ value: l3 }) => ue(l3) ? `${l3}%` : null, handle: (l3) => [o("opacity", l3)] }), i("opacity", () => [{ values: Array.from({ length: 21 }, (l3, g2) => `${g2 * 5}`), valueThemeKeys: ["--opacity"] }]), n("underline-offset", { supportsNegative: true, themeKeys: ["--text-underline-offset"], handleBareValue: ({ value: l3 }) => u(l3) ? `${l3}px` : null, handle: (l3) => [o("text-underline-offset", l3)], staticValues: { auto: [o("text-underline-offset", "auto")] } }), i("underline-offset", () => [{ supportsNegative: true, values: ["0", "1", "2", "4", "8"], valueThemeKeys: ["--text-underline-offset"] }]), r.functional("text", (l3) => {
      if (l3.value) {
        if (l3.value.kind === "arbitrary") {
          let g2 = l3.value.value;
          switch (l3.value.dataType ?? me(g2, ["color", "length", "percentage", "absolute-size", "relative-size"])) {
            case "size":
            case "length":
            case "percentage":
            case "absolute-size":
            case "relative-size": {
              if (l3.modifier) {
                let C2 = l3.modifier.kind === "arbitrary" ? l3.modifier.value : t2.resolve(l3.modifier.value, ["--leading"]);
                if (!C2 && ge(l3.modifier.value)) {
                  let b2 = t2.resolve(null, ["--spacing"]);
                  if (!b2) return null;
                  C2 = `calc(${b2} * ${l3.modifier.value})`;
                }
                return !C2 && l3.modifier.value === "none" && (C2 = "1"), C2 ? [o("font-size", g2), o("line-height", C2)] : null;
              }
              return [o("font-size", g2)];
            }
            default:
              return g2 = X2(g2, l3.modifier, t2), g2 === null ? void 0 : [o("color", g2)];
          }
        }
        {
          let g2 = te2(l3, t2, ["--text-color", "--color"]);
          if (g2) return [o("color", g2)];
        }
        {
          let g2 = t2.resolveWith(l3.value.value, ["--text"], ["--line-height", "--letter-spacing", "--font-weight"]);
          if (g2) {
            let [v2, C2 = {}] = Array.isArray(g2) ? g2 : [g2];
            if (l3.modifier) {
              let b2 = l3.modifier.kind === "arbitrary" ? l3.modifier.value : t2.resolve(l3.modifier.value, ["--leading"]);
              if (!b2 && ge(l3.modifier.value)) {
                let D2 = t2.resolve(null, ["--spacing"]);
                if (!D2) return null;
                b2 = `calc(${D2} * ${l3.modifier.value})`;
              }
              if (!b2 && l3.modifier.value === "none" && (b2 = "1"), !b2) return null;
              let T2 = [o("font-size", v2)];
              return b2 && T2.push(o("line-height", b2)), T2;
            }
            return typeof C2 == "string" ? [o("font-size", v2), o("line-height", C2)] : [o("font-size", v2), o("line-height", C2["--line-height"] ? `var(--tw-leading, ${C2["--line-height"]})` : void 0), o("letter-spacing", C2["--letter-spacing"] ? `var(--tw-tracking, ${C2["--letter-spacing"]})` : void 0), o("font-weight", C2["--font-weight"] ? `var(--tw-font-weight, ${C2["--font-weight"]})` : void 0)];
          }
        }
      }
    }), i("text", () => [{ values: ["current", "inherit", "transparent"], valueThemeKeys: ["--text-color", "--color"], modifiers: Array.from({ length: 21 }, (l3, g2) => `${g2 * 5}`) }, { values: [], valueThemeKeys: ["--text"], modifiers: [], modifierThemeKeys: ["--leading"] }]);
    let L2 = () => W2([S2("--tw-text-shadow-color"), S2("--tw-text-shadow-alpha", "100%", "<percentage>")]);
    e("text-shadow-initial", [L2, ["--tw-text-shadow-color", "initial"]]), r.functional("text-shadow", (l3) => {
      let g2;
      if (l3.modifier && (l3.modifier.kind === "arbitrary" ? g2 = l3.modifier.value : u(l3.modifier.value) && (g2 = `${l3.modifier.value}%`)), !l3.value) {
        let v2 = t2.get(["--text-shadow"]);
        return v2 === null ? void 0 : [L2(), o("--tw-text-shadow-alpha", g2), ...ve("text-shadow", v2, g2, (C2) => `var(--tw-text-shadow-color, ${C2})`)];
      }
      if (l3.value.kind === "arbitrary") {
        let v2 = l3.value.value;
        switch (l3.value.dataType ?? me(v2, ["color"])) {
          case "color":
            return v2 = X2(v2, l3.modifier, t2), v2 === null ? void 0 : [L2(), o("--tw-text-shadow-color", Q2(v2, "var(--tw-text-shadow-alpha)"))];
          default:
            return [L2(), o("--tw-text-shadow-alpha", g2), ...ve("text-shadow", v2, g2, (b2) => `var(--tw-text-shadow-color, ${b2})`)];
        }
      }
      switch (l3.value.value) {
        case "none":
          return l3.modifier ? void 0 : [L2(), o("text-shadow", "none")];
        case "inherit":
          return l3.modifier ? void 0 : [L2(), o("--tw-text-shadow-color", "inherit")];
      }
      {
        let v2 = t2.get([`--text-shadow-${l3.value.value}`]);
        if (v2) return [L2(), o("--tw-text-shadow-alpha", g2), ...ve("text-shadow", v2, g2, (C2) => `var(--tw-text-shadow-color, ${C2})`)];
      }
      {
        let v2 = te2(l3, t2, ["--text-shadow-color", "--color"]);
        if (v2) return [L2(), o("--tw-text-shadow-color", Q2(v2, "var(--tw-text-shadow-alpha)"))];
      }
    }), i("text-shadow", () => [{ values: ["current", "inherit", "transparent"], valueThemeKeys: ["--text-shadow-color", "--color"], modifiers: Array.from({ length: 21 }, (l3, g2) => `${g2 * 5}`) }, { values: ["none"] }, { valueThemeKeys: ["--text-shadow"], modifiers: Array.from({ length: 21 }, (l3, g2) => `${g2 * 5}`), hasDefaultValue: t2.get(["--text-shadow"]) !== null }]);
    {
      let b2 = function(V2) {
        return `var(--tw-ring-inset,) 0 0 0 calc(${V2} + var(--tw-ring-offset-width)) var(--tw-ring-color, ${C2})`;
      }, T2 = function(V2) {
        return `inset 0 0 0 ${V2} var(--tw-inset-ring-color, currentcolor)`;
      };
      var ae = b2, oe2 = T2;
      let l3 = ["var(--tw-inset-shadow)", "var(--tw-inset-ring-shadow)", "var(--tw-ring-offset-shadow)", "var(--tw-ring-shadow)", "var(--tw-shadow)"].join(", "), g2 = "0 0 #0000", v2 = () => W2([S2("--tw-shadow", g2), S2("--tw-shadow-color"), S2("--tw-shadow-alpha", "100%", "<percentage>"), S2("--tw-inset-shadow", g2), S2("--tw-inset-shadow-color"), S2("--tw-inset-shadow-alpha", "100%", "<percentage>"), S2("--tw-ring-color"), S2("--tw-ring-shadow", g2), S2("--tw-inset-ring-color"), S2("--tw-inset-ring-shadow", g2), S2("--tw-ring-inset"), S2("--tw-ring-offset-width", "0px", "<length>"), S2("--tw-ring-offset-color", "#fff"), S2("--tw-ring-offset-shadow", g2)]);
      e("shadow-initial", [v2, ["--tw-shadow-color", "initial"]]), r.functional("shadow", (V2) => {
        let R2;
        if (V2.modifier && (V2.modifier.kind === "arbitrary" ? R2 = V2.modifier.value : u(V2.modifier.value) && (R2 = `${V2.modifier.value}%`)), !V2.value) {
          let M2 = t2.get(["--shadow"]);
          return M2 === null ? void 0 : [v2(), o("--tw-shadow-alpha", R2), ...ve("--tw-shadow", M2, R2, (fe) => `var(--tw-shadow-color, ${fe})`), o("box-shadow", l3)];
        }
        if (V2.value.kind === "arbitrary") {
          let M2 = V2.value.value;
          switch (V2.value.dataType ?? me(M2, ["color"])) {
            case "color":
              return M2 = X2(M2, V2.modifier, t2), M2 === null ? void 0 : [v2(), o("--tw-shadow-color", Q2(M2, "var(--tw-shadow-alpha)"))];
            default:
              return [v2(), o("--tw-shadow-alpha", R2), ...ve("--tw-shadow", M2, R2, (At) => `var(--tw-shadow-color, ${At})`), o("box-shadow", l3)];
          }
        }
        switch (V2.value.value) {
          case "none":
            return V2.modifier ? void 0 : [v2(), o("--tw-shadow", g2), o("box-shadow", l3)];
          case "inherit":
            return V2.modifier ? void 0 : [v2(), o("--tw-shadow-color", "inherit")];
        }
        {
          let M2 = t2.get([`--shadow-${V2.value.value}`]);
          if (M2) return [v2(), o("--tw-shadow-alpha", R2), ...ve("--tw-shadow", M2, R2, (fe) => `var(--tw-shadow-color, ${fe})`), o("box-shadow", l3)];
        }
        {
          let M2 = te2(V2, t2, ["--box-shadow-color", "--color"]);
          if (M2) return [v2(), o("--tw-shadow-color", Q2(M2, "var(--tw-shadow-alpha)"))];
        }
      }), i("shadow", () => [{ values: ["current", "inherit", "transparent"], valueThemeKeys: ["--box-shadow-color", "--color"], modifiers: Array.from({ length: 21 }, (V2, R2) => `${R2 * 5}`) }, { values: ["none"] }, { valueThemeKeys: ["--shadow"], modifiers: Array.from({ length: 21 }, (V2, R2) => `${R2 * 5}`), hasDefaultValue: t2.get(["--shadow"]) !== null }]), e("inset-shadow-initial", [v2, ["--tw-inset-shadow-color", "initial"]]), r.functional("inset-shadow", (V2) => {
        let R2;
        if (V2.modifier && (V2.modifier.kind === "arbitrary" ? R2 = V2.modifier.value : u(V2.modifier.value) && (R2 = `${V2.modifier.value}%`)), !V2.value) {
          let M2 = t2.get(["--inset-shadow"]);
          return M2 === null ? void 0 : [v2(), o("--tw-inset-shadow-alpha", R2), ...ve("--tw-inset-shadow", M2, R2, (fe) => `var(--tw-inset-shadow-color, ${fe})`), o("box-shadow", l3)];
        }
        if (V2.value.kind === "arbitrary") {
          let M2 = V2.value.value;
          switch (V2.value.dataType ?? me(M2, ["color"])) {
            case "color":
              return M2 = X2(M2, V2.modifier, t2), M2 === null ? void 0 : [v2(), o("--tw-inset-shadow-color", Q2(M2, "var(--tw-inset-shadow-alpha)"))];
            default:
              return [v2(), o("--tw-inset-shadow-alpha", R2), ...ve("--tw-inset-shadow", M2, R2, (At) => `var(--tw-inset-shadow-color, ${At})`, "inset "), o("box-shadow", l3)];
          }
        }
        switch (V2.value.value) {
          case "none":
            return V2.modifier ? void 0 : [v2(), o("--tw-inset-shadow", g2), o("box-shadow", l3)];
          case "inherit":
            return V2.modifier ? void 0 : [v2(), o("--tw-inset-shadow-color", "inherit")];
        }
        {
          let M2 = t2.get([`--inset-shadow-${V2.value.value}`]);
          if (M2) return [v2(), o("--tw-inset-shadow-alpha", R2), ...ve("--tw-inset-shadow", M2, R2, (fe) => `var(--tw-inset-shadow-color, ${fe})`), o("box-shadow", l3)];
        }
        {
          let M2 = te2(V2, t2, ["--box-shadow-color", "--color"]);
          if (M2) return [v2(), o("--tw-inset-shadow-color", Q2(M2, "var(--tw-inset-shadow-alpha)"))];
        }
      }), i("inset-shadow", () => [{ values: ["current", "inherit", "transparent"], valueThemeKeys: ["--box-shadow-color", "--color"], modifiers: Array.from({ length: 21 }, (V2, R2) => `${R2 * 5}`) }, { values: ["none"] }, { valueThemeKeys: ["--inset-shadow"], modifiers: Array.from({ length: 21 }, (V2, R2) => `${R2 * 5}`), hasDefaultValue: t2.get(["--inset-shadow"]) !== null }]), e("ring-inset", [v2, ["--tw-ring-inset", "inset"]]);
      let C2 = t2.get(["--default-ring-color"]) ?? "currentcolor";
      r.functional("ring", (V2) => {
        if (!V2.value) {
          if (V2.modifier) return;
          let R2 = t2.get(["--default-ring-width"]) ?? "1px";
          return [v2(), o("--tw-ring-shadow", b2(R2)), o("box-shadow", l3)];
        }
        if (V2.value.kind === "arbitrary") {
          let R2 = V2.value.value;
          switch (V2.value.dataType ?? me(R2, ["color", "length"])) {
            case "length":
              return V2.modifier ? void 0 : [v2(), o("--tw-ring-shadow", b2(R2)), o("box-shadow", l3)];
            default:
              return R2 = X2(R2, V2.modifier, t2), R2 === null ? void 0 : [o("--tw-ring-color", R2)];
          }
        }
        {
          let R2 = te2(V2, t2, ["--ring-color", "--color"]);
          if (R2) return [o("--tw-ring-color", R2)];
        }
        {
          if (V2.modifier) return;
          let R2 = t2.resolve(V2.value.value, ["--ring-width"]);
          if (R2 === null && u(V2.value.value) && (R2 = `${V2.value.value}px`), R2) return [v2(), o("--tw-ring-shadow", b2(R2)), o("box-shadow", l3)];
        }
      }), i("ring", () => [{ values: ["current", "inherit", "transparent"], valueThemeKeys: ["--ring-color", "--color"], modifiers: Array.from({ length: 21 }, (V2, R2) => `${R2 * 5}`) }, { values: ["0", "1", "2", "4", "8"], valueThemeKeys: ["--ring-width"], hasDefaultValue: true }]), r.functional("inset-ring", (V2) => {
        if (!V2.value) return V2.modifier ? void 0 : [v2(), o("--tw-inset-ring-shadow", T2("1px")), o("box-shadow", l3)];
        if (V2.value.kind === "arbitrary") {
          let R2 = V2.value.value;
          switch (V2.value.dataType ?? me(R2, ["color", "length"])) {
            case "length":
              return V2.modifier ? void 0 : [v2(), o("--tw-inset-ring-shadow", T2(R2)), o("box-shadow", l3)];
            default:
              return R2 = X2(R2, V2.modifier, t2), R2 === null ? void 0 : [o("--tw-inset-ring-color", R2)];
          }
        }
        {
          let R2 = te2(V2, t2, ["--ring-color", "--color"]);
          if (R2) return [o("--tw-inset-ring-color", R2)];
        }
        {
          if (V2.modifier) return;
          let R2 = t2.resolve(V2.value.value, ["--ring-width"]);
          if (R2 === null && u(V2.value.value) && (R2 = `${V2.value.value}px`), R2) return [v2(), o("--tw-inset-ring-shadow", T2(R2)), o("box-shadow", l3)];
        }
      }), i("inset-ring", () => [{ values: ["current", "inherit", "transparent"], valueThemeKeys: ["--ring-color", "--color"], modifiers: Array.from({ length: 21 }, (V2, R2) => `${R2 * 5}`) }, { values: ["0", "1", "2", "4", "8"], valueThemeKeys: ["--ring-width"], hasDefaultValue: true }]);
      let D2 = "var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)";
      r.functional("ring-offset", (V2) => {
        if (V2.value) {
          if (V2.value.kind === "arbitrary") {
            let R2 = V2.value.value;
            switch (V2.value.dataType ?? me(R2, ["color", "length"])) {
              case "length":
                return V2.modifier ? void 0 : [o("--tw-ring-offset-width", R2), o("--tw-ring-offset-shadow", D2)];
              default:
                return R2 = X2(R2, V2.modifier, t2), R2 === null ? void 0 : [o("--tw-ring-offset-color", R2)];
            }
          }
          {
            let R2 = t2.resolve(V2.value.value, ["--ring-offset-width"]);
            if (R2) return V2.modifier ? void 0 : [o("--tw-ring-offset-width", R2), o("--tw-ring-offset-shadow", D2)];
            if (u(V2.value.value)) return V2.modifier ? void 0 : [o("--tw-ring-offset-width", `${V2.value.value}px`), o("--tw-ring-offset-shadow", D2)];
          }
          {
            let R2 = te2(V2, t2, ["--ring-offset-color", "--color"]);
            if (R2) return [o("--tw-ring-offset-color", R2)];
          }
        }
      });
    }
    return i("ring-offset", () => [{ values: ["current", "inherit", "transparent"], valueThemeKeys: ["--ring-offset-color", "--color"], modifiers: Array.from({ length: 21 }, (l3, g2) => `${g2 * 5}`) }, { values: ["0", "1", "2", "4", "8"], valueThemeKeys: ["--ring-offset-width"] }]), r.functional("@container", (l3) => {
      let g2 = null;
      if (l3.value === null ? g2 = "inline-size" : l3.value.kind === "arbitrary" ? g2 = l3.value.value : l3.value.kind === "named" && l3.value.value === "normal" ? g2 = "normal" : false, g2 !== null) return l3.modifier ? [o("container-type", g2), o("container-name", l3.modifier.value)] : [o("container-type", g2)];
    }), i("@container", () => [{ values: ["normal"], valueThemeKeys: [], hasDefaultValue: true }]), r;
  }
  var Lt = ["number", "integer", "ratio", "percentage"];
  function Kr(t2) {
    let r = t2.params;
    return hn.test(r) ? (i) => {
      let e = { "--value": { usedSpacingInteger: false, usedSpacingNumber: false, themeKeys: /* @__PURE__ */ new Set(), literals: /* @__PURE__ */ new Set() }, "--modifier": { usedSpacingInteger: false, usedSpacingNumber: false, themeKeys: /* @__PURE__ */ new Set(), literals: /* @__PURE__ */ new Set() } };
      I2(t2.nodes, (n) => {
        if (n.kind !== "declaration" || !n.value || !n.value.includes("--value(") && !n.value.includes("--modifier(")) return;
        let s = B2(n.value);
        I2(s, (a) => {
          if (a.kind !== "function") return;
          if (a.value === "--spacing" && !(e["--modifier"].usedSpacingNumber && e["--value"].usedSpacingNumber)) return I2(a.nodes, (u2) => {
            if (u2.kind !== "function" || u2.value !== "--value" && u2.value !== "--modifier") return;
            let f2 = u2.value;
            for (let m of u2.nodes) if (m.kind === "word") {
              if (m.value === "integer") e[f2].usedSpacingInteger ||= true;
              else if (m.value === "number" && (e[f2].usedSpacingNumber ||= true, e["--modifier"].usedSpacingNumber && e["--value"].usedSpacingNumber)) return E2.Stop;
            }
          }), E2.Continue;
          if (a.value !== "--value" && a.value !== "--modifier") return;
          let p = d(Z2(a.nodes), ",");
          for (let [u2, f2] of p.entries()) f2 = f2.replace(/\\\*/g, "*"), f2 = f2.replace(/--(.*?)\s--(.*?)/g, "--$1-*--$2"), f2 = f2.replace(/\s+/g, ""), f2 = f2.replace(/(-\*){2,}/g, "-*"), f2[0] === "-" && f2[1] === "-" && !f2.includes("-*") && (f2 += "-*"), p[u2] = f2;
          a.nodes = B2(p.join(","));
          for (let u2 of a.nodes) if (u2.kind === "word" && (u2.value[0] === '"' || u2.value[0] === "'") && u2.value[0] === u2.value[u2.value.length - 1]) {
            let f2 = u2.value.slice(1, -1);
            e[a.value].literals.add(f2);
          } else if (u2.kind === "word" && u2.value[0] === "-" && u2.value[1] === "-") {
            let f2 = u2.value.replace(/-\*.*$/g, "");
            e[a.value].themeKeys.add(f2);
          } else if (u2.kind === "word" && !(u2.value[0] === "[" && u2.value[u2.value.length - 1] === "]") && !Lt.includes(u2.value)) {
            console.warn(`Unsupported bare value data type: "${u2.value}".
Only valid data types are: ${Lt.map((y2) => `"${y2}"`).join(", ")}.
`);
            let f2 = u2.value, m = structuredClone(a), d2 = "\xB6";
            I2(m.nodes, (y2) => {
              if (y2.kind === "word" && y2.value === f2) return E2.ReplaceSkip({ kind: "word", value: d2 });
            });
            let c = "^".repeat(Z2([u2]).length), w2 = Z2([m]).indexOf(d2), h2 = ["```css", Z2([a]), " ".repeat(w2) + c, "```"].join(`
`);
            console.warn(h2);
          }
        }), n.value = Z2(s);
      }), i.utilities.functional(r.slice(0, -2), (n) => {
        let s = ee2(t2), a = n.value, p = n.modifier;
        if (a === null) return;
        let u2 = false, f2 = false, m = false, d2 = false, c = /* @__PURE__ */ new Map(), w2 = false;
        if (I2([s], (h2, y2) => {
          let x2 = y2.parent;
          if (x2?.kind !== "rule" && x2?.kind !== "at-rule" || h2.kind !== "declaration" || !h2.value) return;
          let $2 = false, A2 = B2(h2.value);
          if (I2(A2, (k) => {
            if (k.kind === "function") {
              if (k.value === "--value") {
                u2 = true;
                let U2 = Pr(a, k, i);
                return U2 ? (f2 = true, U2.ratio ? w2 = true : c.set(h2, x2), E2.ReplaceSkip(U2.nodes)) : (u2 ||= false, $2 = true, E2.Stop);
              } else if (k.value === "--modifier") {
                if (p === null) return $2 = true, E2.Stop;
                m = true;
                let U2 = Pr(p, k, i);
                return U2 ? (d2 = true, E2.ReplaceSkip(U2.nodes)) : (m ||= false, $2 = true, E2.Stop);
              }
            }
          }), $2) return E2.ReplaceSkip([]);
          h2.value = Z2(A2);
        }), u2 && !f2 || m && !d2 || w2 && d2 || p && !w2 && !d2) return null;
        if (w2) for (let [h2, y2] of c) {
          let x2 = y2.nodes.indexOf(h2);
          x2 !== -1 && y2.nodes.splice(x2, 1);
        }
        return s.nodes;
      }), i.utilities.suggest(r.slice(0, -2), () => {
        let n = [], s = [];
        for (let [a, { literals: p, usedSpacingNumber: u2, usedSpacingInteger: f2, themeKeys: m }] of [[n, e["--value"]], [s, e["--modifier"]]]) {
          for (let d2 of p) a.push(d2);
          if (u2) a.push(...ct);
          else if (f2) for (let d2 of ct) u(d2) && a.push(d2);
          for (let d2 of i.theme.keysInNamespaces(m)) a.push(d2.replace(_r, (c, w2, h2) => `${w2}.${h2}`));
        }
        return [{ values: n, modifiers: s }];
      });
    } : gn.test(r) ? (i) => {
      i.utilities.static(r, () => t2.nodes.map(ee2));
    } : null;
  }
  function Pr(t2, r, i) {
    for (let e of r.nodes) {
      if (t2.kind === "named" && e.kind === "word" && (e.value[0] === "'" || e.value[0] === '"') && e.value[e.value.length - 1] === e.value[0] && e.value.slice(1, -1) === t2.value) return { nodes: B2(t2.value) };
      if (t2.kind === "named" && e.kind === "word" && e.value[0] === "-" && e.value[1] === "-") {
        let n = e.value;
        if (n.endsWith("-*")) {
          n = n.slice(0, -2);
          let s = i.theme.resolve(t2.value, [n]);
          if (s) return { nodes: B2(s) };
        } else {
          let s = n.split("-*");
          if (s.length <= 1) continue;
          let a = [s.shift()], p = i.theme.resolveWith(t2.value, a, s);
          if (p) {
            let [, u2 = {}] = p;
            {
              let f2 = u2[s.pop()];
              if (f2) return { nodes: B2(f2) };
            }
          }
        }
      } else if (t2.kind === "named" && e.kind === "word") {
        if (!Lt.includes(e.value)) continue;
        let n = e.value === "ratio" && "fraction" in t2 ? t2.fraction : t2.value;
        if (!n) continue;
        let s = me(n, [e.value]);
        if (s === null) continue;
        if (s === "ratio") {
          let [a, p] = d(n, "/");
          if (!u(a) || !u(p)) continue;
        } else {
          if (s === "number" && !ge(n)) continue;
          if (s === "percentage" && !u(n.slice(0, -1))) continue;
        }
        return { nodes: B2(n), ratio: s === "ratio" };
      } else if (t2.kind === "arbitrary" && e.kind === "word" && e.value[0] === "[" && e.value[e.value.length - 1] === "]") {
        let n = e.value.slice(1, -1);
        if (n === "*") return { nodes: B2(t2.value) };
        if ("dataType" in t2 && t2.dataType && t2.dataType !== n) continue;
        if ("dataType" in t2 && t2.dataType) return { nodes: B2(t2.value) };
        if (me(t2.value, [n]) !== null) return { nodes: B2(t2.value) };
      }
    }
  }
  function ve(t2, r, i, e, n = "") {
    let s = false, a = Je(r, (u2) => i == null ? e(u2) : u2.startsWith("current") ? e(Q2(u2, i)) : ((u2.startsWith("var(") || i.startsWith("var(")) && (s = true), e(Ir(u2, i))));
    function p(u2) {
      return n ? d(u2, ",").map((f2) => n + f2).join(",") : u2;
    }
    return s ? [o(t2, p(Je(r, e))), J2("@supports (color: lab(from red l a b))", [o(t2, p(a))])] : [o(t2, p(a))];
  }
  function ft(t2, r, i, e, n = "") {
    let s = false, a = d(r, ",").map((p) => Je(p, (u2) => i == null ? e(u2) : u2.startsWith("current") ? e(Q2(u2, i)) : ((u2.startsWith("var(") || i.startsWith("var(")) && (s = true), e(Ir(u2, i))))).map((p) => `drop-shadow(${p})`).join(" ");
    return s ? [o(t2, n + d(r, ",").map((p) => `drop-shadow(${Je(p, e)})`).join(" ")), J2("@supports (color: lab(from red l a b))", [o(t2, n + a)])] : [o(t2, n + a)];
  }
  var jt = { "--alpha": vn, "--spacing": wn, "--theme": yn, theme: kn };
  function vn(t2, r, i, ...e) {
    let [n, s] = d(i, "/").map((a) => a.trim());
    if (!n || !s) throw new Error(`The --alpha(\u2026) function requires a color and an alpha value, e.g.: \`--alpha(${n || "var(--my-color)"} / ${s || "50%"})\``);
    if (e.length > 0) throw new Error(`The --alpha(\u2026) function only accepts one argument, e.g.: \`--alpha(${n || "var(--my-color)"} / ${s || "50%"})\``);
    return Q2(n, s);
  }
  function wn(t2, r, i, ...e) {
    if (!i) throw new Error("The --spacing(\u2026) function requires an argument, but received none.");
    if (e.length > 0) throw new Error(`The --spacing(\u2026) function only accepts a single argument, but received ${e.length + 1}.`);
    let n = t2.theme.resolve(null, ["--spacing"]);
    if (!n) throw new Error("The --spacing(\u2026) function requires that the `--spacing` theme variable exists, but it was not found.");
    return `calc(${n} * ${i})`;
  }
  function yn(t2, r, i, ...e) {
    if (!i.startsWith("--")) throw new Error("The --theme(\u2026) function can only be used with CSS variables from your theme.");
    let n = false;
    i.endsWith(" inline") && (n = true, i = i.slice(0, -7)), r.kind === "at-rule" && (n = true);
    let s = t2.resolveThemeValue(i, n);
    if (!s) {
      if (e.length > 0) return e.join(", ");
      throw new Error(`Could not resolve value for theme function: \`theme(${i})\`. Consider checking if the variable name is correct or provide a fallback value to silence this error.`);
    }
    if (e.length === 0) return s;
    let a = e.join(", ");
    if (a === "initial") return s;
    if (s === "initial") return a;
    if (s.startsWith("var(") || s.startsWith("theme(") || s.startsWith("--theme(")) {
      let p = B2(s);
      return xn(p, a), Z2(p);
    }
    return s;
  }
  function kn(t2, r, i, ...e) {
    i = bn(i);
    let n = t2.resolveThemeValue(i);
    if (!n && e.length > 0) return e.join(", ");
    if (!n) throw new Error(`Could not resolve value for theme function: \`theme(${i})\`. Consider checking if the path is correct or provide a fallback value to silence this error.`);
    return n;
  }
  var Ur = new RegExp(Object.keys(jt).map((t2) => `${t2}\\(`).join("|"));
  function De(t2, r) {
    let i = 0;
    return I2(t2, (e) => {
      if (e.kind === "declaration" && e.value && Ur.test(e.value)) {
        i |= 8, e.value = Lr(e.value, e, r);
        return;
      }
      e.kind === "at-rule" && (e.name === "@media" || e.name === "@custom-media" || e.name === "@container" || e.name === "@supports") && Ur.test(e.params) && (i |= 8, e.params = Lr(e.params, e, r));
    }), i;
  }
  function Lr(t2, r, i) {
    let e = B2(t2);
    return I2(e, (n) => {
      if (n.kind === "function" && n.value in jt) {
        let s = d(Z2(n.nodes).trim(), ",").map((p) => p.trim()), a = jt[n.value](i, r, ...s);
        return E2.Replace(B2(a));
      }
    }), Z2(e);
  }
  function bn(t2) {
    if (t2[0] !== "'" && t2[0] !== '"') return t2;
    let r = "", i = t2[0];
    for (let e = 1; e < t2.length - 1; e++) {
      let n = t2[e], s = t2[e + 1];
      n === "\\" && (s === i || s === "\\") ? (r += s, e++) : r += n;
    }
    return r;
  }
  function xn(t2, r) {
    I2(t2, (i) => {
      if (i.kind === "function" && !(i.value !== "var" && i.value !== "theme" && i.value !== "--theme")) if (i.nodes.length === 1) i.nodes.push({ kind: "word", value: `, ${r}` });
      else {
        let e = i.nodes[i.nodes.length - 1];
        e.kind === "word" && e.value === "initial" && (e.value = r);
      }
    });
  }
  function pt(t2, r) {
    let i = t2.length, e = r.length, n = i < e ? i : e;
    for (let s = 0; s < n; s++) {
      let a = t2.charCodeAt(s), p = r.charCodeAt(s);
      if (a >= 48 && a <= 57 && p >= 48 && p <= 57) {
        let u2 = s, f2 = s + 1, m = s, d2 = s + 1;
        for (a = t2.charCodeAt(f2); a >= 48 && a <= 57; ) a = t2.charCodeAt(++f2);
        for (p = r.charCodeAt(d2); p >= 48 && p <= 57; ) p = r.charCodeAt(++d2);
        let c = t2.slice(u2, f2), w2 = r.slice(m, d2), h2 = Number(c) - Number(w2);
        if (h2) return h2;
        if (c < w2) return -1;
        if (c > w2) return 1;
        continue;
      }
      if (a !== p) return a - p;
    }
    return t2.length - r.length;
  }
  function jr(t2) {
    if (t2[0] !== "[" || t2[t2.length - 1] !== "]") return null;
    let r = 1, i = r, e = t2.length - 1;
    for (; Ue(t2.charCodeAt(r)); ) r++;
    {
      for (i = r; r < e; r++) {
        let m = t2.charCodeAt(r);
        if (m === 92) {
          r++;
          continue;
        }
        if (!(m >= 65 && m <= 90) && !(m >= 97 && m <= 122) && !(m >= 48 && m <= 57) && !(m === 45 || m === 95)) break;
      }
      if (i === r) return null;
    }
    let n = t2.slice(i, r);
    for (; Ue(t2.charCodeAt(r)); ) r++;
    if (r === e) return { attribute: n, operator: null, quote: null, value: null, sensitivity: null };
    let s = null, a = t2.charCodeAt(r);
    if (a === 61) s = "=", r++;
    else if ((a === 126 || a === 124 || a === 94 || a === 36 || a === 42) && t2.charCodeAt(r + 1) === 61) s = t2[r] + "=", r += 2;
    else return null;
    for (; Ue(t2.charCodeAt(r)); ) r++;
    if (r === e) return null;
    let p = "", u2 = null;
    if (a = t2.charCodeAt(r), a === 39 || a === 34) {
      u2 = t2[r], r++, i = r;
      for (let m = r; m < e; m++) {
        let d2 = t2.charCodeAt(m);
        d2 === a ? r = m + 1 : d2 === 92 && m++;
      }
      p = t2.slice(i, r - 1);
    } else {
      for (i = r; r < e && !Ue(t2.charCodeAt(r)); ) r++;
      p = t2.slice(i, r);
    }
    for (; Ue(t2.charCodeAt(r)); ) r++;
    if (r === e) return { attribute: n, operator: s, quote: u2, value: p, sensitivity: null };
    let f2 = null;
    switch (t2.charCodeAt(r)) {
      case 105:
      case 73: {
        f2 = "i", r++;
        break;
      }
      case 115:
      case 83: {
        f2 = "s", r++;
        break;
      }
      default:
        return null;
    }
    for (; Ue(t2.charCodeAt(r)); ) r++;
    return r !== e ? null : { attribute: n, operator: s, quote: u2, value: p, sensitivity: f2 };
  }
  function Ue(t2) {
    switch (t2) {
      case 32:
      case 9:
      case 10:
      case 13:
        return true;
      default:
        return false;
    }
  }
  function Le(t2, r = null) {
    return Array.isArray(t2) && t2.length === 2 && typeof t2[1] == "object" && typeof t2[1] !== null ? r ? t2[1][r] ?? null : t2[0] : Array.isArray(t2) && r === null ? t2.join(", ") : typeof t2 == "string" && r === null ? t2 : null;
  }
  function zr(t2, { theme: r }, i) {
    for (let e of i) {
      let n = je([e]);
      n && t2.theme.clearNamespace(`--${n}`, 4);
    }
    for (let [e, n] of Cn(r)) {
      if (typeof n != "string" && typeof n != "number") continue;
      if (typeof n == "string" && (n = n.replace(/<alpha-value>/g, "1")), e[0] === "opacity" && (typeof n == "number" || typeof n == "string")) {
        let a = typeof n == "string" ? parseFloat(n) : n;
        a >= 0 && a <= 1 && (n = a * 100 + "%");
      }
      let s = je(e);
      s && t2.theme.add(`--${s}`, "" + n, 7);
    }
    if (Object.hasOwn(r, "fontFamily")) {
      let e = 5;
      {
        let n = Le(r.fontFamily.sans);
        n && t2.theme.hasDefault("--font-sans") && (t2.theme.add("--default-font-family", n, e), t2.theme.add("--default-font-feature-settings", Le(r.fontFamily.sans, "fontFeatureSettings") ?? "normal", e), t2.theme.add("--default-font-variation-settings", Le(r.fontFamily.sans, "fontVariationSettings") ?? "normal", e));
      }
      {
        let n = Le(r.fontFamily.mono);
        n && t2.theme.hasDefault("--font-mono") && (t2.theme.add("--default-mono-font-family", n, e), t2.theme.add("--default-mono-font-feature-settings", Le(r.fontFamily.mono, "fontFeatureSettings") ?? "normal", e), t2.theme.add("--default-mono-font-variation-settings", Le(r.fontFamily.mono, "fontVariationSettings") ?? "normal", e));
      }
    }
    return r;
  }
  function Cn(t2) {
    let r = [];
    return Mr(t2, [], (i, e) => {
      if (Vn(i)) return r.push([e, i]), 1;
      if (Nn(i)) {
        r.push([e, i[0]]);
        for (let n of Reflect.ownKeys(i[1])) r.push([[...e, `-${n}`], i[1][n]]);
        return 1;
      }
      if (Array.isArray(i) && i.every((n) => typeof n == "string")) return e[0] === "fontSize" ? (r.push([e, i[0]]), i.length >= 2 && r.push([[...e, "-line-height"], i[1]])) : r.push([e, i.join(", ")]), 1;
    }), r;
  }
  var $n = { borderWidth: "border-width", outlineWidth: "outline-width", ringColor: "ring-color", ringWidth: "ring-width", transitionDuration: "transition-duration", transitionTimingFunction: "transition-timing-function" };
  var Sn = { animation: "animate", aspectRatio: "aspect", borderRadius: "radius", boxShadow: "shadow", colors: "color", containers: "container", fontFamily: "font", fontSize: "text", letterSpacing: "tracking", lineHeight: "leading", maxWidth: "container", screens: "breakpoint", transitionTimingFunction: "ease" };
  var Tn = /^[a-zA-Z0-9-_%/\.]+$/;
  function je(t2) {
    let r = $n[t2[0]];
    if (r && t2[1] === "DEFAULT") return `default-${r}`;
    if (t2[0] === "container") return null;
    for (let e of t2) if (!Tn.test(e)) return null;
    let i = Sn[t2[0]];
    return i && (t2 = t2.slice(), t2[0] = i), t2.map((e, n, s) => e === "1" && n !== s.length - 1 ? "" : e).map((e, n) => (e = e.replaceAll(".", "_"), (n === 0 || e.startsWith("-") || e === "lineHeight") && (e = e.replace(/([a-z])([A-Z])/g, (a, p, u2) => `${p}-${u2.toLowerCase()}`)), e)).filter((e, n) => e !== "DEFAULT" || n !== t2.length - 1).join("-");
  }
  function Vn(t2) {
    return typeof t2 == "number" || typeof t2 == "string";
  }
  function Nn(t2) {
    if (!Array.isArray(t2) || t2.length !== 2 || typeof t2[0] != "string" && typeof t2[0] != "number" || t2[1] === void 0 || t2[1] === null || typeof t2[1] != "object") return false;
    for (let r of Reflect.ownKeys(t2[1])) if (typeof r != "string" || typeof t2[1][r] != "string" && typeof t2[1][r] != "number") return false;
    return true;
  }
  function Mr(t2, r = [], i) {
    for (let e of Reflect.ownKeys(t2)) {
      let n = t2[e];
      if (n == null) continue;
      let s = [...r, e], a = i(n, s) ?? 0;
      if (a !== 1) {
        if (a === 2) return 2;
        if (!(!Array.isArray(n) && typeof n != "object") && Mr(n, s, i) === 2) return 2;
      }
    }
  }
  var En = /^(?<value>[-+]?(?:\d*\.)?\d+)(?<unit>[a-z]+|%)?$/i;
  var Ne = new K2((t2) => {
    let r = En.exec(t2);
    if (!r) return null;
    let i = r.groups?.value;
    if (i === void 0) return null;
    let e = Number(i);
    if (Number.isNaN(e)) return null;
    let n = r.groups?.unit;
    return n === void 0 ? [e, null] : [e, n];
  });
  function dt(t2, r = null) {
    let i = false, e = B2(t2);
    return I2(e, { exit(n) {
      if (n.kind === "word" && n.value !== "0") {
        let s = Rn(n.value, r);
        return s === null || s === n.value ? void 0 : (i = true, E2.ReplaceSkip(ne(s)));
      } else if (n.kind === "function" && (n.value === "calc" || n.value === "")) {
        if (n.nodes.length !== 5) return;
        let s = Ne.get(n.nodes[0].value), a = n.nodes[2].value, p = Ne.get(n.nodes[4].value);
        if (a === "*" && (s?.[0] === 0 && s?.[1] === null || p?.[0] === 0 && p?.[1] === null)) return i = true, E2.ReplaceSkip(ne("0"));
        if (s === null || p === null) return;
        switch (a) {
          case "*": {
            if (s[1] === p[1] || s[1] === null && p[1] !== null || s[1] !== null && p[1] === null) return i = true, E2.ReplaceSkip(ne(`${s[0] * p[0]}${s[1] ?? ""}`));
            break;
          }
          case "+": {
            if (s[1] === p[1]) return i = true, E2.ReplaceSkip(ne(`${s[0] + p[0]}${s[1] ?? ""}`));
            break;
          }
          case "-": {
            if (s[1] === p[1]) return i = true, E2.ReplaceSkip(ne(`${s[0] - p[0]}${s[1] ?? ""}`));
            break;
          }
          case "/": {
            if (p[0] !== 0 && (s[1] === null && p[1] === null || s[1] !== null && p[1] === null)) return i = true, E2.ReplaceSkip(ne(`${s[0] / p[0]}${s[1] ?? ""}`));
            break;
          }
        }
      }
    } }), i ? Z2(e) : t2;
  }
  function Rn(t2, r = null) {
    let i = Ne.get(t2);
    if (i === null) return null;
    let [e, n] = i;
    if (n === null) return `${e}`;
    if (e === 0 && y(t2)) return "0";
    switch (n.toLowerCase()) {
      case "in":
        return `${e * 96}px`;
      case "cm":
        return `${e * 96 / 2.54}px`;
      case "mm":
        return `${e * 96 / 2.54 / 10}px`;
      case "q":
        return `${e * 96 / 2.54 / 10 / 4}px`;
      case "pc":
        return `${e * 96 / 6}px`;
      case "pt":
        return `${e * 96 / 72}px`;
      case "rem":
        return r !== null ? `${e * r}px` : null;
      case "grad":
        return `${e * 0.9}deg`;
      case "rad":
        return `${e * 180 / Math.PI}deg`;
      case "turn":
        return `${e * 360}deg`;
      case "ms":
        return `${e / 1e3}s`;
      case "khz":
        return `${e * 1e3}hz`;
      default:
        return `${e}${n}`;
    }
  }
  function Fr(t2, r = "top", i = "right", e = "bottom", n = "left") {
    return Gr(`${t2}-${r}`, `${t2}-${i}`, `${t2}-${e}`, `${t2}-${n}`);
  }
  function Gr(t2 = "top", r = "right", i = "bottom", e = "left") {
    return { 1: [[t2, 0], [r, 0], [i, 0], [e, 0]], 2: [[t2, 0], [r, 1], [i, 0], [e, 1]], 3: [[t2, 0], [r, 1], [i, 2], [e, 1]], 4: [[t2, 0], [r, 1], [i, 2], [e, 3]] };
  }
  function Ee(t2, r) {
    return { 1: [[t2, 0], [r, 0]], 2: [[t2, 0], [r, 1]] };
  }
  var Wr = { inset: Gr(), margin: Fr("margin"), padding: Fr("padding"), gap: Ee("row-gap", "column-gap") };
  var Br = { "inset-block": Ee("top", "bottom"), "inset-inline": Ee("left", "right"), "margin-block": Ee("margin-top", "margin-bottom"), "margin-inline": Ee("margin-left", "margin-right"), "padding-block": Ee("padding-top", "padding-bottom"), "padding-inline": Ee("padding-left", "padding-right") };
  var Yr = { "border-block": ["border-bottom", "border-top"], "border-block-color": ["border-bottom-color", "border-top-color"], "border-block-style": ["border-bottom-style", "border-top-style"], "border-block-width": ["border-bottom-width", "border-top-width"], "border-inline": ["border-left", "border-right"], "border-inline-color": ["border-left-color", "border-right-color"], "border-inline-style": ["border-left-style", "border-right-style"], "border-inline-width": ["border-left-width", "border-right-width"] };
  function qr(t2, r) {
    if (r & 2) {
      if (t2.property in Br) {
        let i = d(t2.value, " ");
        return Br[t2.property][i.length]?.map(([e, n]) => o(e, i[n], t2.important));
      }
      if (t2.property in Yr) return Yr[t2.property]?.map((i) => o(i, t2.value, t2.important));
    }
    if (t2.property in Wr) {
      let i = d(t2.value, " ");
      return Wr[t2.property][i.length]?.map(([e, n]) => o(e, i[n], t2.important));
    }
    return null;
  }
  function On(t2) {
    return { kind: "combinator", value: t2 };
  }
  function Pn(t2, r) {
    return { kind: "function", value: t2, nodes: r };
  }
  function xe(t2) {
    return { kind: "selector", value: t2 };
  }
  function In(t2) {
    return { kind: "separator", value: t2 };
  }
  function _n(t2) {
    return { kind: "value", value: t2 };
  }
  function pe2(t2) {
    let r = "";
    for (let i of t2) switch (i.kind) {
      case "combinator":
      case "selector":
      case "separator":
      case "value": {
        r += i.value;
        break;
      }
      case "function":
        r += i.value + "(" + pe2(i.nodes) + ")";
    }
    return r;
  }
  var Zr = 92;
  var Dn = 93;
  var Hr = 41;
  var Kn = 58;
  var Jr = 44;
  var Un = 34;
  var Ln = 46;
  var Qr = 62;
  var Xr = 10;
  var jn = 35;
  var ei = 91;
  var ti = 40;
  var ri = 43;
  var zn = 39;
  var ii = 32;
  var ni = 9;
  var ai = 126;
  var Mn = 38;
  var Fn = 42;
  function Re(t2) {
    t2 = t2.replaceAll(`\r
`, `
`);
    let r = [], i = [], e = null, n = "", s;
    for (let a = 0; a < t2.length; a++) {
      let p = t2.charCodeAt(a);
      switch (p) {
        case Jr:
        case Qr:
        case Xr:
        case ii:
        case ri:
        case ni:
        case ai: {
          if (n.length > 0) {
            let c = xe(n);
            e ? e.nodes.push(c) : r.push(c), n = "";
          }
          let u2 = a, f2 = a + 1;
          for (; f2 < t2.length && (s = t2.charCodeAt(f2), !(s !== Jr && s !== Qr && s !== Xr && s !== ii && s !== ri && s !== ni && s !== ai)); f2++) ;
          a = f2 - 1;
          let m = t2.slice(u2, f2), d2 = m.trim() === "," ? In(m) : On(m);
          e ? e.nodes.push(d2) : r.push(d2);
          break;
        }
        case ti: {
          let u2 = Pn(n, []);
          if (n = "", u2.value !== ":not" && u2.value !== ":where" && u2.value !== ":has" && u2.value !== ":is") {
            let f2 = a + 1, m = 0;
            for (let c = a + 1; c < t2.length; c++) {
              if (s = t2.charCodeAt(c), s === ti) {
                m++;
                continue;
              }
              if (s === Hr) {
                if (m === 0) {
                  a = c;
                  break;
                }
                m--;
              }
            }
            let d2 = a;
            u2.nodes.push(_n(t2.slice(f2, d2))), n = "", a = d2, e ? e.nodes.push(u2) : r.push(u2);
            break;
          }
          e ? e.nodes.push(u2) : r.push(u2), i.push(u2), e = u2;
          break;
        }
        case Hr: {
          let u2 = i.pop();
          if (n.length > 0) {
            let f2 = xe(n);
            u2.nodes.push(f2), n = "";
          }
          i.length > 0 ? e = i[i.length - 1] : e = null;
          break;
        }
        case Ln:
        case Kn:
        case jn: {
          if (n.length > 0) {
            let u2 = xe(n);
            e ? e.nodes.push(u2) : r.push(u2);
          }
          n = t2[a];
          break;
        }
        case ei: {
          if (n.length > 0) {
            let m = xe(n);
            e ? e.nodes.push(m) : r.push(m);
          }
          n = "";
          let u2 = a, f2 = 0;
          for (let m = a + 1; m < t2.length; m++) {
            if (s = t2.charCodeAt(m), s === ei) {
              f2++;
              continue;
            }
            if (s === Dn) {
              if (f2 === 0) {
                a = m;
                break;
              }
              f2--;
            }
          }
          n += t2.slice(u2, a + 1);
          break;
        }
        case zn:
        case Un: {
          let u2 = a;
          for (let f2 = a + 1; f2 < t2.length; f2++) if (s = t2.charCodeAt(f2), s === Zr) f2 += 1;
          else if (s === p) {
            a = f2;
            break;
          }
          n += t2.slice(u2, a + 1);
          break;
        }
        case Mn:
        case Fn: {
          if (n.length > 0) {
            let u2 = xe(n);
            e ? e.nodes.push(u2) : r.push(u2), n = "";
          }
          e ? e.nodes.push(xe(t2[a])) : r.push(xe(t2[a]));
          break;
        }
        case Zr: {
          n += t2[a] + t2[a + 1], a += 1;
          break;
        }
        default:
          n += t2[a];
      }
    }
    return n.length > 0 && r.push(xe(n)), r;
  }
  function ue2(t2, r) {
    for (let i in t2) delete t2[i];
    return Object.assign(t2, r);
  }
  function Oe(t2) {
    let r = [];
    for (let i of d(t2, ".")) {
      if (!i.includes("[")) {
        r.push(i);
        continue;
      }
      let e = 0;
      for (; ; ) {
        let n = i.indexOf("[", e), s = i.indexOf("]", n);
        if (n === -1 || s === -1) break;
        n > e && r.push(i.slice(e, n)), r.push(i.slice(n + 1, s)), e = s + 1;
      }
      e <= i.length - 1 && r.push(i.slice(e));
    }
    return r;
  }
  function zt(t2, r) {
    let i = t2;
    return i.storage[ui] ??= Wn(), i.storage[fi] ??= Yn(i), i.storage[ci] ??= Zn(), i.storage[pi] ??= Jn(), i.storage[di] ??= Xn(), i.storage[Ft] ??= na(i), i.storage[ht] ??= la(i, r), i.storage[de] ??= ya(i), i.storage[Wt] ??= ba(), i.storage[vt] ??= xa(i), i.storage[Bt] ??= Aa(i), i.storage[yt] ??= Ca(i), i.storage[hi] ??= $a(i), i;
  }
  var ui = /* @__PURE__ */ Symbol();
  function Wn() {
    return new K2((t2) => new K2((r) => ({ rem: t2, features: r })));
  }
  function Bn(t2, r) {
    let i = 0;
    return r?.collapse && (i |= 1), r?.logicalToPhysical && (i |= 2), zt(t2, r).storage[ui].get(r?.rem ?? null).get(i);
  }
  var fi = /* @__PURE__ */ Symbol();
  function Yn(t2) {
    return new K2((r) => new K2((i) => ({ features: i, designSystem: t2, signatureOptions: r })));
  }
  function Gn(t2, r, i) {
    let e = 0;
    return i?.collapse && (e |= 1), zt(t2).storage[fi].get(r).get(e);
  }
  function Mt(t2, r, i) {
    let e = Bn(t2, i), n = Gn(t2, e, i), s = zt(t2), a = /* @__PURE__ */ new Set(), p = s.storage[ci].get(n);
    for (let u2 of r) a.add(p.get(u2));
    return a.size <= 1 || !(n.features & 1) ? Array.from(a) : qn(n, Array.from(a));
  }
  function qn(t2, r) {
    if (r.length <= 1) return r;
    let i = t2.designSystem, e = new K2((p) => new K2((u2) => /* @__PURE__ */ new Set())), n = t2.designSystem.theme.prefix ? `${t2.designSystem.theme.prefix}:` : "";
    for (let p of r) {
      let u2 = d(p, ":"), f2 = u2.pop(), m = f2.endsWith("!");
      m && (f2 = f2.slice(0, -1));
      let d2 = u2.length > 0 ? `${u2.join(":")}:` : "", c = m ? "!" : "";
      e.get(d2).get(c).add(`${n}${f2}`);
    }
    let s = /* @__PURE__ */ new Set();
    for (let [p, u2] of e.entries()) for (let [f2, m] of u2.entries()) for (let d2 of a(Array.from(m))) n && d2.startsWith(n) && (d2 = d2.slice(n.length)), s.add(`${p}${d2}${f2}`);
    return Array.from(s);
    function a(p) {
      let u2 = t2.signatureOptions, f2 = i.storage[vt].get(u2), m = i.storage[Wt].get(u2), d2 = p.map(($2) => f2.get($2));
      if (d2.some(($2) => $2.has("line-height"))) {
        let $2 = i.theme.keysInNamespaces(["--text"]);
        if ($2.length > 0) {
          let A2 = /* @__PURE__ */ new Set(), k = /* @__PURE__ */ new Set();
          for (let N2 of d2) for (let O2 of N2.get("line-height")) {
            if (k.has(O2)) continue;
            k.add(O2);
            let L2 = i.storage[ht]?.get(O2) ?? null;
            if (L2 !== null) if (ge(L2)) {
              A2.add(L2);
              for (let _2 of $2) f2.get(`text-${_2}/${L2}`);
            } else {
              A2.add(O2);
              for (let _2 of $2) f2.get(`text-${_2}/[${O2}]`);
            }
          }
          let U2 = /* @__PURE__ */ new Set();
          for (let N2 of d2) for (let O2 of N2.get("font-size")) if (!U2.has(O2)) {
            U2.add(O2);
            for (let L2 of A2) ge(L2) ? f2.get(`text-[${O2}]/${L2}`) : f2.get(`text-[${O2}]/[${L2}]`);
          }
        }
      }
      let c = d2.map(($2) => {
        let A2 = null;
        for (let k of $2.keys()) {
          let U2 = /* @__PURE__ */ new Set();
          for (let N2 of m.get(k).values()) for (let O2 of N2) U2.add(O2);
          if (A2 === null ? A2 = U2 : A2 = si(A2, U2), A2.size === 0) return A2;
        }
        return A2;
      }), w2 = new K2(($2) => /* @__PURE__ */ new Set([$2]));
      for (let $2 = 0; $2 < c.length; $2++) {
        let A2 = c[$2];
        for (let k = $2 + 1; k < c.length; k++) {
          let U2 = c[k];
          for (let N2 of A2) if (U2.has(N2)) {
            w2.get($2).add(k), w2.get(k).add($2);
            break;
          }
        }
      }
      if (w2.size === 0) return p;
      let h2 = new K2(($2) => $2.split(",").map(Number));
      for (let $2 of w2.values()) {
        let A2 = Array.from($2).sort((k, U2) => k - U2);
        h2.get(A2.join(","));
      }
      let y2 = new Set(p), x2 = /* @__PURE__ */ new Set();
      for (let $2 of h2.values()) for (let A2 of Ta($2)) {
        if (A2.some((N2) => x2.has(p[N2]))) continue;
        let k = A2.flatMap((N2) => c[N2]).reduce(si), U2 = i.storage[de].get(u2).get(A2.map((N2) => p[N2]).sort((N2, O2) => N2.localeCompare(O2)).join(" "));
        for (let N2 of k) if (i.storage[de].get(u2).get(N2) === U2) {
          for (let L2 of A2) x2.add(p[L2]);
          y2.add(N2);
          break;
        }
      }
      for (let $2 of x2) y2.delete($2);
      return Array.from(y2);
    }
  }
  var ci = /* @__PURE__ */ Symbol();
  function Zn() {
    return new K2((t2) => {
      let r = t2.designSystem, i = r.theme.prefix ? `${r.theme.prefix}:` : "", e = r.storage[pi].get(t2), n = r.storage[di].get(t2);
      return new K2((s, a) => {
        for (let p of r.parseCandidate(s)) {
          let u2 = p.variants.slice().reverse().flatMap((d2) => e.get(d2)), f2 = p.important;
          if (f2 || u2.length > 0) {
            let c = a.get(r.printCandidate({ ...p, variants: [], important: false }));
            return r.theme.prefix !== null && u2.length > 0 && (c = c.slice(i.length)), u2.length > 0 && (c = `${u2.map((w2) => r.printVariant(w2)).join(":")}:${c}`), f2 && (c += "!"), r.theme.prefix !== null && u2.length > 0 && (c = `${i}${c}`), c;
          }
          let m = n.get(s);
          if (m !== s) return m;
        }
        return s;
      });
    });
  }
  var Hn = [ia, ha, va, da];
  var pi = /* @__PURE__ */ Symbol();
  function Jn() {
    return new K2((t2) => new K2((r) => {
      let i = [r];
      for (let e of Hn) for (let n of i.splice(0)) {
        let s = e(_e(n), t2);
        if (Array.isArray(s)) {
          i.push(...s);
          continue;
        } else i.push(s);
      }
      return i;
    }));
  }
  var Qn = [ta, ra, sa, fa, pa, ma, ga, wa];
  var di = /* @__PURE__ */ Symbol();
  function Xn() {
    return new K2((t2) => {
      let r = t2.designSystem;
      return new K2((i) => {
        for (let e of r.parseCandidate(i)) {
          let n = Tr(e);
          for (let a of Qn) n = a(n, t2);
          let s = r.printCandidate(n);
          if (i !== s) return s;
        }
        return i;
      });
    });
  }
  var ea = ["t", "tr", "r", "br", "b", "bl", "l", "tl"];
  function ta(t2) {
    if (t2.kind === "static" && t2.root.startsWith("bg-gradient-to-")) {
      let r = t2.root.slice(15);
      return ea.includes(r) && (t2.root = `bg-linear-to-${r}`), t2;
    }
    return t2;
  }
  function ra(t2, r) {
    let i = r.designSystem.storage[Ft];
    if (t2.kind === "arbitrary") {
      let [e, n] = i(t2.value, t2.modifier === null ? 1 : 0);
      e !== t2.value && (t2.value = e, n !== null && (t2.modifier = n));
    } else if (t2.kind === "functional" && t2.value?.kind === "arbitrary") {
      let [e, n] = i(t2.value.value, t2.modifier === null ? 1 : 0);
      e !== t2.value.value && (t2.value.value = e, n !== null && (t2.modifier = n));
    }
    return t2;
  }
  function ia(t2, r) {
    let i = r.designSystem.storage[Ft], e = wt(t2);
    for (let [n] of e) if (n.kind === "arbitrary") {
      let [s] = i(n.selector, 2);
      s !== n.selector && (n.selector = s);
    } else if (n.kind === "functional" && n.value?.kind === "arbitrary") {
      let [s] = i(n.value.value, 2);
      s !== n.value.value && (n.value.value = s);
    }
    return t2;
  }
  var Ft = /* @__PURE__ */ Symbol();
  function na(t2) {
    return r(t2);
    function r(i) {
      function e(p, u2 = 0) {
        let f2 = B2(p);
        if (u2 & 2) return [mt(f2, a), null];
        let m = 0, d2 = 0;
        if (I2(f2, (h2) => {
          h2.kind === "function" && h2.value === "theme" && (m += 1, I2(h2.nodes, (y2) => y2.kind === "separator" && y2.value.includes(",") ? E2.Stop : y2.kind === "word" && y2.value === "/" ? (d2 += 1, E2.Stop) : E2.Skip));
        }), m === 0) return [p, null];
        if (d2 === 0) return [mt(f2, s), null];
        if (d2 > 1) return [mt(f2, a), null];
        let c = null;
        return [mt(f2, (h2, y2) => {
          let x2 = d(h2, "/").map(($2) => $2.trim());
          if (x2.length > 2) return null;
          if (f2.length === 1 && x2.length === 2 && u2 & 1) {
            let [$2, A2] = x2;
            if (/^\d+%$/.test(A2)) c = { kind: "named", value: A2.slice(0, -1) };
            else if (/^0?\.\d+$/.test(A2)) {
              let k = Number(A2) * 100;
              c = { kind: Number.isInteger(k) ? "named" : "arbitrary", value: k.toString() };
            } else c = { kind: "arbitrary", value: A2 };
            h2 = $2;
          }
          return s(h2, y2) || a(h2, y2);
        }), c];
      }
      function n(p, u2 = true) {
        let f2 = `--${je(Oe(p))}`;
        return i.theme.get([f2]) ? u2 && i.theme.prefix ? `--${i.theme.prefix}-${f2.slice(2)}` : f2 : null;
      }
      function s(p, u2) {
        let f2 = n(p);
        if (f2) return u2 ? `var(${f2}, ${u2})` : `var(${f2})`;
        let m = Oe(p);
        if (m[0] === "spacing" && i.theme.get(["--spacing"])) {
          let d2 = m[1];
          return ge(d2) ? `--spacing(${d2})` : null;
        }
        return null;
      }
      function a(p, u2) {
        let f2 = d(p, "/").map((c) => c.trim());
        p = f2.shift();
        let m = n(p, false);
        if (!m) return null;
        let d2 = f2.length > 0 ? `/${f2.join("/")}` : "";
        return u2 ? `--theme(${m}${d2}, ${u2})` : `--theme(${m}${d2})`;
      }
      return e;
    }
  }
  function mt(t2, r) {
    return I2(t2, (i, e) => {
      if (i.kind === "function" && i.value === "theme") {
        if (i.nodes.length < 1) return;
        i.nodes[0].kind === "separator" && i.nodes[0].value.trim() === "" && i.nodes.shift();
        let n = i.nodes[0];
        if (n.kind !== "word") return;
        let s = n.value, a = 1;
        for (let f2 = a; f2 < i.nodes.length && !i.nodes[f2].value.includes(","); f2++) s += Z2([i.nodes[f2]]), a = f2 + 1;
        s = aa(s);
        let p = i.nodes.slice(a + 1), u2 = p.length > 0 ? r(s, Z2(p)) : r(s);
        if (u2 === null) return;
        if (e.parent) {
          let f2 = e.parent.nodes.indexOf(i) - 1;
          for (; f2 !== -1; ) {
            let m = e.parent.nodes[f2];
            if (m.kind === "separator" && m.value.trim() === "") {
              f2 -= 1;
              continue;
            }
            /^[-+*/]$/.test(m.value.trim()) && (u2 = `(${u2})`);
            break;
          }
        }
        return E2.Replace(B2(u2));
      }
    }), Z2(t2);
  }
  function aa(t2) {
    if (t2[0] !== "'" && t2[0] !== '"') return t2;
    let r = "", i = t2[0];
    for (let e = 1; e < t2.length - 1; e++) {
      let n = t2[e], s = t2[e + 1];
      n === "\\" && (s === i || s === "\\") ? (r += s, e++) : r += n;
    }
    return r;
  }
  function* wt(t2) {
    function* r(i, e = null) {
      yield [i, e], i.kind === "compound" && (yield* r(i.variant, i));
    }
    yield* r(t2, null);
  }
  function we(t2, r) {
    return t2.parseCandidate(t2.theme.prefix && !r.startsWith(`${t2.theme.prefix}:`) ? `${t2.theme.prefix}:${r}` : r);
  }
  function oa(t2, r) {
    let i = t2.printCandidate(r);
    return t2.theme.prefix && i.startsWith(`${t2.theme.prefix}:`) ? i.slice(t2.theme.prefix.length + 1) : i;
  }
  var ht = /* @__PURE__ */ Symbol();
  function la(t2, r) {
    let i = t2.resolveThemeValue("--spacing");
    if (i === void 0) return null;
    i = dt(i, r?.rem ?? null);
    let e = Ne.get(i);
    if (!e) return null;
    let [n, s] = e;
    return new K2((a) => {
      if (n === 0) return null;
      let p = Ne.get(dt(a, r?.rem ?? null));
      if (!p) return null;
      let [u2, f2] = p;
      return f2 !== s ? null : u2 / n;
    });
  }
  function sa(t2, r) {
    if (t2.kind !== "arbitrary" && !(t2.kind === "functional" && t2.value?.kind === "arbitrary")) return t2;
    let i = r.designSystem, e = i.storage[Bt].get(r.signatureOptions), n = i.storage[de].get(r.signatureOptions), s = i.printCandidate(t2), a = n.get(s);
    if (typeof a != "string") return t2;
    for (let u2 of p(a, t2)) {
      let f2 = i.printCandidate(u2);
      if (n.get(f2) === a && ua(i, t2, u2)) return u2;
    }
    return t2;
    function* p(u2, f2) {
      let m = e.get(u2);
      if (!(m.length > 1)) {
        if (m.length === 0 && f2.modifier) {
          let d2 = { ...f2, modifier: null }, c = n.get(i.printCandidate(d2));
          if (typeof c == "string") for (let w2 of p(c, d2)) yield Object.assign({}, w2, { modifier: f2.modifier });
        }
        if (m.length === 1) for (let d2 of we(i, m[0])) yield d2;
        else if (m.length === 0) {
          let d2 = f2.kind === "arbitrary" ? f2.value : f2.value?.value ?? null;
          if (d2 === null) return;
          if (r.signatureOptions.rem !== null && f2.kind === "functional" && f2.value?.kind === "arbitrary") {
            let h2 = i.storage[ht]?.get(d2) ?? null;
            h2 !== null && ge(h2) && (yield Object.assign({}, f2, { value: { kind: "named", value: h2, fraction: null } }));
          }
          let c = i.storage[ht]?.get(d2) ?? null, w2 = "";
          c !== null && c < 0 && (w2 = "-", c = Math.abs(c));
          for (let h2 of Array.from(i.utilities.keys("functional")).sort((y2, x2) => +(y2[0] === "-") - +(x2[0] === "-"))) {
            w2 && (h2 = `${w2}${h2}`);
            for (let y2 of we(i, `${h2}-${d2}`)) yield y2;
            if (f2.modifier) for (let y2 of we(i, `${h2}-${d2}${f2.modifier}`)) yield y2;
            if (c !== null) {
              for (let y2 of we(i, `${h2}-${c}`)) yield y2;
              if (f2.modifier) for (let y2 of we(i, `${h2}-${c}${He(f2.modifier)}`)) yield y2;
            }
            for (let y2 of we(i, `${h2}-[${d2}]`)) yield y2;
            if (f2.modifier) for (let y2 of we(i, `${h2}-[${d2}]${He(f2.modifier)}`)) yield y2;
          }
        }
      }
    }
  }
  function ua(t2, r, i) {
    let e = null;
    if (r.kind === "functional" && r.value?.kind === "arbitrary" && r.value.value.includes("var(--") ? e = r.value.value : r.kind === "arbitrary" && r.value.includes("var(--") && (e = r.value), e === null) return true;
    let n = t2.candidatesToCss([t2.printCandidate(i)]).join(`
`), s = true;
    return I2(B2(e), (a) => {
      if (a.kind === "function" && a.value === "var") {
        let p = a.nodes[0].value;
        if (!new RegExp(`var\\(${p}[,)]\\s*`, "g").test(n) || n.includes(`${p}:`)) return s = false, E2.Stop;
      }
    }), s;
  }
  function fa(t2, r) {
    if (t2.kind !== "functional" || t2.value?.kind !== "named") return t2;
    let i = r.designSystem, e = i.storage[Bt].get(r.signatureOptions), n = i.storage[de].get(r.signatureOptions), s = i.printCandidate(t2), a = n.get(s);
    if (typeof a != "string") return t2;
    for (let u2 of p(a, t2)) {
      let f2 = i.printCandidate(u2);
      if (n.get(f2) === a) return u2;
    }
    return t2;
    function* p(u2, f2) {
      let m = e.get(u2);
      if (!(m.length > 1)) {
        if (m.length === 0 && f2.modifier) {
          let d2 = { ...f2, modifier: null }, c = n.get(i.printCandidate(d2));
          if (typeof c == "string") for (let w2 of p(c, d2)) yield Object.assign({}, w2, { modifier: f2.modifier });
        }
        if (m.length === 1) for (let d2 of we(i, m[0])) yield d2;
      }
    }
  }
  var ca = /* @__PURE__ */ new Map([["order-none", "order-0"], ["break-words", "wrap-break-word"]]);
  function pa(t2, r) {
    let i = r.designSystem, e = i.storage[de].get(r.signatureOptions), n = oa(i, t2), s = ca.get(n) ?? null;
    if (s === null) return t2;
    let a = e.get(n);
    if (typeof a != "string") return t2;
    let p = e.get(s);
    if (typeof p != "string" || a !== p) return t2;
    let [u2] = we(i, s);
    return u2;
  }
  function da(t2, r) {
    let i = r.designSystem, e = i.storage[yt], n = i.storage[hi], s = wt(t2);
    for (let [a] of s) {
      if (a.kind === "compound") continue;
      let p = i.printVariant(a), u2 = e.get(p);
      if (typeof u2 != "string") continue;
      let f2 = n.get(u2);
      if (f2.length !== 1) continue;
      let m = f2[0], d2 = i.parseVariant(m);
      d2 !== null && ue2(a, d2);
    }
    return t2;
  }
  function ma(t2, r) {
    let i = r.designSystem, e = i.storage[de].get(r.signatureOptions);
    if (t2.kind === "functional" && t2.value?.kind === "arbitrary" && t2.value.dataType !== null) {
      let n = i.printCandidate({ ...t2, value: { ...t2.value, dataType: null } });
      e.get(i.printCandidate(t2)) === e.get(n) && (t2.value.dataType = null);
    }
    return t2;
  }
  function ga(t2, r) {
    if (t2.kind !== "functional" || t2.value?.kind !== "arbitrary") return t2;
    let i = r.designSystem, e = i.storage[de].get(r.signatureOptions), n = e.get(i.printCandidate(t2));
    if (n === null) return t2;
    for (let s of mi(t2)) if (e.get(i.printCandidate({ ...t2, value: s })) === n) return t2.value = s, t2;
    return t2;
  }
  function ha(t2) {
    let r = wt(t2);
    for (let [i] of r) if (i.kind === "functional" && i.root === "data" && i.value?.kind === "arbitrary" && !i.value.value.includes("=")) i.value = { kind: "named", value: i.value.value };
    else if (i.kind === "functional" && i.root === "aria" && i.value?.kind === "arbitrary" && (i.value.value.endsWith("=true") || i.value.value.endsWith('="true"') || i.value.value.endsWith("='true'"))) {
      let [e, n] = d(i.value.value, "=");
      if (e[e.length - 1] === "~" || e[e.length - 1] === "|" || e[e.length - 1] === "^" || e[e.length - 1] === "$" || e[e.length - 1] === "*") continue;
      i.value = { kind: "named", value: i.value.value.slice(0, i.value.value.indexOf("=")) };
    } else i.kind === "functional" && i.root === "supports" && i.value?.kind === "arbitrary" && /^[a-z-][a-z0-9-]*$/i.test(i.value.value) && (i.value = { kind: "named", value: i.value.value });
    return t2;
  }
  function* mi(t2, r = t2.value?.value ?? "", i = /* @__PURE__ */ new Set()) {
    if (i.has(r)) return;
    if (i.add(r), yield { kind: "named", value: r, fraction: null }, r.endsWith("%") && ge(r.slice(0, -1)) && (yield { kind: "named", value: r.slice(0, -1), fraction: null }), r.includes("/")) {
      let [s, a] = r.split("/");
      u(s) && u(a) && (yield { kind: "named", value: s, fraction: `${s}/${a}` });
    }
    let e = /* @__PURE__ */ new Set();
    for (let s of r.matchAll(/(\d+\/\d+)|(\d+\.?\d+)/g)) e.add(s[0].trim());
    let n = Array.from(e).sort((s, a) => s.length - a.length);
    for (let s of n) yield* mi(t2, s, i);
  }
  function li(t2) {
    return !t2.some((r) => r.kind === "separator" && r.value.trim() === ",");
  }
  function gt(t2) {
    let r = t2.value.trim();
    return t2.kind === "selector" && r[0] === "[" && r[r.length - 1] === "]";
  }
  function va(t2, r) {
    let i = [t2], e = r.designSystem, n = e.storage[yt], s = wt(t2);
    for (let [a, p] of s) if (a.kind === "compound" && (a.root === "has" || a.root === "not" || a.root === "in") && a.modifier !== null && "modifier" in a.variant && (a.variant.modifier = a.modifier, a.modifier = null), a.kind === "arbitrary") {
      if (a.relative) continue;
      let u2 = Re(a.selector.trim());
      if (!li(u2)) continue;
      if (p === null && u2.length === 3 && u2[0].kind === "selector" && u2[0].value === "&" && u2[1].kind === "combinator" && u2[1].value.trim() === ">" && u2[2].kind === "selector" && u2[2].value === "*") {
        ue2(a, e.parseVariant("*"));
        continue;
      }
      if (p === null && u2.length === 3 && u2[0].kind === "selector" && u2[0].value === "&" && u2[1].kind === "combinator" && u2[1].value.trim() === "" && u2[2].kind === "selector" && u2[2].value === "*") {
        ue2(a, e.parseVariant("**"));
        continue;
      }
      if (p === null && u2.length === 3 && u2[1].kind === "combinator" && u2[1].value.trim() === "" && u2[2].kind === "selector" && u2[2].value === "&") {
        u2.pop(), u2.pop(), ue2(a, e.parseVariant(`in-[${pe2(u2)}]`));
        continue;
      }
      if (p === null && u2[0].kind === "selector" && (u2[0].value === "@media" || u2[0].value === "@supports")) {
        let c = n.get(e.printVariant(a)), w2 = B2(pe2(u2)), h2 = false;
        if (I2(w2, (y2) => {
          if (y2.kind === "word" && y2.value === "not") return h2 = true, E2.Replace([]);
        }), w2 = B2(Z2(w2)), I2(w2, (y2) => {
          y2.kind === "separator" && y2.value !== " " && y2.value.trim() === "" && (y2.value = " ");
        }), h2) {
          let y2 = e.parseVariant(`not-[${Z2(w2)}]`);
          if (y2 === null) continue;
          let x2 = n.get(e.printVariant(y2));
          if (c === x2) {
            ue2(a, y2);
            continue;
          }
        }
      }
      let f2 = null;
      p === null && u2.length === 3 && u2[0].kind === "selector" && u2[0].value.trim() === "&" && u2[1].kind === "combinator" && u2[1].value.trim() === ">" && u2[2].kind === "selector" && (gt(u2[2]) || u2[2].value[0] === ":") && (u2 = [u2[2]], f2 = e.parseVariant("*")), p === null && u2.length === 3 && u2[0].kind === "selector" && u2[0].value.trim() === "&" && u2[1].kind === "combinator" && u2[1].value.trim() === "" && u2[2].kind === "selector" && (gt(u2[2]) || u2[2].value[0] === ":") && (u2 = [u2[2]], f2 = e.parseVariant("**"));
      let m = u2.filter((c) => !(c.kind === "selector" && c.value.trim() === "&"));
      if (m.length !== 1) continue;
      let d2 = m[0];
      if (d2.kind === "function" && d2.value === ":is") {
        if (!li(d2.nodes) || d2.nodes.length !== 1 || !gt(d2.nodes[0])) continue;
        d2 = d2.nodes[0];
      }
      if (d2.kind === "function" && d2.value[0] === ":" || d2.kind === "selector" && d2.value[0] === ":") {
        let c = d2, w2 = false;
        if (c.kind === "function" && c.value === ":not") {
          if (w2 = true, c.nodes.length !== 1 || c.nodes[0].kind !== "selector" && c.nodes[0].kind !== "function" || c.nodes[0].value[0] !== ":") continue;
          c = c.nodes[0];
        }
        let h2 = ((x2) => {
          if (x2 === ":nth-child" && c.kind === "function" && c.nodes.length === 1 && c.nodes[0].kind === "value" && c.nodes[0].value === "odd") return w2 ? (w2 = false, "even") : "odd";
          if (x2 === ":nth-child" && c.kind === "function" && c.nodes.length === 1 && c.nodes[0].kind === "value" && c.nodes[0].value === "even") return w2 ? (w2 = false, "odd") : "even";
          for (let [$2, A2] of [[":nth-child", "nth"], [":nth-last-child", "nth-last"], [":nth-of-type", "nth-of-type"], [":nth-last-of-type", "nth-of-last-type"]]) if (x2 === $2 && c.kind === "function" && c.nodes.length === 1) return c.nodes.length === 1 && c.nodes[0].kind === "value" && u(c.nodes[0].value) ? `${A2}-${c.nodes[0].value}` : `${A2}-[${pe2(c.nodes)}]`;
          if (w2) {
            let $2 = n.get(e.printVariant(a)), A2 = n.get(`not-[${x2}]`);
            if ($2 === A2) return `[&${x2}]`;
          }
          return null;
        })(c.value);
        if (h2 === null) {
          if (f2) return ue2(a, { kind: "arbitrary", selector: d2.value, relative: false }), [f2, a];
          continue;
        }
        w2 && (h2 = `not-${h2}`);
        let y2 = e.parseVariant(h2);
        if (y2 === null) continue;
        ue2(a, y2);
      } else if (gt(d2)) {
        let c = jr(d2.value);
        if (c === null) continue;
        if (c.attribute.startsWith("data-")) {
          let w2 = c.attribute.slice(5);
          ue2(a, { kind: "functional", root: "data", modifier: null, value: c.value === null ? { kind: "named", value: w2 } : { kind: "arbitrary", value: `${w2}${c.operator}${c.quote ?? ""}${c.value}${c.quote ?? ""}${c.sensitivity ? ` ${c.sensitivity}` : ""}` } });
        } else if (c.attribute.startsWith("aria-")) {
          let w2 = c.attribute.slice(5);
          ue2(a, { kind: "functional", root: "aria", modifier: null, value: c.value === null ? { kind: "arbitrary", value: w2 } : c.operator === "=" && c.value === "true" && c.sensitivity === null ? { kind: "named", value: w2 } : { kind: "arbitrary", value: `${c.attribute}${c.operator}${c.quote ?? ""}${c.value}${c.quote ?? ""}${c.sensitivity ? ` ${c.sensitivity}` : ""}` } });
        } else ue2(a, { kind: "arbitrary", selector: d2.value, relative: false });
      }
      if (f2) return [f2, a];
    }
    return i;
  }
  function wa(t2, r) {
    if (t2.kind !== "functional" && t2.kind !== "arbitrary" || t2.modifier === null) return t2;
    let i = r.designSystem, e = i.storage[de].get(r.signatureOptions), n = e.get(i.printCandidate(t2)), s = t2.modifier;
    if (n === e.get(i.printCandidate({ ...t2, modifier: null }))) return t2.modifier = null, t2;
    {
      let a = { kind: "named", value: s.value.endsWith("%") ? s.value.includes(".") ? `${Number(s.value.slice(0, -1))}` : s.value.slice(0, -1) : s.value, fraction: null };
      if (n === e.get(i.printCandidate({ ...t2, modifier: a }))) return t2.modifier = a, t2;
    }
    {
      let a = { kind: "named", value: `${parseFloat(s.value) * 100}`, fraction: null };
      if (n === e.get(i.printCandidate({ ...t2, modifier: a }))) return t2.modifier = a, t2;
    }
    return t2;
  }
  var de = /* @__PURE__ */ Symbol();
  function ya(t2) {
    return new K2((r) => new K2((i) => {
      try {
        i = t2.theme.prefix && !i.startsWith(t2.theme.prefix) ? `${t2.theme.prefix}:${i}` : i;
        let e = [G2(".x", [F2("@apply", i)])];
        return Sa(t2, () => {
          for (let s of t2.parseCandidate(i)) t2.compileAstNodes(s, 1);
          Ae(e, t2);
        }), gi(t2, e, r), re2(e);
      } catch {
        return /* @__PURE__ */ Symbol();
      }
    }));
  }
  function gi(t2, r, i) {
    let { rem: e } = i;
    return I2(r, { enter(n, s) {
      if (n.kind === "declaration") {
        if (n.value === void 0 || n.property === "--tw-sort") return E2.Replace([]);
        if (n.property.startsWith("--tw-") && (s.parent?.nodes ?? []).some((a) => a.kind === "declaration" && n.value === a.value && n.important === a.important && !a.property.startsWith("--tw-"))) return E2.Replace([]);
        if (i.features & 1) {
          let a = qr(n, i.features);
          if (a) return E2.Replace(a);
        }
        n.value.includes("var(") && (n.value = ka(n.value, t2)), n.value = dt(n.value, e), n.value = be2(n.value);
      } else {
        if (n.kind === "context" || n.kind === "at-root") return E2.Replace(n.nodes);
        if (n.kind === "comment") return E2.Replace([]);
        if (n.kind === "at-rule" && n.name === "@property") return E2.Replace([]);
      }
    }, exit(n) {
      if (n.kind === "rule" || n.kind === "at-rule") {
        if (n.nodes.length > 1) {
          let s = /* @__PURE__ */ new Set();
          for (let a = n.nodes.length - 1; a >= 0; a--) {
            let p = n.nodes[a];
            p.kind === "declaration" && p.value !== void 0 && (s.has(p.property) && n.nodes.splice(a, 1), s.add(p.property));
          }
        }
        n.nodes.sort((s, a) => s.kind !== "declaration" || a.kind !== "declaration" ? 0 : s.property.localeCompare(a.property));
      }
    } }), r;
  }
  function ka(t2, r) {
    let i = false, e = B2(t2), n = /* @__PURE__ */ new Set();
    return I2(e, (s) => {
      if (s.kind !== "function" || s.value !== "var" || s.nodes.length !== 1 && s.nodes.length < 3) return;
      let a = s.nodes[0].value;
      r.theme.prefix && a.startsWith(`--${r.theme.prefix}-`) && (a = a.slice(`--${r.theme.prefix}-`.length));
      let p = r.resolveThemeValue(a);
      if (!n.has(a) && (n.add(a), p !== void 0 && (s.nodes.length === 1 && (i = true, s.nodes.push(...B2(`,${p}`))), s.nodes.length >= 3))) {
        let u2 = Z2(s.nodes), f2 = `${s.nodes[0].value},${p}`;
        if (u2 === f2) return i = true, E2.Replace(B2(p));
      }
    }), i ? Z2(e) : t2;
  }
  var Wt = /* @__PURE__ */ Symbol();
  function ba() {
    return new K2((t2) => new K2((r) => new K2((i) => /* @__PURE__ */ new Set())));
  }
  var vt = /* @__PURE__ */ Symbol();
  function xa(t2) {
    return new K2((r) => new K2((i) => {
      let e = new K2((s) => /* @__PURE__ */ new Set());
      t2.theme.prefix && !i.startsWith(t2.theme.prefix) && (i = `${t2.theme.prefix}:${i}`);
      let n = t2.parseCandidate(i);
      return n.length === 0 || I2(gi(t2, t2.compileAstNodes(n[0]).map((s) => ee2(s.node)), r), (s) => {
        s.kind === "declaration" && (e.get(s.property).add(s.value), t2.storage[Wt].get(r).get(s.property).get(s.value).add(i));
      }), e;
    }));
  }
  var Bt = /* @__PURE__ */ Symbol();
  function Aa(t2) {
    return new K2((r) => {
      let i = t2.storage[de].get(r), e = new K2(() => []);
      for (let [n, s] of t2.getClassList()) {
        let a = i.get(n);
        if (typeof a == "string") {
          if (n[0] === "-" && n.endsWith("-0")) {
            let p = i.get(n.slice(1));
            if (typeof p == "string" && a === p) continue;
          }
          e.get(a).push(n), t2.storage[vt].get(r).get(n);
          for (let p of s.modifiers) {
            if (ge(p)) continue;
            let u2 = `${n}/${p}`, f2 = i.get(u2);
            typeof f2 == "string" && (e.get(f2).push(u2), t2.storage[vt].get(r).get(u2));
          }
        }
      }
      return e;
    });
  }
  var yt = /* @__PURE__ */ Symbol();
  function Ca(t2) {
    return new K2((r) => {
      try {
        r = t2.theme.prefix && !r.startsWith(t2.theme.prefix) ? `${t2.theme.prefix}:${r}` : r;
        let i = [G2(".x", [F2("@apply", `${r}:flex`)])];
        return Ae(i, t2), I2(i, (n) => {
          if (n.kind === "at-rule" && n.params.includes(" ")) n.params = n.params.replaceAll(" ", "");
          else if (n.kind === "rule") {
            let s = Re(n.selector), a = false;
            I2(s, (p) => {
              if (p.kind === "separator" && p.value !== " ") p.value = p.value.trim(), a = true;
              else if (p.kind === "function" && p.value === ":is") {
                if (p.nodes.length === 1) return a = true, E2.Replace(p.nodes);
                if (p.nodes.length === 2 && p.nodes[0].kind === "selector" && p.nodes[0].value === "*" && p.nodes[1].kind === "selector" && p.nodes[1].value[0] === ":") return a = true, E2.Replace(p.nodes[1]);
              } else p.kind === "function" && p.value[0] === ":" && p.nodes[0]?.kind === "selector" && p.nodes[0]?.value[0] === ":" && (a = true, p.nodes.unshift({ kind: "selector", value: "*" }));
            }), a && (n.selector = pe2(s));
          }
        }), re2(i);
      } catch {
        return /* @__PURE__ */ Symbol();
      }
    });
  }
  var hi = /* @__PURE__ */ Symbol();
  function $a(t2) {
    let r = t2.storage[yt], i = new K2(() => []);
    for (let [e, n] of t2.variants.entries()) if (n.kind === "static") {
      let s = r.get(e);
      if (typeof s != "string") continue;
      i.get(s).push(e);
    }
    return i;
  }
  function Sa(t2, r) {
    let i = t2.theme.values.get, e = /* @__PURE__ */ new Set();
    t2.theme.values.get = (n) => {
      let s = i.call(t2.theme.values, n);
      return s === void 0 || s.options & 1 && (e.add(s), s.options &= -2), s;
    };
    try {
      return r();
    } finally {
      t2.theme.values.get = i;
      for (let n of e) n.options |= 1;
    }
  }
  function* Ta(t2) {
    let r = t2.length, i = 1n << BigInt(r);
    for (let e = r; e >= 2; e--) {
      let n = (1n << BigInt(e)) - 1n;
      for (; n < i; ) {
        let s = [];
        for (let u2 = 0; u2 < r; u2++) n >> BigInt(u2) & 1n && s.push(t2[u2]);
        yield s;
        let a = n & -n, p = n + a;
        n = ((p ^ n) >> 2n) / a | p;
      }
    }
  }
  function si(t2, r) {
    if (typeof t2.intersection == "function") return t2.intersection(r);
    if (t2.size === 0 || r.size === 0) return /* @__PURE__ */ new Set();
    let i = new Set(t2);
    for (let e of r) i.has(e) || i.delete(e);
    return i;
  }
  var Na = /^\d+\/\d+$/;
  function vi(t2) {
    let r = new K2((n) => ({ name: n, utility: n, fraction: false, modifiers: [] }));
    for (let n of t2.utilities.keys("static")) {
      if (t2.utilities.getCompletions(n).length === 0) continue;
      let a = r.get(n);
      a.fraction = false, a.modifiers = [];
    }
    for (let n of t2.utilities.keys("functional")) {
      let s = t2.utilities.getCompletions(n);
      for (let a of s) for (let p of a.values) {
        let u2 = p !== null && Na.test(p), f2 = p === null ? n : `${n}-${p}`, m = r.get(f2);
        if (m.utility = n, m.fraction ||= u2, m.modifiers.push(...a.modifiers), a.supportsNegative) {
          let d2 = r.get(`-${f2}`);
          d2.utility = `-${n}`, d2.fraction ||= u2, d2.modifiers.push(...a.modifiers);
        }
        m.modifiers = Array.from(new Set(m.modifiers));
      }
    }
    if (r.size === 0) return [];
    let i = Array.from(r.values());
    return i.sort((n, s) => pt(n.name, s.name)), Ea(i);
  }
  function Ea(t2) {
    let r = [], i = null, e = /* @__PURE__ */ new Map(), n = new K2(() => []);
    for (let a of t2) {
      let { utility: p, fraction: u2 } = a;
      i || (i = { utility: p, items: [] }, e.set(p, i)), p !== i.utility && (r.push(i), i = { utility: p, items: [] }, e.set(p, i)), u2 ? n.get(p).push(a) : i.items.push(a);
    }
    i && r[r.length - 1] !== i && r.push(i);
    for (let [a, p] of n) {
      let u2 = e.get(a);
      u2 && u2.items.push(...p);
    }
    let s = [];
    for (let a of r) for (let p of a.items) s.push([p.name, { modifiers: p.modifiers }]);
    return s;
  }
  function wi(t2) {
    let r = [];
    for (let [e, n] of t2.variants.entries()) {
      let p = function({ value: u2, modifier: f2 } = {}) {
        let m = e;
        u2 && (m += s ? `-${u2}` : u2), f2 && (m += `/${f2}`);
        let d2 = t2.parseVariant(m);
        if (!d2) return [];
        let c = G2(".__placeholder__", []);
        if (ze(c, d2, t2.variants) === null) return [];
        let w2 = [];
        return I2(c.nodes, { exit(h2, y2) {
          if (h2.kind !== "rule" && h2.kind !== "at-rule" || h2.nodes.length > 0) return;
          let x2 = y2.path();
          x2.push(h2), x2.sort((k, U2) => {
            let N2 = k.kind === "at-rule", O2 = U2.kind === "at-rule";
            return N2 && !O2 ? -1 : !N2 && O2 ? 1 : 0;
          });
          let $2 = x2.flatMap((k) => k.kind === "rule" ? k.selector === "&" ? [] : [k.selector] : k.kind === "at-rule" ? [`${k.name} ${k.params}`] : []), A2 = "";
          for (let k = $2.length - 1; k >= 0; k--) A2 = A2 === "" ? $2[k] : `${$2[k]} { ${A2} }`;
          w2.push(A2);
        } }), w2;
      };
      var i = p;
      if (n.kind === "arbitrary") continue;
      let s = e !== "@", a = t2.variants.getCompletions(e);
      switch (n.kind) {
        case "static": {
          r.push({ name: e, values: a, isArbitrary: false, hasDash: s, selectors: p });
          break;
        }
        case "functional": {
          r.push({ name: e, values: a, isArbitrary: true, hasDash: s, selectors: p });
          break;
        }
        case "compound": {
          r.push({ name: e, values: a, isArbitrary: true, hasDash: s, selectors: p });
          break;
        }
      }
    }
    return r;
  }
  function yi(t2, r) {
    let { astNodes: i, nodeSorting: e } = Ce(Array.from(r), t2), n = new Map(r.map((a) => [a, null])), s = 0n;
    for (let a of i) {
      let p = e.get(a)?.candidate;
      p && n.set(p, n.get(p) ?? s++);
    }
    return r.map((a) => [a, n.get(a) ?? null]);
  }
  var kt = /^@?[a-z0-9][a-zA-Z0-9_-]*(?<![_-])$/;
  var Yt = class {
    compareFns = /* @__PURE__ */ new Map();
    variants = /* @__PURE__ */ new Map();
    completions = /* @__PURE__ */ new Map();
    groupOrder = null;
    lastOrder = 0;
    static(r, i, { compounds: e, order: n } = {}) {
      this.set(r, { kind: "static", applyFn: i, compoundsWith: 0, compounds: e ?? 2, order: n });
    }
    fromAst(r, i, e) {
      let n = [], s = false;
      I2(i, (a) => {
        a.kind === "rule" ? n.push(a.selector) : a.kind === "at-rule" && a.name === "@variant" ? s = true : a.kind === "at-rule" && a.name !== "@slot" && n.push(`${a.name} ${a.params}`);
      }), this.static(r, (a) => {
        let p = i.map(ee2);
        s && Qe(p, e), Gt(p, a.nodes), a.nodes = p;
      }, { compounds: Pe(n) });
    }
    functional(r, i, { compounds: e, order: n } = {}) {
      this.set(r, { kind: "functional", applyFn: i, compoundsWith: 0, compounds: e ?? 2, order: n });
    }
    compound(r, i, e, { compounds: n, order: s } = {}) {
      this.set(r, { kind: "compound", applyFn: e, compoundsWith: i, compounds: n ?? 2, order: s });
    }
    group(r, i) {
      this.groupOrder = this.nextOrder(), i && this.compareFns.set(this.groupOrder, i), r(), this.groupOrder = null;
    }
    has(r) {
      return this.variants.has(r);
    }
    get(r) {
      return this.variants.get(r);
    }
    kind(r) {
      return this.variants.get(r)?.kind;
    }
    compoundsWith(r, i) {
      let e = this.variants.get(r), n = typeof i == "string" ? this.variants.get(i) : i.kind === "arbitrary" ? { compounds: Pe([i.selector]) } : this.variants.get(i.root);
      return !(!e || !n || e.kind !== "compound" || n.compounds === 0 || e.compoundsWith === 0 || (e.compoundsWith & n.compounds) === 0);
    }
    suggest(r, i) {
      this.completions.set(r, i);
    }
    getCompletions(r) {
      return this.completions.get(r)?.() ?? [];
    }
    compare(r, i) {
      if (r === i) return 0;
      if (r === null) return -1;
      if (i === null) return 1;
      if (r.kind === "arbitrary" && i.kind === "arbitrary") return r.selector < i.selector ? -1 : 1;
      if (r.kind === "arbitrary") return 1;
      if (i.kind === "arbitrary") return -1;
      let e = this.variants.get(r.root).order, n = this.variants.get(i.root).order, s = e - n;
      if (s !== 0) return s;
      if (r.kind === "compound" && i.kind === "compound") {
        let f2 = this.compare(r.variant, i.variant);
        return f2 !== 0 ? f2 : r.modifier && i.modifier ? r.modifier.value < i.modifier.value ? -1 : 1 : r.modifier ? 1 : i.modifier ? -1 : 0;
      }
      let a = this.compareFns.get(e);
      if (a !== void 0) return a(r, i);
      if (r.root !== i.root) return r.root < i.root ? -1 : 1;
      let p = r.value, u2 = i.value;
      return p === null ? -1 : u2 === null || p.kind === "arbitrary" && u2.kind !== "arbitrary" ? 1 : p.kind !== "arbitrary" && u2.kind === "arbitrary" || p.value < u2.value ? -1 : 1;
    }
    keys() {
      return this.variants.keys();
    }
    entries() {
      return this.variants.entries();
    }
    set(r, { kind: i, applyFn: e, compounds: n, compoundsWith: s, order: a }) {
      let p = this.variants.get(r);
      p ? Object.assign(p, { kind: i, applyFn: e, compounds: n }) : (a === void 0 && (this.lastOrder = this.nextOrder(), a = this.lastOrder), this.variants.set(r, { kind: i, applyFn: e, order: a, compoundsWith: s, compounds: n }));
    }
    nextOrder() {
      return this.groupOrder ?? this.lastOrder + 1;
    }
  };
  function Pe(t2) {
    let r = 0;
    for (let i of t2) {
      if (i[0] === "@") {
        if (!i.startsWith("@media") && !i.startsWith("@supports") && !i.startsWith("@container")) return 0;
        r |= 1;
        continue;
      }
      if (i.includes("::")) return 0;
      r |= 2;
    }
    return r;
  }
  function bi(t2) {
    let r = new Yt();
    function i(f2, m, { compounds: d2 } = {}) {
      d2 = d2 ?? Pe(m), r.static(f2, (c) => {
        c.nodes = m.map((w2) => J2(w2, c.nodes));
      }, { compounds: d2 });
    }
    i("*", [":is(& > *)"], { compounds: 0 }), i("**", [":is(& *)"], { compounds: 0 });
    function e(f2, m) {
      return m.map((d2) => {
        d2 = d2.trim();
        let c = d(d2, " ");
        return c[0] === "not" ? c.slice(1).join(" ") : f2 === "@container" ? c[0][0] === "(" ? `not ${d2}` : c[1] === "not" ? `${c[0]} ${c.slice(2).join(" ")}` : `${c[0]} not ${c.slice(1).join(" ")}` : `not ${d2}`;
      });
    }
    let n = ["@media", "@supports", "@container"];
    function s(f2) {
      for (let m of n) {
        if (m !== f2.name) continue;
        let d2 = d(f2.params, ",");
        return d2.length > 1 ? null : (d2 = e(f2.name, d2), F2(f2.name, d2.join(", ")));
      }
      return null;
    }
    function a(f2) {
      return f2.includes("::") ? null : `&:not(${d(f2, ",").map((d2) => (d2 = d2.replaceAll("&", "*"), d2)).join(", ")})`;
    }
    r.compound("not", 3, (f2, m) => {
      if (m.variant.kind === "arbitrary" && m.variant.relative || m.modifier) return null;
      let d2 = false;
      if (I2([f2], (c, w2) => {
        if (c.kind !== "rule" && c.kind !== "at-rule") return E2.Continue;
        if (c.nodes.length > 0) return E2.Continue;
        let h2 = [], y2 = [], x2 = w2.path();
        x2.push(c);
        for (let A2 of x2) A2.kind === "at-rule" ? h2.push(A2) : A2.kind === "rule" && y2.push(A2);
        if (h2.length > 1) return E2.Stop;
        if (y2.length > 1) return E2.Stop;
        let $2 = [];
        for (let A2 of y2) {
          let k = a(A2.selector);
          if (!k) return d2 = false, E2.Stop;
          $2.push(G2(k, []));
        }
        for (let A2 of h2) {
          let k = s(A2);
          if (!k) return d2 = false, E2.Stop;
          $2.push(k);
        }
        return Object.assign(f2, G2("&", $2)), d2 = true, E2.Skip;
      }), f2.kind === "rule" && f2.selector === "&" && f2.nodes.length === 1 && Object.assign(f2, f2.nodes[0]), !d2) return null;
    }), r.suggest("not", () => Array.from(r.keys()).filter((f2) => r.compoundsWith("not", f2))), r.compound("group", 2, (f2, m) => {
      if (m.variant.kind === "arbitrary" && m.variant.relative) return null;
      let d2 = m.modifier ? `:where(.${t2.prefix ? `${t2.prefix}\\:` : ""}group\\/${m.modifier.value})` : `:where(.${t2.prefix ? `${t2.prefix}\\:` : ""}group)`, c = false;
      if (I2([f2], (w2, h2) => {
        if (w2.kind !== "rule") return E2.Continue;
        for (let x2 of h2.path()) if (x2.kind === "rule") return c = false, E2.Stop;
        let y2 = w2.selector.replaceAll("&", d2);
        d(y2, ",").length > 1 && (y2 = `:is(${y2})`), w2.selector = `&:is(${y2} *)`, c = true;
      }), !c) return null;
    }), r.suggest("group", () => Array.from(r.keys()).filter((f2) => r.compoundsWith("group", f2))), r.compound("peer", 2, (f2, m) => {
      if (m.variant.kind === "arbitrary" && m.variant.relative) return null;
      let d2 = m.modifier ? `:where(.${t2.prefix ? `${t2.prefix}\\:` : ""}peer\\/${m.modifier.value})` : `:where(.${t2.prefix ? `${t2.prefix}\\:` : ""}peer)`, c = false;
      if (I2([f2], (w2, h2) => {
        if (w2.kind !== "rule") return E2.Continue;
        for (let x2 of h2.path()) if (x2.kind === "rule") return c = false, E2.Stop;
        let y2 = w2.selector.replaceAll("&", d2);
        d(y2, ",").length > 1 && (y2 = `:is(${y2})`), w2.selector = `&:is(${y2} ~ *)`, c = true;
      }), !c) return null;
    }), r.suggest("peer", () => Array.from(r.keys()).filter((f2) => r.compoundsWith("peer", f2))), i("first-letter", ["&::first-letter"]), i("first-line", ["&::first-line"]), i("marker", ["& *::marker", "&::marker", "& *::-webkit-details-marker", "&::-webkit-details-marker"]), i("selection", ["& *::selection", "&::selection"]), i("file", ["&::file-selector-button"]), i("placeholder", ["&::placeholder"]), i("backdrop", ["&::backdrop"]), i("details-content", ["&::details-content"]);
    {
      let f2 = function() {
        return W2([F2("@property", "--tw-content", [o("syntax", '"*"'), o("initial-value", '""'), o("inherits", "false")])]);
      };
      var p = f2;
      r.static("before", (m) => {
        m.nodes = [G2("&::before", [f2(), o("content", "var(--tw-content)"), ...m.nodes])];
      }, { compounds: 0 }), r.static("after", (m) => {
        m.nodes = [G2("&::after", [f2(), o("content", "var(--tw-content)"), ...m.nodes])];
      }, { compounds: 0 });
    }
    i("first", ["&:first-child"]), i("last", ["&:last-child"]), i("only", ["&:only-child"]), i("odd", ["&:nth-child(odd)"]), i("even", ["&:nth-child(even)"]), i("first-of-type", ["&:first-of-type"]), i("last-of-type", ["&:last-of-type"]), i("only-of-type", ["&:only-of-type"]), i("visited", ["&:visited"]), i("target", ["&:target"]), i("open", ["&:is([open], :popover-open, :open)"]), i("default", ["&:default"]), i("checked", ["&:checked"]), i("indeterminate", ["&:indeterminate"]), i("placeholder-shown", ["&:placeholder-shown"]), i("autofill", ["&:autofill"]), i("optional", ["&:optional"]), i("required", ["&:required"]), i("valid", ["&:valid"]), i("invalid", ["&:invalid"]), i("user-valid", ["&:user-valid"]), i("user-invalid", ["&:user-invalid"]), i("in-range", ["&:in-range"]), i("out-of-range", ["&:out-of-range"]), i("read-only", ["&:read-only"]), i("empty", ["&:empty"]), i("focus-within", ["&:focus-within"]), r.static("hover", (f2) => {
      f2.nodes = [G2("&:hover", [F2("@media", "(hover: hover)", f2.nodes)])];
    }), i("focus", ["&:focus"]), i("focus-visible", ["&:focus-visible"]), i("active", ["&:active"]), i("enabled", ["&:enabled"]), i("disabled", ["&:disabled"]), i("inert", ["&:is([inert], [inert] *)"]), r.compound("in", 2, (f2, m) => {
      if (m.modifier) return null;
      let d2 = false;
      if (I2([f2], (c, w2) => {
        if (c.kind !== "rule") return E2.Continue;
        for (let h2 of w2.path()) if (h2.kind === "rule") return d2 = false, E2.Stop;
        c.selector = `:where(${c.selector.replaceAll("&", "*")}) &`, d2 = true;
      }), !d2) return null;
    }), r.suggest("in", () => Array.from(r.keys()).filter((f2) => r.compoundsWith("in", f2))), r.compound("has", 2, (f2, m) => {
      if (m.modifier) return null;
      let d2 = false;
      if (I2([f2], (c, w2) => {
        if (c.kind !== "rule") return E2.Continue;
        for (let h2 of w2.path()) if (h2.kind === "rule") return d2 = false, E2.Stop;
        c.selector = `&:has(${c.selector.replaceAll("&", "*")})`, d2 = true;
      }), !d2) return null;
    }), r.suggest("has", () => Array.from(r.keys()).filter((f2) => r.compoundsWith("has", f2))), r.functional("aria", (f2, m) => {
      if (!m.value || m.modifier) return null;
      m.value.kind === "arbitrary" ? f2.nodes = [G2(`&[aria-${ki(m.value.value)}]`, f2.nodes)] : f2.nodes = [G2(`&[aria-${m.value.value}="true"]`, f2.nodes)];
    }), r.suggest("aria", () => ["busy", "checked", "disabled", "expanded", "hidden", "pressed", "readonly", "required", "selected"]), r.functional("data", (f2, m) => {
      if (!m.value || m.modifier) return null;
      f2.nodes = [G2(`&[data-${ki(m.value.value)}]`, f2.nodes)];
    }), r.functional("nth", (f2, m) => {
      if (!m.value || m.modifier || m.value.kind === "named" && !u(m.value.value)) return null;
      f2.nodes = [G2(`&:nth-child(${m.value.value})`, f2.nodes)];
    }), r.functional("nth-last", (f2, m) => {
      if (!m.value || m.modifier || m.value.kind === "named" && !u(m.value.value)) return null;
      f2.nodes = [G2(`&:nth-last-child(${m.value.value})`, f2.nodes)];
    }), r.functional("nth-of-type", (f2, m) => {
      if (!m.value || m.modifier || m.value.kind === "named" && !u(m.value.value)) return null;
      f2.nodes = [G2(`&:nth-of-type(${m.value.value})`, f2.nodes)];
    }), r.functional("nth-last-of-type", (f2, m) => {
      if (!m.value || m.modifier || m.value.kind === "named" && !u(m.value.value)) return null;
      f2.nodes = [G2(`&:nth-last-of-type(${m.value.value})`, f2.nodes)];
    }), r.functional("supports", (f2, m) => {
      if (!m.value || m.modifier) return null;
      let d2 = m.value.value;
      if (d2 === null) return null;
      if (/^[\w-]*\s*\(/.test(d2)) {
        let c = d2.replace(/\b(and|or|not)\b/g, " $1 ");
        f2.nodes = [F2("@supports", c, f2.nodes)];
        return;
      }
      d2.includes(":") || (d2 = `${d2}: var(--tw)`), (d2[0] !== "(" || d2[d2.length - 1] !== ")") && (d2 = `(${d2})`), f2.nodes = [F2("@supports", d2, f2.nodes)];
    }, { compounds: 1 }), i("motion-safe", ["@media (prefers-reduced-motion: no-preference)"]), i("motion-reduce", ["@media (prefers-reduced-motion: reduce)"]), i("contrast-more", ["@media (prefers-contrast: more)"]), i("contrast-less", ["@media (prefers-contrast: less)"]);
    {
      let f2 = function(m, d2, c, w2) {
        if (m === d2) return 0;
        let h2 = w2.get(m);
        if (h2 === null) return c === "asc" ? -1 : 1;
        let y2 = w2.get(d2);
        return y2 === null ? c === "asc" ? 1 : -1 : Ve(h2, y2, c);
      };
      var u2 = f2;
      {
        let m = t2.namespace("--breakpoint"), d2 = new K2((c) => {
          switch (c.kind) {
            case "static":
              return t2.resolveValue(c.root, ["--breakpoint"]) ?? null;
            case "functional": {
              if (!c.value || c.modifier) return null;
              let w2 = null;
              return c.value.kind === "arbitrary" ? w2 = c.value.value : c.value.kind === "named" && (w2 = t2.resolveValue(c.value.value, ["--breakpoint"])), !w2 || w2.includes("var(") ? null : w2;
            }
            case "arbitrary":
            case "compound":
              return null;
          }
        });
        r.group(() => {
          r.functional("max", (c, w2) => {
            if (w2.modifier) return null;
            let h2 = d2.get(w2);
            if (h2 === null) return null;
            c.nodes = [F2("@media", `(width < ${h2})`, c.nodes)];
          }, { compounds: 1 });
        }, (c, w2) => f2(c, w2, "desc", d2)), r.suggest("max", () => Array.from(m.keys()).filter((c) => c !== null)), r.group(() => {
          for (let [c, w2] of t2.namespace("--breakpoint")) c !== null && r.static(c, (h2) => {
            h2.nodes = [F2("@media", `(width >= ${w2})`, h2.nodes)];
          }, { compounds: 1 });
          r.functional("min", (c, w2) => {
            if (w2.modifier) return null;
            let h2 = d2.get(w2);
            if (h2 === null) return null;
            c.nodes = [F2("@media", `(width >= ${h2})`, c.nodes)];
          }, { compounds: 1 });
        }, (c, w2) => f2(c, w2, "asc", d2)), r.suggest("min", () => Array.from(m.keys()).filter((c) => c !== null));
      }
      {
        let m = t2.namespace("--container"), d2 = new K2((c) => {
          switch (c.kind) {
            case "functional": {
              if (c.value === null) return null;
              let w2 = null;
              return c.value.kind === "arbitrary" ? w2 = c.value.value : c.value.kind === "named" && (w2 = t2.resolveValue(c.value.value, ["--container"])), !w2 || w2.includes("var(") ? null : w2;
            }
            case "static":
            case "arbitrary":
            case "compound":
              return null;
          }
        });
        r.group(() => {
          r.functional("@max", (c, w2) => {
            let h2 = d2.get(w2);
            if (h2 === null) return null;
            c.nodes = [F2("@container", w2.modifier ? `${w2.modifier.value} (width < ${h2})` : `(width < ${h2})`, c.nodes)];
          }, { compounds: 1 });
        }, (c, w2) => f2(c, w2, "desc", d2)), r.suggest("@max", () => Array.from(m.keys()).filter((c) => c !== null)), r.group(() => {
          r.functional("@", (c, w2) => {
            let h2 = d2.get(w2);
            if (h2 === null) return null;
            c.nodes = [F2("@container", w2.modifier ? `${w2.modifier.value} (width >= ${h2})` : `(width >= ${h2})`, c.nodes)];
          }, { compounds: 1 }), r.functional("@min", (c, w2) => {
            let h2 = d2.get(w2);
            if (h2 === null) return null;
            c.nodes = [F2("@container", w2.modifier ? `${w2.modifier.value} (width >= ${h2})` : `(width >= ${h2})`, c.nodes)];
          }, { compounds: 1 });
        }, (c, w2) => f2(c, w2, "asc", d2)), r.suggest("@min", () => Array.from(m.keys()).filter((c) => c !== null)), r.suggest("@", () => Array.from(m.keys()).filter((c) => c !== null));
      }
    }
    return i("portrait", ["@media (orientation: portrait)"]), i("landscape", ["@media (orientation: landscape)"]), i("ltr", ['&:where(:dir(ltr), [dir="ltr"], [dir="ltr"] *)']), i("rtl", ['&:where(:dir(rtl), [dir="rtl"], [dir="rtl"] *)']), i("dark", ["@media (prefers-color-scheme: dark)"]), i("starting", ["@starting-style"]), i("print", ["@media print"]), i("forced-colors", ["@media (forced-colors: active)"]), i("inverted-colors", ["@media (inverted-colors: inverted)"]), i("pointer-none", ["@media (pointer: none)"]), i("pointer-coarse", ["@media (pointer: coarse)"]), i("pointer-fine", ["@media (pointer: fine)"]), i("any-pointer-none", ["@media (any-pointer: none)"]), i("any-pointer-coarse", ["@media (any-pointer: coarse)"]), i("any-pointer-fine", ["@media (any-pointer: fine)"]), i("noscript", ["@media (scripting: none)"]), r;
  }
  function ki(t2) {
    if (t2.includes("=")) {
      let [r, ...i] = d(t2, "="), e = i.join("=").trim();
      if (e[0] === "'" || e[0] === '"') return t2;
      if (e.length > 1) {
        let n = e[e.length - 1];
        if (e[e.length - 2] === " " && (n === "i" || n === "I" || n === "s" || n === "S")) return `${r}="${e.slice(0, -2)}" ${n}`;
      }
      return `${r}="${e}"`;
    }
    return t2;
  }
  function Gt(t2, r) {
    I2(t2, (i) => {
      if (i.kind === "at-rule" && i.name === "@slot") return E2.Replace(r);
      if (i.kind === "at-rule" && (i.name === "@keyframes" || i.name === "@property")) return Object.assign(i, W2([F2(i.name, i.params, i.nodes)])), E2.Skip;
    });
  }
  function Qe(t2, r) {
    let i = 0;
    return I2(t2, (e) => {
      if (e.kind !== "at-rule" || e.name !== "@variant") return;
      let n = G2("&", e.nodes), s = e.params, a = r.parseVariant(s);
      if (a === null) throw new Error(`Cannot use \`@variant\` with unknown variant: ${s}`);
      if (ze(n, a, r.variants) === null) throw new Error(`Cannot use \`@variant\` with variant: ${s}`);
      return i |= 32, E2.Replace(n);
    }), i;
  }
  function xi(t2, r) {
    let i = Dr(t2), e = bi(t2), n = new K2((d2) => Nr(d2, m)), s = new K2((d2) => Array.from(Vr(d2, m))), a = new K2((d2) => new K2((c) => {
      let w2 = Ai(c, m, d2);
      try {
        De(w2.map(({ node: h2 }) => h2), m), Qe(w2.map(({ node: h2 }) => h2), m);
      } catch {
        return [];
      }
      return w2;
    })), p = new K2((d2) => {
      for (let c of st(d2)) t2.markUsedVariable(c);
    });
    function u2(d2) {
      let c = [];
      for (let w2 of d2) {
        let h2 = true, { astNodes: y2 } = Ce([w2], m, { onInvalidCandidate() {
          h2 = false;
        } });
        r && I2(y2, (x2) => (x2.src ??= r, E2.Continue)), y2 = Te(y2, m, 0), c.push(h2 ? y2 : []);
      }
      return c;
    }
    function f2(d2) {
      return u2(d2).map((c) => c.length > 0 ? re2(c) : null);
    }
    let m = { theme: t2, utilities: i, variants: e, invalidCandidates: /* @__PURE__ */ new Set(), important: false, candidatesToCss: f2, candidatesToAst: u2, getClassOrder(d2) {
      return yi(this, d2);
    }, getClassList() {
      return vi(this);
    }, getVariants() {
      return wi(this);
    }, parseCandidate(d2) {
      return s.get(d2);
    }, parseVariant(d2) {
      return n.get(d2);
    }, compileAstNodes(d2, c = 1) {
      return a.get(c).get(d2);
    }, printCandidate(d2) {
      return Rr(m, d2);
    }, printVariant(d2) {
      return ut(d2);
    }, getVariantOrder() {
      let d2 = Array.from(n.values());
      d2.sort((y2, x2) => this.variants.compare(y2, x2));
      let c = /* @__PURE__ */ new Map(), w2, h2 = 0;
      for (let y2 of d2) y2 !== null && (w2 !== void 0 && this.variants.compare(w2, y2) !== 0 && h2++, c.set(y2, h2), w2 = y2);
      return c;
    }, resolveThemeValue(d2, c = true) {
      let w2 = d2.lastIndexOf("/"), h2 = null;
      w2 !== -1 && (h2 = d2.slice(w2 + 1).trim(), d2 = d2.slice(0, w2).trim());
      let y2 = t2.resolve(null, [d2], c ? 1 : 0) ?? void 0;
      return h2 && y2 ? Q2(y2, h2) : y2;
    }, trackUsedVariables(d2) {
      p.get(d2);
    }, canonicalizeCandidates(d2, c) {
      return Mt(this, d2, c);
    }, storage: {} };
    return m;
  }
  var qt = ["container-type", "pointer-events", "visibility", "position", "inset", "inset-inline", "inset-block", "inset-inline-start", "inset-inline-end", "top", "right", "bottom", "left", "isolation", "z-index", "order", "grid-column", "grid-column-start", "grid-column-end", "grid-row", "grid-row-start", "grid-row-end", "float", "clear", "--tw-container-component", "margin", "margin-inline", "margin-block", "margin-inline-start", "margin-inline-end", "margin-top", "margin-right", "margin-bottom", "margin-left", "box-sizing", "display", "field-sizing", "aspect-ratio", "height", "max-height", "min-height", "width", "max-width", "min-width", "flex", "flex-shrink", "flex-grow", "flex-basis", "table-layout", "caption-side", "border-collapse", "border-spacing", "transform-origin", "translate", "--tw-translate-x", "--tw-translate-y", "--tw-translate-z", "scale", "--tw-scale-x", "--tw-scale-y", "--tw-scale-z", "rotate", "--tw-rotate-x", "--tw-rotate-y", "--tw-rotate-z", "--tw-skew-x", "--tw-skew-y", "transform", "animation", "cursor", "touch-action", "--tw-pan-x", "--tw-pan-y", "--tw-pinch-zoom", "resize", "scroll-snap-type", "--tw-scroll-snap-strictness", "scroll-snap-align", "scroll-snap-stop", "scroll-margin", "scroll-margin-inline", "scroll-margin-block", "scroll-margin-inline-start", "scroll-margin-inline-end", "scroll-margin-top", "scroll-margin-right", "scroll-margin-bottom", "scroll-margin-left", "scroll-padding", "scroll-padding-inline", "scroll-padding-block", "scroll-padding-inline-start", "scroll-padding-inline-end", "scroll-padding-top", "scroll-padding-right", "scroll-padding-bottom", "scroll-padding-left", "list-style-position", "list-style-type", "list-style-image", "appearance", "columns", "break-before", "break-inside", "break-after", "grid-auto-columns", "grid-auto-flow", "grid-auto-rows", "grid-template-columns", "grid-template-rows", "flex-direction", "flex-wrap", "place-content", "place-items", "align-content", "align-items", "justify-content", "justify-items", "gap", "column-gap", "row-gap", "--tw-space-x-reverse", "--tw-space-y-reverse", "divide-x-width", "divide-y-width", "--tw-divide-y-reverse", "divide-style", "divide-color", "place-self", "align-self", "justify-self", "overflow", "overflow-x", "overflow-y", "overscroll-behavior", "overscroll-behavior-x", "overscroll-behavior-y", "scroll-behavior", "border-radius", "border-start-radius", "border-end-radius", "border-top-radius", "border-right-radius", "border-bottom-radius", "border-left-radius", "border-start-start-radius", "border-start-end-radius", "border-end-end-radius", "border-end-start-radius", "border-top-left-radius", "border-top-right-radius", "border-bottom-right-radius", "border-bottom-left-radius", "border-width", "border-inline-width", "border-block-width", "border-inline-start-width", "border-inline-end-width", "border-top-width", "border-right-width", "border-bottom-width", "border-left-width", "border-style", "border-inline-style", "border-block-style", "border-inline-start-style", "border-inline-end-style", "border-top-style", "border-right-style", "border-bottom-style", "border-left-style", "border-color", "border-inline-color", "border-block-color", "border-inline-start-color", "border-inline-end-color", "border-top-color", "border-right-color", "border-bottom-color", "border-left-color", "background-color", "background-image", "--tw-gradient-position", "--tw-gradient-stops", "--tw-gradient-via-stops", "--tw-gradient-from", "--tw-gradient-from-position", "--tw-gradient-via", "--tw-gradient-via-position", "--tw-gradient-to", "--tw-gradient-to-position", "mask-image", "--tw-mask-top", "--tw-mask-top-from-color", "--tw-mask-top-from-position", "--tw-mask-top-to-color", "--tw-mask-top-to-position", "--tw-mask-right", "--tw-mask-right-from-color", "--tw-mask-right-from-position", "--tw-mask-right-to-color", "--tw-mask-right-to-position", "--tw-mask-bottom", "--tw-mask-bottom-from-color", "--tw-mask-bottom-from-position", "--tw-mask-bottom-to-color", "--tw-mask-bottom-to-position", "--tw-mask-left", "--tw-mask-left-from-color", "--tw-mask-left-from-position", "--tw-mask-left-to-color", "--tw-mask-left-to-position", "--tw-mask-linear", "--tw-mask-linear-position", "--tw-mask-linear-from-color", "--tw-mask-linear-from-position", "--tw-mask-linear-to-color", "--tw-mask-linear-to-position", "--tw-mask-radial", "--tw-mask-radial-shape", "--tw-mask-radial-size", "--tw-mask-radial-position", "--tw-mask-radial-from-color", "--tw-mask-radial-from-position", "--tw-mask-radial-to-color", "--tw-mask-radial-to-position", "--tw-mask-conic", "--tw-mask-conic-position", "--tw-mask-conic-from-color", "--tw-mask-conic-from-position", "--tw-mask-conic-to-color", "--tw-mask-conic-to-position", "box-decoration-break", "background-size", "background-attachment", "background-clip", "background-position", "background-repeat", "background-origin", "mask-composite", "mask-mode", "mask-type", "mask-size", "mask-clip", "mask-position", "mask-repeat", "mask-origin", "fill", "stroke", "stroke-width", "object-fit", "object-position", "padding", "padding-inline", "padding-block", "padding-inline-start", "padding-inline-end", "padding-top", "padding-right", "padding-bottom", "padding-left", "text-align", "text-indent", "vertical-align", "font-family", "font-size", "line-height", "font-weight", "letter-spacing", "text-wrap", "overflow-wrap", "word-break", "text-overflow", "hyphens", "white-space", "color", "text-transform", "font-style", "font-stretch", "font-variant-numeric", "text-decoration-line", "text-decoration-color", "text-decoration-style", "text-decoration-thickness", "text-underline-offset", "-webkit-font-smoothing", "placeholder-color", "caret-color", "accent-color", "color-scheme", "opacity", "background-blend-mode", "mix-blend-mode", "box-shadow", "--tw-shadow", "--tw-shadow-color", "--tw-ring-shadow", "--tw-ring-color", "--tw-inset-shadow", "--tw-inset-shadow-color", "--tw-inset-ring-shadow", "--tw-inset-ring-color", "--tw-ring-offset-width", "--tw-ring-offset-color", "outline", "outline-width", "outline-offset", "outline-color", "--tw-blur", "--tw-brightness", "--tw-contrast", "--tw-drop-shadow", "--tw-grayscale", "--tw-hue-rotate", "--tw-invert", "--tw-saturate", "--tw-sepia", "filter", "--tw-backdrop-blur", "--tw-backdrop-brightness", "--tw-backdrop-contrast", "--tw-backdrop-grayscale", "--tw-backdrop-hue-rotate", "--tw-backdrop-invert", "--tw-backdrop-opacity", "--tw-backdrop-saturate", "--tw-backdrop-sepia", "backdrop-filter", "transition-property", "transition-behavior", "transition-delay", "transition-duration", "transition-timing-function", "will-change", "contain", "content", "forced-color-adjust"];
  function Ce(t2, r, { onInvalidCandidate: i, respectImportant: e } = {}) {
    let n = /* @__PURE__ */ new Map(), s = [], a = /* @__PURE__ */ new Map();
    for (let f2 of t2) {
      if (r.invalidCandidates.has(f2)) {
        i?.(f2);
        continue;
      }
      let m = r.parseCandidate(f2);
      if (m.length === 0) {
        i?.(f2);
        continue;
      }
      a.set(f2, m);
    }
    let p = 0;
    (e ?? true) && (p |= 1);
    let u2 = r.getVariantOrder();
    for (let [f2, m] of a) {
      let d2 = false;
      for (let c of m) {
        let w2 = r.compileAstNodes(c, p);
        if (w2.length !== 0) {
          d2 = true;
          for (let { node: h2, propertySort: y2 } of w2) {
            let x2 = 0n;
            for (let $2 of c.variants) x2 |= 1n << BigInt(u2.get($2));
            n.set(h2, { properties: y2, variants: x2, candidate: f2 }), s.push(h2);
          }
        }
      }
      d2 || i?.(f2);
    }
    return s.sort((f2, m) => {
      let d2 = n.get(f2), c = n.get(m);
      if (d2.variants - c.variants !== 0n) return Number(d2.variants - c.variants);
      let w2 = 0;
      for (; w2 < d2.properties.order.length && w2 < c.properties.order.length && d2.properties.order[w2] === c.properties.order[w2]; ) w2 += 1;
      return (d2.properties.order[w2] ?? 1 / 0) - (c.properties.order[w2] ?? 1 / 0) || c.properties.count - d2.properties.count || pt(d2.candidate, c.candidate);
    }), { astNodes: s, nodeSorting: n };
  }
  function Ai(t2, r, i) {
    let e = Ra(t2, r);
    if (e.length === 0) return [];
    let n = r.important && !!(i & 1), s = [], a = `.${ye(t2.raw)}`;
    for (let p of e) {
      let u2 = Oa(p);
      (t2.important || n) && $i(p);
      let f2 = { kind: "rule", selector: a, nodes: p };
      for (let m of t2.variants) if (ze(f2, m, r.variants) === null) return [];
      s.push({ node: f2, propertySort: u2 });
    }
    return s;
  }
  function ze(t2, r, i, e = 0) {
    if (r.kind === "arbitrary") {
      if (r.relative && e === 0) return null;
      t2.nodes = [J2(r.selector, t2.nodes)];
      return;
    }
    let { applyFn: n } = i.get(r.root);
    if (r.kind === "compound") {
      let a = F2("@slot");
      if (ze(a, r.variant, i, e + 1) === null || r.root === "not" && a.nodes.length > 1) return null;
      for (let u2 of a.nodes) if (u2.kind !== "rule" && u2.kind !== "at-rule" || n(u2, r) === null) return null;
      I2(a.nodes, (u2) => {
        if ((u2.kind === "rule" || u2.kind === "at-rule") && u2.nodes.length <= 0) return u2.nodes = t2.nodes, E2.Skip;
      }), t2.nodes = a.nodes;
      return;
    }
    if (n(t2, r) === null) return null;
  }
  function Ci(t2) {
    let r = t2.options?.types ?? [];
    return r.length > 1 && r.includes("any");
  }
  function Ra(t2, r) {
    if (t2.kind === "arbitrary") {
      let a = t2.value;
      return t2.modifier && (a = X2(a, t2.modifier, r.theme)), a === null ? [] : [[o(t2.property, a)]];
    }
    let i = r.utilities.get(t2.root) ?? [], e = [], n = i.filter((a) => !Ci(a));
    for (let a of n) {
      if (a.kind !== t2.kind) continue;
      let p = a.compileFn(t2);
      if (p !== void 0) {
        if (p === null) return e;
        e.push(p);
      }
    }
    if (e.length > 0) return e;
    let s = i.filter((a) => Ci(a));
    for (let a of s) {
      if (a.kind !== t2.kind) continue;
      let p = a.compileFn(t2);
      if (p !== void 0) {
        if (p === null) return e;
        e.push(p);
      }
    }
    return e;
  }
  function $i(t2) {
    for (let r of t2) r.kind !== "at-root" && (r.kind === "declaration" ? r.important = true : (r.kind === "rule" || r.kind === "at-rule") && $i(r.nodes));
  }
  function Oa(t2) {
    let r = /* @__PURE__ */ new Set(), i = 0, e = t2.slice(), n = false;
    for (; e.length > 0; ) {
      let s = e.shift();
      if (s.kind === "declaration") {
        if (s.value === void 0 || (i++, n)) continue;
        if (s.property === "--tw-sort") {
          let p = qt.indexOf(s.value ?? "");
          if (p !== -1) {
            r.add(p), n = true;
            continue;
          }
        }
        let a = qt.indexOf(s.property);
        a !== -1 && r.add(a);
      } else if (s.kind === "rule" || s.kind === "at-rule") for (let a of s.nodes) e.push(a);
    }
    return { order: Array.from(r).sort((s, a) => s - a), count: i };
  }
  function Ae(t2, r) {
    let i = 0, e = J2("&", t2), n = /* @__PURE__ */ new Set(), s = new K2(() => /* @__PURE__ */ new Set()), a = new K2(() => /* @__PURE__ */ new Set());
    I2([e], (d2, c) => {
      if (d2.kind === "at-rule") {
        if (d2.name === "@keyframes") return I2(d2.nodes, (w2) => {
          if (w2.kind === "at-rule" && w2.name === "@apply") throw new Error("You cannot use `@apply` inside `@keyframes`.");
        }), E2.Skip;
        if (d2.name === "@utility") {
          let w2 = d2.params.replace(/-\*$/, "");
          a.get(w2).add(d2), I2(d2.nodes, (h2) => {
            if (!(h2.kind !== "at-rule" || h2.name !== "@apply")) {
              n.add(d2);
              for (let y2 of Si(h2, r)) s.get(d2).add(y2);
            }
          });
          return;
        }
        if (d2.name === "@apply") {
          if (c.parent === null) return;
          i |= 1, n.add(c.parent);
          for (let w2 of Si(d2, r)) for (let h2 of c.path()) n.has(h2) && s.get(h2).add(w2);
        }
      }
    });
    let p = /* @__PURE__ */ new Set(), u2 = [], f2 = /* @__PURE__ */ new Set();
    function m(d2, c = []) {
      if (!p.has(d2)) {
        if (f2.has(d2)) {
          let w2 = c[(c.indexOf(d2) + 1) % c.length];
          throw d2.kind === "at-rule" && d2.name === "@utility" && w2.kind === "at-rule" && w2.name === "@utility" && I2(d2.nodes, (h2) => {
            if (h2.kind !== "at-rule" || h2.name !== "@apply") return;
            let y2 = h2.params.split(/\s+/g);
            for (let x2 of y2) for (let $2 of r.parseCandidate(x2)) switch ($2.kind) {
              case "arbitrary":
                break;
              case "static":
              case "functional":
                if (w2.params.replace(/-\*$/, "") === $2.root) throw new Error(`You cannot \`@apply\` the \`${x2}\` utility here because it creates a circular dependency.`);
                break;
              default:
            }
          }), new Error(`Circular dependency detected:

${re2([d2])}
Relies on:

${re2([w2])}`);
        }
        f2.add(d2);
        for (let w2 of s.get(d2)) for (let h2 of a.get(w2)) c.push(d2), m(h2, c), c.pop();
        p.add(d2), f2.delete(d2), u2.push(d2);
      }
    }
    for (let d2 of n) m(d2);
    for (let d2 of u2) "nodes" in d2 && I2(d2.nodes, (c) => {
      if (c.kind !== "at-rule" || c.name !== "@apply") return;
      let w2 = c.params.split(/(\s+)/g), h2 = {}, y2 = 0;
      for (let [x2, $2] of w2.entries()) x2 % 2 === 0 && (h2[$2] = y2), y2 += $2.length;
      {
        let x2 = Object.keys(h2), $2 = Ce(x2, r, { respectImportant: false, onInvalidCandidate: (N2) => {
          if (r.theme.prefix && !N2.startsWith(r.theme.prefix)) throw new Error(`Cannot apply unprefixed utility class \`${N2}\`. Did you mean \`${r.theme.prefix}:${N2}\`?`);
          if (r.invalidCandidates.has(N2)) throw new Error(`Cannot apply utility class \`${N2}\` because it has been explicitly disabled: https://tailwindcss.com/docs/detecting-classes-in-source-files#explicitly-excluding-classes`);
          let O2 = d(N2, ":");
          if (O2.length > 1) {
            let L2 = O2.pop();
            if (r.candidatesToCss([L2])[0]) {
              let _2 = r.candidatesToCss(O2.map((Y2) => `${Y2}:[--tw-variant-check:1]`)), z2 = O2.filter((Y2, q2) => _2[q2] === null);
              if (z2.length > 0) {
                if (z2.length === 1) throw new Error(`Cannot apply utility class \`${N2}\` because the ${z2.map((Y2) => `\`${Y2}\``)} variant does not exist.`);
                {
                  let Y2 = new Intl.ListFormat("en", { style: "long", type: "conjunction" });
                  throw new Error(`Cannot apply utility class \`${N2}\` because the ${Y2.format(z2.map((q2) => `\`${q2}\``))} variants do not exist.`);
                }
              }
            }
          }
          throw r.theme.size === 0 ? new Error(`Cannot apply unknown utility class \`${N2}\`. Are you using CSS modules or similar and missing \`@reference\`? https://tailwindcss.com/docs/functions-and-directives#reference-directive`) : new Error(`Cannot apply unknown utility class \`${N2}\``);
        } }), A2 = c.src, k = $2.astNodes.map((N2) => {
          let O2 = $2.nodeSorting.get(N2)?.candidate, L2 = O2 ? h2[O2] : void 0;
          if (N2 = ee2(N2), !A2 || !O2 || L2 === void 0) return I2([N2], (z2) => {
            z2.src = A2;
          }), N2;
          let _2 = [A2[0], A2[1], A2[2]];
          return _2[1] += 7 + L2, _2[2] = _2[1] + O2.length, I2([N2], (z2) => {
            z2.src = _2;
          }), N2;
        }), U2 = [];
        for (let N2 of k) if (N2.kind === "rule") for (let O2 of N2.nodes) U2.push(O2);
        else U2.push(N2);
        return E2.Replace(U2);
      }
    });
    return i;
  }
  function* Si(t2, r) {
    for (let i of t2.params.split(/\s+/g)) for (let e of r.parseCandidate(i)) switch (e.kind) {
      case "arbitrary":
        break;
      case "static":
      case "functional":
        yield e.root;
        break;
      default:
    }
  }
  async function Zt(t2, r, i, e = 0, n = false) {
    let s = 0, a = [];
    return I2(t2, (p) => {
      if (p.kind === "at-rule" && (p.name === "@import" || p.name === "@reference")) {
        let u2 = Pa(B2(p.params));
        if (u2 === null) return;
        p.name === "@reference" && (u2.media = "reference"), s |= 2;
        let { uri: f2, layer: m, media: d2, supports: c } = u2;
        if (f2.startsWith("data:") || f2.startsWith("http://") || f2.startsWith("https://")) return;
        let w2 = ce({}, []);
        return a.push((async () => {
          if (e > 100) throw new Error(`Exceeded maximum recursion depth while resolving \`${f2}\` in \`${r}\`)`);
          let h2 = await i(f2, r), y2 = $e(h2.content, { from: n ? h2.path : void 0 });
          await Zt(y2, h2.base, i, e + 1, n), w2.nodes = Ia(p, [ce({ base: h2.base }, y2)], m, d2, c);
        })()), E2.ReplaceSkip(w2);
      }
    }), a.length > 0 && await Promise.all(a), s;
  }
  function Pa(t2) {
    let r, i = null, e = null, n = null;
    for (let s = 0; s < t2.length; s++) {
      let a = t2[s];
      if (a.kind !== "separator") {
        if (a.kind === "word" && !r) {
          if (!a.value || a.value[0] !== '"' && a.value[0] !== "'") return null;
          r = a.value.slice(1, -1);
          continue;
        }
        if (a.kind === "function" && a.value.toLowerCase() === "url" || !r) return null;
        if ((a.kind === "word" || a.kind === "function") && a.value.toLowerCase() === "layer") {
          if (i) return null;
          if (n) throw new Error("`layer(\u2026)` in an `@import` should come before any other functions or conditions");
          "nodes" in a ? i = Z2(a.nodes) : i = "";
          continue;
        }
        if (a.kind === "function" && a.value.toLowerCase() === "supports") {
          if (n) return null;
          n = Z2(a.nodes);
          continue;
        }
        e = Z2(t2.slice(s));
        break;
      }
    }
    return r ? { uri: r, layer: i, media: e, supports: n } : null;
  }
  function Ia(t2, r, i, e, n) {
    let s = r;
    if (i !== null) {
      let a = F2("@layer", i, s);
      a.src = t2.src, s = [a];
    }
    if (e !== null) {
      let a = F2("@media", e, s);
      a.src = t2.src, s = [a];
    }
    if (n !== null) {
      let a = F2("@supports", n[0] === "(" ? n : `(${n})`, s);
      a.src = t2.src, s = [a];
    }
    return s;
  }
  function Me(t2) {
    if (Object.prototype.toString.call(t2) !== "[object Object]") return false;
    let r = Object.getPrototypeOf(t2);
    return r === null || Object.getPrototypeOf(r) === null;
  }
  function Xe(t2, r, i, e = []) {
    for (let n of r) if (n != null) for (let s of Reflect.ownKeys(n)) {
      e.push(s);
      let a = i(t2[s], n[s], e);
      a !== void 0 ? t2[s] = a : !Me(t2[s]) || !Me(n[s]) ? t2[s] = n[s] : t2[s] = Xe({}, [t2[s], n[s]], i, e), e.pop();
    }
    return t2;
  }
  function bt(t2, r, i) {
    return function(n, s) {
      let a = n.lastIndexOf("/"), p = null;
      a !== -1 && (p = n.slice(a + 1).trim(), n = n.slice(0, a).trim());
      let u2 = (() => {
        let f2 = Oe(n), [m, d2] = _a(t2.theme, f2), c = i(Ti(r() ?? {}, f2) ?? null);
        if (typeof c == "string" && (c = c.replace("<alpha-value>", "1")), typeof m != "object") return typeof d2 != "object" && d2 & 4 ? c ?? m : m;
        if (c !== null && typeof c == "object" && !Array.isArray(c)) {
          let w2 = Xe({}, [c], (h2, y2) => y2);
          if (m === null && Object.hasOwn(c, "__CSS_VALUES__")) {
            let h2 = {};
            for (let y2 in c.__CSS_VALUES__) h2[y2] = c[y2], delete w2[y2];
            m = h2;
          }
          for (let h2 in m) h2 !== "__CSS_VALUES__" && (c?.__CSS_VALUES__?.[h2] & 4 && Ti(w2, h2.split("-")) !== void 0 || (w2[Se(h2)] = m[h2]));
          return w2;
        }
        if (Array.isArray(m) && Array.isArray(d2) && Array.isArray(c)) {
          let w2 = m[0], h2 = m[1];
          d2[0] & 4 && (w2 = c[0] ?? w2);
          for (let y2 of Object.keys(h2)) d2[1][y2] & 4 && (h2[y2] = c[1][y2] ?? h2[y2]);
          return [w2, h2];
        }
        return m ?? c;
      })();
      return p && typeof u2 == "string" && (u2 = Q2(u2, p)), u2 ?? s;
    };
  }
  function _a(t2, r) {
    if (r.length === 1 && r[0].startsWith("--")) return [t2.get([r[0]]), t2.getOptions(r[0])];
    let i = je(r), e = /* @__PURE__ */ new Map(), n = new K2(() => /* @__PURE__ */ new Map()), s = t2.namespace(`--${i}`);
    if (s.size === 0) return [null, 0];
    let a = /* @__PURE__ */ new Map();
    for (let [m, d2] of s) {
      if (!m || !m.includes("--")) {
        e.set(m, d2), a.set(m, t2.getOptions(m ? `--${i}-${m}` : `--${i}`));
        continue;
      }
      let c = m.indexOf("--"), w2 = m.slice(0, c), h2 = m.slice(c + 2);
      h2 = h2.replace(/-([a-z])/g, (y2, x2) => x2.toUpperCase()), n.get(w2 === "" ? null : w2).set(h2, [d2, t2.getOptions(`--${i}${m}`)]);
    }
    let p = t2.getOptions(`--${i}`);
    for (let [m, d2] of n) {
      let c = e.get(m);
      if (typeof c != "string") continue;
      let w2 = {}, h2 = {};
      for (let [y2, [x2, $2]] of d2) w2[y2] = x2, h2[y2] = $2;
      e.set(m, [c, w2]), a.set(m, [p, h2]);
    }
    let u2 = {}, f2 = {};
    for (let [m, d2] of e) Vi(u2, [m ?? "DEFAULT"], d2);
    for (let [m, d2] of a) Vi(f2, [m ?? "DEFAULT"], d2);
    return r[r.length - 1] === "DEFAULT" ? [u2?.DEFAULT ?? null, f2.DEFAULT ?? 0] : "DEFAULT" in u2 && Object.keys(u2).length === 1 ? [u2.DEFAULT, f2.DEFAULT ?? 0] : (u2.__CSS_VALUES__ = f2, [u2, f2]);
  }
  function Ti(t2, r) {
    for (let i = 0; i < r.length; ++i) {
      let e = r[i];
      if (t2?.[e] === void 0) {
        if (r[i + 1] === void 0) return;
        r[i + 1] = `${e}-${r[i + 1]}`;
        continue;
      }
      if (typeof t2 == "string") return;
      t2 = t2[e];
    }
    return t2;
  }
  function Vi(t2, r, i) {
    for (let e of r.slice(0, -1)) t2[e] === void 0 && (t2[e] = {}), t2 = t2[e];
    t2[r[r.length - 1]] = i;
  }
  var Ni = /^[a-z@][a-zA-Z0-9/%._-]*$/;
  function Ht({ designSystem: t2, ast: r, resolvedConfig: i, featuresRef: e, referenceMode: n, src: s }) {
    let a = { addBase(p) {
      if (n) return;
      let u2 = me2(p);
      e.current |= De(u2, t2);
      let f2 = F2("@layer", "base", u2);
      I2([f2], (m) => {
        m.src = s;
      }), r.push(f2);
    }, addVariant(p, u2) {
      if (!kt.test(p)) throw new Error(`\`addVariant('${p}')\` defines an invalid variant name. Variants should only contain alphanumeric, dashes, or underscore characters and start with a lowercase letter or number.`);
      if (typeof u2 == "string") {
        if (u2.includes(":merge(")) return;
      } else if (Array.isArray(u2)) {
        if (u2.some((m) => m.includes(":merge("))) return;
      } else if (typeof u2 == "object") {
        let m = function(d2, c) {
          return Object.entries(d2).some(([w2, h2]) => w2.includes(c) || typeof h2 == "object" && m(h2, c));
        };
        var f2 = m;
        if (m(u2, ":merge(")) return;
      }
      typeof u2 == "string" || Array.isArray(u2) ? t2.variants.static(p, (m) => {
        m.nodes = Ei(u2, m.nodes);
      }, { compounds: Pe(typeof u2 == "string" ? [u2] : u2) }) : typeof u2 == "object" && t2.variants.fromAst(p, me2(u2), t2);
    }, matchVariant(p, u2, f2) {
      function m(c, w2, h2) {
        let y2 = u2(c, { modifier: w2?.value ?? null });
        return Ei(y2, h2);
      }
      try {
        let c = u2("a", { modifier: null });
        if (typeof c == "string" && c.includes(":merge(")) return;
        if (Array.isArray(c) && c.some((w2) => w2.includes(":merge("))) return;
      } catch {
      }
      let d2 = Object.keys(f2?.values ?? {});
      t2.variants.group(() => {
        t2.variants.functional(p, (c, w2) => {
          if (!w2.value) {
            if (f2?.values && "DEFAULT" in f2.values) {
              c.nodes = m(f2.values.DEFAULT, w2.modifier, c.nodes);
              return;
            }
            return null;
          }
          if (w2.value.kind === "arbitrary") c.nodes = m(w2.value.value, w2.modifier, c.nodes);
          else if (w2.value.kind === "named" && f2?.values) {
            let h2 = f2.values[w2.value.value];
            if (typeof h2 != "string") return null;
            c.nodes = m(h2, w2.modifier, c.nodes);
          } else return null;
        });
      }, (c, w2) => {
        if (c.kind !== "functional" || w2.kind !== "functional") return 0;
        let h2 = c.value ? c.value.value : "DEFAULT", y2 = w2.value ? w2.value.value : "DEFAULT", x2 = f2?.values?.[h2] ?? h2, $2 = f2?.values?.[y2] ?? y2;
        if (f2 && typeof f2.sort == "function") return f2.sort({ value: x2, modifier: c.modifier?.value ?? null }, { value: $2, modifier: w2.modifier?.value ?? null });
        let A2 = d2.indexOf(h2), k = d2.indexOf(y2);
        return A2 = A2 === -1 ? d2.length : A2, k = k === -1 ? d2.length : k, A2 !== k ? A2 - k : x2 < $2 ? -1 : 1;
      }), t2.variants.suggest(p, () => Object.keys(f2?.values ?? {}).filter((c) => c !== "DEFAULT"));
    }, addUtilities(p) {
      p = Array.isArray(p) ? p : [p];
      let u2 = p.flatMap((m) => Object.entries(m));
      u2 = u2.flatMap(([m, d2]) => d(m, ",").map((c) => [c.trim(), d2]));
      let f2 = new K2(() => []);
      for (let [m, d2] of u2) {
        if (m.startsWith("@keyframes ")) {
          if (!n) {
            let h2 = J2(m, me2(d2));
            I2([h2], (y2) => {
              y2.src = s;
            }), r.push(h2);
          }
          continue;
        }
        let c = Re(m), w2 = false;
        if (I2(c, (h2) => {
          if (h2.kind === "selector" && h2.value[0] === "." && Ni.test(h2.value.slice(1))) {
            let y2 = h2.value;
            h2.value = "&";
            let x2 = pe2(c), $2 = y2.slice(1), A2 = x2 === "&" ? me2(d2) : [J2(x2, me2(d2))];
            f2.get($2).push(...A2), w2 = true, h2.value = y2;
            return;
          }
          if (h2.kind === "function" && h2.value === ":not") return E2.Skip;
        }), !w2) throw new Error(`\`addUtilities({ '${m}' : \u2026 })\` defines an invalid utility selector. Utilities must be a single class name and start with a lowercase letter, eg. \`.scrollbar-none\`.`);
      }
      for (let [m, d2] of f2) t2.theme.prefix && I2(d2, (c) => {
        if (c.kind === "rule") {
          let w2 = Re(c.selector);
          I2(w2, (h2) => {
            h2.kind === "selector" && h2.value[0] === "." && (h2.value = `.${t2.theme.prefix}\\:${h2.value.slice(1)}`);
          }), c.selector = pe2(w2);
        }
      }), t2.utilities.static(m, (c) => {
        let w2 = d2.map(ee2);
        return Ri(w2, m, c.raw), e.current |= Ae(w2, t2), w2;
      });
    }, matchUtilities(p, u2) {
      let f2 = u2?.type ? Array.isArray(u2?.type) ? u2.type : [u2.type] : ["any"];
      for (let [d2, c] of Object.entries(p)) {
        let w2 = function({ negative: h2 }) {
          return (y2) => {
            if (y2.value?.kind === "arbitrary" && f2.length > 0 && !f2.includes("any") && (y2.value.dataType && !f2.includes(y2.value.dataType) || !y2.value.dataType && !me(y2.value.value, f2))) return;
            let x2 = f2.includes("color"), $2 = null, A2 = false;
            {
              let N2 = u2?.values ?? {};
              x2 && (N2 = Object.assign({ inherit: "inherit", transparent: "transparent", current: "currentcolor" }, N2)), y2.value ? y2.value.kind === "arbitrary" ? $2 = y2.value.value : y2.value.fraction && N2[y2.value.fraction] ? ($2 = N2[y2.value.fraction], A2 = true) : N2[y2.value.value] ? $2 = N2[y2.value.value] : N2.__BARE_VALUE__ && ($2 = N2.__BARE_VALUE__(y2.value) ?? null, A2 = (y2.value.fraction !== null && $2?.includes("/")) ?? false) : $2 = N2.DEFAULT ?? null;
            }
            if ($2 === null) return;
            let k;
            {
              let N2 = u2?.modifiers ?? null;
              y2.modifier ? N2 === "any" || y2.modifier.kind === "arbitrary" ? k = y2.modifier.value : N2?.[y2.modifier.value] ? k = N2[y2.modifier.value] : x2 && !Number.isNaN(Number(y2.modifier.value)) ? k = `${y2.modifier.value}%` : k = null : k = null;
            }
            if (y2.modifier && k === null && !A2) return y2.value?.kind === "arbitrary" ? null : void 0;
            x2 && k !== null && ($2 = Q2($2, k)), h2 && ($2 = `calc(${$2} * -1)`);
            let U2 = me2(c($2, { modifier: k }));
            return Ri(U2, d2, y2.raw), e.current |= Ae(U2, t2), U2;
          };
        };
        var m = w2;
        if (!Ni.test(d2)) throw new Error(`\`matchUtilities({ '${d2}' : \u2026 })\` defines an invalid utility name. Utilities should be alphanumeric and start with a lowercase letter, eg. \`scrollbar\`.`);
        u2?.supportsNegativeValues && t2.utilities.functional(`-${d2}`, w2({ negative: true }), { types: f2 }), t2.utilities.functional(d2, w2({ negative: false }), { types: f2 }), t2.utilities.suggest(d2, () => {
          let h2 = u2?.values ?? {}, y2 = new Set(Object.keys(h2));
          y2.delete("__BARE_VALUE__"), y2.delete("__CSS_VALUES__"), y2.has("DEFAULT") && (y2.delete("DEFAULT"), y2.add(null));
          let x2 = u2?.modifiers ?? {}, $2 = x2 === "any" ? [] : Object.keys(x2);
          return [{ supportsNegative: u2?.supportsNegativeValues ?? false, values: Array.from(y2), modifiers: $2 }];
        });
      }
    }, addComponents(p, u2) {
      this.addUtilities(p, u2);
    }, matchComponents(p, u2) {
      this.matchUtilities(p, u2);
    }, theme: bt(t2, () => i.theme ?? {}, (p) => p), prefix(p) {
      return p;
    }, config(p, u2) {
      let f2 = i;
      if (!p) return f2;
      let m = Oe(p);
      for (let d2 = 0; d2 < m.length; ++d2) {
        let c = m[d2];
        if (f2[c] === void 0) return u2;
        f2 = f2[c];
      }
      return f2 ?? u2;
    } };
    return a.addComponents = a.addComponents.bind(a), a.matchComponents = a.matchComponents.bind(a), a;
  }
  function me2(t2) {
    let r = [];
    t2 = Array.isArray(t2) ? t2 : [t2];
    let i = t2.flatMap((e) => Object.entries(e));
    for (let [e, n] of i) if (n != null && n !== false) if (typeof n != "object") {
      if (!e.startsWith("--")) {
        if (n === "@slot") {
          r.push(J2(e, [F2("@slot")]));
          continue;
        }
        e = e.replace(/([A-Z])/g, "-$1").toLowerCase();
      }
      r.push(o(e, String(n)));
    } else if (Array.isArray(n)) for (let s of n) typeof s == "string" ? r.push(o(e, s)) : r.push(J2(e, me2(s)));
    else r.push(J2(e, me2(n)));
    return r;
  }
  function Ei(t2, r) {
    return (typeof t2 == "string" ? [t2] : t2).flatMap((e) => {
      if (e.trim().endsWith("}")) {
        let n = e.replace("}", "{@slot}}"), s = $e(n);
        return Gt(s, r), s;
      } else return J2(e, r);
    });
  }
  function Ri(t2, r, i) {
    I2(t2, (e) => {
      if (e.kind === "rule") {
        let n = Re(e.selector);
        I2(n, (s) => {
          s.kind === "selector" && s.value === `.${r}` && (s.value = `.${ye(i)}`);
        }), e.selector = pe2(n);
      }
    });
  }
  function Oi(t2, r) {
    for (let i of Da(r)) t2.theme.addKeyframes(i);
  }
  function Da(t2) {
    let r = [];
    if ("keyframes" in t2.theme) for (let [i, e] of Object.entries(t2.theme.keyframes)) r.push(F2("@keyframes", i, me2(e)));
    return r;
  }
  function Pi(t2) {
    return { theme: { ...be, colors: ({ theme: r }) => r("color", {}), extend: { fontSize: ({ theme: r }) => ({ ...r("text", {}) }), boxShadow: ({ theme: r }) => ({ ...r("shadow", {}) }), animation: ({ theme: r }) => ({ ...r("animate", {}) }), aspectRatio: ({ theme: r }) => ({ ...r("aspect", {}) }), borderRadius: ({ theme: r }) => ({ ...r("radius", {}) }), screens: ({ theme: r }) => ({ ...r("breakpoint", {}) }), letterSpacing: ({ theme: r }) => ({ ...r("tracking", {}) }), lineHeight: ({ theme: r }) => ({ ...r("leading", {}) }), transitionDuration: { DEFAULT: t2.get(["--default-transition-duration"]) ?? null }, transitionTimingFunction: { DEFAULT: t2.get(["--default-transition-timing-function"]) ?? null }, maxWidth: ({ theme: r }) => ({ ...r("container", {}) }) } } };
  }
  var Ka = { blocklist: [], future: {}, experimental: {}, prefix: "", important: false, darkMode: null, theme: {}, plugins: [], content: { files: [] } };
  function Qt(t2, r) {
    let i = { design: t2, configs: [], plugins: [], content: { files: [] }, theme: {}, extend: {}, result: structuredClone(Ka) };
    for (let n of r) Jt(i, n);
    for (let n of i.configs) "darkMode" in n && n.darkMode !== void 0 && (i.result.darkMode = n.darkMode ?? null), "prefix" in n && n.prefix !== void 0 && (i.result.prefix = n.prefix ?? ""), "blocklist" in n && n.blocklist !== void 0 && (i.result.blocklist = n.blocklist ?? []), "important" in n && n.important !== void 0 && (i.result.important = n.important ?? false);
    let e = La(i);
    return { resolvedConfig: { ...i.result, content: i.content, theme: i.theme, plugins: i.plugins }, replacedThemeKeys: e };
  }
  function Ua(t2, r) {
    if (Array.isArray(t2) && Me(t2[0])) return t2.concat(r);
    if (Array.isArray(r) && Me(r[0]) && Me(t2)) return [t2, ...r];
    if (Array.isArray(r)) return r;
  }
  function Jt(t2, { config: r, base: i, path: e, reference: n, src: s }) {
    let a = [];
    for (let f2 of r.plugins ?? []) "__isOptionsFunction" in f2 ? a.push({ ...f2(), reference: n, src: s }) : "handler" in f2 ? a.push({ ...f2, reference: n, src: s }) : a.push({ handler: f2, reference: n, src: s });
    if (Array.isArray(r.presets) && r.presets.length === 0) throw new Error("Error in the config file/plugin/preset. An empty preset (`preset: []`) is not currently supported.");
    for (let f2 of r.presets ?? []) Jt(t2, { path: e, base: i, config: f2, reference: n, src: s });
    for (let f2 of a) t2.plugins.push(f2), f2.config && Jt(t2, { path: e, base: i, config: f2.config, reference: !!f2.reference, src: f2.src ?? s });
    let p = r.content ?? [], u2 = Array.isArray(p) ? p : p.files;
    for (let f2 of u2) t2.content.files.push(typeof f2 == "object" ? f2 : { base: i, pattern: f2 });
    t2.configs.push(r);
  }
  function La(t2) {
    let r = /* @__PURE__ */ new Set(), i = bt(t2.design, () => t2.theme, n), e = Object.assign(i, { theme: i, colors: l });
    function n(s) {
      return typeof s == "function" ? s(e) ?? null : s ?? null;
    }
    for (let s of t2.configs) {
      let a = s.theme ?? {}, p = a.extend ?? {};
      for (let u2 in a) u2 !== "extend" && r.add(u2);
      Object.assign(t2.theme, a);
      for (let u2 in p) t2.extend[u2] ??= [], t2.extend[u2].push(p[u2]);
    }
    delete t2.theme.extend;
    for (let s in t2.extend) {
      let a = [t2.theme[s], ...t2.extend[s]];
      t2.theme[s] = () => {
        let p = a.map(n);
        return Xe({}, p, Ua);
      };
    }
    for (let s in t2.theme) t2.theme[s] = n(t2.theme[s]);
    if (t2.theme.screens && typeof t2.theme.screens == "object") for (let s of Object.keys(t2.theme.screens)) {
      let a = t2.theme.screens[s];
      a && typeof a == "object" && ("raw" in a || "max" in a || "min" in a && (t2.theme.screens[s] = a.min));
    }
    return r;
  }
  function Ii(t2, r) {
    let i = t2.theme.container || {};
    if (typeof i != "object" || i === null) return;
    let e = ja(i, r);
    e.length !== 0 && r.utilities.static("container", () => e.map(ee2));
  }
  function ja({ center: t2, padding: r, screens: i }, e) {
    let n = [], s = null;
    if (t2 && n.push(o("margin-inline", "auto")), (typeof r == "string" || typeof r == "object" && r !== null && "DEFAULT" in r) && n.push(o("padding-inline", typeof r == "string" ? r : r.DEFAULT)), typeof i == "object" && i !== null) {
      s = /* @__PURE__ */ new Map();
      let a = Array.from(e.theme.namespace("--breakpoint").entries());
      if (a.sort((p, u2) => Ve(p[1], u2[1], "asc")), a.length > 0) {
        let [p] = a[0];
        n.push(F2("@media", `(width >= --theme(--breakpoint-${p}))`, [o("max-width", "none")]));
      }
      for (let [p, u2] of Object.entries(i)) {
        if (typeof u2 == "object") if ("min" in u2) u2 = u2.min;
        else continue;
        s.set(p, F2("@media", `(width >= ${u2})`, [o("max-width", u2)]));
      }
    }
    if (typeof r == "object" && r !== null) {
      let a = Object.entries(r).filter(([p]) => p !== "DEFAULT").map(([p, u2]) => [p, e.theme.resolveValue(p, ["--breakpoint"]), u2]).filter(Boolean);
      a.sort((p, u2) => Ve(p[1], u2[1], "asc"));
      for (let [p, , u2] of a) if (s && s.has(p)) s.get(p).nodes.push(o("padding-inline", u2));
      else {
        if (s) continue;
        n.push(F2("@media", `(width >= theme(--breakpoint-${p}))`, [o("padding-inline", u2)]));
      }
    }
    if (s) for (let [, a] of s) n.push(a);
    return n;
  }
  function _i({ addVariant: t2, config: r }) {
    let i = r("darkMode", null), [e, n = ".dark"] = Array.isArray(i) ? i : [i];
    if (e === "variant") {
      let s;
      if (Array.isArray(n) || typeof n == "function" ? s = n : typeof n == "string" && (s = [n]), Array.isArray(s)) for (let a of s) a === ".dark" ? (e = false, console.warn('When using `variant` for `darkMode`, you must provide a selector.\nExample: `darkMode: ["variant", ".your-selector &"]`')) : a.includes("&") || (e = false, console.warn('When using `variant` for `darkMode`, your selector must contain `&`.\nExample `darkMode: ["variant", ".your-selector &"]`'));
      n = s;
    }
    e === null || (e === "selector" ? t2("dark", `&:where(${n}, ${n} *)`) : e === "media" ? t2("dark", "@media (prefers-color-scheme: dark)") : e === "variant" ? t2("dark", n) : e === "class" && t2("dark", `&:is(${n} *)`));
  }
  function Di(t2) {
    for (let [r, i] of [["t", "top"], ["tr", "top right"], ["r", "right"], ["br", "bottom right"], ["b", "bottom"], ["bl", "bottom left"], ["l", "left"], ["tl", "top left"]]) t2.utilities.suggest(`bg-gradient-to-${r}`, () => []), t2.utilities.static(`bg-gradient-to-${r}`, () => [o("--tw-gradient-position", `to ${i} in oklab`), o("background-image", "linear-gradient(var(--tw-gradient-stops))")]);
    t2.utilities.suggest("bg-left-top", () => []), t2.utilities.static("bg-left-top", () => [o("background-position", "left top")]), t2.utilities.suggest("bg-right-top", () => []), t2.utilities.static("bg-right-top", () => [o("background-position", "right top")]), t2.utilities.suggest("bg-left-bottom", () => []), t2.utilities.static("bg-left-bottom", () => [o("background-position", "left bottom")]), t2.utilities.suggest("bg-right-bottom", () => []), t2.utilities.static("bg-right-bottom", () => [o("background-position", "right bottom")]), t2.utilities.suggest("object-left-top", () => []), t2.utilities.static("object-left-top", () => [o("object-position", "left top")]), t2.utilities.suggest("object-right-top", () => []), t2.utilities.static("object-right-top", () => [o("object-position", "right top")]), t2.utilities.suggest("object-left-bottom", () => []), t2.utilities.static("object-left-bottom", () => [o("object-position", "left bottom")]), t2.utilities.suggest("object-right-bottom", () => []), t2.utilities.static("object-right-bottom", () => [o("object-position", "right bottom")]), t2.utilities.suggest("max-w-screen", () => []), t2.utilities.functional("max-w-screen", (r) => {
      if (!r.value || r.value.kind === "arbitrary") return;
      let i = t2.theme.resolve(r.value.value, ["--breakpoint"]);
      if (i) return [o("max-width", i)];
    }), t2.utilities.suggest("overflow-ellipsis", () => []), t2.utilities.static("overflow-ellipsis", () => [o("text-overflow", "ellipsis")]), t2.utilities.suggest("decoration-slice", () => []), t2.utilities.static("decoration-slice", () => [o("-webkit-box-decoration-break", "slice"), o("box-decoration-break", "slice")]), t2.utilities.suggest("decoration-clone", () => []), t2.utilities.static("decoration-clone", () => [o("-webkit-box-decoration-break", "clone"), o("box-decoration-break", "clone")]), t2.utilities.suggest("flex-shrink", () => []), t2.utilities.functional("flex-shrink", (r) => {
      if (!r.modifier) {
        if (!r.value) return [o("flex-shrink", "1")];
        if (r.value.kind === "arbitrary") return [o("flex-shrink", r.value.value)];
        if (u(r.value.value)) return [o("flex-shrink", r.value.value)];
      }
    }), t2.utilities.suggest("flex-grow", () => []), t2.utilities.functional("flex-grow", (r) => {
      if (!r.modifier) {
        if (!r.value) return [o("flex-grow", "1")];
        if (r.value.kind === "arbitrary") return [o("flex-grow", r.value.value)];
        if (u(r.value.value)) return [o("flex-grow", r.value.value)];
      }
    }), t2.utilities.suggest("order-none", () => []), t2.utilities.static("order-none", () => [o("order", "0")]), t2.utilities.suggest("break-words", () => []), t2.utilities.static("break-words", () => [o("overflow-wrap", "break-word")]);
  }
  function Ki(t2, r) {
    let i = t2.theme.screens || {}, e = r.variants.get("min")?.order ?? 0, n = [];
    for (let [a, p] of Object.entries(i)) {
      let c = function(w2) {
        r.variants.static(a, (h2) => {
          h2.nodes = [F2("@media", d2, h2.nodes)];
        }, { order: w2 });
      };
      var s = c;
      let u2 = r.variants.get(a), f2 = r.theme.resolveValue(a, ["--breakpoint"]);
      if (u2 && f2 && !r.theme.hasDefault(`--breakpoint-${a}`)) continue;
      let m = true;
      typeof p == "string" && (m = false);
      let d2 = za(p);
      m ? n.push(c) : c(e);
    }
    if (n.length !== 0) {
      for (let [, a] of r.variants.variants) a.order > e && (a.order += n.length);
      r.variants.compareFns = new Map(Array.from(r.variants.compareFns).map(([a, p]) => (a > e && (a += n.length), [a, p])));
      for (let [a, p] of n.entries()) p(e + a + 1);
    }
  }
  function za(t2) {
    return (Array.isArray(t2) ? t2 : [t2]).map((i) => typeof i == "string" ? { min: i } : i && typeof i == "object" ? i : null).map((i) => {
      if (i === null) return null;
      if ("raw" in i) return i.raw;
      let e = "";
      return i.max !== void 0 && (e += `${i.max} >= `), e += "width", i.min !== void 0 && (e += ` >= ${i.min}`), `(${e})`;
    }).filter(Boolean).join(", ");
  }
  function Ui(t2, r) {
    let i = t2.theme.aria || {}, e = t2.theme.supports || {}, n = t2.theme.data || {};
    if (Object.keys(i).length > 0) {
      let s = r.variants.get("aria"), a = s?.applyFn, p = s?.compounds;
      r.variants.functional("aria", (u2, f2) => {
        let m = f2.value;
        return m && m.kind === "named" && m.value in i ? a?.(u2, { ...f2, value: { kind: "arbitrary", value: i[m.value] } }) : a?.(u2, f2);
      }, { compounds: p });
    }
    if (Object.keys(e).length > 0) {
      let s = r.variants.get("supports"), a = s?.applyFn, p = s?.compounds;
      r.variants.functional("supports", (u2, f2) => {
        let m = f2.value;
        return m && m.kind === "named" && m.value in e ? a?.(u2, { ...f2, value: { kind: "arbitrary", value: e[m.value] } }) : a?.(u2, f2);
      }, { compounds: p });
    }
    if (Object.keys(n).length > 0) {
      let s = r.variants.get("data"), a = s?.applyFn, p = s?.compounds;
      r.variants.functional("data", (u2, f2) => {
        let m = f2.value;
        return m && m.kind === "named" && m.value in n ? a?.(u2, { ...f2, value: { kind: "arbitrary", value: n[m.value] } }) : a?.(u2, f2);
      }, { compounds: p });
    }
  }
  var Ma = /^[a-z]+$/;
  async function ji({ designSystem: t2, base: r, ast: i, loadModule: e, sources: n }) {
    let s = 0, a = [], p = [];
    I2(i, (d2, c) => {
      if (d2.kind !== "at-rule") return;
      let w2 = qe(c);
      if (d2.name === "@plugin") {
        if (w2.parent !== null) throw new Error("`@plugin` cannot be nested.");
        let h2 = d2.params.slice(1, -1);
        if (h2.length === 0) throw new Error("`@plugin` must have a path.");
        let y2 = {};
        for (let x2 of d2.nodes ?? []) {
          if (x2.kind !== "declaration") throw new Error(`Unexpected \`@plugin\` option:

${re2([x2])}

\`@plugin\` options must be a flat list of declarations.`);
          if (x2.value === void 0) continue;
          let $2 = x2.value, A2 = d($2, ",").map((k) => {
            if (k = k.trim(), k === "null") return null;
            if (k === "true") return true;
            if (k === "false") return false;
            if (Number.isNaN(Number(k))) {
              if (k[0] === '"' && k[k.length - 1] === '"' || k[0] === "'" && k[k.length - 1] === "'") return k.slice(1, -1);
              if (k[0] === "{" && k[k.length - 1] === "}") throw new Error(`Unexpected \`@plugin\` option: Value of declaration \`${re2([x2]).trim()}\` is not supported.

Using an object as a plugin option is currently only supported in JavaScript configuration files.`);
            } else return Number(k);
            return k;
          });
          y2[x2.property] = A2.length === 1 ? A2[0] : A2;
        }
        return a.push([{ id: h2, base: w2.context.base, reference: !!w2.context.reference, src: d2.src }, Object.keys(y2).length > 0 ? y2 : null]), s |= 4, E2.Replace([]);
      }
      if (d2.name === "@config") {
        if (d2.nodes.length > 0) throw new Error("`@config` cannot have a body.");
        if (w2.parent !== null) throw new Error("`@config` cannot be nested.");
        return p.push({ id: d2.params.slice(1, -1), base: w2.context.base, reference: !!w2.context.reference, src: d2.src }), s |= 4, E2.Replace([]);
      }
    }), Di(t2);
    let u2 = t2.resolveThemeValue;
    if (t2.resolveThemeValue = function(c, w2) {
      return c.startsWith("--") ? u2(c, w2) : (s |= Li({ designSystem: t2, base: r, ast: i, sources: n, configs: [], pluginDetails: [] }), t2.resolveThemeValue(c, w2));
    }, !a.length && !p.length) return 0;
    let [f2, m] = await Promise.all([Promise.all(p.map(async ({ id: d2, base: c, reference: w2, src: h2 }) => {
      let y2 = await e(d2, c, "config");
      return { path: d2, base: y2.base, config: y2.module, reference: w2, src: h2 };
    })), Promise.all(a.map(async ([{ id: d2, base: c, reference: w2, src: h2 }, y2]) => {
      let x2 = await e(d2, c, "plugin");
      return { path: d2, base: x2.base, plugin: x2.module, options: y2, reference: w2, src: h2 };
    }))]);
    return s |= Li({ designSystem: t2, base: r, ast: i, sources: n, configs: f2, pluginDetails: m }), s;
  }
  function Li({ designSystem: t2, base: r, ast: i, sources: e, configs: n, pluginDetails: s }) {
    let a = 0, u2 = [...s.map((y2) => {
      if (!y2.options) return { config: { plugins: [y2.plugin] }, base: y2.base, reference: y2.reference, src: y2.src };
      if ("__isOptionsFunction" in y2.plugin) return { config: { plugins: [y2.plugin(y2.options)] }, base: y2.base, reference: y2.reference, src: y2.src };
      throw new Error(`The plugin "${y2.path}" does not accept options`);
    }), ...n], { resolvedConfig: f2 } = Qt(t2, [{ config: Pi(t2.theme), base: r, reference: true, src: void 0 }, ...u2, { config: { plugins: [_i] }, base: r, reference: true, src: void 0 }]), { resolvedConfig: m, replacedThemeKeys: d2 } = Qt(t2, u2), c = { designSystem: t2, ast: i, resolvedConfig: f2, featuresRef: { set current(y2) {
      a |= y2;
    } } }, w2 = Ht({ ...c, referenceMode: false, src: void 0 }), h2 = t2.resolveThemeValue;
    t2.resolveThemeValue = function(x2, $2) {
      if (x2[0] === "-" && x2[1] === "-") return h2(x2, $2);
      let A2 = w2.theme(x2, void 0);
      if (Array.isArray(A2) && A2.length === 2) return A2[0];
      if (Array.isArray(A2)) return A2.join(", ");
      if (typeof A2 == "object" && A2 !== null && "DEFAULT" in A2) return A2.DEFAULT;
      if (typeof A2 == "string") return A2;
    };
    for (let { handler: y2, reference: x2, src: $2 } of f2.plugins) {
      let A2 = Ht({ ...c, referenceMode: x2 ?? false, src: $2 });
      y2(A2);
    }
    if (zr(t2, m, d2), Oi(t2, m), Ui(m, t2), Ki(m, t2), Ii(m, t2), !t2.theme.prefix && f2.prefix) {
      if (f2.prefix.endsWith("-") && (f2.prefix = f2.prefix.slice(0, -1), console.warn(`The prefix "${f2.prefix}" is invalid. Prefixes must be lowercase ASCII letters (a-z) only and is written as a variant before all utilities. We have fixed up the prefix for you. Remove the trailing \`-\` to silence this warning.`)), !Ma.test(f2.prefix)) throw new Error(`The prefix "${f2.prefix}" is invalid. Prefixes must be lowercase ASCII letters (a-z) only.`);
      t2.theme.prefix = f2.prefix;
    }
    if (!t2.important && f2.important === true && (t2.important = true), typeof f2.important == "string") {
      let y2 = f2.important;
      I2(i, (x2, $2) => {
        if (x2.kind !== "at-rule" || x2.name !== "@tailwind" || x2.params !== "utilities") return;
        let A2 = qe($2);
        return A2.parent?.kind === "rule" && A2.parent.selector === y2 ? E2.Stop : E2.ReplaceStop(G2(y2, [x2]));
      });
    }
    for (let y2 of f2.blocklist) t2.invalidCandidates.add(y2);
    for (let y2 of f2.content.files) {
      if ("raw" in y2) throw new Error(`Error in the config file/plugin/preset. The \`content\` key contains a \`raw\` entry:

${JSON.stringify(y2, null, 2)}

This feature is not currently supported.`);
      let x2 = false;
      y2.pattern[0] == "!" && (x2 = true, y2.pattern = y2.pattern.slice(1)), e.push({ ...y2, negated: x2 });
    }
    return a;
  }
  function zi({ ast: t2 }) {
    let r = new K2((n) => tt(n.code)), i = new K2((n) => ({ url: n.file, content: n.code, ignore: false })), e = { file: null, sources: [], mappings: [] };
    I2(t2, (n) => {
      if (!n.src || !n.dst) return;
      let s = i.get(n.src[0]);
      if (!s.content) return;
      let a = r.get(n.src[0]), p = r.get(n.dst[0]), u2 = s.content.slice(n.src[1], n.src[2]), f2 = 0;
      for (let c of u2.split(`
`)) {
        if (c.trim() !== "") {
          let w2 = a.find(n.src[1] + f2), h2 = p.find(n.dst[1]);
          e.mappings.push({ name: null, originalPosition: { source: s, ...w2 }, generatedPosition: h2 });
        }
        f2 += c.length, f2 += 1;
      }
      let m = a.find(n.src[2]), d2 = p.find(n.dst[2]);
      e.mappings.push({ name: null, originalPosition: { source: s, ...m }, generatedPosition: d2 });
    });
    for (let n of r.keys()) e.sources.push(i.get(n));
    return e.mappings.sort((n, s) => n.generatedPosition.line - s.generatedPosition.line || n.generatedPosition.column - s.generatedPosition.column || (n.originalPosition?.line ?? 0) - (s.originalPosition?.line ?? 0) || (n.originalPosition?.column ?? 0) - (s.originalPosition?.column ?? 0)), e;
  }
  var Mi = /^(-?\d+)\.\.(-?\d+)(?:\.\.(-?\d+))?$/;
  function xt(t2) {
    let r = t2.indexOf("{");
    if (r === -1) return [t2];
    let i = [], e = t2.slice(0, r), n = t2.slice(r), s = 0, a = n.lastIndexOf("}");
    for (let d2 = 0; d2 < n.length; d2++) {
      let c = n[d2];
      if (c === "{") s++;
      else if (c === "}" && (s--, s === 0)) {
        a = d2;
        break;
      }
    }
    if (a === -1) throw new Error(`The pattern \`${t2}\` is not balanced.`);
    let p = n.slice(1, a), u2 = n.slice(a + 1), f2;
    Fa(p) ? f2 = Wa(p) : f2 = d(p, ","), f2 = f2.flatMap((d2) => xt(d2));
    let m = xt(u2);
    for (let d2 of m) for (let c of f2) i.push(e + c + d2);
    return i;
  }
  function Fa(t2) {
    return Mi.test(t2);
  }
  function Wa(t2) {
    let r = t2.match(Mi);
    if (!r) return [t2];
    let [, i, e, n] = r, s = n ? parseInt(n, 10) : void 0, a = [];
    if (/^-?\d+$/.test(i) && /^-?\d+$/.test(e)) {
      let p = parseInt(i, 10), u2 = parseInt(e, 10);
      if (s === void 0 && (s = p <= u2 ? 1 : -1), s === 0) throw new Error("Step cannot be zero in sequence expansion.");
      let f2 = p < u2;
      f2 && s < 0 && (s = -s), !f2 && s > 0 && (s = -s);
      for (let m = p; f2 ? m <= u2 : m >= u2; m += s) a.push(m.toString());
    }
    return a;
  }
  function Fi(t2, r) {
    let i = /* @__PURE__ */ new Set(), e = /* @__PURE__ */ new Set(), n = [];
    function s(a, p = []) {
      if (t2.has(a) && !i.has(a)) {
        e.has(a) && r.onCircularDependency?.(p, a), e.add(a);
        for (let u2 of t2.get(a) ?? []) p.push(a), s(u2, p), p.pop();
        i.add(a), e.delete(a), n.push(a);
      }
    }
    for (let a of t2.keys()) s(a);
    return n;
  }
  var Ba = /^[a-z]+$/;
  var Rt = ((n) => (n[n.None = 0] = "None", n[n.AtProperty = 1] = "AtProperty", n[n.ColorMix = 2] = "ColorMix", n[n.All = 3] = "All", n))(Rt || {});
  function Ya() {
    throw new Error("No `loadModule` function provided to `compile`");
  }
  function Ga() {
    throw new Error("No `loadStylesheet` function provided to `compile`");
  }
  function qa(t2) {
    let r = 0, i = null;
    for (let e of d(t2, " ")) e === "reference" ? r |= 2 : e === "inline" ? r |= 1 : e === "default" ? r |= 4 : e === "static" ? r |= 8 : e.startsWith("prefix(") && e.endsWith(")") && (i = e.slice(7, -1));
    return [r, i];
  }
  var Ke = ((u2) => (u2[u2.None = 0] = "None", u2[u2.AtApply = 1] = "AtApply", u2[u2.AtImport = 2] = "AtImport", u2[u2.JsPluginCompat = 4] = "JsPluginCompat", u2[u2.ThemeFunction = 8] = "ThemeFunction", u2[u2.Utilities = 16] = "Utilities", u2[u2.Variants = 32] = "Variants", u2[u2.AtTheme = 64] = "AtTheme", u2))(Ke || {});
  async function Wi(t2, { base: r = "", from: i, loadModule: e = Ya, loadStylesheet: n = Ga } = {}) {
    let s = 0;
    t2 = [ce({ base: r }, t2)], s |= await Zt(t2, r, n, 0, i !== void 0);
    let a = null, p = new lt(), u2 = /* @__PURE__ */ new Map(), f2 = /* @__PURE__ */ new Map(), m = [], d2 = null, c = null, w2 = [], h2 = [], y2 = [], x2 = [], $2 = null;
    I2(t2, (k, U2) => {
      if (k.kind !== "at-rule") return;
      let N2 = qe(U2);
      if (k.name === "@tailwind" && (k.params === "utilities" || k.params.startsWith("utilities"))) {
        if (c !== null) return E2.Replace([]);
        if (N2.context.reference) return E2.Replace([]);
        let O2 = d(k.params, " ");
        for (let L2 of O2) if (L2.startsWith("source(")) {
          let _2 = L2.slice(7, -1);
          if (_2 === "none") {
            $2 = _2;
            continue;
          }
          if (_2[0] === '"' && _2[_2.length - 1] !== '"' || _2[0] === "'" && _2[_2.length - 1] !== "'" || _2[0] !== "'" && _2[0] !== '"') throw new Error("`source(\u2026)` paths must be quoted.");
          $2 = { base: N2.context.sourceBase ?? N2.context.base, pattern: _2.slice(1, -1) };
        }
        c = k, s |= 16;
      }
      if (k.name === "@utility") {
        if (N2.parent !== null) throw new Error("`@utility` cannot be nested.");
        if (k.nodes.length === 0) throw new Error(`\`@utility ${k.params}\` is empty. Utilities should include at least one property.`);
        let O2 = Kr(k);
        if (O2 === null) {
          if (!k.params.endsWith("-*")) {
            if (k.params.endsWith("*")) throw new Error(`\`@utility ${k.params}\` defines an invalid utility name. A functional utility must end in \`-*\`.`);
            if (k.params.includes("*")) throw new Error(`\`@utility ${k.params}\` defines an invalid utility name. The dynamic portion marked by \`-*\` must appear once at the end.`);
          }
          throw new Error(`\`@utility ${k.params}\` defines an invalid utility name. Utilities should be alphanumeric and start with a lowercase letter.`);
        }
        m.push(O2);
      }
      if (k.name === "@source") {
        if (k.nodes.length > 0) throw new Error("`@source` cannot have a body.");
        if (N2.parent !== null) throw new Error("`@source` cannot be nested.");
        let O2 = false, L2 = false, _2 = k.params;
        if (_2[0] === "n" && _2.startsWith("not ") && (O2 = true, _2 = _2.slice(4)), _2[0] === "i" && _2.startsWith("inline(") && (L2 = true, _2 = _2.slice(7, -1)), _2[0] === '"' && _2[_2.length - 1] !== '"' || _2[0] === "'" && _2[_2.length - 1] !== "'" || _2[0] !== "'" && _2[0] !== '"') throw new Error("`@source` paths must be quoted.");
        let z2 = _2.slice(1, -1);
        if (L2) {
          let Y2 = O2 ? x2 : y2, q2 = d(z2, " ");
          for (let ae of q2) for (let oe2 of xt(ae)) Y2.push(oe2);
        } else h2.push({ base: N2.context.base, pattern: z2, negated: O2 });
        return E2.ReplaceSkip([]);
      }
      if (k.name === "@variant" && (N2.parent === null ? k.nodes.length === 0 ? k.name = "@custom-variant" : (I2(k.nodes, (O2) => {
        if (O2.kind === "at-rule" && O2.name === "@slot") return k.name = "@custom-variant", E2.Stop;
      }), k.name === "@variant" && w2.push(k)) : w2.push(k)), k.name === "@custom-variant") {
        if (N2.parent !== null) throw new Error("`@custom-variant` cannot be nested.");
        let [O2, L2] = d(k.params, " ");
        if (!kt.test(O2)) throw new Error(`\`@custom-variant ${O2}\` defines an invalid variant name. Variants should only contain alphanumeric, dashes, or underscore characters and start with a lowercase letter or number.`);
        if (k.nodes.length > 0 && L2) throw new Error(`\`@custom-variant ${O2}\` cannot have both a selector and a body.`);
        if (k.nodes.length === 0) {
          if (!L2) throw new Error(`\`@custom-variant ${O2}\` has no selector or body.`);
          let _2 = d(L2.slice(1, -1), ",");
          if (_2.length === 0 || _2.some((q2) => q2.trim() === "")) throw new Error(`\`@custom-variant ${O2} (${_2.join(",")})\` selector is invalid.`);
          let z2 = [], Y2 = [];
          for (let q2 of _2) q2 = q2.trim(), q2[0] === "@" ? z2.push(q2) : Y2.push(q2);
          u2.set(O2, (q2) => {
            q2.variants.static(O2, (ae) => {
              let oe2 = [];
              Y2.length > 0 && oe2.push(G2(Y2.join(", "), ae.nodes));
              for (let l3 of z2) oe2.push(J2(l3, ae.nodes));
              ae.nodes = oe2;
            }, { compounds: Pe([...Y2, ...z2]) });
          }), f2.set(O2, /* @__PURE__ */ new Set());
        } else {
          let _2 = /* @__PURE__ */ new Set();
          I2(k.nodes, (z2) => {
            z2.kind === "at-rule" && z2.name === "@variant" && _2.add(z2.params);
          }), u2.set(O2, (z2) => {
            z2.variants.fromAst(O2, k.nodes, z2);
          }), f2.set(O2, _2);
        }
        return E2.ReplaceSkip([]);
      }
      if (k.name === "@media") {
        let O2 = d(k.params, " "), L2 = [];
        for (let _2 of O2) if (_2.startsWith("source(")) {
          let z2 = _2.slice(7, -1);
          I2(k.nodes, (Y2) => {
            if (Y2.kind === "at-rule" && Y2.name === "@tailwind" && Y2.params === "utilities") return Y2.params += ` source(${z2})`, E2.ReplaceStop([ce({ sourceBase: N2.context.base }, [Y2])]);
          });
        } else if (_2.startsWith("theme(")) {
          let z2 = _2.slice(6, -1), Y2 = z2.includes("reference");
          I2(k.nodes, (q2) => {
            if (q2.kind !== "context") {
              if (q2.kind !== "at-rule") {
                if (Y2) throw new Error('Files imported with `@import "\u2026" theme(reference)` must only contain `@theme` blocks.\nUse `@reference "\u2026";` instead.');
                return E2.Continue;
              }
              if (q2.name === "@theme") return q2.params += " " + z2, E2.Skip;
            }
          });
        } else if (_2.startsWith("prefix(")) {
          let z2 = _2.slice(7, -1);
          I2(k.nodes, (Y2) => {
            if (Y2.kind === "at-rule" && Y2.name === "@theme") return Y2.params += ` prefix(${z2})`, E2.Skip;
          });
        } else _2 === "important" ? a = true : _2 === "reference" ? k.nodes = [ce({ reference: true }, k.nodes)] : L2.push(_2);
        if (L2.length > 0) k.params = L2.join(" ");
        else if (O2.length > 0) return E2.Replace(k.nodes);
        return E2.Continue;
      }
      if (k.name === "@theme") {
        let [O2, L2] = qa(k.params);
        if (s |= 64, N2.context.reference && (O2 |= 2), L2) {
          if (!Ba.test(L2)) throw new Error(`The prefix "${L2}" is invalid. Prefixes must be lowercase ASCII letters (a-z) only.`);
          p.prefix = L2;
        }
        return I2(k.nodes, (_2) => {
          if (_2.kind === "at-rule" && _2.name === "@keyframes") return p.addKeyframes(_2), E2.Skip;
          if (_2.kind === "comment") return;
          if (_2.kind === "declaration" && _2.property.startsWith("--")) {
            p.add(Se(_2.property), _2.value ?? "", O2, _2.src);
            return;
          }
          let z2 = re2([F2(k.name, k.params, [_2])]).split(`
`).map((Y2, q2, ae) => `${q2 === 0 || q2 >= ae.length - 2 ? " " : ">"} ${Y2}`).join(`
`);
          throw new Error(`\`@theme\` blocks must only contain custom properties or \`@keyframes\`.

${z2}`);
        }), d2 ? E2.ReplaceSkip([]) : (d2 = G2(":root, :host", []), d2.src = k.src, E2.ReplaceSkip(d2));
      }
    });
    let A2 = xi(p, c?.src);
    if (a && (A2.important = a), x2.length > 0) for (let k of x2) A2.invalidCandidates.add(k);
    s |= await ji({ designSystem: A2, base: r, ast: t2, loadModule: e, sources: h2 });
    for (let k of u2.keys()) A2.variants.static(k, () => {
    });
    for (let k of Fi(f2, { onCircularDependency(U2, N2) {
      let O2 = re2(U2.map((L2, _2) => F2("@custom-variant", L2, [F2("@variant", U2[_2 + 1] ?? N2, [])]))).replaceAll(";", " { \u2026 }").replace(`@custom-variant ${N2} {`, `@custom-variant ${N2} { /* \u2190 */`);
      throw new Error(`Circular dependency detected in custom variants:

${O2}`);
    } })) u2.get(k)?.(A2);
    for (let k of m) k(A2);
    if (d2) {
      let k = [];
      for (let [N2, O2] of A2.theme.entries()) {
        if (O2.options & 2) continue;
        let L2 = o(ye(N2), O2.value);
        L2.src = O2.src, k.push(L2);
      }
      let U2 = A2.theme.getKeyframes();
      for (let N2 of U2) t2.push(ce({ theme: true }, [W2([N2])]));
      d2.nodes = [ce({ theme: true }, k)];
    }
    if (s |= Qe(t2, A2), s |= De(t2, A2), s |= Ae(t2, A2), c) {
      let k = c;
      k.kind = "context", k.context = {};
    }
    return I2(t2, (k) => {
      if (k.kind === "at-rule") return k.name === "@utility" ? E2.Replace([]) : E2.Skip;
    }), { designSystem: A2, ast: t2, sources: h2, root: $2, utilitiesNode: c, features: s, inlineCandidates: y2 };
  }
  async function Za(t2, r = {}) {
    let { designSystem: i, ast: e, sources: n, root: s, utilitiesNode: a, features: p, inlineCandidates: u2 } = await Wi(t2, r);
    e.unshift(ot(`! tailwindcss v${ir} | MIT License | https://tailwindcss.com `));
    function f2(h2) {
      i.invalidCandidates.add(h2);
    }
    let m = /* @__PURE__ */ new Set(), d2 = null, c = 0, w2 = false;
    for (let h2 of u2) i.invalidCandidates.has(h2) || (m.add(h2), w2 = true);
    return { sources: n, root: s, features: p, build(h2) {
      if (p === 0) return t2;
      if (!a) return d2 ??= Te(e, i, r.polyfills), d2;
      let y2 = w2, x2 = false;
      w2 = false;
      let $2 = m.size;
      for (let k of h2) if (!i.invalidCandidates.has(k)) if (k[0] === "-" && k[1] === "-") {
        let U2 = i.theme.markUsedVariable(k);
        y2 ||= U2, x2 ||= U2;
      } else m.add(k), y2 ||= m.size !== $2;
      if (!y2) return d2 ??= Te(e, i, r.polyfills), d2;
      let A2 = Ce(m, i, { onInvalidCandidate: f2 }).astNodes;
      return r.from && I2(A2, (k) => {
        k.src ??= a.src;
      }), !x2 && c === A2.length ? (d2 ??= Te(e, i, r.polyfills), d2) : (c = A2.length, a.nodes = A2, d2 = Te(e, i, r.polyfills), d2);
    } };
  }
  async function rf(t2, r = {}) {
    let i = $e(t2, { from: r.from }), e = await Za(i, r), n = i, s = t2;
    return { ...e, build(a) {
      let p = e.build(a);
      return p === n || (s = re2(p, !!r.from), n = p), s;
    }, buildSourceMap() {
      return zi({ ast: n });
    } };
  }

  // node_modules/tailwindcss/index.css
  var tailwindcss_default = '@layer theme, base, components, utilities;\n\n@layer theme {\n  @theme default {\n    --font-sans:\n      ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji",\n      "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n    --font-serif: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;\n    --font-mono:\n      ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",\n      "Courier New", monospace;\n\n    --color-red-50: oklch(97.1% 0.013 17.38);\n    --color-red-100: oklch(93.6% 0.032 17.717);\n    --color-red-200: oklch(88.5% 0.062 18.334);\n    --color-red-300: oklch(80.8% 0.114 19.571);\n    --color-red-400: oklch(70.4% 0.191 22.216);\n    --color-red-500: oklch(63.7% 0.237 25.331);\n    --color-red-600: oklch(57.7% 0.245 27.325);\n    --color-red-700: oklch(50.5% 0.213 27.518);\n    --color-red-800: oklch(44.4% 0.177 26.899);\n    --color-red-900: oklch(39.6% 0.141 25.723);\n    --color-red-950: oklch(25.8% 0.092 26.042);\n\n    --color-orange-50: oklch(98% 0.016 73.684);\n    --color-orange-100: oklch(95.4% 0.038 75.164);\n    --color-orange-200: oklch(90.1% 0.076 70.697);\n    --color-orange-300: oklch(83.7% 0.128 66.29);\n    --color-orange-400: oklch(75% 0.183 55.934);\n    --color-orange-500: oklch(70.5% 0.213 47.604);\n    --color-orange-600: oklch(64.6% 0.222 41.116);\n    --color-orange-700: oklch(55.3% 0.195 38.402);\n    --color-orange-800: oklch(47% 0.157 37.304);\n    --color-orange-900: oklch(40.8% 0.123 38.172);\n    --color-orange-950: oklch(26.6% 0.079 36.259);\n\n    --color-amber-50: oklch(98.7% 0.022 95.277);\n    --color-amber-100: oklch(96.2% 0.059 95.617);\n    --color-amber-200: oklch(92.4% 0.12 95.746);\n    --color-amber-300: oklch(87.9% 0.169 91.605);\n    --color-amber-400: oklch(82.8% 0.189 84.429);\n    --color-amber-500: oklch(76.9% 0.188 70.08);\n    --color-amber-600: oklch(66.6% 0.179 58.318);\n    --color-amber-700: oklch(55.5% 0.163 48.998);\n    --color-amber-800: oklch(47.3% 0.137 46.201);\n    --color-amber-900: oklch(41.4% 0.112 45.904);\n    --color-amber-950: oklch(27.9% 0.077 45.635);\n\n    --color-yellow-50: oklch(98.7% 0.026 102.212);\n    --color-yellow-100: oklch(97.3% 0.071 103.193);\n    --color-yellow-200: oklch(94.5% 0.129 101.54);\n    --color-yellow-300: oklch(90.5% 0.182 98.111);\n    --color-yellow-400: oklch(85.2% 0.199 91.936);\n    --color-yellow-500: oklch(79.5% 0.184 86.047);\n    --color-yellow-600: oklch(68.1% 0.162 75.834);\n    --color-yellow-700: oklch(55.4% 0.135 66.442);\n    --color-yellow-800: oklch(47.6% 0.114 61.907);\n    --color-yellow-900: oklch(42.1% 0.095 57.708);\n    --color-yellow-950: oklch(28.6% 0.066 53.813);\n\n    --color-lime-50: oklch(98.6% 0.031 120.757);\n    --color-lime-100: oklch(96.7% 0.067 122.328);\n    --color-lime-200: oklch(93.8% 0.127 124.321);\n    --color-lime-300: oklch(89.7% 0.196 126.665);\n    --color-lime-400: oklch(84.1% 0.238 128.85);\n    --color-lime-500: oklch(76.8% 0.233 130.85);\n    --color-lime-600: oklch(64.8% 0.2 131.684);\n    --color-lime-700: oklch(53.2% 0.157 131.589);\n    --color-lime-800: oklch(45.3% 0.124 130.933);\n    --color-lime-900: oklch(40.5% 0.101 131.063);\n    --color-lime-950: oklch(27.4% 0.072 132.109);\n\n    --color-green-50: oklch(98.2% 0.018 155.826);\n    --color-green-100: oklch(96.2% 0.044 156.743);\n    --color-green-200: oklch(92.5% 0.084 155.995);\n    --color-green-300: oklch(87.1% 0.15 154.449);\n    --color-green-400: oklch(79.2% 0.209 151.711);\n    --color-green-500: oklch(72.3% 0.219 149.579);\n    --color-green-600: oklch(62.7% 0.194 149.214);\n    --color-green-700: oklch(52.7% 0.154 150.069);\n    --color-green-800: oklch(44.8% 0.119 151.328);\n    --color-green-900: oklch(39.3% 0.095 152.535);\n    --color-green-950: oklch(26.6% 0.065 152.934);\n\n    --color-emerald-50: oklch(97.9% 0.021 166.113);\n    --color-emerald-100: oklch(95% 0.052 163.051);\n    --color-emerald-200: oklch(90.5% 0.093 164.15);\n    --color-emerald-300: oklch(84.5% 0.143 164.978);\n    --color-emerald-400: oklch(76.5% 0.177 163.223);\n    --color-emerald-500: oklch(69.6% 0.17 162.48);\n    --color-emerald-600: oklch(59.6% 0.145 163.225);\n    --color-emerald-700: oklch(50.8% 0.118 165.612);\n    --color-emerald-800: oklch(43.2% 0.095 166.913);\n    --color-emerald-900: oklch(37.8% 0.077 168.94);\n    --color-emerald-950: oklch(26.2% 0.051 172.552);\n\n    --color-teal-50: oklch(98.4% 0.014 180.72);\n    --color-teal-100: oklch(95.3% 0.051 180.801);\n    --color-teal-200: oklch(91% 0.096 180.426);\n    --color-teal-300: oklch(85.5% 0.138 181.071);\n    --color-teal-400: oklch(77.7% 0.152 181.912);\n    --color-teal-500: oklch(70.4% 0.14 182.503);\n    --color-teal-600: oklch(60% 0.118 184.704);\n    --color-teal-700: oklch(51.1% 0.096 186.391);\n    --color-teal-800: oklch(43.7% 0.078 188.216);\n    --color-teal-900: oklch(38.6% 0.063 188.416);\n    --color-teal-950: oklch(27.7% 0.046 192.524);\n\n    --color-cyan-50: oklch(98.4% 0.019 200.873);\n    --color-cyan-100: oklch(95.6% 0.045 203.388);\n    --color-cyan-200: oklch(91.7% 0.08 205.041);\n    --color-cyan-300: oklch(86.5% 0.127 207.078);\n    --color-cyan-400: oklch(78.9% 0.154 211.53);\n    --color-cyan-500: oklch(71.5% 0.143 215.221);\n    --color-cyan-600: oklch(60.9% 0.126 221.723);\n    --color-cyan-700: oklch(52% 0.105 223.128);\n    --color-cyan-800: oklch(45% 0.085 224.283);\n    --color-cyan-900: oklch(39.8% 0.07 227.392);\n    --color-cyan-950: oklch(30.2% 0.056 229.695);\n\n    --color-sky-50: oklch(97.7% 0.013 236.62);\n    --color-sky-100: oklch(95.1% 0.026 236.824);\n    --color-sky-200: oklch(90.1% 0.058 230.902);\n    --color-sky-300: oklch(82.8% 0.111 230.318);\n    --color-sky-400: oklch(74.6% 0.16 232.661);\n    --color-sky-500: oklch(68.5% 0.169 237.323);\n    --color-sky-600: oklch(58.8% 0.158 241.966);\n    --color-sky-700: oklch(50% 0.134 242.749);\n    --color-sky-800: oklch(44.3% 0.11 240.79);\n    --color-sky-900: oklch(39.1% 0.09 240.876);\n    --color-sky-950: oklch(29.3% 0.066 243.157);\n\n    --color-blue-50: oklch(97% 0.014 254.604);\n    --color-blue-100: oklch(93.2% 0.032 255.585);\n    --color-blue-200: oklch(88.2% 0.059 254.128);\n    --color-blue-300: oklch(80.9% 0.105 251.813);\n    --color-blue-400: oklch(70.7% 0.165 254.624);\n    --color-blue-500: oklch(62.3% 0.214 259.815);\n    --color-blue-600: oklch(54.6% 0.245 262.881);\n    --color-blue-700: oklch(48.8% 0.243 264.376);\n    --color-blue-800: oklch(42.4% 0.199 265.638);\n    --color-blue-900: oklch(37.9% 0.146 265.522);\n    --color-blue-950: oklch(28.2% 0.091 267.935);\n\n    --color-indigo-50: oklch(96.2% 0.018 272.314);\n    --color-indigo-100: oklch(93% 0.034 272.788);\n    --color-indigo-200: oklch(87% 0.065 274.039);\n    --color-indigo-300: oklch(78.5% 0.115 274.713);\n    --color-indigo-400: oklch(67.3% 0.182 276.935);\n    --color-indigo-500: oklch(58.5% 0.233 277.117);\n    --color-indigo-600: oklch(51.1% 0.262 276.966);\n    --color-indigo-700: oklch(45.7% 0.24 277.023);\n    --color-indigo-800: oklch(39.8% 0.195 277.366);\n    --color-indigo-900: oklch(35.9% 0.144 278.697);\n    --color-indigo-950: oklch(25.7% 0.09 281.288);\n\n    --color-violet-50: oklch(96.9% 0.016 293.756);\n    --color-violet-100: oklch(94.3% 0.029 294.588);\n    --color-violet-200: oklch(89.4% 0.057 293.283);\n    --color-violet-300: oklch(81.1% 0.111 293.571);\n    --color-violet-400: oklch(70.2% 0.183 293.541);\n    --color-violet-500: oklch(60.6% 0.25 292.717);\n    --color-violet-600: oklch(54.1% 0.281 293.009);\n    --color-violet-700: oklch(49.1% 0.27 292.581);\n    --color-violet-800: oklch(43.2% 0.232 292.759);\n    --color-violet-900: oklch(38% 0.189 293.745);\n    --color-violet-950: oklch(28.3% 0.141 291.089);\n\n    --color-purple-50: oklch(97.7% 0.014 308.299);\n    --color-purple-100: oklch(94.6% 0.033 307.174);\n    --color-purple-200: oklch(90.2% 0.063 306.703);\n    --color-purple-300: oklch(82.7% 0.119 306.383);\n    --color-purple-400: oklch(71.4% 0.203 305.504);\n    --color-purple-500: oklch(62.7% 0.265 303.9);\n    --color-purple-600: oklch(55.8% 0.288 302.321);\n    --color-purple-700: oklch(49.6% 0.265 301.924);\n    --color-purple-800: oklch(43.8% 0.218 303.724);\n    --color-purple-900: oklch(38.1% 0.176 304.987);\n    --color-purple-950: oklch(29.1% 0.149 302.717);\n\n    --color-fuchsia-50: oklch(97.7% 0.017 320.058);\n    --color-fuchsia-100: oklch(95.2% 0.037 318.852);\n    --color-fuchsia-200: oklch(90.3% 0.076 319.62);\n    --color-fuchsia-300: oklch(83.3% 0.145 321.434);\n    --color-fuchsia-400: oklch(74% 0.238 322.16);\n    --color-fuchsia-500: oklch(66.7% 0.295 322.15);\n    --color-fuchsia-600: oklch(59.1% 0.293 322.896);\n    --color-fuchsia-700: oklch(51.8% 0.253 323.949);\n    --color-fuchsia-800: oklch(45.2% 0.211 324.591);\n    --color-fuchsia-900: oklch(40.1% 0.17 325.612);\n    --color-fuchsia-950: oklch(29.3% 0.136 325.661);\n\n    --color-pink-50: oklch(97.1% 0.014 343.198);\n    --color-pink-100: oklch(94.8% 0.028 342.258);\n    --color-pink-200: oklch(89.9% 0.061 343.231);\n    --color-pink-300: oklch(82.3% 0.12 346.018);\n    --color-pink-400: oklch(71.8% 0.202 349.761);\n    --color-pink-500: oklch(65.6% 0.241 354.308);\n    --color-pink-600: oklch(59.2% 0.249 0.584);\n    --color-pink-700: oklch(52.5% 0.223 3.958);\n    --color-pink-800: oklch(45.9% 0.187 3.815);\n    --color-pink-900: oklch(40.8% 0.153 2.432);\n    --color-pink-950: oklch(28.4% 0.109 3.907);\n\n    --color-rose-50: oklch(96.9% 0.015 12.422);\n    --color-rose-100: oklch(94.1% 0.03 12.58);\n    --color-rose-200: oklch(89.2% 0.058 10.001);\n    --color-rose-300: oklch(81% 0.117 11.638);\n    --color-rose-400: oklch(71.2% 0.194 13.428);\n    --color-rose-500: oklch(64.5% 0.246 16.439);\n    --color-rose-600: oklch(58.6% 0.253 17.585);\n    --color-rose-700: oklch(51.4% 0.222 16.935);\n    --color-rose-800: oklch(45.5% 0.188 13.697);\n    --color-rose-900: oklch(41% 0.159 10.272);\n    --color-rose-950: oklch(27.1% 0.105 12.094);\n\n    --color-slate-50: oklch(98.4% 0.003 247.858);\n    --color-slate-100: oklch(96.8% 0.007 247.896);\n    --color-slate-200: oklch(92.9% 0.013 255.508);\n    --color-slate-300: oklch(86.9% 0.022 252.894);\n    --color-slate-400: oklch(70.4% 0.04 256.788);\n    --color-slate-500: oklch(55.4% 0.046 257.417);\n    --color-slate-600: oklch(44.6% 0.043 257.281);\n    --color-slate-700: oklch(37.2% 0.044 257.287);\n    --color-slate-800: oklch(27.9% 0.041 260.031);\n    --color-slate-900: oklch(20.8% 0.042 265.755);\n    --color-slate-950: oklch(12.9% 0.042 264.695);\n\n    --color-gray-50: oklch(98.5% 0.002 247.839);\n    --color-gray-100: oklch(96.7% 0.003 264.542);\n    --color-gray-200: oklch(92.8% 0.006 264.531);\n    --color-gray-300: oklch(87.2% 0.01 258.338);\n    --color-gray-400: oklch(70.7% 0.022 261.325);\n    --color-gray-500: oklch(55.1% 0.027 264.364);\n    --color-gray-600: oklch(44.6% 0.03 256.802);\n    --color-gray-700: oklch(37.3% 0.034 259.733);\n    --color-gray-800: oklch(27.8% 0.033 256.848);\n    --color-gray-900: oklch(21% 0.034 264.665);\n    --color-gray-950: oklch(13% 0.028 261.692);\n\n    --color-zinc-50: oklch(98.5% 0 0);\n    --color-zinc-100: oklch(96.7% 0.001 286.375);\n    --color-zinc-200: oklch(92% 0.004 286.32);\n    --color-zinc-300: oklch(87.1% 0.006 286.286);\n    --color-zinc-400: oklch(70.5% 0.015 286.067);\n    --color-zinc-500: oklch(55.2% 0.016 285.938);\n    --color-zinc-600: oklch(44.2% 0.017 285.786);\n    --color-zinc-700: oklch(37% 0.013 285.805);\n    --color-zinc-800: oklch(27.4% 0.006 286.033);\n    --color-zinc-900: oklch(21% 0.006 285.885);\n    --color-zinc-950: oklch(14.1% 0.005 285.823);\n\n    --color-neutral-50: oklch(98.5% 0 0);\n    --color-neutral-100: oklch(97% 0 0);\n    --color-neutral-200: oklch(92.2% 0 0);\n    --color-neutral-300: oklch(87% 0 0);\n    --color-neutral-400: oklch(70.8% 0 0);\n    --color-neutral-500: oklch(55.6% 0 0);\n    --color-neutral-600: oklch(43.9% 0 0);\n    --color-neutral-700: oklch(37.1% 0 0);\n    --color-neutral-800: oklch(26.9% 0 0);\n    --color-neutral-900: oklch(20.5% 0 0);\n    --color-neutral-950: oklch(14.5% 0 0);\n\n    --color-stone-50: oklch(98.5% 0.001 106.423);\n    --color-stone-100: oklch(97% 0.001 106.424);\n    --color-stone-200: oklch(92.3% 0.003 48.717);\n    --color-stone-300: oklch(86.9% 0.005 56.366);\n    --color-stone-400: oklch(70.9% 0.01 56.259);\n    --color-stone-500: oklch(55.3% 0.013 58.071);\n    --color-stone-600: oklch(44.4% 0.011 73.639);\n    --color-stone-700: oklch(37.4% 0.01 67.558);\n    --color-stone-800: oklch(26.8% 0.007 34.298);\n    --color-stone-900: oklch(21.6% 0.006 56.043);\n    --color-stone-950: oklch(14.7% 0.004 49.25);\n\n    --color-black: #000;\n    --color-white: #fff;\n\n    --spacing: 0.25rem;\n\n    --breakpoint-sm: 40rem;\n    --breakpoint-md: 48rem;\n    --breakpoint-lg: 64rem;\n    --breakpoint-xl: 80rem;\n    --breakpoint-2xl: 96rem;\n\n    --container-3xs: 16rem;\n    --container-2xs: 18rem;\n    --container-xs: 20rem;\n    --container-sm: 24rem;\n    --container-md: 28rem;\n    --container-lg: 32rem;\n    --container-xl: 36rem;\n    --container-2xl: 42rem;\n    --container-3xl: 48rem;\n    --container-4xl: 56rem;\n    --container-5xl: 64rem;\n    --container-6xl: 72rem;\n    --container-7xl: 80rem;\n\n    --text-xs: 0.75rem;\n    --text-xs--line-height: calc(1 / 0.75);\n    --text-sm: 0.875rem;\n    --text-sm--line-height: calc(1.25 / 0.875);\n    --text-base: 1rem;\n    --text-base--line-height: calc(1.5 / 1);\n    --text-lg: 1.125rem;\n    --text-lg--line-height: calc(1.75 / 1.125);\n    --text-xl: 1.25rem;\n    --text-xl--line-height: calc(1.75 / 1.25);\n    --text-2xl: 1.5rem;\n    --text-2xl--line-height: calc(2 / 1.5);\n    --text-3xl: 1.875rem;\n    --text-3xl--line-height: calc(2.25 / 1.875);\n    --text-4xl: 2.25rem;\n    --text-4xl--line-height: calc(2.5 / 2.25);\n    --text-5xl: 3rem;\n    --text-5xl--line-height: 1;\n    --text-6xl: 3.75rem;\n    --text-6xl--line-height: 1;\n    --text-7xl: 4.5rem;\n    --text-7xl--line-height: 1;\n    --text-8xl: 6rem;\n    --text-8xl--line-height: 1;\n    --text-9xl: 8rem;\n    --text-9xl--line-height: 1;\n\n    --font-weight-thin: 100;\n    --font-weight-extralight: 200;\n    --font-weight-light: 300;\n    --font-weight-normal: 400;\n    --font-weight-medium: 500;\n    --font-weight-semibold: 600;\n    --font-weight-bold: 700;\n    --font-weight-extrabold: 800;\n    --font-weight-black: 900;\n\n    --tracking-tighter: -0.05em;\n    --tracking-tight: -0.025em;\n    --tracking-normal: 0em;\n    --tracking-wide: 0.025em;\n    --tracking-wider: 0.05em;\n    --tracking-widest: 0.1em;\n\n    --leading-tight: 1.25;\n    --leading-snug: 1.375;\n    --leading-normal: 1.5;\n    --leading-relaxed: 1.625;\n    --leading-loose: 2;\n\n    --radius-xs: 0.125rem;\n    --radius-sm: 0.25rem;\n    --radius-md: 0.375rem;\n    --radius-lg: 0.5rem;\n    --radius-xl: 0.75rem;\n    --radius-2xl: 1rem;\n    --radius-3xl: 1.5rem;\n    --radius-4xl: 2rem;\n\n    --shadow-2xs: 0 1px rgb(0 0 0 / 0.05);\n    --shadow-xs: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n    --shadow-sm: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);\n    --shadow-md:\n      0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\n    --shadow-lg:\n      0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n    --shadow-xl:\n      0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);\n    --shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);\n\n    --inset-shadow-2xs: inset 0 1px rgb(0 0 0 / 0.05);\n    --inset-shadow-xs: inset 0 1px 1px rgb(0 0 0 / 0.05);\n    --inset-shadow-sm: inset 0 2px 4px rgb(0 0 0 / 0.05);\n\n    --drop-shadow-xs: 0 1px 1px rgb(0 0 0 / 0.05);\n    --drop-shadow-sm: 0 1px 2px rgb(0 0 0 / 0.15);\n    --drop-shadow-md: 0 3px 3px rgb(0 0 0 / 0.12);\n    --drop-shadow-lg: 0 4px 4px rgb(0 0 0 / 0.15);\n    --drop-shadow-xl: 0 9px 7px rgb(0 0 0 / 0.1);\n    --drop-shadow-2xl: 0 25px 25px rgb(0 0 0 / 0.15);\n\n    --text-shadow-2xs: 0px 1px 0px rgb(0 0 0 / 0.15);\n    --text-shadow-xs: 0px 1px 1px rgb(0 0 0 / 0.2);\n    --text-shadow-sm:\n      0px 1px 0px rgb(0 0 0 / 0.075), 0px 1px 1px rgb(0 0 0 / 0.075),\n      0px 2px 2px rgb(0 0 0 / 0.075);\n    --text-shadow-md:\n      0px 1px 1px rgb(0 0 0 / 0.1), 0px 1px 2px rgb(0 0 0 / 0.1),\n      0px 2px 4px rgb(0 0 0 / 0.1);\n    --text-shadow-lg:\n      0px 1px 2px rgb(0 0 0 / 0.1), 0px 3px 2px rgb(0 0 0 / 0.1),\n      0px 4px 8px rgb(0 0 0 / 0.1);\n\n    --ease-in: cubic-bezier(0.4, 0, 1, 1);\n    --ease-out: cubic-bezier(0, 0, 0.2, 1);\n    --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);\n\n    --animate-spin: spin 1s linear infinite;\n    --animate-ping: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;\n    --animate-pulse: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n    --animate-bounce: bounce 1s infinite;\n\n    @keyframes spin {\n      to {\n        transform: rotate(360deg);\n      }\n    }\n\n    @keyframes ping {\n      75%,\n      100% {\n        transform: scale(2);\n        opacity: 0;\n      }\n    }\n\n    @keyframes pulse {\n      50% {\n        opacity: 0.5;\n      }\n    }\n\n    @keyframes bounce {\n      0%,\n      100% {\n        transform: translateY(-25%);\n        animation-timing-function: cubic-bezier(0.8, 0, 1, 1);\n      }\n\n      50% {\n        transform: none;\n        animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n      }\n    }\n\n    --blur-xs: 4px;\n    --blur-sm: 8px;\n    --blur-md: 12px;\n    --blur-lg: 16px;\n    --blur-xl: 24px;\n    --blur-2xl: 40px;\n    --blur-3xl: 64px;\n\n    --perspective-dramatic: 100px;\n    --perspective-near: 300px;\n    --perspective-normal: 500px;\n    --perspective-midrange: 800px;\n    --perspective-distant: 1200px;\n\n    --aspect-video: 16 / 9;\n\n    --default-transition-duration: 150ms;\n    --default-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    --default-font-family: --theme(--font-sans, initial);\n    --default-font-feature-settings: --theme(\n      --font-sans--font-feature-settings,\n      initial\n    );\n    --default-font-variation-settings: --theme(\n      --font-sans--font-variation-settings,\n      initial\n    );\n    --default-mono-font-family: --theme(--font-mono, initial);\n    --default-mono-font-feature-settings: --theme(\n      --font-mono--font-feature-settings,\n      initial\n    );\n    --default-mono-font-variation-settings: --theme(\n      --font-mono--font-variation-settings,\n      initial\n    );\n  }\n\n  /* Deprecated */\n  @theme default inline reference {\n    --blur: 8px;\n    --shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);\n    --shadow-inner: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);\n    --drop-shadow: 0 1px 2px rgb(0 0 0 / 0.1), 0 1px 1px rgb(0 0 0 / 0.06);\n    --radius: 0.25rem;\n    --max-width-prose: 65ch;\n  }\n}\n\n@layer base {\n  /*\n  1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n  2. Remove default margins and padding\n  3. Reset all borders.\n*/\n\n  *,\n  ::after,\n  ::before,\n  ::backdrop,\n  ::file-selector-button {\n    box-sizing: border-box; /* 1 */\n    margin: 0; /* 2 */\n    padding: 0; /* 2 */\n    border: 0 solid; /* 3 */\n  }\n\n  /*\n  1. Use a consistent sensible line-height in all browsers.\n  2. Prevent adjustments of font size after orientation changes in iOS.\n  3. Use a more readable tab size.\n  4. Use the user\'s configured `sans` font-family by default.\n  5. Use the user\'s configured `sans` font-feature-settings by default.\n  6. Use the user\'s configured `sans` font-variation-settings by default.\n  7. Disable tap highlights on iOS.\n*/\n\n  html,\n  :host {\n    line-height: 1.5; /* 1 */\n    -webkit-text-size-adjust: 100%; /* 2 */\n    tab-size: 4; /* 3 */\n    font-family: --theme(\n      --default-font-family,\n      ui-sans-serif,\n      system-ui,\n      sans-serif,\n      "Apple Color Emoji",\n      "Segoe UI Emoji",\n      "Segoe UI Symbol",\n      "Noto Color Emoji"\n    ); /* 4 */\n    font-feature-settings: --theme(\n      --default-font-feature-settings,\n      normal\n    ); /* 5 */\n    font-variation-settings: --theme(\n      --default-font-variation-settings,\n      normal\n    ); /* 6 */\n    -webkit-tap-highlight-color: transparent; /* 7 */\n  }\n\n  /*\n  1. Add the correct height in Firefox.\n  2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n  3. Reset the default border style to a 1px solid border.\n*/\n\n  hr {\n    height: 0; /* 1 */\n    color: inherit; /* 2 */\n    border-top-width: 1px; /* 3 */\n  }\n\n  /*\n  Add the correct text decoration in Chrome, Edge, and Safari.\n*/\n\n  abbr:where([title]) {\n    -webkit-text-decoration: underline dotted;\n    text-decoration: underline dotted;\n  }\n\n  /*\n  Remove the default font size and weight for headings.\n*/\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    font-size: inherit;\n    font-weight: inherit;\n  }\n\n  /*\n  Reset links to optimize for opt-in styling instead of opt-out.\n*/\n\n  a {\n    color: inherit;\n    -webkit-text-decoration: inherit;\n    text-decoration: inherit;\n  }\n\n  /*\n  Add the correct font weight in Edge and Safari.\n*/\n\n  b,\n  strong {\n    font-weight: bolder;\n  }\n\n  /*\n  1. Use the user\'s configured `mono` font-family by default.\n  2. Use the user\'s configured `mono` font-feature-settings by default.\n  3. Use the user\'s configured `mono` font-variation-settings by default.\n  4. Correct the odd `em` font sizing in all browsers.\n*/\n\n  code,\n  kbd,\n  samp,\n  pre {\n    font-family: --theme(\n      --default-mono-font-family,\n      ui-monospace,\n      SFMono-Regular,\n      Menlo,\n      Monaco,\n      Consolas,\n      "Liberation Mono",\n      "Courier New",\n      monospace\n    ); /* 1 */\n    font-feature-settings: --theme(\n      --default-mono-font-feature-settings,\n      normal\n    ); /* 2 */\n    font-variation-settings: --theme(\n      --default-mono-font-variation-settings,\n      normal\n    ); /* 3 */\n    font-size: 1em; /* 4 */\n  }\n\n  /*\n  Add the correct font size in all browsers.\n*/\n\n  small {\n    font-size: 80%;\n  }\n\n  /*\n  Prevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\n  sub,\n  sup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n  }\n\n  sub {\n    bottom: -0.25em;\n  }\n\n  sup {\n    top: -0.5em;\n  }\n\n  /*\n  1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n  2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n  3. Remove gaps between table borders by default.\n*/\n\n  table {\n    text-indent: 0; /* 1 */\n    border-color: inherit; /* 2 */\n    border-collapse: collapse; /* 3 */\n  }\n\n  /*\n  Use the modern Firefox focus style for all focusable elements.\n*/\n\n  :-moz-focusring {\n    outline: auto;\n  }\n\n  /*\n  Add the correct vertical alignment in Chrome and Firefox.\n*/\n\n  progress {\n    vertical-align: baseline;\n  }\n\n  /*\n  Add the correct display in Chrome and Safari.\n*/\n\n  summary {\n    display: list-item;\n  }\n\n  /*\n  Make lists unstyled by default.\n*/\n\n  ol,\n  ul,\n  menu {\n    list-style: none;\n  }\n\n  /*\n  1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n  2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n      This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\n  img,\n  svg,\n  video,\n  canvas,\n  audio,\n  iframe,\n  embed,\n  object {\n    display: block; /* 1 */\n    vertical-align: middle; /* 2 */\n  }\n\n  /*\n  Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\n  img,\n  video {\n    max-width: 100%;\n    height: auto;\n  }\n\n  /*\n  1. Inherit font styles in all browsers.\n  2. Remove border radius in all browsers.\n  3. Remove background color in all browsers.\n  4. Ensure consistent opacity for disabled states in all browsers.\n*/\n\n  button,\n  input,\n  select,\n  optgroup,\n  textarea,\n  ::file-selector-button {\n    font: inherit; /* 1 */\n    font-feature-settings: inherit; /* 1 */\n    font-variation-settings: inherit; /* 1 */\n    letter-spacing: inherit; /* 1 */\n    color: inherit; /* 1 */\n    border-radius: 0; /* 2 */\n    background-color: transparent; /* 3 */\n    opacity: 1; /* 4 */\n  }\n\n  /*\n  Restore default font weight.\n*/\n\n  :where(select:is([multiple], [size])) optgroup {\n    font-weight: bolder;\n  }\n\n  /*\n  Restore indentation.\n*/\n\n  :where(select:is([multiple], [size])) optgroup option {\n    padding-inline-start: 20px;\n  }\n\n  /*\n  Restore space after button.\n*/\n\n  ::file-selector-button {\n    margin-inline-end: 4px;\n  }\n\n  /*\n  Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n*/\n\n  ::placeholder {\n    opacity: 1;\n  }\n\n  /*\n  Set the default placeholder color to a semi-transparent version of the current text color in browsers that do not\n  crash when using `color-mix(\u2026)` with `currentcolor`. (https://github.com/tailwindlabs/tailwindcss/issues/17194)\n*/\n\n  @supports (not (-webkit-appearance: -apple-pay-button)) /* Not Safari */ or\n    (contain-intrinsic-size: 1px) /* Safari 17+ */ {\n    ::placeholder {\n      color: color-mix(in oklab, currentcolor 50%, transparent);\n    }\n  }\n\n  /*\n  Prevent resizing textareas horizontally by default.\n*/\n\n  textarea {\n    resize: vertical;\n  }\n\n  /*\n  Remove the inner padding in Chrome and Safari on macOS.\n*/\n\n  ::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n\n  /*\n  1. Ensure date/time inputs have the same height when empty in iOS Safari.\n  2. Ensure text alignment can be changed on date/time inputs in iOS Safari.\n*/\n\n  ::-webkit-date-and-time-value {\n    min-height: 1lh; /* 1 */\n    text-align: inherit; /* 2 */\n  }\n\n  /*\n  Prevent height from changing on date/time inputs in macOS Safari when the input is set to `display: block`.\n*/\n\n  ::-webkit-datetime-edit {\n    display: inline-flex;\n  }\n\n  /*\n  Remove excess padding from pseudo-elements in date/time inputs to ensure consistent height across browsers.\n*/\n\n  ::-webkit-datetime-edit-fields-wrapper {\n    padding: 0;\n  }\n\n  ::-webkit-datetime-edit,\n  ::-webkit-datetime-edit-year-field,\n  ::-webkit-datetime-edit-month-field,\n  ::-webkit-datetime-edit-day-field,\n  ::-webkit-datetime-edit-hour-field,\n  ::-webkit-datetime-edit-minute-field,\n  ::-webkit-datetime-edit-second-field,\n  ::-webkit-datetime-edit-millisecond-field,\n  ::-webkit-datetime-edit-meridiem-field {\n    padding-block: 0;\n  }\n\n  /*\n  Center dropdown marker shown on inputs with paired `<datalist>`s in Chrome. (https://github.com/tailwindlabs/tailwindcss/issues/18499)\n*/\n\n  ::-webkit-calendar-picker-indicator {\n    line-height: 1;\n  }\n\n  /*\n  Remove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n  :-moz-ui-invalid {\n    box-shadow: none;\n  }\n\n  /*\n  Correct the inability to style the border radius in iOS Safari.\n*/\n\n  button,\n  input:where([type="button"], [type="reset"], [type="submit"]),\n  ::file-selector-button {\n    appearance: button;\n  }\n\n  /*\n  Correct the cursor style of increment and decrement buttons in Safari.\n*/\n\n  ::-webkit-inner-spin-button,\n  ::-webkit-outer-spin-button {\n    height: auto;\n  }\n\n  /*\n  Make elements with the HTML hidden attribute stay hidden by default.\n*/\n\n  [hidden]:where(:not([hidden="until-found"])) {\n    display: none !important;\n  }\n}\n\n@layer utilities {\n  @tailwind utilities;\n}\n';

  // node_modules/tailwindcss/preflight.css
  var preflight_default = "/*\n  1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n  2. Remove default margins and padding\n  3. Reset all borders.\n*/\n\n*,\n::after,\n::before,\n::backdrop,\n::file-selector-button {\n  box-sizing: border-box; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 2 */\n  border: 0 solid; /* 3 */\n}\n\n/*\n  1. Use a consistent sensible line-height in all browsers.\n  2. Prevent adjustments of font size after orientation changes in iOS.\n  3. Use a more readable tab size.\n  4. Use the user's configured `sans` font-family by default.\n  5. Use the user's configured `sans` font-feature-settings by default.\n  6. Use the user's configured `sans` font-variation-settings by default.\n  7. Disable tap highlights on iOS.\n*/\n\nhtml,\n:host {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  tab-size: 4; /* 3 */\n  font-family: --theme(\n    --default-font-family,\n    ui-sans-serif,\n    system-ui,\n    sans-serif,\n    'Apple Color Emoji',\n    'Segoe UI Emoji',\n    'Segoe UI Symbol',\n    'Noto Color Emoji'\n  ); /* 4 */\n  font-feature-settings: --theme(--default-font-feature-settings, normal); /* 5 */\n  font-variation-settings: --theme(--default-font-variation-settings, normal); /* 6 */\n  -webkit-tap-highlight-color: transparent; /* 7 */\n}\n\n/*\n  1. Add the correct height in Firefox.\n  2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n  3. Reset the default border style to a 1px solid border.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\n  Add the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n  text-decoration: underline dotted;\n}\n\n/*\n  Remove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\n  Reset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  -webkit-text-decoration: inherit;\n  text-decoration: inherit;\n}\n\n/*\n  Add the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n  1. Use the user's configured `mono` font-family by default.\n  2. Use the user's configured `mono` font-feature-settings by default.\n  3. Use the user's configured `mono` font-variation-settings by default.\n  4. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: --theme(\n    --default-mono-font-family,\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    Monaco,\n    Consolas,\n    'Liberation Mono',\n    'Courier New',\n    monospace\n  ); /* 1 */\n  font-feature-settings: --theme(--default-mono-font-feature-settings, normal); /* 2 */\n  font-variation-settings: --theme(--default-mono-font-variation-settings, normal); /* 3 */\n  font-size: 1em; /* 4 */\n}\n\n/*\n  Add the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\n  Prevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n  1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n  2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n  3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n  Use the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\n  Add the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\n  Add the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\n  Make lists unstyled by default.\n*/\n\nol,\nul,\nmenu {\n  list-style: none;\n}\n\n/*\n  1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n  2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n      This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\n  Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/*\n  1. Inherit font styles in all browsers.\n  2. Remove border radius in all browsers.\n  3. Remove background color in all browsers.\n  4. Ensure consistent opacity for disabled states in all browsers.\n*/\n\nbutton,\ninput,\nselect,\noptgroup,\ntextarea,\n::file-selector-button {\n  font: inherit; /* 1 */\n  font-feature-settings: inherit; /* 1 */\n  font-variation-settings: inherit; /* 1 */\n  letter-spacing: inherit; /* 1 */\n  color: inherit; /* 1 */\n  border-radius: 0; /* 2 */\n  background-color: transparent; /* 3 */\n  opacity: 1; /* 4 */\n}\n\n/*\n  Restore default font weight.\n*/\n\n:where(select:is([multiple], [size])) optgroup {\n  font-weight: bolder;\n}\n\n/*\n  Restore indentation.\n*/\n\n:where(select:is([multiple], [size])) optgroup option {\n  padding-inline-start: 20px;\n}\n\n/*\n  Restore space after button.\n*/\n\n::file-selector-button {\n  margin-inline-end: 4px;\n}\n\n/*\n  Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n*/\n\n::placeholder {\n  opacity: 1;\n}\n\n/*\n  Set the default placeholder color to a semi-transparent version of the current text color in browsers that do not\n  crash when using `color-mix(\u2026)` with `currentcolor`. (https://github.com/tailwindlabs/tailwindcss/issues/17194)\n*/\n\n@supports (not (-webkit-appearance: -apple-pay-button)) /* Not Safari */ or\n  (contain-intrinsic-size: 1px) /* Safari 17+ */ {\n  ::placeholder {\n    color: color-mix(in oklab, currentcolor 50%, transparent);\n  }\n}\n\n/*\n  Prevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n  Remove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n  1. Ensure date/time inputs have the same height when empty in iOS Safari.\n  2. Ensure text alignment can be changed on date/time inputs in iOS Safari.\n*/\n\n::-webkit-date-and-time-value {\n  min-height: 1lh; /* 1 */\n  text-align: inherit; /* 2 */\n}\n\n/*\n  Prevent height from changing on date/time inputs in macOS Safari when the input is set to `display: block`.\n*/\n\n::-webkit-datetime-edit {\n  display: inline-flex;\n}\n\n/*\n  Remove excess padding from pseudo-elements in date/time inputs to ensure consistent height across browsers.\n*/\n\n::-webkit-datetime-edit-fields-wrapper {\n  padding: 0;\n}\n\n::-webkit-datetime-edit,\n::-webkit-datetime-edit-year-field,\n::-webkit-datetime-edit-month-field,\n::-webkit-datetime-edit-day-field,\n::-webkit-datetime-edit-hour-field,\n::-webkit-datetime-edit-minute-field,\n::-webkit-datetime-edit-second-field,\n::-webkit-datetime-edit-millisecond-field,\n::-webkit-datetime-edit-meridiem-field {\n  padding-block: 0;\n}\n\n/*\n  Center dropdown marker shown on inputs with paired `<datalist>`s in Chrome. (https://github.com/tailwindlabs/tailwindcss/issues/18499)\n*/\n\n::-webkit-calendar-picker-indicator {\n  line-height: 1;\n}\n\n/*\n  Remove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\n  Correct the inability to style the border radius in iOS Safari.\n*/\n\nbutton,\ninput:where([type='button'], [type='reset'], [type='submit']),\n::file-selector-button {\n  appearance: button;\n}\n\n/*\n  Correct the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n  Make elements with the HTML hidden attribute stay hidden by default.\n*/\n\n[hidden]:where(:not([hidden='until-found'])) {\n  display: none !important;\n}\n";

  // node_modules/tailwindcss/theme.css
  var theme_default = "@theme default {\n  --font-sans:\n    ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',\n    'Noto Color Emoji';\n  --font-serif: ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif;\n  --font-mono:\n    ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New',\n    monospace;\n\n  --color-red-50: oklch(97.1% 0.013 17.38);\n  --color-red-100: oklch(93.6% 0.032 17.717);\n  --color-red-200: oklch(88.5% 0.062 18.334);\n  --color-red-300: oklch(80.8% 0.114 19.571);\n  --color-red-400: oklch(70.4% 0.191 22.216);\n  --color-red-500: oklch(63.7% 0.237 25.331);\n  --color-red-600: oklch(57.7% 0.245 27.325);\n  --color-red-700: oklch(50.5% 0.213 27.518);\n  --color-red-800: oklch(44.4% 0.177 26.899);\n  --color-red-900: oklch(39.6% 0.141 25.723);\n  --color-red-950: oklch(25.8% 0.092 26.042);\n\n  --color-orange-50: oklch(98% 0.016 73.684);\n  --color-orange-100: oklch(95.4% 0.038 75.164);\n  --color-orange-200: oklch(90.1% 0.076 70.697);\n  --color-orange-300: oklch(83.7% 0.128 66.29);\n  --color-orange-400: oklch(75% 0.183 55.934);\n  --color-orange-500: oklch(70.5% 0.213 47.604);\n  --color-orange-600: oklch(64.6% 0.222 41.116);\n  --color-orange-700: oklch(55.3% 0.195 38.402);\n  --color-orange-800: oklch(47% 0.157 37.304);\n  --color-orange-900: oklch(40.8% 0.123 38.172);\n  --color-orange-950: oklch(26.6% 0.079 36.259);\n\n  --color-amber-50: oklch(98.7% 0.022 95.277);\n  --color-amber-100: oklch(96.2% 0.059 95.617);\n  --color-amber-200: oklch(92.4% 0.12 95.746);\n  --color-amber-300: oklch(87.9% 0.169 91.605);\n  --color-amber-400: oklch(82.8% 0.189 84.429);\n  --color-amber-500: oklch(76.9% 0.188 70.08);\n  --color-amber-600: oklch(66.6% 0.179 58.318);\n  --color-amber-700: oklch(55.5% 0.163 48.998);\n  --color-amber-800: oklch(47.3% 0.137 46.201);\n  --color-amber-900: oklch(41.4% 0.112 45.904);\n  --color-amber-950: oklch(27.9% 0.077 45.635);\n\n  --color-yellow-50: oklch(98.7% 0.026 102.212);\n  --color-yellow-100: oklch(97.3% 0.071 103.193);\n  --color-yellow-200: oklch(94.5% 0.129 101.54);\n  --color-yellow-300: oklch(90.5% 0.182 98.111);\n  --color-yellow-400: oklch(85.2% 0.199 91.936);\n  --color-yellow-500: oklch(79.5% 0.184 86.047);\n  --color-yellow-600: oklch(68.1% 0.162 75.834);\n  --color-yellow-700: oklch(55.4% 0.135 66.442);\n  --color-yellow-800: oklch(47.6% 0.114 61.907);\n  --color-yellow-900: oklch(42.1% 0.095 57.708);\n  --color-yellow-950: oklch(28.6% 0.066 53.813);\n\n  --color-lime-50: oklch(98.6% 0.031 120.757);\n  --color-lime-100: oklch(96.7% 0.067 122.328);\n  --color-lime-200: oklch(93.8% 0.127 124.321);\n  --color-lime-300: oklch(89.7% 0.196 126.665);\n  --color-lime-400: oklch(84.1% 0.238 128.85);\n  --color-lime-500: oklch(76.8% 0.233 130.85);\n  --color-lime-600: oklch(64.8% 0.2 131.684);\n  --color-lime-700: oklch(53.2% 0.157 131.589);\n  --color-lime-800: oklch(45.3% 0.124 130.933);\n  --color-lime-900: oklch(40.5% 0.101 131.063);\n  --color-lime-950: oklch(27.4% 0.072 132.109);\n\n  --color-green-50: oklch(98.2% 0.018 155.826);\n  --color-green-100: oklch(96.2% 0.044 156.743);\n  --color-green-200: oklch(92.5% 0.084 155.995);\n  --color-green-300: oklch(87.1% 0.15 154.449);\n  --color-green-400: oklch(79.2% 0.209 151.711);\n  --color-green-500: oklch(72.3% 0.219 149.579);\n  --color-green-600: oklch(62.7% 0.194 149.214);\n  --color-green-700: oklch(52.7% 0.154 150.069);\n  --color-green-800: oklch(44.8% 0.119 151.328);\n  --color-green-900: oklch(39.3% 0.095 152.535);\n  --color-green-950: oklch(26.6% 0.065 152.934);\n\n  --color-emerald-50: oklch(97.9% 0.021 166.113);\n  --color-emerald-100: oklch(95% 0.052 163.051);\n  --color-emerald-200: oklch(90.5% 0.093 164.15);\n  --color-emerald-300: oklch(84.5% 0.143 164.978);\n  --color-emerald-400: oklch(76.5% 0.177 163.223);\n  --color-emerald-500: oklch(69.6% 0.17 162.48);\n  --color-emerald-600: oklch(59.6% 0.145 163.225);\n  --color-emerald-700: oklch(50.8% 0.118 165.612);\n  --color-emerald-800: oklch(43.2% 0.095 166.913);\n  --color-emerald-900: oklch(37.8% 0.077 168.94);\n  --color-emerald-950: oklch(26.2% 0.051 172.552);\n\n  --color-teal-50: oklch(98.4% 0.014 180.72);\n  --color-teal-100: oklch(95.3% 0.051 180.801);\n  --color-teal-200: oklch(91% 0.096 180.426);\n  --color-teal-300: oklch(85.5% 0.138 181.071);\n  --color-teal-400: oklch(77.7% 0.152 181.912);\n  --color-teal-500: oklch(70.4% 0.14 182.503);\n  --color-teal-600: oklch(60% 0.118 184.704);\n  --color-teal-700: oklch(51.1% 0.096 186.391);\n  --color-teal-800: oklch(43.7% 0.078 188.216);\n  --color-teal-900: oklch(38.6% 0.063 188.416);\n  --color-teal-950: oklch(27.7% 0.046 192.524);\n\n  --color-cyan-50: oklch(98.4% 0.019 200.873);\n  --color-cyan-100: oklch(95.6% 0.045 203.388);\n  --color-cyan-200: oklch(91.7% 0.08 205.041);\n  --color-cyan-300: oklch(86.5% 0.127 207.078);\n  --color-cyan-400: oklch(78.9% 0.154 211.53);\n  --color-cyan-500: oklch(71.5% 0.143 215.221);\n  --color-cyan-600: oklch(60.9% 0.126 221.723);\n  --color-cyan-700: oklch(52% 0.105 223.128);\n  --color-cyan-800: oklch(45% 0.085 224.283);\n  --color-cyan-900: oklch(39.8% 0.07 227.392);\n  --color-cyan-950: oklch(30.2% 0.056 229.695);\n\n  --color-sky-50: oklch(97.7% 0.013 236.62);\n  --color-sky-100: oklch(95.1% 0.026 236.824);\n  --color-sky-200: oklch(90.1% 0.058 230.902);\n  --color-sky-300: oklch(82.8% 0.111 230.318);\n  --color-sky-400: oklch(74.6% 0.16 232.661);\n  --color-sky-500: oklch(68.5% 0.169 237.323);\n  --color-sky-600: oklch(58.8% 0.158 241.966);\n  --color-sky-700: oklch(50% 0.134 242.749);\n  --color-sky-800: oklch(44.3% 0.11 240.79);\n  --color-sky-900: oklch(39.1% 0.09 240.876);\n  --color-sky-950: oklch(29.3% 0.066 243.157);\n\n  --color-blue-50: oklch(97% 0.014 254.604);\n  --color-blue-100: oklch(93.2% 0.032 255.585);\n  --color-blue-200: oklch(88.2% 0.059 254.128);\n  --color-blue-300: oklch(80.9% 0.105 251.813);\n  --color-blue-400: oklch(70.7% 0.165 254.624);\n  --color-blue-500: oklch(62.3% 0.214 259.815);\n  --color-blue-600: oklch(54.6% 0.245 262.881);\n  --color-blue-700: oklch(48.8% 0.243 264.376);\n  --color-blue-800: oklch(42.4% 0.199 265.638);\n  --color-blue-900: oklch(37.9% 0.146 265.522);\n  --color-blue-950: oklch(28.2% 0.091 267.935);\n\n  --color-indigo-50: oklch(96.2% 0.018 272.314);\n  --color-indigo-100: oklch(93% 0.034 272.788);\n  --color-indigo-200: oklch(87% 0.065 274.039);\n  --color-indigo-300: oklch(78.5% 0.115 274.713);\n  --color-indigo-400: oklch(67.3% 0.182 276.935);\n  --color-indigo-500: oklch(58.5% 0.233 277.117);\n  --color-indigo-600: oklch(51.1% 0.262 276.966);\n  --color-indigo-700: oklch(45.7% 0.24 277.023);\n  --color-indigo-800: oklch(39.8% 0.195 277.366);\n  --color-indigo-900: oklch(35.9% 0.144 278.697);\n  --color-indigo-950: oklch(25.7% 0.09 281.288);\n\n  --color-violet-50: oklch(96.9% 0.016 293.756);\n  --color-violet-100: oklch(94.3% 0.029 294.588);\n  --color-violet-200: oklch(89.4% 0.057 293.283);\n  --color-violet-300: oklch(81.1% 0.111 293.571);\n  --color-violet-400: oklch(70.2% 0.183 293.541);\n  --color-violet-500: oklch(60.6% 0.25 292.717);\n  --color-violet-600: oklch(54.1% 0.281 293.009);\n  --color-violet-700: oklch(49.1% 0.27 292.581);\n  --color-violet-800: oklch(43.2% 0.232 292.759);\n  --color-violet-900: oklch(38% 0.189 293.745);\n  --color-violet-950: oklch(28.3% 0.141 291.089);\n\n  --color-purple-50: oklch(97.7% 0.014 308.299);\n  --color-purple-100: oklch(94.6% 0.033 307.174);\n  --color-purple-200: oklch(90.2% 0.063 306.703);\n  --color-purple-300: oklch(82.7% 0.119 306.383);\n  --color-purple-400: oklch(71.4% 0.203 305.504);\n  --color-purple-500: oklch(62.7% 0.265 303.9);\n  --color-purple-600: oklch(55.8% 0.288 302.321);\n  --color-purple-700: oklch(49.6% 0.265 301.924);\n  --color-purple-800: oklch(43.8% 0.218 303.724);\n  --color-purple-900: oklch(38.1% 0.176 304.987);\n  --color-purple-950: oklch(29.1% 0.149 302.717);\n\n  --color-fuchsia-50: oklch(97.7% 0.017 320.058);\n  --color-fuchsia-100: oklch(95.2% 0.037 318.852);\n  --color-fuchsia-200: oklch(90.3% 0.076 319.62);\n  --color-fuchsia-300: oklch(83.3% 0.145 321.434);\n  --color-fuchsia-400: oklch(74% 0.238 322.16);\n  --color-fuchsia-500: oklch(66.7% 0.295 322.15);\n  --color-fuchsia-600: oklch(59.1% 0.293 322.896);\n  --color-fuchsia-700: oklch(51.8% 0.253 323.949);\n  --color-fuchsia-800: oklch(45.2% 0.211 324.591);\n  --color-fuchsia-900: oklch(40.1% 0.17 325.612);\n  --color-fuchsia-950: oklch(29.3% 0.136 325.661);\n\n  --color-pink-50: oklch(97.1% 0.014 343.198);\n  --color-pink-100: oklch(94.8% 0.028 342.258);\n  --color-pink-200: oklch(89.9% 0.061 343.231);\n  --color-pink-300: oklch(82.3% 0.12 346.018);\n  --color-pink-400: oklch(71.8% 0.202 349.761);\n  --color-pink-500: oklch(65.6% 0.241 354.308);\n  --color-pink-600: oklch(59.2% 0.249 0.584);\n  --color-pink-700: oklch(52.5% 0.223 3.958);\n  --color-pink-800: oklch(45.9% 0.187 3.815);\n  --color-pink-900: oklch(40.8% 0.153 2.432);\n  --color-pink-950: oklch(28.4% 0.109 3.907);\n\n  --color-rose-50: oklch(96.9% 0.015 12.422);\n  --color-rose-100: oklch(94.1% 0.03 12.58);\n  --color-rose-200: oklch(89.2% 0.058 10.001);\n  --color-rose-300: oklch(81% 0.117 11.638);\n  --color-rose-400: oklch(71.2% 0.194 13.428);\n  --color-rose-500: oklch(64.5% 0.246 16.439);\n  --color-rose-600: oklch(58.6% 0.253 17.585);\n  --color-rose-700: oklch(51.4% 0.222 16.935);\n  --color-rose-800: oklch(45.5% 0.188 13.697);\n  --color-rose-900: oklch(41% 0.159 10.272);\n  --color-rose-950: oklch(27.1% 0.105 12.094);\n\n  --color-slate-50: oklch(98.4% 0.003 247.858);\n  --color-slate-100: oklch(96.8% 0.007 247.896);\n  --color-slate-200: oklch(92.9% 0.013 255.508);\n  --color-slate-300: oklch(86.9% 0.022 252.894);\n  --color-slate-400: oklch(70.4% 0.04 256.788);\n  --color-slate-500: oklch(55.4% 0.046 257.417);\n  --color-slate-600: oklch(44.6% 0.043 257.281);\n  --color-slate-700: oklch(37.2% 0.044 257.287);\n  --color-slate-800: oklch(27.9% 0.041 260.031);\n  --color-slate-900: oklch(20.8% 0.042 265.755);\n  --color-slate-950: oklch(12.9% 0.042 264.695);\n\n  --color-gray-50: oklch(98.5% 0.002 247.839);\n  --color-gray-100: oklch(96.7% 0.003 264.542);\n  --color-gray-200: oklch(92.8% 0.006 264.531);\n  --color-gray-300: oklch(87.2% 0.01 258.338);\n  --color-gray-400: oklch(70.7% 0.022 261.325);\n  --color-gray-500: oklch(55.1% 0.027 264.364);\n  --color-gray-600: oklch(44.6% 0.03 256.802);\n  --color-gray-700: oklch(37.3% 0.034 259.733);\n  --color-gray-800: oklch(27.8% 0.033 256.848);\n  --color-gray-900: oklch(21% 0.034 264.665);\n  --color-gray-950: oklch(13% 0.028 261.692);\n\n  --color-zinc-50: oklch(98.5% 0 0);\n  --color-zinc-100: oklch(96.7% 0.001 286.375);\n  --color-zinc-200: oklch(92% 0.004 286.32);\n  --color-zinc-300: oklch(87.1% 0.006 286.286);\n  --color-zinc-400: oklch(70.5% 0.015 286.067);\n  --color-zinc-500: oklch(55.2% 0.016 285.938);\n  --color-zinc-600: oklch(44.2% 0.017 285.786);\n  --color-zinc-700: oklch(37% 0.013 285.805);\n  --color-zinc-800: oklch(27.4% 0.006 286.033);\n  --color-zinc-900: oklch(21% 0.006 285.885);\n  --color-zinc-950: oklch(14.1% 0.005 285.823);\n\n  --color-neutral-50: oklch(98.5% 0 0);\n  --color-neutral-100: oklch(97% 0 0);\n  --color-neutral-200: oklch(92.2% 0 0);\n  --color-neutral-300: oklch(87% 0 0);\n  --color-neutral-400: oklch(70.8% 0 0);\n  --color-neutral-500: oklch(55.6% 0 0);\n  --color-neutral-600: oklch(43.9% 0 0);\n  --color-neutral-700: oklch(37.1% 0 0);\n  --color-neutral-800: oklch(26.9% 0 0);\n  --color-neutral-900: oklch(20.5% 0 0);\n  --color-neutral-950: oklch(14.5% 0 0);\n\n  --color-stone-50: oklch(98.5% 0.001 106.423);\n  --color-stone-100: oklch(97% 0.001 106.424);\n  --color-stone-200: oklch(92.3% 0.003 48.717);\n  --color-stone-300: oklch(86.9% 0.005 56.366);\n  --color-stone-400: oklch(70.9% 0.01 56.259);\n  --color-stone-500: oklch(55.3% 0.013 58.071);\n  --color-stone-600: oklch(44.4% 0.011 73.639);\n  --color-stone-700: oklch(37.4% 0.01 67.558);\n  --color-stone-800: oklch(26.8% 0.007 34.298);\n  --color-stone-900: oklch(21.6% 0.006 56.043);\n  --color-stone-950: oklch(14.7% 0.004 49.25);\n\n  --color-black: #000;\n  --color-white: #fff;\n\n  --spacing: 0.25rem;\n\n  --breakpoint-sm: 40rem;\n  --breakpoint-md: 48rem;\n  --breakpoint-lg: 64rem;\n  --breakpoint-xl: 80rem;\n  --breakpoint-2xl: 96rem;\n\n  --container-3xs: 16rem;\n  --container-2xs: 18rem;\n  --container-xs: 20rem;\n  --container-sm: 24rem;\n  --container-md: 28rem;\n  --container-lg: 32rem;\n  --container-xl: 36rem;\n  --container-2xl: 42rem;\n  --container-3xl: 48rem;\n  --container-4xl: 56rem;\n  --container-5xl: 64rem;\n  --container-6xl: 72rem;\n  --container-7xl: 80rem;\n\n  --text-xs: 0.75rem;\n  --text-xs--line-height: calc(1 / 0.75);\n  --text-sm: 0.875rem;\n  --text-sm--line-height: calc(1.25 / 0.875);\n  --text-base: 1rem;\n  --text-base--line-height: calc(1.5 / 1);\n  --text-lg: 1.125rem;\n  --text-lg--line-height: calc(1.75 / 1.125);\n  --text-xl: 1.25rem;\n  --text-xl--line-height: calc(1.75 / 1.25);\n  --text-2xl: 1.5rem;\n  --text-2xl--line-height: calc(2 / 1.5);\n  --text-3xl: 1.875rem;\n  --text-3xl--line-height: calc(2.25 / 1.875);\n  --text-4xl: 2.25rem;\n  --text-4xl--line-height: calc(2.5 / 2.25);\n  --text-5xl: 3rem;\n  --text-5xl--line-height: 1;\n  --text-6xl: 3.75rem;\n  --text-6xl--line-height: 1;\n  --text-7xl: 4.5rem;\n  --text-7xl--line-height: 1;\n  --text-8xl: 6rem;\n  --text-8xl--line-height: 1;\n  --text-9xl: 8rem;\n  --text-9xl--line-height: 1;\n\n  --font-weight-thin: 100;\n  --font-weight-extralight: 200;\n  --font-weight-light: 300;\n  --font-weight-normal: 400;\n  --font-weight-medium: 500;\n  --font-weight-semibold: 600;\n  --font-weight-bold: 700;\n  --font-weight-extrabold: 800;\n  --font-weight-black: 900;\n\n  --tracking-tighter: -0.05em;\n  --tracking-tight: -0.025em;\n  --tracking-normal: 0em;\n  --tracking-wide: 0.025em;\n  --tracking-wider: 0.05em;\n  --tracking-widest: 0.1em;\n\n  --leading-tight: 1.25;\n  --leading-snug: 1.375;\n  --leading-normal: 1.5;\n  --leading-relaxed: 1.625;\n  --leading-loose: 2;\n\n  --radius-xs: 0.125rem;\n  --radius-sm: 0.25rem;\n  --radius-md: 0.375rem;\n  --radius-lg: 0.5rem;\n  --radius-xl: 0.75rem;\n  --radius-2xl: 1rem;\n  --radius-3xl: 1.5rem;\n  --radius-4xl: 2rem;\n\n  --shadow-2xs: 0 1px rgb(0 0 0 / 0.05);\n  --shadow-xs: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n  --shadow-sm: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);\n  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\n  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);\n  --shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);\n\n  --inset-shadow-2xs: inset 0 1px rgb(0 0 0 / 0.05);\n  --inset-shadow-xs: inset 0 1px 1px rgb(0 0 0 / 0.05);\n  --inset-shadow-sm: inset 0 2px 4px rgb(0 0 0 / 0.05);\n\n  --drop-shadow-xs: 0 1px 1px rgb(0 0 0 / 0.05);\n  --drop-shadow-sm: 0 1px 2px rgb(0 0 0 / 0.15);\n  --drop-shadow-md: 0 3px 3px rgb(0 0 0 / 0.12);\n  --drop-shadow-lg: 0 4px 4px rgb(0 0 0 / 0.15);\n  --drop-shadow-xl: 0 9px 7px rgb(0 0 0 / 0.1);\n  --drop-shadow-2xl: 0 25px 25px rgb(0 0 0 / 0.15);\n\n  --text-shadow-2xs: 0px 1px 0px rgb(0 0 0 / 0.15);\n  --text-shadow-xs: 0px 1px 1px rgb(0 0 0 / 0.2);\n  --text-shadow-sm:\n    0px 1px 0px rgb(0 0 0 / 0.075), 0px 1px 1px rgb(0 0 0 / 0.075), 0px 2px 2px rgb(0 0 0 / 0.075);\n  --text-shadow-md:\n    0px 1px 1px rgb(0 0 0 / 0.1), 0px 1px 2px rgb(0 0 0 / 0.1), 0px 2px 4px rgb(0 0 0 / 0.1);\n  --text-shadow-lg:\n    0px 1px 2px rgb(0 0 0 / 0.1), 0px 3px 2px rgb(0 0 0 / 0.1), 0px 4px 8px rgb(0 0 0 / 0.1);\n\n  --ease-in: cubic-bezier(0.4, 0, 1, 1);\n  --ease-out: cubic-bezier(0, 0, 0.2, 1);\n  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);\n\n  --animate-spin: spin 1s linear infinite;\n  --animate-ping: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;\n  --animate-pulse: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n  --animate-bounce: bounce 1s infinite;\n\n  @keyframes spin {\n    to {\n      transform: rotate(360deg);\n    }\n  }\n\n  @keyframes ping {\n    75%,\n    100% {\n      transform: scale(2);\n      opacity: 0;\n    }\n  }\n\n  @keyframes pulse {\n    50% {\n      opacity: 0.5;\n    }\n  }\n\n  @keyframes bounce {\n    0%,\n    100% {\n      transform: translateY(-25%);\n      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);\n    }\n\n    50% {\n      transform: none;\n      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n    }\n  }\n\n  --blur-xs: 4px;\n  --blur-sm: 8px;\n  --blur-md: 12px;\n  --blur-lg: 16px;\n  --blur-xl: 24px;\n  --blur-2xl: 40px;\n  --blur-3xl: 64px;\n\n  --perspective-dramatic: 100px;\n  --perspective-near: 300px;\n  --perspective-normal: 500px;\n  --perspective-midrange: 800px;\n  --perspective-distant: 1200px;\n\n  --aspect-video: 16 / 9;\n\n  --default-transition-duration: 150ms;\n  --default-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  --default-font-family: --theme(--font-sans, initial);\n  --default-font-feature-settings: --theme(--font-sans--font-feature-settings, initial);\n  --default-font-variation-settings: --theme(--font-sans--font-variation-settings, initial);\n  --default-mono-font-family: --theme(--font-mono, initial);\n  --default-mono-font-feature-settings: --theme(--font-mono--font-feature-settings, initial);\n  --default-mono-font-variation-settings: --theme(--font-mono--font-variation-settings, initial);\n}\n\n/* Deprecated */\n@theme default inline reference {\n  --blur: 8px;\n  --shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);\n  --shadow-inner: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);\n  --drop-shadow: 0 1px 2px rgb(0 0 0 / 0.1), 0 1px 1px rgb(0 0 0 / 0.06);\n  --radius: 0.25rem;\n  --max-width-prose: 65ch;\n}\n";

  // node_modules/tailwindcss/utilities.css
  var utilities_default = "@tailwind utilities;\n";

  // node_modules/tw-animate-css/dist/tw-animate.css
  var tw_animate_default = '@property --tw-animation-delay{syntax:"*";inherits:false;initial-value:0s}@property --tw-animation-direction{syntax:"*";inherits:false;initial-value:normal}@property --tw-animation-duration{syntax:"*";inherits:false}@property --tw-animation-fill-mode{syntax:"*";inherits:false;initial-value:none}@property --tw-animation-iteration-count{syntax:"*";inherits:false;initial-value:1}@property --tw-enter-blur{syntax:"*";inherits:false;initial-value:0}@property --tw-enter-opacity{syntax:"*";inherits:false;initial-value:1}@property --tw-enter-rotate{syntax:"*";inherits:false;initial-value:0}@property --tw-enter-scale{syntax:"*";inherits:false;initial-value:1}@property --tw-enter-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-enter-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-exit-blur{syntax:"*";inherits:false;initial-value:0}@property --tw-exit-opacity{syntax:"*";inherits:false;initial-value:1}@property --tw-exit-rotate{syntax:"*";inherits:false;initial-value:0}@property --tw-exit-scale{syntax:"*";inherits:false;initial-value:1}@property --tw-exit-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-exit-translate-y{syntax:"*";inherits:false;initial-value:0}@theme inline{--animation-delay-0: 0s; --animation-delay-75: 75ms; --animation-delay-100: .1s; --animation-delay-150: .15s; --animation-delay-200: .2s; --animation-delay-300: .3s; --animation-delay-500: .5s; --animation-delay-700: .7s; --animation-delay-1000: 1s; --animation-repeat-0: 0; --animation-repeat-1: 1; --animation-repeat-infinite: infinite; --animation-direction-normal: normal; --animation-direction-reverse: reverse; --animation-direction-alternate: alternate; --animation-direction-alternate-reverse: alternate-reverse; --animation-fill-mode-none: none; --animation-fill-mode-forwards: forwards; --animation-fill-mode-backwards: backwards; --animation-fill-mode-both: both; --percentage-0: 0; --percentage-5: .05; --percentage-10: .1; --percentage-15: .15; --percentage-20: .2; --percentage-25: .25; --percentage-30: .3; --percentage-35: .35; --percentage-40: .4; --percentage-45: .45; --percentage-50: .5; --percentage-55: .55; --percentage-60: .6; --percentage-65: .65; --percentage-70: .7; --percentage-75: .75; --percentage-80: .8; --percentage-85: .85; --percentage-90: .9; --percentage-95: .95; --percentage-100: 1; --percentage-translate-full: 1; --animate-in: enter var(--tw-animation-duration,var(--tw-duration,.15s))var(--tw-ease,ease)var(--tw-animation-delay,0s)var(--tw-animation-iteration-count,1)var(--tw-animation-direction,normal)var(--tw-animation-fill-mode,none); --animate-out: exit var(--tw-animation-duration,var(--tw-duration,.15s))var(--tw-ease,ease)var(--tw-animation-delay,0s)var(--tw-animation-iteration-count,1)var(--tw-animation-direction,normal)var(--tw-animation-fill-mode,none); @keyframes enter { from { opacity: var(--tw-enter-opacity,1); transform: translate3d(var(--tw-enter-translate-x,0),var(--tw-enter-translate-y,0),0)scale3d(var(--tw-enter-scale,1),var(--tw-enter-scale,1),var(--tw-enter-scale,1))rotate(var(--tw-enter-rotate,0)); filter: blur(var(--tw-enter-blur,0)); }}@keyframes exit { to { opacity: var(--tw-exit-opacity,1); transform: translate3d(var(--tw-exit-translate-x,0),var(--tw-exit-translate-y,0),0)scale3d(var(--tw-exit-scale,1),var(--tw-exit-scale,1),var(--tw-exit-scale,1))rotate(var(--tw-exit-rotate,0)); filter: blur(var(--tw-exit-blur,0)); }}--animate-accordion-down: accordion-down var(--tw-animation-duration,var(--tw-duration,.2s))var(--tw-ease,ease-out)var(--tw-animation-delay,0s)var(--tw-animation-iteration-count,1)var(--tw-animation-direction,normal)var(--tw-animation-fill-mode,none); --animate-accordion-up: accordion-up var(--tw-animation-duration,var(--tw-duration,.2s))var(--tw-ease,ease-out)var(--tw-animation-delay,0s)var(--tw-animation-iteration-count,1)var(--tw-animation-direction,normal)var(--tw-animation-fill-mode,none); --animate-collapsible-down: collapsible-down var(--tw-animation-duration,var(--tw-duration,.2s))var(--tw-ease,ease-out)var(--tw-animation-delay,0s)var(--tw-animation-iteration-count,1)var(--tw-animation-direction,normal)var(--tw-animation-fill-mode,none); --animate-collapsible-up: collapsible-up var(--tw-animation-duration,var(--tw-duration,.2s))var(--tw-ease,ease-out)var(--tw-animation-delay,0s)var(--tw-animation-iteration-count,1)var(--tw-animation-direction,normal)var(--tw-animation-fill-mode,none); @keyframes accordion-down { from { height: 0; }to { height: var(--radix-accordion-content-height,var(--bits-accordion-content-height,var(--reka-accordion-content-height,var(--kb-accordion-content-height,var(--ngp-accordion-content-height,auto))))); }}@keyframes accordion-up { from { height: var(--radix-accordion-content-height,var(--bits-accordion-content-height,var(--reka-accordion-content-height,var(--kb-accordion-content-height,var(--ngp-accordion-content-height,auto))))); }to { height: 0; }}@keyframes collapsible-down { from { height: 0; }to { height: var(--radix-collapsible-content-height,var(--bits-collapsible-content-height,var(--reka-collapsible-content-height,var(--kb-collapsible-content-height,auto)))); }}@keyframes collapsible-up { from { height: var(--radix-collapsible-content-height,var(--bits-collapsible-content-height,var(--reka-collapsible-content-height,var(--kb-collapsible-content-height,auto)))); }to { height: 0; }}--animate-caret-blink: caret-blink 1.25s ease-out infinite; @keyframes caret-blink { 0%,70%,100% { opacity: 1; }20%,50% { opacity: 0; }}}@utility animation-duration-*{--tw-animation-duration: calc(--value(number)*1ms); --tw-animation-duration: --value(--animation-duration-*,[duration],"initial",[*]); animation-duration: calc(--value(number)*1ms); animation-duration: --value(--animation-duration-*,[duration],"initial",[*]);}@utility delay-*{animation-delay: calc(--value(number)*1ms); animation-delay: --value(--animation-delay-*,[duration],"initial",[*]); --tw-animation-delay: calc(--value(number)*1ms); --tw-animation-delay: --value(--animation-delay-*,[duration],"initial",[*]);}@utility repeat-*{animation-iteration-count: --value(--animation-repeat-*,number,"initial",[*]); --tw-animation-iteration-count: --value(--animation-repeat-*,number,"initial",[*]);}@utility direction-*{animation-direction: --value(--animation-direction-*,"initial",[*]); --tw-animation-direction: --value(--animation-direction-*,"initial",[*]);}@utility fill-mode-*{animation-fill-mode: --value(--animation-fill-mode-*,"initial",[*]); --tw-animation-fill-mode: --value(--animation-fill-mode-*,"initial",[*]);}@utility running{animation-play-state: running;}@utility paused{animation-play-state: paused;}@utility play-state-*{animation-play-state: --value("initial",[*]);}@utility blur-in{--tw-enter-blur: 20px;}@utility blur-in-*{--tw-enter-blur: calc(--value(number)*1px); --tw-enter-blur: --value(--blur-*,[*]);}@utility blur-out{--tw-exit-blur: 20px;}@utility blur-out-*{--tw-exit-blur: calc(--value(number)*1px); --tw-exit-blur: --value(--blur-*,[*]);}@utility fade-in{--tw-enter-opacity: 0;}@utility fade-in-*{--tw-enter-opacity: calc(--value(number)/100); --tw-enter-opacity: --value(--percentage-*,[*]);}@utility fade-out{--tw-exit-opacity: 0;}@utility fade-out-*{--tw-exit-opacity: calc(--value(number)/100); --tw-exit-opacity: --value(--percentage-*,[*]);}@utility zoom-in{--tw-enter-scale: 0;}@utility zoom-in-*{--tw-enter-scale: calc(--value(number)*1%); --tw-enter-scale: calc(--value(ratio)); --tw-enter-scale: --value(--percentage-*,[*]);}@utility -zoom-in-*{--tw-enter-scale: calc(--value(number)*-1%); --tw-enter-scale: calc(--value(ratio)*-1); --tw-enter-scale: --value(--percentage-*,[*]);}@utility zoom-out{--tw-exit-scale: 0;}@utility zoom-out-*{--tw-exit-scale: calc(--value(number)*1%); --tw-exit-scale: calc(--value(ratio)); --tw-exit-scale: --value(--percentage-*,[*]);}@utility -zoom-out-*{--tw-exit-scale: calc(--value(number)*-1%); --tw-exit-scale: calc(--value(ratio)*-1); --tw-exit-scale: --value(--percentage-*,[*]);}@utility spin-in{--tw-enter-rotate: 30deg;}@utility spin-in-*{--tw-enter-rotate: calc(--value(number)*1deg); --tw-enter-rotate: calc(--value(ratio)*360deg); --tw-enter-rotate: --value(--rotate-*,[*]);}@utility -spin-in{--tw-enter-rotate: -30deg;}@utility -spin-in-*{--tw-enter-rotate: calc(--value(number)*-1deg); --tw-enter-rotate: calc(--value(ratio)*-360deg); --tw-enter-rotate: --value(--rotate-*,[*]);}@utility spin-out{--tw-exit-rotate: 30deg;}@utility spin-out-*{--tw-exit-rotate: calc(--value(number)*1deg); --tw-exit-rotate: calc(--value(ratio)*360deg); --tw-exit-rotate: --value(--rotate-*,[*]);}@utility -spin-out{--tw-exit-rotate: -30deg;}@utility -spin-out-*{--tw-exit-rotate: calc(--value(number)*-1deg); --tw-exit-rotate: calc(--value(ratio)*-360deg); --tw-exit-rotate: --value(--rotate-*,[*]);}@utility slide-in-from-top{--tw-enter-translate-y: -100%;}@utility slide-in-from-top-*{--tw-enter-translate-y: calc(--value(integer)*var(--spacing)*-1); --tw-enter-translate-y: calc(--value(--percentage-*,--percentage-translate-*)*-100%); --tw-enter-translate-y: calc(--value(ratio)*-100%); --tw-enter-translate-y: calc(--value(--translate-*,[percentage],[length])*-1);}@utility slide-in-from-bottom{--tw-enter-translate-y: 100%;}@utility slide-in-from-bottom-*{--tw-enter-translate-y: calc(--value(integer)*var(--spacing)); --tw-enter-translate-y: calc(--value(--percentage-*,--percentage-translate-*)*100%); --tw-enter-translate-y: calc(--value(ratio)*100%); --tw-enter-translate-y: --value(--translate-*,[percentage],[length]);}@utility slide-in-from-left{--tw-enter-translate-x: -100%;}@utility slide-in-from-left-*{--tw-enter-translate-x: calc(--value(integer)*var(--spacing)*-1); --tw-enter-translate-x: calc(--value(--percentage-*,--percentage-translate-*)*-100%); --tw-enter-translate-x: calc(--value(ratio)*-100%); --tw-enter-translate-x: calc(--value(--translate-*,[percentage],[length])*-1);}@utility slide-in-from-right{--tw-enter-translate-x: 100%;}@utility slide-in-from-right-*{--tw-enter-translate-x: calc(--value(integer)*var(--spacing)); --tw-enter-translate-x: calc(--value(--percentage-*,--percentage-translate-*)*100%); --tw-enter-translate-x: calc(--value(ratio)*100%); --tw-enter-translate-x: --value(--translate-*,[percentage],[length]);}@utility slide-in-from-start{&:dir(ltr){ --tw-enter-translate-x: -100%; }&:dir(rtl){ --tw-enter-translate-x: 100%; }}@utility slide-in-from-start-*{&:where(:dir(ltr),[dir="ltr"],[dir="ltr"]*){ --tw-enter-translate-x: calc(--value(integer)*var(--spacing)*-1); --tw-enter-translate-x: calc(--value(--percentage-*,--percentage-translate-*)*-100%); --tw-enter-translate-x: calc(--value(ratio)*-100%); --tw-enter-translate-x: calc(--value(--translate-*,[percentage],[length])*-1); }&:where(:dir(rtl),[dir="rtl"],[dir="rtl"]*){ --tw-enter-translate-x: calc(--value(integer)*var(--spacing)); --tw-enter-translate-x: calc(--value(--percentage-*,--percentage-translate-*)*100%); --tw-enter-translate-x: calc(--value(ratio)*100%); --tw-enter-translate-x: --value(--translate-*,[percentage],[length]); }}@utility slide-in-from-end{&:dir(ltr){ --tw-enter-translate-x: 100%; }&:dir(rtl){ --tw-enter-translate-x: -100%; }}@utility slide-in-from-end-*{&:where(:dir(ltr),[dir="ltr"],[dir="ltr"]*){ --tw-enter-translate-x: calc(--value(integer)*var(--spacing)); --tw-enter-translate-x: calc(--value(--percentage-*,--percentage-translate-*)*100%); --tw-enter-translate-x: calc(--value(ratio)*100%); --tw-enter-translate-x: --value(--translate-*,[percentage],[length]); }&:where(:dir(rtl),[dir="rtl"],[dir="rtl"]*){ --tw-enter-translate-x: calc(--value(integer)*var(--spacing)*-1); --tw-enter-translate-x: calc(--value(--percentage-*,--percentage-translate-*)*-100%); --tw-enter-translate-x: calc(--value(ratio)*-100%); --tw-enter-translate-x: calc(--value(--translate-*,[percentage],[length])*-1); }}@utility slide-out-to-top{--tw-exit-translate-y: -100%;}@utility slide-out-to-top-*{--tw-exit-translate-y: calc(--value(integer)*var(--spacing)*-1); --tw-exit-translate-y: calc(--value(--percentage-*,--percentage-translate-*)*-100%); --tw-exit-translate-y: calc(--value(ratio)*-100%); --tw-exit-translate-y: calc(--value(--translate-*,[percentage],[length])*-1);}@utility slide-out-to-bottom{--tw-exit-translate-y: 100%;}@utility slide-out-to-bottom-*{--tw-exit-translate-y: calc(--value(integer)*var(--spacing)); --tw-exit-translate-y: calc(--value(--percentage-*,--percentage-translate-*)*100%); --tw-exit-translate-y: calc(--value(ratio)*100%); --tw-exit-translate-y: --value(--translate-*,[percentage],[length]);}@utility slide-out-to-left{--tw-exit-translate-x: -100%;}@utility slide-out-to-left-*{--tw-exit-translate-x: calc(--value(integer)*var(--spacing)*-1); --tw-exit-translate-x: calc(--value(--percentage-*,--percentage-translate-*)*-100%); --tw-exit-translate-x: calc(--value(ratio)*-100%); --tw-exit-translate-x: calc(--value(--translate-*,[percentage],[length])*-1);}@utility slide-out-to-right{--tw-exit-translate-x: 100%;}@utility slide-out-to-right-*{--tw-exit-translate-x: calc(--value(integer)*var(--spacing)); --tw-exit-translate-x: calc(--value(--percentage-*,--percentage-translate-*)*100%); --tw-exit-translate-x: calc(--value(ratio)*100%); --tw-exit-translate-x: --value(--translate-*,[percentage],[length]);}@utility slide-out-to-start{&:dir(ltr){ --tw-exit-translate-x: -100%; }&:dir(rtl){ --tw-exit-translate-x: 100%; }}@utility slide-out-to-start-*{&:where(:dir(ltr),[dir="ltr"],[dir="ltr"]*){ --tw-exit-translate-x: calc(--value(integer)*var(--spacing)*-1); --tw-exit-translate-x: calc(--value(--percentage-*,--percentage-translate-*)*-100%); --tw-exit-translate-x: calc(--value(ratio)*-100%); --tw-exit-translate-x: calc(--value(--translate-*,[percentage],[length])*-1); }&:where(:dir(rtl),[dir="rtl"],[dir="rtl"]*){ --tw-exit-translate-x: calc(--value(integer)*var(--spacing)); --tw-exit-translate-x: calc(--value(--percentage-*,--percentage-translate-*)*100%); --tw-exit-translate-x: calc(--value(ratio)*100%); --tw-exit-translate-x: --value(--translate-*,[percentage],[length]); }}@utility slide-out-to-end{&:dir(ltr){ --tw-exit-translate-x: 100%; }&:dir(rtl){ --tw-exit-translate-x: -100%; }}@utility slide-out-to-end-*{&:where(:dir(ltr),[dir="ltr"],[dir="ltr"]*){ --tw-exit-translate-x: calc(--value(integer)*var(--spacing)); --tw-exit-translate-x: calc(--value(--percentage-*,--percentage-translate-*)*100%); --tw-exit-translate-x: calc(--value(ratio)*100%); --tw-exit-translate-x: --value(--translate-*,[percentage],[length]); }&:where(:dir(rtl),[dir="rtl"],[dir="rtl"]*){ --tw-exit-translate-x: calc(--value(integer)*var(--spacing)*-1); --tw-exit-translate-x: calc(--value(--percentage-*,--percentage-translate-*)*-100%); --tw-exit-translate-x: calc(--value(ratio)*-100%); --tw-exit-translate-x: calc(--value(--translate-*,[percentage],[length])*-1); }}';

  // node_modules/shadcn/dist/tailwind.css
  var tailwind_default = '@theme inline {\n  @keyframes accordion-down {\n    from {\n      height: 0;\n    }\n    to {\n      height: var(\n        --radix-accordion-content-height,\n        var(--accordion-panel-height, auto)\n      );\n    }\n  }\n\n  @keyframes accordion-up {\n    from {\n      height: var(\n        --radix-accordion-content-height,\n        var(--accordion-panel-height, auto)\n      );\n    }\n    to {\n      height: 0;\n    }\n  }\n}\n\n/* Custom variants */\n@custom-variant data-open {\n  &:where([data-state="open"]),\n  &:where([data-open]:not([data-open="false"])) {\n    @slot;\n  }\n}\n\n@custom-variant data-closed {\n  &:where([data-state="closed"]),\n  &:where([data-closed]:not([data-closed="false"])) {\n    @slot;\n  }\n}\n\n@custom-variant data-checked {\n  &:where([data-state="checked"]),\n  &:where([data-checked]:not([data-checked="false"])) {\n    @slot;\n  }\n}\n\n@custom-variant data-unchecked {\n  &:where([data-state="unchecked"]),\n  &:where([data-unchecked]:not([data-unchecked="false"])) {\n    @slot;\n  }\n}\n\n@custom-variant data-selected {\n  &:where([data-selected="true"]) {\n    @slot;\n  }\n}\n\n@custom-variant data-disabled {\n  &:where([data-disabled="true"]),\n  &:where([data-disabled]:not([data-disabled="false"])) {\n    @slot;\n  }\n}\n\n@custom-variant data-active {\n  &:where([data-state="active"]),\n  &:where([data-active]:not([data-active="false"])) {\n    @slot;\n  }\n}\n\n@custom-variant data-horizontal {\n  &:where([data-orientation="horizontal"]) {\n    @slot;\n  }\n}\n\n@custom-variant data-vertical {\n  &:where([data-orientation="vertical"]) {\n    @slot;\n  }\n}\n\n@utility no-scrollbar {\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n\n  &::-webkit-scrollbar {\n    display: none;\n  }\n}\n';

  // lib/playground/tailwind-worker.ts
  var themeConfig = `
@import "tailwindcss";
@import "tw-animate-css";
@import "shadcn/tailwind.css";

@custom-variant dark (&:is(.dark *));

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: system-ui, -apple-system, sans-serif;
  --font-mono: ui-monospace, monospace;
  --color-sidebar-ring: var(--sidebar-ring);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar: var(--sidebar);
  --color-chart-5: var(--chart-5);
  --color-chart-4: var(--chart-4);
  --color-chart-3: var(--chart-3);
  --color-chart-2: var(--chart-2);
  --color-chart-1: var(--chart-1);
  --color-ring: var(--ring);
  --color-input: var(--input);
  --color-border: var(--border);
  --color-destructive: var(--destructive);
  --color-accent-foreground: var(--accent-foreground);
  --color-accent: var(--accent);
  --color-muted-foreground: var(--muted-foreground);
  --color-muted: var(--muted);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-secondary: var(--secondary);
  --color-primary-foreground: var(--primary-foreground);
  --color-primary: var(--primary);
  --color-popover-foreground: var(--popover-foreground);
  --color-popover: var(--popover);
  --color-card-foreground: var(--card-foreground);
  --color-card: var(--card);
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --radius-2xl: calc(var(--radius) + 8px);
  --radius-3xl: calc(var(--radius) + 12px);
  --radius-4xl: calc(var(--radius) + 16px);
}

* {
  border-color: var(--color-border);
  outline-color: color-mix(in oklch, var(--color-ring) 50%, transparent);
}

body {
  background-color: var(--color-background);
  color: var(--color-foreground);
}
`;
  var stylesheets = {
    tailwindcss: tailwindcss_default,
    "tailwindcss/preflight": preflight_default,
    "tailwindcss/theme": theme_default,
    "tailwindcss/utilities": utilities_default,
    "tw-animate-css": tw_animate_default,
    "shadcn/tailwind.css": tailwind_default
  };
  var compiler = null;
  var previousClasses = [];
  var previousCss = "";
  async function init() {
    compiler = await rf(themeConfig, {
      base: "/",
      loadStylesheet: async (id, base) => {
        const content = stylesheets[id];
        if (!content) throw new Error(`Unknown stylesheet: ${id}`);
        return { path: id, base, content };
      },
      loadModule: async () => {
        throw new Error("Loading modules is not supported in the playground");
      }
    });
  }
  self.onmessage = async (e) => {
    if (e.data.type !== "compile") return;
    const { candidates, id } = e.data;
    try {
      if (!compiler) {
        throw new Error("Compiler not initialized");
      }
      if (candidates.length > 0 && candidates.every((c) => previousClasses.includes(c))) {
        self.postMessage({
          type: "css",
          css: previousCss,
          id
        });
        return;
      }
      const css = compiler.build(candidates);
      previousClasses = candidates;
      previousCss = css;
      self.postMessage({ type: "css", css, id });
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      self.postMessage({ type: "error", message, id });
    }
  };
  init().then(() => {
    self.postMessage({ type: "ready" });
  }).catch((err) => {
    const message = err instanceof Error ? err.message : String(err);
    self.postMessage({ type: "error", message });
  });
})();
