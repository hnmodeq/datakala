"use client";
import { useState } from "react";

export default function Contact() {
  const [ok, setOk] = useState(false);
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>تماس با فروش</h1>
          <p>استعلام پروژه، اپتیک سفارشی، لایسنس PicOS® و طراحی راه‌حل — مهندسان ظرف یک روز کاری پاسخ می‌دهند.</p>
        </div>
      </section>
      <section className="section">
        <div className="container split">
          <form className="auth" style={{ margin: 0, maxWidth: "none" }} onSubmit={(e) => { e.preventDefault(); setOk(true); }}>
            <h1>استعلام پروژه</h1>
            <div className="field"><label>نام</label><input required /></div>
            <div className="field"><label>ایمیل کاری</label><input type="email" required /></div>
            <div className="field"><label>شرکت</label><input /></div>
            <div className="field"><label>موضوع مورد علاقه</label>
              <select defaultValue="PicOS® / AmpCon">
                <option>PicOS® / AmpCon</option>
                <option>سوئیچ‌های دیتاسنتر</option>
                <option>ماژول‌های نوری</option>
                <option>کابل‌کشی / FHD®</option>
                <option>DCI / OTN چهارصد گیگابیت</option>
              </select>
            </div>
            <div className="field"><label>پیام</label><textarea placeholder="درباره پورت‌ها، فواصل و سازگاری OEM بگویید…" /></div>
            <button className="btn btn-red" type="submit">ارسال</button>
            {ok && <p style={{ color: "#1a7f37", fontSize: 14, marginTop: 10 }}>استعلام ارسال شد (نسخه نمایشی). مهندس فروش پیگیری می‌کند.</p>}
          </form>
          <div>
            <h2>گفتگو با FS</h2>
            <p style={{ color: "#555" }}>دفتر مرکزی ایالات متحده · 380 Centerpoint Blvd, New Castle, DE</p>
            <p><b>1-888-468-9910</b></p>
            <p style={{ color: "#555" }}>تیم‌های محلی در آلمان، بریتانیا، استرالیا، سنگاپور، ژاپن و چین.</p>
            <div className="stats" style={{ gridTemplateColumns: "1fr 1fr" }}>
              <div className="stat"><b>۲۴/۷</b><span>پشتیبانی فنی</span></div>
              <div className="stat"><b>۹۰٪</b><span>ارسال همان‌روز</span></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
