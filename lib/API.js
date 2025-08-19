import createClient from './supabaseBrowserClient';
const supabase = createClient();

// DELETE currently logged‑in user
export async function deleteAccount() {
    try {
        // Get current session
        const { data, error } = await supabase.auth.getSession();
        const session = data?.session;
        if (!session) {
            throw new Error('No active session');
        }
        const res = await fetch('/api/delete-account', {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${session.access_token}`,
                'Content-Type': 'application/json'
            }
        });
        if (!res.ok) {
            const errorData = await res.json();
            throw new Error(errorData.details || 'Failed to delete your account');
        }
        const resData = await res.json();
        return resData;
    } catch (err) {
        console.error('Account deletion error:', err);
        throw err;
    }
}

// UPDATE current user’s email
export async function updateEmail(newEmail) {
    try {
        // Get current session
        const { data, error } = await supabase.auth.getSession();
        const session = data?.session;
        if (!session) {
            throw new Error('No active session');
        }
        const res = await fetch('/api/update-email', {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${session.access_token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: newEmail })
        });
        if (!res.ok) {
            const errorData = await res.json();
            throw new Error(errorData.details || 'Failed to update your email');
        }
        const resData = await res.json();
        return resData;
    } catch (err) {
        console.error('Email update error:', err);
        throw err;
    }
}

// UPDATE current user’s password
export async function updatePassword(newPassword) {
    try {
        // Get current session
        const { data, error } = await supabase.auth.getSession();
        const session = data?.session;
        if (!session) {
            throw new Error('No active session');
        }
        const res = await fetch('/api/update-password', {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${session.access_token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ password: newPassword })
        });
        if (!res.ok) {
            const errorData = await res.json();
            throw new Error(errorData.details || 'Failed to update your password');
        }
        const resData = await res.json();
        return resData;
    } catch (err) {
        console.error('Password update error:', err);
        throw err;
    }
}

// GET user's settings
export async function getSettings() {
    return supabase.from('settings').select('*').single();
}

// UPDATE user's settings
export async function updateSettings(payload) {
    const { data, error } = await supabase
        .from('settings')
        .update(payload)
        .eq('user_id', supabase.auth.user().id);
    if (error) throw error;
    return data;
}

// Email validator
export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Password validator
export function isValidPassword(password) {
    const minLength = /.{8,}/;
    const hasUpper = /[A-Z]/;
    const hasLower = /[a-z]/;
    const hasDigit = /[0-9]/;
    const hasSpecial = /[!@#$%^&_.?\/-]/; // Allowed specials
    const notAllowed = /[*()+={}|,<>:;"']/; // Blocked specials

    return (
        minLength.test(password) &&
        hasUpper.test(password) &&
        hasLower.test(password) &&
        hasDigit.test(password) &&
        hasSpecial.test(password) &&
        !notAllowed.test(password)
    );
}
