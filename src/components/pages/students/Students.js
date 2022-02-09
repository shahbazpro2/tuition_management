import React, { useState } from 'react'
import { url_addStudent } from '../../functions/pageUrls';
import StudentList from './StudentList';
import Add from '../../common/Add';


const Students = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className='mt-7'>
            <Add title="Add Student" link={url_addStudent} />
            <div className="mt-10">
                <StudentList setOpen={setOpen} />
            </div>

        </div>
    )
}

export default Students
