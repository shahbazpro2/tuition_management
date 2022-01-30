import { Button } from '@mui/material';
import React from 'react';
import TextFieldSimple from '../../common/textFields/TextFieldSimple';

const BankModal = () => {
    return <div className="space-y-5">
        <TextFieldSimple label="Bank Name" />
        <TextFieldSimple label="Bank Account Number" />

        <Button variant="contained">Add</Button>
    </div>
};

export default BankModal;
