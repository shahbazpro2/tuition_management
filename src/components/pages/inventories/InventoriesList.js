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
import { url_editInventory } from '../../functions/pageUrls'
import TbCell from '../../common/TableCell';


function createData(id, category, description, qty, status) {
    return { id, category, description, qty, status };
}

const rows = [
    createData("001", 'workbook', 'KBSR 1', "00", 'Active'),
    createData("001", 'workbook', 'KBSR 1', "00", 'Active'),
    createData("001", 'workbook', 'KBSR 1', "00", 'Inactive'),
    createData("001", 'workbook', 'KBSR 1', "00", 'Active'),
    createData("001", 'workbook', 'KBSR 1', "00", 'Active'),

];

const InventoriesList = () => {
    const navigate = useNavigate()
    return (
        <div>
            <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
                <Table stickyHeader sx={{ minWidth: 650 }}>
                    <TableHead>
                        <TableRow>
                            <TbCell>ID</TbCell>
                            <TbCell>Category</TbCell>
                            <TbCell>Description</TbCell>
                            <TbCell>Qty</TbCell>
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
                                <TableCell align="left"  >{row.category}</TableCell>
                                <TableCell align="left"  >{row.description}</TableCell>
                                <TableCell align="left"  >{row.qty}</TableCell>
                                <TableCell align="left"  >{row.status}</TableCell>
                                <TableCell align="left">
                                    <div className="flex space-x-2 justify-end">
                                        <Button variant="contained" color="success" onClick={() => navigate(url_editInventory)}>Edit</Button>
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

export default InventoriesList
