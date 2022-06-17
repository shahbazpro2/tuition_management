import { Button, MenuItem } from '@mui/material'
import { url_attendenceHistory } from 'utils/pageUrls'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SelectField from '../../common/textFields/SelectField'
import TextFieldSimple from '../../common/textFields/TextFieldSimple'
import AttendenceList from './AttendenceList'
import useApi from 'utils/hooks/useApi'
import { getStudentCoursesApi, getStudentsCourseApi } from 'api/student'

const Attendence = () => {
    const [course, setCourse] = useState('')
    const [, { data }] = useApi({}, getStudentCoursesApi)
    const [getStudents, { data: students }] = useApi({ errMsg: true })
    const [attendance, setAttendance] = useState([])


    useEffect(() => {
        setAttendance([])
        if (course)
            getStudents(getStudentsCourseApi(course))
    }, [course])

    return (
        <div className='content space-y-7 '>
            <div className="grid grid-cols-6 gap-5">
                <div className='col-span-1 flex items-center'>Selected Course</div>
                <div className="col-span-2">
                    <SelectField label="Course (Language available in course)" onChange={e => setCourse(e.target.value)}>
                        <MenuItem value="" disabled>Select course</MenuItem>
                        {data?.map(({ _id, language }) => (
                            <MenuItem key={_id} value={_id}>{language?.name}</MenuItem>
                        ))}
                    </SelectField>
                </div>
                <div className="col-span-3">
                    <div className="w-[200px] ml-auto">
                        <TextFieldSimple type="date" label="Date" InputLabelProps={{ shrink: true }} />
                    </div>
                </div>
            </div>
            <div className="">
                <AttendenceList data={students} attendance={attendance} setAttendance={setAttendance} />
            </div>
            <div className="flex justify-between">
                {/*  <Button variant="contained" onClick={() => navigate(url_attendenceHistory)}>Attendence History</Button> */}
                <Button variant="contained" color="success">Submit</Button>
            </div>
        </div>
    )
}

export default Attendence
