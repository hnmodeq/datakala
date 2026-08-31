"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { useControl } from "./ControlProvider";
import { darken, tint, isHexColor } from "@/lib/color";
import { HERO } from "@/lib/data";

const PRIMARY_PALETTE = [
  "#C00000", "#E11D48", "#DC2626", "#EA580C", "#D97706", "#F59E0B",
  "#84CC16", "#16A34A", "#0D9488", "#0891B2", "#0284C7", "#2563EB",
  "#4F46E5", "#7C3AED", "#9333EA", "#DB2777", "#1F2937", "#111827",
];

const SECTION_GROUPS = [
  { title: "سربرگ", items: ["topbar", "header"] },
  { title: "صفحه اصلی", items: ["hero", "hero-categories", "new-products", "recommendations", "platforms", "solutions", "certificates", "blog", "contacts"] },
  { title: "پاورقی", items: ["footer", "subfooter", "subfooter2"] },
];

const LABELS = {
  topbar: "پیش‌سربرگ", header: "سربرگ اصلی", hero: "اسلایدر قهرمان", "hero-categories": "دسته‌بندی‌ها",
  "new-products": "محصولات جدید", recommendations: "پیشنهادی‌ها", platforms: "پلتفرم‌ها", solutions: "راه‌حل‌ها",
  certificates: "گواهی‌نامه‌ها", blog: "مطالعات موردی", contacts: "تماس با ما", footer: "پاورقی",
  subfooter: "زیر پاورقی", subfooter2: "زیر پاورقی ۲",
};

const TITLE_KEYS = ["new-products", "recommendations", "platforms", "solutions", "certificates", "blog", "contacts"];
const WEIGHTS = [400, 500, 600, 700, 800, 900];

const COLOR_FIELDS = [
  { key: "primary", label: "رنگ اصلی (قرمز)", css: "--red" },
  { key: "heading", label: "رنگ عنوان‌ها", css: "--ink" },
  { key: "text", label: "رنگ متن", css: "--ink-2" },
  { key: "muted", label: "متن کم‌اهمیت", css: "--muted" },
  { key: "faded", label: "متن محو", css: "--muted-2" },
  { key: "border", label: "خطوط و حاشیه", css: "--line" },
  { key: "background", label: "پس‌زمینه", css: "--bg" },
  { key: "star", label: "ستاره‌ها", css: "--star" },
  { key: "success", label: "موفق / موجودی", css: "--success" },
  { key: "accent", label: "تاکید / نارنجی", css: "--accent" },
];

const IMG_ACCEPT = ".png,.jpg,.jpeg,.gif,.webp,.svg,.ico";
const HERO_DEFAULTS = HERO.map((s) => ({ img: s.img, href: s.href, title: s.title, sub: s.sub }));

function readAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const r = new FileReader();
    r.onload = () => resolve(String(r.result));
    r.onerror = reject;
    r.readAsDataURL(file);
  });
}

