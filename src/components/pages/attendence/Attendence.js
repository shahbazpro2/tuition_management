import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import SelectField from '../../common/textFields/SelectField'
import TextFieldSimple from '../../common/textFields/TextFieldSimple'
import AttendenceList from './AttendenceList'
import { url_attendenceHistory } from '../../functions/pageUrls'

const Attendence = () => {
    const navigate = useNavigate()
    return (
        <div className='content space-y-7'>
            <div className="grid grid-cols-6 gap-5">
                <div className='col-span-1 flex items-center'>Selected Course</div>
                <div className="col-span-2">
                    <SelectField label="Course (Language available in course)">
                    </SelectField>
                </div>
                <div className="col-span-3">
                    <div className="w-[200px] ml-auto">
                        <TextFieldSimple type="date" label="Date" shrink={true} />
                    </div>
                </div>
            </div>
            <div className="">
                <AttendenceList />
            </div>
            <div className="flex justify-between">
                <Button variant="contained" onClick={() => navigate(url_attendenceHistory)}>Attendence History</Button>
                <Button variant="contained" color="success">Submit</Button>
            </div>
        </div>
    )
}

export default Attendence
