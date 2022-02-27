import { registerUserApi } from 'api/auth'
import { FeedbackContext } from 'context/FeedbackContext'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { url_settings } from 'utils/pageUrls'
import AddEditLayout from '../common/AddEditLayout'
import UserInput from './UserInput'

const AddUser = () => {
    const context = useContext(FeedbackContext)
    const navigator = useNavigate()
    const [state, setState] = useState({
        name: '',
        email: '',
        password: '',
        role: ''
    })

    const onSubmit = async (e) => {
        e.preventDefault()
        const res = await registerUserApi(state)
        if (!res.error) {
            context.setSuccess(res.message)
            setTimeout(() => {
                context.setSuccess(null)
                navigator(url_settings)
            }, 1000)
            return
        }

        context.setError(res.message)

    }

    return (
        <AddEditLayout title="Add User">
            <UserInput state={state} setState={setState} onSubmit={onSubmit} />
        </AddEditLayout>
    )
}

export default AddUser