"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import { CATEGORIES, PRODUCTS, money } from "@/lib/data";
import { MEGA, NAV_MENUS } from "@/lib/mega";
import { useCart } from "./CartProvider";

function Flag() {
  return (
    <svg className="flag" viewBox="0 0 19 13"><rect width="19" height="13" fill="#b22234"/><path d="M0 1h19M0 3h19M0 5h19M0 7h19M0 9h19M0 11h19" stroke="#fff" strokeWidth="1"/><rect width="8" height="7" fill="#3c3b6e"/></svg>
  );
}

function Badge({ kind }) {
  if (!kind) return null;
  return <span className={"mbadge " + (kind === "New" ? "new" : "hot")}>{kind}</span>;
}

export default function Header() {
  const path = usePathname();
  const router = useRouter();
  const { count, items } = useCart();
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
      <div className="topbar">
        <div className="container">
          <div className="top-left">
            <span>FS United States</span>
            <span className="top-sep">|</span>
            <span className="top-ship">FREE SHIPPING on Orders Over US$79</span>
          </div>
          <div className="top-right">
            <Link href="/contact">Contact Us</Link>
            <div className="drop right-drop">
              <button>United States / $ USD <span className="caret" /></button>
              <div className="drop-menu">
                <a href="#"><Flag /> United States / USD</a>
                <a href="#">🇩🇪 Germany / EUR</a>
                <a href="#">🇬🇧 United Kingdom / GBP</a>
                <a href="#">🇦🇺 Australia / AUD</a>
                <a href="#">🇸🇬 Singapore / SGD</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="header-bar">
        <div className="container header-row">
          <button className="mobile-toggle" onClick={() => setNavOpen((v) => !v)} aria-label="Menu">☰</button>
          <Link href="/" className="logo-link"><Logo /></Link>

          <nav className={"main-nav" + (navOpen ? " open" : "")}>
            <div className="nav-item" onMouseEnter={showMega} onMouseLeave={hideMega}>
              <button className={"nav-link all-products" + (mega ? " open" : "")}>All Products</button>
            </div>
            {["solutions", "services", "resources"].map((key) => (
              <div className="nav-dd" key={key}>
                <Link className={"nav-link" + (path.startsWith("/" + key) ? " active" : "")} href={"/" + (key === "services" ? "contact" : key === "resources" ? "support" : "solutions")}>
                  {key[0].toUpperCase() + key.slice(1)}
                </Link>
                <div className="nav-fly">
                  {NAV_MENUS[key].map((m) => <Link key={m.label} href={m.href}>{m.label}</Link>)}
                </div>
              </div>
            ))}
            <Link className={"nav-link" + (path.startsWith("/contact") ? " active" : "")} href="/contact">Contact Us</Link>
          </nav>

          <div className="header-acts">
            <button className="icon-only" aria-label="Search" onClick={() => setSearchOpen((s) => !s)}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>
            </button>
            <div className="icon-only wrap" onMouseEnter={() => setMini(true)} onMouseLeave={() => setMini(false)}>
              <Link href="/cart" className="icon-only" aria-label="Cart">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 6h15l-1.5 9h-12z"/><path d="M6 6L5 3H2"/><circle cx="9" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/></svg>
                {count > 0 && <i className="badge">{count}</i>}
              </Link>
              {mini && (
                <div className="mini-cart">
                  {lined.length === 0 ? <div className="empty" style={{ padding: 16 }}>Cart is empty</div> : lined.map(({ p, qty }) => (
                    <div className="row" key={p.id}>
                      <img src={p.img} alt="" />
                      <div style={{ flex: 1 }}><b>{p.sku}</b><div>Qty {qty} · {money(p.price * qty)}</div></div>
                    </div>
                  ))}
                  <Link href="/cart" className="btn btn-red" style={{ width: "100%", justifyContent: "center", marginTop: 10 }}>View cart</Link>
                </div>
              )}
            </div>
            <Link className="icon-only" href="/login" aria-label="Account">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="3.5"/><path d="M5 19c1.5-3.5 4-5 7-5s5.5 1.5 7 5"/></svg>
            </Link>
          </div>
        </div>

        {searchOpen && (
          <div className="search-bar">
            <form className="container search" onSubmit={(e) => { e.preventDefault(); router.push("/search?q=" + encodeURIComponent(q)); setSearchOpen(false); setSug([]); }}>
              <input autoFocus value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search by keyword, SKU or Item#" />
              <button type="submit" aria-label="Search">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>
              </button>
              {sug.length > 0 && (
                <div className="search-suggest">
                  {sug.map((p) => (
                    <Link key={p.id} href={`/products/${p.id}`} onClick={() => { setSug([]); setSearchOpen(false); }}>
                      <img src={p.img} alt="" />
                      <div><b>{p.sku}</b><div style={{ color: "#888", fontSize: 12 }}>{money(p.price)} · {p.name.slice(0, 48)}…</div></div>
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
    </header>
  );
}
