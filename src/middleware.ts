import { NextResponse, NextRequest } from "next/server";

const VALID_QCM = [0];

export function middleware(request: NextRequest) {
  console.log("Middleware triggered");
  if (request.nextUrl.pathname.startsWith("/qcm")) {
    const id = request.nextUrl.searchParams.get("id");
    for (const qcmId of VALID_QCM) {
      if (id === qcmId.toString()) {
        return NextResponse.next();
      }
    }

    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
