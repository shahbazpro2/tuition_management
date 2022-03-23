import { getOtherApi, updateOtherApi } from 'api/others';
import AddEditLayout from 'components/pages/common/AddEditLayout';
import LoadingWrapper from 'components/wrappers/LoadingWrapper';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import compareJson from 'utils/compareJson';
import useApi from 'utils/hooks/useApi';
import { url_packageOthers } from 'utils/pageUrls';
import { initialState } from './AddOthers';
import OthersInput from './OthersInput';

const EditDiscount = () => {
    const [state, setState] = useState(initialState)
    const params = useParams()
    const [getApi, { data, loading }] = useApi()
    const [updateApi] = useApi({ successMsg: true, errMsg: true })
    const navigate = useNavigate()

    useEffect(() => {
        getApi(getOtherApi(params?.id), ({ data }) => {
            setState(compareJson(data, initialState))
        })
    }, [params?.id])

    const onSubmit = (e) => {
        e.preventDefault()
        updateApi(updateOtherApi(params?.id, state), () => setTimeout(() => {
            navigate(url_packageOthers)
        }, 500))
    }


    return <AddEditLayout title="Edit Others Package">
        <LoadingWrapper loading={loading} >
            <OthersInput state={state} setState={setState} onSubmit={onSubmit} />
        </LoadingWrapper>
    </AddEditLayout>
};

export default EditDiscount;
