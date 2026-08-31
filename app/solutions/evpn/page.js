import Link from "next/link";

export const metadata = { title: "اتوماسیون EVPN-VXLAN - دیتاکالا" };

export default function Evpn() {
  return (
    <>
      <section className="hub-hero" style={{ backgroundImage: "url(/images/20251226161515jrnoop.jpg)" }}>
        <div className="container"><div className="hub-hero-copy">
          <h1>اتوماسیون و مدیریت فابریک EVPN-VXLAN در دیتاسنتر ابری</h1>
          <p>استقرار فابریک VXLAN را ساده کنید، مدیریت را متمرکز کنید، پیچیدگی را کم کنید، چابکی کسب‌وکار را بالا ببرید و زمان رسیدن به ارزش را کوتاه کنید.</p>
          <Link className="btn btn-red" href="/contact">تماس با ما</Link>
        </div></div>
      </section>
      <section className="section">
        <div className="container">
          <h2 className="sec-title">ساده‌سازی استقرار و مدیریت EVPN-VXLAN با AmpCon-DC</h2>
          <p className="sec-lead">پلتفرم مدیریتی طراحی‌شده برای خودکارسازی و حفظ دیتاسنتر، با قالب‌های پیکربندی برای استقرار VXLAN و مدیریت مستمر زیرساخت.</p>
          <img src="/images/20251226161515jrnoop.jpg" alt="" style={{ width: "100%", borderRadius: 12, maxHeight: 360, objectFit: "cover" }} />
        </div>
      </section>
      <section className="home-sec">
        <div className="container">
          <h2 className="sec-title">فهرست محصولات</h2>
          <div className="fam-grid">
            {[
              ["/images/20240430173548o0beem.jpg.webp", "پلتفرم AmpCon-DC", "/software"],
              ["/images/20250116162705er3rbv.png", "سوئیچ دیتاسنتر PicOS®", "/c/switches/picos-dc"],
              ["/images/20220409111938_554.png", "ماژول نوری", "/c/transceivers"],
              ["/images/12285.main.jpg", "کابل فیبر", "/c/cables"],
            ].map(([img, t, h]) => (
              <Link className="fam-card" href={h} key={t}><div className="fam-img"><img src={img} alt="" /></div><h3>{t}</h3></Link>
            ))}
          </div>
        </div>
      </section>
      <section className="home-sec last">
        <div className="container help-2">
          <div><h2>آماده شروع هستید؟</h2><p>استقرار و مدیریت VXLAN را ساده کنید.</p></div>
          <Link className="help-card" href="/support"><b>پشتیبانی فنی</b><span>مشاوره بگیرید</span></Link>
          <Link className="help-card" href="/contact"><b>تماس با فروش</b><span>۱-۸۸۸-۴۶۸-۹۹۱۰</span></Link>
        </div>
      </section>
    </>
  );
}
