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
import { url_editCourse, url_editStudent } from 'utils/pageUrls'
import TbCell from '../../common/TableCell';
import useApi from 'utils/hooks/useApi';
import { getStudentsApi } from 'api/student';

const StudentList = () => {
    const [, { data }] = useApi({}, getStudentsApi)
    const navigate = useNavigate()
    return (
        <div>
            <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
                <Table stickyHeader sx={{ minWidth: 650 }}>
                    <TableHead>
                        <TableRow>
                            <TbCell>Student Name</TbCell>
                            <TbCell>Gender</TbCell>
                            <TbCell>Father Name</TbCell>
                            <TbCell>Mother Name</TbCell>
                            <TbCell>Package</TbCell>
                            <TbCell></TbCell>
                            <TbCell></TbCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data?.map((row, index) => (
                            <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="left"  >{row?.name}</TableCell>
                                <TableCell align="left"  >{row?.gender}</TableCell>
                                <TableCell align="left"  >{row?.fatherName}</TableCell>
                                <TableCell align="left"  >{row?.motherName}</TableCell>
                                <TableCell align="left"  >{row?.package?.name}</TableCell>
                                {/*   <TableCell align='center'><Button variant="contained" color="primary">View</Button></TableCell> */}
                                <TableCell align="center">
                                    <Button variant="contained" color="success" onClick={() => navigate(`${url_editStudent}/${row?._id}`)}>Edit</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default StudentList
