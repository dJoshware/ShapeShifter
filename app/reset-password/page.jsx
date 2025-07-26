"use client";

import * as React from "react";
import {
    Alert,
    alpha,
    Box,
    Button,
    CircularProgress,
    Container,
    Grid,
    IconButton,
    InputAdornment,
    Stack,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import KeyIcon from '@mui/icons-material/Key';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useAuth } from "../../lib/contexts/AuthContext";
import { useRouter } from "next/navigation";
import FormFields from "../../components/FormFields";
import createClient from "../../lib/supabaseBrowserClient";

export default function PasswordResetPage() {

    const theme = useTheme();
    const router = useRouter();
    const supabase = createClient();
    const { user, isLoading: authIsLoading, session } = useAuth();
    // Media queries
    const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // <600px
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'lg')); // 600px - 1200px
    
    const [password, setPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");
    const [showPassword, setShowPassword] = React.useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
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
        if (!isValidPassword(confirmPassword)) {
            setFormError('Password must be at least 8 characters and include uppercase, lowercase, a number, and a symbol (!@#$%^&-_.?/).')
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

    // Reset password in Supabase
    const handlePasswordReset = async () => {
        setLoading(true);
        if (!validateForm) return;

        const { error } = await supabase.auth.updateUser({
            password: confirmPassword
        });

        if (error) {
            console.error('Password reset error:', error);
            setLoading(false);
            setAlertSeverity('error');
            setAlertMessage(error.message || 'Could not update your password. Please try again.');
        } else {
            setLoading(false);
            setAlertSeverity('success');
            setAlertMessage('Password successfully updated! You may return to practice...');
            await new Promise(() => setTimeout(
                router.push('/'),
                3000
            ));
        }
    };

    // Show password mismatch until match
    React.useEffect(() => {
        if (confirmPassword.length > 0) {
            setFormError(
                confirmPassword === password
                ? ''
                : "Passwords must match."
            );
        } else {
            setFormError('');
        }
    }, [password, confirmPassword]);

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
                    justifyContent={isMobile || isTablet ? 'center' : 'space-evenly'}>
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
                            Reset your password
                        </Typography>
                        <Stack spacing={4}>
                            {/* New Password */}
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
                                label='New password'
                                onChange={e => {
                                    setPassword(e.target.value);
                                    setAlertMessage('');
                                }}
                                startAdornment={
                                    <InputAdornment
                                        position="start"
                                        sx={{
                                            borderRight: '2px solid #39434b',
                                            pr: .7,
                                        }}>
                                        <KeyIcon color={alertMessage === 'error' ? 'error' : 'action'} />
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
                            {/* Confirm Password */}
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
                                error={!!formError && /password/i.test(formError)}
                                helperText={/password/i.test(formError) ? formError : ''}
                                label='Confirm New Password'
                                onChange={e => {
                                    setConfirmPassword(e.target.value);
                                    setAlertMessage('');
                                }}
                                startAdornment={
                                    <InputAdornment
                                        position="start"
                                        sx={{
                                            borderRight: '2px solid #39434b',
                                            pr: .7,
                                        }}>
                                        <KeyIcon color={alertMessage === 'error' ? 'error' : 'action'} />
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
                                !formError.toLowerCase().includes("password") && (
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
                            <Box
                                sx={{
                                    display: 'flex',
                                    gap: 2,
                                    justifyContent: 'center',
                                }}>
                                <Button
                                    onClick={() => router.push('/')}
                                    sx={theme => ({
                                        alignSelf: 'center',
                                        bgcolor: theme.palette.main.dark_blue,
                                        borderRadius: 6,
                                        color: theme.palette.sand.one,
                                        fontSize: '1rem',
                                        fontWeight: 700,
                                        textTransform: "none",
                                        width: '25%',
                                        '&.MuiButton-loading': {
                                            bgcolor: alpha(theme.palette.main.dark_blue, 0.38)
                                        }
                                    })}
                                    variant='contained'>
                                    Cancel
                                </Button>
                                <Button
                                    disabled={loading}
                                    loading={loading}
                                    loadingPosition="center"
                                    onClick={() => handlePasswordReset()}
                                    sx={theme => ({
                                        alignSelf: 'center',
                                        bgcolor: theme.palette.main.dark_blue,
                                        borderRadius: 6,
                                        color: theme.palette.sand.one,
                                        fontSize: '1rem',
                                        fontWeight: 700,
                                        textTransform: "none",
                                        width: '25%',
                                        '&.MuiButton-loading': {
                                            bgcolor: alpha(theme.palette.main.dark_blue, 0.38)
                                        }
                                    })}
                                    variant='contained'>
                                    {loading
                                        ? <CircularProgress size={24} color='inherit' />
                                        : 'Save'
                                    }
                                </Button>
                            </Box>
                        </Stack>
                    </Box>
                </Grid>
            </Container>
        </Box>
    );
}
