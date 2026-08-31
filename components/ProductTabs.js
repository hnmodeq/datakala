"use client";
import { useState } from "react";
import ProductCard from "./ProductCard";
import { PRODUCTS, NEW_IDS, REC_IDS } from "@/lib/data";

export default function ProductTabs() {
  const [tab, setTab] = useState("new");
  const ids = tab === "new" ? NEW_IDS : REC_IDS;
  const list = ids.map((id) => PRODUCTS.find((p) => p.id === id)).filter(Boolean);
  return (
    <section className="section gray">
      <div className="container">
        <div className="tabs">
          <button className={tab === "new" ? "on" : ""} onClick={() => setTab("new")}>محصولات جدید</button>
          <button className={tab === "rec" ? "on" : ""} onClick={() => setTab("rec")}>پیشنهادی</button>
        </div>
        <div className="prod-row">{list.map((p) => <ProductCard key={p.id} p={p} />)}</div>
      </div>
    </section>
  );
}
