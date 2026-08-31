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

function projectRoot() {
  return process.cwd();
}

function b64buf(b64) {
  return Buffer.from(String(b64), "base64");
}

function clampNum(v, min, max, fallback) {
  const n = Number(v);
  if (!Number.isFinite(n)) return fallback;
  return Math.max(min, Math.min(max, Math.round(n)));
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

export async function POST(req) {
  try {
    const body = await req.json().catch(() => ({}));
    const { primary, sections, sectionTitles, font, favicon, logo, heroSlides } = body || {};
    const siteName = typeof body.siteName === "string" ? body.siteName.slice(0, 80) : null;

    if (!isHexColor(primary)) {
      return NextResponse.json({ ok: false, error: "رنگ اصلی نامعتبر است." }, { status: 400 });
    }

    const cleanSections = {};
    if (sections && typeof sections === "object") {
      for (const k of SECTION_KEYS) {
        if (typeof sections[k] === "boolean") cleanSections[k] = sections[k];
      }
    }

    const root = projectRoot();
    const results = [];

    // Load current config (source of truth for "keep" assets).
    const cfgPath = path.join(root, "lib", "site-config.json");
    let cfg = {};
    try {
      cfg = JSON.parse(await fs.readFile(cfgPath, "utf8"));
    } catch {}

    // ---- site name ----
    if (siteName !== null) cfg.siteName = siteName;
    else if (cfg.siteName === undefined) cfg.siteName = "دیتاکالا";

    // ---- primary ----
    cfg.primary = primary.toLowerCase();

    // ---- font ----
    let fontRef = cfg.font || null;
    if (font === null) {
      fontRef = null;
      cfg.font = null;
    } else if (font && typeof font === "object" && font.base64 && font.name) {
      const ext = String(font.name.split(".").pop() || "").toLowerCase();
      const format = FONT_FORMATS[ext];
      if (!format) {
        return NextResponse.json({ ok: false, error: "فرمت فونت پشتیبانی نمی‌شود." }, { status: 400 });
      }
      const buf = b64buf(font.base64);
      if (buf.length > 15 * 1024 * 1024) {
        return NextResponse.json({ ok: false, error: "حجم فونت بیش از حد مجاز (۱۵MB) است." }, { status: 400 });
      }
      const safeName = "custom-font." + ext;
      await fs.writeFile(path.join(root, "public", "fonts", safeName), buf);
      fontRef = { file: `/fonts/${safeName}`, family: "DkCustom", format, ext };
      cfg.font = fontRef;
      results.push("custom font");
    } // else: "keep" → fontRef/cfg.font untouched

    // ---- favicon ----
    if (favicon === null) {
      cfg.favicon = null;
    } else if (favicon && typeof favicon === "object" && favicon.base64) {
      const ext = String((favicon.ext || "png")).toLowerCase();
      if (!IMG_EXTS.includes(ext)) {
        return NextResponse.json({ ok: false, error: "فرمت آیکون پشتیبانی نمی‌شود." }, { status: 400 });
      }
      const buf = b64buf(favicon.base64);
      if (buf.length > 5 * 1024 * 1024) {
        return NextResponse.json({ ok: false, error: "حجم آیکون بیش از حد مجاز (۵MB) است." }, { status: 400 });
      }
      const safeName = "favicon-custom." + ext;
      await fs.writeFile(path.join(root, "public", safeName), buf);
      cfg.favicon = { file: `/${safeName}`, ext };
      results.push("favicon");
    } // else keep

    // ---- logo ----
    if (logo === null) {
      cfg.logo = null;
    } else if (logo && typeof logo === "object" && logo.base64) {
      const ext = String((logo.ext || "png")).toLowerCase();
      if (!IMG_EXTS.includes(ext) || ext === "ico") {
        return NextResponse.json({ ok: false, error: "فرمت لوگو پشتیبانی نمی‌شود." }, { status: 400 });
      }
      const buf = b64buf(logo.base64);
      if (buf.length > 5 * 1024 * 1024) {
        return NextResponse.json({ ok: false, error: "حجم لوگو بیش از حد مجاز (۵MB) است." }, { status: 400 });
      }
      const safeName = "logo-custom." + ext;
      await fs.mkdir(path.join(root, "public", "brand"), { recursive: true });
      await fs.writeFile(path.join(root, "public", "brand", safeName), buf);
      cfg.logo = { file: `/brand/${safeName}`, ext };
      results.push("logo");
    } // else keep

    // ---- hero slides ----
    if (heroSlides === null) {
      cfg.heroSlides = null;
    } else if (Array.isArray(heroSlides)) {
      await fs.mkdir(path.join(root, "public", "uploads"), { recursive: true });
      const finalSlides = [];
      for (let i = 0; i < heroSlides.length; i++) {
        const s = heroSlides[i] || {};
        if (s.base64) {
          const ext = String((s.ext || "jpg")).toLowerCase();
          if (!IMG_EXTS.includes(ext) || ext === "ico") {
            return NextResponse.json({ ok: false, error: "فرمت تصویر اسلایدر پشتیبانی نمی‌شود." }, { status: 400 });
          }
          const buf = b64buf(s.base64);
          if (buf.length > 10 * 1024 * 1024) {
            return NextResponse.json({ ok: false, error: "حجم تصویر اسلایدر بیش از حد مجاز (۱۰MB) است." }, { status: 400 });
          }
          const safeName = `hero-${i}.${ext}`;
          await fs.writeFile(path.join(root, "public", "uploads", safeName), buf);
          finalSlides.push({
            img: `/uploads/${safeName}`,
            href: typeof s.href === "string" ? s.href : "#",
            title: typeof s.title === "string" ? s.title.slice(0, 120) : "",
            sub: typeof s.sub === "string" ? s.sub.slice(0, 200) : "",
          });
        } else if (typeof s.img === "string") {
          finalSlides.push({
            img: s.img,
            href: typeof s.href === "string" ? s.href : "#",
            title: typeof s.title === "string" ? s.title.slice(0, 120) : "",
            sub: typeof s.sub === "string" ? s.sub.slice(0, 200) : "",
          });
        }
      }
      cfg.heroSlides = finalSlides.length ? finalSlides : null;
      results.push("hero slides");
    } // else keep

    // ---- sections + titles ----
    cfg.sections = cleanSections;
    cfg.sectionTitles = sanitizeTitles(sectionTitles);

    // ---- write dk-theme.css ----
    const lines = ['/* Datakala theme — generated by Control Panel "Apply". */', ""];
    if (fontRef) {
      lines.push(
        `@font-face{font-family:"${fontRef.family}";src:url("${fontRef.file}") format("${fontRef.format}");font-display:swap}`,
        ""
      );
    }
    lines.push(":root {");
    lines.push(`  --red: ${primary.toLowerCase()};`);
    lines.push(`  --red-h: ${darken(primary, 0.12).toLowerCase()};`);
    lines.push(`  --red-soft: ${tint(primary, 0.9).toLowerCase()};`);
    if (fontRef) {
      lines.push(`  --font: "${fontRef.family}", ${FONT_FALLBACK};`);
    }
    lines.push("}", "");
    await fs.writeFile(path.join(root, "app", "dk-theme.css"), lines.join("\n"), "utf8");
    results.push("dk-theme.css");

    // ---- write site-config.json ----
    await fs.writeFile(cfgPath, JSON.stringify(cfg, null, 2) + "\n", "utf8");
    results.push("site-config.json");

    return NextResponse.json({ ok: true, updated: results });
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: "خطای سرور: " + String(err && err.message ? err.message : err) },
      { status: 500 }
    );
  }
}
