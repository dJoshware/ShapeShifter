import {
    FormControl,
    FormHelperText,
    Input,
    InputLabel,
} from '@mui/material';

export default function FormFields({
    autoComplete,
    endAdornment,
    error,
    helperText,
    label,
    onChange,
    startAdornment,
    sx,
    type,
    value,
}) {
    const fieldId = `input-${label.toLowerCase()}`;

    return (
        <FormControl
            error={error}
            sx={{
                bgcolor: 'transparent',
                flexGrow: 1,
                pt: 1
            }}
            variant="standard">
            <InputLabel
                htmlFor={fieldId}
                sx={{
                    fontSize: 18,
                    fontWeight: 600,
                }}>
                {label}
            </InputLabel>
            <Input
                autoComplete={autoComplete}
                endAdornment={endAdornment}
                id={fieldId}
                onChange={onChange}
                startAdornment={startAdornment}
                sx={sx}
                type={type}
                value={value}
                variant='standard'
            />
            {helperText && (
                <FormHelperText>{helperText}</FormHelperText>
            )}
        </FormControl>
    )
}