import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Checkbox } from '@mui/material';
import TbCell from '../../common/TableCell';

const AttendenceList = ({ data, attendance, setAttendance }) => {

    const onAttendanceChange = (id, index) => {
        const newAttendance = [...attendance]
        if (newAttendance[index] !== id) {
            newAttendance[index] = id
            setAttendance(newAttendance)
        }
        else {
            setAttendance(newAttendance.filter(item => item !== id))
        }
    }


    return (
        <div>
            <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
                <Table stickyHeader sx={{ minWidth: 650 }}>
                    <TableHead>
                        <TableRow>
                            <TbCell>ID</TbCell>
                            <TbCell>Student Name</TbCell>
                            <TbCell>Father Name</TbCell>
                            <TbCell>Mother Name</TbCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data?.map((row, index) => (
                            <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="left"  ><Checkbox checked={attendance.find(element => element === row?._id) ? true : false} onChange={() => onAttendanceChange(row?._id, index)} /></TableCell>
                                <TableCell align="left"  >{row.name}</TableCell>
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
