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
import { url_editPackage } from 'utils/pageUrls'
import TbCell from '../../common/TableCell';
import useApi from 'utils/hooks/useApi';
import { deletePackageApi, getPackagesApi } from 'api/package';

const PackagesList = () => {
    const [getPackages, { data }] = useApi(false, getPackagesApi)
    const [deletePackage] = useApi(true)
    const navigate = useNavigate()

    return (
        <div>
            <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
                <Table stickyHeader sx={{ minWidth: 650 }}>
                    <TableHead>
                        <TableRow>
                            <TbCell>ID</TbCell>
                            <TbCell>Number of Subject</TbCell>
                            <TbCell>Number of Day's Per Week</TbCell>
                            <TbCell>Amount</TbCell>
                            <TbCell>Status</TbCell>
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
                                    {row._id}
                                </TableCell>
                                <TableCell align="left"  >{row.subject}</TableCell>
                                <TableCell align="left"  >{row.days}</TableCell>
                                <TableCell align="left"  >{row.amount}</TableCell>
                                <TableCell align="left"  >{row.status}</TableCell>
                                <TableCell align="left">
                                    <div className="flex space-x-2 justify-end">
                                        <Button variant="contained" color="success" onClick={() => navigate(`${url_editPackage}/${row?._id}`)}>Edit</Button>
                                        <Button variant="contained" color='error' onClick={() => deletePackage(deletePackageApi(row._id), getPackages(getPackagesApi))}>Delete</Button>
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

export default PackagesList
