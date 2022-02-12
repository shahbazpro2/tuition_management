import { Button, Card, CardContent, MenuItem, TextField } from '@mui/material'
import React from 'react'

const TopSecton = () => {
    return (
        <div>
            <Card variant='outlined'>
                <CardContent>
                    <div className='w-[700px] p-5'>
                        <form className='space-y-5'>
                            <TextField
                                variant="outlined"
                                label="Student"
                                select
                                shrink={true}
                                fullWidth
                            >
                                <MenuItem>...</MenuItem>
                            </TextField>
                            <TextField
                                variant="outlined"
                                type="date"
                                label="Date From"
                                fullWidth
                                shrink={true}
                            />
                            <TextField
                                variant="outlined"
                                type="date"
                                label="Date To"
                                fullWidth
                                shrink={true}
                            />
                            <Button variant="contained">View Attendence</Button>

                        </form>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default TopSecton
