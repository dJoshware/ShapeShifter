import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { headers, cookies } from 'next/headers';

export function createServerClient() {
    return createRouteHandlerClient({
        supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
        supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        headers: headers(),
        cookies: cookies(),
    });
}
