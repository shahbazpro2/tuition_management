import React, { useContext, useEffect, useState } from 'react'
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
import { url_editCourse, url_viewCourse } from 'utils/pageUrls'
import TbCell from '../../common/TableCell';
import { deleteCourseApi, getCoursesApi } from 'api/course';
import { FeedbackContext } from 'context/FeedbackContext';

const CoursesList = () => {
    const context = useContext(FeedbackContext)
    const navigate = useNavigate()
    const [data, setData] = useState([])

    useEffect(() => {
        fetchCourses()
    }, [])


    const fetchCourses = async () => {
        const res = await getCoursesApi()
        if (!res.error) setData(res.data)
    }

    const onDelete = async (id) => {
        const res = await deleteCourseApi(id)

        if (!res.error) {
            context.setFeedback(res.message)
            fetchCourses()
            return
        }

        context.setFeedback("Delete failed", true)

    }

    return (
        <div>
            <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
                <Table stickyHeader sx={{ minWidth: 650 }}>
                    <TableHead>
                        <TableRow>
                            <TbCell>Type</TbCell>
                            <TbCell>Language</TbCell>
                            <TbCell>Description</TbCell>
                            <TbCell>Teacher</TbCell>
                            <TbCell>Status</TbCell>
                            <TbCell>View</TbCell>
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
                                    {row.type?.name}
                                </TableCell>
                                <TableCell align="left"  >{row.language?.name}</TableCell>
                                <TableCell align="left"  >{row.description}</TableCell>
                                <TableCell align="left"  >{row.teacher?.name}</TableCell>
                                <TableCell align="left"  >{row.status}</TableCell>
                                <TableCell align="left"  ><PlayArrowIcon onClick={() => navigate(url_viewCourse)} sx={{ cursor: 'pointer' }} /></TableCell>
                                <TableCell align="left">
                                    <div className="flex space-x-2 justify-end">
                                        <Button variant="contained" color="success" onClick={() => navigate(`${url_editCourse}/${row?._id}`)}>Edit</Button>
                                        <Button variant="contained" color='error' onClick={() => onDelete(row?._id)}>Delete</Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div >
    )
}

export default CoursesList
