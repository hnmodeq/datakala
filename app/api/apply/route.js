import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { darken, tint, isHexColor } from "@/lib/color";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const FONT_FORMATS = { ttf: "truetype", otf: "opentype", woff: "woff", woff2: "woff2" };
const FONT_FALLBACK = 'Vazirmatn, Tahoma, "Segoe UI", Arial, sans-serif';
const IMG_EXTS = ["png", "jpg", "jpeg", "gif", "webp", "svg", "ico"];

const SECTION_KEYS = [
  "topbar", "header", "hero", "hero-categories", "new-products", "recommendations",
  "platforms", "solutions", "certificates", "blog", "contacts", "footer", "subfooter", "subfooter2",
];
const TITLE_KEYS = ["new-products", "recommendations", "platforms", "solutions", "certificates", "blog", "contacts"];
const COLOR_KEYS = ["primary", "heading", "text", "muted", "faded", "border", "background", "star", "success", "accent"];

function projectRoot() { return process.cwd(); }
function b64buf(b64) { return Buffer.from(String(b64), "base64"); }
function clampNum(v, min, max, fallback) { const n = Number(v); return Number.isFinite(n) ? Math.max(min, Math.min(max, Math.round(n))) : fallback; }

function sanitizeColors(input) {
  const out = {};
  for (const k of COLOR_KEYS) {
    const v = input && input[k];
    out[k] = isHexColor(v) ? String(v).toLowerCase() : undefined;
  }
  return out;
}
function sanitizeTitles(input) {
  const out = {};
  if (input && typeof input === "object") {
    for (const k of TITLE_KEYS) {
      const t = input[k];
      if (!t || typeof t !== "object") continue;
      out[k] = {
        text: typeof t.text === "string" ? t.text.slice(0, 120) : "",
        size: clampNum(t.size, 10, 120, 22),
        weight: clampNum(t.weight, 100, 900, 600),
      };
    }
  }
  return out;
}
function sanitizeStr(v, max) { return typeof v === "string" ? v.slice(0, max) : ""; }

function sanitizeNav(input) {
  if (!Array.isArray(input)) return undefined;
  return input.slice(0, 30).map((it) => {
    if (it.kind === "mega") return { kind: "mega", label: sanitizeStr(it.label, 60) };
    if (it.kind === "dropdown") return { kind: "dropdown", key: ["solutions", "services", "resources"].includes(it.key) ? it.key : "solutions", label: sanitizeStr(it.label, 60) };
    return { kind: "link", label: sanitizeStr(it.label, 60), href: sanitizeStr(it.href, 200) || "#" };
  });
}
function sanitizeContacts(input) {
  if (!Array.isArray(input)) return undefined;
  return input.slice(0, 20).map((c) => ({
    img: sanitizeStr(c.img, 300),
    title: sanitizeStr(c.title, 120),
    text: sanitizeStr(c.text, 300),
    href: sanitizeStr(c.href, 200) || "/contact",
  })).filter((c) => c.title);
}
function sanitizeFooter(input) {
  if (!input || typeof input !== "object") return undefined;
  const columns = Array.isArray(input.columns) ? input.columns.slice(0, 8).map((col) => ({
    title: sanitizeStr(col.title, 80),
    links: Array.isArray(col.links) ? col.links.slice(0, 30).map((l) => ({ label: sanitizeStr(l.label, 120), href: sanitizeStr(l.href, 200) || "#" })) : [],
  })) : [];
  return {
    columns,
    newsletter: input.newsletter !== false,
    social: input.social !== false,
    apps: input.apps !== false,
  };
}
function sanitizeSubFooter2(input) {
  if (!input || typeof input !== "object") return undefined;
  return {
    copyright: sanitizeStr(input.copyright, 300),
    companyName: sanitizeStr(input.companyName, 120),
    companyHref: sanitizeStr(input.companyHref, 200) || "#",
    copyrightSuffix: sanitizeStr(input.copyrightSuffix, 120),
    designerText: sanitizeStr(input.designerText, 120),
    designerName: sanitizeStr(input.designerName, 120),
    designerHref: sanitizeStr(input.designerHref, 200) || "#",
  };
}
function sanitizeLayout(input) {
  return {
    heroCategoriesRows: clampNum(input && input.heroCategoriesRows, 1, 4, 1),
    newProductsRows: clampNum(input && input.newProductsRows, 1, 4, 1),
    recommendationsRows: clampNum(input && input.recommendationsRows, 1, 4, 1),
  };
}

