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
import { url_editStudent, url_registerStudent } from '../../functions/pageUrls';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData(1, 'John'),
    createData(2, 'Ali'),
    createData(3, 'Ahmed'),
    createData(4, 'Kashif'),
    createData(5, 'Kamran'),
];

const StudentList = ({ setOpen }) => {
    const navigate = useNavigate()
    return (
        <div>
            <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
                <Table stickyHeader sx={{ minWidth: 650 }}>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ background: '#818181', color: 'white', fontWeight: 'bold' }}>ID</TableCell>
                            <TableCell sx={{ background: '#818181', color: 'white', fontWeight: 'bold' }}>Name</TableCell>
                            <TableCell sx={{ background: '#818181', color: 'white', fontWeight: 'bold' }}></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell>
                                    {row.name}
                                </TableCell>
                                <TableCell align="left"  >{row.calories}</TableCell>
                                <TableCell align="left">
                                    <div className="flex space-x-2 justify-end">
                                        <Button variant="contained" color="success" onClick={() => navigate(url_editStudent)}>Edit</Button>
                                        <Button variant="contained" color='error' onClick={() => setOpen(true)}>Temp/Stop</Button>
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

export default StudentList
