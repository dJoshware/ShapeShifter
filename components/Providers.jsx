'use client';

import { AuthProvider } from "../lib/contexts/AuthContext";
import ThemeRegistry from "../components/ThemeRegistry";
import SupabaseProvider from "./SupabaseProvider";

export default function Providers({ children }) {
    return (
        <SupabaseProvider>
            <AuthProvider>
                <ThemeRegistry>
                    {children}
                </ThemeRegistry>
            </AuthProvider>
        </SupabaseProvider>
    );
}