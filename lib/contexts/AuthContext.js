'use client';

import * as React from 'react';
import createClient from '../supabaseBrowserClient';
import { useRouter } from 'next/navigation';

const AuthContext = React.createContext(undefined);

export const AuthProvider = ({ children }) => {
    const supabase = createClient();
    const router = useRouter();
    const [user, setUser] = React.useState(null);
    const [session, setSession] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        // Attempt to get the initial session
        const getInitialSession = async () => {
            try {
                const { data } = await supabase.auth.getSession();
                const initialSession = data?.session;
                if (initialSession) {
                    setUser(initialSession.user);
                    setSession(initialSession);
                } else {
                    setUser(null);
                    setSession(null);
                }
            } catch (err) {
                console.error('Error getting initial session:', err);
                setUser(null);
                setSession(null);
            } finally {
                setIsLoading(false);
            }
        };

        getInitialSession();

        // Set up the auth state change listener
        const { data: { subscription }, } = supabase.auth.onAuthStateChange(
            (event, newSession) => {
            console.log(
                'Auth event in AuthProvider:',
                event,
                'New Session:',
                newSession
            );
            const currentUser = newSession?.user ?? null;
            setUser(currentUser);
            setSession(newSession);
            setIsLoading(false);

            // Supabase Auth handlers
            if (event === 'INITIAL_SESSION') {
                // TRY THE WELCOME/UPDATE NOTIFICATION LOGIC HERE
            }
            // Redirect on SIGNED_IN if NOT on /reset-password page
            else if (event === 'SIGNED_IN') {
                // const isPasswordResetTab = window.location.pathname.includes('/reset-password');
                // const wasPasswordReset = localStorage.getItem('passwordResetDone') === 'true';

                // console.log('Is /reset-password route:', isPasswordResetTab);
                // console.log('Password Reset Done:', wasPasswordReset);

                // if (wasPasswordReset && !isPasswordResetTab) {
                //     router.push('/signin');
                // } else if (!isPasswordResetTab && !wasPasswordReset) {
                //     router.push('/');
                // }
                // router.push('/');
            }
            // Force redirect to home page on sign out from anywhere
            else if (event === 'SIGNED_OUT') {
                // router.push('/');
            }
            // Refresh user on update
            else if (event === 'USER_UPDATED') {
                window.location.reload();
            }
        });

        // Cleanup subscription on unmount
        return () => {
            subscription?.unsubscribe();
        };
    }, [supabase, router]);

    // Listen for password reset flag in localStorage
    React.useEffect(() => {
        const handleStorage = e => {
            if (e.key === 'passwordResetDone' && e.newValue === 'true') {
                console.log('Auth: Password Reset Done:', e.newValue);
                router.push('/signin');
            }
            console.log('Auth: event key:', e.key);
            console.log('Auth: event newValue:', e.newValue);
        };

        window.addEventListener('storage', handleStorage);
        return () => window.removeEventListener('storage', handleStorage);
    }, [session]);

    // Sign In handler
    const signIn = async (email, password) => {
        setIsLoading(true);
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password
        });
        setIsLoading(false);
        return { data, error };
    };

    // Sign Up handler
    const signUp = async (email, password) => {
        setIsLoading(true);
        const { data, error } =
            await supabase.auth.signUp({
                email: email,
                password: password
            });

        setIsLoading(false);
        return { data, error };
    };

    // Sign Out handler
    const signOut = async () => {
        setIsLoading(true);
        try {
            const { data: { session } } = await supabase.auth.getSession();

            if (session) {
                const { error } = await supabase.auth.signOut({ scope: 'global' });
                // If token is already invalid, Supabase returns 403 — treat as OK
                if (error && error.status !== 403) throw error;
            }

            // Always clear local storage/session
            await supabase.auth.signOut({ scope: 'local' });

            // Clear server-side cookies set by SSR client
            await fetch('/auth/signout', { method: 'POST', credentials: 'include' });

            router.replace('/');
        } catch (e) {
            setIsLoading(false);
            console.warn('Signout issue:', e);
            router.replace('/');
        }
    };

    const value = {
        user,
        session,
        signIn,
        signUp,
        signOut,
        isLoading,
    };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = React.useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
