// Color utilities shared by the Control Panel (client) and the /api/apply route (server).
export function hexToRgb(hex) {
  let h = String(hex || "").trim().replace("#", "");
  if (h.length === 3) h = h.split("").map((c) => c + c).join("");
  if (!/^[0-9a-fA-F]{6}$/.test(h)) return null;
  const n = parseInt(h, 16);
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
}

export function rgbToHex({ r, g, b }) {
  const t = (v) => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, "0");
  return `#${t(r)}${t(g)}${t(b)}`;
}

// t = fraction toward hex2 (0..1)
export function mix(hex, hex2, t) {
  const a = hexToRgb(hex);
  const b = hexToRgb(hex2);
  if (!a || !b) return hex;
  return rgbToHex({
    r: a.r + (b.r - a.r) * t,
    g: a.g + (b.g - a.g) * t,
    b: a.b + (b.b - a.b) * t,
  });
}

export function darken(hex, amt) {
  return mix(hex, "#000000", amt);
}

// amt = amount of white blended in (0..1)
export function tint(hex, amt) {
  return mix(hex, "#ffffff", amt);
}

export function isHexColor(str) {
  return !!hexToRgb(str);
}
