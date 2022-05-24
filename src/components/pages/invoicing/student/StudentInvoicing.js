import React, { useContext, useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import ModalLayout from '../../../common/Modal';
import GenerateBillModal from '../common/GenerateBillModal';
import TabsSection from '../../common/TabsSection';
import { url_centerInvoicing, url_studentInvoice, url_studentInvoicing } from 'utils/pageUrls';
import useApi from 'utils/hooks/useApi';
import { getStudentsApi } from 'api/student';
import { createStudentInvoiceApi } from 'api/StudentInvoice'
import moment from 'moment'
import { useNavigate } from 'react-router-dom';
import TextFieldSimple from 'components/common/textFields/TextFieldSimple';
import { FeedbackContext } from 'context/FeedbackContext';


export const tabs = [
    ["Student", url_studentInvoicing],
    ["Center", url_centerInvoicing]
]

export const initialState = {
    date: new Date().toISOString().slice(0, 7),
    package_id: '',
    package_qty: '',
    inventory_id: '',
    inventory_qty: '',
    other_id: '',
    other_qty: '',
    discount: ''
}

export default function StudentInvoicing() {
    const navigate = useNavigate()
    const columns = [
        { field: 'name', headerName: 'Student Name', width: 130 },
        { field: 'fatherName', headerName: 'Father name', width: 130 },
        { field: 'gender', headerName: 'Gender', width: 130 },
        {
            field: 'status', headerName: 'Status', width: 130, renderCell: ({ row }) => {
                return row?.invoices[0]?.status
            }
        },
        {
            field: 'action', headerName: 'Action', renderCell: ({ row }) => {

                return row?.invoices.length > 0 ? <Button onClick={() => navigate(`${url_studentInvoice}/${row._id}`)}>View</Button> : ''
            }
        },
    ];
    const context = useContext(FeedbackContext)
    const [date, setDate] = useState(new Date().toISOString().slice(0, 7))
    const [getStudents, { data }] = useApi({})
    const [selection, setSelection] = useState([])
    const [open, setOpen] = React.useState(false)
    const [state, setState] = useState(initialState)
    const [createApi] = useApi({ successMsg: true, errMsg: true })

    useEffect(() => {
        getStudents(getStudentsApi(date))
    }, [date])

    const onSubmit = () => {
        const { package_id, inventory_id, other_id, discount } = state
        if (!package_id && !inventory_id && !other_id && !discount) {
            return context.setFeedback('Must select any one', true)
        }
        createApi(createStudentInvoiceApi({ ...state, student: selection[0] }), () => {
            getStudents(getStudentsApi(date))
            setOpen(false)
        })
    }

    return (
        <div className="content">
            <div className="grid grid-cols-4">
                <div className="col-span-3">
                    <TabsSection tabs={tabs} active={tabs[0][0]} />
                </div>
                <div className="col-span-1">
                    <div className="grid grid-cols-2 gap-3">
                        {selection.length > 0 ?
                            <Button variant="contained" color="success" onClick={() => setOpen(true)}>Generate Invoices</Button> :
                            <div></div>
                        }
                        <TextFieldSimple type="month" value={date} onChange={e => setDate(e.target.value)} label="Date" InputLabelProps={{ shrink: true }} />
                    </div>
                </div>
                <ModalLayout height="max-h-[650px]" title="Generate Invoice" open={open} setOpen={() => setOpen(false)}>
                    <GenerateBillModal state={state} setState={setState} onSubmit={onSubmit} />
                </ModalLayout>
            </div>
            <div className="mt-7 h-[400px]">
                <DataGrid
                    rows={data ?? []}
                    getRowId={(row) => row._id}
                    columns={columns}
                    selectionMode="single"
                    disableColumnFilter={true}
                    disableColumnMenu={true}
                    onSelectionModelChange={(selectedRows) => setSelection(selectedRows)}
                />
            </div>
        </div>
    );
}