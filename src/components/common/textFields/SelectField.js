import React from 'react'
import { TextField } from '@mui/material'
import { useTheme } from '@mui/system'

const SelectField = ({ required, multiple, ...props }) => {
    const theme = useTheme()
    const dark = theme.palette.mode === 'dark'
    return (
        <TextField
            select
            required={required ?? true}
            className="w-full h-full text-left"
            defaultValue={""}
            SelectProps={{
                displayEmpty: true,
                multiple: multiple ?? false,
            }}
            InputLabelProps={{ shrink: true }}
            {...props}
            sx={{
                "& .MuiOutlinedInput-root": {
                    background: dark ? '#1c1c1c' : 'white',
                    color: props.value === ' ' ? '#aea3aa' : undefined,
                }, ...props.sx
            }}
        >
            {props.children}
        </TextField>
    )
}

export default SelectField