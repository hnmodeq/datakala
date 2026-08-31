import { notFound } from "next/navigation";
import { CATEGORIES, PRODUCTS } from "@/lib/data";
import { MEGA, allFamilies } from "@/lib/mega";
import Gallery from "@/components/Gallery";

export function generateStaticParams() {
  return allFamilies().map((f) => ({ slug: f.cat, family: f.id }));
}

export async function generateMetadata({ params }) {
  const { slug, family } = await params;
  const fams = MEGA[slug] || [];
  const fam = fams.find((f) => f.id === family);
  return { title: fam ? `${fam.name} - دیتاکالا` : "دیتاکالا" };
}

export default async function FamilyPage({ params }) {
  const { slug, family } = await params;
  const cat = CATEGORIES.find((c) => c.id === slug);
  const fams = MEGA[slug] || [];
  const fam = fams.find((f) => f.id === family);
  if (!cat || !fam) notFound();
  let products = PRODUCTS.filter((p) => p.cat === slug && p.family === family);
  if (!products.length) products = PRODUCTS.filter((p) => p.cat === slug);
  return <Gallery cat={cat} family={fam} families={fams} products={products} />;
}
