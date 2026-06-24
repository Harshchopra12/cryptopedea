import { NextResponse } from "next/server";

export function proxy() {
  return NextResponse.next();
}

export const config = {
  matcher: "/__cryptopedea_proxy_placeholder__",
};
