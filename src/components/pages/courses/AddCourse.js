import { createCourseApi } from 'api/course';
import { FeedbackContext } from 'context/FeedbackContext';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useRefetchEnums from 'utils/hooks/useRefetchEnums';
import { url_courses } from 'utils/pageUrls';
import AddEditLayout from '../common/AddEditLayout';
import CourseInput from './CourseInput';

const AddCourse = () => {
    const feedbackContext = useContext(FeedbackContext)
    const [state, setState] = useState({
        type: '',
        language: '',
        description: '',
        status: 'inactive'
    })
    const [getEnums] = useRefetchEnums()
    const navigate = useNavigate()

    useEffect(() => {
        getEnums()
    }, [])

    const onSubmit = async (e) => {
        e.preventDefault()
        const res = await createCourseApi(state)
        feedbackContext.setFeedback(res.message, res.error)
        if (!res.error) {
            setTimeout(() => {
                navigate(url_courses)
            }, [500])
        }
        console.log(state)
    }
    return <AddEditLayout title="Add Course">
        <CourseInput state={state} setState={setState} onSubmit={onSubmit} />
    </AddEditLayout>
};

export default AddCourse;
