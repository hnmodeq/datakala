import { BLOG_POSTS } from "@/lib/hubs";

export const metadata = { title: "بلاگ دیتاکالا - دیتاکالا" };

export default function Blog() {
  return (
    <>
      <section className="hub-hero" style={{ backgroundImage: "url(/images/202604081453079w890k.jpg)", minHeight: 220 }}>
        <div className="container"><div className="hub-hero-copy"><h1>بلاگ دیتاکالا</h1></div></div>
      </section>
      <section className="home-sec last">
        <div className="container">
          <h2 className="sec-title">نوشته‌های برگزیده</h2>
          <div className="media-4" style={{ marginBottom: 36 }}>
            {BLOG_POSTS.slice(0, 4).map((p) => (
              <article className="media-card" key={p.t}><img src={p.img} alt="" /><div className="body"><h3>{p.t}</h3><p>{p.tag} · {p.d}</p></div></article>
            ))}
          </div>
          <h2 className="sec-title">نوشته‌های بیشتر</h2>
          <div className="blog-grid">
            {BLOG_POSTS.map((p) => (
              <article className="media-card" key={p.t}><img src={p.img} alt="" /><div className="body"><h3>{p.t}</h3><p>{p.tag} · {p.d}</p></div></article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
