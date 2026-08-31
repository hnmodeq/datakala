"use client";
import { useState } from "react";
import Link from "next/link";
import { byCat } from "@/lib/data";
import { useCart } from "@/components/CartProvider";

export default function BuyBox({ p }) {
  const [qty, setQty] = useState(1);
  const { add } = useCart();
  const variants = byCat(p.cat).slice(0, 4);
  return (
    <>
      <div style={{ fontSize: 13, color: "#666", marginBottom: 6 }}>Products:</div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 16 }}>
        {variants.map((v) => (
          <Link key={v.id} href={`/products/${v.id}`}>
            <button style={{ border: `1px solid ${v.id === p.id ? "#C00000" : "#E8E8E8"}`, color: v.id === p.id ? "#C00000" : "#19191A", padding: "8px 10px", borderRadius: 4, fontSize: 12, background: v.id === p.id ? "#fff5f5" : "#fff" }}>{v.sku}</button>
          </Link>
        ))}
      </div>
      <div className="qty-row">
        <span style={{ fontSize: 13, fontWeight: 600 }}>Qty</span>
        <div className="qty">
          <button onClick={() => setQty((q) => Math.max(1, q - 1))}>−</button>
          <input value={qty} readOnly />
          <button onClick={() => setQty((q) => q + 1)}>+</button>
        </div>
        <span style={{ fontSize: 12, color: "#888" }}>{p.stock} available</span>
      </div>
      <div className="pdp-acts">
        <button className="btn btn-red" onClick={() => add(p.id, qty)}>Add to Cart</button>
        <Link className="btn btn-dark" href="/contact">Contact Sales</Link>
      </div>
    </>
  );
}
