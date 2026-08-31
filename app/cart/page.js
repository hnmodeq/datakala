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
      <h1 style={{ fontSize: 24, margin: "8px 0 18px" }}>Shopping Cart</h1>
      {!lined.length ? (
        <div className="empty">Your cart is empty. <Link href="/" style={{ color: "#C00000" }}>Continue shopping</Link></div>
      ) : (
        <div className="cart-wrap">
          <div>
            {lined.map(({ p, qty }) => (
              <div className="cart-item" key={p.id}>
                <Link href={`/products/${p.id}`}><img src={p.img} alt="" /></Link>
                <div>
                  <div className="sku" style={{ fontSize: 12, color: "#888" }}>{p.sku}</div>
                  <h3><Link href={`/products/${p.id}`}>{p.name}</Link></h3>
                  <button onClick={() => remove(p.id)} style={{ fontSize: 12, color: "#C00000", marginTop: 6 }}>Remove</button>
                </div>
                <div className="qty">
                  <button onClick={() => setQty(p.id, qty - 1)}>−</button>
                  <input value={qty} readOnly />
                  <button onClick={() => setQty(p.id, qty + 1)}>+</button>
                </div>
                <div style={{ fontWeight: 700, color: "#C00000" }}>{money(p.price * qty)}</div>
              </div>
            ))}
          </div>
          <aside className="summary">
            <h3>Order Summary</h3>
            <div className="sum-row"><span>Subtotal</span><span>{money(sub)}</span></div>
            <div className="sum-row"><span>Shipping</span><span>Calculated at checkout</span></div>
            <div className="sum-row total"><span>Total</span><span>{money(sub)}</span></div>
            <button className="btn btn-red" style={{ width: "100%", justifyContent: "center", marginTop: 14 }} onClick={() => alert("Demo checkout — order not placed.")}>Checkout</button>
            <p style={{ fontSize: 12, color: "#888", margin: "12px 0 0" }}>Visa, Mastercard, PayPal, Wire Transfer and Purchase Order accepted.</p>
          </aside>
        </div>
      )}
    </div>
  );
}
