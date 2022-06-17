import express from 'express'
import Attendance from '../models/Attendance.js';
import checkInputs from '../utils/checkInputs.js';
import formateError from '../utils/formateError.js';
import formateRes from '../utils/formateRes.js';
const AttendanceRoute = express.Router();

const fields = ['course', 'students', 'date']
AttendanceRoute.route('/attendence')
    .post(checkInputs(fields), async (_req, _res) => {
        try {
            const res = await Attendance.findOneAndUpdate({ date: _req.body.date }, { $set: _req.body }, { upsert: true, new: true })
            if (!res) throw "Request failed"
            return _res.status(201).json({ message: 'Request successful', data: res })
        } catch (error) {
            return _res.status(400).json(formateError(error, "There is some error"))
        }
    })
    .get(async (_req, _res) => {
        const _id = _req.query?.id
        try {
            const res = await Attendance.findOne({ _id })
            return _res.status(200).json(formateRes("Fetched successfully", res))
        } catch (error) {
            return _res.status(400).json(formateError(error))
        }
    })


export default AttendanceRoute


