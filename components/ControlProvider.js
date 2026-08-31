"use client";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import config from "@/lib/site-config.json";
import { darken, tint } from "@/lib/color";

const Ctx = createContext(null);

const DEFAULT_PRIMARY = config.primary || "#C00000";
const DEFAULT_SECTIONS = config.sections || {};
const DEFAULT_TITLES = config.sectionTitles || {};
const DEFAULT_SITE_NAME = config.siteName || "دیتاکالا";

const FONT_FAMILY = "DkCustom";
const FONT_FORMATS = { ttf: "truetype", otf: "opentype", woff: "woff", woff2: "woff2" };

// Convert a persisted asset ({file, ext}) into runtime state with a URL preview.
function persistedAsset(a) {
  if (!a) return null;
  return { name: a.file.split("/").pop() || "asset", ext: a.ext || "png", preview: a.file, base64: null };
}

function persistedHeroSlides(slides) {
  if (!Array.isArray(slides) || !slides.length) return null;
  return slides.map((s) => ({ img: s.img, href: s.href || "#", title: s.title || "", sub: s.sub || "" }));
}

export function ControlProvider({ children }) {
  const [isAdmin, setIsAdmin] = useState(false);
  const [siteName, setSiteName] = useState(DEFAULT_SITE_NAME);
  const [primary, setPrimary] = useState(DEFAULT_PRIMARY);
  const [sections, setSections] = useState(DEFAULT_SECTIONS);
  const [sectionTitles, setSectionTitles] = useState(DEFAULT_TITLES);
  const [font, setFont] = useState(() => persistedAsset(config.font));
  const [favicon, setFavicon] = useState(() => persistedAsset(config.favicon));
  const [logo, setLogo] = useState(() => persistedAsset(config.logo));
  const [heroSlides, setHeroSlides] = useState(() => persistedHeroSlides(config.heroSlides));

  // ---- auth check ----
  useEffect(() => {
    let alive = true;
    fetch("/api/auth/me")
      .then((r) => r.json())
      .then((d) => alive && setIsAdmin(!!d.ok))
      .catch(() => {});
    return () => { alive = false; };
  }, []);

  // ---- restore lightweight preview state ----
  useEffect(() => {
    try {
      const raw = localStorage.getItem("dk_control");
      if (!raw) return;
      const d = JSON.parse(raw);
      if (d.primary) setPrimary(d.primary);
      if (d.siteName) setSiteName(d.siteName);
      if (d.sections) setSections((s) => ({ ...DEFAULT_SECTIONS, ...s, ...d.sections }));
      if (d.sectionTitles) setSectionTitles((t) => ({ ...DEFAULT_TITLES, ...t, ...d.sectionTitles }));
    } catch {}
  }, []);

  // ---- persist lightweight preview state ----
  useEffect(() => {
    try {
      localStorage.setItem("dk_control", JSON.stringify({ primary, siteName, sections, sectionTitles }));
    } catch {}
  }, [primary, siteName, sections, sectionTitles]);

  // ---- live: browser tab title ----
  useEffect(() => {
    document.title = siteName || "دیتاکالا";
  }, [siteName]);

  // ---- live: CSS custom properties (color + font) ----
  useEffect(() => {
    const r = document.documentElement;
    r.style.setProperty("--red", primary);
    r.style.setProperty("--red-h", darken(primary, 0.12));
    r.style.setProperty("--red-soft", tint(primary, 0.9));
    if (font) {
      r.style.setProperty("--font", `"${FONT_FAMILY}", Vazirmatn, Tahoma, "Segoe UI", Arial, sans-serif`);
    } else {
      r.style.removeProperty("--font");
    }
  }, [primary, font]);

  // ---- live: @font-face for uploaded font ----
  useEffect(() => {
    let el = document.getElementById("dk-custom-font");
    if (font && font.preview && font.base64) {
      if (!el) {
        el = document.createElement("style");
        el.id = "dk-custom-font";
        document.head.appendChild(el);
      }
      const format = FONT_FORMATS[font.ext] || "truetype";
      el.textContent = `@font-face{font-family:"${FONT_FAMILY}";src:url("${font.preview}") format("${format}");font-display:swap}`;
    } else if (el) {
      el.remove();
    }
  }, [font]);

  // ---- live: favicon <link> ----
  useEffect(() => {
    let el = document.getElementById("dk-favicon");
    if (favicon && favicon.preview) {
      if (!el) {
        el = document.createElement("link");
        el.id = "dk-favicon";
        el.rel = "icon";
        document.head.appendChild(el);
      }
      el.href = favicon.preview;
    } else if (el) {
      el.remove();
    }
  }, [favicon]);

  const api = useMemo(
    () => ({
      isAdmin,
      siteName,
      primary,
      sections,
      sectionTitles,
      font,
      favicon,
      logo,
      heroSlides,
      setSiteName,
      setPrimary,
      setFont,
      setFavicon,
      setLogo,
      setHeroSlides,
      setSectionTitle(id, patch) {
        setSectionTitles((t) => ({ ...t, [id]: { ...(t[id] || {}), ...patch } }));
      },
      toggle(id) {
        setSections((s) => ({ ...s, [id]: !s[id] }));
      },
      setAll(value) {
        setSections((s) => {
          const next = {};
          Object.keys(s).forEach((k) => (next[k] = value));
          return next;
        });
      },
      reset() {
        setPrimary(DEFAULT_PRIMARY);
        setSections(DEFAULT_SECTIONS);
        setSectionTitles(DEFAULT_TITLES);
        setSiteName(DEFAULT_SITE_NAME);
        setFont(null);
        setFavicon(null);
        setLogo(null);
        setHeroSlides(null);
      },
    }),
    [isAdmin, siteName, primary, sections, sectionTitles, font, favicon, logo, heroSlides]
  );

  return <Ctx.Provider value={api}>{children}</Ctx.Provider>;
}

export const useControl = () => useContext(Ctx);
