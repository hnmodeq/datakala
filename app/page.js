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
      <HomeCarousel title="محصولات جدید" ids={NEW_IDS.slice(0, 8)} />
      <HomeCarousel title="پیشنهادی" ids={REC_IDS.slice(0, 8)} />

      <section className="home-sec">
        <div className="container">
          <h2 className="sec-title">پلتفرم نرم‌افزاری PicOS</h2>
          <div className="media-4">
            {[
              ["/images/20240430173548qy7u9s.jpg.webp", "نرم‌افزار سوئیچ PicOS", "سیستم‌عامل شبکه جداشده بر پایه Debian لینوکس استاندارد صنعت که به‌سادگی در هر محیط شبکه‌ای یکپارچه می‌شود."],
              ["/images/202506261502180ob1d8.jpg.webp", "پلتفرم مدیریت AmpCon", "شبکه‌های دیتاسنتر و پردیس را در مقیاس بالا با گردش‌کار خودکار مستقر، هماهنگ و مدیریت کنید."],
              ["/images/20240430173548o0beem.jpg.webp", "سیستم‌عامل مجازی PicOS-V", "عملیات شبکه را شبیه‌سازی کنید، پیکربندی را اعتبارسنجی کنید و قابلیت‌ها را با PicOS-V بیازمایید تا کاربران با نرم‌افزار PicOS® آشنا شوند."],
              ["/images/20240430173548d45zvm.jpg.webp", "نرم‌افزار سفارشی", "سفارشی‌سازی و بهبود بیشتر نرم‌افزار مطابق با نیاز دقیق شما."],
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
          <h2 className="sec-title">راه‌حل‌های شاخص</h2>
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
          <h2 className="sec-title">گواهی‌شده توسط FS</h2>
          <div className="cert-grid">
            {[
              ["/images/20251205121407ozphuu.svg", "متخصصان خدمات", "بیش از ۹۰۰ متخصص فروش و فنی، راه‌حل‌های فناوری اطلاعات سفارشی برای چالش‌های پیچیده کسب‌وکار ارائه می‌کنند."],
              ["/images/202512041628125s5yyl.svg", "برتری در ارسال جهانی", "۷ انبار محلی تضمین می‌کنند که ۹۰٪ سفارش‌ها در همان روز ارسال شوند."],
              ["/images/20251204162812okueog.svg", "پشتیبانی لحظه‌ای", "FS کل فرآیند از پیش‌فروش تا حین فروش و پس از فروش را پشتیبانی می‌کند."],
              ["/images/20251204162812ko3zlo.svg", "تحقیق و توسعه قابل سفارشی‌سازی", "مرکز تحقیق و توسعه پیشرفته FS نرم‌افزار و سخت‌افزار را مطابق نیاز شما سفارشی می‌کند."],
              ["/images/20251204162812zeli7n.svg", "تست جامع", "۸ آزمایشگاه برتر، محصولات و راه‌حل‌های شما را به‌صورت جامع می‌آزمایند."],
              ["/images/20251204162812mn2i7p.svg", "کیفیت گواهی‌شده", "محصولات FS گواهی‌های بین‌المللی متعددی مانند ISO، CE، RoHS و غیره را کسب کرده‌اند."],
            ].map(([img, t, d]) => (
              <Link className="cert" href="/about" key={t}>
                <img src={img} alt="" />
                <h3>{t} <span className="chev">‹</span></h3>
                <p>{d}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="home-sec">
        <div className="container">
          <h2 className="sec-title">مطالعات موردی</h2>
          <div className="case-grid">
            {[
              ["/images/20240629103850kymtvo.png", "ایالات متحده", "FS به یک استارتاپ خودرو خودران در ساخت شبکه دیتاسنتر کمک کرد", "دیتاسنتر سازمانی  |  رانندگی خودران"],
              ["/images/20240629103850pixlsb.jpg", "آلمان", "Dream Chip پایداری شبکه را با راه‌حل MLAG شرکت FS بهبود داد", "دیتاسنتر سازمانی  |  تولید"],
              ["/images/20240629103850zdlu9m.png", "ژاپن", "ارتقای یکپارچه شبکه صنعت سرگرمی با راه‌حل VXLAN شرکت FS", "اتصال بین‌دیتاسنتری  |  ورزش، رسانه و سرگرمی"],
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
          <h2 className="sec-title">اطلاعات بیشتر بگیرید</h2>
          <div className="info-grid">
            <Link className="info" href="/contact"><img src="/images/20251204162824r6935v.svg" alt="" /><div><h3>استعلام پروژه <span className="chev">‹</span></h3><p>پشتیبانی فنی سفارشی برای درخواست‌های مختلف.</p></div></Link>
            <Link className="info" href="/contact"><img src="/images/20251204162824fbn9xq.svg" alt="" /><div><h3>تماس با فروش <span className="chev">‹</span></h3><p>برای استعلام محصولات و راه‌حل‌ها با تیم فروش ما تماس بگیرید.</p></div></Link>
            <Link className="info" href="/support"><img src="/images/20251204162824bn64ca.svg" alt="" /><div><h3>گفتگوی آنلاین <span className="chev">‹</span></h3><p>همین حالا با کارشناس زنده برای پرسش‌های عمومی گفتگو کنید.</p></div></Link>
          </div>
        </div>
      </section>
    </>
  );
}
