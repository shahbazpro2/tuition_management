import React from 'react'
import Add from '../../common/Add'
import TopSecton from './TopSecton'
import CustomTable from '../../common/CustomTable'
import AttendenceTable from './AttendenceTable'

const Attendence = () => {
    return (
        <div className='mt-7 space-y-10'>
            <Add title="Create Attendance" />
            <TopSecton />
            <div className="mt-7">
                <AttendenceTable />
            </div>
        </div>
    )
}

export default Attendence
