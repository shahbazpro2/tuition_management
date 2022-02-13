import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Checkbox } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { url_editCourse, url_viewCourse } from '../../functions/pageUrls'


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
                            <TableCell sx={{ background: '#818181', color: 'white', fontWeight: 'bold' }}>ID</TableCell>
                            <TableCell sx={{ background: '#818181', color: 'white', fontWeight: 'bold' }}>Select</TableCell>
                            <TableCell sx={{ background: '#818181', color: 'white', fontWeight: 'bold' }}>Student Name</TableCell>
                            <TableCell sx={{ background: '#818181', color: 'white', fontWeight: 'bold' }}>Father Name</TableCell>
                            <TableCell sx={{ background: '#818181', color: 'white', fontWeight: 'bold' }}>Mother Name</TableCell>
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