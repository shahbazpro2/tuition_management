import React from 'react'
import CoursesList from './CoursesList'
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
import { url_addCourse } from '../../functions/pageUrls';

const Courses = () => {
    const navigate = useNavigate()
    return (
        <div className='content'>
            <div className="flex space-x-1 items-center text-xl font-bold" >
                <AddIcon fontSize="inherit" />
                <div className='cursor-pointer' onClick={() => navigate(url_addCourse)}>Add Course</div>
            </div>
            <div className="mt-5">
                <CoursesList />
            </div>
        </div>
    )
}

export default Courses
