import { Card, CardContent } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const CenterCard = ({ title, icon, link }) => {
    const navigate = useNavigate()
    return (
        <div>
            <Card className="cursor-pointer" onClick={() => navigate(link)} sx={{ background: '#f9c8ff', height: '100px' }}>
                <CardContent className='text-center flex items-center justify-center h-full'>
                    <div>
                        <div className="text-4xl">
                            {icon}
                        </div>
                        <div className="text-lg font-medium">
                            {title}
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default CenterCard
