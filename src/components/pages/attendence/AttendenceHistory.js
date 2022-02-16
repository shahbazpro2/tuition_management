import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TbCell from '../../common/TableCell';


function createData(no, studentName, courseAttended, dateAttended) {
    return { no, studentName, courseAttended, dateAttended };
}

const rows = [
    createData("1", 'Jason', "English", "1 Jan 22"),
    createData("1", 'Jason', "English", "1 Jan 22"),
    createData("1", 'Jason', "English", "1 Jan 22"),
    createData("1", 'Jason', "English", "1 Jan 22"),
    createData("1", 'Jason', "English", "1 Jan 22"),

];

const AttendenceHistory = () => {
    return (
        <div className='content'>
            <div className="text-xl font-medium">Attendence History</div>
            <div className="mt-7">
                <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
                    <Table stickyHeader sx={{ minWidth: 650 }}>
                        <TableHead>
                            <TableRow>
                                <TbCell>No</TbCell>
                                <TbCell>Student Name</TbCell>
                                <TbCell>Course Attended</TbCell>
                                <TbCell>Date Attended</TbCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row, index) => (
                                <TableRow
                                    key={index}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell>
                                        {row.no}
                                    </TableCell>
                                    <TableCell align="left"  >{row.studentName}</TableCell>
                                    <TableCell align="left"  >{row.courseAttended}</TableCell>
                                    <TableCell align="left"  >{row.dateAttended}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    )
}

export default AttendenceHistory
