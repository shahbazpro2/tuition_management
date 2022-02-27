/* eslint-disable no-undef */
import { Button, Card, CardContent, TextField } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import TextFieldSimple from '../../common/textFields/TextFieldSimple';
import { url_hq } from 'utils/pageUrls'

const Login = () => {
    const navigate = useNavigate();
    const onSubmit = (e) => {
        e.preventDefault()
        navigate(url_hq)
    }

    return (
        <div className='mt-20 flex justify-center'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                <Card variant="outlined" className="text-center p-10">
                    <CardContent>
                        <div className="text-2xl font-bold">Login</div>
                        <div className="mt-10">
                            <form className='space-y-5' onSubmit={onSubmit}>
                                <TextFieldSimple
                                    label="Email"
                                />
                                <TextFieldSimple
                                    type="password"
                                    label="Password"
                                />
                                <Button type="submit" size="large" variant="contained" fullWidth>Login</Button>
                            </form>

                        </div>
                    </CardContent>
                </Card>
                <div>
                    <img src={process.env.PUBLIC_URL + '/assets/LoginPage.png'} />
                </div>

            </div>
        </div>
    )
}

export default Login
