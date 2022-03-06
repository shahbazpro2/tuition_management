import { createCenterApi } from 'api/center';
import { FeedbackContext } from 'context/FeedbackContext';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { url_centers } from 'utils/pageUrls';
import AddEditLayout from '../common/AddEditLayout';
import CenterInput from './CenterInput';

const AddCenter = () => {
    const context = useContext(FeedbackContext)
    const [state, setState] = useState({
        name: '',
        address: '',
        regNumber: '',
        pic: '',
        bank: '',
        officeNumber: '',
        kpi: ''
    })
    const navigate = useNavigate()

    const onSubmit = async (e) => {
        e.preventDefault()

        const res = await createCenterApi(state)

        context.setFeedback(res.message, res.error)
        if (!res.error)
            setTimeout(() => {
                navigate(url_centers)
            }, 500)

        console.log('state', state)
    }

    return <AddEditLayout title="Add Center">
        <CenterInput state={state} setState={setState} onSubmit={onSubmit} />
    </AddEditLayout>
};

export default AddCenter;
