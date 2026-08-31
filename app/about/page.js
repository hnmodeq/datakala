import Link from "next/link";
import { WHY_FS } from "@/lib/hubs";

export const metadata = { title: "درباره دیتاکالا - دیتاکالا" };

export default function About() {
  return (
    <>
      <section className="hub-hero" style={{ backgroundImage: "url(/images/20251230115848cad4ei.jpg)" }}>
        <div className="container">
          <div className="hub-hero-copy">
            <div className="kicker">درباره دیتاکالا</div>
            <h1>طراحی شبکه سازمانی را ساده کنید.</h1>
            <p>با به چالش کشیدن وضعیت موجود با پلتفرم یکپارچه و نوآوری مداوم، راه‌حل‌هایی ارائه می‌دهیم که اتصالات حیاتی را در دیتاسنتر، سازمان، SMB و مخابرات ساده می‌کنند.</p>
          </div>
        </div>
      </section>
      <section className="home-sec">
        <div className="container">
          <div className="stats">
            <div className="stat"><b>+۵۰۰٬۰۰۰</b><span>مشتری جهانی</span></div>
            <div className="stat"><b>۲۰۰+</b><span>کشور و منطقه</span></div>
            <div className="stat"><b>+۸۰۰</b><span>کارشناس R&D</span></div>
            <div className="stat"><b>۹۹٪</b><span>سفارش‌ها به‌موقع</span></div>
          </div>
        </div>
      </section>
      <section className="home-sec">
        <div className="container">
          <h2 className="sec-title">شکستن سد پیچیدگی</h2>
          <p className="sec-lead">با معماری ساده‌شده و نرم‌افزار یکپارچه، دیتاکالا مانع عملیاتی را حذف می‌کند و کارایی مورد نیاز شبکه هوشمند فردا را می‌رساند.</p>
          <div className="why-grid" style={{ gridTemplateColumns: "repeat(3,1fr)" }}>
            {WHY_FS.map((w) => (
              <Link className="why-card" href={w.href} key={w.t}>
                <img src={w.img} alt="" style={{ width: "100%", height: 120, objectFit: "cover", borderRadius: 8 }} />
                <h3>{w.t}</h3>
                <p>{w.d}</p>
                <span>بیشتر بدانید ›</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="home-sec last">
        <div className="container">
          <h2 className="sec-title">داستان‌های موفقیت</h2>
          <div className="case-grid">
            {[
              ["/images/20240629103850kymtvo.png", "ایالات متحده", "شبکه دیتاسنتر برای خودرو خودران"],
              ["/images/20240629103850pixlsb.jpg", "آلمان", "پایداری شبکه با MLAG در تولید"],
              ["/images/20240629103850zdlu9m.png", "ژاپن", "ارتقای VXLAN در صنعت سرگرمی"],
            ].map(([img, loc, t]) => (
              <article className="case" key={t}><img src={img} alt="" /><div className="body"><div className="loc">{loc}</div><h3>{t}</h3></div></article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
