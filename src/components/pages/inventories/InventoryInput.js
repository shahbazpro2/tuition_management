import { Button, MenuItem } from '@mui/material';
import React, { useState } from 'react';
import SelectField from '../../common/textFields/SelectField';
import TextFieldSimple from '../../common/textFields/TextFieldSimple';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ModalLayout from '../../common/Modal';
import CategoryModal from './CategoryModal';

const InventoryInput = () => {
    const [picModal, setPicModal] = useState(false)

    return <div className="">
        <form className='space-y-4'>
            <div className="flex space-x-3 items-center">
                <SelectField label="Category">
                </SelectField>
                <AddCircleIcon sx={{ fontSize: '25px', cursor: 'pointer' }} onClick={() => setPicModal(true)} />
                <ModalLayout title="Category Details" open={picModal} setOpen={() => setPicModal(false)}>
                    <CategoryModal />
                </ModalLayout>
            </div>
            <TextFieldSimple
                label="Description"
                multiline
                rows={3}
            />
            <TextFieldSimple
                label="Qty"
            />
            <SelectField label="Status">
                <MenuItem value="active">Active</MenuItem>
                <MenuItem value="inactive">Inactive</MenuItem>
            </SelectField>
            <Button variant="contained" fullWidth>Save</Button>
        </form>
    </div>;
};

export default InventoryInput;
