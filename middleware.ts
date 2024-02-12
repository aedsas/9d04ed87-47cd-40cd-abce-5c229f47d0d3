import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

// Middleware function for handling authentication and redirection
export default async function middleware(req: NextRequest) {
  // Extract the path from the request URL
  const path = req.nextUrl.pathname;

  try {
    // Retrieve the session token from the request
    const session = await getToken({
      req,
      secret: process.env.NEXTAUTH_SECRET
    });

    // Handle redirection logic based on session and path
    if (path === '/') {
      // Allow requests to the root path to proceed
      return NextResponse.next();
    } else if (
      !session &&
      ['/dashboard', '/admin', '/admin/add-user'].includes(path)
    ) {
      // Redirect unauthenticated users to the login page for protected routes
      return NextResponse.redirect(new URL('/login', req.url));
    } else if (session && ['/login', '/register'].includes(path)) {
      // Redirect authenticated users away from login and registration pages
      return NextResponse.redirect(new URL('/dashboard', req.url));
    } else {
      // Allow requests to other paths to proceed
      return NextResponse.next();
    }
  } catch (error) {
    // Handle any errors that occur during token retrieval or redirection
    console.error('Error processing authentication middleware:', error);
    return NextResponse.error();
  }
}
