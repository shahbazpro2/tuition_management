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
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { url_editCourse, url_viewCourse } from '../../functions/pageUrls'
import TbCell from '../../common/TableCell';


function createData(type, language, description, status) {
    return { type, language, description, status };
}

const rows = [
    createData("Flash Card ", 'BM', 'Bhassa Malaysia', 'Active'),
    createData("Flash Card ", 'BM', 'Bhassa Malaysia', 'Active'),
    createData("Flash Card ", 'BM', 'Bhassa Malaysia', 'Inactive'),
    createData("Flash Card ", 'BM', 'Bhassa Malaysia', 'Active'),
    createData("Flash Card ", 'BM', 'Bhassa Malaysia', 'Active'),

];

const CoursesList = () => {
    const navigate = useNavigate()
    return (
        <div>
            <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
                <Table stickyHeader sx={{ minWidth: 650 }}>
                    <TableHead>
                        <TableRow>
                            <TbCell>Type</TbCell>
                            <TbCell>Language</TbCell>
                            <TbCell>Description</TbCell>
                            <TbCell>Status</TbCell>
                            <TbCell>View</TbCell>
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
                                    {row.type}
                                </TableCell>
                                <TableCell align="left"  >{row.language}</TableCell>
                                <TableCell align="left"  >{row.description}</TableCell>
                                <TableCell align="left"  >{row.status}</TableCell>
                                <TableCell align="left"  ><PlayArrowIcon onClick={() => navigate(url_viewCourse)} sx={{ cursor: 'pointer' }} /></TableCell>
                                <TableCell align="left">
                                    <div className="flex space-x-2 justify-end">
                                        <Button variant="contained" color="success" onClick={() => navigate(url_editCourse)}>Edit</Button>
                                        <Button variant="contained" color='error'>Delete</Button>
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

export default CoursesList
