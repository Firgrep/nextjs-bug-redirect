import { NextRequest, NextResponse } from "next/server";

/**
 * This middleware is used to add headers with info to the request object
 * that can then be retrieved by server components.
 */
export function middleware(request: NextRequest) {
    const requestHeaders = new Headers(request.headers);

    requestHeaders.set("x-next-current-path", request.nextUrl.pathname);
    requestHeaders.set(
        "x-next-search-params",
        request.nextUrl.searchParams.toString()
    );

    return NextResponse.next({
        request: {
            headers: requestHeaders,
        },
    });
}
