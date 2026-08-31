import Link from "next/link";

export const metadata = { title: "نرم‌افزار سوئیچ PicOS® - دیتاکالا" };

export default function Software() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>نرم‌افزار سوئیچ PicOS®</h1>
          <p>سوئیچ‌های PicOS® با AmpCon-DC/Campus شبکه‌های پردیس و دیتاسنتر را خودکار، متمرکز و ایمن گسترش می‌دهند.</p>
          <div style={{ marginTop: 18, display: "flex", gap: 10 }}>
            <Link className="btn btn-red" href="/contact">PicOS-V را رایگان بیازمایید</Link>
            <Link className="btn btn-ghost" href="/c/switches">مشاهده سخت‌افزار</Link>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container split">
          <div>
            <h2>PicOS® چگونه کار می‌کند</h2>
            <p style={{ color: "var(--muted)" }}>PicOS® به‌طور کامل از سوئیچ‌های Broadcom با پروتکل‌های ضروری لایه ۲/۳ و API تلمتری پشتیبانی می‌کند. AmpCon-DC / Campus عملیات پایدارتر را با هزینه کمتر ممکن می‌سازد.</p>
            <ul className="hl">
              <li>EVPN-VXLAN و MLAG برای فابریک مقیاس‌پذیر</li>
              <li>راه‌اندازی بدون دخالت دستی از طریق AmpCon</li>
              <li>APIهای Ansible، Python و NETCONF</li>
              <li>مبتنی بر Debian لینوکس، بازگشت با پارتیشن دوگانه</li>
            </ul>
          </div>
          <img src="/images/20240911111423gedjr4.jpeg" alt="PicOS" />
        </div>
      </section>
      <section className="section gray">
        <div className="container">
          <div className="sec-head"><h2>چرا PicOS® را انتخاب کنیم؟</h2></div>
          <div className="cert-grid" style={{ gridTemplateColumns: "repeat(3,1fr)" }}>
            {[
              ["استانداردسازی کامل", "پروتکل‌های استاندارد برای سازگاری با گذشته."],
              ["اتوماسیون با AmpCon", "پلی‌بوک Ansible، گردش‌کار زمان‌بندی‌شده و رابط وب."],
              ["پشتیبانی کامل از Broadcom", "کارایی شتاب‌گرفته با سیلیکون در پردیس و دیتاسنتر."],
              ["قابلیت اطمینان بالا", "EVPN-VXLAN و MLAG برای فابریک چابک و امن."],
              ["کاهش هزینه عملیاتی", "استقرار انبوه مبتنی بر رابط گرافیکی — صرفه‌جویی ۳۵ تا ۴۰ درصدی."],
              ["امنیت شبکه", "دسترسی پردیس بدون اعتماد با NAC، RADIUS و TACACS+."],
            ].map(([t, d]) => <div className="cert" key={t}><h3>{t}</h3><p>{d}</p></div>)}
          </div>
        </div>
      </section>
    </>
  );
}
