import { Button, MenuItem } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SelectField from '../../common/textFields/SelectField'
import TextFieldSimple from '../../common/textFields/TextFieldSimple'
import { url_pbsPaymentHistory } from 'utils/pageUrls'
import AddEditLayout from '../common/AddEditLayout'
import { getStudentsApi } from 'api/student'
import useApi from 'utils/hooks/useApi'
import { getStudentInvoiceStudentApi, updateStudentInvoiceApi } from 'api/StudentInvoice'

const PayByStudent = () => {
    const navigate = useNavigate()
    const [, { data: students }] = useApi({}, getStudentsApi)
    const [getInvoices, { data: invoices }] = useApi({ errMsg: true })
    const [updateInvoice] = useApi({ errMsg: true, successMsg: true })
    const [state, setState] = useState({
        student_id: '',
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
        if (state.student_id)
            getInvoices(getStudentInvoiceStudentApi(state.student_id))
    }, [state.student_id])

    const onSubmit = (e) => {
        e.preventDefault()
        updateInvoice(updateStudentInvoiceApi(state.invoice_id, { amount: state.amount, payment_date: state.payment_date, status: 'paid' }), () => {
            setState({
                student_id: '',
                payment_date: '',
                amount: '',
                invoice_id: ''
            })
        })
    }


    return (
        <AddEditLayout title="Pay By Student">
            <form className="space-y-4" onSubmit={onSubmit}>
                <SelectField
                    label="Student"
                    name="student_id"
                    required
                    value={state.student_id}
                    onChange={onChange}

                >
                    <MenuItem value="">Select student</MenuItem>
                    {students?.map(({ _id, name }) => (
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
                <div className="grid grid-cols-1 gap-10">
                    {/*  <Button variant="contained" onClick={() => navigate(url_pbsPaymentHistory)}>Payment History</Button> */}
                    <Button type="submit" variant="contained" color="success">Submit</Button>
                </div>
            </form>
        </AddEditLayout>
    )
}

export default PayByStudent