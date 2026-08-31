import { notFound } from "next/navigation";
import Link from "next/link";
import { CATEGORIES, byCat } from "@/lib/data";
import Listing from "./Listing";

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ slug: c.id }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const cat = CATEGORIES.find((c) => c.id === slug);
  return { title: cat ? `${cat.name} - دیتاکالا` : "دیتاکالا" };
}

export default async function CategoryPage({ params }) {
  const { slug } = await params;
  const cat = CATEGORIES.find((c) => c.id === slug);
  if (!cat) notFound();
  const products = byCat(cat.id);
  return (
    <>
      <div className="container crumbs"><Link href="/">خانه</Link> / {cat.name}</div>
      <section className="page-hero" style={{ padding: "36px 0" }}>
        <div className="container">
          <h1>{cat.name}</h1>
          <p>{cat.blurb}</p>
        </div>
      </section>
      <Listing cat={cat} products={products} />
    </>
  );
}
