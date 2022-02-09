/* eslint-disable no-undef */
import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Button } from '@mui/material';
function createRow(id, description, qty, amount) {
    return { id, description, qty, amount };
}

const rows = [
    createRow(1, "One Subject one day per week", 1, 'RM240'),
    createRow(2, "KPSC1", 1, 'RM50'),
];

const InvoiceTemplate = () => {
    return <div className="content">
        <div className="grid grid-cols-2">
            <div className="flex space-x-5">
                <img src={`${process.env.PUBLIC_URL}/assets/logo_default.png`} width="45" />
                <div>
                    Student Address
                </div>
            </div>
            <div>
                <div className="text-base">Ref: Inv Number</div>
                <div className="text-base">Date: Date Generated</div>
            </div>
        </div>
        <div className="my-20">
            <TableContainer>
                <Table aria-label="spanning table">
                    <TableHead>
                        <TableRow>
                            <TableCell>No.</TableCell>
                            <TableCell align="left">Item Description</TableCell>
                            <TableCell align="right">Qty</TableCell>
                            <TableCell align="right">Amount</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell>{row.id}</TableCell>
                                <TableCell >{row.description}</TableCell>
                                <TableCell align="right">{row.qty}</TableCell>
                                <TableCell align="right">{row.amount}</TableCell>
                            </TableRow>
                        ))}

                        <TableRow>
                            <TableCell colSpan={3} align="right">Total</TableCell>
                            <TableCell align="right">RM290</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colSpan={3} align="right">Discount 10% (Applicable if payment made before 7th of the month)(Optional)</TableCell>
                            <TableCell align="right">RM261</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
        <div className="flex justify-between">
            <div>
                <div>Kindly remit the payment to the following bank:</div>
                <div>Bank xxxxxxxxxxxxx</div>
            </div>
            <div className='print:hidden'>
                <Button variant="contained" onClick={() => window.print()}>Download as pdf</Button>
            </div>

        </div>
    </div >;
};

export default InvoiceTemplate;
