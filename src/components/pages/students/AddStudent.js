import React from 'react'
import AddEditLayout from '../common/AddEditLayout'
import StudentInput from './StudentInput'

const AddStudent = () => {
    return (
        <AddEditLayout title="Add Student">
            <StudentInput />
        </AddEditLayout>
    )
}

export default AddStudent