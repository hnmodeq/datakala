"use client";
import { useRouter } from "next/navigation";

export default function Login() {
  const r = useRouter();
  return (
    <form className="auth" onSubmit={(e) => { e.preventDefault(); r.push("/"); }}>
      <h1>Sign in to FS</h1>
      <p style={{ color: "#666", fontSize: 13, marginTop: 0 }}>Access orders, quotes, project inquiry and AmpCon licenses.</p>
      <div className="field"><label>Email</label><input type="email" required placeholder="nina.v@example.com" /></div>
      <div className="field"><label>Password</label><input type="password" required placeholder="••••••••" /></div>
      <button className="btn btn-red" type="submit" style={{ width: "100%", justifyContent: "center" }}>Sign In</button>
    </form>
  );
}
