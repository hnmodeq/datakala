import { NextResponse } from "next/server";
import { validToken, COOKIE_NAME } from "@/lib/auth";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET(req) {
  const token = req.cookies.get(COOKIE_NAME)?.value;
  const ok = validToken(token);
  return NextResponse.json({ ok });
}
