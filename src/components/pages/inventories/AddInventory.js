import React from 'react';
import AddEditLayout from '../common/AddEditLayout';
import InventoryInput from './InventoryInput';

const AddInventory = () => {
    return <AddEditLayout title="Add Inventory">
        <InventoryInput />
    </AddEditLayout>
};

export default AddInventory;
