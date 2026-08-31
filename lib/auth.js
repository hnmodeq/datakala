// Server-only admin auth helpers.
import { createHmac, timingSafeEqual } from "crypto";

export const ADMIN_USER = process.env.DK_ADMIN_USER || "hnmodeq";
export const ADMIN_PASS = process.env.DK_ADMIN_PASS || "asdasd123xX";
export const COOKIE_NAME = "dk_admin";

const SECRET = process.env.DK_AUTH_SECRET || "datakala-control-panel-local-secret";

export function sign(value) {
  return createHmac("sha256", SECRET).update(String(value)).digest("hex");
}

export function validToken(token) {
  if (typeof token !== "string" || !token.length) return false;
  const expected = sign(ADMIN_USER);
  const a = Buffer.from(token);
  const b = Buffer.from(expected);
  if (a.length !== b.length) return false;
  try {
    return timingSafeEqual(a, b);
  } catch {
    return false;
  }
}

export function verifyCredentials(user, pass) {
  return user === ADMIN_USER && pass === ADMIN_PASS;
}
