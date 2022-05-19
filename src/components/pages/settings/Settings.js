import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import Add from '../../common/Add'
import TbCell from '../../common/TableCell'
import { url_addUser, url_editUser } from 'utils/pageUrls';
import { deleteUserApi, getUsersApi } from 'api/auth';
import { useNavigate } from 'react-router-dom';
import useApi from 'utils/hooks/useApi';
import { FeedbackContext } from 'context/FeedbackContext';

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
    const context = useContext(FeedbackContext)
    const [getUsers, { data }] = useApi({}, getUsersApi)
    const navigate = useNavigate()

    const onDelete = async (id) => {
        const res = await deleteUserApi(id)

        if (!res.error) {
            context.setFeedback(res.message)
            getUsers(getUsersApi)
            return
        }

        context.setFeedback("Delete failed", true)

    }

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
                                {data?.map((row, index) => (
                                    <TableRow
                                        key={index}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell>
                                            {index + 1}
                                        </TableCell>
                                        <TableCell align="left"  >{row.name}</TableCell>
                                        <TableCell align="left"  >{row.email}</TableCell>
                                        <TableCell align="left"  >{row.role}</TableCell>
                                        <TableCell align="left">
                                            <div className="flex space-x-2 justify-end">
                                                <Button variant="contained" color="success" onClick={() => navigate(`${url_editUser}/${row?._id}`)}>Edit</Button>
                                                <Button variant="contained" color='error' onClick={() => onDelete(row?._id)}>Delete</Button>
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