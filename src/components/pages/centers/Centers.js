import React, { useContext, useEffect, useState } from 'react'
import Add from '../../common/Add';
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { url_addCenter, url_editCenter } from 'utils/pageUrls';
import { useNavigate } from 'react-router-dom';
import TbCell from '../../common/TableCell';
import { deleteCenterApi, getCentersApi } from 'api/center';
import { FeedbackContext } from 'context/FeedbackContext';

const Centers = () => {
    const context = useContext(FeedbackContext)
    const navigate = useNavigate()
    const [data, setData] = useState([])

    useEffect(() => {
        getCenters()
    }, [])

    const getCenters = async () => {
        const res = await getCentersApi()
        if (!res.error)
            setData(res.data)
    }

    const onDelete = async (id) => {
        const res = await deleteCenterApi(id)

        if (!res.error) {
            context.setFeedback(res.message)
            getCenters()
            return
        }

        context.setFeedback("Delete failed", true)

    }


    return (
        <div className='content'>
            <Add title="Add Center" link={url_addCenter} />
            <div className="mt-5">
                <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
                    <Table stickyHeader sx={{ minWidth: 650 }}>
                        <TableHead>
                            <TableRow>
                                <TbCell>Center ID</TbCell>
                                <TbCell>Center Name</TbCell>
                                <TbCell>Office Number</TbCell>
                                <TbCell>PIC Name</TbCell>
                                <TbCell>Status</TbCell>
                                <TbCell></TbCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data?.map((row) => (
                                <TableRow
                                    key={row._id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell>
                                        {row._id}
                                    </TableCell>
                                    <TableCell align="left"  >{row?.name}</TableCell>
                                    <TableCell align="left"  >{row?.officeNumber}</TableCell>
                                    <TableCell align="left"  >{row?.pic?.name}</TableCell>
                                    <TableCell align="left"  >{row?.status}</TableCell>
                                    <TableCell align="left">
                                        <div className="flex space-x-3 justify-end">
                                            <Button variant="contained" color="success" onClick={() => navigate(`${url_editCenter}/${row?._id}`)}>Edit</Button>
                                            <Button variant="contained" color="error" onClick={() => onDelete(row?._id)}>Delete</Button>
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
