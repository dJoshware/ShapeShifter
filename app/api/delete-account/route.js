import { NextResponse } from 'next/server';
import { createServClient } from '../../../lib/supabaseServerClient';
import { createClient as createAdmin } from '@supabase/supabase-js';

export async function DELETE(req) {
    try {
        // Supabase client
        const supabase = await createServClient();
        // Get user from Bearer token or fall back to cookie session
        const authHeader = req.headers.get('authorization');
        let userId = null;

        if (authHeader?.startsWith('Bearer ')) {
            const token = authHeader.slice(7);
            const { data, error} = await supabase.auth.getUser(token);
            if (error || !data?.user) {
                return NextResponse.json({
                    error: 'Unauthorized',
                    details: error?.message ?? 'No authorized user found'
                }, { status: 401 });
            }
            userId = data.user.id;
        } else {
            const { data, error } = await supabase.auth.getUser();
            if (error || !data?.user) {
                return NextResponse.json({
                    error: 'Unauthorized',
                    details: error?.message ?? 'No authorized user found'
                }, { status: 401 });
            }
            userId = data.user.id;
        }

        // Create Supabase admin client
        const admin = createAdmin(
            process.env.NEXT_PUBLIC_SUPABASE_URL,
            process.env.SUPABASE_SERVICE_ROLE_KEY
        );

        // Clean app tables first (service role bypasses RLS)
        await Promise.allSettled([
            admin.from('settings').delete().eq('user_id', userId),
            admin.from('subscriptions').delete().eq('user_id', userId)
        ]);

        // Clear session cookies before deleting auth user
        try {
            await supabase.auth.signOut();
        } catch (err) {
            console.warn('signOut warning:', err);
        }

        // Attempt to delete user
        const { error } = await admin.auth.admin.deleteUser(userId);
        if (error) {
            console.log('Account deletion error:', error);
            return NextResponse.json({
                error: 'Failed to delete account',
                details: error.message
            }, { status: 400 });
        }
        return NextResponse.json({
            success: true,
            message: 'Account successfully deleted'
        });
    } catch (err) {
        console.error('Unexpected deletion error:', err);
        return NextResponse.json({
            error: 'Unexpected error during account deletion',
            details: err.message
        }, { status: 500 });
    }
}
