"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { money } from "@/lib/data";
import { useCart } from "@/components/CartProvider";

export default function Gallery({ cat, family, families, products }) {
  const { add } = useCart();
  const [sort, setSort] = useState("pop");
  const rail = families.length ? families : [family];
  const list = useMemo(() => {
    let l = [...products];
    if (sort === "pl") l.sort((a, b) => a.price - b.price);
    if (sort === "ph") l.sort((a, b) => b.price - a.price);
    if (sort === "new") l = l.filter((p) => p.tag === "New").concat(l.filter((p) => p.tag !== "New"));
    return l;
  }, [products, sort]);

  return (
    <div className="container" style={{ paddingBottom: 50 }}>
      <div className="crumbs">
        <Link href="/">خانه</Link> / <Link href={`/c/${cat.id}`}>{cat.name}</Link> / {family.name}
      </div>
      <h1 className="gal-title">{family.name}</h1>

      <div className="sub-rail">
        {rail.map((f) => (
          <Link key={f.id || f.name} href={f.href} className={"sub-rail-item" + (f.id === family.id ? " on" : "")}>
            <img src={f.img} alt="" />
            <span>{f.name}</span>
          </Link>
        ))}
      </div>

      <div className="pill-bar">
        <div className="pills">
          {(family.links || []).slice(0, 4).map((l) => {
            const label = typeof l === "string" ? l : l.label;
            return <button key={label} className="pill">{label}</button>;
          })}
          <button className="pill">فیلترهای بیشتر</button>
        </div>
        <div className="pill-meta">
          <span>{list.length} نتیجه</span>
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="pop">محبوبیت</option>
            <option value="new">جدیدترین</option>
            <option value="pl">قیمت: کم به زیاد</option>
            <option value="ph">قیمت: زیاد به کم</option>
          </select>
        </div>
      </div>

      <div className="gal-grid">
        {list.length ? list.map((p) => (
          <article className="g-card" key={p.id}>
            {p.tag && <span className={"tag" + (p.tag === "New" ? " new" : "")}>{p.tag === "New" ? "جدید" : "پرفروش"}</span>}
            <Link className="g-img" href={`/products/${p.id}`}><img src={p.img} alt={p.sku} /></Link>
            <h3><Link href={`/products/${p.id}`}>{p.sku}، {p.name}</Link></h3>
            {p.specs?.length ? <div className="g-specs">{p.specs.join("  |  ")}</div> : <div className="g-specs">{p.ports}</div>}
            <div className="g-price">{money(p.price)}</div>
            <div className="g-wh">{p.warehouse || `${p.stock} عدد موجود · ارسال همان‌روز`}</div>
            <div className="g-sold"><span>{p.sold} فروخته‌شده</span>{p.reviews ? <span>  {p.reviews} دیدگاه</span> : null}</div>
            <button className="add" onClick={() => add(p.id)}>افزودن به سبد</button>
          </article>
        )) : <div className="empty" style={{ gridColumn: "1/-1" }}>محصولی در این خانواده نیست — دسته‌های دیگر را ببینید.</div>}
      </div>
    </div>
  );
}
