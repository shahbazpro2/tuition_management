import React from 'react'
import Add from '../../common/Add';
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { url_addCenter, url_editCenter } from '../../functions/pageUrls';
import { useNavigate } from 'react-router-dom';

function createData(id, name, location, pic, status) {
    return { id, name, location, pic, status };
}

const rows = [
    createData(1, 'HanoAmpang', 'Ampang', 'Chris', 'Active'),
    createData(2, 'HanoAmpang', 'Ampang', 'Chris', 'Active'),
    createData(3, 'HanoAmpang', 'Ampang', 'Chris', 'Inactive'),
    createData(5, 'HanoAmpang', 'Ampang', 'Chris', 'Active'),
];


const Centers = () => {
    const navigate = useNavigate()
    return (
        <div className='mt-10'>
            <Add title="Add Center" link={url_addCenter} />
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
                                        <div className="flex space-x-3 justify-end">
                                            <Button variant="contained" color="success" onClick={() => navigate(url_editCenter)}>Edit</Button>
                                            <Button variant="contained" color="error">Delete</Button>
                                        </div>
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

export default Centers
