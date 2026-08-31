"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import Section from "./Section";
import { CATEGORIES, PRODUCTS, money } from "@/lib/data";
import { MEGA, NAV_MENUS, NAV_LABELS } from "@/lib/mega";
import { useCart } from "./CartProvider";
import { useControl } from "./ControlProvider";

const DROPDOWN_HREF = { solutions: "/solutions", services: "/services", resources: "/docs" };

function Flag() {
  return (
    <svg className="flag" viewBox="0 0 19 13"><rect width="19" height="13" fill="#b22234"/><path d="M0 1h19M0 3h19M0 5h19M0 7h19M0 9h19M0 11h19" stroke="#fff" strokeWidth="1"/><rect width="8" height="7" fill="#3c3b6e"/></svg>
  );
}

function Badge({ kind }) {
  if (!kind) return null;
  const label = kind === "New" ? "جدید" : "پرفروش";
  return <span className={"mbadge " + (kind === "New" ? "new" : "hot")}>{label}</span>;
}

export default function Header() {
  const path = usePathname();
  const router = useRouter();
  const { count, items } = useCart();
  const { nav } = useControl();
  const [q, setQ] = useState("");
  const [sug, setSug] = useState([]);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mega, setMega] = useState(false);
  const [megaCat, setMegaCat] = useState("switches");
  const [mini, setMini] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const hideT = useRef();

  const showMega = () => { clearTimeout(hideT.current); setMega(true); };
  const hideMega = () => { hideT.current = setTimeout(() => setMega(false), 180); };

  useEffect(() => {
    if (!q.trim()) { setSug([]); return; }
    const v = q.toLowerCase();
    setSug(PRODUCTS.filter((p) => (p.sku + " " + p.name + " " + p.cat).toLowerCase().includes(v)).slice(0, 6));
  }, [q]);

  const cat = CATEGORIES.find((c) => c.id === megaCat) || CATEGORIES[0];
  const families = MEGA[megaCat] || cat.families || [];
  const lined = items.map((i) => ({ ...i, p: PRODUCTS.find((x) => x.id === i.id) })).filter((x) => x.p);

  return (
    <header className="header">
      <Section id="topbar">
      <div className="topbar">
        <div className="container">
          <div className="top-left">
            <span>FS ایران</span>
            <span className="top-sep">|</span>
            <span className="top-ship">ارسال رایگان برای سفارش‌های بالای ۷۹ دلار آمریکا</span>
          </div>
          <div className="top-right">
            <Link href="/contact">تماس با ما</Link>
            <div className="drop right-drop">
              <button>ایران / تومان <span className="caret" /></button>
              <div className="drop-menu">
                <a href="#"><Flag /> ایالات متحده / دلار</a>
                <a href="#">🇩🇪 آلمان / یورو</a>
                <a href="#">🇬🇧 بریتانیا / پوند</a>
                <a href="#">🇦🇺 استرالیا / دلار استرالیا</a>
                <a href="#">🇸🇬 سنگاپور / دلار سنگاپور</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Section>

      <Section id="header">
      <div className="header-bar">
        <div className="container header-row">
          <button className="mobile-toggle" onClick={() => setNavOpen((v) => !v)} aria-label="منو">☰</button>
          <Link href="/" className="logo-link"><Logo /></Link>

          <nav className={"main-nav" + (navOpen ? " open" : "")}>
            {(nav || []).map((item, idx) => {
              if (item.kind === "mega") {
                return (
                  <div className="nav-item" key={"mega-" + idx} onMouseEnter={showMega} onMouseLeave={hideMega}>
                    <button className={"nav-link all-products" + (mega ? " open" : "")}>{item.label || "همه محصولات"}</button>
                  </div>
                );
              }
              if (item.kind === "dropdown") {
                const menu = NAV_MENUS[item.key] || [];
                return (
                  <div className="nav-dd" key={"dd-" + idx}>
                    <Link className={"nav-link" + (path.startsWith(DROPDOWN_HREF[item.key] || "") ? " active" : "")} href={DROPDOWN_HREF[item.key] || "/"}>
                      {item.label || NAV_LABELS[item.key] || ""}
                    </Link>
                    <div className="nav-fly">
                      {menu.map((m) => <Link key={m.label} href={m.href}>{m.label}</Link>)}
                    </div>
                  </div>
                );
              }
              return (
                <Link className={"nav-link" + (path.startsWith(item.href || "") ? " active" : "")} key={"lnk-" + idx} href={item.href || "#"}>
                  {item.label || ""}
                </Link>
              );
            })}
          </nav>

          <div className="header-acts">
            <button className="icon-only" aria-label="جستجو" onClick={() => setSearchOpen((s) => !s)}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>
            </button>
            <div className="icon-only wrap" onMouseEnter={() => setMini(true)} onMouseLeave={() => setMini(false)}>
              <Link href="/cart" className="icon-only" aria-label="سبد خرید">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 6h15l-1.5 9h-12z"/><path d="M6 6L5 3H2"/><circle cx="9" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/></svg>
                {count > 0 && <i className="badge">{count}</i>}
              </Link>
              {mini && (
                <div className="mini-cart">
                  {lined.length === 0 ? <div className="empty" style={{ padding: 16 }}>سبد خرید خالی است</div> : lined.map(({ p, qty }) => (
                    <div className="row" key={p.id}>
                      <img src={p.img} alt="" />
                      <div style={{ flex: 1 }}><b>{p.sku}</b><div>تعداد {qty} · {money(p.price * qty)}</div></div>
                    </div>
                  ))}
                  <Link href="/cart" className="btn btn-red" style={{ width: "100%", justifyContent: "center", marginTop: 10 }}>مشاهده سبد</Link>
                </div>
              )}
            </div>
            <Link className="icon-only" href="/login" aria-label="حساب کاربری">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="3.5"/><path d="M5 19c1.5-3.5 4-5 7-5s5.5 1.5 7 5"/></svg>
            </Link>
          </div>
        </div>

        {searchOpen && (
          <div className="search-bar">
            <form className="container search" onSubmit={(e) => { e.preventDefault(); router.push("/search?q=" + encodeURIComponent(q)); setSearchOpen(false); setSug([]); }}>
              <input autoFocus value={q} onChange={(e) => setQ(e.target.value)} placeholder="جستجو با کلیدواژه، SKU یا شماره کالا" />
              <button type="submit" aria-label="جستجو">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>
              </button>
              {sug.length > 0 && (
                <div className="search-suggest">
                  {sug.map((p) => (
                    <Link key={p.id} href={`/products/${p.id}`} onClick={() => { setSug([]); setSearchOpen(false); }}>
                      <img src={p.img} alt="" />
                      <div><b>{p.sku}</b><div style={{ color: "var(--muted-2)", fontSize: 12 }}>{money(p.price)} · {p.name.slice(0, 48)}…</div></div>
                    </Link>
                  ))}
                </div>
              )}
            </form>
          </div>
        )}

        {mega && (
          <div className="mega-shell" onMouseEnter={showMega} onMouseLeave={hideMega}>
            <div className="mega">
              <div className="mega-cats">
                {CATEGORIES.map((c) => (
                  <button key={c.id} className={c.id === megaCat ? "active" : ""} onMouseEnter={() => setMegaCat(c.id)}>
                    <img src={c.icon} alt="" />
                    <span>{c.name}</span>
                  </button>
                ))}
              </div>
              <div className="mega-panel">
                <div className="mega-cols">
                  {families.map((f) => (
                    <div className="mega-col" key={f.name}>
                      <Link href={f.href} className="mega-col-img"><img src={f.img} alt={f.name} /></Link>
                      <h4><Link href={f.href}>{f.name}</Link></h4>
                      <ul>
                        {(f.links || []).map((l) => {
                          const label = typeof l === "string" ? l : l.label;
                          const badge = typeof l === "string" ? null : l.badge;
                          return (
                            <li key={label}>
                              <Link href={f.href}>{label} <Badge kind={badge} /></Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      </Section>
    </header>
  );
}
