'use client';

import * as React from 'react';
import {
    Alert,
    alpha,
    Box,
    Button,
    CircularProgress,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    InputAdornment,
    Stack,
    styled,
    Typography,
    useMediaQuery,
    useTheme,
} from '@mui/material';
import FormFields from './FormFields';
import EmailIcon from '@mui/icons-material/Email';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import ClearIcon from '@mui/icons-material/Clear';

export default function Feedback() {
    const theme = useTheme();
    // Media queries
    const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // <600px
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'lg')); // 600px - 1200px

    // States and handlers
    // Email
    const [email, setEmail] = React.useState('');
    const [emailError, setEmailError] = React.useState('');
    const [emailAlertMessage, setEmailAlertMessage] = React.useState('');
    const [emailAlertSeverity, setEmailAlertSeverity] = React.useState('success');
    // Message
    const [message, setMessage] = React.useState('');
    const [messageError, setMessageError] = React.useState('');
    const [messageAlertMessage, setMessageAlertMessage] = React.useState('');
    const [messageAlertSeverity, setMessageAlertSeverity] = React.useState('success');
    // Submission
    const [feedbackAlertMessage, setFeedbackAlertMessage] = React.useState('');
    const [feedbackAlertSeverity, setFeedbackAlertSeverity] = React.useState('success');
    const [feedbackLoading, setFeedbackLoading] = React.useState(false);
    const [feedbackOpen, setFeedbackOpen] = React.useState(false);

    const [files, setFiles] = React.useState([]);
    const handleFileUpload = e => {
        const fileList = Array.from(e.target.files);
        setFiles(fileList);
        console.log('Uploaded files:', fileList);
    }
    const handleSubmitFeedback = async e => {
        e.preventDefault();
        setFeedbackLoading(true);

        if (!email || !message) {
            if (!email) {
                setEmailAlertSeverity('error');
                setEmailError('This field is required.');
            }
            if (!message) {
                setMessageAlertSeverity('error');
                setMessageError('This field is required.');
            }
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.trim() || !emailRegex.test(email)) {
            setEmailAlertSeverity('error');
            setEmailError("Please enter a valid email address.");
            return;
        }

        try {
            const formData = new FormData();
            formData.append('email', email);
            formData.append('message', message);
            files.forEach(file => {
                formData.append('files', file);
            });

            const res = await fetch('/api/report-issue', {
                method: 'POST',
                body: formData,
            });

            const result = await res.json();

            if (result.success) {
                setFeedbackLoading(false);
                setFeedbackAlertSeverity('success');
                setFeedbackAlertMessage('Feedback submitted successfully! Please double check your spam folder.');
                setEmail('');
                setMessage('');
                setFiles([]);
                await new Promise(resolve => setTimeout(resolve, 3000));
                setFeedbackOpen(false);
            } else {
                setFeedbackLoading(false);
                setFeedbackAlertSeverity('error');
                setFeedbackAlertMessage('Something went wrong. Please try again.');    
            }
            
        } catch (err) {
            console.error('Feedback submission error:', err);
            setFeedbackLoading(false);
            setFeedbackAlertSeverity('error');
            setFeedbackAlertMessage('An error occurred while submitting feedback.');
        }
    };

    // File upload field
    const VisuallyHiddenInput = styled('input')({
        bottom: 0,
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        left: 0,
        overflow: 'hidden',
        position: 'absolute',
        whiteSpace: 'nowrap',
        width: 1,
    });

    return (
        <>
            <Button
                onClick={() => setFeedbackOpen(true)}
                sx={theme => ({
                    alignSelf: 'center',
                    bgcolor: 'transparent',
                    color: theme.palette.main.dark_blue,
                    fontSize: '1rem',
                    fontWeight: 600,
                    mb: 1,
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
                {feedbackLoading
                    ? <CircularProgress size={24} color='inherit' />
                    : 'Submit Feedback'
                }
            </Button>

            {/* Submit Feedback modal */}
            <Dialog
                fullWidth
                maxWidth='sm'
                open={feedbackOpen}
                onClose={() => setFeedbackOpen(false)}
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
                    Submit feedback
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
                        endAdornment={
                            email ? (
                                <IconButton
                                    onClick={() => setEmail('')}
                                    onMouseDown={e => e.preventDefault()}>
                                    <ClearIcon />
                                </IconButton>
                            ) : null
                        }
                        error={!!emailError && /email/i.test(emailError)}
                        helperText={/email/i.test(emailError) ? emailError : ''}
                        label='Your email'
                        onChange={e => {
                            setEmail(e.target.value);
                            setEmailError('');
                            setEmailAlertMessage('');
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
                        value={email}
                    />
                    {emailError &&
                        !emailError.toLowerCase().includes("email") && (
                            <Alert
                                severity={emailAlertSeverity}
                                sx={{ fontWeight: 700 }}
                                variant='filled'>
                                    {emailAlertMessage}
                            </Alert>
                        )
                    }
                    {emailAlertMessage && (
                        <Alert
                            severity={emailAlertSeverity}
                            sx={{ fontWeight: 700 }}
                            variant='filled'>
                                {emailAlertMessage}
                        </Alert>
                    )}
                    {/* Description of error */}
                    <FormFields
                        autoComplete='off'
                        endAdornment={
                            message ? (
                                <IconButton
                                    onClick={() => setMessage('')}
                                    onMouseDown={e => e.preventDefault()}
                                    sx={{ mt: 'auto' }}>
                                    <ClearIcon />
                                </IconButton>
                            ) : null
                        }
                        error={!!messageError && /message/i.test(messageError)}
                        helperText={/message/i.test(messageError) ? messageError : ''}
                        label='Provide a description'
                        minRows={5}
                        multiline={true}
                        onChange={e => {
                            setMessage(e.target.value);
                            setMessageError('');
                            setMessageAlertMessage('');
                        }}
                        required={true}
                        sx={theme => ({
                            bgcolor: 'transparent',
                            borderRadius: 1,
                            color: theme.palette.main.dark_blue,
                            mb: 2,
                            px: 1,
                            width: '100%',
                        })}
                        type='text'
                        value={message}
                    />
                    {messageError &&
                        !messageError.toLowerCase().includes("message") && (
                            <Alert
                                severity={messageAlertSeverity}
                                sx={{ fontWeight: 700 }}
                                variant='filled'>
                                    {messageAlertMessage}
                            </Alert>
                        )
                    }
                    {messageAlertMessage && (
                        <Alert
                            severity={messageAlertSeverity}
                            sx={{ fontWeight: 700 }}
                            variant='filled'>
                                {messageAlertMessage}
                        </Alert>
                    )}
                    {/* Screenshot Field */}
                    <Typography
                        sx={theme => ({
                            color: theme.palette.main.dark_blue,
                            fontWeight: 600,
                            mb: 2,
                        })}>
                        Provide a screenshot, if visible
                    </Typography>
                    <Stack direction='row' spacing={1}>
                        <Button
                            component='label'
                            role={undefined}
                            startIcon={<CloudUploadIcon />}
                            tabIndex={-1}
                            variant='contained'
                            sx={theme => ({
                                bgcolor: theme.palette.main.dark_blue,
                                borderRadius: 2,
                                color: theme.palette.sand.one,
                                fontSize: 14,
                                fontWeight: 600,
                                height: 'fit-content',
                                width: 'fit-content',
                                '&.MuiButton-loading': {
                                    bgcolor: alpha(theme.palette.main.dark_blue, 0.38)
                                }
                            })}>
                            Upload files
                            <VisuallyHiddenInput
                                type='file'
                                onChange={handleFileUpload}
                                multiple
                            />
                        </Button>
                    </Stack>
                    {files.length > 0 && (
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                maxWidth: '100%',
                            }}>
                            {files.map(file => (
                                <Typography
                                    key={file.name + file.lastModified}
                                    sx={theme => ({
                                        color: theme.palette.main.dark_blue,
                                        mt: 1,
                                        wordBreak: 'break-word',
                                    })}>
                                    {file.name}
                                    <IconButton onClick={() => setFiles(prev => prev.filter(f => f.name !== file.name || f.lastModified !== file.lastModified))}>
                                        <ClearIcon sx={{ fontSize: 24 }} />
                                    </IconButton>
                                </Typography>
                            ))}
                        </Box>
                    )}
                    {feedbackAlertMessage && (
                        <Alert
                            severity={feedbackAlertSeverity}
                            sx={{ fontWeight: 700, mt: 2 }}
                            variant='filled'>
                                {feedbackAlertMessage}
                        </Alert>
                    )}
                </DialogContent>
                <DialogActions
                    sx={theme => ({
                        bgcolor: theme.palette.sand.four,
                        mb: 1,
                    })}>
                    <Button
                        onClick={() => setFeedbackOpen(false)}
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
                        disabled={feedbackLoading}
                        loading={feedbackLoading}
                        loadingPosition='center'
                        onClick={handleSubmitFeedback}
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
