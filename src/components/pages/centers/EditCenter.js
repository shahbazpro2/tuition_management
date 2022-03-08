import { getCenterApi, updateCenterApi } from 'api/center';
import Spinner from 'components/common/spinner/Spinner';
import { FeedbackContext } from 'context/FeedbackContext';
import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { url_centers } from 'utils/pageUrls';
import AddEditLayout from '../common/AddEditLayout';
import { initialState } from './AddCenter';
import CenterInput from './CenterInput';

const EditCenter = () => {
    const context = useContext(FeedbackContext)
    const [loading, setLoading] = useState(true)
    const [state, setState] = useState(initialState)
    const navigate = useNavigate()
    const params = useParams()

    useEffect(() => {
        (async () => {
            const res = await getCenterApi(params?.id)
            setLoading(false)
            if (!res.error) {
                setState({
                    ...res.data
                })
            }
        })()
    }, [])


    const onSubmit = async (e) => {
        e.preventDefault()

        const res = await updateCenterApi(params?.id, state)

        context.setFeedback(res.message, res.error)
        if (!res.error)
            setTimeout(() => {
                navigate(url_centers)
            }, 500)

    }
    return <AddEditLayout title="Edit Center">
        {loading ? <Spinner /> :
            <CenterInput state={state} setState={setState} onSubmit={onSubmit} />
        }
    </AddEditLayout>
};

export default EditCenter;
