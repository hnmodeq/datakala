import Link from "next/link";
import Hero from "@/components/Hero";
import CategoryExplorer from "@/components/CategoryExplorer";
import HomeCarousel from "@/components/HomeCarousel";
import { NEW_IDS, REC_IDS, SOLUTIONS } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Hero />
      <CategoryExplorer />
      <HomeCarousel title="New Products" ids={NEW_IDS.slice(0, 8)} />
      <HomeCarousel title="Recommended" ids={REC_IDS.slice(0, 8)} />

      <section className="home-sec">
        <div className="container">
          <h2 className="sec-title">PicOS Software Platform</h2>
          <div className="media-4">
            {[
              ["/images/20240430173548qy7u9s.jpg.webp", "PicOS Switch Software", "Disaggregated NOS built on industry-standard Debian Linux seamlessly integrates into any network environment."],
              ["/images/202506261502180ob1d8.jpg.webp", "AmpCon Management Platform", "Deploy, orchestrate, and manage data center and campus networks at scale with automated workflows."],
              ["/images/20240430173548o0beem.jpg.webp", "PicOS-V Virtual Operating System", "Prototype network ops, validate configuration, and test features with PicOS-V to familiarize users with PicOS® software."],
              ["/images/20240430173548d45zvm.jpg.webp", "Software Customized", "Further software customization and enhancements to meet your exact requirements."],
            ].map(([img, t, d]) => (
              <Link className="media-card" href="/software" key={t}>
                <img src={img} alt={t} />
                <div className="body"><h3>{t}</h3><p>{d}</p></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="home-sec">
        <div className="container">
          <h2 className="sec-title">Feature Solutions</h2>
          <div className="media-4">
            {SOLUTIONS.slice(0, 4).map((s) => (
              <Link className="media-card" href="/solutions" key={s.title}>
                <img src={s.img} alt={s.title} />
                <div className="body"><h3>{s.title}</h3><p>{s.text}</p></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="home-sec">
        <div className="container">
          <h2 className="sec-title">FS Certified</h2>
          <div className="cert-grid">
            {[
              ["/images/20251205121407ozphuu.svg", "Service Professionals", "900+ sales and technical professionals provide customized IT solutions to help meet complex business challenges."],
              ["/images/202512041628125s5yyl.svg", "Global Delivery Excellence", "7 Local Warehouses guarantee that 90% of orders will be shipped on the same day."],
              ["/images/20251204162812okueog.svg", "Real-Time Support", "FS provides whole process from pre-sales, in-sales to after-sales support."],
              ["/images/20251204162812ko3zlo.svg", "Customizable R&D", "FS Advanced R&D Center customizes software and hardware according to your requirements."],
              ["/images/20251204162812zeli7n.svg", "Comprehensive Test", "8 top testing labs conduct comprehensive testing for your products and solutions."],
              ["/images/20251204162812mn2i7p.svg", "Certified Quality", "FS products have earned numerous international certifications such as ISO, CE, RoHS, etc."],
            ].map(([img, t, d]) => (
              <Link className="cert" href="/about" key={t}>
                <img src={img} alt="" />
                <h3>{t} <span className="chev">›</span></h3>
                <p>{d}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="home-sec">
        <div className="container">
          <h2 className="sec-title">Case Studies</h2>
          <div className="case-grid">
            {[
              ["/images/20240629103850kymtvo.png", "United States", "FS Helps an Autonomous Vehicle Startup to Build a Data Center Network", "Enterprise Data Center  |  Autonomous Driving"],
              ["/images/20240629103850pixlsb.jpg", "Germany", "Dream Chip Improves Network Stability with FS MLAG Solution", "Enterprise Data Center  |  Manufacturing"],
              ["/images/20240629103850zdlu9m.png", "Japan", "Seamless Entertainment Industry Network Upgrades with FS VXLAN Solution", "Data Center Interconnect  |  Sports, Media and Entertainment"],
            ].map(([img, loc, t, tags]) => (
              <Link className="case" href="/about" key={t}>
                <img src={img} alt="" />
                <div className="body">
                  <div className="loc">{loc}</div>
                  <h3>{t}</h3>
                  <div className="tags">{tags}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="home-sec last">
        <div className="container">
          <h2 className="sec-title">Get more Information</h2>
          <div className="info-grid">
            <Link className="info" href="/contact"><img src="/images/20251204162824r6935v.svg" alt="" /><div><h3>Project Inquiry <span className="chev">›</span></h3><p>Customized technical support to meet different requests.</p></div></Link>
            <Link className="info" href="/contact"><img src="/images/20251204162824fbn9xq.svg" alt="" /><div><h3>Contact Sales <span className="chev">›</span></h3><p>Contact our sales team for products and solutions inquiries.</p></div></Link>
            <Link className="info" href="/support"><img src="/images/20251204162824bn64ca.svg" alt="" /><div><h3>Online Chat <span className="chev">›</span></h3><p>Chat with our live agent for general inquiries now.</p></div></Link>
          </div>
        </div>
      </section>
    </>
  );
}
