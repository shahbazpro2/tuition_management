import { Card, CardContent } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const HqCard = ({ title, link }) => {
    const navigate = useNavigate()
    return (
        <div>
            <Card className="cursor-pointer" onClick={() => navigate(link)} sx={{ background: '#cfe2ff', height: '100px' }}>
                <CardContent className='text-center flex items-center justify-center h-full'>
                    <div className="text-lg font-medium">
                        {title}
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default HqCard
