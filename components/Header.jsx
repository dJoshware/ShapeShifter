'use client';

import * as React from 'react';
import { createBrowserClient } from '@supabase/ssr';
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
    ToggleButton,
    ToggleButtonGroup,
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
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ClearIcon from '@mui/icons-material/Clear';
import { useRouter } from 'next/navigation';
import { useAuth } from '../lib/contexts/AuthContext';
import FormFields from './FormFields';
import SubmitFeedback from './SubmitFeedback';
import {
    deleteAccount,
    updateEmail,
    updatePassword,
    updateSettings,
    emailRegex,
    isValidPassword
} from '../lib/API';

export default function Header({ difficulty, onDifficultyChange }) {

    const supabase = createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    );
    const { user, signOut, authIsLoading } = useAuth();
    const router = useRouter();
    const theme = useTheme();
    // Media queries
    const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // <600px
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'lg')); // 600px - 1200px

    // State for Menu and Drawer
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [formError, setFormError] = React.useState("");
    // State for user settings 
    const [drawerOpen, setDrawerOpen] = React.useState(false);
    const [signoutLoading, setSignOutLoading] = React.useState(false);
    // State for paywall modal
    const [paywallOpen, setPaywallOpen] = React.useState(false);
    const [paywallLoading, setPaywallLoading] = React.useState(false);
    const [paywallAlertMessage, setPaywallAlertMessage] = React.useState("");
    const [paywallAlertSeverity, setPaywallAlertSeverity] = React.useState("success");
    // Subscription plan
    const [plan, setPlan] = React.useState('monthly'); // 'monthly' || 'yearly'
    // State for subscription modal
    const [subscriptionOpen, setSubscriptionOpen] = React.useState(false);
    // Track whether they have Pro
    const [hasPro, setHasPro] = React.useState(false);

    // Lock only if user does NOT have Pro
    const lockedLevels = hasPro ? [] : ['Advanced', 'Draw Mode'];
    // User avatar (maybe)
    const userInitial = user?.email ? user.email.charAt(0).toUpperCase() : 'U';

    // Function to check user's subscription status to unlock full access tabs
    function isPro(sub) {
        if (!sub) return false;
        const active = new Set(['active', 'trialing', 'past_due']);
        return active.has(sub.status) && new Date(sub.current_period_end) > new Date();
    };

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
        setPaywallLoading(true);
        try {
            const res = await fetch('/api/checkout', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email,
                    plan,
                }),
            });

            if (!res.ok) {
                setPaywallLoading(false);
                setPaywallAlertSeverity('error');
                setPaywallAlertMessage('Failed to create checkout session.');
            }

            const { url } = await res.json();
            router.push(url);

        } catch (err) {
            console.error(err);
            setPaywallLoading(false);
            setPaywallAlertSeverity('error');
            setPaywallAlertMessage('Unable to start checkout. Please try again.');
        }
        setPaywallLoading(false);
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
            await new Promise(resolve => setTimeout(resolve, 3000));
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
        try {
            // Basic format check
            if (!email || !emailRegex.test(email)) {
                throw new Error('Invalid email format');
            }
            // If new email is same as current
            if (email === user.email) {
                throw new Error('New email must be different from current email');
            }
            await updateEmail(email);
            setEmail(email);
            setUpdateEmailLoading(false);
            setUpdateEmailAlertSeverity("success");
            setUpdateEmailAlertMessage("Your email has been updated!");
            await new Promise(resolve => setTimeout(resolve, 3000));
            setUpdateEmailAlertMessage('');
            router.refresh();
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
            await new Promise(resolve => setTimeout(resolve, 3000));
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
        if (user) setEmail(user.email);
    }, [user?.email]);

    // 
    React.useEffect(() => {
        let channel;
        let authSub;

        async function wire(uid) {
            // Initial fetch
            const { data } = await supabase
                .from('subscriptions')
                .select('status,current_period_end')
                .eq('user_id', uid)
                .maybeSingle();

            setHasPro(isPro(data));

            // Realtime updates
            channel = supabase
                .channel('subs')
                .on(
                    'postgres_changes',
                    { event: '*', schema: 'public', table: 'subscriptions', filter: `user_id=eq.${uid}`},
                    payload => {
                        const row = payload.new || payload.old || null;
                        setHasPro(isPro(row));
                    }
                )
                .subscribe();
        }

        (async () => {
            const { data: { session } } = await supabase.auth.getSession();
            const uid = session?.user?.id;
            if (uid) await wire(uid);

            // Update if user signs in/out or switches accounts
            authSub = supabase.auth.onAuthStateChange((_evt, newSession) => {
                const newUid = newSession?.user?.id;
                if (!newUid) {
                    setHasPro(false);
                    if (channel) supabase.removeChannel(channel);
                    return;
                }
                if (channel) supabase.removeChannel(channel);
                wire(newUid);
            }).data.subscription;
        })();

        return () => {
            if (channel) supabase.removeChannel(channel);
            authSub?.unsubscribe();
        };
    }, []);

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
                    boxShadow: 'none',
                    display: 'flex',
                    flexDirection: 'row',
                    py: 4,
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
                                    <Tooltip
                                        disableInteractive
                                        disableFocusListener={!isLocked}
                                        disableHoverListener={!isLocked}
                                        disableTouchListener={!isLocked}
                                        placement='top'
                                        title={isLocked ? 'Subscribe to unlock' : ''}>
                                        <span>
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
                                        </span>
                                    </Tooltip>

                                    {/* Lock icon overlap */}
                                    {isLocked && (
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
                        {/* Submit Feedback component */}
                        <SubmitFeedback />
                        <Stack
                            height='100%'
                            spacing={3}>
                            {/* Change email */}
                            <Grid container>
                                <FormFields
                                    autoComplete='email'
                                    endAdornment={
                                        email ? (
                                            <IconButton
                                                onClick={() => setEmail('')}
                                                onMouseDown={e => e.preventDefault()}>
                                                <ClearIcon />
                                            </IconButton>
                                        ) : null
                                    }
                                    error={!!formError && /email/i.test(formError)}
                                    helperText={/email/i.test(formError) ? formError : ''}
                                    label='Change email'
                                    onBlur={() => {
                                        const trimmed = email.trim();
                                        const original = user?.email?.trim();

                                        // If empty or invalid, reset to original
                                        if (!trimmed || trimmed === original || !emailRegex.test(trimmed)) {
                                            setEmail(original);
                                        }
                                    }}
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
                                    type='submit'
                                    variant='contained'>
                                    Save
                                </Button>
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
                                            onMouseDown={e => e.preventDefault()}
                                            onMouseUp={e => e.preventDefault()}>
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
                                                onMouseDown={e => e.preventDefault()}
                                                onMouseUp={e => e.preventDefault()}>
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
                                        type='submit'
                                        variant='contained'>
                                        Save
                                    </Button>
                                </Box>
                                {/* Alerts outside of FlexBox to show below row */}
                                {/* {formError &&
                                    !formError.toLowerCase().includes("password") && (
                                        <Alert
                                        severity={alertSeverity}
                                        sx={{ fontWeight: 700, mb: 3 }}
                                            variant='filled'>
                                                {alertMessage}
                                        </Alert>
                                    )
                                } */}
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
                            {hasPro ? (
                                <Button
                                    // onClick={() => setSubscriptionOpen(true)}
                                    href='https://billing.stripe.com/p/login/test_00waEW7qCfxn9JW60Y3ks00'
                                    startIcon={<ManageAccountsIcon />}
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
                                    Manage Subscription
                                </Button>
                            ) : null}
                        
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
                            Sign Out
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
                            Delete Account
                        </Button>
                    </Box>
                </Drawer>
            )}

            {/* Paywall modal */}
            {/* PUT PAYWALL BACK; AT BOTTOM */}
            <Dialog
                fullWidth
                maxWidth='md'
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
                    We're working on it...
                </DialogTitle>
                <DialogContent
                    sx={theme => ({
                        bgcolor: theme.palette.sand.one,
                    })}>
                    <Typography
                        sx={{ mb: 1, mt: 3 }}>
                        Please be patient with us while we continue to develop the <em><strong>Advanced</strong></em> and <em><strong>Draw Mode</strong></em> features.
                    </Typography>
                    <Typography
                        sx={{ mb: 1 }}>
                        As they get finished, we will notify you either by in-app notification or email.
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
                        Close
                    </Button>
                </DialogActions>
            </Dialog>

            {/* Manage Subscription modal */}
            <Dialog
                fullWidth
                maxWidth='md'
                open={subscriptionOpen}
                onClose={() => setSubscriptionOpen(false)}
                slotProps={{
                    paper: {
                        sx: theme => ({
                            bgcolor: theme.palette.sand.one,
                        })
                    }
                }}>
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
                        mb: 2,
                    })}>
                    Manage Subscription
                </DialogTitle>
                <DialogContent
                    sx={theme => ({
                        bgcolor: theme.palette.sand.one,
                    })}>
                    <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
                    {/* Dev pricing table */}
                    {/* <stripe-pricing-table
                        pricing-table-id="prctbl_1Rq3P9CZkkV2izhom9KluEIL"
                        publishable-key="pk_test_51RihF6CZkkV2izhohRDlBQ169XLw7msXmb77bEEnoqn5ZKbL2cfHiyR590A73h0jjemyLt07IPQJ7JA8XTBUqiii00mnFz6H88">
                    </stripe-pricing-table> */}
                    {/* Prod pricing table */}
                    <stripe-pricing-table
                        pricing-table-id="prctbl_1S2YivCj7JqkviASCfp9UnI9"
                        publishable-key="pk_live_51RihEsCj7JqkviASUIf5HFjJgL6gAM8Lw71KZDb6NExYaCZfctuEzsuHH0Spmp30PN8F2UgDpfoPyPjAzH1nsO0j00SDpsqozN">
                    </stripe-pricing-table>
                </DialogContent>
                <DialogActions
                    sx={theme => ({
                        bgcolor: theme.palette.sand.one,
                        justifyContent: 'center',
                        mt: -5,
                    })}>
                    <Button
                        onClick={() => setSubscriptionOpen(false)}
                        sx={theme => ({
                            bgcolor: theme.palette.main.dark_blue,
                            borderRadius: 6,
                            color: theme.palette.sand.one,
                            fontSize:
                                isMobile || isTablet ?
                                theme.typography.mobile.h6.fontSize :
                                theme.typography.desktop.h6.fontSize,
                            maxWidth: 'fit-content',
                            mb: 1,
                            px: 2,
                            textTransform: 'none',
                        })}>
                        Close
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

            // <Dialog
            //     fullWidth
            //     maxWidth='md'
            //     open={paywallOpen}
            //     onClose={() => setPaywallOpen(false)}>
            //     <DialogTitle
            //         sx={theme => ({
            //             bgcolor: theme.palette.sand.one,
            //             borderBottom: `2px solid ${theme.palette.main.dark_blue}`,
            //             color: theme.palette.main.dark_blue,
            //             fontSize:
            //                 isMobile || isTablet ?
            //                 theme.typography.mobile.h3.fontSize :
            //                 theme.typography.desktop.h3.fontSize,
            //             fontWeight: 700,
            //             pb: 2,
            //         })}>
            //         Unlock Full Access
            //     </DialogTitle>
            //     <DialogContent
            //         sx={theme => ({
            //             bgcolor: theme.palette.sand.one,
            //         })}>
            //         <Typography
            //             sx={{ mb: 1, mt: 3 }}>
            //             Want access to <em><strong>Advanced shapes</strong></em> and <em><strong>Draw Mode</strong></em>?
            //         </Typography>
            //         <Typography
            //             sx={{ mb: 1 }}>
            //             Subscribe to <strong>Shape Shifter Pro</strong> and get unlimited access to all levels, plus exclusive features and content
            //         </Typography>
            //         {/* User's pricing options */}
            //         <ToggleButtonGroup
            //             exclusive
            //             fullWidth
            //             onChange={(e, newId) => {
            //                 if (newId !== null) setPlan(newId);
            //             }}
            //             sx={theme => ({
            //                 my: 2,
            //             })}
            //             value={plan}>
            //             <ToggleButton
            //                 sx={theme => ({
            //                     border: `2px solid ${theme.palette.main.dark_blue}`,
            //                     bgcolor: theme.palette.sand.two,
            //                     textTransform: 'none',
            //                     '&.Mui-selected': {
            //                         bgcolor: theme.palette.sand.four,
            //                         color: theme.palette.sand.one,
            //                         fontSize: 18,
            //                         fontWeight: 600,
            //                         '&:hover': {
            //                             bgcolor: theme.palette.sand.three,
            //                         }
            //                     },
            //                     '&:hover': {
            //                         bgcolor: theme.palette.sand.one,
            //                     }
            //                 })}
            //                 value={'monthly'}>
            //                 Monthly - $14.99/mo
            //             </ToggleButton>
            //             <ToggleButton
            //                 sx={theme => ({
            //                     border: `2px solid ${theme.palette.main.dark_blue}`,
            //                     bgcolor: theme.palette.sand.two,
            //                     textTransform: 'none',
            //                     '&.Mui-selected': {
            //                         bgcolor: theme.palette.sand.four,
            //                         color: theme.palette.sand.one,
            //                         fontSize: 18,
            //                         fontWeight: 600,
            //                         '&:hover': {
            //                             bgcolor: theme.palette.sand.three,
            //                         }
            //                     },
            //                     '&:hover': {
            //                         bgcolor: theme.palette.sand.one,
            //                     }
            //                 })}
            //                 value={'yearly'}>
            //                 Yearly - $149.99/yr
            //             </ToggleButton>
            //         </ToggleButtonGroup>
            //         {paywallAlertMessage && (
            //             <Alert
            //                 severity={paywallAlertSeverity}
            //                 sx={{ fontWeight: 700, mb: 3, mt: 1 }}
            //                 variant='filled'>
            //                     {paywallAlertMessage}
            //             </Alert>
            //         )}
            //     </DialogContent>
            //     <DialogActions
            //         sx={theme => ({
            //             bgcolor: theme.palette.sand.one
            //         })}>
            //         <Button
            //             onClick={() => setPaywallOpen(false)}
            //             sx={theme => ({
            //                 bgcolor: theme.palette.main.dark_blue,
            //                 borderRadius: 6,
            //                 color: theme.palette.sand.one,
            //                 fontSize:
            //                     isMobile || isTablet ?
            //                     theme.typography.mobile.h6.fontSize :
            //                     theme.typography.desktop.h6.fontSize,
            //                 maxWidth: 'fit-content',
            //                 px: 2,
            //                 textTransform: 'none',
            //             })}>
            //             Cancel
            //         </Button>
            //         <Button
            //             disabled={paywallLoading}
            //             loading={paywallLoading}
            //             loadingPosition='center'
            //             onClick={() => handleSubscribe()}
            //             sx={theme => ({
            //                 bgcolor: theme.palette.main.dark_blue,
            //                 borderRadius: 6,
            //                 color: theme.palette.sand.one,
            //                 fontSize:
            //                     isMobile || isTablet ?
            //                     theme.typography.mobile.h6.fontSize :
            //                     theme.typography.desktop.h6.fontSize,
            //                 maxWidth: 'fit-content',
            //                 px: 2,
            //                 textTransform: 'none',
            //             })}>
            //             Subscribe
            //         </Button>
            //     </DialogActions>
            // </Dialog>