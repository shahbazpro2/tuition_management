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


function createData(id, studentName, gender, fatherName, motherName) {
    return { id, studentName, gender, fatherName, motherName };
}

const rows = [
    createData("001", 'Jason', 'Male', 'Frankie', "Theresa"),
    createData("001", 'Jason', 'Male', 'Frankie', "Theresa"),
    createData("001", 'Jason', 'Male', 'Frankie', "Theresa"),
    createData("001", 'Jason', 'Male', 'Frankie', "Theresa"),
    createData("001", 'Jason', 'Male', 'Frankie', "Theresa"),

];

const StudentList = () => {
    const navigate = useNavigate()
    return (
        <div>
            <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
                <Table stickyHeader sx={{ minWidth: 650 }}>
                    <TableHead>
                        <TableRow>
                            <TbCell>ID</TbCell>
                            <TbCell>Student Name</TbCell>
                            <TbCell>Gender</TbCell>
                            <TbCell>Father Name</TbCell>
                            <TbCell>Mother Name</TbCell>
                            <TbCell></TbCell>
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
                                <TableCell align="left"  >{row.studentName}</TableCell>
                                <TableCell align="left"  >{row.gender}</TableCell>
                                <TableCell align="left"  >{row.fatherName}</TableCell>
                                <TableCell align="left"  >{row.motherName}</TableCell>
                                <TableCell align='center'><Button variant="contained" color="primary">View</Button></TableCell>
                                <TableCell align="center">
                                    <Button variant="contained" color="success" onClick={() => navigate(url_editStudent)}>Edit</Button>
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
