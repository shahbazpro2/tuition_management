/* eslint-disable no-undef */
import express from 'express'
import User from '../models/User.js';
import checkInputs from '../utils/checkInputs.js';
import formateError from '../utils/formateError.js';
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken';
import formateRes from '../utils/formateRes.js'
import accessApi from '../middlewares/AccessApi.js';
const UserRoute = express.Router();


const registerFields = ['name', 'role', 'email', 'password']
UserRoute.route('/register')
    .post(accessApi(), checkInputs(registerFields), async (_req, _res) => {
        try {
            const hashedPassword = bcrypt.hashSync(_req.body.password, 8);
            const res = await User.create({ ..._req.body, password: hashedPassword })
            var token = jwt.sign({ id: res._id }, process.env.secret);
            const data = { ...res._doc, token }
            delete data.password
            return _res.status(201).json(formateRes('User registered successfully', data))
        } catch (error) {
            if (['MongooseError', 'MongoServerError'].includes(error?.name))
                return _res.status(400).json(formateError(error, "User already exist"))
            return _res.status(500).json(formateError("There is something wrong"))
        }
    })

UserRoute.route('/')
    .get(async (_req, _res) => {
        try {
            const _id = _req.query?.id
            console.log('id', _id)
            const res = await User.findOne({ _id })
            return _res.status(200).json(formateRes("User fetched successfully", res))
        } catch (error) {
            return _res.status(400).json(formateError(error))
        }
    })
    .put(async (_req, _res) => {
        const _id = _req.query?.id
        try {
            const res = await User.updateOne({ _id }, _req.body)
            return _res.status(200).json(formateRes("User updated successfully", res))
        } catch (error) {
            return _res.status(400).json(formateError(error))
        }
    })
    .delete(async (_req, _res) => {
        const _id = _req.query?.id
        try {
            const res = await User.deleteOne({ _id })
            return _res.status(200).json(formateRes("User deleted successfully", res))
        } catch (error) {
            return _res.status(400).json(formateError(error))
        }
    })

const loginFields = ['email', 'password']
UserRoute.route('/login').post(checkInputs(loginFields), async (_req, _res) => {
    const { email, password } = _req.body
    try {
        const res = await User.findOne({ email }).select('+password')
        if (!res) return _res.status(401).json(formateError("Email or password is invalid"))
        var passwordIsValid = bcrypt.compareSync(password, res.password);
        if (!passwordIsValid) return _res.status(401).json(formateError('Email or password is invalid'));
        var token = jwt.sign({ id: res._id }, process.env.secret);
        const data = { ...res._doc, token }
        delete data.password
        return _res.status(200).json(formateRes("Logged in successfully", data))

    } catch (error) {
        return _res.status(500).send(formateError("There is something wrong"))
    }
})

UserRoute.route('/me').get(async (_req, _res) => {
    try {
        var token = _req.headers['x-access-token'];
        if (!token) return _res.status(401).send(formateError("No token provided."))

        jwt.verify(token, process.env.secret, async (err, decoded) => {
            if (err) return _res.status(500).send(formateError("Failed to authenticate token."))

            const res = await User.findOne({ _id: decoded.id })

            return _res.status(200).send({ data: res })
        });

    } catch (error) {
        return _res.status(500).send(formateError("There is something wrong"))
    }
})


UserRoute.route('/all').get(async (_req, _res) => {
    try {
        var token = _req.headers['x-access-token'];
        if (!token) return _res.status(401).send(formateError("No token provided."))

        jwt.verify(token, process.env.secret, async (err, decoded) => {
            if (err) return _res.status(401).send(formateError("Failed to authenticate token."))

            const res = await User.find()

            return _res.status(200).send(formateRes(null, res))
        });

    } catch (error) {
        return _res.status(500).send(formateError("There is something wrong"))
    }
})


export default UserRoute