export default function ControlPanel() {
  const {
    siteName, colors, nav, contacts, footer, subFooter2, layout,
    sections, sectionTitles, font, favicon, logo, heroSlides,
    setSiteName, setColor, setNav, setContacts, setFooter, setSubFooter2, setLayout,
    setFont, setFavicon, setLogo, setHeroSlides, setSectionTitle, toggle, setAll, reset,
  } = useControl();

  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState("general");
  const [status, setStatus] = useState(null);
  const [dragging, setDragging] = useState(null);
  const favRef = useRef(null);
  const logoRef = useRef(null);
  const heroRef = useRef(null);
  const heroImgRef = useRef(null);
  const [heroImgIndex, setHeroImgIndex] = useState(-1);

  // ---------- generic helpers ----------
  const notify = (kind, text) => setStatus({ kind, text });

  const onImageFile = async (file, setter, label) => {
    if (!file) return;
    const ext = (file.name.split(".").pop() || "").toLowerCase();
    if (!IMG_ACCEPT.replace(/\./g, "").split(",").includes(ext)) { notify("error", "فرمت تصویر پشتیبانی نمی‌شود."); return; }
    try {
      const preview = await readAsDataUrl(file);
      setter({ name: file.name, ext, preview, base64: preview.split(",")[1] });
      setStatus(null);
    } catch { notify("error", "خواندن فایل ناموفق بود."); }
  };

  const onFontFile = async (file) => {
    if (!file) return;
    const ext = (file.name.split(".").pop() || "").toLowerCase();
    if (!["ttf", "otf", "woff", "woff2"].includes(ext)) { notify("error", "فرمت فونت پشتیبانی نمی‌شود."); return; }
    const preview = await readAsDataUrl(file);
    setFont({ name: file.name, ext, preview, base64: preview.split(",")[1] });
    setStatus(null);
  };

  // ---------- hero ----------
  const slides = heroSlides || HERO_DEFAULTS;
  const addHeroFiles = async (files) => {
    const list = Array.from(files || []);
    for (const file of list) {
      const ext = (file.name.split(".").pop() || "").toLowerCase();
      if (!["png", "jpg", "jpeg", "gif", "webp", "svg"].includes(ext)) continue;
      const preview = await readAsDataUrl(file);
      setHeroSlides((sl) => [...(sl || HERO_DEFAULTS), { img: preview, base64: preview.split(",")[1], ext, href: "#", title: "", sub: "" }]);
    }
  };
  const updateHero = (i, patch) => setHeroSlides((sl) => (sl || HERO_DEFAULTS).map((x, k) => (k === i ? { ...x, ...patch } : x)));
  const removeHero = (i) => setHeroSlides((sl) => (sl || HERO_DEFAULTS).filter((_, k) => k !== i));
  const changeHeroImage = async (i, file) => {
    if (!file) return;
    const ext = (file.name.split(".").pop() || "").toLowerCase();
    if (!["png", "jpg", "jpeg", "gif", "webp", "svg"].includes(ext)) { notify("error", "فرمت تصویر پشتیبانی نمی‌شود."); return; }
    const preview = await readAsDataUrl(file);
    setHeroSlides((sl) => (sl || HERO_DEFAULTS).map((x, k) => k === i ? { ...x, img: preview, base64: preview.split(",")[1], ext } : x));
  };
  const moveHero = (i, dir) => {
    setHeroSlides((sl) => {
      const arr = [...(sl || HERO_DEFAULTS)];
      const j = i + dir;
      if (j < 0 || j >= arr.length) return sl;
      [arr[i], arr[j]] = [arr[j], arr[i]];
      return arr;
    });
  };
  const addEmptySlide = () => setHeroSlides((sl) => [...(sl || HERO_DEFAULTS), { img: "", href: "#", title: "", sub: "" }]);

  // ---------- apply ----------
  const apply = async () => {
    setStatus({ kind: "busy", text: "در حال اعمال..." });
    try {
      const payload = {
        siteName, colors, nav, contacts, footer, subFooter2, layout, sections, sectionTitles,
        font: font ? (font.base64 ? { name: font.name, ext: font.ext, base64: font.base64 } : { keep: true }) : null,
        favicon: favicon ? (favicon.base64 ? { ext: favicon.ext, base64: favicon.base64 } : { keep: true }) : null,
        logo: logo ? (logo.base64 ? { ext: logo.ext, base64: logo.base64 } : { keep: true }) : null,
        heroSlides: heroSlides
          ? heroSlides.map((s) => s.base64
              ? { base64: s.base64, ext: s.ext, href: s.href, title: s.title, sub: s.sub }
              : { img: s.img, href: s.href, title: s.title, sub: s.sub })
          : null,
      };
      const res = await fetch("/api/apply", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.ok) setStatus({ kind: "ok", text: "اعمال شد — کدهای محلی به‌روزرسانی شدند." });
      else setStatus({ kind: "error", text: data.error || "خطا در اعمال تغییرات." });
    } catch (err) {
      setStatus({ kind: "error", text: "خطا: " + String(err && err.message ? err.message : err) });
    }
    setTimeout(() => setStatus((s) => (s && s.kind === "busy" ? null : s)), 6000);
  };

  const hiddenCount = Object.values(sections).filter((v) => v === false).length;
  const tabs = [
    { id: "general", label: "عمومی" },
    { id: "color", label: "رنگ" },
    { id: "font", label: "فونت" },
    { id: "sections", label: "بخش‌ها", badge: hiddenCount > 0 ? hiddenCount : null },
    { id: "titles", label: "عناوین" },
    { id: "hero", label: "اسلایدر" },
    { id: "nav", label: "ناوبار" },
    { id: "contacts", label: "تماس" },
    { id: "footer", label: "پاورقی" },
    { id: "layout", label: "چیدمان" },
  ];

  // small editors
  const LinkRow = ({ link, onChange, onRemove }) => (
    <div className="cp-linkrow">
      <input className="cp-text-input" value={link.label} placeholder="عنوان" onChange={(e) => onChange({ ...link, label: e.target.value })} />
      <input className="cp-text-input" value={link.href} placeholder="لینک" dir="ltr" onChange={(e) => onChange({ ...link, href: e.target.value })} />
      <button className="cp-btn cp-btn-line cp-btn-s" onClick={onRemove}>✕</button>
    </div>
  );

  return (
    <>
      <button className="cp-fab" onClick={() => setOpen((o) => !o)} aria-label="کنترل پنل" title="کنترل پنل">
        <span className="cp-fab-label">کنترل پنل</span>
      </button>

      {open && (
        <div className="cp-overlay" onClick={() => setOpen(false)}>
          <aside className="cp-panel" onClick={(e) => e.stopPropagation()}>
            <header className="cp-head">
              <div className="cp-title">
                <span className="cp-dot" />
                <div><b>کنترل پنل دیتاکالا</b><small>پیش‌نمایش زنده</small></div>
              </div>
              <button className="cp-x" onClick={() => setOpen(false)} aria-label="بستن">×</button>
            </header>

            <nav className="cp-tabs">
              {tabs.map((t) => (
                <button key={t.id} className={tab === t.id ? "on" : ""} onClick={() => setTab(t.id)}>
                  {t.label}
                  {t.badge ? <i className="cp-count">{t.badge}</i> : null}
                </button>
              ))}
            </nav>

            <div className="cp-body">
              {/* ===== GENERAL ===== */}
              {tab === "general" && (
                <div className="cp-scroll">
                  <div className="cp-group-title">نام سایت (عنوان تب مرورگر)</div>
                  <input className="cp-text-input" value={siteName} onChange={(e) => setSiteName(e.target.value)} />
                  <div className="cp-group-title" style={{ marginTop: 18 }}>آیکون سایت (Favicon)</div>
                  <div className="cp-media-row">
                    <div className="cp-media-preview">{(favicon && favicon.preview) ? <img src={favicon.preview} alt="" /> : <span>—</span>}</div>
                    <div className="cp-media-actions">
                      <button className="cp-btn cp-btn-line" onClick={() => favRef.current && favRef.current.click()}>آپلود آیکون</button>
                      {favicon && <button className="cp-btn cp-btn-line" onClick={() => setFavicon(null)}>حذف</button>}
                      <input ref={favRef} type="file" accept={IMG_ACCEPT} hidden onChange={(e) => onImageFile(e.target.files && e.target.files[0], setFavicon)} />
                    </div>
                  </div>
                  <div className="cp-group-title" style={{ marginTop: 18 }}>لوگوی سایت (داخل سایت)</div>
                  <div className="cp-media-row">
                    <div className="cp-media-preview" style={{ background: "#f3f4f6" }}>{(logo && logo.preview) ? <img src={logo.preview} alt="" /> : <span>—</span>}</div>
                    <div className="cp-media-actions">
                      <button className="cp-btn cp-btn-line" onClick={() => logoRef.current && logoRef.current.click()}>آپلود لوگو</button>
                      {logo && <button className="cp-btn cp-btn-line" onClick={() => setLogo(null)}>حذف</button>}
                      <input ref={logoRef} type="file" accept={IMG_ACCEPT} hidden onChange={(e) => onImageFile(e.target.files && e.target.files[0], setLogo)} />
                    </div>
                  </div>
                </div>
              )}

              {/* ===== COLOR ===== */}
              {tab === "color" && (
                <div className="cp-scroll">
                  <div className="cp-group-title">رنگ اصلی</div>
                  <div className="cp-swatch">
                    <div className="cp-swatch-main" style={{ background: colors.primary }}><span>{colors.primary}</span></div>
                    <div className="cp-swatch-minis">
                      <div><i style={{ background: colors.primary }} /><code>--red</code><span>{colors.primary}</span></div>
                      <div><i style={{ background: darken(colors.primary, 0.12) }} /><code>--red-h</code><span>{darken(colors.primary, 0.12)}</span></div>
                      <div><i style={{ background: tint(colors.primary, 0.9) }} /><code>--red-soft</code><span>{tint(colors.primary, 0.9)}</span></div>
                    </div>
                  </div>
                  <div className="cp-palette">
                    {PRIMARY_PALETTE.map((c) => (
                      <button key={c} className={"cp-color" + (colors.primary.toLowerCase() === c.toLowerCase() ? " on" : "")}
                        style={{ background: c }} onClick={() => setColor("primary", c)} title={c} aria-label={c} />
                    ))}
                  </div>

                  <div className="cp-group-title" style={{ marginTop: 18 }}>همه رنگ‌های سایت</div>
                  {COLOR_FIELDS.map((f) => (
                    <div className="cp-color-row" key={f.key}>
                      <i style={{ background: colors[f.key] }} />
                      <div className="cp-color-meta">
                        <b>{f.label}</b>
                        <code>{f.css}</code>
                      </div>
                      <input className="cp-hex-input" value={colors[f.key]} onChange={(e) => setColor(f.key, e.target.value)}
                        onBlur={() => isHexColor(colors[f.key]) && setColor(f.key, colors[f.key].toLowerCase())} spellCheck={false} maxLength={7} />
                      <input type="color" className="cp-color-input" value={isHexColor(colors[f.key]) ? colors[f.key] : "#000000"}
                        onChange={(e) => setColor(f.key, e.target.value)} />
                    </div>
                  ))}
                </div>
              )}

              {/* ===== FONT ===== */}
              {tab === "font" && (
                <div className="cp-scroll">
                  <div className="cp-group-title">آپلود فونت</div>
                  <div className={"cp-drop" + (dragging === "font" ? " drag" : "")}
                    onDragOver={(e) => { e.preventDefault(); setDragging("font"); }} onDragLeave={() => setDragging(null)}
                    onDrop={(e) => { e.preventDefault(); setDragging(null); onFontFile(e.dataTransfer.files && e.dataTransfer.files[0]); }}
                    onClick={() => document.getElementById("cp-font-input") && document.getElementById("cp-font-input").click()}>
                    <b>فایل فونت را اینجا بکشید یا کلیک کنید</b>
                    <span>.ttf .otf .woff .woff2</span>
                    <input id="cp-font-input" type="file" accept=".ttf,.otf,.woff,.woff2" hidden onChange={(e) => onFontFile(e.target.files && e.target.files[0])} />
                  </div>
                  {font && (
                    <div className="cp-font-loaded">
                      <div className="cp-font-name">{font.name}</div>
                      <div className="cp-font-preview" style={{ fontFamily: '"DkCustom", Vazirmatn, sans-serif' }}>دیتاکالا ۱۲۳۴ — پیش‌نمایش</div>
                      <button className="cp-btn cp-btn-line" onClick={() => setFont(null)}>حذف فونت</button>
                    </div>
                  )}
                </div>
              )}

              {/* ===== SECTIONS ===== */}
              {tab === "sections" && (
                <div className="cp-scroll">
                  <div className="cp-toolbar">
                    <button className="cp-btn cp-btn-line" onClick={() => setAll(true)}>نمایش همه</button>
                    <button className="cp-btn cp-btn-line" onClick={() => setAll(false)}>مخفی‌کردن همه</button>
                  </div>
                  {SECTION_GROUPS.map((g) => (
                    <div className="cp-group" key={g.title}>
                      <div className="cp-group-title">{g.title}</div>
                      {g.items.map((id) => (
                        <label className="cp-row" key={id}>
                          <span className="cp-switch"><input type="checkbox" checked={sections[id] !== false} onChange={() => toggle(id)} /><i /></span>
                          <span className="cp-row-label">{LABELS[id] || id}</span>
                          <code className="cp-key">{id}</code>
                        </label>
                      ))}
                    </div>
                  ))}
                </div>
              )}

              {/* ===== TITLES ===== */}
              {tab === "titles" && (
                <div className="cp-scroll">
                  {TITLE_KEYS.map((id) => {
                    const t = sectionTitles[id] || {};
                    return (
                      <div className="cp-title-card" key={id}>
                        <div className="cp-title-label">{LABELS[id] || id}</div>
                        <input className="cp-text-input" value={t.text || ""} placeholder="متن عنوان" onChange={(e) => setSectionTitle(id, { text: e.target.value })} />
                        <div className="cp-title-row">
                          <label className="cp-mini"><span>اندازه</span>
                            <input type="number" min="10" max="120" value={t.size ?? 22} onChange={(e) => setSectionTitle(id, { size: parseInt(e.target.value, 10) || 22 })} /><em>px</em>
                          </label>
                          <label className="cp-mini"><span>ضخامت</span>
                            <select value={t.weight ?? 600} onChange={(e) => setSectionTitle(id, { weight: parseInt(e.target.value, 10) })}>
                              {WEIGHTS.map((w) => <option key={w} value={w}>{w}</option>)}
                            </select>
                          </label>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* ===== HERO ===== */}
              {tab === "hero" && (
                <div className="cp-scroll">
                  <div className="cp-toolbar">
                    <button className="cp-btn cp-btn-line" onClick={() => heroRef.current && heroRef.current.click()}>افزودن تصاویر</button>
                    <button className="cp-btn cp-btn-line" onClick={addEmptySlide}>+ اسلاید خالی</button>
                    <button className="cp-btn cp-btn-line" onClick={() => setHeroSlides(null)}>بازگشت به پیش‌فرض</button>
                    <input ref={heroRef} type="file" accept={IMG_ACCEPT} multiple hidden onChange={(e) => addHeroFiles(e.target.files)} />
                    <input ref={heroImgRef} type="file" accept={IMG_ACCEPT} hidden onChange={(e) => { if (heroImgIndex >= 0) changeHeroImage(heroImgIndex, e.target.files && e.target.files[0]); }} />
                  </div>
                  <p className="cp-hint" style={{ marginTop: 0 }}>هر اسلاید یک آیتم است — تصویر، عنوان، کپشن و لینک هر کدام را جداگانه تنظیم کنید ({slides.length} اسلاید).</p>
                  <div className={"cp-drop" + (dragging === "hero" ? " drag" : "")}
                    onDragOver={(e) => { e.preventDefault(); setDragging("hero"); }} onDragLeave={() => setDragging(null)}
                    onDrop={(e) => { e.preventDefault(); setDragging(null); addHeroFiles(e.dataTransfer.files); }}
                    onClick={() => heroRef.current && heroRef.current.click()}>
                    <b>چند تصویر را اینجا رها کنید تا به‌عنوان اسلاید جدید اضافه شوند</b>
                    <span>یا کلیک کنید</span>
                  </div>
                  <div className="cp-hero-list">
                    {slides.map((s, i) => (
                      <div className="cp-hero-card" key={i}>
                        <button className="cp-hero-imgbtn" onClick={() => { setHeroImgIndex(i); heroImgRef.current && heroImgRef.current.click(); }} title="تغییر تصویر">
                          {s.img ? <img src={s.img} alt="" /> : <span>+ تصویر</span>}
                        </button>
                        <div className="cp-hero-fields">
                          <input className="cp-text-input" value={s.title || ""} placeholder="عنوان" onChange={(e) => updateHero(i, { title: e.target.value })} />
                          <input className="cp-text-input" value={s.sub || ""} placeholder="کپشن / زیرنویس" onChange={(e) => updateHero(i, { sub: e.target.value })} />
                          <div className="cp-hero-meta">
                            <input className="cp-text-input" value={s.href || "#"} placeholder="لینک مقصد" dir="ltr" onChange={(e) => updateHero(i, { href: e.target.value })} />
                            <button className="cp-btn cp-btn-line cp-btn-s" onClick={() => moveHero(i, -1)} title="بالا">↑</button>
                            <button className="cp-btn cp-btn-line cp-btn-s" onClick={() => moveHero(i, 1)} title="پایین">↓</button>
                            <button className="cp-btn cp-btn-line cp-btn-s" onClick={() => removeHero(i)} title="حذف">✕</button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ===== NAV ===== */}
              {tab === "nav" && (
                <div className="cp-scroll">
                  <div className="cp-group-title">آیتم‌های ناوبار</div>
                  {nav.map((item, i) => (
                    <div className="cp-title-card" key={i}>
                      <div className="cp-nav-kind">{item.kind === "mega" ? "مگامنو" : item.kind === "dropdown" ? "منوی کشویی" : "لینک"}</div>
                      <input className="cp-text-input" value={item.label || ""} placeholder="عنوان" onChange={(e) => setNav((n) => n.map((x, k) => k === i ? { ...x, label: e.target.value } : x))} />
                      {item.kind === "link" && (
                        <input className="cp-text-input" style={{ marginTop: 6 }} value={item.href || ""} placeholder="لینک" dir="ltr" onChange={(e) => setNav((n) => n.map((x, k) => k === i ? { ...x, href: e.target.value } : x))} />
                      )}
                      {item.kind === "dropdown" && (
                        <select className="cp-select" style={{ marginTop: 6 }} value={item.key || "solutions"} onChange={(e) => setNav((n) => n.map((x, k) => k === i ? { ...x, key: e.target.value } : x))}>
                          <option value="solutions">راه‌حل‌ها</option>
                          <option value="services">خدمات</option>
                          <option value="resources">منابع</option>
                        </select>
                      )}
                      <button className="cp-btn cp-btn-line cp-btn-s" style={{ marginTop: 6 }} onClick={() => setNav((n) => n.filter((_, k) => k !== i))}>حذف آیتم</button>
                    </div>
                  ))}
                  <div className="cp-toolbar">
                    <button className="cp-btn cp-btn-line" onClick={() => setNav((n) => [...n, { kind: "link", label: "لینک جدید", href: "/" }])}>+ لینک</button>
                    <button className="cp-btn cp-btn-line" onClick={() => setNav((n) => [...n, { kind: "dropdown", key: "solutions", label: "منوی جدید" }])}>+ منوی کشویی</button>
                    <button className="cp-btn cp-btn-line" onClick={() => setNav((n) => [...n, { kind: "mega", label: "همه محصولات" }])}>+ مگامنو</button>
                  </div>
                </div>
              )}

              {/* ===== CONTACTS ===== */}
              {tab === "contacts" && (
                <div className="cp-scroll">
                  <div className="cp-group-title">آیتم‌های بخش تماس</div>
                  {contacts.map((c, i) => (
                    <div className="cp-title-card" key={i}>
                      <input className="cp-text-input" value={c.title || ""} placeholder="عنوان" onChange={(e) => setContacts((cs) => cs.map((x, k) => k === i ? { ...x, title: e.target.value } : x))} />
                      <input className="cp-text-input" style={{ marginTop: 6 }} value={c.text || ""} placeholder="توضیح" onChange={(e) => setContacts((cs) => cs.map((x, k) => k === i ? { ...x, text: e.target.value } : x))} />
                      <div className="cp-hero-meta" style={{ marginTop: 6 }}>
                        <input className="cp-text-input" value={c.href || ""} placeholder="لینک" dir="ltr" onChange={(e) => setContacts((cs) => cs.map((x, k) => k === i ? { ...x, href: e.target.value } : x))} />
                        <input className="cp-text-input" value={c.img || ""} placeholder="آیکون (URL)" dir="ltr" onChange={(e) => setContacts((cs) => cs.map((x, k) => k === i ? { ...x, img: e.target.value } : x))} />
                        <button className="cp-btn cp-btn-line cp-btn-s" onClick={() => setContacts((cs) => cs.filter((_, k) => k !== i))}>✕</button>
                      </div>
                    </div>
                  ))}
                  <button className="cp-btn cp-btn-line" style={{ width: "100%" }} onClick={() => setContacts((cs) => [...cs, { img: "", title: "عنوان جدید", text: "", href: "/contact" }])}>+ افزودن آیتم</button>
                </div>
              )}

              {/* ===== FOOTER ===== */}
              {tab === "footer" && (
                <div className="cp-scroll">
                  <div className="cp-group-title">ستون‌های پاورقی</div>
                  {footer.columns.map((col, ci) => (
                    <div className="cp-colcard" key={ci}>
                      <div className="cp-hero-meta">
                        <input className="cp-text-input" value={col.title || ""} placeholder="عنوان ستون" onChange={(e) => setFooter((f) => ({ ...f, columns: f.columns.map((c, k) => k === ci ? { ...c, title: e.target.value } : c) }))} />
                        <button className="cp-btn cp-btn-line cp-btn-s" onClick={() => setFooter((f) => ({ ...f, columns: f.columns.filter((_, k) => k !== ci) }))}>حذف ستون</button>
                      </div>
                      {(col.links || []).map((l, li) => (
                        <div className="cp-linkrow" key={li}>
                          <input className="cp-text-input" value={l.label} placeholder="عنوان" onChange={(e) => setFooter((f) => ({ ...f, columns: f.columns.map((c, k) => k === ci ? { ...c, links: c.links.map((x, j) => j === li ? { ...x, label: e.target.value } : x) } : c) }))} />
                          <input className="cp-text-input" value={l.href} placeholder="لینک" dir="ltr" onChange={(e) => setFooter((f) => ({ ...f, columns: f.columns.map((c, k) => k === ci ? { ...c, links: c.links.map((x, j) => j === li ? { ...x, href: e.target.value } : x) } : c) }))} />
                          <button className="cp-btn cp-btn-line cp-btn-s" onClick={() => setFooter((f) => ({ ...f, columns: f.columns.map((c, k) => k === ci ? { ...c, links: c.links.filter((_, j) => j !== li) } : c) }))}>✕</button>
                        </div>
                      ))}
                      <button className="cp-btn cp-btn-line cp-btn-s" onClick={() => setFooter((f) => ({ ...f, columns: f.columns.map((c, k) => k === ci ? { ...c, links: [...(c.links || []), { label: "لینک جدید", href: "#" }] } : c) }))}>+ افزودن لینک</button>
                    </div>
                  ))}
                  <button className="cp-btn cp-btn-line" style={{ width: "100%", marginBottom: 16 }} onClick={() => setFooter((f) => ({ ...f, columns: [...f.columns, { title: "ستون جدید", links: [] }] }))}>+ افزودن ستون</button>

                  <div className="cp-group-title">ستون پنجم (خبرنامه / شبکه‌های اجتماعی / اپلیکیشن)</div>
                  <label className="cp-row"><span className="cp-switch"><input type="checkbox" checked={footer.newsletter} onChange={() => setFooter((f) => ({ ...f, newsletter: !f.newsletter }))} /><i /></span><span className="cp-row-label">خبرنامه (ایمیل)</span></label>
                  <label className="cp-row"><span className="cp-switch"><input type="checkbox" checked={footer.social} onChange={() => setFooter((f) => ({ ...f, social: !f.social }))} /><i /></span><span className="cp-row-label">شبکه‌های اجتماعی</span></label>
                  <label className="cp-row"><span className="cp-switch"><input type="checkbox" checked={footer.apps} onChange={() => setFooter((f) => ({ ...f, apps: !f.apps }))} /><i /></span><span className="cp-row-label">CTA دانلود اپلیکیشن</span></label>

                  <div className="cp-group-title" style={{ marginTop: 16 }}>نوار کپی‌رایت (۲ بخش)</div>

                  <div className="cp-title-label" style={{ marginTop: 4 }}>بخش ۱ — کپی‌رایت</div>
                  <div className="cp-field">
                    <label>متن قبل از نام شرکت</label>
                    <input className="cp-text-input" value={subFooter2.copyright || ""} onChange={(e) => setSubFooter2((s) => ({ ...s, copyright: e.target.value }))} />
                  </div>
                  <div className="cp-field">
                    <label>نام شرکت</label>
                    <input className="cp-text-input" value={subFooter2.companyName || ""} onChange={(e) => setSubFooter2((s) => ({ ...s, companyName: e.target.value }))} />
                  </div>
                  <div className="cp-field">
                    <label>لینک شرکت</label>
                    <input className="cp-text-input" dir="ltr" value={subFooter2.companyHref || ""} onChange={(e) => setSubFooter2((s) => ({ ...s, companyHref: e.target.value }))} />
                  </div>
                  <div className="cp-field">
                    <label>متن بعد از نام شرکت</label>
                    <input className="cp-text-input" value={subFooter2.copyrightSuffix || ""} onChange={(e) => setSubFooter2((s) => ({ ...s, copyrightSuffix: e.target.value }))} />
                  </div>

                  <div className="cp-title-label" style={{ marginTop: 12 }}>بخش ۲ — طراح</div>
                  <div className="cp-field">
                    <label>عبارت طراح</label>
                    <input className="cp-text-input" value={subFooter2.designerText || ""} onChange={(e) => setSubFooter2((s) => ({ ...s, designerText: e.target.value }))} />
                  </div>
                  <div className="cp-field">
                    <label>نام طراح</label>
                    <input className="cp-text-input" value={subFooter2.designerName || ""} onChange={(e) => setSubFooter2((s) => ({ ...s, designerName: e.target.value }))} />
                  </div>
                  <div className="cp-field">
                    <label>لینک طراح</label>
                    <input className="cp-text-input" dir="ltr" value={subFooter2.designerHref || ""} onChange={(e) => setSubFooter2((s) => ({ ...s, designerHref: e.target.value }))} />
                  </div>
                </div>
              )}

              {/* ===== LAYOUT ===== */}
              {tab === "layout" && (
                <div className="cp-scroll">
                  <div className="cp-group-title">تعداد ردیف‌ها</div>
                  {[
                    { key: "heroCategoriesRows", label: "دسته‌بندی‌های قهرمان", hint: "تعداد ردیف کارت‌های دسته‌بندی هنگام hover" },
                    { key: "newProductsRows", label: "محصولات جدید", hint: "تعداد ردیف کارت‌های محصول (هر ردیف = ۴ کارت)" },
                    { key: "recommendationsRows", label: "پیشنهادی‌ها", hint: "تعداد ردیف کارت‌های محصول" },
                  ].map((r) => (
                    <div className="cp-title-card" key={r.key}>
                      <div className="cp-title-label">{r.label}</div>
                      <div className="cp-title-row">
                        <label className="cp-mini"><span>ردیف</span>
                          <input type="number" min="1" max="4" value={layout[r.key] ?? 1} onChange={(e) => setLayout((l) => ({ ...l, [r.key]: Math.max(1, Math.min(4, parseInt(e.target.value, 10) || 1)) }))} />
                        </label>
                      </div>
                      <p className="cp-hint" style={{ marginTop: 6 }}>{r.hint}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <footer className="cp-foot">
              <button className="cp-btn cp-btn-line" onClick={reset}>بازنشانی</button>
              <button className="cp-btn cp-btn-primary" onClick={apply} disabled={status && status.kind === "busy"}>
                {status && status.kind === "busy" ? "در حال اعمال..." : "اعمال در کد"}
              </button>
            </footer>

            {status && status.kind !== "busy" && <div className={"cp-status " + status.kind}>{status.text}</div>}
          </aside>
        </div>
      )}
    </>
  );
}
