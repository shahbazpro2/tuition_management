/* eslint-disable no-undef */
import { Card, CardContent } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const ImageCard = ({ title, image, width, link }) => {
    const navigate = useNavigate()
    return (
        <div>
            <Card variant="outlined" className="cursor-pointer" onClick={() => navigate(link)} sx={{ height: '130px' }}>
                <CardContent className='text-center flex items-center justify-center h-full'>
                    <div>
                        {image &&
                            <div className="flex justify-center">
                                <img src={`${process.env.PUBLIC_URL}/assets/${image}`} width={width || 55} />
                            </div>
                        }
                        <div className="text-lg font-medium">
                            {title}
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default ImageCard
