"use client";
import Link from "next/link";
import { useState } from "react";

export default function Support() {
  const [ok, setOk] = useState(false);
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>مرکز راهنما</h1>
          <p>مستندات، RMA، دانلود و پشتیبانی فنی ۲۴ ساعته برای سخت‌افزار FS و نرم‌افزار PicOS®.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="info-grid">
            <Link className="info" href="/contact"><img src="/images/20251204162824fbn9xq.svg" alt="" /><div><h3>تماس با فروش</h3><p>پیش‌فاکتور، فهرست مواد و طراحی پروژه.</p></div></Link>
            <div className="info"><img src="/images/202512041628125s5yyl.svg" alt="" /><div><h3>پیگیری سفارش</h3><p>ارسال همان‌روز از ۷ انبار محلی.</p></div></div>
            <div className="info"><img src="/images/20251204162812okueog.svg" alt="" /><div><h3>RMA / بازگشت کالا</h3><p>بیشتر کالاها تا ۳۰ روز قابل بازگشت هستند.</p></div></div>
          </div>
          <form className="auth" style={{ maxWidth: 640, margin: "36px auto 0" }} onSubmit={(e) => { e.preventDefault(); setOk(true); }}>
            <h1>پیگیری سفارش</h1>
            <p style={{ color: "var(--muted)", fontSize: 13 }}>شماره سفارش FS یا شناسه پیگیری را وارد کنید.</p>
            <div className="field"><label>شماره سفارش</label><input placeholder="FS20260831…" required /></div>
            <button className="btn btn-red" type="submit">پیگیری</button>
            {ok && <p style={{ marginTop: 12, fontSize: 14, color: "var(--success)" }}>نسخه نمایشی: سفارش در انبار دلاور بسته‌بندی شد · آماده تحویل به حامل همان‌روز.</p>}
          </form>
        </div>
      </section>
    </>
  );
}
