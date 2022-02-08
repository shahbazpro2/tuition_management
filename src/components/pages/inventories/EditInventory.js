import React from 'react';
import AddEditLayout from '../common/AddEditLayout';
import InventoryInput from './InventoryInput';

const EditInventory = () => {
    return <AddEditLayout title="Edit Inventory">
        <InventoryInput />
    </AddEditLayout>
};

export default EditInventory;
