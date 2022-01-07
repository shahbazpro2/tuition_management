import React, { useState } from 'react'
import CourseList from './CourseList'
import AddIcon from '@mui/icons-material/Add';
import { Button, Modal, TextField } from '@mui/material';

const Course = () => {
    const [open, setOpen] = useState(false)
    const [edit, setEdit] = useState(false)

    return (
        <div className='mt-7'>
            <div className="flex space-x-1 items-center text-xl font-bold" >
                <AddIcon fontSize="inherit" />
                <div className='cursor-pointer' onClick={() => setOpen(true)}>Add Course</div>
            </div>
            <div className="mt-10">
                <CourseList setOpen={setOpen} setEdit={setEdit} />
            </div>
            <Modal
                open={open}
                onClose={() => { setOpen(false), setEdit(false) }}
            >
                <div className="w-[95%] md:w-[500px] h-[55%]  overflow-auto absolute rltb-0 m-rltb-auto bg-white rounded-lg p-10" >
                    <div className="text-2xl text-center mb-7">{edit ? 'Update Course' : 'Add Course'}</div>
                    <div className="space-y-5 mt-10">
                        <TextField label="Course Name" name="course" fullWidth />
                        <div className="flex justify-between">
                            <TextField
                                type="date"
                                name="startDate"
                                label="Start Date"
                                InputLabelProps={{ shrink: true }}
                            />
                            <TextField
                                type="date"
                                name="endDate"
                                label="End Date"
                                InputLabelProps={{ shrink: true }}
                            />
                        </div>
                        <Button variant="contained" fullWidth>Submit</Button>
                    </div>
                </div>

            </Modal>
        </div>
    )
}

export default Course
