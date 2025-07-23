import { NextResponse } from 'next/server';
import { createServerClient } from '../../../lib/supabaseServerClient';
import { createClient as createAdmin } from '@supabase/supabase-js';

export async function PUT(req) {
    try {
        // Supabase client
        const supabase = createServerClient();
        // Extract JWT from request headers
        const authHeader = req.headers.get('authorization');
        if (!authHeader) {
            return NextResponse.json({
                error: 'No authorization header',
                details: 'Authorization header is missing'
            }, { status: 401 });
        }
        // Get user from Supabase using JWT
        const token = authHeader.replace('Bearer ', '');
        const { data: { user }, error: getUserError } = await supabase.auth.getUser(token);
        console.log('User:', user);
        if (getUserError || !user) {
            return NextResponse.json({
                error: 'Unauthorized',
                details: getUserError?.message || 'No authorized user found'
            }, { status: 401 });
        }
        // Parse request body
        const { password } = await req.json();
        console.log('Password:', password);
        if (!password) {
            return NextResponse.json({
                error: 'Invalid Request',
                details: 'Password is required'
            }, { status: 400 });
        }
        // Create Supabase admin client
        const adminSupabase = createAdmin(
            process.env.NEXT_PUBLIC_SUPABASE_URL,
            process.env.SUPABASE_SERVICE_ROLE_KEY,
        );
        // Update email in auth.users
        const { data: updateData, error: updateError } = await adminSupabase.auth.admin.updateUserById(
            user.id,
            { password: password }
        );
        console.log('Update Data:', updateData);
        if (updateError) {
            console.log('Password update error:', updateError);
            return NextResponse.json({
                error: 'Failed to update password',
                details: updateError.message
            }, { status: 400 });
        }
        return NextResponse.json({
            success: true,
            message: 'Password successfully updated',
            data: updateData
        });
    } catch (err) {
        console.error('Unexpected password update error:', err);
        return NextResponse.json({
            error: 'Unexpected error during password update',
            details: err.message
        }, { status: 500 });
    }
}
