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
import { url_editDiscount } from '../../../functions/pageUrls';


function createData(id, description, discount, status) {
    return { id, description, discount, status };
}

const rows = [
    createData("001", 'BM', '20%', 'Active'),
    createData("001", 'BM', '20%', 'Active'),
    createData("001", 'BM', '20%', 'Active'),
    createData("001", 'BM', '20%', 'Active'),
    createData("001", 'BM', '20%', 'Active'),

];

const DiscountsList = () => {
    const navigate = useNavigate()
    return (
        <div>
            <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
                <Table stickyHeader sx={{ minWidth: 650 }}>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ background: '#818181', color: 'white', fontWeight: 'bold' }}>ID</TableCell>
                            <TableCell sx={{ background: '#818181', color: 'white', fontWeight: 'bold' }}>Discount Description</TableCell>
                            <TableCell sx={{ background: '#818181', color: 'white', fontWeight: 'bold' }}>Disc %</TableCell>
                            <TableCell sx={{ background: '#818181', color: 'white', fontWeight: 'bold' }}>Status</TableCell>
                            <TableCell sx={{ background: '#818181', color: 'white', fontWeight: 'bold' }}></TableCell>
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
                                <TableCell align="left"  >{row.description}</TableCell>
                                <TableCell align="left"  >{row.discount}</TableCell>
                                <TableCell align="left"  >{row.status}</TableCell>
                                <TableCell align="left">
                                    <div className="flex space-x-2 justify-end">
                                        <Button variant="contained" color="success" onClick={() => navigate(url_editDiscount)}>Edit</Button>
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

export default DiscountsList
