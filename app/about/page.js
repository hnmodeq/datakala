export const metadata = { title: "درباره FS - دیتاکالا" };

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>درباره FS</h1>
          <p>طراحی شبکه سازمانی را ساده کنید. سادگی با کارایی بالا که سازمان‌ها را از پیچیدگی رها می‌کند.</p>
        </div>
      </section>
      <section className="section">
        <div className="container split">
          <div>
            <h2>نمای کلی شرکت</h2>
            <p style={{ color: "#555" }}>FS از سال ۲۰۰۹ پلتفرمی یکپارچه از سوئیچ، اپتیک، کابل‌کشی و نرم‌افزار برای دیتاسنتر، سازمان، کسب‌وکارهای کوچک و مخابرات ارائه می‌دهد. تعهد ما مدیریت خودمختار، پیاده‌سازی روان و مقیاس‌پذیری بی‌وقفه است.</p>
          </div>
          <img src="/images/20251230115848cad4ei.jpg" alt="FS" />
        </div>
        <div className="container">
          <div className="stats">
            <div className="stat"><b>۲۰۰۹</b><span>تأسیس</span></div>
            <div className="stat"><b>۷</b><span>انبار محلی</span></div>
            <div className="stat"><b>+۱۵۰</b><span>کشور تحت پوشش</span></div>
            <div className="stat"><b>+۹۰۰</b><span>کارشناس فروش و فنی</span></div>
          </div>
        </div>
      </section>
    </>
  );
}
