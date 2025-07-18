import { createServerClient } from "@supabase/ssr";
import { NextResponse } from "next/server";

export async function updateSession(req) {
    let supabaseResponse = NextResponse.next({
        request: {
            headers: req.headers,
        },
    });

    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        {
            cookies: {
                getAll() {
                    return req.cookies.getAll()
                },
                setAll(cookiesToSet) {
                    cookiesToSet.forEach(({ name, value, options}) =>
                        supabaseResponse.cookies.set(name, value, options)
                    )
                },
            },
        },
    );

    const { data: { user } } = await supabase.auth.getUser();

    const { pathname } = req.nextUrl;

    // Defined protected routes
    const protectedRoutes = ['/dashboard',/* '/purchase-course', '/my-course' */];
    // Defined routes for logged-out users only (e.g., login, signup)
    const authRoutes = ['/login', '/register'];

    if (!user && protectedRoutes.some(route => pathname.startsWith(route))) {
        // If no user and trying to access a protected route, redirect to login
        const url = req.nextUrl.clone();
        url.pathname = '/login';
        return NextResponse.redirect(url);
    }

    if (user && authRoutes.some(route => pathname.startsWith(route))) {
        // If user is logged in and tries to access login/register, redirect to dashboard (or home)
        const url = req.nextUrl.clone();
        url.pathname = `/${user.id}/dashboard`;
        return NextResponse.redirect(url);
    }

    return supabaseResponse;
};
