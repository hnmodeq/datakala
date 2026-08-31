"use client";
import Link from "next/link";
import { money } from "@/lib/data";
import { useCart } from "./CartProvider";

export default function ProductCard({ p }) {
  const { add } = useCart();
  return (
    <article className="p-card">
      {p.tag && <span className={"tag" + (p.tag === "New" ? " new" : "")}>{p.tag}</span>}
      <Link className="thumb" href={`/products/${p.id}`}><img src={p.img} alt={p.sku} /></Link>
      <div className="sku">{p.sku}</div>
      <h3><Link href={`/products/${p.id}`}>{p.name}</Link></h3>
      <div className="price">{money(p.price)}{p.was ? <s> {money(p.was)}</s> : null}</div>
      <div className="sold">{p.sold} Sold</div>
      <button className="add" onClick={() => add(p.id)}>Add to Cart</button>
    </article>
  );
}
