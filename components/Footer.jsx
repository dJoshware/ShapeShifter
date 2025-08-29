'use client';

import {
    Box,
    Container,
    Grid,
    Typography,
    useMediaQuery,
    useTheme,
} from '@mui/material';

export default function Footer() {

    const theme = useTheme();
    // Media queries
    const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // <600px
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'lg')); // 600px - 1200px

    return (
        <Box
            // component='footer'
            sx={theme => ({
                bgcolor: theme.palette.sand.one,
                color: theme.palette.main.dark_blue,
                pb: 2,
            })}>
            <Container maxWidth='xl'>
                <Grid
                    container
                    sx={{ justifyContent: 'center' }}>
                    <Typography>
                        © {new Date().getFullYear()} Shape Shifter. All rights reserved.
                    </Typography>
                </Grid>
            </Container>
        </Box>
    );
}