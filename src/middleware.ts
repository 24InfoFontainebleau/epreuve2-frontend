import { NextResponse, NextRequest } from "next/server";

const VALID_QCM = [14968];

export function middleware(request: NextRequest) {}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
