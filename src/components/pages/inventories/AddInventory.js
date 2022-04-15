import React, { useState } from 'react';
import AddEditLayout from '../common/AddEditLayout';
import InventoryInput from './InventoryInput';
import { createInventoryApi } from 'api/inventory';
import useApi from 'utils/hooks/useApi'
export const initialState = {
    name: '',
    category: '',
    description: '',
    qty: '',
    status: ''
}
const AddInventory = () => {
    const [createApi] = useApi({ successMsg: true, errorMsg: true })
    const [state, setState] = useState(initialState)

    const onSubmit = (e) => {
        e.preventDefault()
        createApi(createInventoryApi(state))
    }

    return <AddEditLayout title="Add Inventory">
        <InventoryInput state={state} setState={setState} onSubmit={onSubmit} />
    </AddEditLayout>
};

export default AddInventory;
