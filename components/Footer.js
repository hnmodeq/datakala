"use client";
import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [ok, setOk] = useState(false);
  return (
    <footer className="footer">
      <div className="container f-grid">
        <div>
          <h4>درباره ما</h4>
          <Link href="/about">نمای کلی</Link>
          <Link href="/about">انبار جهانی</Link>
          <Link href="/about">مرکز تحقیق و توسعه پیشرفته</Link>
          <Link href="/about">کنترل کیفیت</Link>
          <Link href="/about">مرکز انطباق</Link>
          <Link href="/about">مرکز تست</Link>
          <Link href="/contact">تماس با ما</Link>
          <Link href="/about">بازخورد خود را بفرستید</Link>
        </div>
        <div>
          <h4>خدمات</h4>
          <Link href="/support">روش‌های پرداخت</Link>
          <Link href="/support">راهنمای ارسال</Link>
          <Link href="/support">حساب تجاری</Link>
          <Link href="/software">مالیات فروش</Link>
          <Link href="/about">شرایط اعتباری Net</Link>
          <Link href="/support">سیاست بازگشت</Link>
          <Link href="/support">گارانتی محصول</Link>
        </div>
        <div>
          <h4>منابع</h4>
          <Link href="/support">مستندات</Link>
          <Link href="/support">سازگاری</Link>
          <Link href="/about">صوت و تصویر</Link>
          <Link href="/about">بلاگ FS</Link>
          <Link href="/about">مطالعات موردی</Link>
        </div>
        <div>
          <h4>پشتیبانی</h4>
          <Link href="/support">سؤالات متداول و مرکز راهنما</Link>
          <Link href="/contact">مشاوره راه‌حل</Link>
          <Link href="/support">تست کیفیت</Link>
          <Link href="/software">چک‌لیست ماژول Wi-Fi</Link>
          <Link href="/about">تأیید محصولات</Link>
          <Link href="/support">پیگیری سفارش من</Link>
          <Link href="/support">RMA / بازگشت کالا</Link>
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
            <div className="app-btns">
              <span>Google Play</span>
              <span>App Store</span>
            </div>
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
      <div className="f-pay">
        <div className="container">
          <div className="pay">
            <span>Visa</span><span>Mastercard</span><span>PayPal</span><span>Amex</span><span>Discover</span>
          </div>
          <div className="f-region">ایران / تومان</div>
        </div>
      </div>
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
    </footer>
  );
}
