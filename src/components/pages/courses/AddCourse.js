import React from 'react';
import CourseInput from './CourseInput';

const AddCourse = () => {
    return <div className='my-10'>
        <div className="text-2xl text-center font-bold">Add Course</div>
        <div className="mt-10">
            <div className="grid grid-cols-6">
                <div className="col-start-3 col-span-2">
                    <CourseInput />
                </div>
            </div>
        </div>
    </div>;
};

export default AddCourse;
