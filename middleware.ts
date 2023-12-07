import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const session = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  // #TODO Implement more robust and scalable authorization
  if (path === "/") {
    return NextResponse.next();
  } else if (!session && (path === '/dashboard' || path === '/admin')) {
    return NextResponse.redirect(new URL("/login", req.url));
  } else if (session && (path === "/login" || path === "/register")) {
    // Remove access to unnecessary pages when already logged in
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return NextResponse.next();
}