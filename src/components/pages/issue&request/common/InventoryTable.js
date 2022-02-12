import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Checkbox } from '@mui/material';


function createData(id, description, qty) {
    return { id, description, qty };
}

const rows = [
    createData("1", 'Book 1', '10'),
    createData("1", 'Book 1', '10'),
    createData("1", 'Book 1', '10'),
    createData("1", 'Book 1', '10'),
    createData("1", 'Book 1', '10'),

];

const InventoryTable = () => {
    return (
        <div>
            <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
                <Table size="small" stickyHeader sx={{ minWidth: 650 }}>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ background: '#818181', color: 'white', fontWeight: 'bold' }}>ID</TableCell>
                            <TableCell sx={{ background: '#818181', color: 'white', fontWeight: 'bold' }}>Select</TableCell>
                            <TableCell sx={{ background: '#818181', color: 'white', fontWeight: 'bold' }}>Description</TableCell>
                            <TableCell sx={{ background: '#818181', color: 'white', fontWeight: 'bold' }}>Qty</TableCell>
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
                                <TableCell align="left"  ><Checkbox /></TableCell>
                                <TableCell align="left"  >{row.description}</TableCell>
                                <TableCell align="left"  >{row.qty}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default InventoryTable
