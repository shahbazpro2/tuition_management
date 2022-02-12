import { TextField } from '@mui/material';
import React from 'react';

const TextFieldSimple = (props) => {
    return <TextField
        {...props}
        InputLabelProps={{
            ...props
        }}
        fullWidth
    />;
};

export default TextFieldSimple;
