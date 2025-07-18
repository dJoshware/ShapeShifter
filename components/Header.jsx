'use client';

import * as React from 'react';
import {
    alpha,
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
import PersonIcon from '@mui/icons-material/Person';
import KeyIcon from '@mui/icons-material/Key';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import DeleteIcon from '@mui/icons-material/Delete';
import { useRouter } from 'next/navigation';
import { useAuth } from '../lib/contexts/AuthContext';
import FormFields from './FormFields';

export default function Header({ difficulty, onDifficultyChange }) {

    const { user, signOut, authIsLoading } = useAuth();
    const router = useRouter();
    const theme = useTheme();
    // Media queries
    const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // <600px
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'lg')); // 600px - 1200px

    // State for Menu and Drawer
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [showPassword, setShowPassword] = React.useState(false);
    const [formError, setFormError] = React.useState("");
    const [loading, setLoading] = React.useState(false);
    const [alertMessage, setAlertMessage] = React.useState("");
    const [alertSeverity, setAlertSeverity] = React.useState("success");
    const [anchorEl, setAnchorEl] = React.useState(null);
    // State for user settings
    const [drawerOpen, setDrawerOpen] = React.useState(false);
    // State for paywall modal
    const [paywallOpen, setPaywallOpen] = React.useState(false);
    // State for delete account modal
    const [deleteAccountOpen, setDeleteAccountOpen] = React.useState(false);
    // Track whether they have Pro
    const [hasPro, setHasPro] = React.useState(false);

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
    const handleSignin = async () => router.push('/signin');
    const handleSettingsClick = () => { handleCloseMenu(); setDrawerOpen(true); };
    const handleSignoutClick = async () => { handleCloseMenu(); await signOut(); };
    const handleDrawerSignout = async () => { handleCloseDrawer(); await signOut(); };
    const handleCloseDrawer = () => setDrawerOpen(false);
    // Account deletion
    const handleDeleteAccount = async () => {
        setDeleteAccountOpen(false);
        alert("Account deleted!");
        router.push('/');
    };

    // Password default preventers
    const handleMouseDownPassword = e => e.preventDefault();
    const handleMouseUpPassword = e => e.preventDefault();

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
                            height: '100%',
                            p: 2,
                            width: 450,
                        })}>
                        {/* User ID (Supabase) */}
                        <Typography
                            display='block'
                            sx={theme => ({
                                color: theme.palette.sand.one,
                                fontSize: 16,
                                fontWeight: 600,
                                mb: 3,
                            })}>
                            {user && `User ID: ${user.id}`}
                        </Typography>
                        <Stack spacing={3}>
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
                                    value={user && user.email}
                                />
                                {/* {formError &&
                                    !formError.toLowerCase().includes("email") && !formError.toLowerCase().includes("password") && (
                                        <Alert
                                            severity={alertSeverity}
                                            sx={{ fontWeight: 700, mb: 3 }}
                                            variant='filled'>
                                                {alertMessage}
                                        </Alert>
                                    )
                                } */}
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
                                    disabled={authIsLoading}
                                    // onClick={handleChangeEmail}
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
                                            bgcolor: theme.palette.main.white,
                                            opacity: 0.8,
                                        }
                                    })}
                                    variant='contained'>
                                    Save
                                </Button>
                            </Grid>
                            {/* Change password */}
                            <Grid container>
                                <FormFields
                                    autoComplete='current-password'
                                    endAdornment={
                                        <IconButton
                                            onClick={() => setShowPassword(s => !s)}
                                            onMouseDown={handleMouseDownPassword}
                                            onMouseUp={handleMouseUpPassword}>
                                            {showPassword ?
                                            <VisibilityOffIcon /> : <VisibilityIcon />}
                                        </IconButton>
                                    }
                                    error={!!formError && /password/i.test(formError)}
                                    helperText={/password/i.test(formError) ? formError : ''}
                                    label='Change password'
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
                                {/* {formError &&
                                    !formError.toLowerCase().includes("email") && !formError.toLowerCase().includes("password") && (
                                        <Alert
                                            severity={alertSeverity}
                                            sx={{ fontWeight: 700, mb: 3 }}
                                            variant='filled'>
                                                {alertMessage}
                                        </Alert>
                                    )
                                } */}
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
                                    disabled={authIsLoading}
                                    // onClick={handleChangePassword}
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
                                            bgcolor: theme.palette.main.white,
                                            opacity: 0.8,
                                        }
                                    })}
                                    variant='contained'>
                                    Save
                                </Button>
                            </Grid>

                            {/* Change avatar/profile picture */}
                            {/* Color Theme */}

                            {/* Manage Subscription */}

                            {/* Sign out */}
                            <Button
                                loading={loading}
                                loadingPosition="center"
                                disabled={authIsLoading}
                                onClick={handleDrawerSignout}
                                startIcon={<LogoutIcon />}
                                sx={theme => ({
                                    bgcolor: theme.palette.main.dark_blue,
                                    borderRadius: 6,
                                    color: theme.palette.sand.one,
                                    fontSize: '1rem',
                                    fontWeight: 600,
                                    mt: 5,
                                    textTransform: "none",
                                    width: 'fit-content',
                                    '&.MuiButton-loading': {
                                        bgcolor: theme.palette.main.white,
                                        opacity: 0.8,
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
                                loading={loading}
                                loadingPosition="center"
                                disabled={authIsLoading}
                                onClick={() => setDeleteAccountOpen(true)}
                                startIcon={<DeleteIcon />}
                                sx={theme => ({
                                    bgcolor: '#DC143C',
                                    borderRadius: 1,
                                    color: theme.palette.sand.one,
                                    fontSize: '1rem',
                                    fontWeight: 600,
                                    mt: 5,
                                    textTransform: "none",
                                    width: 'fit-content',
                                    '&.MuiButton-loading': {
                                        bgcolor: theme.palette.main.white,
                                        opacity: 0.8,
                                    }
                                })}
                                variant='contained'>
                                {authIsLoading
                                    ? <CircularProgress size={24} color='inherit' />
                                    : 'Delete Account'
                                }
                            </Button>
                        </Stack>
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
                        sx={theme => ({
                            mb: 1,
                            mt: 3,
                        })}>
                        Are you sure you want to delete your account?
                    </Typography>
                    <Typography
                        sx={theme => ({
                            mb: 1,
                        })}>
                        You will need to make a new one...
                    </Typography>
                </DialogContent>
                <DialogActions
                    sx={theme => ({
                        bgcolor: theme.palette.sand.one
                    })}>
                    <Button
                        onClick={() => setDeleteAccountOpen(false)}
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
                        onClick={handleDeleteAccount}
                        sx={theme => ({
                            bgcolor: '#DC143C',
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