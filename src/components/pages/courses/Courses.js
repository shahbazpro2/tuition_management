import React, { useState } from 'react'
import CoursesList from './CoursesList'
import AddIcon from '@mui/icons-material/Add';
import { Button, Modal, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { url_addCourse } from '../../functions/pageUrls';

const Courses = () => {
    const navigate = useNavigate()
    return (
        <div className='my-7'>
            <div className="flex space-x-1 items-center text-xl font-bold" >
                <AddIcon fontSize="inherit" />
                <div className='cursor-pointer' onClick={() => navigate(url_addCourse)}>Add Course</div>
            </div>
            <div className="mt-10">
                <CoursesList />
            </div>
        </div>
    )
}

export default Courses
