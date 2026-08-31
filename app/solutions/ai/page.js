import Link from "next/link";

export const metadata = { title: "کابل‌کشی کلاستر هوش مصنوعی - دیتاکالا" };

export default function AiSol() {
  return (
    <>
      <section className="hub-hero" style={{ backgroundImage: "url(/images/202604081453079w890k.jpg)" }}>
        <div className="container"><div className="hub-hero-copy">
          <h1>راه‌حل کابل‌کشی کلاستر هوش مصنوعی برای H100 / H200 / B200 / B300</h1>
          <p>اتصال با چگالی بالا، کم‌تأخیر و بدون اتلاف برای کلاستر GPU در مقیاس رک تا سالن.</p>
          <Link className="btn btn-red" href="/contact">صحبت با کارشناس</Link>
        </div></div>
      </section>
      <section className="section">
        <div className="container split">
          <div>
            <h2>کابل‌کشی برای زیرساخت آماده آینده</h2>
            <p style={{ color: "var(--muted)" }}>معماری کابل‌کشی فیبر چگالی بالا با تنه MTP®، بریک‌اوت و اپتیک 800G/1.6T برای ارتباط GPU کم‌تأخیر. طراحی، تست و تحویل به‌صورت یک بسته خدمات.</p>
            <ul className="hl">
              <li>چگالی بالاتر، مسیر کابل کوتاه‌تر، مدیریت ساده‌تر</li>
              <li>مقیاس از یک رک تا سالن بدون بازطراحی</li>
              <li>سازگار با InfiniBand NVIDIA® و اترنت RoCE</li>
            </ul>
          </div>
          <img src="/images/20251030173716j4aien.jpg" alt="" />
        </div>
      </section>
      <section className="home-sec">
        <div className="container">
          <h2 className="sec-title">فهرست محصولات</h2>
          <div className="fam-grid">
            {[
              ["/images/2026052514533153hnfm.png", "ماژول InfiniBand", "/c/transceivers/infiniband"],
              ["/images/12285.main.jpg", "کابل MTP®/MPO", "/c/cables/mtp"],
              ["/images/20251031104722830g5b.webp", "محفظه FHD®", "/c/panels/enclosures"],
              ["/images/20250116162705er3rbv.png", "سوئیچ PicOS®", "/c/switches/picos-dc"],
            ].map(([img, t, h]) => (
              <Link className="fam-card" href={h} key={t}><div className="fam-img"><img src={img} alt="" /></div><h3>{t}</h3></Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section gray">
        <div className="container">
          <h2 className="sec-title">سؤالات متداول</h2>
          <div className="faq">
            <h3>چگونه استقرار کلاستر هوش مصنوعی را برنامه‌ریزی کنیم؟</h3>
            <p>از توپولوژی GPU، فاصله رک و بودجه نوری شروع کنید. مهندسان FS مسیر کابل، قطبیت و فهرست مواد را طراحی می‌کنند.</p>
            <h3>آیا کابل‌کشی FS با InfiniBand NVIDIA سازگار است؟</h3>
            <p>بله — ماژول‌ها و کابل‌ها برای پلتفرم‌های H100/H200/B200/B300 کدگذاری و تست می‌شوند.</p>
          </div>
        </div>
      </section>
    </>
  );
}
