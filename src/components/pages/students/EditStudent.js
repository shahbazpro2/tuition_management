import React from 'react'
import AddEditLayout from '../common/AddEditLayout'
import StudentInput from './StudentInput'

const EditStudent = () => {
    return (
        <AddEditLayout title="Edit Student">
            <StudentInput />
        </AddEditLayout>
    )
}

export default EditStudent