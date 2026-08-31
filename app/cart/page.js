"use client";
import Link from "next/link";
import { PRODUCTS, money } from "@/lib/data";
import { useCart } from "@/components/CartProvider";

export default function CartPage() {
  const { items, setQty, remove } = useCart();
  const lined = items.map((i) => ({ ...i, p: PRODUCTS.find((x) => x.id === i.id) })).filter((x) => x.p);
  const sub = lined.reduce((a, i) => a + i.p.price * i.qty, 0);
  return (
    <div className="container" style={{ paddingTop: 20 }}>
      <h1 style={{ fontSize: 24, margin: "8px 0 18px" }}>سبد خرید</h1>
      {!lined.length ? (
        <div className="empty">سبد خرید شما خالی است. <Link href="/" style={{ color: "var(--red)" }}>ادامه خرید</Link></div>
      ) : (
        <div className="cart-wrap">
          <div>
            {lined.map(({ p, qty }) => (
              <div className="cart-item" key={p.id}>
                <Link href={`/products/${p.id}`}><img src={p.img} alt="" /></Link>
                <div>
                  <div className="sku" style={{ fontSize: 12, color: "var(--muted-2)" }}>{p.sku}</div>
                  <h3><Link href={`/products/${p.id}`}>{p.name}</Link></h3>
                  <button onClick={() => remove(p.id)} style={{ fontSize: 12, color: "var(--red)", marginTop: 6 }}>حذف</button>
                </div>
                <div className="qty">
                  <button onClick={() => setQty(p.id, qty - 1)}>−</button>
                  <input value={qty} readOnly />
                  <button onClick={() => setQty(p.id, qty + 1)}>+</button>
                </div>
                <div style={{ fontWeight: 700, color: "var(--red)" }}>{money(p.price * qty)}</div>
              </div>
            ))}
          </div>
          <aside className="summary">
            <h3>خلاصه سفارش</h3>
            <div className="sum-row"><span>جمع جزء</span><span>{money(sub)}</span></div>
            <div className="sum-row"><span>ارسال</span><span>در تسویه حساب محاسبه می‌شود</span></div>
            <div className="sum-row total"><span>جمع کل</span><span>{money(sub)}</span></div>
            <button className="btn btn-red" style={{ width: "100%", justifyContent: "center", marginTop: 14 }} onClick={() => alert("تسویه نمایشی — سفارشی ثبت نشد.")}>تسویه حساب</button>
            <p style={{ fontSize: 12, color: "var(--muted-2)", margin: "12px 0 0" }}>Visa، Mastercard، PayPal، انتقال بانکی و سفارش خرید پذیرفته می‌شود.</p>
          </aside>
        </div>
      )}
    </div>
  );
}
