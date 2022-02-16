import React from 'react'
import CoursesList from './CoursesList'
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
import { url_addCourse } from '../../functions/pageUrls';
import Add from '../../common/Add';

const Courses = () => {
    const navigate = useNavigate()
    return (
        <div className='content'>
            <Add title="Add Courses" link={url_addCourse} />
            <div className="mt-5">
                <CoursesList />
            </div>
        </div>
    )
}

export default Courses
