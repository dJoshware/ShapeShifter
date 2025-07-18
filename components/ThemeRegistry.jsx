"use client";

import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "../lib/theme";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "../lib/createEmotionCache";

const emotionCache = createEmotionCache();

export default function ThemeRegistry({ children }) {
    return (
        <CacheProvider value={emotionCache}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </CacheProvider>
    );
}
