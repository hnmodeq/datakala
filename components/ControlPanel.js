"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { useControl } from "./ControlProvider";
import { darken, tint, isHexColor } from "@/lib/color";

const PALETTE = [
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
  topbar: "پیش‌سربرگ (نوار بالا)",
  header: "سربرگ اصلی",
  hero: "اسلایدر قهرمان (Hero)",
  "hero-categories": "دسته‌بندی‌های قهرمان",
  "new-products": "محصولات جدید",
  recommendations: "پیشنهادی‌ها",
  platforms: "پلتفرم‌ها (PicOS)",
  solutions: "راه‌حل‌ها",
  certificates: "گواهی‌نامه‌ها",
  blog: "وبلاگ / مطالعات موردی",
  contacts: "تماس با ما",
  footer: "پاورقی",
  subfooter: "زیر پاورقی (پرداخت/منطقه)",
  subfooter2: "زیر پاورقی ۲ (حقوقی)",
};

const TITLE_KEYS = ["new-products", "recommendations", "platforms", "solutions", "certificates", "blog", "contacts"];
const WEIGHTS = [400, 500, 600, 700, 800, 900];

const IMG_ACCEPT = ".png,.jpg,.jpeg,.gif,.webp,.svg,.ico";

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
    siteName, primary, sections, sectionTitles, font, favicon, logo, heroSlides,
    setSiteName, setPrimary, setFont, setFavicon, setLogo, setHeroSlides,
    setSectionTitle, toggle, setAll, reset,
  } = useControl();

  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState("general");
  const [hex, setHex] = useState(primary);
  const [status, setStatus] = useState(null);
  const [dragging, setDragging] = useState(null); // which dropzone is dragging
  const favRef = useRef(null);
  const logoRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => setHex(primary), [primary]);

  const commitHex = useCallback(() => {
    if (isHexColor(hex)) setPrimary(hex.toLowerCase());
  }, [hex, setPrimary]);

  const onFile = async (file, setter) => {
    if (!file) return;
    const ext = (file.name.split(".").pop() || "").toLowerCase();
    if (!IMG_ACCEPT.replace(/\./g, "").split(",").includes(ext)) {
      setStatus({ kind: "error", text: "فرمت تصویر پشتیبانی نمی‌شود." });
      return;
    }
    try {
      const preview = await readAsDataUrl(file);
      setter({ name: file.name, ext, preview, base64: preview.split(",")[1] });
      setStatus(null);
    } catch {
      setStatus({ kind: "error", text: "خواندن فایل ناموفق بود." });
    }
  };

  const addHeroFiles = async (files) => {
    const list = Array.from(files || []);
    for (const file of list) {
      const ext = (file.name.split(".").pop() || "").toLowerCase();
      if (!["png", "jpg", "jpeg", "gif", "webp", "svg"].includes(ext)) continue;
      const preview = await readAsDataUrl(file);
      setHeroSlides((sl) => [
        ...(sl || []),
        { img: preview, base64: preview.split(",")[1], ext, href: "#", title: "", sub: "" },
      ]);
    }
  };

  const updateHero = (i, patch) => setHeroSlides((sl) => (sl || []).map((x, k) => (k === i ? { ...x, ...patch } : x)));
  const removeHero = (i) => setHeroSlides((sl) => (sl || []).filter((_, k) => k !== i));

  const onFontFile = async (file) => {
    if (!file) return;
    const ext = (file.name.split(".").pop() || "").toLowerCase();
    if (!["ttf", "otf", "woff", "woff2"].includes(ext)) {
      setStatus({ kind: "error", text: "فرمت فونت پشتیبانی نمی‌شود." });
      return;
    }
    const preview = await readAsDataUrl(file);
    setFont({ name: file.name, ext, preview, base64: preview.split(",")[1] });
    setStatus(null);
  };

  const apply = async () => {
    setStatus({ kind: "busy", text: "در حال اعمال..." });
    try {
      const payload = {
        siteName,
        primary,
        sections,
        sectionTitles,
        font: font ? (font.base64 ? { name: font.name, ext: font.ext, base64: font.base64 } : { keep: true }) : null,
        favicon: favicon ? (favicon.base64 ? { ext: favicon.ext, base64: favicon.base64 } : { keep: true }) : null,
        logo: logo ? (logo.base64 ? { ext: logo.ext, base64: logo.base64 } : { keep: true }) : null,
        heroSlides: heroSlides
          ? heroSlides.map((s) =>
              s.base64
                ? { base64: s.base64, ext: s.ext, href: s.href, title: s.title, sub: s.sub }
                : { img: s.img, href: s.href, title: s.title, sub: s.sub }
            )
          : null,
      };
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
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
    { id: "sections", label: "بخش‌ها", badge: hiddenCount > 0 ? hiddenCount : null },
    { id: "titles", label: "عناوین" },
    { id: "hero", label: "اسلایدر" },
    { id: "color", label: "رنگ" },
    { id: "font", label: "فونت" },
  ];

  return (
    <>
      <button className="cp-fab" onClick={() => setOpen((o) => !o)} aria-label="کنترل پنل" title="کنترل پنل">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M19.07 4.93l-2.12 2.12M7.05 16.95l-2.12 2.12" />
        </svg>
        <span className="cp-fab-label">کنترل پنل</span>
      </button>

      {open && (
        <div className="cp-overlay" onClick={() => setOpen(false)}>
          <aside className="cp-panel" onClick={(e) => e.stopPropagation()}>
            <header className="cp-head">
              <div className="cp-title">
                <span className="cp-dot" />
                <div>
                  <b>کنترل پنل دیتاکالا</b>
                  <small>پیش‌نمایش زنده — تغییرات به‌صورت آنی اعمال می‌شود</small>
                </div>
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
              {tab === "general" && (
                <div className="cp-scroll">
                  <div className="cp-group-title">نام سایت (عنوان تب مرورگر)</div>
                  <input
                    className="cp-text-input"
                    value={siteName}
                    onChange={(e) => setSiteName(e.target.value)}
                    placeholder="دیتاکالا"
                  />
                  <p className="cp-hint">این نام در تب مرورگر نمایش داده می‌شود.</p>

                  <div className="cp-group-title" style={{ marginTop: 18 }}>آیکون سایت (Favicon)</div>
                  <div className="cp-media-row">
                    <div className="cp-media-preview">
                      {(favicon && favicon.preview) ? <img src={favicon.preview} alt="" /> : <span>—</span>}
                    </div>
                    <div className="cp-media-actions">
                      <button className="cp-btn cp-btn-line" onClick={() => favRef.current && favRef.current.click()}>آپلود آیکون</button>
                      {favicon && <button className="cp-btn cp-btn-line" onClick={() => setFavicon(null)}>حذف</button>}
                      <input ref={favRef} type="file" accept={IMG_ACCEPT} hidden onChange={(e) => onFile(e.target.files && e.target.files[0], setFavicon)} />
                    </div>
                  </div>

                  <div className="cp-group-title" style={{ marginTop: 18 }}>لوگوی سایت (داخل سایت)</div>
                  <div className="cp-media-row">
                    <div className="cp-media-preview" style={{ background: "#f3f4f6" }}>
                      {(logo && logo.preview) ? <img src={logo.preview} alt="" /> : <span>—</span>}
                    </div>
                    <div className="cp-media-actions">
                      <button className="cp-btn cp-btn-line" onClick={() => logoRef.current && logoRef.current.click()}>آپلود لوگو</button>
                      {logo && <button className="cp-btn cp-btn-line" onClick={() => setLogo(null)}>حذف</button>}
                      <input ref={logoRef} type="file" accept={IMG_ACCEPT} hidden onChange={(e) => onFile(e.target.files && e.target.files[0], setLogo)} />
                    </div>
                  </div>
                  <p className="cp-hint">لوگو جایگزین وردمارک فعلی در سربرگ می‌شود (تصویر PNG با پس‌زمینه شفاف پیشنهاد می‌شود).</p>
                </div>
              )}

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
                          <span className="cp-switch">
                            <input type="checkbox" checked={sections[id] !== false} onChange={() => toggle(id)} />
                            <i />
                          </span>
                          <span className="cp-row-label">{LABELS[id] || id}</span>
                          <code className="cp-key">{id}</code>
                        </label>
                      ))}
                    </div>
                  ))}
                </div>
              )}

              {tab === "titles" && (
                <div className="cp-scroll">
                  <p className="cp-hint" style={{ marginTop: 0 }}>متن، اندازه و ضخامت عنوان هر بخش صفحه اصلی را تنظیم کنید.</p>
                  {TITLE_KEYS.map((id) => {
                    const t = sectionTitles[id] || {};
                    return (
                      <div className="cp-title-card" key={id}>
                        <div className="cp-title-label">{LABELS[id] || id}</div>
                        <input
                          className="cp-text-input"
                          value={t.text || ""}
                          placeholder="متن عنوان"
                          onChange={(e) => setSectionTitle(id, { text: e.target.value })}
                        />
                        <div className="cp-title-row">
                          <label className="cp-mini">
                            <span>اندازه</span>
                            <input
                              type="number"
                              min="10"
                              max="120"
                              value={t.size ?? 22}
                              onChange={(e) => setSectionTitle(id, { size: parseInt(e.target.value, 10) || 22 })}
                            />
                            <em>px</em>
                          </label>
                          <label className="cp-mini">
                            <span>ضخامت</span>
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

              {tab === "hero" && (
                <div className="cp-scroll">
                  <div className="cp-toolbar">
                    <button className="cp-btn cp-btn-line" onClick={() => heroRef.current && heroRef.current.click()}>افزودن تصویر</button>
                    <button className="cp-btn cp-btn-line" onClick={() => setHeroSlides(null)}>بازگشت به پیش‌فرض</button>
                    <input ref={heroRef} type="file" accept={IMG_ACCEPT} multiple hidden onChange={(e) => addHeroFiles(e.target.files)} />
                  </div>
                  <p className="cp-hint" style={{ marginTop: 0 }}>تصاویر آپلودی جایگزین اسلایدر پیش‌فرض می‌شوند. برای هر اسلاید می‌توانید عنوان و زیرنویس بگذارید.</p>

                  <div
                    className={"cp-drop" + (dragging === "hero" ? " drag" : "")}
                    onDragOver={(e) => { e.preventDefault(); setDragging("hero"); }}
                    onDragLeave={() => setDragging(null)}
                    onDrop={(e) => { e.preventDefault(); setDragging(null); addHeroFiles(e.dataTransfer.files); }}
                    onClick={() => heroRef.current && heroRef.current.click()}
                  >
                    <b>تصاویر اسلایدر را اینجا رها کنید</b>
                    <span>یا کلیک کنید — چند تصویر همزمان مجاز است</span>
                  </div>

                  {heroSlides && heroSlides.length > 0 && (
                    <div className="cp-hero-list">
                      {heroSlides.map((s, i) => (
                        <div className="cp-hero-card" key={i}>
                          <img src={s.img} alt="" />
                          <div className="cp-hero-fields">
                            <input className="cp-text-input" value={s.title || ""} placeholder="عنوان (اختیاری)" onChange={(e) => updateHero(i, { title: e.target.value })} />
                            <input className="cp-text-input" value={s.sub || ""} placeholder="زیرنویس (اختیاری)" onChange={(e) => updateHero(i, { sub: e.target.value })} />
                            <div className="cp-hero-meta">
                              <input className="cp-text-input" value={s.href || "#"} placeholder="لینک" onChange={(e) => updateHero(i, { href: e.target.value })} />
                              <button className="cp-btn cp-btn-line" onClick={() => removeHero(i)}>حذف</button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  {(!heroSlides || heroSlides.length === 0) && (
                    <p className="cp-hint">در حال حاضر اسلایدر پیش‌فرض (۷ اسلاید) نمایش داده می‌شود.</p>
                  )}
                </div>
              )}

              {tab === "color" && (
                <div className="cp-scroll">
                  <div className="cp-group-title">رنگ اصلی (توکن قرمز)</div>
                  <div className="cp-swatch">
                    <div className="cp-swatch-main" style={{ background: primary }}>
                      <span>{primary}</span>
                    </div>
                    <div className="cp-swatch-minis">
                      <div><i style={{ background: primary }} /><code>--red</code><span>{primary}</span></div>
                      <div><i style={{ background: darken(primary, 0.12) }} /><code>--red-h</code><span>{darken(primary, 0.12)}</span></div>
                      <div><i style={{ background: tint(primary, 0.9) }} /><code>--red-soft</code><span>{tint(primary, 0.9)}</span></div>
                    </div>
                  </div>

                  <div className="cp-group-title" style={{ marginTop: 16 }}>پالت</div>
                  <div className="cp-palette">
                    {PALETTE.map((c) => (
                      <button
                        key={c}
                        className={"cp-color" + (primary.toLowerCase() === c.toLowerCase() ? " on" : "")}
                        style={{ background: c }}
                        onClick={() => setPrimary(c)}
                        aria-label={c}
                        title={c}
                      />
                    ))}
                  </div>

                  <div className="cp-group-title" style={{ marginTop: 16 }}>کد رنگ دلخواه</div>
                  <div className="cp-hex-row">
                    <input className="cp-hex-input" value={hex} onChange={(e) => setHex(e.target.value)} onBlur={commitHex}
                      onKeyDown={(e) => e.key === "Enter" && commitHex()} spellCheck={false} maxLength={7} />
                    <input type="color" className="cp-color-input" value={isHexColor(hex) ? hex : primary}
                      onChange={(e) => { setHex(e.target.value); setPrimary(e.target.value); }} />
                    <button className="cp-btn cp-btn-line" onClick={commitHex}>اعمال</button>
                  </div>
                  <p className="cp-hint">همه عناصر قرمز سایت از توکن <code>--red</code> پیروی می‌کنند.</p>
                </div>
              )}

              {tab === "font" && (
                <div className="cp-scroll">
                  <div className="cp-group-title">آپلود فونت</div>
                  <div
                    className={"cp-drop" + (dragging === "font" ? " drag" : "")}
                    onDragOver={(e) => { e.preventDefault(); setDragging("font"); }}
                    onDragLeave={() => setDragging(null)}
                    onDrop={(e) => { e.preventDefault(); setDragging(null); onFontFile(e.dataTransfer.files && e.dataTransfer.files[0]); }}
                  >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                      <path d="M12 16V4m0 0L7 9m5-5l5 5" />
                      <path d="M4 16v3a1 1 0 001 1h14a1 1 0 001-1v-3" />
                    </svg>
                    <b>فایل فونت را اینجا بکشید یا کلیک کنید</b>
                    <span>فرمت‌های پشتیبانی‌شده: .ttf .otf .woff .woff2</span>
                  </div>

                  {font && (
                    <div className="cp-font-loaded">
                      <div className="cp-font-name">{font.name}</div>
                      <div className="cp-font-preview" style={{ fontFamily: '"DkCustom", Vazirmatn, sans-serif' }}>
                        دیتاکالا ۱۲۳۴ — پیش‌نمایش فونت سفارشی شما
                      </div>
                      <button className="cp-btn cp-btn-line" onClick={() => setFont(null)}>حذف فونت</button>
                    </div>
                  )}
                  <p className="cp-hint">پس از آپلود، کل سایت از این فونت پیروی می‌کند.</p>
                </div>
              )}
            </div>

            <footer className="cp-foot">
              <button className="cp-btn cp-btn-line" onClick={reset}>بازنشانی</button>
              <button className="cp-btn cp-btn-primary" onClick={apply} disabled={status && status.kind === "busy"}>
                {status && status.kind === "busy" ? "در حال اعمال..." : "اعمال در کد"}
              </button>
            </footer>

            {status && status.kind !== "busy" && (
              <div className={"cp-status " + status.kind}>{status.text}</div>
            )}
          </aside>
        </div>
      )}
    </>
  );
}
