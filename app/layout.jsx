"use client";

import { ThemeProvider, CssBaseline } from "@mui/material";
import Header from '../components/Header';
import theme from "../lib/theme";

export default function ThemeRegistry({ children }) {
    return (
        <html lang="en">
            <body>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    {/* <Header /> */}
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}