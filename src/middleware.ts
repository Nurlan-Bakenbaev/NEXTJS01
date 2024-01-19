import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const isPublicPath = path === "/login" || path == "/signup";
  const token =
    request.cookies.get("token")?.value ||
    request.cookies.get("next-auth.session-token")?.value;
  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}
export const config = {
  matcher: ["/", "/profile/:path*", "/login", "/signup"],
};
