"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import { CATEGORIES, PRODUCTS, money, byCat } from "@/lib/data";
import { useCart } from "./CartProvider";

function Flag() {
  return (
    <svg className="flag" viewBox="0 0 19 13"><rect width="19" height="13" fill="#b22234"/><path d="M0 1h19M0 3h19M0 5h19M0 7h19M0 9h19M0 11h19" stroke="#fff" strokeWidth="1"/><rect width="8" height="7" fill="#3c3b6e"/></svg>
  );
}

export default function Header() {
  const path = usePathname();
  const router = useRouter();
  const { count, items, add } = useCart();
  const [q, setQ] = useState("");
  const [sug, setSug] = useState([]);
  const [mega, setMega] = useState(false);
  const [megaCat, setMegaCat] = useState(CATEGORIES[0].id);
  const [mini, setMini] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const hideT = useRef();

  const showMega = () => { clearTimeout(hideT.current); setMega(true); };
  const hideMega = () => { hideT.current = setTimeout(() => setMega(false), 160); };

  useEffect(() => {
    if (!q.trim()) { setSug([]); return; }
    const v = q.toLowerCase();
    setSug(PRODUCTS.filter((p) => (p.sku + " " + p.name + " " + p.cat).toLowerCase().includes(v)).slice(0, 6));
  }, [q]);

  const cat = CATEGORIES.find((c) => c.id === megaCat) || CATEGORIES[0];
  const feat = byCat(cat.id).slice(0, 4);
  const lined = items.map((i) => ({ ...i, p: PRODUCTS.find((x) => x.id === i.id) })).filter((x) => x.p);

  return (
    <>
      <div className="topbar">
        <div className="container">
          <div className="top-left">
            <div className="drop">
              <button><Flag /> United States <span className="caret" /></button>
              <div className="drop-menu">
                <a href="#"><Flag /> United States</a>
                <a href="#">🇩🇪 Germany</a>
                <a href="#">🇬🇧 United Kingdom</a>
                <a href="#">🇦🇺 Australia</a>
                <a href="#">🇸🇬 Singapore</a>
                <a href="#">🇯🇵 Japan</a>
              </div>
            </div>
            <div className="drop">
              <button>English <span className="caret" /></button>
              <div className="drop-menu">
                <a href="#">English</a><a href="#">Deutsch</a><a href="#">Español</a><a href="#">Français</a><a href="#">日本語</a>
              </div>
            </div>
          </div>
          <div className="top-right">
            <Link href="/support">Help Center</Link>
            <Link href="/support">Track Order</Link>
            <Link href="/contact">Contact</Link>
            <span>1-888-468-9910</span>
          </div>
        </div>
      </div>
      <header className="header">
        <div className="header-main">
          <div className="container">
            <button className="mobile-toggle" onClick={() => setNavOpen((v) => !v)} aria-label="Menu">☰</button>
            <Link href="/"><Logo /></Link>
            <form className="search" onSubmit={(e) => { e.preventDefault(); router.push("/search?q=" + encodeURIComponent(q)); setSug([]); }}>
              <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search by keyword, SKU or Item#" />
              <button type="submit" aria-label="Search">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>
              </button>
              {sug.length > 0 && (
                <div className="search-suggest">
                  {sug.map((p) => (
                    <Link key={p.id} href={`/products/${p.id}`} onClick={() => setSug([])}>
                      <img src={p.img} alt="" />
                      <div><b>{p.sku}</b><div style={{ color: "#888", fontSize: 12 }}>{money(p.price)} · {p.name.slice(0, 48)}…</div></div>
                    </Link>
                  ))}
                </div>
              )}
            </form>
            <div className="header-acts">
              <Link className="icon-btn" href="/login">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="3.5"/><path d="M5 19c1.5-3.5 4-5 7-5s5.5 1.5 7 5"/></svg>
                <span>Account</span>
              </Link>
              <Link className="icon-btn" href="/support">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 114 2c0 1.5-2 1.8-2 3"/><circle cx="12" cy="17" r=".8" fill="currentColor"/></svg>
                <span>Support</span>
              </Link>
              <div className="icon-btn" onMouseEnter={() => setMini(true)} onMouseLeave={() => setMini(false)} style={{ position: "relative" }}>
                <Link href="/cart" className="icon-btn" style={{ padding: 0 }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 6h15l-1.5 9h-12z"/><path d="M6 6L5 3H2"/><circle cx="9" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/></svg>
                  <span>Cart</span>
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
            </div>
          </div>
        </div>
        <nav className={"nav" + (navOpen ? " open" : "")}>
          <div className="container">
            <Link href="/c/switches" className={"nav-link all-products" + (mega ? " open" : "")}
              onMouseEnter={showMega} onMouseLeave={hideMega}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
              All Products
            </Link>
            <div className="nav-dd">
              <Link className={"nav-link" + (path.startsWith("/solutions") ? " active" : "")} href="/solutions">Solutions</Link>
              <div className="nav-fly">
                <Link href="/solutions">Data Center / AI Fabrics</Link>
                <Link href="/solutions">Enterprise Campus</Link>
                <Link href="/solutions">400G DCI / OTN</Link>
                <Link href="/solutions">Cabling Infrastructure</Link>
                <Link href="/solutions">Wi-Fi 7 Campus</Link>
              </div>
            </div>
            <div className="nav-dd">
              <Link className={"nav-link" + (path.startsWith("/software") ? " active" : "")} href="/software">Software</Link>
              <div className="nav-fly">
                <Link href="/software">PicOS® Switch Software</Link>
                <Link href="/software">AmpCon-DC</Link>
                <Link href="/software">AmpCon-Campus</Link>
                <Link href="/software">PicOS-V (Free Trial)</Link>
              </div>
            </div>
            <div className="nav-dd">
              <Link className={"nav-link" + (path.startsWith("/support") ? " active" : "")} href="/support">Support</Link>
              <div className="nav-fly">
                <Link href="/support">Help Center</Link>
                <Link href="/support">Track Order</Link>
                <Link href="/support">Warranty / RMA</Link>
                <Link href="/contact">Contact Sales</Link>
              </div>
            </div>
            <Link className={"nav-link" + (path.startsWith("/about") ? " active" : "")} href="/about">About FS</Link>

            {mega && (
              <div className="mega" onMouseEnter={showMega} onMouseLeave={hideMega}>
                <div className="mega-cats">
                  {CATEGORIES.map((c) => (
                    <button key={c.id} className={c.id === megaCat ? "active" : ""} onMouseEnter={() => setMegaCat(c.id)}>
                      {c.name} <span>›</span>
                    </button>
                  ))}
                </div>
                <div className="mega-panel">
                  <h4><Link href={`/c/${cat.id}`}>{cat.name}</Link></h4>
                  <div className="mega-grid">
                    {cat.families.flatMap((f) => f.links).slice(0, 18).map((l) => (
                      <Link key={l} href={`/c/${cat.id}`}>{l}</Link>
                    ))}
                  </div>
                  <div className="mega-feat">
                    {feat.map((p) => (
                      <Link key={p.id} href={`/products/${p.id}`}><img src={p.img} alt="" /><span>{p.sku}</span></Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </nav>
      </header>
    </>
  );
}
