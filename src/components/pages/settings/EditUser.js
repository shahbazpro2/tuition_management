import { getUserApi, updateUserApi } from 'api/auth';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import compareJson from 'utils/compareJson';
import useApi from 'utils/hooks/useApi';
import { url_settings } from 'utils/pageUrls';
import AddEditLayout from '../common/AddEditLayout';
import { initialState } from './AddUser';
import UserInput from './UserInput';

const EditUser = () => {
    const navigate = useNavigate()
    const params = useParams()
    const [updateApi] = useApi({ successMsg: true, errMsg: true })
    const [state, setState] = useState(initialState)
    useApi({ errMsg: true }, () => getUserApi(params?.id), ({ data }) => {
        setState(compareJson(data, initialState))
    })


    const onSubmit = (e) => {
        e.preventDefault()
        updateApi(updateUserApi(params?.id, state), () => {
            setTimeout(() => {
                navigate(url_settings)
            }, 500)
        })
    }

    return <AddEditLayout title="Edit User">
        <UserInput state={state} setState={setState} onSubmit={onSubmit} update />
    </AddEditLayout>
};

export default EditUser;
