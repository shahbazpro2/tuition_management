import React, { useState } from 'react';
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


export const tabs = [
    ["Student", url_studentInvoicing],
    ["Center", url_centerInvoicing]
]

export const initialState = {
    date: moment(Date.now()).format('YYYY-MM-DD'),
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
            field: 'action', renderCell: (params) => {
                console.log('vew', params)

                return <Button onClick={() => navigate(`${url_studentInvoice}/${params.row._id}`)}>View</Button>;
            }
        },
    ];
    const [, { data }] = useApi({}, getStudentsApi)
    const [selection, setSelection] = useState([])
    const [open, setOpen] = React.useState(false)
    const [state, setState] = useState(initialState)
    const [createApi] = useApi({ successMsg: true, errMsg: true })

    const onSubmit = () => {
        console.log(state)

        createApi(createStudentInvoiceApi({ ...state, student: selection[0] }), () => setOpen(false))
    }

    return (
        <div className="content">
            <div className="flex justify-between">
                <TabsSection tabs={tabs} active={tabs[0][0]} />
                {selection.length > 0 &&
                    <Button variant="contained" color="success" onClick={() => setOpen(true)}>Generate Invoices</Button>
                }
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