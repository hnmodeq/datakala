"use client";
import { useMemo, useState } from "react";
import { CATEGORIES } from "@/lib/data";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";

export default function Listing({ cat, products }) {
  const [sort, setSort] = useState("pop");
  const [max, setMax] = useState("all");
  const list = useMemo(() => {
    let l = [...products];
    if (max !== "all") l = l.filter((p) => p.price <= +max);
    if (sort === "pl") l.sort((a, b) => a.price - b.price);
    if (sort === "ph") l.sort((a, b) => b.price - a.price);
    if (sort === "new") l = l.filter((p) => p.tag === "New").concat(l.filter((p) => p.tag !== "New"));
    return l;
  }, [products, sort, max]);

  return (
    <div className="container layout">
      <aside className="filters">
        <h3>Filter</h3>
        <div className="f-block">
          <h3>Category</h3>
          {CATEGORIES.map((c) => (
            <label key={c.id}><Link href={`/c/${c.id}`} style={{ fontWeight: c.id === cat.id ? 700 : 400, color: c.id === cat.id ? "#C00000" : undefined }}>{c.name}</Link></label>
          ))}
        </div>
        <div className="f-block">
          <h3>Price</h3>
          {[["all", "All"], ["50", "Under US$50"], ["200", "Under US$200"], ["1000", "Under US$1,000"]].map(([v, l]) => (
            <label key={v}><input type="radio" name="pr" checked={max === v} onChange={() => setMax(v)} /> {l}</label>
          ))}
        </div>
        <div className="f-block">
          <h3>Availability</h3>
          <label><input type="checkbox" defaultChecked /> In Stock</label>
        </div>
      </aside>
      <div>
        <div className="toolbar">
          <span>{list.length} products</span>
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="pop">Best Selling</option>
            <option value="new">Newest</option>
            <option value="pl">Price: Low to High</option>
            <option value="ph">Price: High to Low</option>
          </select>
        </div>
        {cat.families?.length > 0 && (
          <div className="cat-grid" style={{ marginBottom: 22, gridTemplateColumns: "repeat(4,1fr)" }}>
            {cat.families.slice(0, 4).map((f) => (
              <article className="cat-card" key={f.name} style={{ padding: 12 }}>
                <img src={f.img} alt="" style={{ height: 72 }} />
                <h3 style={{ fontSize: 13 }}>{f.name}</h3>
              </article>
            ))}
          </div>
        )}
        <div className="list-grid">
          {list.length ? list.map((p) => <ProductCard key={p.id} p={p} />) : <div className="empty" style={{ gridColumn: "1/-1" }}>No products in this filter.</div>}
        </div>
      </div>
    </div>
  );
}
