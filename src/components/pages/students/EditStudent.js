import { getStudentApi, updateStudentApi } from 'api/student'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import compareJson from 'utils/compareJson'
import useApi from 'utils/hooks/useApi'
import { url_students } from 'utils/pageUrls'
import AddEditLayout from '../common/AddEditLayout'
import { initialState } from './AddStudent'
import StudentInput from './StudentInput'

const EditStudent = () => {
    const [state, setState] = useState(initialState)
    const params = useParams()
    const [, { data }] = useApi({}, () => getStudentApi(params?.id), (({ data }) => setState(compareJson(data, initialState))))
    const [updatePackage] = useApi({ successMsg: true })
    const navigate = useNavigate()

    const onSubmit = (e) => {
        e.preventDefault()
        updatePackage(updateStudentApi(params?.id, state), () =>
            setTimeout(() => {
                navigate(url_students)
            }, 500)
        )
    }
    return (
        <AddEditLayout title="Edit Student">
            <StudentInput state={state} setState={setState} onSubmit={onSubmit} />
        </AddEditLayout>
    )
}

export default EditStudent