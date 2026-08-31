"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Login() {
  const r = useRouter();
  return (
    <div className="login-split">
      <div className="login-benefits">
        <h1>مزایای حساب FS</h1>
        <div>
          <h3>پورتال خرید هوشمند</h3>
          <p>انتخاب و سفارش یک‌مرحله‌ای، وضعیت سفارش در لحظه.</p>
        </div>
        <div>
          <h3>توسعه سفارشی عمیق</h3>
          <p>انواع محصول متنوع، پشتیبانی نرم‌افزار و سخت‌افزار سفارشی.</p>
        </div>
        <div>
          <h3>طراحی راه‌حل با کیفیت بالا</h3>
          <p>کارشناسان FS راه‌حل فناوری اطلاعات متناسب ارائه می‌دهند.</p>
        </div>
        <div>
          <h3>پشتیبانی فنی حرفه‌ای</h3>
          <p>پشتیبانی فنی حرفه‌ای ۵×۲۴.</p>
        </div>
      </div>
      <form className="auth login-box" onSubmit={(e) => { e.preventDefault(); r.push("/"); }}>
        <h1>ورود</h1>
        <div className="field"><label>ایمیل</label><input type="email" required /></div>
        <div className="field">
          <label>رمز عبور <Link href="/login" style={{ float: "left", fontWeight: 400, color: "#888" }}>رمز را فراموش کرده‌اید؟</Link></label>
          <input type="password" required />
        </div>
        <button className="btn btn-red" type="submit" style={{ width: "100%", justifyContent: "center" }}>ورود</button>
        <p className="or">یا ورود با روش‌های دیگر</p>
        <div className="oauth"><span>G</span><span>P</span><span>f</span><span>in</span></div>
        <p style={{ fontSize: 13, color: "#666" }}>در FS.com تازه‌واردید؟ <Link href="/login" style={{ color: "#C00000" }}>همین حالا ثبت‌نام کنید</Link></p>
      </form>
    </div>
  );
}
