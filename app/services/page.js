"use client";
import { useState } from "react";
import Link from "next/link";

const TABS = ["نمای کلی", "طراحی", "تست", "استقرار", "بهره‌برداری", "پس از فروش", "مطالعه موردی"];

export default function Services() {
  const [tab, setTab] = useState("نمای کلی");
  const [ok, setOk] = useState(false);
  return (
    <>
      <section className="hub-hero" style={{ backgroundImage: "url(/images/20251223114317fyflfp.jpeg)", minHeight: 260 }}>
        <div className="container"><div className="hub-hero-copy"><h1>مشاوره راه‌حل</h1></div></div>
      </section>
      <div className="tab-bar">
        <div className="container">
          {TABS.map((t) => <button key={t} className={t === tab ? "on" : ""} onClick={() => setTab(t)}>{t}</button>)}
          <Link className="btn btn-red" href="/contact" style={{ marginInlineStart: "auto" }}>تماس با ما</Link>
        </div>
      </div>
      <section className="section">
        <div className="container split">
          <div>
            <h2>چرا خدمات راه‌حل FS</h2>
            <p style={{ color: "var(--muted)" }}>FS به رضایت مشتری با تمرکز بر کیفیت و مدیریت هزینه متعهد است. شبکه جهانی، کارکنان ماهر و موجودی محلی دسترسی را هرجا که نیاز دارید فراهم می‌کند. به ما برای راه‌حل‌های کارآمد و قابل استقرار اعتماد کنید.</p>
            <ul className="hl">
              <li>سفارشی‌سازی مطابق نیاز دقیق شما</li>
              <li>مشاوره حرفه‌ای مهندسان فروش و فنی</li>
              <li>برنامه‌ریزی منابع و طراحی جامع</li>
            </ul>
            <Link className="btn btn-red" href="/contact">درخواست مشاوره آنلاین</Link>
          </div>
          <img src="/images/20251226161515jrnoop.jpg" alt="" />
        </div>
      </section>
      <section className="home-sec">
        <div className="container">
          <h2 className="sec-title">چرخه عمر شبکه</h2>
          <div className="flow-4">
            {["برنامه و طراحی", "تست و انطباق", "تحویل و یکپارچه‌سازی", "مدیریت و عملیات", "پشتیبانی پس از فروش"].map((t, i) => (
              <div className="flow" key={t}><div className="flow-n">{i + 1}</div><div>{t}</div></div>
            ))}
          </div>
        </div>
      </section>
      <section className="section gray">
        <div className="container split">
          <form className="auth" style={{ margin: 0, maxWidth: "none" }} onSubmit={(e) => { e.preventDefault(); setOk(true); }}>
            <h1>آماده شروع هستید؟</h1>
            <div className="field"><label>نام</label><input required /></div>
            <div className="field"><label>ایمیل</label><input type="email" required /></div>
            <div className="field"><label>پیام</label><textarea placeholder="پروژه، مقیاس و بودجه را شرح دهید…" /></div>
            <button className="btn btn-red" type="submit">ارسال</button>
            {ok && <p style={{ color: "var(--success)", marginTop: 10 }}>درخواست ارسال شد (نسخه نمایشی).</p>}
          </form>
          <div>
            <h2>تماس با ما</h2>
            <p><b>۱-۸۸۸-۴۶۸-۹۹۱۰</b></p>
            <p style={{ color: "var(--muted)" }}>کارشناس مشتری ۲۴ ساعته در ۷ روز هفته.</p>
            <p>ایمیل: sales@example.com</p>
            <p>گفتگوی زنده از هدر سایت.</p>
          </div>
        </div>
      </section>
    </>
  );
}
