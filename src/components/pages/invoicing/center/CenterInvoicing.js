import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import TopSection from '../../common/TabsSection';
import { Button } from '@mui/material';
import ModalLayout from '../../../common/Modal';
import GenerateBillModal from '../common/GenerateBillModal';
import TabsSection from '../../common/TabsSection';
import { tabs } from '../student/StudentInvoicing'

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
    const [open, setOpen] = React.useState(false)
    return (
        <div className="content">
            <div className="flex justify-between">
                <TabsSection tabs={tabs} active={tabs[1][0]} />
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