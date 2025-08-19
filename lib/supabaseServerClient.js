// import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
// import { headers, cookies } from 'next/headers';

// export function createServerClient() {
//     return createRouteHandlerClient({
//         supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
//         supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
//         headers,
//         cookies,
//     });
// }

import { createServerClient } from "@supabase/ssr";
import { cookies } from 'next/headers';

export async function createServClient() {
    const store = await cookies();

    return createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        {
            cookies: {
                getAll() {
                    return store.getAll().map(({ name, value }) => ({ name, value }));
                },
                setAll(cookiesToSet) {
                    cookiesToSet.forEach(({ name, value, options }) => {
                        store.set({ name, value, ...options });
                    });
                },
            },
        },
    );
}
