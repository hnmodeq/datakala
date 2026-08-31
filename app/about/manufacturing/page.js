export const metadata = { title: "مرکز تولید - دیتاکالا" };

export default function Manufacturing() {
  return (
    <>
      <section className="hub-hero" style={{ backgroundImage: "url(/images/202512231142474dqip5.jpeg)", minHeight: 240 }}>
        <div className="container"><div className="hub-hero-copy"><h1>تولید در کلاس جهانی</h1></div></div>
      </section>
      <section className="section">
        <div className="container split">
          <div>
            <h2>توانایی تولید پیشرفته</h2>
            <p style={{ color: "var(--muted)" }}>دیتاکالا از تولید هوشمند پیشرفته و قابلیت تحویل جهانی در صنعت ICT بهره می‌برد. با سیستم‌های SAP ERP، برنامه‌ریزی پیشرفته (APS)، سیستم اجرای تولید (MES) و رویه‌های عملیاتی استاندارد، محیط کلین‌روم کلاس ۱۰۰٬۰۰۰ را برای تولید باکیفیت تضمین می‌کنیم.</p>
          </div>
          <img src="/images/20251223114302ypc47g.jpeg" alt="" />
        </div>
      </section>
      <section className="home-sec last">
        <div className="container">
          <h2 className="sec-title">توانایی‌های تولید</h2>
          <div className="media-4" style={{ gridTemplateColumns: "1fr 1fr" }}>
            {[
              ["/images/202512231142474dqip5.jpeg", "کارخانه هوشمند +۵٬۰۰۰٬۰۰۰ فوت مربع", "اتوماسیون پیشرفته، سیستم‌های تولید منعطف و تحلیل داده لحظه‌ای."],
              ["/images/20251223114317fyflfp.jpeg", "+۱٬۳۰۰٬۰۰۰ فوت مربع کارگاه", "تولید ماژول نوری، سوئیچ، کابل‌کشی ساخت‌یافته، سرور و بیشتر."],
              ["/images/20251223114302ypc47g.jpeg", "پوشش اتوماسیون ۸۵٪+ فرآیندهای کلیدی", "کارایی تولید بالاتر، خطای کمتر و کیفیت پایدار."],
              ["/images/20251031104722830g5b.webp", "ظرفیت سالانه ۱۶٫۸ میلیون محصول ارتباطی", "عملیات در مقیاس کارآمد برای تحویل به‌موقع به مشتریان جهانی."],
            ].map(([img, t, d]) => (
              <article className="media-card" key={t}><img src={img} alt="" /><div className="body"><h3>{t}</h3><p>{d}</p></div></article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
