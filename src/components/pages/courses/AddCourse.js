import React from 'react';
import AddEditLayout from '../common/AddEditLayout';
import CourseInput from './CourseInput';

const AddCourse = () => {
    return <AddEditLayout title="Add Course">
        <CourseInput />
    </AddEditLayout>
};

export default AddCourse;
