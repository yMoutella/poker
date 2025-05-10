import { NextRequest, NextResponse } from "next/server";
import { auth } from "./auth";

export default async function middleware(request: NextRequest) {

    const session = await auth()

    const protectedPaths = ["/teams"]
    const isProtected = protectedPaths.some((path) => request.nextUrl.pathname.startsWith(path))


    if (isProtected && !session) {
        const login = new URL('/login', request.url)
        return NextResponse.redirect(login)
    }

    return NextResponse.next()

}