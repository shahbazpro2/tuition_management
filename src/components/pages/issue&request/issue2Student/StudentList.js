import { Card, CardContent, Checkbox } from '@mui/material'
import { getStudentsApi } from 'api/student'
import React from 'react'
import useApi from 'utils/hooks/useApi'

const StudentList = ({ selectStudent, setSelectStudent }) => {
    const [, { data }] = useApi({}, getStudentsApi)

    console.log('check', selectStudent)

    return (
        <div> <Card variant="outlined">
            <CardContent>
                <div className="space-y-3">
                    {data?.map(item => (
                        <div key={item?._id} className="flex space-x-2 items-center">
                            <Checkbox checked={item?._id === selectStudent} onChange={() => setSelectStudent(item?._id)} />
                            <div>{item?.name}</div>
                        </div>
                    ))}
                </div>

            </CardContent>
        </Card></div>
    )
}

export default StudentList