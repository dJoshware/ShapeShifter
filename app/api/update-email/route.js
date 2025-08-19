import { NextResponse } from 'next/server';
import { createServClient } from '../../../lib/supabaseServerClient';
import { createClient as createAdmin } from '@supabase/supabase-js';

export async function PUT(req) {
    try {
        // Supabase client
        const supabase = createServClient();
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
        // Parse request body
        const { email } = await req.json();
        if (!email) {
            return NextResponse.json({
                error: 'Invalid Request',
                details: 'Email is required'
            }, { status: 400 });
        }
        // Create Supabase admin client
        const admin = createAdmin(
            process.env.NEXT_PUBLIC_SUPABASE_URL,
            process.env.SUPABASE_SERVICE_ROLE_KEY,
        );

        // Update email in auth.users
        const { data: updateData, error: updateError } = await admin.auth.admin.updateUserById(
            userId,
            { email: email }
        );
        console.log('Update Data:', updateData);
        if (updateError) {
            console.log('Email update error:', updateError);
            return NextResponse.json({
                error: 'Failed to update email',
                details: updateError.message
            }, { status: 400 });
        }
        return NextResponse.json({
            success: true,
            message: 'Email successfully updated',
            data: updateData
        });
    } catch (err) {
        console.error('Unexpected email update error:', err);
        return NextResponse.json({
            error: 'Unexpected error during email update',
            details: err.message
        }, { status: 500 });
    }
}
