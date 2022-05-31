import React, { useState } from 'react';
import AddEditLayout from '../common/AddEditLayout';
import InventoryInput from './InventoryInput';
import { createInventoryApi } from 'api/inventory';
import useApi from 'utils/hooks/useApi'
import { useNavigate } from 'react-router-dom';
import { url_inventories } from 'utils/pageUrls';
export const initialState = {
    name: '',
    category: '',
    description: '',
    qty: '',
    status: ''
}
const AddInventory = () => {
    const [createApi] = useApi({ successMsg: true, errorMsg: true })
    const navigate = useNavigate()
    const [state, setState] = useState(initialState)

    const onSubmit = (e) => {
        e.preventDefault()
        createApi(createInventoryApi(state), () => navigate(url_inventories))
    }

    return <AddEditLayout title="Add Inventory">
        <InventoryInput state={state} setState={setState} onSubmit={onSubmit} />
    </AddEditLayout>
};

export default AddInventory;
