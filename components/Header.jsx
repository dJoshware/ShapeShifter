'use client';

import {
    AppBar,
    Button,
    ButtonGroup,
    Grid,
    useMediaQuery,
    useTheme,
} from '@mui/material';

export default function Header({ difficulty, onDifficultyChange }) {

    const theme = useTheme();
    // Media queries
    const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // <600px
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'lg')); // 600px - 1200px

    return (
        <AppBar
            position='static'
            sx={theme => ({
                bgcolor: theme.palette.sand.one,
                pb: 1,
                pt: 4,
                textAlign: 'center'
            })}>
            {/* Level indicators */}
            <Grid
                size={isMobile || isTablet ? 10 : 4}
                sx={{
                    // mb: 'auto',
                    // mt: 
                }}>
                <ButtonGroup
                    sx={theme => ({
                        '& .MuiButton-outlined': {
                            borderColor: theme.palette.main.dark_blue,
                        },
                    })}
                    variant='outlined'>
                    {['Beginner', 'Intermediate', 'Advanced'].map(level => (
                        <Button
                            key={level}
                            onClick={() => onDifficultyChange(level)}
                            sx={theme => ({
                                bgcolor:
                                    difficulty === level ?
                                    theme.palette.sand.four :
                                    theme.palette.sand.one,
                                color:
                                    difficulty === level ?
                                    theme.palette.sand.one :
                                    theme.palette.main.dark_blue,
                                fontWeight:
                                    difficulty === level ? 600 : 400,
                                textTransform: 'none',
                                '&:hover': {
                                    // 
                                }
                                })}>
                            {level}
                        </Button>
                    ))}
                </ButtonGroup>
            </Grid>
        </AppBar>
    );
}