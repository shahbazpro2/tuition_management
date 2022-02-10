import { Button, styled } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import SelectField from '../../common/textFields/SelectField'
import TextFieldSimple from '../../common/textFields/TextFieldSimple'
import { url_payHqPaymentHistory } from '../../functions/pageUrls';
import AddEditLayout from '../common/AddEditLayout';

const Input = styled('input')({
    display: 'none',
});

const PayHq = () => {
    const navigate = useNavigate()

    return (
        <AddEditLayout title="Pay HQ">
            <form className='space-y-4'>
                <SelectField label="Center">
                </SelectField>

                <SelectField label="Invoice">
                </SelectField>
                <TextFieldSimple
                    label="Amount"
                />
                <TextFieldSimple
                    type="date"
                    label="Payment Date"
                    InputLabelProps={{ shrink: true }}
                />
                <div className='flex space-x-5 items-center'>
                    <div>Attachment</div>
                    <label htmlFor="contained-button-file">
                        <Input id="contained-button-file" multiple type="file" />
                        <Button variant="contained" component="span">
                            Upload
                        </Button>
                    </label>
                </div>
                <div className="flex justify-between">
                    <Button variant="contained" onClick={() => navigate(url_payHqPaymentHistory)}>Payment History</Button>
                    <Button variant="contained" color="success">Submit</Button>

                </div>
            </form>
        </AddEditLayout>
    )
}

export default PayHq