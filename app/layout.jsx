import Providers from "../components/Providers";
import Footer from "../components/Footer";
import { Box } from "@mui/material";

export const metadata = {
    title: "Shape Shifter",
    description: "Everything you could ever learn about chords and scales.",
};

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body>
                <Box sx={{
                    bgcolor: '#ECEBDE',
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100vh',
                }}>
                    <Providers>
                        <Box
                            component='main'
                            sx={{
                                display: 'flex',
                                flex: 1,
                                flexDirection: 'column'
                            }}>
                            {children}
                        </Box>
                        <Footer />
                    </Providers>
                </Box>
            </body>
        </html>
    );
}
