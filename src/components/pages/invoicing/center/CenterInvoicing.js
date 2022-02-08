import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import TopSection from '../common/TopSection';
import { Button } from '@mui/material';
import ModalLayout from '../../../common/Modal';
import GenerateBillModal from '../common/GenerateBillModal';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'centerName', headerName: 'Center name', width: 130 },
];

const rows = [
    { id: 1, centerName: 'Snow' },
    { id: 2, centerName: 'Lannister' },
    { id: 3, centerName: 'Lannister' },
];

export default function CenterInvoicing() {
    const [open, setOpen] = React.useState()
    return (
        <div className="content">
            <div className="flex justify-between">
                <TopSection active="center" />
                <Button variant="contained" color="success" onClick={() => setOpen(true)}>Generate Invoices</Button>
                <ModalLayout height="h-[95%]" title="Generate Invoice" open={open} setOpen={() => setOpen(false)}>
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