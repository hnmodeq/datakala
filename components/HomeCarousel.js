"use client";
import Link from "next/link";
import { useState } from "react";
import { PRODUCTS, money } from "@/lib/data";
import SectionTitle from "./SectionTitle";
import { useControl } from "./ControlProvider";
import { useCart } from "./CartProvider";

export default function HomeCarousel({ id, fallbackTitle, ids }) {
  const { layout } = useControl();
  const { add } = useCart();
  const rowsKey = id === "new-products" ? "newProductsRows" : "recommendationsRows";
  const rows = Math.max(1, Math.min(4, layout[rowsKey] || 1));
  const pageSize = 4 * rows;
  const [page, setPage] = useState(0);
  const items = ids.map((id) => PRODUCTS.find((p) => p.id === id)).filter(Boolean);
  const pages = Math.max(1, Math.ceil(items.length / pageSize));
  const slice = items.slice(page * pageSize, page * pageSize + pageSize);
  return (
    <section className="home-sec">
      <div className="container">
        <SectionTitle id={id} fallback={fallbackTitle} />
        <div className="home-prod-row">
          {slice.map((p) => (
            <article className="home-p" key={p.id}>
              <Link className="home-p-link" href={`/products/${p.id}`}>
                <div className="home-p-img"><img src={p.img} alt={p.sku} /></div>
                <div className="home-p-sku">{p.sku}</div>
                <div className="home-p-desc">{p.name}</div>
              </Link>
              <div className="home-p-foot">
                <div>
                  <div className="home-p-price">{money(p.price)}</div>
                  <div className="home-p-sold">{p.sold} فروخته‌شده{p.rating ? ` · ★ ${p.rating}` : ""}</div>
                </div>
                <button className="home-p-add" onClick={() => add(p.id)} aria-label="افزودن به سبد">
                  افزودن به سبد
                </button>
              </div>
            </article>
          ))}
        </div>
        {pages > 1 && (
          <div className="dots">
            {Array.from({ length: pages }).map((_, i) => (
              <button key={i} className={i === page ? "on" : ""} onClick={() => setPage(i)} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
