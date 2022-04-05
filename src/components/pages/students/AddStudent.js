import { createStudentApi } from 'api/student'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useApi from 'utils/hooks/useApi';
import { url_students } from 'utils/pageUrls'
import AddEditLayout from '../common/AddEditLayout'
import StudentInput from './StudentInput'

export const initialState = {
    name: '', gender: '', religion: '', address: '', contact: '', emergencyContact: '', fatherName: '', motherName: '', package: '', courses: [], health: '', language: ''
}

const AddStudent = () => {
    const [createApi] = useApi({ errMsg: true, successMsg: true })
    const [state, setState] = useState(initialState)
    const navigate = useNavigate()

    const onSubmit = (e) => {
        e.preventDefault()
        createApi(createStudentApi(state), () => setTimeout(() => {
            navigate(url_students)
        }, 500))
    }
    return (
        <AddEditLayout title="Add Student">
            <StudentInput state={state} setState={setState} onSubmit={onSubmit} />
        </AddEditLayout>
    )
}

export default AddStudent