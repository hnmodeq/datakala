import Link from "next/link";
import { MEGA } from "@/lib/mega";
import { SOLUTIONS } from "@/lib/data";
import { HUBS } from "@/lib/hubs";

export default function CategoryHub({ cat }) {
  const hub = HUBS[cat.id] || HUBS.switches;
  const families = MEGA[cat.id] || cat.families || [];
  const sols = SOLUTIONS.slice(0, 4);
  return (
    <>
      <section className="hub-hero" style={{ backgroundImage: `url(${hub.hero})` }}>
        <div className="container">
          <div className="hub-hero-copy">
            <div className="kicker">{hub.kicker}</div>
            <h1>{hub.title}</h1>
          </div>
        </div>
      </section>

      <section className="home-sec">
        <div className="container">
          <h2 className="sec-title">{hub.whyTitle}</h2>
          <p className="sec-lead">{hub.whyLead}</p>
          <div className="why-grid">
            {hub.why.map((w) => (
              <Link className="why-card" href={w.href} key={w.t}>
                <img src={w.img} alt="" />
                <h3>{w.t}</h3>
                <p>{w.d}</p>
                <span>{w.a}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="home-sec gray-sec">
        <div className="container">
          <h2 className="sec-title">داخل آزمایشگاه‌های FS</h2>
          <p className="sec-lead">آزمایشگاه‌های FS برخی از گسترده‌ترین و سخت‌گیرانه‌ترین فرآیندهای تست را ترکیب می‌کنند تا کیفیت تضمین شود.</p>
          <div className="labs-split">
            <img src={hub.labsImg} alt="" />
            <div className="labs-icons">
              {[["سناریوهای تست متعدد", Itest], ["فرآیندهای استاندارد", Iproc], ["آیتم‌های تست جامع", Ibox], ["تجهیزات تست حرفه‌ای", Igear]].map(([t, Icon]) => (
                <div className="lab-i" key={t}><Icon /><span>{t}</span></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="home-sec">
        <div className="container">
          <h2 className="sec-title">توانایی طراحی راه‌حل</h2>
          <p className="sec-lead">طیف گسترده‌ای از راه‌حل‌ها با تمرکز بر رضایت مشتری، کیفیت و مدیریت هزینه.</p>
          <div className="flow-4">
            {["دریافت تقاضا", "طراحی راه‌حل", "تست راه‌حل", "بازخورد مشتری"].map((t, i) => (
              <div className="flow" key={t}>
                <div className="flow-n">{i + 1}</div>
                <div>{t}</div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 22 }}>
            <Link className="btn btn-red" href="/services">شروع طراحی راه‌حل</Link>
          </div>
        </div>
      </section>

      <section className="home-sec">
        <div className="container">
          <h2 className="sec-title">توانایی تست</h2>
          <p className="sec-lead">تجهیزات تست حرفه‌ای، فرآیندهای استاندارد و مهندسان باتجربه همه نیازهای تست محصولات ما را پوشش می‌دهند.</p>
          <div className="test-3">
            {hub.testing.map(([img, t, d]) => (
              <article className="test-card" key={t}>
                <img src={img} alt="" />
                <h3>{t}</h3>
                <p>{d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-sec">
        <div className="container">
          <h2 className="sec-title">محصولات</h2>
          <p className="sec-lead">طیف گسترده محصولات را ببینید و بهترین را برای خود پیدا کنید.</p>
          <div className="fam-grid">
            {families.map((f) => (
              <Link className="fam-card" href={f.href} key={f.id || f.name}>
                <div className="fam-img"><img src={f.img} alt="" /></div>
                <h3>{f.name}</h3>
                <p>{(f.links || []).slice(0, 2).map((l) => (typeof l === "string" ? l : l.label)).join(" · ")}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="home-sec">
        <div className="container">
          <h2 className="sec-title">راه‌حل‌های شاخص</h2>
          <div className="media-4">
            {sols.map((s) => (
              <Link className="media-card" href="/solutions" key={s.title}>
                <img src={s.img} alt="" />
                <div className="body"><h3>{s.title}</h3><p>{s.text}</p></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="home-sec">
        <div className="container">
          <h2 className="sec-title">موفقیت مشتریان</h2>
          <div className="case-grid">
            {[
              ["/images/20240629103850kymtvo.png", "ایالات متحده", "FS به یک استارتاپ خودرو خودران در ساخت شبکه دیتاسنتر کمک کرد"],
              ["/images/20240629103850pixlsb.jpg", "آلمان", "Dream Chip پایداری شبکه را با راه‌حل MLAG شرکت FS بهبود داد"],
              ["/images/20240629103850zdlu9m.png", "ژاپن", "ارتقای یکپارچه شبکه صنعت سرگرمی با راه‌حل VXLAN شرکت FS"],
            ].map(([img, loc, t]) => (
              <Link className="case" href="/about" key={t}>
                <img src={img} alt="" />
                <div className="body"><div className="loc">{loc}</div><h3>{t}</h3><div className="tags">ادامه مطلب ›</div></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {hub.extraTitle && (
        <section className="home-sec">
          <div className="container extra-band">
            <div>
              <h2>{hub.extraTitle}</h2>
              <p>{hub.extraText}</p>
              <Link className="btn btn-red" href="/solutions/evpn">شروع کنید</Link>
            </div>
            <img src="/images/20240911111423gedjr4.jpeg" alt="" />
          </div>
        </section>
      )}

      <section className="home-sec last">
        <div className="container help-2">
          <div>
            <h2>سؤال دارید؟<br />اینجا کمک می‌کنیم.</h2>
          </div>
          <Link className="help-card" href="/support"><b>پشتیبانی فنی رایگان</b><span>مشاوره کارشناس بگیرید</span></Link>
          <Link className="help-card" href="/services"><b>طراحی راه‌حل رایگان</b><span>ایده‌ها را از اینجا ببینید</span></Link>
        </div>
      </section>
    </>
  );
}

function Itest() {
  return <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C00000" strokeWidth="1.6"><rect x="4" y="4" width="7" height="7"/><rect x="13" y="4" width="7" height="7"/><rect x="4" y="13" width="7" height="7"/><rect x="13" y="13" width="7" height="7"/></svg>;
}
function Iproc() {
  return <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C00000" strokeWidth="1.6"><circle cx="12" cy="12" r="8"/><path d="M12 8v4l3 2"/></svg>;
}
function Ibox() {
  return <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C00000" strokeWidth="1.6"><path d="M4 8l8-4 8 4-8 4z"/><path d="M4 8v8l8 4 8-4V8"/></svg>;
}
function Igear() {
  return <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C00000" strokeWidth="1.6"><circle cx="12" cy="12" r="3"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1"/></svg>;
}
