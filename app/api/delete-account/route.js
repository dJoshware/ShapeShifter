import { NextResponse } from 'next/server';
import { createServerClient } from '../../../lib/supabaseServerClient';

export async function DELETE(req) {
    try {
        // Supabase client
        const supabase = await createServerClient();
        // Extract JWT from request headers
        const authHeader = req.headers.get('authorization');
        if (!authHeader) {
            return NextResponse.json({
                error: 'No authorization header',
                details: 'Authorization header is missing'
            }, { status: 401 });
        }
        // Get user from Supabase using JWT
        const { data: { user }, error: getUserError } = await supabase.auth.getUser(
            authHeader?.replace('Bearer ', '')
        );
        // console.log('User object:', user);
        // console.log('User Retrieval Error:', getUserError);
        if (getUserError || !user) {
            return NextResponse.json({
                error: 'Unauthorized',
                details: getUserError?.message || 'No authorized user found'
            }, { status: 401 });
        }
        
        // Parallel deletions from multiple tables
        const deletionResults = await Promise.allSettled([
            supabase
                .from('settings')
                .delete()
                .eq('user_id', user.id),
            supabase
                .from('subscriptions')
                .delete()
                .eq('user_id', user.id)
        ]);
        // Log deletion errors
        deletionResults.forEach((result, index) => {
            if (result.status === 'rejected') {
                console.error(`Deletion error in table ${index === 0 ? 'settings' : 'subscriptions'}:`, result.reason);
            } else if (result.status === 'fulfilled' && result.value.error) {
                console.error(`Deletion error in table ${index === 0 ? 'settings' : 'subscriptions'}:`, result.value.error);
            }
        });
        // Attempt to delete user
        const { error } = await supabase.auth.admin.deleteUser(user.id);
        if (error) {
            console.log('Account deletion error:', error);
            return NextResponse.json({
                error: 'Failed to delete account',
                details: error.message
            }, { status: 400 });
        }
        // Sign out user after deletion
        await supabase.auth.signOut();
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
