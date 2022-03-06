import React, { useEffect, useState } from 'react'
import Add from '../../common/Add';
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { url_addCenter, url_editCenter } from 'utils/pageUrls';
import { useNavigate } from 'react-router-dom';
import TbCell from '../../common/TableCell';
import { getCentersApi } from 'api/center';

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
    const [data, setData] = useState([])

    useEffect(() => {
        getCenters()
    }, [])

    const getCenters = async () => {
        const res = await getCentersApi()
        if (!res.error)
            setData(res.data)
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
                                <TbCell>Location</TbCell>
                                <TbCell>PIC Name</TbCell>
                                <TbCell>Status</TbCell>
                                <TbCell></TbCell>
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
