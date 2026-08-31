import Link from "next/link";
import { SOLUTIONS } from "@/lib/data";

export const metadata = { title: "راه‌حل‌ها - دیتاکالا" };

export default function Solutions() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>راه‌حل‌های شاخص</h1>
          <p>معماری‌های اعتبارسنجی‌شده برای فابریک هوش مصنوعی، دیتاسنتر ابری، شبکه‌های پردیس و DCI نوری — طراحی، تست و تحویل توسط FS.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="sol-grid" style={{ gridTemplateColumns: "repeat(2, minmax(0,1fr))" }}>
            {SOLUTIONS.map((s) => (
              <Link className="media-card" href="/software" key={s.title}>
                <img src={s.img} alt="" style={{ height: 220 }} />
                <div className="body"><h3>{s.title}</h3><p>{s.text}</p></div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
