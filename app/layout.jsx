import ThemeRegistry from "../components/ThemeRegistry";
import { AuthProvider } from "../lib/contexts/AuthContext";

export const metadata = {
    title: "Shape Shifter",
    description: "Everything you could ever learn about chords and scales.",
};

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body>
                <AuthProvider>
                    <ThemeRegistry>
                        {children}
                    </ThemeRegistry>
                </AuthProvider>
            </body>
        </html>
    );
}
