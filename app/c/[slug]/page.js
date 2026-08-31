import { notFound } from "next/navigation";
import { CATEGORIES } from "@/lib/data";
import CategoryHub from "@/components/CategoryHub";

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
  return <CategoryHub cat={cat} />;
}
