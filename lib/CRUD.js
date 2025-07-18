import createClient from './supabaseBrowserClient';
const supabase = createClient();

// DELETE currently logged‑in user
export async function deleteAccount() {
    const res = await fetch('/api/delete-account', { method: 'POST' });

    if (!res.ok) throw new Error('Failed to delete your account');
}

// UPDATE current user’s email
export async function updateEmail(newEmail) {
    const { data, error } = await supabase.auth.updateUser({ email: newEmail });
    if (error) throw error;
    return data;
}

// UPDATE current user’s password
export async function updatePassword(newPassword) {
    const { data, error } = await supabase.auth.updateUser({
        password: newPassword,
    });
    if (error) throw error;
    return data;
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

