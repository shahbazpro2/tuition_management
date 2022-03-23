import { createOtherApi } from 'api/others';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useApi from 'utils/hooks/useApi';
import { url_packageOthers } from 'utils/pageUrls';
import AddEditLayout from '../../common/AddEditLayout';
import OthersInput from './OthersInput';

export const initialState = {
    discount: '',
    description: '',
    status: '',
}

const AddOthers = () => {

    const [createApi, { error }] = useApi({ successMsg: true, errMsg: true })
    const [state, setState] = useState(initialState)
    const navigate = useNavigate()

    const onSubmit = (e) => {
        e.preventDefault()
        createApi(createOtherApi(state), () => setTimeout(() => {
            navigate(url_packageOthers)
        }, 500))
    }


    return <AddEditLayout title="Add Others Package" >
        <OthersInput state={state} setState={setState} onSubmit={onSubmit} />
    </AddEditLayout>
};

export default AddOthers;
