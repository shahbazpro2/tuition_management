import express from 'express'
import User from '../models/User.js';
import checkInputs from '../utils/checkInputs.js';
import formateError from '../utils/formateError.js';
const UserRoute = express.Router();


const registerFields = ['name', 'role', 'email', 'password']
UserRoute.route('/register').post(checkInputs(registerFields), async (_req, _res) => {
    try {
        const user = await User.create(_req.body)
        return _res.status(201).json({ message: 'User registered successfully', data: user })
    } catch (error) {
        return _res.status(400).json({ message: formateError(error, "User already exist") })
    }
})

const loginFields = ['email', 'password']
UserRoute.route('/login').post(checkInputs(loginFields), async (_req, _res) => {
    const { email, password } = _req.body
    try {
        const user = await User.findOne({ email, password })
        if (!user) return _res.status(404).json({ message: 'User does not exist' })

        return _res.status(200).json({ message: 'Logged in successfully', data: user })

    } catch (error) {
        console.log(error.message)
    }
})


export default UserRoute





