/* eslint-disable no-undef */
import { Button, Card, CardContent } from '@mui/material'
import React, { useContext } from 'react'
import { useState } from 'react';
import { loginUserApi } from 'api/auth';
import { FeedbackContext } from 'context/FeedbackContext';
import TextFieldSimple from 'components/common/textFields/TextFieldSimple';
import { url_hq } from 'utils/pageUrls';

const Login = () => {
    const context = useContext(FeedbackContext)
    const [state, setState] = useState({ email: '', password: "" })

    const onChangeInput = (e) => {
        const { name, value } = e.target
        setState({ ...state, [name]: value })
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        const res = await loginUserApi(state)
        context.setFeedback(res.message, res.error)
        if (!res.error) {
            localStorage.setItem("x-access-token", res.data.token)
            window.location.replace(url_hq)
            return
        }


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
                                    name="email"
                                    type="email"
                                    required
                                    onChange={onChangeInput}
                                />
                                <TextFieldSimple
                                    type="password"
                                    label="Password"
                                    name="password"
                                    required
                                    onChange={onChangeInput}
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
