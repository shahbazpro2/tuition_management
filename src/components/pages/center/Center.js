import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import Add from '../../common/Add';
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

function createData(id, name, location, pic, status) {
    return { id, name, location, pic, status };
}

const rows = [
    createData(1, 'HanoAmpang', 'Ampang', 'Chris', 'Active'),
    createData(2, 'HanoAmpang', 'Ampang', 'Chris', 'Active'),
    createData(3, 'HanoAmpang', 'Ampang', 'Chris', 'Inactive'),
    createData(5, 'HanoAmpang', 'Ampang', 'Chris', 'Active'),
];


const Center = () => {
    return (
        <div className='mt-10'>
            <Add title="Add Center" />
            <div className="mt-5">
                <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
                    <Table stickyHeader sx={{ minWidth: 650 }}>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ background: '#818181', color: 'white', fontWeight: 'bold' }}>Center ID</TableCell>
                                <TableCell sx={{ background: '#818181', color: 'white', fontWeight: 'bold' }}>Center Name</TableCell>
                                <TableCell sx={{ background: '#818181', color: 'white', fontWeight: 'bold' }}>Location</TableCell>
                                <TableCell sx={{ background: '#818181', color: 'white', fontWeight: 'bold' }}>PIC Name</TableCell>
                                <TableCell sx={{ background: '#818181', color: 'white', fontWeight: 'bold' }}>Status</TableCell>
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
                                    <TableCell align="left"  >{row.location}</TableCell>
                                    <TableCell align="left"  >{row.pic}</TableCell>
                                    <TableCell align="left"  >{row.status}</TableCell>
                                    <TableCell align="left">
                                        <Button variant="contained" color="success">Edit</Button>
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

export default Center
