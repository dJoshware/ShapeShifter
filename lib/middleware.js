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

    // Refresh auth token
    await supabase.auth.getUser();

    return supabaseResponse;
};
