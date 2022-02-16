import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Checkbox } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import TbCell from '../../common/TableCell';


function createData(id, studentName, fatherName, motherName) {
    return { id, studentName, fatherName, motherName };
}

const rows = [
    createData("001", 'Jason', "Male", "Frankie", 'May'),
    createData("001", 'Jason', "Male", "Frankie", 'May'),
    createData("001", 'Jason', "Male", "Frankie", 'May'),
    createData("001", 'Jason', "Male", "Frankie", 'May'),
    createData("001", 'Jason', "Male", "Frankie", 'May'),

];

const AttendenceList = () => {
    const navigate = useNavigate()
    return (
        <div>
            <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
                <Table stickyHeader sx={{ minWidth: 650 }}>
                    <TableHead>
                        <TableRow>
                            <TbCell>ID</TbCell>
                            <TbCell>Select</TbCell>
                            <TbCell>Student Name</TbCell>
                            <TbCell>Father Name</TbCell>
                            <TbCell>Mother Name</TbCell>
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
                                <TableCell align="left"  ><Checkbox /></TableCell>
                                <TableCell align="left"  >{row.studentName}</TableCell>
                                <TableCell align="left"  >{row.fatherName}</TableCell>
                                <TableCell align="left"  >{row.motherName}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default AttendenceList
