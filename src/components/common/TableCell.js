import { TableCell } from '@mui/material'
import React from 'react'

const TbCell = ({ children }) => {
    return (
        <TableCell sx={{ background: "#FFEDC6", color: 'black', fontWeight: 'bold' }}>{children}</TableCell>
    )
}

export default TbCell