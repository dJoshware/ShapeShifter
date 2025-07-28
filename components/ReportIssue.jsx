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

export default function ReportIssue() {
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
    const [reportAlertMessage, setReportAlertMessage] = React.useState('');
    const [reportAlertSeverity, setReportAlertSeverity] = React.useState('success');
    const [reportLoading, setReportLoading] = React.useState(false);
    const [reportIssueOpen, setReportIssueOpen] = React.useState(false);

    const [files, setFiles] = React.useState([]);
    const handleFileUpload = e => {
        const fileList = Array.from(e.target.files);
        setFiles(fileList);
        console.log('Uploaded files:', fileList);
    }
    const handleSubmitReport = async () => {
        setReportLoading(true);

        if (!email || !message) {
            if (!email) setEmailError('This field is required.');
            if (!message) setMessageError('This field is required.');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.trim() || !emailRegex.test(email)) {
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
                setReportLoading(false);
                setReportAlertSeverity('success');
                setReportAlertMessage('Report submitted successfully!');
                setEmail('');
                setMessage('');
                setFiles([]);
                await new Promise(resolve => setTimeout(resolve, 3000));
                setReportIssueOpen(false);
            } else {
                setReportLoading(false);
                setReportAlertSeverity('error');
                setReportAlertMessage('Something went wrong. Please try again.');    
            }
            
        } catch (err) {
            console.error('Report submission error:', err);
            setReportLoading(false);
            setReportAlertSeverity('error');
            setReportAlertMessage('An error occurred while submitting the report.');
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
                onClick={() => setReportIssueOpen(true)}
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
                {reportLoading
                    ? <CircularProgress size={24} color='inherit' />
                    : 'Report an issue'
                }
            </Button>

            {/* Report Issue modal */}
            <Dialog
                fullWidth
                maxWidth='sm'
                open={reportIssueOpen}
                onClose={() => setReportIssueOpen(false)}
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
                    Tell us what happened
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
                        error={!!messageError && /message/i.test(messageError)}
                        helperText={/message/i.test(messageError) ? messageError : ''}
                        label='Describe the problem'
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
                        Provide a screenshot if issue is visible
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
                        {files.length > 0 && (
                            <IconButton onClick={() => setFiles([])}>
                                <ClearIcon sx={{ fontSize: 24 }} />
                            </IconButton>
                        )}
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
                                    key={file.name}
                                    sx={theme => ({
                                        color: theme.palette.main.dark_blue,
                                        mt: 1,
                                        wordBreak: 'break-word',
                                    })}>
                                    {file.name}
                                </Typography>
                            ))}
                        </Box>
                    )}
                    {reportAlertMessage && (
                        <Alert
                            severity={reportAlertSeverity}
                            sx={{ fontWeight: 700 }}
                            variant='filled'>
                                {reportAlertMessage}
                        </Alert>
                    )}
                </DialogContent>
                <DialogActions
                    sx={theme => ({
                        bgcolor: theme.palette.sand.four,
                        mb: 1,
                    })}>
                    <Button
                        onClick={() => setReportIssueOpen(false)}
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
                        disabled={reportLoading}
                        loading={reportLoading}
                        loadingPosition='center'
                        onClick={handleSubmitReport}
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
