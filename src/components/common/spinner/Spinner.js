import { CircularProgress } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Spinner = ({ height = 'h-screen' }) => {
    return (
        <Box className={`flex justify-center items-center ${height}`} >
            <CircularProgress />
        </Box>
    )
}

export default Spinner
