import { getPackageApi, updatePackageApi } from 'api/package';
import LoadingWrapper from 'components/wrappers/LoadingWrapper';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import compareJson from 'utils/compareJson';
import useApi from 'utils/hooks/useApi';
import { url_packages } from 'utils/pageUrls';
import AddEditLayout from '../common/AddEditLayout';
import { initialState } from './AddPackage';
import PackageInput from './PackageInput';

const EditPackage = () => {
    const [state, setState] = useState(initialState)
    const params = useParams()
    const [getPackage, { data, loading }] = useApi()
    const [updatePackage] = useApi({ successMsg: true })
    const navigate = useNavigate()

    useEffect(() => {
        getPackage(getPackageApi(params?.id))
    }, [params?.id])

    useEffect(() => {
        if (data) {
            setState(compareJson(data, initialState))
        }
    }, [data])

    const onSubmit = (e) => {
        e.preventDefault()
        updatePackage(updatePackageApi(params?.id, state), () =>
            setTimeout(() => {
                navigate(url_packages)
            }, 500)
        )
    }

    return <AddEditLayout title="Edit Package">
        <LoadingWrapper loading={loading} >
            <PackageInput state={state} setState={setState} onSubmit={onSubmit} />
        </LoadingWrapper>
    </AddEditLayout>
};

export default EditPackage;
