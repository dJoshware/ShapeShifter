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
            const {
                data: { session: initialSession },
                error,
            } = await supabase.auth.getSession();
            if (initialSession) {
                setUser(initialSession.user);
                setSession(initialSession);
            }
            setIsLoading(false);
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

            // Redirect on SIGNED_IN if on login, or SIGNED_OUT
            if (
                event === 'SIGNED_IN' &&
                window.location.pathname === '/signin'
            ) {
                router.push('/');
            }
            // If you want to force redirect to login on sign out from anywhere:
            if (event === 'SIGNED_OUT') {
                router.push('/');
            }
        });

        // Cleanup subscription on unmount
        return () => {
            subscription?.unsubscribe();
        };
    }, [supabase, router]);

    // Sign In handler
    const signIn = async (email, password) => {
        setIsLoading(true);
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });
        setIsLoading(false);
        return { data, error };
    };

    // Sign Up handler
    const signUp = async (email, password) => {
        setIsLoading(true);
        const { data, error } =
            await supabase.auth.signUp({
                email,
                password,
            });

        setIsLoading(false);
        router.push('/signin');
        return { data, error };
    };

    // Sign Out handler
    const signOut = async () => {
        setIsLoading(true);
        await supabase.auth.signOut();
        setIsLoading(false);
        router.push('/');
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
