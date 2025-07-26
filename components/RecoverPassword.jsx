'use client';

import * as React from 'react';
import {
    Alert,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    InputAdornment,
    useMediaQuery,
    useTheme,
} from '@mui/material';
import createClient from '../lib/supabaseBrowserClient';
import FormFields from './FormFields';
import EmailIcon from '@mui/icons-material/Email';
import ClearIcon from '@mui/icons-material/Clear';

export default function RecoverPassword() {
    const theme = useTheme();
    // Media queries
    const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // <600px
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'lg')); // 600px - 1200px
    // Supabase browser client
    const supabase = createClient();

    // States and handlers
    const [recoveryLoading, setRecoveryLoading] = React.useState(false);
    const [recoveryOpen, setRecoveryOpen] = React.useState(false);
    const [formEmail, setFormEmail] = React.useState('');
    const [formError, setFormError] = React.useState('');
    const [alertMessage, setAlertMessage] = React.useState("");
    const [alertSeverity, setAlertSeverity] = React.useState("success");
    const handlePasswordReset = async () => {
        setRecoveryLoading(true);
        setFormError('');
        setAlertMessage('');

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formEmail.trim() || !emailRegex.test(formEmail)) {
            setFormError("Please enter a valid email address.");
            return;
        }

        const { error } = await supabase.auth.resetPasswordForEmail(formEmail, {
            redirectTo: 'http://localhost:3000/reset-password'
        });

        if (error) {
            console.error('Password reset error:', error);
            setRecoveryLoading(false);
            setAlertSeverity('error');
            setAlertMessage(error.message || 'Could not send recovery email. Please try again.');
        } else {
            setRecoveryLoading(false);
            setAlertSeverity('success');
            setAlertMessage('Recovery email sent! Please wait a moment...')
            await new Promise(resolve => setTimeout(resolve, 3000));
            setRecoveryOpen(false);
        }
    };

    return (
        <>
            <Button
                onClick={() => setRecoveryOpen(true)}
                sx={theme => ({
                    alignSelf: 'center',
                    bgcolor: 'transparent',
                    color: theme.palette.main.dark_blue,
                    fontSize: '1rem',
                    fontWeight: 600,
                    position: 'relative',
                    textTransform: 'none',
                    transition: 'color 200ms ease-in-out',
                    width: 'fit-content',
                    '&::after': {
                        bgcolor: theme.palette.main.dark_blue,
                        bottom: 5,
                        content: '""',
                        height: '2px',
                        left: 0,
                        position: 'absolute',
                        transform: 'scaleX(0)',
                        transformOrigin: 'center',
                        transition: 'transform 200ms ease-in-out',
                        width: '100%',
                    },
                    '&:hover': {
                        color: theme.palette.main.dark_blue,
                    },
                    '&:hover::after': {
                        transform: 'scaleX(1)',
                    },
                })}>
                Forgot password?
            </Button>

            {/* Recover Password modal */}
            <Dialog
                fullWidth
                maxWidth='sm'
                open={recoveryOpen}
                onClose={() => setRecoveryOpen(false)}
                slotProps={{
                    paper: {
                        sx: theme => ({
                            bgcolor: theme.palette.sand.four,
                        })
                    }
                }}>
                <DialogTitle
                    sx={theme => ({
                        bgcolor: theme.palette.sand.four,
                        borderBottom: `2px solid ${theme.palette.main.dark_blue}`,
                        color: theme.palette.main.dark_blue,
                        fontSize:
                            isMobile || isTablet ?
                            theme.typography.mobile.h3.fontSize :
                            theme.typography.desktop.h3.fontSize,
                        fontWeight: 700,
                        pb: 2,
                        textAlign: 'center',
                    })}>
                    Let's get you back to practice!
                </DialogTitle>
                <DialogContent
                    sx={theme => ({
                        bgcolor: theme.palette.sand.four,
                        display: 'flex',
                        flexDirection: 'column',
                        mt: 3,
                        mx: '10%',
                    })}>
                    {/* Email */}
                    <FormFields
                        error={!!formError && /email/i.test(formError)}
                        helperText={/email/i.test(formError) ? formError : ''}
                        label='Where should we send your recovery link?'
                        onChange={e => {
                            setFormEmail(e.target.value);
                            setFormError('');
                            setAlertMessage('');
                        }}
                        required={true}
                        startAdornment={
                            <InputAdornment
                                position='start'
                                sx={{
                                    borderRight: '2px solid #39434b',
                                    pr: .8,
                                }}>
                                <EmailIcon color='inherit' />
                            </InputAdornment>
                        }
                        sx={theme => ({
                            bgcolor: 'transparent',
                            borderRadius: 1,
                            color: theme.palette.main.dark_blue,
                            mb: 2,
                            px: 1,
                            width: '100%',
                        })}
                        type='email'
                    />
                    {formError &&
                        !formError.toLowerCase().includes("email") && (
                            <Alert
                                severity={alertSeverity}
                                sx={{ fontWeight: 700 }}
                                variant='filled'>
                                    {alertMessage}
                            </Alert>
                        )
                    }
                    {alertMessage && (
                        <Alert
                            severity={alertSeverity}
                            sx={{ fontWeight: 700 }}
                            variant='filled'>
                                {alertMessage}
                        </Alert>
                    )}
                </DialogContent>
                <DialogActions
                    sx={theme => ({
                        bgcolor: theme.palette.sand.four,
                        mb: 1,
                    })}>
                    <Button
                        onClick={() => setRecoveryOpen(false)}
                        sx={theme => ({
                            bgcolor: theme.palette.main.dark_blue,
                            borderRadius: 6,
                            color: theme.palette.sand.one,
                            fontSize:
                                isMobile || isTablet ?
                                theme.typography.mobile.h6.fontSize :
                                theme.typography.desktop.h6.fontSize,
                            maxWidth: 'fit-content',
                            px: 2,
                            textTransform: 'none',
                        })}>
                        Cancel
                    </Button>
                    <Button
                        disabled={recoveryLoading}
                        loading={recoveryLoading}
                        loadingPosition='center'
                        onClick={() => handlePasswordReset()}
                        sx={theme => ({
                            bgcolor: theme.palette.main.dark_blue,
                            borderRadius: 6,
                            color: theme.palette.sand.one,
                            fontSize:
                                isMobile || isTablet ?
                                theme.typography.mobile.h6.fontSize :
                                theme.typography.desktop.h6.fontSize,
                            maxWidth: 'fit-content',
                            px: 2,
                            textTransform: 'none',
                        })}>
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
