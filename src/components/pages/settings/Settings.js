import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import Add from '../../common/Add'
import TbCell from '../../common/TableCell'
import { url_addUser } from '../../functions/pageUrls';

function createData(id, name, email, role) {
    return { id, name, email, role };
}

const rows = [
    createData("001", 'BM', 'test@test.com', 'Teacher'),
    createData("001", 'BM', 'test@test.com', 'Teacher'),
    createData("001", 'BM', 'test@test.com', 'Teacher'),
    createData("001", 'BM', 'test@test.com', 'Teacher'),
    createData("001", 'BM', 'test@test.com', 'Teacher'),

];

const Settings = () => {
    return (
        <div className="content">
            <div className="text-lg">Settings</div>
            <div className="mt-10">
                <Add title="Add User" link={url_addUser} />
                <div className="mt-10">
                    <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
                        <Table stickyHeader sx={{ minWidth: 650 }}>
                            <TableHead>
                                <TableRow>
                                    <TbCell>ID</TbCell>
                                    <TbCell>Name</TbCell>
                                    <TbCell>Email</TbCell>
                                    <TbCell>Role</TbCell>
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
                                        <TableCell align="left"  >{row.name}</TableCell>
                                        <TableCell align="left"  >{row.email}</TableCell>
                                        <TableCell align="left"  >{row.role}</TableCell>
                                        <TableCell align="left">
                                            <div className="flex space-x-2 justify-end">
                                                <Button variant="contained" color="success">Edit</Button>
                                                <Button variant="contained" color='error'>Delete</Button>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        </div>
    )
}

export default Settings