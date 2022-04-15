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
import { url_editDiscount } from 'utils/pageUrls';
import TbCell from '../../../common/TableCell';
import useApi from 'utils/hooks/useApi'
import { deleteDiscountApi, getDiscountsApi } from 'api/discount';


const DiscountsList = () => {
    const [getDicounts, { data }] = useApi(false, getDiscountsApi)
    const [deleteDiscount] = useApi(true)
    const navigate = useNavigate()
    return (
        <div>
            <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
                <Table stickyHeader sx={{ minWidth: 650 }}>
                    <TableHead>
                        <TableRow>
                            <TbCell>Name</TbCell>
                            <TbCell>Discount Description</TbCell>
                            <TbCell>Disc %</TbCell>
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
                                    {row.name}
                                </TableCell>
                                <TableCell align="left"  >{row.description}</TableCell>
                                <TableCell align="left"  >{row.discount}</TableCell>
                                <TableCell align="left"  >{row.status}</TableCell>
                                <TableCell align="left">
                                    <div className="flex space-x-2 justify-end">
                                        <Button variant="contained" color="success" onClick={() => navigate(`${url_editDiscount}/${row?._id}`)}>Edit</Button>
                                        <Button variant="contained" color='error' onClick={() => deleteDiscount(deleteDiscountApi(row._id), () => getDicounts(getDiscountsApi))}>Delete</Button>
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

export default DiscountsList