export async function POST(req) {
  try {
    const body = await req.json().catch(() => ({}));
    const { sections, sectionTitles, font, favicon, logo, heroSlides, nav, contacts, footer, subFooter2, layout, widgets } = body || {};
    const siteName = typeof body.siteName === "string" ? body.siteName.slice(0, 80) : null;
    const colors = sanitizeColors(body.colors);
    if (!colors.primary) return NextResponse.json({ ok: false, error: "رنگ اصلی نامعتبر است." }, { status: 400 });

    const cleanSections = {};
    if (sections && typeof sections === "object") for (const k of SECTION_KEYS) if (typeof sections[k] === "boolean") cleanSections[k] = sections[k];

    const root = projectRoot();
    const results = [];

    const cfgPath = path.join(root, "lib", "site-config.json");
    let cfg = {};
    try { cfg = JSON.parse(await fs.readFile(cfgPath, "utf8")); } catch {}

    if (siteName !== null) cfg.siteName = siteName;
    else if (cfg.siteName === undefined) cfg.siteName = "دیتاکالا";

    // merge colors (keep valid existing for missing keys)
    cfg.colors = { ...(cfg.colors || {}), ...colors };

    // ---- font ----
    let fontRef = cfg.font || null;
    if (font === null) { fontRef = null; cfg.font = null; }
    else if (font && typeof font === "object" && font.base64 && font.name) {
      const ext = String(font.name.split(".").pop() || "").toLowerCase();
      const format = FONT_FORMATS[ext];
      if (!format) return NextResponse.json({ ok: false, error: "فرمت فونت پشتیبانی نمی‌شود." }, { status: 400 });
      const buf = b64buf(font.base64);
      if (buf.length > 15 * 1024 * 1024) return NextResponse.json({ ok: false, error: "حجم فونت بیش از حد مجاز (۱۵MB) است." }, { status: 400 });
      await fs.writeFile(path.join(root, "public", "fonts", "custom-font." + ext), buf);
      fontRef = { file: `/fonts/custom-font.${ext}`, family: "DkCustom", format, ext };
      cfg.font = fontRef;
      results.push("custom font");
    }

    // ---- favicon / logo ----
    if (favicon === null) cfg.favicon = null;
    else if (favicon && typeof favicon === "object" && favicon.base64) {
      const ext = String(favicon.ext || "png").toLowerCase();
      if (!IMG_EXTS.includes(ext)) return NextResponse.json({ ok: false, error: "فرمت آیکون پشتیبانی نمی‌شود." }, { status: 400 });
      await fs.writeFile(path.join(root, "public", "favicon-custom." + ext), b64buf(favicon.base64));
      cfg.favicon = { file: `/favicon-custom.${ext}`, ext };
      results.push("favicon");
    }
    if (logo === null) cfg.logo = null;
    else if (logo && typeof logo === "object" && logo.base64) {
      const ext = String(logo.ext || "png").toLowerCase();
      if (!IMG_EXTS.includes(ext) || ext === "ico") return NextResponse.json({ ok: false, error: "فرمت لوگو پشتیبانی نمی‌شود." }, { status: 400 });
      await fs.mkdir(path.join(root, "public", "brand"), { recursive: true });
      await fs.writeFile(path.join(root, "public", "brand", "logo-custom." + ext), b64buf(logo.base64));
      cfg.logo = { file: `/brand/logo-custom.${ext}`, ext };
      results.push("logo");
    }

    // ---- hero slides ----
    if (heroSlides === null) cfg.heroSlides = null;
    else if (Array.isArray(heroSlides)) {
      await fs.mkdir(path.join(root, "public", "uploads"), { recursive: true });
      const finalSlides = [];
      for (let i = 0; i < heroSlides.length; i++) {
        const s = heroSlides[i] || {};
        if (s.base64) {
          const ext = String(s.ext || "jpg").toLowerCase();
          if (!IMG_EXTS.includes(ext) || ext === "ico") return NextResponse.json({ ok: false, error: "فرمت تصویر اسلایدر پشتیبانی نمی‌شود." }, { status: 400 });
          await fs.writeFile(path.join(root, "public", "uploads", `hero-${i}.${ext}`), b64buf(s.base64));
          finalSlides.push({ img: `/uploads/hero-${i}.${ext}`, href: sanitizeStr(s.href, 200) || "#", title: sanitizeStr(s.title, 120), sub: sanitizeStr(s.sub, 200) });
        } else if (typeof s.img === "string" && s.img) {
          finalSlides.push({ img: s.img, href: sanitizeStr(s.href, 200) || "#", title: sanitizeStr(s.title, 120), sub: sanitizeStr(s.sub, 200) });
        }
      }
      cfg.heroSlides = finalSlides.length ? finalSlides : null;
      results.push("hero slides");
    }

    // ---- data-driven sections ----
    if (nav !== undefined) cfg.nav = sanitizeNav(nav);
    if (contacts !== undefined) cfg.contacts = sanitizeContacts(contacts);
    if (footer !== undefined) cfg.footer = sanitizeFooter(footer);
    if (subFooter2 !== undefined) cfg.subFooter2 = sanitizeSubFooter2(subFooter2);
    if (layout !== undefined) cfg.layout = sanitizeLayout(layout);
    if (widgets && typeof widgets === "object") {
      cfg.widgets = {
        contact: widgets.contact !== false,
        chat: widgets.chat !== false,
      };
    }
    cfg.sections = cleanSections;
    cfg.sectionTitles = sanitizeTitles(sectionTitles);

    // ---- write dk-theme.css ----
    const lines = ['/* Datakala theme — generated by Control Panel "Apply". */', ""];
    if (fontRef) lines.push(`@font-face{font-family:"${fontRef.family}";src:url("${fontRef.file}") format("${fontRef.format}");font-display:swap}`, "");
    lines.push(":root {");
    lines.push(`  --red: ${colors.primary};`);
    lines.push(`  --red-h: ${darken(colors.primary, 0.12)};`);
    lines.push(`  --red-soft: ${tint(colors.primary, 0.9)};`);
    lines.push(`  --ink: ${colors.heading};`);
    lines.push(`  --ink-2: ${colors.text};`);
    lines.push(`  --muted: ${colors.muted};`);
    lines.push(`  --muted-2: ${colors.faded};`);
    lines.push(`  --line: ${colors.border};`);
    lines.push(`  --bg: ${colors.background};`);
    lines.push(`  --star: ${colors.star};`);
    lines.push(`  --success: ${colors.success};`);
    lines.push(`  --accent: ${colors.accent};`);
    if (fontRef) lines.push(`  --font: "${fontRef.family}", ${FONT_FALLBACK};`);
    lines.push("}", "");
    await fs.writeFile(path.join(root, "app", "dk-theme.css"), lines.join("\n"), "utf8");
    results.push("dk-theme.css");

    await fs.writeFile(cfgPath, JSON.stringify(cfg, null, 2) + "\n", "utf8");
    results.push("site-config.json");

    return NextResponse.json({ ok: true, updated: results });
  } catch (err) {
    return NextResponse.json({ ok: false, error: "خطای سرور: " + String(err && err.message ? err.message : err) }, { status: 500 });
  }
}
