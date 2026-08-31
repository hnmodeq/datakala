import Link from "next/link";

export const metadata = { title: "ارسال و تحویل - دیتاکالا" };

const NAV = [
  ["ارسال و تحویل", "/services/shipping"],
  ["روش‌های پرداخت", "/support"],
  ["سیاست بازگشت", "/support"],
  ["گارانتی محصول", "/support"],
  ["مشاوره راه‌حل", "/services"],
];

export default function Shipping() {
  return (
    <>
      <section className="hub-hero" style={{ backgroundImage: "url(/images/20251230115848cad4ei.jpg)", minHeight: 220 }}>
        <div className="container"><div className="hub-hero-copy"><h1>ارسال و تحویل</h1></div></div>
      </section>
      <section className="section">
        <div className="container policy-layout">
          <aside className="policy-nav">
            {NAV.map(([t, h]) => <Link key={t} href={h}>{t}</Link>)}
          </aside>
          <div>
            <h2>ارسال همان‌روز و رایگان در آمریکا</h2>
            <p style={{ color: "#555" }}>FS ارسال همان‌روز کالاهای موجود را از انبارهای دلاور و کالیفرنیا ارائه می‌دهد. سفارش‌های بالای ۷۹ دلار آمریکا ارسال رایگان دارند (به‌جز اضافه وزن، اقلام سفارشی و مقاصد خاص).</p>
            <div className="media-4" style={{ gridTemplateColumns: "1fr 1fr", margin: "18px 0 28px" }}>
              <article className="media-card"><img src="/images/20251230115848cad4ei.jpg" alt="" /><div className="body"><h3>انبار دلاور</h3><p>380 Centerpoint Blvd, New Castle, DE · ۱-۸۸۸-۴۶۸-۹۹۱۰ · ۹:۳۰–۱۷:۳۰ EST</p></div></article>
              <article className="media-card"><img src="/images/20251223114302ypc47g.jpeg" alt="" /><div className="body"><h3>انبار کالیفرنیا</h3><p>15241 Don Julian Rd, City of Industry, CA · ۹:۳۰–۱۷:۳۰ PST</p></div></article>
            </div>
            <h2>پوشش تحویل و زمان ترانزیت</h2>
            <p style={{ color: "#555" }}>سفارش‌ها از انبارهای دلاور و کالیفرنیا به هر ۵۰ ایالت، پورتوریکو و آدرس‌های APO/FPO ارسال می‌شوند. کالاهای موجود معمولاً همان روز کاری ارسال می‌شوند اگر قبل از ساعت ۱۶:۰۰ به وقت محلی ثبت شوند.</p>
            <div className="faq">
              <h3>هزینه ارسال چقدر است؟</h3>
              <p>هزینه بر اساس گزینه تحویل در تسویه محاسبه می‌شود. در آمریکا برای سفارش بالای ۷۹ دلار ارسال رایگان است.</p>
              <h3>چطور بفهمم سفارشم ارسال شده؟</h3>
              <p>پس از خروج بسته از انبار ایمیل اعلام حمل با نام حامل، شماره پیگیری و تاریخ ارسال می‌رسد.</p>
              <h3>اگر بسته در حمل آسیب دید چه می‌شود؟</h3>
              <p>عکس بگیرید و همان روز با حساب کاربری تماس بگیرید تا تعویض یا بازگشت طبق سیاست بازگشت انجام شود.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
