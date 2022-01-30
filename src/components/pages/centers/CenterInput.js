import { Button, MenuItem } from '@mui/material';
import React, { useState } from 'react';
import SelectField from '../../common/textFields/SelectField';
import TextFieldSimple from '../../common/textFields/TextFieldSimple';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import PICModal from './PICModal';
import ModalLayout from '../../common/Modal';
import BankModal from './BankModal';

const CenterInput = () => {
    const [picModal, setPicModal] = useState(false)
    const [bankModal, setBankModal] = useState(false)

    return <div className="">
        <form className='space-y-4'>
            <TextFieldSimple
                label="Name"
            />
            <TextFieldSimple
                label="Address"
            />
            <TextFieldSimple
                label="Business Reg Number"
            />
            <div className="flex space-x-3 items-center">
                <SelectField label="PIC Name">
                </SelectField>
                <AddCircleIcon sx={{ fontSize: '25px', cursor: 'pointer' }} onClick={() => setPicModal(true)} />
                <ModalLayout title="PIC Details" open={picModal} setOpen={() => setPicModal(false)}>
                    <PICModal />
                </ModalLayout>
            </div>
            <div className="flex space-x-3 items-center">
                <SelectField label="Bank Merchant & Account">
                </SelectField>
                <AddCircleIcon sx={{ fontSize: '25px', cursor: 'pointer' }} onClick={() => setBankModal(true)} />
                <ModalLayout title="Bank Merchant Details" open={bankModal} setOpen={() => setBankModal(false)}>
                    <BankModal />
                </ModalLayout>
            </div>
            <TextFieldSimple
                label="Center Office Number"
            />
            <SelectField label="KPI">
            </SelectField>
            <Button variant="contained" fullWidth>Save</Button>
        </form>
    </div>;
};

export default CenterInput;
