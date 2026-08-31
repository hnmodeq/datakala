import Link from "next/link";
import Hero from "@/components/Hero";
import CategoryExplorer from "@/components/CategoryExplorer";
import ProductTabs from "@/components/ProductTabs";
import { SOLUTIONS } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Hero />
      <CategoryExplorer />
      <ProductTabs />

      <section className="section">
        <div className="container">
          <div className="sec-head"><h2>PicOS Software Platform</h2><Link href="/software">Explore PicOS® →</Link></div>
          <div className="soft-grid">
            {[
              ["/images/20240430173548qy7u9s.jpg.webp", "PicOS Switch Software", "Disaggregated NOS built on Debian Linux for any network environment."],
              ["/images/202506261502180ob1d8.jpg.webp", "AmpCon Management Platform", "Deploy, orchestrate, and manage data center and campus networks at scale."],
              ["/images/20240430173548o0beem.jpg.webp", "PicOS-V Virtual Operating System", "Prototype, validate and test PicOS® features at no cost."],
              ["/images/20240430173548d45zvm.jpg.webp", "Software Customized", "Feature development for PicOS®, AmpCon and transceivers."],
            ].map(([img, t, d]) => (
              <Link className="media-card" href="/software" key={t}>
                <img src={img} alt={t} />
                <div className="body"><h3>{t}</h3><p>{d}</p></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section gray">
        <div className="container">
          <div className="sec-head"><h2>Feature Solutions</h2><Link href="/solutions">View all →</Link></div>
          <div className="sol-grid">
            {SOLUTIONS.slice(0, 4).map((s) => (
              <Link className="media-card" href="/solutions" key={s.title}>
                <img src={s.img} alt={s.title} />
                <div className="body"><h3>{s.title}</h3><p>{s.text}</p></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sec-head"><h2>FS Certified</h2></div>
          <div className="cert-grid">
            {[
              ["/images/20251205121407ozphuu.svg", "Service Professionals", "900+ sales and technical professionals provide customized IT solutions."],
              ["/images/202512041628125s5yyl.svg", "Global Delivery Excellence", "7 local warehouses — 90% of orders shipped the same day."],
              ["/images/20251204162812okueog.svg", "Real-Time Support", "Whole-process pre-sales, in-sales and after-sales support."],
              ["/images/20251204162812ko3zlo.svg", "Customizable R&D", "Hardware and software customized to your requirements."],
              ["/images/20251204162812zeli7n.svg", "Comprehensive Test", "8 top testing labs for products and solutions."],
              ["/images/20251204162812mn2i7p.svg", "Certified Quality", "ISO, CE, RoHS and other international certifications."],
            ].map(([img, t, d]) => (
              <Link className="cert" href="/about" key={t}><img src={img} alt="" /><h3>{t}</h3><p>{d}</p></Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section gray">
        <div className="container">
          <div className="sec-head"><h2>Case Studies</h2><Link href="/about">View all stories →</Link></div>
          <div className="case-grid">
            {[
              ["/images/20240629103850kymtvo.png", "United States", "FS Helps an Autonomous Vehicle Startup to Build a Data Center Network"],
              ["/images/20240629103850pixlsb.jpg", "Germany", "Dream Chip Improves Network Stability with FS MLAG Solution"],
              ["/images/20240629103850zdlu9m.png", "Japan", "Seamless Entertainment Industry Network Upgrades with FS VXLAN Solution"],
            ].map(([img, loc, t]) => (
              <Link className="case" href="/about" key={t}>
                <img src={img} alt="" />
                <div className="body"><div className="loc">{loc}</div><h3>{t}</h3></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sec-head"><h2>Get more Information</h2></div>
          <div className="info-grid">
            <Link className="info" href="/contact"><img src="/images/20251204162824r6935v.svg" alt="" /><div><h3>Project Inquiry</h3><p>Customized technical support to meet different requests.</p></div></Link>
            <Link className="info" href="/contact"><img src="/images/20251204162824fbn9xq.svg" alt="" /><div><h3>Contact Sales</h3><p>Contact our sales team for products and solutions inquiries.</p></div></Link>
            <Link className="info" href="/support"><img src="/images/20251204162824bn64ca.svg" alt="" /><div><h3>Online Chat</h3><p>Chat with our live agent for general inquiries now.</p></div></Link>
          </div>
        </div>
      </section>
    </>
  );
}
