import { Button, Card, CardContent, TextField } from '@mui/material'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { url_editStudent } from '../../functions/pageUrls';

const StudentInput = () => {
    const navigate = useNavigate();
    const location = useLocation()
    const update = location.pathname === url_editStudent
    const onSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <div className='mt-7 flex justify-center'>
            <Card variant="outlined" className="w-[500px] text-center p-7">
                <CardContent>
                    <div className="text-2xl font-bold">{update ? 'Update Student' : 'Register Student'}</div>
                    <div className="mt-10">
                        <form className='space-y-5' onSubmit={onSubmit}>
                            <TextField
                                variant="outlined"
                                label="Id"
                                name="id"
                                fullWidth
                            />
                            <TextField
                                variant="outlined"
                                label="Name"
                                name="name"
                                fullWidth
                            />
                            <TextField
                                variant="outlined"
                                label="Age"
                                name="age"
                                fullWidth
                            />
                            <TextField
                                variant="outlined"
                                label="Parent Name"
                                name="parent"
                                fullWidth
                            />
                            <TextField
                                variant="outlined"
                                label="Address"
                                name="address"
                                fullWidth
                            />
                            <TextField
                                variant="outlined"
                                label="Emergency Contact"
                                name="contact"
                                fullWidth
                            />
                            <TextField
                                variant="outlined"
                                label="Subject"
                                name="subject"
                                fullWidth
                            />
                            <Button type="submit" variant="contained" fullWidth>Submit</Button>
                        </form>

                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default StudentInput
