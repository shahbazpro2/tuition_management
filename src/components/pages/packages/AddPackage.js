import { createPackageApi } from 'api/package';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useApi from 'utils/hooks/useApi';
import { url_packages } from 'utils/pageUrls';
import AddEditLayout from '../common/AddEditLayout';
import PackageInput from './PackageInput';

export const initialState = {
    subject: '',
    days: '',
    amount: '',
    status: '',
}

const AddPackage = () => {
    const [createApi] = useApi({ errMsg: true, successMsg: true })
    const [state, setState] = useState(initialState)
    const navigate = useNavigate()

    const onSubmit = (e) => {
        e.preventDefault()
        createApi(createPackageApi(state), () => setTimeout(() => {
            navigate(url_packages)
        }, 500))
    }


    return <AddEditLayout title="Add Package">
        <PackageInput state={state} setState={setState} onSubmit={onSubmit} />
    </AddEditLayout>
};

export default AddPackage;
