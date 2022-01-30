import React from 'react'
import { TextField } from '@mui/material'

const SelectField = (props) => {
    return (
        <TextField
            select
            className="w-full h-full text-left"
            {...props}
            sx={{
                "& .MuiOutlinedInput-root": {
                    color: props.value === ' ' ? '#aea3aa' : undefined,
                }, ...props.sx
            }}
        >
            {props.children}
        </TextField>
    )
}

export default SelectField