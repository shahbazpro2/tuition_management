import { Card, CardContent } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const CenterCard = ({ title, image, width, link }) => {
    const navigate = useNavigate()
    return (
        <div>
            <Card className="cursor-pointer" onClick={() => navigate(link)} sx={{ background: '#f9c8ff', height: '100px' }}>
                <CardContent className='text-center flex items-center justify-center h-full'>
                    <div>
                        <div className="flex justify-center">
                            <img src={`${process.env.PUBLIC_URL}/assets/${image}`} width={width || 55} />
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
