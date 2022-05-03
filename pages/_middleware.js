import { NextResponse } from 'next/server';
export async function middleware(req) {
  const { pathname, origin } = req.nextUrl;
  if (pathname === '/') {
    return NextResponse.redirect(`${origin}/modelos`); // Redirect index to /modelos (only for this challenge)
  }
  return NextResponse.next();
}
