"use client";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import config from "@/lib/site-config.json";
import { darken, tint } from "@/lib/color";

const Ctx = createContext(null);

const DEFAULT_COLORS = {
  primary: "#C00000", heading: "#19191A", text: "#333333", muted: "#666666",
  faded: "#8A8A8A", border: "#E8E8E8", background: "#F6F7F9", star: "#F5A623",
  success: "#1A7F37", accent: "#C45C00",
};
const COLORS = { ...DEFAULT_COLORS, ...(config.colors || {}) };

const DEFAULT_NAV = [
  { kind: "mega", label: "همه محصولات" },
  { kind: "dropdown", key: "solutions", label: "راه‌حل‌ها" },
  { kind: "dropdown", key: "services", label: "خدمات" },
  { kind: "dropdown", key: "resources", label: "منابع" },
  { kind: "link", label: "تماس با ما", href: "/contact" },
];
const DEFAULT_CONTACTS = [
  { img: "/images/20251204162824r6935v.svg", title: "استعلام پروژه", text: "پشتیبانی فنی سفارشی برای درخواست‌های مختلف.", href: "/contact" },
  { img: "/images/20251204162824fbn9xq.svg", title: "تماس با فروش", text: "برای استعلام محصولات و راه‌حل‌ها با تیم فروش ما تماس بگیرید.", href: "/contact" },
  { img: "/images/20251204162824bn64ca.svg", title: "گفتگوی آنلاین", text: "همین حالا با کارشناس زنده برای پرسش‌های عمومی گفتگو کنید.", href: "/support" },
];
const DEFAULT_FOOTER = {
  columns: (config.footer && config.footer.columns) || [],
  newsletter: config.footer ? config.footer.newsletter !== false : true,
  social: config.footer ? config.footer.social !== false : true,
  apps: config.footer ? config.footer.apps !== false : true,
};
const DEFAULT_SUBFOOTER2 = {
  copyright: "تمامی حقوق برای",
  companyName: "دیتاکالا",
  companyHref: "/",
  copyrightSuffix: " محفوظ می‌باشد.",
  designerText: "طراحی شده توسط",
  designerName: "",
  designerHref: "#",
  ...(config.subFooter2 || {}),
};
const DEFAULT_LAYOUT = {
  heroCategoriesRows: 1, newProductsRows: 1, recommendationsRows: 1,
  ...(config.layout || {}),
};
const DEFAULT_WIDGETS = { contact: true, chat: true, ...(config.widgets || {}) };

const DEFAULT_SECTIONS = config.sections || {};
const DEFAULT_TITLES = config.sectionTitles || {};
const DEFAULT_SITE_NAME = config.siteName || "دیتاکالا";

const FONT_FAMILY = "DkCustom";
const FONT_FORMATS = { ttf: "truetype", otf: "opentype", woff: "woff", woff2: "woff2" };

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
  const [colors, setColors] = useState(COLORS);
  const [nav, setNav] = useState(config.nav || DEFAULT_NAV);
  const [contacts, setContacts] = useState(config.contacts || DEFAULT_CONTACTS);
  const [footer, setFooter] = useState(DEFAULT_FOOTER);
  const [subFooter2, setSubFooter2] = useState(DEFAULT_SUBFOOTER2);
  const [layout, setLayout] = useState(DEFAULT_LAYOUT);
  const [widgets, setWidgets] = useState(DEFAULT_WIDGETS);
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

  // ---- live: browser tab title ----
  useEffect(() => { document.title = siteName || "دیتاکالا"; }, [siteName]);

  // ---- live: CSS custom properties (all theme colors + font) ----
  useEffect(() => {
    const r = document.documentElement;
    r.style.setProperty("--red", colors.primary);
    r.style.setProperty("--red-h", darken(colors.primary, 0.12));
    r.style.setProperty("--red-soft", tint(colors.primary, 0.9));
    r.style.setProperty("--ink", colors.heading);
    r.style.setProperty("--ink-2", colors.text);
    r.style.setProperty("--muted", colors.muted);
    r.style.setProperty("--muted-2", colors.faded);
    r.style.setProperty("--line", colors.border);
    r.style.setProperty("--bg", colors.background);
    r.style.setProperty("--star", colors.star);
    r.style.setProperty("--success", colors.success);
    r.style.setProperty("--accent", colors.accent);
    if (font) {
      r.style.setProperty("--font", `"${FONT_FAMILY}", Vazirmatn, Tahoma, "Segoe UI", Arial, sans-serif`);
    } else {
      r.style.removeProperty("--font");
    }
  }, [colors, font]);

  // ---- live: @font-face for uploaded font ----
  useEffect(() => {
    let el = document.getElementById("dk-custom-font");
    if (font && font.preview && font.base64) {
      if (!el) { el = document.createElement("style"); el.id = "dk-custom-font"; document.head.appendChild(el); }
      const format = FONT_FORMATS[font.ext] || "truetype";
      el.textContent = `@font-face{font-family:"${FONT_FAMILY}";src:url("${font.preview}") format("${format}");font-display:swap}`;
    } else if (el) el.remove();
  }, [font]);

  // ---- live: favicon <link> ----
  useEffect(() => {
    let el = document.getElementById("dk-favicon");
    if (favicon && favicon.preview) {
      if (!el) { el = document.createElement("link"); el.id = "dk-favicon"; el.rel = "icon"; document.head.appendChild(el); }
      el.href = favicon.preview;
    } else if (el) el.remove();
  }, [favicon]);

  const api = useMemo(
    () => ({
      isAdmin, siteName, colors, nav, contacts, footer, subFooter2, layout, widgets,
      sections, sectionTitles, font, favicon, logo, heroSlides,
      setSiteName, setColors, setNav, setContacts, setFooter, setSubFooter2, setLayout, setWidgets,
      setFont, setFavicon, setLogo, setHeroSlides,
      setColor(key, val) { setColors((c) => ({ ...c, [key]: val })); },
      setSectionTitle(id, patch) { setSectionTitles((t) => ({ ...t, [id]: { ...(t[id] || {}), ...patch } })); },
      toggleWidget(id) { setWidgets((w) => ({ ...w, [id]: !w[id] })); },
      toggle(id) { setSections((s) => ({ ...s, [id]: !s[id] })); },
      setAll(value) { setSections((s) => { const n = {}; Object.keys(s).forEach((k) => (n[k] = value)); return n; }); },
      reset() {
        setColors(COLORS);
        setSiteName(DEFAULT_SITE_NAME);
        setNav(DEFAULT_NAV);
        setContacts(DEFAULT_CONTACTS);
        setFooter(DEFAULT_FOOTER);
        setSubFooter2(DEFAULT_SUBFOOTER2);
        setLayout(DEFAULT_LAYOUT);
        setWidgets(DEFAULT_WIDGETS);
        setSections(DEFAULT_SECTIONS);
        setSectionTitles(DEFAULT_TITLES);
        setFont(null); setFavicon(null); setLogo(null); setHeroSlides(null);
      },
    }),
    [isAdmin, siteName, colors, nav, contacts, footer, subFooter2, layout, widgets, sections, sectionTitles, font, favicon, logo, heroSlides]
  );

  return <Ctx.Provider value={api}>{children}</Ctx.Provider>;
}

export const useControl = () => useContext(Ctx);
