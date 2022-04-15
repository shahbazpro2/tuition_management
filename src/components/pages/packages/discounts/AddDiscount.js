import { createDiscountApi } from 'api/discount';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useApi from 'utils/hooks/useApi';
import { url_dicounts } from 'utils/pageUrls';
import AddEditLayout from '../../common/AddEditLayout';
import DiscountInput from './DiscountInput';

export const initialState = {
    name: '',
    discount: '',
    description: '',
    status: '',
}

const AddDiscount = () => {

    const [createApi, { error }] = useApi({ successMsg: true, errMsg: true })
    const [state, setState] = useState(initialState)
    const navigate = useNavigate()

    const onSubmit = (e) => {
        e.preventDefault()
        createApi(createDiscountApi(state), () => setTimeout(() => {
            navigate(url_dicounts)
        }, 500))
    }


    return <AddEditLayout title="Add Discount" >
        <DiscountInput state={state} setState={setState} onSubmit={onSubmit} />
    </AddEditLayout>
};

export default AddDiscount;
