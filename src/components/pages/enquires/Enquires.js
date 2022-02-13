import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';


function createData(id, name, phone, email, description) {
    return { id, name, phone, email, description };
}

const rows = [
    createData("1", 'HanoKepong', '03030', 'test@test.com', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"),
    createData("1", 'HanoKepong', '03030', 'test@test.com', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"),
    createData("1", 'HanoKepong', '03030', 'test@test.com', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"),
    createData("1", 'HanoKepong', '03030', 'test@test.com', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"),
    createData("1", 'HanoKepong', '03030', 'test@test.com', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"),

];
const Enquires = () => {
    const headStyle = { background: '#818181', color: 'white', fontWeight: 'bold' }
    return (
        <div className='content'>
            <div className="text-xl font-mediun">Enquires</div>
            <div className="mt-7">
                <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
                    <Table stickyHeader sx={{ minWidth: 650 }}>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={headStyle}>ID</TableCell>
                                <TableCell sx={headStyle}>Name</TableCell>
                                <TableCell sx={headStyle}>Phone</TableCell>
                                <TableCell sx={headStyle}>Email</TableCell>
                                <TableCell sx={headStyle}>Description</TableCell>
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
                                    <TableCell align="left"  >{row.name}</TableCell>
                                    <TableCell align="left"  >{row.phone}</TableCell>
                                    <TableCell align="left"  >{row.email}</TableCell>
                                    <TableCell align="left"  >{row.description}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    )
}

export default Enquires