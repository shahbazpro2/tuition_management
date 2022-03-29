import { TextField } from '@mui/material';
import { useTheme } from '@mui/system';
import React from 'react';

const TextFieldSimple = ({ required, ...props }) => {
    const theme = useTheme()
    const dark = theme.palette.mode === 'dark'
    return <TextField
        {...props}
        required={required || true}
        sx={{ '.MuiOutlinedInput-root': { background: dark ? '#1c1c1c' : 'white' } }}
        fullWidth
    />;
};

export default TextFieldSimple;
