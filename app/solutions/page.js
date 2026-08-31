import Link from "next/link";
import { SOLUTIONS } from "@/lib/data";

export const metadata = { title: "Solutions - FS.com" };

export default function Solutions() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Feature Solutions</h1>
          <p>Validated architectures for AI fabrics, cloud data centers, campus networks and optical DCI — designed, tested and delivered by FS.</p>
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
