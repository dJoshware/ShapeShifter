import { createClient } from "@supabase/supabase-js";
import { cookies } from 'next/headers';

export async function createServerClient() {
    const cookieStore = await cookies();

    // Create a server's supabase client with newly configured cookies
    return createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.SUPABASE_SERVICE_ROLE_KEY,
        {
            auth: {
                persistSession: false,
            },
            global: {
                headers: {
                    Authorization: `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY}`
                }
            },
            cookies: {
                get(name) {
                    return cookieStore.get(name)?.value;
                },
            },
        },
    );
};