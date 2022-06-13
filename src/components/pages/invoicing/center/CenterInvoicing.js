import React, { useContext, useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import ModalLayout from '../../../common/Modal';
import GenerateBillModal from './GenerateBillModal';
import TabsSection from '../../common/TabsSection';
import { url_centerInvoice, url_centerInvoicing, url_studentInvoice, url_studentInvoicing } from 'utils/pageUrls';
import useApi from 'utils/hooks/useApi';
import { getStudentsApi } from 'api/student';
import { createStudentInvoiceApi } from 'api/StudentInvoice'
import { useNavigate } from 'react-router-dom';
import TextFieldSimple from 'components/common/textFields/TextFieldSimple';
import { FeedbackContext } from 'context/FeedbackContext';
import { getCentersApi } from 'api/center';
import { createCenterInvoiceApi } from 'api/centerInvoice';


export const tabs = [
    ["Student", url_studentInvoicing],
    ["Center", url_centerInvoicing]
]

export const initialState = {
    date: new Date().toISOString().slice(0, 7),
    inventory_id: '',
    discount: ''
}

export default function CenterInvoicing() {
    const navigate = useNavigate()
    const columns = [
        { field: 'name', headerName: 'Center Name', width: 130 },
        { field: 'officeNumber', headerName: 'Office Number', width: 130 },
        {
            field: 'status', headerName: 'Status', width: 130, renderCell: ({ row }) => {
                return row?.invoices.length > 0 ? row?.invoices[row?.invoices.length - 1]?.status : ''
            }
        },
        {
            field: 'action', headerName: 'Action', renderCell: ({ row }) => {

                return row?.invoices.length > 0 ? <Button onClick={() => navigate(`${url_centerInvoice}/${row._id}`)}>View</Button> : ''
            }
        },

    ];
    const context = useContext(FeedbackContext)
    const [date, setDate] = useState(new Date().toISOString().slice(0, 7))
    const [getCenters, { data }] = useApi({})
    const [selection, setSelection] = useState([])
    const [open, setOpen] = React.useState(false)
    const [state, setState] = useState(initialState)
    const [createApi] = useApi({ successMsg: true, errMsg: true })

    useEffect(() => {
        getCenters(getCentersApi(date))
    }, [date])

    const onSubmit = () => {
        const { inventory_id } = state
        if (!inventory_id) {
            return context.setFeedback('Must select inventory', true)
        }
        createApi(createCenterInvoiceApi({ ...state, center: selection[0] }), () => {
            getCenters(getCentersApi(date))
            setOpen(false)
        })
    }

    return (
        <div className="content">
            <div className="grid grid-cols-4">
                <div className="col-span-3">
                    <TabsSection tabs={tabs} active={tabs[1][0]} />
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
                    <GenerateBillModal state={state} setState={setState} onSubmit={onSubmit} selection={selection} />
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