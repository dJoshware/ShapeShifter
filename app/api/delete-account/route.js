import { NextResponse } from 'next/server';
import { createServerClient } from '../../lib/supabaseServerClient';

export async function POST(req) {
    const supabase = createServerClient();
    const { user } = await supabase.auth.getUser();
    // Requires SERVICE_ROLE key, so it only lives on the server
    const { error } = await supabase.auth.admin.deleteUser(user.id);
    if (error)
        return NextResponse.json({ error: error.message }, { status: 400 });
    return NextResponse.json({ success: true });
}
