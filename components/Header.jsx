'use client';

import * as React from 'react';
import {
    alpha,
    Alert,
    AppBar,
    Avatar,
    Box,
    Button,
    ButtonGroup,
    CircularProgress,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Drawer,
    Grid,
    IconButton,
    InputAdornment,
    ListItemIcon,
    Menu,
    MenuItem,
    SpeedDial,
    Stack,
    Tooltip,
    Typography,
    useMediaQuery,
    useTheme,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import DeleteIcon from '@mui/icons-material/Delete';
import { useRouter } from 'next/navigation';
import { useAuth } from '../lib/contexts/AuthContext';
import FormFields from './FormFields';
import ReportIssue from './ReportIssue';
import {
    deleteAccount,
    updateEmail,
    updatePassword,
    updateSettings
} from '../lib/API';

export default function Header({ difficulty, onDifficultyChange }) {

    const { user, signOut, authIsLoading } = useAuth();
    const router = useRouter();
    const theme = useTheme();
    // Media queries
    const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // <600px
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'lg')); // 600px - 1200px

    // State for Menu and Drawer
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [formError, setFormError] = React.useState("");
    const [alertMessage, setAlertMessage] = React.useState(""); // PROLLY WON'T NEED
    const [alertSeverity, setAlertSeverity] = React.useState("success"); // PROLLY WON'T NEED
    // State for user settings 
    const [drawerOpen, setDrawerOpen] = React.useState(false);
    const [signoutLoading, setSignOutLoading] = React.useState(false);
    // State for paywall modal
    const [paywallOpen, setPaywallOpen] = React.useState(false);
    // Track whether they have Pro
    const [hasPro, setHasPro] = React.useState(false);

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

    // Handles level changes; Dialog pop up if locked level
    const handleClick = level => {
        if (lockedLevels.includes(level)) {
            setPaywallOpen(true);
        } else {
            onDifficultyChange(level);
        }
    };

    // Handles desire to subscribe -> Stripe checkout form
    const handleSubscribe = async () => {
        try {
            const res = await fetch('/api/checkout', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    // Shape Shifter Pro (Monthly)
                    priceId: 'price_1RihQHCZkkV2izhoCk3Jzylj',
                }),
            });

            if (!res.ok) throw new Error('Failed to create checkout session.');

            const { url } = await res.json();
            router.push(url);

        } catch (err) {
            console.error(err);
            alert('Unable to start checkout. Please try again.');
        }
    };

    // Menu button handlers
    const handleOpenMenu = e => setAnchorEl(e.currentTarget);
    const handleCloseMenu = () => setAnchorEl(null);
    const handleSignin = () => router.push('/signin');
    const handleSettingsClick = () => {
        handleCloseMenu();
        setDrawerOpen(true);
    };
    const handleSignoutClick = async () => {
        handleCloseMenu();
        await signOut();
    };
    const handleDrawerSignout = async () => {
        setSignOutLoading(true);
        handleCloseDrawer();
        await signOut();
        setSignOutLoading(false);
    };
    const handleCloseDrawer = () => setDrawerOpen(false);
    // Password default preventers
    const handleMouseDownPassword = e => e.preventDefault();
    const handleMouseUpPassword = e => e.preventDefault();

    // CRUD OPERATIONS

    // Account deletion states and handlers
    const [deleteAlertMessage, setDeleteAlertMessage] = React.useState("");
    const [deleteAlertSeverity, setDeleteAlertSeverity] = React.useState("success");
    const [deleteLoading, setDeleteLoading] = React.useState(false);
    // Delete account modal
    const [deleteAccountOpen, setDeleteAccountOpen] = React.useState(false);
    const handleDeleteAccount = async () => {
        setDeleteLoading(true);
        try {
            await deleteAccount();
            await signOut(); // Browser sign out; UX
            setDeleteLoading(false);
            setDeleteAlertSeverity("success");
            setDeleteAlertMessage("Your account has been deleted!");
            await new Promise(resolve => setTimeout(resolve, 2000));
            setDeleteAccountOpen(false);
            handleCloseDrawer();
        } catch (err) {
            console.error('There was a problem deleting the account:', err);
            setDeleteLoading(false);
            setDeleteAlertSeverity("error");
            setDeleteAlertMessage("Could not delete your account. Please try again.");
        }
    };
    // Update email states and handlers
    const [email, setEmail] = React.useState("");
    const [updateEmailAlertMessage, setUpdateEmailAlertMessage] = React.useState("");
    const [updateEmailAlertSeverity, setUpdateEmailAlertSeverity] = React.useState("success");
    const [updateEmailLoading, setUpdateEmailLoading] = React.useState(false);
    const handleUpdateEmail = async () => {
        setUpdateEmailLoading(true);
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        try {
            // Basic format check
            if (!email || !emailRegex.test(email)) {
                throw new Error('Invalid email format');
            }
            // If new email is samee as current
            if (email === user.email) {
                throw new Error('New email must be different from current email');
            }
            await updateEmail(email);
            setUpdateEmailLoading(false);
            setUpdateEmailAlertSeverity("success");
            setUpdateEmailAlertMessage("Your email has been updated!");
            await new Promise(resolve => setTimeout(resolve, 2000));
            setUpdateEmailAlertMessage('');
        } catch (err) {
            console.error('There was a problem updating the email:', err);
            setUpdateEmailLoading(false);
            setUpdateEmailAlertSeverity("error");
            setUpdateEmailAlertMessage(
                err.message.includes('Invalid email format')
                    ? 'Please enter a valid email address'
                    : err.message.includes('different from current email')
                        ? 'New email must be different from current email'
                        : 'Could not update email. Please try again.'
            );
        }
    };
    // Update password states and handlers
    const [password, setPassword] = React.useState('');
    const [showPassword, setShowPassword] = React.useState(false);
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
    const [updatePasswordAlertMessage, setUpdatePasswordAlertMessage] = React.useState("");
    const [updatePasswordAlertSeverity, setUpdatePasswordAlertSeverity] = React.useState("success");
    const [updatePasswordLoading, setUpdatePasswordLoading] = React.useState(false);
    const handleShowPassword = () => {
        setShowPassword(s => !s);
        setShowConfirmPassword(s => !s);
    };
    const handleUpdatePassword = async () => {
        setUpdatePasswordLoading(true);
        try {
            if (!password.trim()) {
                throw new Error('Invalid password format')
            }
            if (!confirmPassword.trim()) {
                throw new Error('Please confirm your password');
            }
            if (password !== confirmPassword) {
                throw new Error('Passwords do not match');
            }
            if (!isValidPassword(confirmPassword)) {
                throw new Error('Password must be at least 8 characters and include uppercase, lowercase, a number, and a symbol (!@#$%^&-_.?/).')
            }
            await updatePassword(confirmPassword);
            setUpdatePasswordLoading(false);
            setUpdatePasswordAlertSeverity('success');
            setUpdatePasswordAlertMessage('Your password has been updated!');
            await new Promise(resolve => setTimeout(resolve, 2000));
            setUpdatePasswordAlertMessage('');
        } catch (err) {
            console.error('There was a problem updating your password:', err);
            setUpdatePasswordLoading(false);
            setUpdatePasswordAlertSeverity('error');
            setUpdatePasswordAlertMessage(
                err.message.includes('Invalid password format')
                    ? 'Please enter a valid password'
                    : err.message.includes('at least 8 characters')
                    ? 'Password must be at least 8 characters and include uppercase, lowercase, a number, and a symbol (!@#$%^&-_.?/).'
                    : 'Could not update password. Please try again.'
            );
        }
    };
    // Show password mismatch until match
    React.useEffect(() => {
        if (confirmPassword.length > 0) {
            setUpdatePasswordAlertMessage(
                confirmPassword === password
                ? ''
                : "Passwords must match."
            );
            setUpdatePasswordAlertSeverity('error');
        } else {
            setUpdatePasswordAlertMessage('');
        }
    }, [password, confirmPassword]);

    // On user load/change, prefill user's email form field in settings
    React.useEffect(() => {
        if (user?.email) setEmail(user.email);
    }, [user?.email]);

    // Lock only if user does NOT have Pro
    const lockedLevels = hasPro ? [] : ['Advanced', 'Draw Mode'];
    // User avatar (maybe)
    const userInitial = user?.email ? user.email.charAt(0).toUpperCase() : 'U';

    // If auth is loading and we don't have a user yet, show a general loader
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
        <>
            <AppBar
                position='static'
                sx={theme => ({
                    bgcolor: theme.palette.sand.one,
                    display: 'flex',
                    flexDirection: 'row',
                    pb: 1,
                    pt: 4,
                    textAlign: 'center'
                })}>
                {/* Level indicators */}
                <Grid
                    size={isMobile || isTablet ? 10 : 4}
                    sx={{
                        flexGrow: 1,
                        ml: isMobile || isTablet ? 5.5 : 9.5,
                    }}>
                    <ButtonGroup
                        sx={theme => ({
                            '& .MuiButton-outlined': {
                                borderColor: theme.palette.main.dark_blue,
                            },
                        })}
                        variant='outlined'>
                        {['Beginner', 'Intermediate', 'Advanced', 'Draw Mode'].map(level => {
                            const isLocked = lockedLevels.includes(level);
                            return (
                                <Box
                                    display='inline-flex'
                                    key={level}
                                    position='relative'>
                                    <Button
                                        onClick={() => handleClick(level)}
                                        sx={theme => ({
                                            bgcolor:
                                                difficulty === level ?
                                                theme.palette.sand.four :
                                                theme.palette.sand.one,
                                            color:
                                                isLocked ? alpha(theme.palette.main.dark_blue, 0.38) :
                                                difficulty === level ?
                                                theme.palette.sand.one :
                                                theme.palette.main.dark_blue,
                                            fontWeight:
                                                difficulty === level ? 600 : 400,
                                            textTransform: 'none',
                                            })}>
                                        {level}
                                    </Button>

                                    {/* Tooltips */}
                                    {isLocked && (
                                        <Tooltip title='Subscribe to unlock'>
                                            <Box
                                                alignItems='center'
                                                bgcolor='rgba(156, 156, 156, 0.4)'
                                                display='flex'
                                                height='100%'
                                                justifyContent='center'
                                                left={0}
                                                position='absolute'
                                                sx={{ pointerEvents: 'none' }}
                                                top={0}
                                                width='100%'>
                                                <LockOutlinedIcon
                                                    color='action'
                                                    fontSize='small'
                                                />
                                            </Box>
                                        </Tooltip>
                                    )}
                                </Box>
                            )
                        })}
                    </ButtonGroup>
                </Grid>

                {/* Menu */}
                <Grid
                    sx={{
                        alignSelf: 'flex-end',
                        mr: isMobile || isTablet ? 3 : 5,
                    }}>
                    {authIsLoading ? (
                        <CircularProgress
                            size={24}
                            sx={theme => ({
                                color: theme.palette.main.dark_blue,
                            })}
                        />
                    ) : user ? (
                        <Tooltip title='Open settings'>
                            <IconButton
                                onClick={handleOpenMenu}
                                sx={{ p: 0 }}>
                                <Avatar
                                    alt={user.email || 'User Avatar'}
                                    sx={theme => ({
                                        bgcolor: theme.palette.main.dark_blue,
                                        color: theme.palette.sand.one,
                                    })}>
                                    {userInitial}
                                    {/* make user email or 'userInitial */}
                                </Avatar>
                            </IconButton>
                        </Tooltip>
                    ) : (
                        <Tooltip title='Sign in'>
                            <IconButton
                                onClick={handleSignin}
                                sx={theme => ({
                                    color: theme.palette.main.dark_blue,
                                    p: 0,
                                })}>
                                <AccountCircleIcon sx={{ fontSize: 40 }} />
                            </IconButton>
                        </Tooltip>
                    )}
                    {/* Change to SpeedDial */}
                    <Menu
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            horizontal: 'right',
                            vertical: 'top',
                        }}
                        id='menu-user-appbar'
                        keepMounted
                        onClose={handleCloseMenu}
                        open={Boolean(anchorEl)}
                        slotProps={{
                            paper: {
                                sx: theme => ({
                                    bgcolor: theme.palette.sand.two,
                                    mt: '2.8125rem',
                                })
                            }
                        }}
                        transformOrigin={{
                            horizontal: 'right',
                            vertical: 'top',
                        }}>
                        <MenuItem onClick={handleSettingsClick}>
                            <ListItemIcon>
                                <SettingsIcon fontSize='small' />
                            </ListItemIcon>
                            <Typography
                                sx={theme => ({
                                    color: theme.palette.main.dark_blue,
                                })}
                                textAlign='center'>
                                Settings
                            </Typography>
                        </MenuItem>
                        <MenuItem onClick={handleSignoutClick}>
                            <ListItemIcon>
                                <LogoutIcon fontSize='small' />
                            </ListItemIcon>
                            <Typography
                                sx={theme => ({
                                    color: theme.palette.main.dark_blue,
                                })}
                                textAlign='center'>
                                Sign out
                            </Typography>
                        </MenuItem>

                        {/* Report an issua */}

                    </Menu>
                </Grid>
            </AppBar>

            {/* Drawer */}
            {user && (
                <Drawer
                    anchor='right'
                    open={drawerOpen}
                    onClose={handleCloseDrawer}>
                    <Box
                        role='presentation'
                        sx={theme => ({
                            bgcolor: theme.palette.sand.four,
                            color: theme.palette.main.dark_blue,
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%',
                            p: 2,
                            width: 500,
                        })}>
                        {/* User ID (Supabase) */}
                        <Typography
                            display='block'
                            sx={theme => ({
                                color: theme.palette.sand.one,
                                fontSize: 16,
                                fontWeight: 600,
                                mb: 1,
                            })}>
                            {user && `User ID: ${user.id}`}
                        </Typography>
                        {/* Report Issue component */}
                        <ReportIssue email={email} />
                        <Stack
                            height='100%'
                            spacing={3}>
                            {/* Change email */}
                            <Grid container>
                                <FormFields
                                    autoComplete='email'
                                    error={!!formError && /email/i.test(formError)}
                                    helperText={/email/i.test(formError) ? formError : ''}
                                    label='Change email'
                                    onChange={e => {
                                        setEmail(e.target.value);
                                        setFormError('');
                                        setUpdateEmailAlertMessage('');
                                    }}
                                    startAdornment={
                                        <InputAdornment
                                            position="start"
                                            sx={{
                                                borderRight: '2px solid #39434b',
                                                pr: .8,
                                            }}>
                                            <EmailIcon color={updateEmailAlertMessage === 'error' ? 'error' : 'action'} />
                                        </InputAdornment>
                                    }
                                    sx={theme => ({
                                        bgcolor: theme.palette.sand.four,
                                        borderRadius: 1,
                                        color: theme.palette.main.dark_blue,
                                        // mr: email === user.email ? 10.25 : 0,
                                        mt: 1,
                                        px: 1,
                                    })}
                                    type='email'
                                    value={email}
                                />
                                <Button
                                    disabled={updateEmailLoading}
                                    loading={updateEmailLoading}
                                    loadingPosition="center"
                                    onClick={handleUpdateEmail}
                                    sx={theme => ({
                                        alignSelf: 'flex-end',
                                        bgcolor: theme.palette.main.dark_blue,
                                        borderRadius: 6,
                                        color: theme.palette.sand.one,
                                        fontSize: 14,
                                        fontWeight: 600,
                                        height: 'fit-content',
                                        ml: 2,
                                        opacity: email === user.email ? 0 : 1,
                                        textTransform: "none",
                                        transform: email === user.email ?
                                            'translateX(-20px)' : 'translateX(0)',
                                        transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
                                        width: 'fit-content',
                                        '&.MuiButton-loading': {
                                            bgcolor: alpha(theme.palette.main.dark_blue, 0.38)
                                        }
                                    })}
                                    variant='contained'>
                                    Save
                                </Button>
                                {formError &&
                                    !formError.toLowerCase().includes("email") && (
                                        <Alert
                                            severity={alertSeverity}
                                            sx={{ fontWeight: 700, my: 1 }}
                                            variant='filled'>
                                                {alertMessage}
                                        </Alert>
                                    )
                                }
                                {updateEmailAlertMessage && (
                                    <Alert
                                        severity={updateEmailAlertSeverity}
                                        sx={{ fontWeight: 700, my: 1 }}
                                        variant='filled'>
                                            {updateEmailAlertMessage}
                                    </Alert>
                                )}
                            </Grid>
                            {/* Change password */}
                            <Grid container>
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
                                    label='Change password'
                                    onChange={e => {
                                        setPassword(e.target.value);
                                        setFormError('');
                                    }}
                                    startAdornment={
                                        <InputAdornment
                                            position="start"
                                            sx={{
                                                borderRight: '2px solid #39434b',
                                                pr: .7,
                                            }}>
                                            <KeyIcon color={updatePasswordAlertMessage === 'error' ? 'error' : 'action'} />
                                        </InputAdornment>
                                    }
                                    sx={theme => ({
                                        bgcolor: theme.palette.sand.four,
                                        borderRadius: 1,
                                        color: theme.palette.main.dark_blue,
                                        mr: 10.25,
                                        mt: 1,
                                        px: 1,
                                        zIndex: 99,
                                    })}
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                />
                            </Grid>
                            {/* Confirm Password */}
                            <Box>
                                {/* Row FlexBox */}
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        opacity: password === '' ? 0 : 1,
                                        pointerEvents: password === '' ? 'none' : 'auto',
                                        transform: password === '' ?
                                            'translateY(-50px)' : 'translateY(0)',
                                        transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
                                    }}>
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
                                        label='Confirm password'
                                        onChange={e => {
                                            setConfirmPassword(e.target.value);
                                            setFormError('');
                                        }}
                                        startAdornment={
                                            <InputAdornment
                                            position="start"
                                                sx={{
                                                    borderRight: '2px solid #39434b',
                                                    pr: .7,
                                                }}>
                                                <KeyIcon color={updatePasswordAlertMessage === 'error' ? 'error' : 'action'} />
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
                                    <Button
                                        disabled={updatePasswordLoading}
                                        loading={updatePasswordLoading}
                                        loadingPosition="center"
                                        onClick={handleUpdatePassword}
                                        sx={theme => ({
                                            alignSelf: 'flex-end',
                                            bgcolor: theme.palette.main.dark_blue,
                                            borderRadius: 6,
                                            color: theme.palette.sand.one,
                                            fontSize: 14,
                                            fontWeight: 600,
                                            height: 'fit-content',
                                            ml: 2,
                                            textTransform: "none",
                                            width: 'fit-content',
                                            '&.MuiButton-loading': {
                                                bgcolor: alpha(theme.palette.main.dark_blue, 0.38)
                                            }
                                        })}
                                        variant='contained'>
                                        Save
                                    </Button>
                                </Box>
                                {/* Alerts outside of FlexBox to show below row */}
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
                                {updatePasswordAlertMessage && (
                                    <Alert
                                        severity={updatePasswordAlertSeverity}
                                        sx={{ fontWeight: 700, mb: 3, mt: 1 }}
                                        variant='filled'>
                                            {updatePasswordAlertMessage}
                                    </Alert>
                                )}
                            </Box>

                            {/* Change avatar/profile picture */}
                            {/* Color Theme */}

                            {/* Manage Subscription */}
                        
                        </Stack>
                        
                        {/* Sign out */}
                        <Button
                            disabled={signoutLoading}
                            loading={signoutLoading}
                            loadingPosition="center"
                            onClick={handleDrawerSignout}
                            startIcon={<LogoutIcon />}
                            sx={theme => ({
                                bgcolor: theme.palette.main.dark_blue,
                                borderRadius: 6,
                                color: theme.palette.sand.one,
                                fontSize: '1rem',
                                fontWeight: 600,
                                mb: 3,
                                textTransform: "none",
                                width: 'fit-content',
                                '&.MuiButton-loading': {
                                    bgcolor: alpha(theme.palette.main.dark_blue, 0.38)
                                }
                            })}
                            variant='contained'>
                            {authIsLoading
                                ? <CircularProgress size={24} color='inherit' />
                                : 'Sign Out'
                            }
                        </Button>
                        {/* Delete account */}
                        <Button
                            disabled={deleteLoading}
                            loading={deleteLoading}
                            loadingPosition="center"
                            onClick={() => setDeleteAccountOpen(true)}
                            startIcon={<DeleteIcon />}
                            sx={theme => ({
                                bgcolor: '#D32F2F',
                                borderRadius: 1,
                                color: theme.palette.sand.one,
                                fontSize: '1rem',
                                fontWeight: 600,
                                mb: 2,
                                textTransform: "none",
                                width: 'fit-content',
                                '&.MuiButton-loading': {
                                    bgcolor: alpha(theme.palette.main.dark_blue, 0.38)
                                }
                            })}
                            variant='contained'>
                            {deleteLoading
                                ? <CircularProgress size={24} color='inherit' />
                                : 'Delete Account'
                            }
                        </Button>
                    </Box>
                </Drawer>
            )}

            {/* Paywall modal */}
            <Dialog
                open={paywallOpen}
                onClose={() => setPaywallOpen(false)}>
                <DialogTitle
                    sx={theme => ({
                        bgcolor: theme.palette.sand.one,
                        borderBottom: `2px solid ${theme.palette.main.dark_blue}`,
                        color: theme.palette.main.dark_blue,
                        fontSize:
                            isMobile || isTablet ?
                            theme.typography.mobile.h3.fontSize :
                            theme.typography.desktop.h3.fontSize,
                        fontWeight: 700,
                        pb: 2,
                    })}>
                    Unlock Full Access
                </DialogTitle>
                <DialogContent
                    sx={theme => ({
                        bgcolor: theme.palette.sand.one,
                    })}>
                    <Typography
                        sx={theme => ({
                            mb: 1,
                            mt: 3,
                        })}>
                        Want access to <em><strong>Advanced shapes</strong></em> and <em><strong>Draw Mode</strong></em>?
                    </Typography>
                    <Typography
                        sx={theme => ({
                            mb: 1,
                        })}>
                        Subscribe to <strong>Shape Shifter Pro</strong> and get unlimited access to all levels, plus exclusive features and content
                    </Typography>
                </DialogContent>
                <DialogActions
                    sx={theme => ({
                        bgcolor: theme.palette.sand.one
                    })}>
                    <Button
                        onClick={() => setPaywallOpen(false)}
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
                        onClick={handleSubscribe}
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
                        Subscribe
                    </Button>
                </DialogActions>
            </Dialog>

            {/* Delete account modal */}
            <Dialog
                fullWidth
                maxWidth='sm'
                open={deleteAccountOpen}
                onClose={() => setDeleteAccountOpen(false)}>
                <DialogTitle
                    sx={theme => ({
                        bgcolor: theme.palette.sand.one,
                        borderBottom: `2px solid ${theme.palette.main.dark_blue}`,
                        color: theme.palette.main.dark_blue,
                        fontSize:
                            isMobile || isTablet ?
                            theme.typography.mobile.h3.fontSize :
                            theme.typography.desktop.h3.fontSize,
                        fontWeight: 700,
                        pb: 2,
                    })}>
                    WARNING!
                </DialogTitle>
                <DialogContent
                    sx={theme => ({
                        bgcolor: theme.palette.sand.one,
                    })}>
                    <Typography
                        sx={{
                            mb: 1,
                            mt: 3,
                        }}>
                        {deleteLoading
                            ? "You've made your choice..."
                            : 'Are you sure you want to delete your account?'}
                    </Typography>
                    <Typography
                        sx={{
                            mb: 1,
                        }}>
                        {deleteLoading
                            ? 'Deleting now...'
                            : 'You will need to make a new one...'}
                    </Typography>
                    {deleteAlertMessage && (
                        <Alert
                            severity={deleteAlertSeverity}
                            sx={{ fontWeight: 700 }}
                            variant='filled'>
                                {deleteAlertMessage}
                        </Alert>
                    )}
                </DialogContent>
                <DialogActions
                    sx={theme => ({
                        bgcolor: theme.palette.sand.one
                    })}>
                    <Button
                        disabled={deleteLoading}
                        loading={deleteLoading}
                        loadingPosition='center'
                        onClick={() => {
                            setDeleteAlertMessage('');
                            setDeleteAccountOpen(false);
                        }}
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
                        disabled={deleteLoading}
                        loading={deleteLoading}
                        loadingPosition='center'
                        onClick={handleDeleteAccount}
                        sx={theme => ({
                            bgcolor: '#D32F2F',
                            borderRadius: 6,
                            color: theme.palette.sand.one,
                            fontSize:
                                isMobile || isTablet ?
                                theme.typography.mobile.h6.fontSize :
                                theme.typography.desktop.h6.fontSize,
                            fontWeight: 700,
                            maxWidth: 'fit-content',
                            px: 2,
                        })}>
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}