import { getInventoryApi, updateInventoryApi } from 'api/inventory';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import compareJson from 'utils/compareJson';
import useApi from 'utils/hooks/useApi';
import { url_inventories } from 'utils/pageUrls';
import AddEditLayout from '../common/AddEditLayout';
import { initialState } from './AddInventory';
import InventoryInput from './InventoryInput';

const EditInventory = () => {
    const navigate = useNavigate()
    const params = useParams()
    const [updateApi] = useApi({ successMsg: true, errMsg: true })
    const [state, setState] = useState(initialState)
    const [, { data }] = useApi({ errMsg: true }, () => getInventoryApi(params?.id), ({ data }) => {
        setState(compareJson(data, initialState))
    })


    const onSubmit = (e) => {
        e.preventDefault()
        updateApi(updateInventoryApi(params?.id, state), () => {
            setTimeout(() => {
                navigate(url_inventories)
            }, 500)
        })
    }

    return <AddEditLayout title="Edit Inventory">
        <InventoryInput state={state} setState={setState} onSubmit={onSubmit} />
    </AddEditLayout>
};

export default EditInventory;
