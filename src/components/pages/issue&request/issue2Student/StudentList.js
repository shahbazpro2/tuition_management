import { Card, CardContent, Checkbox } from '@mui/material'
import React from 'react'

const StudentList = () => {
    return (
        <div> <Card variant="outlined">
            <CardContent>
                <div className="space-y-3">
                    {['Jason', 'Jessie', 'lilly', 'linda'].map(list => (
                        <div key={list} className="flex space-x-2 items-center">
                            <Checkbox />
                            <div>{list}</div>
                        </div>
                    ))}
                </div>

            </CardContent>
        </Card></div>
    )
}

export default StudentList