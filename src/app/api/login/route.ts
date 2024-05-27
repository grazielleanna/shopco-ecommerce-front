import { loginService } from "@/app/(account)/login/data";
import { api } from "@/services/api";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const requestBody = await request.json();

    const token = requestBody.token;
    const expires = requestBody.expiresAt;

    if (token) {
        cookies().set('token', token, { expires });

        return NextResponse.json({ message: 'Authenticated!' });
    }

    return NextResponse.json({}, {
        status: 401
    });
}