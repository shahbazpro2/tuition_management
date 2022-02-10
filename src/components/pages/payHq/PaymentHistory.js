import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';


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
    const headStyle = { background: '#818181', color: 'white', fontWeight: 'bold' }
    return (
        <div className='content'>
            <div className="text-xl font-mediun">Payment History</div>
            <div className="mt-7">
                <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
                    <Table stickyHeader sx={{ minWidth: 650 }}>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={headStyle}>No</TableCell>
                                <TableCell sx={headStyle}>Center Name</TableCell>
                                <TableCell sx={headStyle}>Invoice No</TableCell>
                                <TableCell sx={headStyle}>Payment Date</TableCell>
                                <TableCell sx={headStyle}>Has Attachment?</TableCell>
                                <TableCell sx={headStyle}></TableCell>
                                <TableCell sx={headStyle}></TableCell>
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
                                            <Button variant="outlined" disableTouchRipple color="warning" >Pending</Button> :
                                            index === 3 ? <Button variant="outlined" disableTouchRipple color="error" >No Fund Received</Button> :
                                                <Button variant="outlined" disableTouchRipple color="success" >Verified</Button>
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