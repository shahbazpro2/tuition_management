import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import TopSection from '../../common/TabsSection';
import { Button } from '@mui/material';
import ModalLayout from '../../../common/Modal';
import GenerateBillModal from '../common/GenerateBillModal';
import TabsSection from '../../common/TabsSection';
import { url_centerInvoicing, url_studentInvoicing } from '../../../functions/pageUrls';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'studentName', headerName: 'Student name', width: 130 },
];

const rows = [
    { id: 1, studentName: 'Snow' },
    { id: 2, studentName: 'Lannister' },
    { id: 3, studentName: 'Lannister' },
];

export const tabs = [
    ["Student", url_studentInvoicing],
    ["Center", url_centerInvoicing]
]

export default function StudentInvoicing() {
    const [open, setOpen] = React.useState(false)
    return (
        <div className="content">
            <div className="flex justify-between">
                <TabsSection tabs={tabs} active={tabs[0][0]} />
                <Button variant="contained" color="success" onClick={() => setOpen(true)}>Generate Invoices</Button>
                <ModalLayout height="max-h-[650px]" title="Generate Invoice" open={open} setOpen={() => setOpen(false)}>
                    <GenerateBillModal />
                </ModalLayout>
            </div>
            <div className="mt-7 h-[400px]">

                <DataGrid
                    rows={rows}
                    columns={columns}
                    checkboxSelection
                    disableColumnFilter={true}
                    disableColumnMenu={true}
                />
            </div>
        </div>
    );
}