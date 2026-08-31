import { notFound } from "next/navigation";
import Link from "next/link";
import { PRODUCTS, getProduct, money, byCat, getCat } from "@/lib/data";
import BuyBox from "./BuyBox";
import ProductCard from "@/components/ProductCard";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ id: p.id }));
}
export async function generateMetadata({ params }) {
  const { id } = await params;
  const p = getProduct(id);
  return { title: p ? `${p.sku} - دیتاکالا` : "محصول - دیتاکالا" };
}

export default async function ProductPage({ params }) {
  const { id } = await params;
  const p = getProduct(id);
  if (!p) notFound();
  const related = byCat(p.cat).filter((x) => x.id !== p.id).slice(0, 5);
  const cat = getCat(p.cat);
  return (
    <div className="container">
      <div className="crumbs"><Link href="/">خانه</Link> / <Link href={`/c/${p.cat}`}>{cat?.name || p.cat}</Link> / {p.sku}</div>
      <div className="pdp">
        <div className="gallery">
          <div className="thumbs">
            <button className="on"><img src={p.img} alt="" /></button>
          </div>
          <div className="main-img"><img src={p.img} alt={p.sku} /></div>
        </div>
        <div className="pdp-info">
          <h1>{p.sku}، {p.name}</h1>
          <div className="pdp-meta">
            <span>شماره قطعه: <b>{p.sku}</b></span>
            <span>SKU: <b>{p.id}</b></span>
            <span className="stars">★★★★★ {p.rating}</span>
            <span>{p.reviews} دیدگاه · {p.sold} فروخته‌شده</span>
          </div>
          <div className="pdp-price">{money(p.price)}{p.was ? <s style={{ fontSize: 16, color: "var(--muted-2)", fontWeight: 400 }}> {money(p.was)}</s> : null}</div>
          <div className="pdp-ship">موجود در انبار · ارسال همان‌روز از انبار دلاور (سفارش قبل از ساعت ۱۶:۰۰ EST)</div>
          <BuyBox p={p} />
          <div className="hl">
            <h3>نکات برجسته محصول</h3>
            <ul>
              <li>{p.ports ? `اتصال ${p.ports}` : "ساخت سازمانی"}</li>
              <li>{p.chip ? `سیلیکون ${p.chip} برای ارسال پایدار بسته‌ها` : "کدگذاری و تست‌شده برای سازگاری چندفروشنده‌ای"}</li>
              <li>ارسال از انبارهای جهانی با بازگشت ۳۰ روزه</li>
              <li>پشتیبانی فنی مادام‌العمر از مهندسان دیتاکالا</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="pdp-tabs spec" style={{ paddingBottom: 40 }}>
        <h2 style={{ fontSize: 18 }}>مشخصات</h2>
        <table>
          <tbody>
            <tr><td>شماره قطعه</td><td>{p.sku}</td></tr>
            <tr><td>SKU</td><td>{p.id}</td></tr>
            <tr><td>دسته‌بندی</td><td>{cat?.name || p.cat}</td></tr>
            <tr><td>پورت / رابط</td><td>{p.ports || "—"}</td></tr>
            <tr><td>چیپ‌ست</td><td>{p.chip || "—"}</td></tr>
            <tr><td>گارانتی</td><td>۵ سال (سخت‌افزار) / پشتیبانی فنی مادام‌العمر</td></tr>
            <tr><td>انطباق</td><td>CE، RoHS، FCC، ISO 9001</td></tr>
          </tbody>
        </table>
      </div>
      <h2 style={{ fontSize: 20 }}>محصولات مرتبط</h2>
      <div className="prod-row" style={{ margin: "16px 0 40px" }}>{related.map((r) => <ProductCard key={r.id} p={r} />)}</div>
    </div>
  );
}
