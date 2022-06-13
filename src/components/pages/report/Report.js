import { Button } from '@mui/material'
import { MenuItem } from '@mui/material'
import { getCentersApi } from 'api/center'
import { getCenterReportApi, getStudentReportApi } from 'api/report'
import React, { useContext, useState } from 'react'
import useApi from 'utils/hooks/useApi'
import SelectField from '../../common/textFields/SelectField'
import TextFieldSimple from '../../common/textFields/TextFieldSimple'
import AddEditLayout from '../common/AddEditLayout'
import { CSVLink } from "react-csv";
import { FeedbackContext } from 'context/FeedbackContext'
import { FormControlLabel } from '@mui/material'
import { Checkbox } from '@mui/material'
import { getStudentsApi } from 'api/student'

const Report = () => {
    const context = useContext(FeedbackContext)
    const [, { data }] = useApi({}, getCentersApi)
    const [, { data: studentData }] = useApi({}, getStudentsApi)
    const [getCenterInvoices, { data: excelData }] = useApi({ errMsg: true, successMsg: true })
    const [checkBox, setCheckBox] = useState('student')
    const [state, setState] = useState({
        report: '',
        center: '',
        student: '',
        fromDate: '',
        toDate: ''
    })

    const onChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }



    const onSubmit = async (e) => {
        e.preventDefault()
        console.log(state)
        const res = await new Promise((resolve, reject) => {
            getCenterInvoices(getCenterReportApi(state), ({ data }) => {
                resolve(data)
            })
        })
        return res
    }

    const onCsvDownload = (e, done) => {
        const { report, center, fromDate, toDate, student } = state
        console.log('state', state)
        if (!report || !fromDate || !toDate) {
            done(false)
            return context.setFeedback('Please fill all the fields', true)
        } else if (checkBox === 'student' && !student) {
            done(false)
            return context.setFeedback('Please fill all the fields', true)
        } else if (checkBox === 'center' && !center) {
            done(false)
            return context.setFeedback('Please fill all the fields', true)
        }

        if (checkBox === 'student') {
            getCenterInvoices(getStudentReportApi(state), () => {
                setTimeout(() => {
                    done()
                }, 500)
            })
        } else {
            getCenterInvoices(getCenterReportApi(state), () => {
                setTimeout(() => {
                    done()
                }, 500)
            })
        }
    }

    const { report, center, fromDate, toDate, student } = state

    return (
        <AddEditLayout title="Report">
            <form className='space-y-4' onSubmit={onSubmit}>
                <SelectField label="Report" name="report" value={report} onChange={onChange}>
                    <MenuItem value="paid">Paid</MenuItem>
                    <MenuItem value="pending">Pending</MenuItem>
                </SelectField>
                <div className="flex ">
                    <FormControlLabel control={<Checkbox checked={checkBox === 'student'} onClick={() => setCheckBox('student')} />} label="Student" />
                    <FormControlLabel control={<Checkbox checked={checkBox === 'center'} onClick={() => setCheckBox('center')} />} label="Center" />
                </div>
                {checkBox === 'student' ?
                    <SelectField label="Student" name="student" value={student} onChange={onChange} >
                        <MenuItem value="">Select a student</MenuItem>
                        {studentData?.map(student => (
                            <MenuItem key={student._id} value={student._id}>{student.name}</MenuItem>
                        ))}
                    </SelectField>
                    :
                    <SelectField label="Center" name="center" value={center} onChange={onChange} >
                        <MenuItem value="">Select a center</MenuItem>
                        {data?.map(center => (
                            <MenuItem key={center._id} value={center._id}>{center.name}</MenuItem>
                        ))}
                    </SelectField>
                }
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
                {/*        <CSVLink data={excelData || []}>Download me</CSVLink> */}
                <div className="grid grid-cols-1 pt-10">
                    <CSVLink asyncOnClick={true} data={excelData || []} onClick={onCsvDownload} className='cursor-pointer h-20 text-center' >
                        <img src="https://img.icons8.com/color/48/000000/ms-excel.png" className='m-auto w-12' /><br />
                        Generate Excel
                    </CSVLink>
                    {/*  <div className='cursor-pointer inline-block h-20 text-center'>
                        <img src="https://img.icons8.com/color/48/000000/pdf-2--v1.png" className='m-auto w-12' />
                        Generate PDF
                    </div> */}
                </div>
            </form>
        </AddEditLayout>
    )
}

export default Report