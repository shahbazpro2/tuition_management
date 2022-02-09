import React, { useState } from 'react'
import { url_addStudent } from '../../functions/pageUrls';
import StudentList from './StudentList';
import Add from '../../common/Add';


const Students = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className='content'>
            <Add title="Add Student" link={url_addStudent} />
            <div className="mt-7">
                <StudentList setOpen={setOpen} />
            </div>

        </div>
    )
}

export default Students
