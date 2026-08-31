import { NextResponse } from "next/server";
import { verifyCredentials, sign, ADMIN_USER, COOKIE_NAME } from "@/lib/auth";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function POST(req) {
  const body = await req.json().catch(() => ({}));
  const { username, password } = body || {};

  if (!verifyCredentials(username, password)) {
    return NextResponse.json({ ok: false, error: "نام کاربری یا رمز عبور اشتباه است." }, { status: 401 });
  }

  const res = NextResponse.json({ ok: true });
  res.cookies.set(COOKIE_NAME, sign(ADMIN_USER), {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });
  return res;
}
