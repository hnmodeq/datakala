import { VIDEOS } from "@/lib/hubs";

export const metadata = { title: "صوت و تصویر - دیتاکالا" };

export default function Video() {
  return (
    <>
      <section className="hub-hero" style={{ backgroundImage: "url(/images/202604081453079w890k.jpg)", minHeight: 240 }}>
        <div className="container"><div className="hub-hero-copy">
          <h1>تست سناریو کاربرد InfiniBand مدل OSFP-SR8-800G</h1>
        </div></div>
      </section>
      <section className="home-sec last">
        <div className="container">
          <div className="blog-grid">
            {VIDEOS.map((v) => (
              <article className="media-card vid" key={v.t}>
                <div className="vid-thumb"><img src={v.img} alt="" /><i>{v.time}</i></div>
                <div className="body"><h3>{v.t}</h3><p>{v.views}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
