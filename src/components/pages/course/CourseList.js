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

function createData(id, name, startDate, endDate) {
    return { id, name, startDate, endDate };
}

const rows = [
    createData(1, 'Java', '01-08-2022', '03-08-2022'),
    createData(2, 'Android Development', '01-08-2022', '03-08-2022'),
    createData(3, 'Business', '01-08-2022', '03-08-2022'),
    createData(4, 'Accounting', '01-08-2022', '03-08-2022'),
    createData(5, 'Web Development', '01-08-2022', '03-08-2022'),
];

const CourseList = ({ setOpen, setEdit }) => {

    return (
        <div>
            <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
                <Table stickyHeader sx={{ minWidth: 650 }}>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ background: '#818181', color: 'white', fontWeight: 'bold' }}>ID</TableCell>
                            <TableCell sx={{ background: '#818181', color: 'white', fontWeight: 'bold' }}>Course Name</TableCell>
                            <TableCell sx={{ background: '#818181', color: 'white', fontWeight: 'bold' }}>Start Date</TableCell>
                            <TableCell sx={{ background: '#818181', color: 'white', fontWeight: 'bold' }}>End Date</TableCell>
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
                                    {row.id}
                                </TableCell>
                                <TableCell align="left"  >{row.name}</TableCell>
                                <TableCell align="left"  >{row.startDate}</TableCell>
                                <TableCell align="left"  >{row.endDate}</TableCell>
                                <TableCell align="left">
                                    <div className="flex space-x-2 justify-end">
                                        <Button variant="contained" color="success" onClick={() => { setOpen(true), setEdit(true) }}>Edit</Button>
                                        <Button variant="contained" color='error'>Remove</Button>
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

export default CourseList
