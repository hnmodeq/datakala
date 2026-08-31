"use client";
import Link from "next/link";
import { useState } from "react";

export default function Support() {
  const [ok, setOk] = useState(false);
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Help Center</h1>
          <p>Documentation, RMA, downloads and 24/7 technical support for FS hardware and PicOS® software.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="info-grid">
            <Link className="info" href="/contact"><img src="/images/20251204162824fbn9xq.svg" alt="" /><div><h3>Contact Sales</h3><p>Quotes, BOM and project design.</p></div></Link>
            <div className="info"><img src="/images/202512041628125s5yyl.svg" alt="" /><div><h3>Track Order</h3><p>Same-day ship from 7 local warehouses.</p></div></div>
            <div className="info"><img src="/images/20251204162812okueog.svg" alt="" /><div><h3>RMA / Returns</h3><p>Most items returnable within 30 days.</p></div></div>
          </div>
          <form className="auth" style={{ maxWidth: 640, margin: "36px auto 0" }} onSubmit={(e) => { e.preventDefault(); setOk(true); }}>
            <h1>Track an order</h1>
            <p style={{ color: "#666", fontSize: 13 }}>Enter your FS order number or tracking ID.</p>
            <div className="field"><label>Order number</label><input placeholder="FS20260831…" required /></div>
            <button className="btn btn-red" type="submit">Track</button>
            {ok && <p style={{ marginTop: 12, fontSize: 14, color: "#1a7f37" }}>Demo: Order packed at Delaware warehouse · Out for same-day carrier pickup.</p>}
          </form>
        </div>
      </section>
    </>
  );
}
