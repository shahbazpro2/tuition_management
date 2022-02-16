/* eslint-disable react/no-unescaped-entities */
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
import { url_packageEditOthers } from '../../../functions/pageUrls';
import TbCell from '../../../common/TableCell';


function createData(id, otherPrice, amount, status) {
    return { id, otherPrice, amount, status };
}

const rows = [
    createData("001", 'Non-refundable Advanced 1 Subject 1 day/week', 'RM 220', 'Active'),
    createData("001", 'Non-refundable Advanced 1 Subject 1 day/week', 'RM 220', 'Active'),
    createData("001", 'Non-refundable Advanced 1 Subject 1 day/week', 'RM 220', 'Active'),
    createData("001", 'Non-refundable Advanced 1 Subject 1 day/week', 'RM 220', 'Active'),
    createData("001", 'Non-refundable Advanced 1 Subject 1 day/week', 'RM 220', 'Active'),
];

const OthersList = () => {
    const navigate = useNavigate()
    return (
        <div>
            <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
                <Table stickyHeader sx={{ minWidth: 650 }}>
                    <TableHead>
                        <TableRow>
                            <TbCell>ID</TbCell>
                            <TbCell>Other Price</TbCell>
                            <TbCell>Amount</TbCell>
                            <TbCell>Status</TbCell>
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
                                    {row.id}
                                </TableCell>
                                <TableCell align="left"  >{row.otherPrice}</TableCell>
                                <TableCell align="left"  >{row.amount}</TableCell>
                                <TableCell align="left"  >{row.status}</TableCell>
                                <TableCell align="left">
                                    <div className="flex space-x-2 justify-end">
                                        <Button variant="contained" color="success" onClick={() => navigate(url_packageEditOthers)}>Edit</Button>
                                        <Button variant="contained" color='error'>Delete</Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default OthersList
