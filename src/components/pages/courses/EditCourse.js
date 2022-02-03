import React from 'react';
import AddEditLayout from '../common/AddEditLayout';
import CourseInput from './CourseInput';

const EditCourse = () => {
    return <AddEditLayout title="Edit Course">
        <CourseInput />
    </AddEditLayout>
};

export default EditCourse;
