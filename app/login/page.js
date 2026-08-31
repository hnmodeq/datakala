"use client";
import { useRouter } from "next/navigation";

export default function Login() {
  const r = useRouter();
  return (
    <form className="auth" onSubmit={(e) => { e.preventDefault(); r.push("/"); }}>
      <h1>ورود به FS</h1>
      <p style={{ color: "#666", fontSize: 13, marginTop: 0 }}>به سفارش‌ها، پیش‌فاکتورها، استعلام پروژه و لایسنس AmpCon دسترسی پیدا کنید.</p>
      <div className="field"><label>ایمیل</label><input type="email" required placeholder="nina.v@example.com" /></div>
      <div className="field"><label>رمز عبور</label><input type="password" required placeholder="••••••••" /></div>
      <button className="btn btn-red" type="submit" style={{ width: "100%", justifyContent: "center" }}>ورود</button>
    </form>
  );
}
