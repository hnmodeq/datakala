"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AdminPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState(null);
  const [checking, setChecking] = useState(true);
  const [authed, setAuthed] = useState(false);

  useEffect(() => {
    fetch("/api/auth/me")
      .then((r) => r.json())
      .then((d) => {
        setAuthed(!!d.ok);
        setChecking(false);
      })
      .catch(() => setChecking(false));
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    setStatus({ kind: "busy", text: "در حال ورود..." });
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.ok) {
        setStatus({ kind: "ok", text: "ورود موفق — در حال انتقال..." });
        setTimeout(() => router.push("/"), 600);
      } else {
        setStatus({ kind: "error", text: data.error || "ورود ناموفق بود." });
      }
    } catch {
      setStatus({ kind: "error", text: "خطا در ارتباط با سرور." });
    }
  };

  const logout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    setAuthed(false);
  };

  if (checking) return <div className="container" style={{ padding: 60, textAlign: "center", color: "var(--muted-2)" }}>در حال بررسی...</div>;

  return (
    <div className="container" style={{ maxWidth: 420, padding: "60px 20px" }}>
      <div className="admin-card">
        {authed ? (
          <div className="admin-body">
            <div className="admin-ok">✓</div>
            <h1>شما وارد شده‌اید</h1>
            <p>کنترل پنل اکنون در پایین-چپ سایت در دسترس شماست.</p>
            <div className="admin-acts">
              <Link className="btn btn-red" href="/">رفتن به فروشگاه</Link>
              <button className="btn btn-dark" onClick={logout}>خروج</button>
            </div>
          </div>
        ) : (
          <form className="admin-body" onSubmit={submit}>
            <h1>ورود مدیریت</h1>
            <p className="admin-sub">فقط مدیران می‌توانند کنترل پنل را ببینند.</p>
            <label>
              <span>نام کاربری</span>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="username"
                dir="ltr"
              />
            </label>
            <label>
              <span>رمز عبور</span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                dir="ltr"
              />
            </label>
            <button className="btn btn-red" type="submit" disabled={status && status.kind === "busy"} style={{ width: "100%", justifyContent: "center", marginTop: 6 }}>
              {status && status.kind === "busy" ? "در حال ورود..." : "ورود"}
            </button>
            {status && status.kind !== "busy" && (
              <p className={"admin-msg " + status.kind}>{status.text}</p>
            )}
            <p className="admin-hint">دسترسی عمومی غیرفعال است — کنترل پنل فقط پس از ورود بارگذاری می‌شود.</p>
          </form>
        )}
      </div>
    </div>
  );
}
