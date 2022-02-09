import React from 'react'
import Add from '../../common/Add'
import TopSecton from './TopSecton'
import AttendenceTable from './AttendenceTable'
import SelectField from '../../common/textFields/SelectField'
import TextFieldSimple from '../../common/textFields/TextFieldSimple'

const Attendence = () => {
    return (
        <div className='content'>
            <div className="grid grid-cols-6 gap-5">
                <div className='col-span-1 flex items-center'>Selected Course</div>
                <div className="col-span-2">
                    <SelectField label="Course (Language available in course)">
                    </SelectField>
                </div>
                <div className="col-span-3">
                    <div className="w-[200px] ml-auto">
                        <TextFieldSimple type="date" label="Date" InputLabelProps={{ shrink: true }} />
                    </div>
                </div>
            </div>
            <div className="mt-7">
                <AttendenceTable />
            </div>
        </div>
    )
}

export default Attendence
