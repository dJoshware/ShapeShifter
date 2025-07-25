"use client";

import * as React from "react";
import {
    Alert,
    Box,
    Button,
    CircularProgress,
    Container,
    Grid,
    IconButton,
    InputAdornment,
    Link,
    Stack,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import KeyIcon from '@mui/icons-material/Key';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useAuth } from "../../lib/contexts/AuthContext";
import { useRouter } from "next/navigation";
import FormFields from "../../components/FormFields";

export default function SignUpPage() {

    const theme = useTheme();
    const router = useRouter();
    const { user, signUp, isLoading: authIsLoading, session } = useAuth();
    // Media queries
    const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // <600px
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'lg')); // 600px - 1200px
    
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");
    const [showPassword, setShowPassword] = React.useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
    const [confirmError, setConfirmError] = React.useState("");
    const [formError, setFormError] = React.useState("");
    const [loading, setLoading] = React.useState(false);
    const [alertMessage, setAlertMessage] = React.useState("");
    const [alertSeverity, setAlertSeverity] = React.useState("success");

    // Password validator for account registration
    function isValidPassword(password) {
        const minLength = /.{8,}/;
        const hasUpper = /[A-Z]/;
        const hasLower = /[a-z]/;
        const hasDigit = /[0-9]/;
        const hasSpecial = /[!@#$%^&-_.?/]/; // Allowed specials
        const notAllowed = /[*()+={}|,<>:;"']/; // Blocked specials

        return (
            minLength.test(password) &&
            hasUpper.test(password) &&
            hasLower.test(password) &&
            hasDigit.test(password) &&
            hasSpecial.test(password) &&
            !notAllowed.test(password)
        );
    }

    const validateForm = () => {
        setFormError("");
        setAlertMessage("");

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.trim() || !emailRegex.test(email)) {
            setFormError("Please enter a valid email address.");
            return false;
        }
        if (!password.trim()) {
            setFormError("Please enter a password.");
            return false;
        }
        if (!confirmPassword.trim()) {
            setFormError("Please confirm your password.");
            return false;
        }
        if (password !== confirmPassword) {
            setFormError("Passwords do not match.");
            return false;
        }
        return true;
    };

    // Password default preventers
    const handleMouseDownPassword = e => e.preventDefault();
    const handleMouseUpPassword = e => e.preventDefault();
    const handleShowPassword = () => {
        setShowPassword(s => !s);
        setShowConfirmPassword(s => !s);
    };

    // Sign Up handler
    const handleSignup = async () => {
        if (!validateForm) return;
        
        if (!isValidPassword(password)) {
            setFormError(
                "Password must be at least 8 characters and include uppercase, lowercase, a number, and a symbol (!@#$%^&-_.?/)."
            );
            return;
        }
        
        // You can pass additional data for your public 'settings'/'subscriptions' table if needed
        // const additionalData = { full_name: "Some Name" };
        const { error } = await signUp(email, password /* additional data */);

        if (error) {
            setAlertSeverity("error");
            // Check for specific public table insert error if you customized the error object in AuthProvider
            if (error.publicTableInsertError) {
                setAlertMessage(`Registration succeeded but profile creation failed: ${error.publicTableInsertError.message}. Please contact support.`);
            } else {
                setAlertMessage(error.message || "Failed to register. The email might already be in use or the password is too weak.");
            }
        } else {
            setAlertSeverity("success");
            setAlertMessage("Registration successful! Redirecting...");
        }
    };

    // Show password mismatch until match
    React.useEffect(() => {
        if (confirmPassword.length > 0) {
            setConfirmError(
                confirmPassword === password
                ? ''
                : "Passwords must match."
            );
        } else {
            setConfirmError('');
        }
    }, [password, confirmPassword]);
    
    // Get user information on user/router change
    React.useEffect(() => {
        if (user) {
            // AuthContext might already redirect if SIGNED_IN and on /login.
            // This is an additional safeguard or primary client-side redirect.

            // FETCH USER DATA FROM SUPABASE HERE IF NEED BE

            router.push('/');
        }
    }, [user, router]);

    // If auth is loading and we don't have a user yet, show a general loader
    // (The redirect useEffect will handle moving away if 'user' becomes available)
    if (authIsLoading && !user) {
        return (
            <Box
                sx={theme => ({
                    alignItems: 'center',
                    bgcolor: theme.palette.sand.one,
                    display: 'flex',
                    height: '100vh',
                    justifyContent: 'center',
                })}>
                <CircularProgress sx={theme => ({
                    color: theme.palette.main.dark_blue,
                })}/>
            </Box>
        );
    }
    
    // If user exists, this page shouldn't be visible (redirected by useEffect)
    // but as a fallback or during fast transitions:
    if (user) {
        return (
            <Box
                sx={theme => ({
                    alignItems: 'center',
                    bgcolor: theme.palette.sand.one,
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100vh',
                    justifyContent: 'center',
                })}>
                <Typography
                    sx={theme => ({
                        color: theme.palette.main.dark_blue,
                        fontSize: 36,
                        fontWeight: 600,
                    })}>
                    Loading Shape Shifter...
                </Typography>
                <CircularProgress sx={theme => ({
                    color: theme.palette.main.dark_blue,
                })}/>
            </Box>
        );
    }

    return (
        <Box
            sx={theme => ({
                alignItems: 'center',
                bgcolor: theme.palette.sand.one,
                display: 'flex',
                justifyContent: 'center',
                minHeight: '100vh',
            })}>
            <Container maxWidth='sm'> {/* Try 'sm' if too wide */}
                <Grid
                    alignItems='center'
                    container
                    justifyContent={isMobile || isTablet ? 'center' : 'space-evenly'}
                    sx={theme => ({
                        p: 4,
                    })}>
                    {/* <Grid size={{ xs: 10, sm: 8, md: 6, lg: 4 }}> */}
                        <Box
                            sx={theme => ({
                                bgcolor: theme.palette.sand.four,
                                borderRadius: 2,
                                boxShadow: 3,
                                display: 'flex',
                                flexDirection: 'column',
                                p: isMobile || isTablet ? 3 : 4,
                                width: '100%'
                            })}
                            textAlign='center'>
                            <Typography
                                component='h3'
                                display='block'
                                sx={theme => ({
                                    color: theme.palette.sand.one,
                                    fontSize:
                                        isMobile || isTablet ?
                                        theme.typography.mobile.h3.fontSize :
                                        theme.typography.desktop.h3.fontSize,
                                    fontWeight: 700,
                                    mb: 2,
                                })}>
                                Create an account
                            </Typography>
                            <Stack spacing={3}>
                                <FormFields
                                    autoComplete='email'
                                    error={!!formError && /email/i.test(formError)}
                                    helperText={/email/i.test(formError) ? formError : ''}
                                    label='Email'
                                    onChange={e => {
                                        setEmail(e.target.value);
                                        setFormError('');
                                        setAlertMessage('');
                                    }}
                                    startAdornment={
                                        <InputAdornment
                                            position="start"
                                            sx={{
                                                borderRight: '2px solid #39434b',
                                                pr: .8,
                                            }}>
                                            <PersonIcon color={alertMessage ? 'error' : 'action'} />
                                        </InputAdornment>
                                    }
                                    sx={theme => ({
                                        bgcolor: theme.palette.sand.four,
                                        borderRadius: 1,
                                        color: theme.palette.main.dark_blue,
                                        mt: 1,
                                        px: 1,
                                    })}
                                    type='email'
                                    value={email}
                                />
                                <FormFields
                                    autoComplete='current-password'
                                    endAdornment={
                                        <IconButton
                                            onClick={handleShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            onMouseUp={handleMouseUpPassword}>
                                            {showPassword && showConfirmPassword ?
                                            <VisibilityOffIcon /> : <VisibilityIcon />}
                                        </IconButton>
                                    }
                                    error={!!formError && /password/i.test(formError)}
                                    helperText={/password/i.test(formError) ? formError : ''}
                                    label='Password'
                                    onChange={e => {
                                        setPassword(e.target.value);
                                        setFormError('');
                                        setAlertMessage('');
                                    }}
                                    startAdornment={
                                        <InputAdornment
                                            position="start"
                                            sx={{
                                                borderRight: '2px solid #39434b',
                                                pr: .7,
                                            }}>
                                            <KeyIcon color={alertMessage ? 'error' : 'action'} />
                                        </InputAdornment>
                                    }
                                    sx={theme => ({
                                        bgcolor: theme.palette.sand.four,
                                        borderRadius: 1,
                                        color: theme.palette.main.dark_blue,
                                        mt: 1,
                                        px: 1,
                                    })}
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                />
                                <FormFields
                                    endAdornment={
                                        <IconButton
                                            onClick={handleShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            onMouseUp={handleMouseUpPassword}>
                                            {showConfirmPassword && showPassword ?
                                            <VisibilityOffIcon /> : <VisibilityIcon />}
                                        </IconButton>
                                    }
                                    error={!!confirmError}
                                    helperText={confirmError}
                                    label='Confirm Password'
                                    onChange={e => {
                                        setConfirmPassword(e.target.value);
                                        setFormError('');
                                        setAlertMessage('');
                                    }}
                                    startAdornment={
                                        <InputAdornment
                                            position="start"
                                            sx={{
                                                borderRight: '2px solid #39434b',
                                                pr: .7,
                                            }}>
                                            <KeyIcon color={alertMessage ? 'error' : 'action'} />
                                        </InputAdornment>
                                    }
                                    sx={theme => ({
                                        bgcolor: theme.palette.sand.four,
                                        borderRadius: 1,
                                        color: theme.palette.main.dark_blue,
                                        mt: 1,
                                        px: 1,
                                    })}
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    value={confirmPassword}
                                />
                                {formError &&
                                    !formError.toLowerCase().includes("email") && !formError.toLowerCase().includes("password") && (
                                        <Alert
                                            severity={alertSeverity}
                                            sx={{ fontWeight: 700, mb: 3 }}
                                            variant='filled'>
                                                {alertMessage}
                                        </Alert>
                                    )
                                }
                                {alertMessage && (
                                    <Alert
                                        severity={alertSeverity}
                                        sx={{ fontWeight: 700, mb: 3 }}
                                        variant='filled'>
                                            {alertMessage}
                                    </Alert>
                                )}
                                <Button
                                    loading={loading}
                                    loadingPosition="center"
                                    onClick={handleSignup}
                                    sx={theme => ({
                                        alignSelf: 'center',
                                        bgcolor: theme.palette.main.dark_blue,
                                        borderRadius: 6,
                                        color: theme.palette.sand.one,
                                        // fontSize:
                                        //     isMobile || isTablet
                                        //     ? theme.typography.mobile.body.fontSize
                                        //     : theme.typography.desktop.body.fontSize,
                                        fontSize: '1rem',
                                        fontWeight: 700,
                                        mt: 3,
                                        textTransform: "none",
                                        width: '50%',
                                        '&.MuiButton-loading': {
                                            bgcolor: theme.palette.main.white,
                                            opacity: 0.8,
                                        }
                                    })}
                                    variant='contained'>
                                    {authIsLoading
                                        ? <CircularProgress size={24} color='inherit' />
                                        : 'Sign Up'
                                    }
                                </Button>
                                <Link
                                    href='/signin'
                                    sx={theme => ({
                                        color: theme.palette.main.dark_blue,
                                        position: 'relative',
                                        textDecoration: 'none',
                                        textDecorationColor: theme.palette.main.dark_blue,
                                        transition: 'color 200ms ease-in-out',
                                        '&::after': {
                                            content: '""',
                                            position: 'absolute',
                                            left: 105,
                                            bottom: 0,
                                            width: '50%',
                                            height: '2px',
                                            bgcolor: theme.palette.main.dark_blue,
                                            transform: 'scaleX(0)',
                                            transformOrigin: 'center',
                                            transition: 'transform 200ms ease-in-out',
                                        },
                                        '&:hover': {
                                            color: theme.palette.main.dark_blue,
                                        },
                                        '&:hover::after': {
                                            transform: 'scaleX(1)',
                                        },
                                    })}>
                                    Already have an account?
                                </Link>
                            </Stack>
                        </Box>
                    {/* </Grid> */}
                </Grid>
            </Container>
        </Box>
    );
}
