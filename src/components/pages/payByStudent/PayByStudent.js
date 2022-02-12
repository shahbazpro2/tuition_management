import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import SelectField from '../../common/textFields/SelectField'
import TextFieldSimple from '../../common/textFields/TextFieldSimple'
import { url_pbsPaymentHistory } from '../../functions/pageUrls'
import AddEditLayout from '../common/AddEditLayout'

const PayByStudent = () => {
    const navigate = useNavigate()
    return (
        <AddEditLayout title="Pay By Student">
            <div className="space-y-4">
                <SelectField
                    label="Student"
                ></SelectField>
                <SelectField
                    label="Invoice"
                ></SelectField>
                <TextFieldSimple label="Amount" />
                <TextFieldSimple
                    label="Payment Date"
                    type="date"
                    shrink={true}
                />
                <div className="grid grid-cols-2 gap-10">
                    <Button variant="contained" onClick={() => navigate(url_pbsPaymentHistory)}>Payment History</Button>
                    <Button variant="contained" color="success">Submit</Button>
                </div>
            </div>
        </AddEditLayout>
    )
}

export default PayByStudent