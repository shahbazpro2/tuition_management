import { registerUserApi } from 'api/auth'
import { FeedbackContext } from 'context/FeedbackContext'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { url_settings } from 'utils/pageUrls'
import AddEditLayout from '../common/AddEditLayout'
import UserInput from './UserInput'

export const initialState = {
    name: '',
    email: '',
    password: '',
    role: ''
}

const AddUser = () => {
    const context = useContext(FeedbackContext)
    const navigator = useNavigate()
    const [state, setState] = useState(initialState)

    const onSubmit = async (e) => {
        e.preventDefault()
        const res = await registerUserApi(state)
        context.setFeedback(res.message, res.error)
        if (!res.error) {
            setTimeout(() => {
                context.setFeedback(null, false)
                navigator(url_settings)
            }, 1000)
            return
        }


    }

    return (
        <AddEditLayout title="Add User">
            <UserInput state={state} setState={setState} onSubmit={onSubmit} />
        </AddEditLayout>
    )
}

export default AddUser