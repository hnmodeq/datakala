"use client";
import Link from "next/link";
import { useState } from "react";
import Section from "./Section";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [ok, setOk] = useState(false);
  return (
    <footer className="footer">
      <Section id="footer">
      <div className="container f-grid">
        <div>
          <h4>درباره ما</h4>
          <Link href="/about">نمای کلی</Link>
          <Link href="/services/shipping">انبار جهانی</Link>
          <Link href="/about/why-fs">مرکز تحقیق و توسعه پیشرفته</Link>
          <Link href="/about/why-fs">کنترل کیفیت</Link>
          <Link href="/about/why-fs">مرکز انطباق</Link>
          <Link href="/about/why-fs">مرکز تست</Link>
          <Link href="/about/manufacturing">مرکز تولید</Link>
          <Link href="/contact">تماس با ما</Link>
        </div>
        <div>
          <h4>خدمات</h4>
          <Link href="/support">روش‌های پرداخت</Link>
          <Link href="/services/shipping">راهنمای ارسال</Link>
          <Link href="/support">حساب تجاری</Link>
          <Link href="/support">سیاست بازگشت</Link>
          <Link href="/support">گارانتی محصول</Link>
          <Link href="/services">مشاوره راه‌حل</Link>
        </div>
        <div>
          <h4>منابع</h4>
          <Link href="/docs">مستندات</Link>
          <Link href="/docs">واژه‌نامه</Link>
          <Link href="/video">صوت و تصویر</Link>
          <Link href="/blog">بلاگ FS</Link>
          <Link href="/about">مطالعات موردی</Link>
        </div>
        <div>
          <h4>پشتیبانی</h4>
          <Link href="/support">سؤالات متداول و مرکز راهنما</Link>
          <Link href="/services">مشاوره راه‌حل</Link>
          <Link href="/support">تست کیفیت</Link>
          <Link href="/docs">چک‌لیست ماژول WDM</Link>
          <Link href="/about">تأیید محصولات</Link>
          <Link href="/support">پیگیری سفارش من</Link>
          <Link href="/support">چک‌لیست RMA</Link>
        </div>
        <div className="f-touch">
          <h4>در ارتباط بمانید</h4>
          <form className="sub" onSubmit={(e) => { e.preventDefault(); setOk(true); }}>
            <label>ایمیل</label>
            <div className="sub-row">
              <input type="email" required placeholder="" value={email} onChange={(e) => setEmail(e.target.value)} />
              <button type="submit">عضویت</button>
            </div>
            {ok && <p className="sub-ok">متشکریم — به فهرست اضافه شدید (نسخه نمایشی).</p>}
          </form>
          <div className="apps">
            <div className="apps-label">دانلود اپلیکیشن FS</div>
            <div className="app-btns"><span>Google Play</span><span>App Store</span></div>
          </div>
          <div className="social">
            <a href="#" aria-label="LinkedIn">in</a>
            <a href="#" aria-label="YouTube">▶</a>
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="X">𝕏</a>
            <a href="#" aria-label="Instagram">ig</a>
          </div>
        </div>
      </div>
      </Section>

      <Section id="subfooter">
      <div className="f-pay">
        <div className="container">
          <div className="pay">
            <span>Visa</span><span>Mastercard</span><span>PayPal</span><span>DigiCert</span><span>TrustedSite</span>
          </div>
          <div className="f-region">ایران / تومان</div>
        </div>
      </div>
      </Section>

      <Section id="subfooter2">
      <div className="f-legal">
        <div className="container">
          <div>
            <a href="#">نقشه سایت</a>
            <a href="#">دسترس‌پذیری</a>
            <a href="#">سیاست حریم خصوصی</a>
            <a href="#">اطلاعیه کوکی</a>
            <a href="#">شرایط و ضوابط</a>
            <a href="#">گزارش آسیب‌پذیری</a>
            <a href="#">سیاست‌های شرکت</a>
            <a href="#">تنظیمات کوکی</a>
          </div>
          <div>حق نشر © ۲۰۰۹–۲۰۲۶ متعلق به FS.COM Inc. تمامی حقوق محفوظ است</div>
        </div>
      </div>
      </Section>
    </footer>
  );
}
