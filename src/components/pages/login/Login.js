import { Button, Card, CardContent, TextField } from '@mui/material'
import React from 'react'

const Login = () => {
    return (
        <div className='mt-20 flex justify-center'>
            <Card variant="outlined" className="w-[500px] text-center p-10">
                <CardContent>
                    <div className="text-2xl font-bold">Login</div>
                    <div className="mt-10">
                        <form className='space-y-5'>
                            <TextField
                                variant="outlined"
                                label="Email"
                                name="email"
                                type="email"
                                required
                                fullWidth
                            />
                            <TextField
                                variant="outlined"
                                label="Password"
                                name="password"
                                type="password"
                                required
                                fullWidth
                            />
                            <Button type="submit" variant="contained" fullWidth>Login</Button>
                        </form>

                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default Login
