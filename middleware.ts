import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  // Periksa keberadaan token di cookies
  const token = req.cookies.get("authToken")?.value;

  if (!token) {
    // Jika token tidak ada, redirect ke halaman login
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Jika token ada, izinkan akses
  return NextResponse.next();
}

// Konfigurasi matcher untuk menentukan rute mana yang harus diperiksa
export const config = {
  matcher: ["/dashboard/:path*", "/dashboard"], // Terapkan middleware ke semua rute dashboard
};
