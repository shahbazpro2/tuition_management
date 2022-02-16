import React from 'react'
import { TextField } from '@mui/material'
import { useTheme } from '@mui/system'

const SelectField = (props) => {
    const theme = useTheme()
    const dark = theme.palette.mode === 'dark'
    return (
        <TextField
            select
            className="w-full h-full text-left"
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