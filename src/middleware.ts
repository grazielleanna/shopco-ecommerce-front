import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
    const token = request.cookies.get('token')?.value;

    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/validate-token`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    if ([400, 401, 403, 500].includes(response.status)) {
        request.nextUrl.pathname = '/login';
        return NextResponse.redirect(request.nextUrl);
    } else {
        if (request.nextUrl.pathname.startsWith('/login') || request.nextUrl.pathname.startsWith('/register')) {
            if (response.status === 200) {
                request.nextUrl.pathname = '/account';
                return NextResponse.redirect(request.nextUrl);
            }
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/account', '/login', '/register']
}