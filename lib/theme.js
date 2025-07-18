import { createTheme } from '@mui/material/styles';
// Montserrat
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/600.css';
import '@fontsource/montserrat/700.css';

const theme = createTheme({
    palette: {
        main: {
            beige: '#F4EFE6', // beige
            brown: '#4B4139', // brown
            dark_blue: '#39434b', // dark blue
            dirt: '#5E564D', // dirt brown
            green: '#5E6C5B', // green
            khaki: '#9E9B88', // khaki
            maroon: '#4b393a', // marooon
            olive: '#626b57', // olive
            white: '#FFFFFF', // white
        },
        sand: {
            one: '#ECEBDE', // lighter
            two: '#D7D3BF',
            three: '#C1BAA1',
            four: '#A59D84', // darker
        },
    },
    typography: {
        fontFamily: `'Montserrat', sans-serif`,
        desktop: {
            h1: { fontSize: '2.625rem' }, // 42px
            h2: { fontSize: '2.25rem' }, // 36px
            h3: { fontSize: '1.875rem' }, // 30px
            h4: { fontSize: '1.5rem' }, // 24px
            h5: { fontSize: '1.25rem' }, // 20px
            h6: { fontSize: '1rem' }, // 16px
            body: { fontSize: '1.125rem' }, // 18px
        },
        mobile: {
            h1: { fontSize: '2.25rem' }, // 36px
            h2: { fontSize: '1.75rem' }, // 28px
            h3: { fontSize: '1.5rem' }, // 24px
            h4: { fontSize: '1.25rem' }, // 20px
            h5: { fontSize: '1.125rem' }, // 18px
            h6: { fontSize: '1rem' }, // 16px
            body: { fontSize: '1rem' }, // 16px
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                // Target Chrome, Safari, Edge autofill backgrounds
                'input:-webkit-autofill, textarea:-webkit-autofill, select:-webkit-autofill': {
                    // Color of autofill background
                    WebkitBoxShadow: '0 0 0px 1000px #A59D84 inset !important',
                    // Color of autofill text
                    WebkitTextFillColor: '#39434b !important',
                },
            },
        },
        MuiSwitch: {
            styleOverrides: {
                // The little circle
                thumb: {
                    backgroundColor: '#39434b',
                },
                // The bar behind the thumb
                track: {
                    backgroundColor: '#5E6C5B',
                },
                // The root wrapper that handles checked state
                switchBase: {
                    color: '#39434b',
                    '&.Mui-checked': {
                        color: '#F4EFE6',
                        '& + .MuiSwitch-track': {
                            backgroundColor: '#5E6C5B',
                        },
                    },
                },
            },
        },
        // MuiTextField: {
        MuiFormControl: {
            styleOverrides: {
                root: {
                    '& label': {
                        color: '#ECEBDE'
                    },
                    '& label.Mui-focused': {
                        color: '#39434b'
                    }
                }
            }
        },
        MuiInput: {
            styleOverrides: {
                input: {
                    backgroundColor: 'transparent',
                    borderRadius: 3,
                    color: '#39434b',
                    padding: '8px 0',
                },
                root: {
                    '&::before, &::after': {
                        borderBottom: '2px solid #39434b',
                        borderRadius: 3,
                        color: '#ECEBDE'
                    },
                    '&:hover:not(.Mui-disabled, .Mui-error):before': {
                        borderBottom: '3px solid #ECEBDE',
                        borderRadius: 3,
                        color: '#ECEBDE'
                    },
                },
                underline: {
                    '&:before': {
                        borderBottom: '2px solid #ECEBDE',
                    },
                    '&.Mui-focused:after': {
                        borderBottom: '3px solid #39434b',
                        borderRadius: 3,
                        color: '#ECEBDE'
                    },
                }
            }
        },
    },
});

export default theme;