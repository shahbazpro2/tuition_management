import { CircularProgress } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Spinner = () => {
    return (
        <Box className={`flex justify-center items-center h-full`} >
            <CircularProgress />
        </Box>
    )
}

export default Spinner
