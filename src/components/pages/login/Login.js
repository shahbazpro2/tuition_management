import { Button, Card, CardContent, TextField } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { url_hq } from '../../functions/pageUrls'

const Login = () => {
    const navigate = useNavigate();
    const onSubmit = (e) => {
        e.preventDefault()
        navigate(url_hq)
    }

    return (
        <div className='mt-20 flex justify-center'>
            <Card variant="outlined" className="w-[500px] text-center p-10">
                <CardContent>
                    <div className="text-2xl font-bold">Login</div>
                    <div className="mt-10">
                        <form className='space-y-5' onSubmit={onSubmit}>
                            <TextField
                                variant="outlined"
                                label="Email"
                                name="email"
                                type="email"
                                fullWidth
                            />
                            <TextField
                                variant="outlined"
                                label="Password"
                                name="password"
                                type="password"
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
