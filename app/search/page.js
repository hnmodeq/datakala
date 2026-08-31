"use client";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { PRODUCTS } from "@/lib/data";
import ProductCard from "@/components/ProductCard";

function Results() {
  const q = (useSearchParams().get("q") || "").trim();
  const hits = PRODUCTS.filter((p) => (p.sku + " " + p.name + " " + p.cat).toLowerCase().includes(q.toLowerCase()));
  return (
    <div className="container" style={{ padding: "24px 0 50px" }}>
      <h1 style={{ fontSize: 22 }}>{q ? `Search results for “${q}” (${hits.length})` : "Enter a keyword, SKU or item #"}</h1>
      <div className="list-grid" style={{ marginTop: 18 }}>
        {hits.length ? hits.map((p) => <ProductCard key={p.id} p={p} />) : <div className="empty" style={{ gridColumn: "1/-1" }}>No products matched. Try S3900, SFP or PicOS.</div>}
      </div>
    </div>
  );
}

export default function SearchPage() {
  return <Suspense><Results /></Suspense>;
}
