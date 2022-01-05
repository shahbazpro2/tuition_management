import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom'
import { url_registerStudent } from '../../functions/pageUrls';
import StudentList from './StudentList';
import { Button, Modal, TextField } from '@mui/material';


const Student = () => {
    const navigate = useNavigate()
    const [open, setOpen] = useState(false)
    return (
        <div className='mt-7'>
            <div className="flex space-x-1 items-center text-xl font-bold cursor-pointer" onClick={() => navigate(url_registerStudent)}>
                <AddIcon fontSize="inherit" />
                <div >Register Student</div>
            </div>
            <div className="mt-10">
                <StudentList setOpen={setOpen} />
            </div>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
            >
                <div className="w-[95%] md:w-[500px] h-[65%]  overflow-auto absolute rltb-0 m-rltb-auto bg-white rounded-lg p-10" >
                    <div className="text-2xl text-center mb-7">Temp/Stop Student</div>
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
                    <div className="mt-5 mb-5">
                        <TextField multiline rows={4} label="Reason" name="reason" fullWidth InputLabelProps={{ shrink: true }} />
                    </div>
                    <Button variant="contained" fullWidth>Submit</Button>
                </div>

            </Modal>
        </div>
    )
}

export default Student
