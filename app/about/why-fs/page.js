import Link from "next/link";
import { WHY_FS } from "@/lib/hubs";

export const metadata = { title: "چرا FS - دیتاکالا" };

export default function WhyFs() {
  return (
    <>
      <section className="hub-hero" style={{ backgroundImage: "url(/images/20251230115848cad4ei.jpg)", minHeight: 280 }}>
        <div className="container"><div className="hub-hero-copy"><h1>چرا FS</h1>
          <p>FS Inc. ارائه‌دهنده مورد اعتماد محصولات و راه‌حل‌های ICT برای مشتریان سازمانی جهان است. با توان تولید، تحقیق و توسعه، تست و مدیریت کیفیت جامع، روی HPC، دیتاسنتر، سازمان و مخابرات تمرکز دارد.</p>
        </div></div>
      </section>
      <section className="home-sec last">
        <div className="container">
          <div className="why-grid" style={{ gridTemplateColumns: "repeat(3,1fr)" }}>
            {WHY_FS.map((w) => (
              <Link className="why-card tall" href={w.href} key={w.t}>
                <img src={w.img} alt="" style={{ width: 48, height: 48, margin: "0 auto 12px", objectFit: "contain" }} />
                <h3>{w.t}</h3>
                <p>{w.d}</p>
                <span>بیشتر بدانید ›</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
