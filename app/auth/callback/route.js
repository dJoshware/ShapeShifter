import { NextResponse } from 'next/server';
import { createServClient } from '../../../lib/supabaseServerClient';

export const runtime = 'nodejs';

export async function POST(req) {
    const supabase = await createServClient();
    const { event, session } = await req.json();

    if (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED') {
        await supabase.auth.setSession(session); // updates httpOnly cookies
    } else if (event === 'SIGNED_OUT') {
        await supabase.auth.signOut(); // clears cookies
    }
    return NextResponse.json({ ok: true });
}
