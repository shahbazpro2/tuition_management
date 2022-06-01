import { Button, MenuItem, styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import SelectField from '../../common/textFields/SelectField'
import TextFieldSimple from '../../common/textFields/TextFieldSimple'
import AddEditLayout from '../common/AddEditLayout';
import useApi from 'utils/hooks/useApi';
import { getCentersApi } from 'api/center';
import { getCenterInvoiceCenterApi, updateCenterInvoiceApi } from 'api/centerInvoice';

const Input = styled('input')({
    display: 'none',
});

const PayHq = () => {
    const navigate = useNavigate()
    const [, { data: centers }] = useApi({}, getCentersApi)
    const [getInvoices, { data: invoices }] = useApi({ errMsg: true })
    const [updateInvoice] = useApi({ errMsg: true, successMsg: true })
    const [state, setState] = useState({
        center_id: '',
        payment_date: '',
        amount: '',
        invoice_id: ''
    })

    const onChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if (state.center_id)
            getInvoices(getCenterInvoiceCenterApi(state.center_id))
    }, [state.center_id])

    const onSubmit = (e) => {
        e.preventDefault()
        updateInvoice(updateCenterInvoiceApi(state.invoice_id, { amount: state.amount, payment_date: state.payment_date, status: 'paid' }), () => {
            setState({
                center_id: '',
                payment_date: '',
                amount: '',
                invoice_id: ''
            })
        })
    }

    return (
        <AddEditLayout title="Pay HQ">
            <form className='space-y-4' onSubmit={onSubmit}>
                <SelectField
                    label="Center"
                    name="center_id"
                    required
                    value={state.center_id}
                    onChange={onChange}

                >
                    <MenuItem value="">Select center</MenuItem>
                    {centers?.map(({ _id, name }) => (
                        <MenuItem key={_id} value={_id}>{name}</MenuItem>
                    ))}
                </SelectField>

                <SelectField
                    label="Invoice"
                    name="invoice_id"
                    required
                    value={state.invoice_id}
                    onChange={onChange}
                >
                    <MenuItem value="">Select invoice</MenuItem>
                    {invoices?.map(({ _id }) => (
                        <MenuItem key={_id} value={_id}>{_id}</MenuItem>
                    ))}
                </SelectField>
                <TextFieldSimple required label="Amount" name="amount" value={state.amount} onChange={onChange} />

                <TextFieldSimple
                    label="Payment Date"
                    type="date"
                    InputLabelProps={{ shrink: true }}
                    value={state.payment_date}
                    name="payment_date"
                    onChange={onChange}
                />
                {/* <div className='flex space-x-5 items-center'>
                    <div>Attachment</div>
                    <label htmlFor="contained-button-file">
                        <Input id="contained-button-file" multiple type="file" />
                        <Button variant="contained" component="span">
                            Upload
                        </Button>
                    </label>
                </div> */}
                <div className="flex justify-between">
                    {/*  <Button variant="contained" onClick={() => navigate(url_payHqPaymentHistory)}>Payment History</Button> */}
                    <Button type="submit" variant="contained" color="success">Submit</Button>

                </div>
            </form>
        </AddEditLayout>
    )
}

export default PayHq