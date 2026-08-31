import { notFound } from "next/navigation";
import Link from "next/link";
import { PRODUCTS, getProduct, money, byCat } from "@/lib/data";
import BuyBox from "./BuyBox";
import ProductCard from "@/components/ProductCard";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ id: p.id }));
}
export async function generateMetadata({ params }) {
  const { id } = await params;
  const p = getProduct(id);
  return { title: p ? `${p.sku} - FS.com` : "Product - FS.com" };
}

export default async function ProductPage({ params }) {
  const { id } = await params;
  const p = getProduct(id);
  if (!p) notFound();
  const related = byCat(p.cat).filter((x) => x.id !== p.id).slice(0, 5);
  return (
    <div className="container">
      <div className="crumbs"><Link href="/">Home</Link> / <Link href={`/c/${p.cat}`}>{p.cat}</Link> / {p.sku}</div>
      <div className="pdp">
        <div className="gallery">
          <div className="thumbs">
            <button className="on"><img src={p.img} alt="" /></button>
          </div>
          <div className="main-img"><img src={p.img} alt={p.sku} /></div>
        </div>
        <div className="pdp-info">
          <h1>{p.sku}, {p.name}</h1>
          <div className="pdp-meta">
            <span>P/N: <b>{p.sku}</b></span>
            <span>SKU: <b>{p.id}</b></span>
            <span className="stars">★★★★★ {p.rating}</span>
            <span>{p.reviews} Reviews · {p.sold} Sold</span>
          </div>
          <div className="pdp-price">{money(p.price)}{p.was ? <s style={{ fontSize: 16, color: "#888", fontWeight: 400 }}> {money(p.was)}</s> : null}</div>
          <div className="pdp-ship">In stock · Same-day shipping from Delaware warehouse (order before 4:00PM EST)</div>
          <BuyBox p={p} />
          <div className="hl">
            <h3>Product Highlights</h3>
            <ul>
              <li>{p.ports ? p.ports + " connectivity" : "Enterprise-grade build"}</li>
              <li>{p.chip ? p.chip + " silicon for reliable forwarding" : "Coded and tested for multi-vendor compatibility"}</li>
              <li>Global warehouse fulfillment with 30-day returns</li>
              <li>Lifetime technical support from FS engineers</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="pdp-tabs spec" style={{ paddingBottom: 40 }}>
        <h2 style={{ fontSize: 18 }}>Specifications</h2>
        <table>
          <tbody>
            <tr><td>Part Number</td><td>{p.sku}</td></tr>
            <tr><td>SKU</td><td>{p.id}</td></tr>
            <tr><td>Category</td><td>{p.cat}</td></tr>
            <tr><td>Ports / Interface</td><td>{p.ports || "—"}</td></tr>
            <tr><td>Chipset</td><td>{p.chip || "—"}</td></tr>
            <tr><td>Warranty</td><td>5 Years (hardware) / Lifetime technical support</td></tr>
            <tr><td>Compliance</td><td>CE, RoHS, FCC, ISO 9001</td></tr>
          </tbody>
        </table>
      </div>
      <h2 style={{ fontSize: 20 }}>Related Products</h2>
      <div className="prod-row" style={{ margin: "16px 0 40px" }}>{related.map((r) => <ProductCard key={r.id} p={r} />)}</div>
    </div>
  );
}
