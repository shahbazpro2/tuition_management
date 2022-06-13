import { Button } from '@mui/material'
import { MenuItem } from '@mui/material'
import { getCentersApi } from 'api/center'
import { getCenterReportApi } from 'api/report'
import React, { useState } from 'react'
import useApi from 'utils/hooks/useApi'
import SelectField from '../../common/textFields/SelectField'
import TextFieldSimple from '../../common/textFields/TextFieldSimple'
import AddEditLayout from '../common/AddEditLayout'

const Report = () => {
    const [, { data }] = useApi({}, getCentersApi)
    const [getCenterInvoices] = useApi({ errMsg: true, successMsg: true })
    const [state, setState] = useState({
        report: '',
        center: '',
        fromDate: '',
        toDate: ''
    })

    const onChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const { report, center, fromDate, toDate } = state

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(state)
        getCenterInvoices(getCenterReportApi(state))
    }

    return (
        <AddEditLayout title="Report">
            <form className='space-y-4' onSubmit={onSubmit}>
                <SelectField label="Report" name="report" value={report} onChange={onChange}>
                    <MenuItem value="paid">Paid</MenuItem>
                    <MenuItem value="pending">Pending</MenuItem>
                </SelectField>
                <SelectField label="Center" name="center" value={center} onChange={onChange} >
                    <MenuItem value="">Select a center</MenuItem>
                    {data?.map(center => (
                        <MenuItem key={center._id} value={center._id}>{center.name}</MenuItem>
                    ))}
                </SelectField>
                <div className="grid grid-cols-2 gap-4">
                    <TextFieldSimple
                        label="From Date"
                        type="month"
                        InputLabelProps={{ shrink: true }}
                        name="fromDate"
                        value={fromDate}
                        onChange={onChange}
                    />
                    <TextFieldSimple
                        label="To Date"
                        type="month"
                        InputLabelProps={{ shrink: true }}
                        name="toDate"
                        value={toDate}
                        onChange={onChange}
                    />
                </div>
                <div className="grid grid-cols-2">
                    <Button type="submit" className='cursor-pointer h-20 text-center' >
                        <img src="https://img.icons8.com/color/48/000000/ms-excel.png" className='m-auto w-12' /><br />
                        Generate Excel
                    </Button>
                    <div className='cursor-pointer inline-block h-20 text-center'>
                        <img src="https://img.icons8.com/color/48/000000/pdf-2--v1.png" className='m-auto w-12' />
                        Generate PDF
                    </div>
                </div>
            </form>
        </AddEditLayout>
    )
}

export default Report