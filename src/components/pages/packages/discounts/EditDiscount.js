import { getDiscountApi, updateDiscountApi } from 'api/discount';
import AddEditLayout from 'components/pages/common/AddEditLayout';
import LoadingWrapper from 'components/wrappers/LoadingWrapper';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import compareJson from 'utils/compareJson';
import useApi from 'utils/hooks/useApi';
import { url_dicounts, url_packages } from 'utils/pageUrls';
import { initialState } from './AddDiscount';
import DiscountInput from './DiscountInput';

const EditDiscount = () => {
    const [state, setState] = useState(initialState)
    const params = useParams()
    const [getDiscount, { data, loading }] = useApi()
    const [updateDiscount] = useApi({ successMsg: true, errMsg: true })
    const navigate = useNavigate()

    useEffect(() => {
        getDiscount(getDiscountApi(params?.id), ({ data }) => {
            setState(compareJson(data, initialState))
        })
    }, [params?.id])

    const onSubmit = (e) => {
        e.preventDefault()
        updateDiscount(updateDiscountApi(params?.id, state), () => setTimeout(() => {
            navigate(url_dicounts)
        }, 500))
    }


    return <AddEditLayout title="Edit Discount">
        <LoadingWrapper loading={loading} >
            <DiscountInput state={state} setState={setState} onSubmit={onSubmit} />
        </LoadingWrapper>
    </AddEditLayout>
};

export default EditDiscount;
