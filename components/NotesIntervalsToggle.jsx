import {
    Box,
    Switch,
    Typography,
    useTheme,
} from '@mui/material';

function NotesIntervalsToggle({ showIntervals, onToggle }) {
    const theme = useTheme();
    return (
        <Box
            alignItems='center'
            display='flex'>
            {/* Left label */}
            <Typography
                sx={theme => ({
                    // 
                })}
            >
                Notes
            </Typography>
            {/* Custom Switch */}
            <Switch
                checked={showIntervals}
                onChange={e => onToggle(e.target.checked)}
            />
            {/* Right label */}
            <Typography
                sx={theme => ({
                    // 
                })}
            >
                Intervals
            </Typography>
        </Box>
    )
}

export default NotesIntervalsToggle;
