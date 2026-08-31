import Link from "next/link";
import { MEGA } from "@/lib/mega";
import { CATEGORIES } from "@/lib/data";

export const metadata = { title: "مرکز مستندات - دیتاکالا" };

export default function Docs() {
  return (
    <>
      <section className="hub-hero docs-hero">
        <div className="container">
          <h1>مرکز مستندات</h1>
          <form className="docs-search" action="/search">
            <input name="q" placeholder="جستجوی همه مستندات" />
            <button className="btn btn-red" type="submit">جستجو</button>
          </form>
        </div>
      </section>
      <section className="section">
        <div className="container docs-layout">
          <aside className="policy-nav">
            <Link href="/software">PicOS®</Link>
            <Link href="/software">AmpCon-DC</Link>
            <Link href="/software">AmpCon-Campus</Link>
            {CATEGORIES.map((c) => <Link key={c.id} href={`/c/${c.id}`}>{c.name}</Link>)}
          </aside>
          <div>
            {Object.entries(MEGA).map(([id, fams]) => {
              const cat = CATEGORIES.find((c) => c.id === id);
              return (
                <div className="doc-block" key={id}>
                  <h2>{cat?.name || id}</h2>
                  <div className="doc-cards">
                    {fams.map((f) => (
                      <Link key={f.id} href={f.href}>{f.name}</Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
