import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import TbCell from '../../common/TableCell';


function createData(no, centerName, invoiceNo, paymentDate, hasAttachment) {
    return { no, centerName, invoiceNo, paymentDate, hasAttachment };
}

const rows = [
    createData("1", 'HanoKepong', 'Invoice111', '1 Jan 22', "Yes"),
    createData("1", 'HanoKepong', 'Invoice111', '1 Jan 22', "Yes"),
    createData("1", 'HanoKepong', 'Invoice111', '1 Jan 22', "Yes"),
    createData("1", 'HanoKepong', 'Invoice111', '1 Jan 22', "Yes"),
    createData("1", 'HanoKepong', 'Invoice111', '1 Jan 22', "Yes"),

];
const PaymentHistory = () => {
    return (
        <div className='content'>
            <div className="text-xl font-mediun">Payment History</div>
            <div className="mt-7">
                <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
                    <Table stickyHeader sx={{ minWidth: 650 }}>
                        <TableHead>
                            <TableRow>
                                <TbCell>No</TbCell>
                                <TbCell>Center Name</TbCell>
                                <TbCell>Invoice No</TbCell>
                                <TbCell>Payment Date</TbCell>
                                <TbCell>Has Attachment?</TbCell>
                                <TbCell></TbCell>
                                <TbCell></TbCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row, index) => (
                                <TableRow
                                    key={index}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell>
                                        {row.no}
                                    </TableCell>
                                    <TableCell align="left"  >{row.centerName}</TableCell>
                                    <TableCell align="left"  >{row.invoiceNo}</TableCell>
                                    <TableCell align="left"  >{row.paymentDate}</TableCell>
                                    <TableCell align="left"  >{row.hasAttachment}</TableCell>
                                    <TableCell align='center'><Button variant="contained" color="primary">View</Button></TableCell>
                                    <TableCell align="center">
                                        {index == 1 ?
                                            <Button variant="contained" color="warning" >Pending</Button> :
                                            index === 3 ? <Button variant="contained" color="error" >No Fund Received</Button> :
                                                <Button variant="contained" color="success" >Verified</Button>
                                        }
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    )
}

export default PaymentHistory