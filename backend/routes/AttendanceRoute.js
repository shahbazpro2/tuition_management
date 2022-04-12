import express from 'express'
import Student from '../models/Student.js';
import checkInputs from '../utils/checkInputs.js';
import formateError from '../utils/formateError.js';
import formateRes from '../utils/formateRes.js';
const AttendanceRoute = express.Router();

const fields = ['name', 'gender', "religion", "address", "contact", "emergencyContact", "fatherName", "motherName", "package", "courses", "health", "language"]
AttendanceRoute.route('/attendence')
    .post(checkInputs(fields), async (_req, _res) => {
        try {
            const res = await Student.create(_req.body)
            return _res.status(201).json({ message: 'Student created successfully', data: res })
        } catch (error) {
            return _res.status(400).json(formateError(error, "Student already exist"))
        }
    })
    .get(async (_req, _res) => {
        const _id = _req.query?.id
        try {
            const res = await Student.findOne({ _id })
            return _res.status(200).json(formateRes("Student fetched successfully", res))
        } catch (error) {
            return _res.status(400).json(formateError(error))
        }
    })
    .put(async (_req, _res) => {
        const _id = _req.query?.id
        try {
            const res = await Student.updateOne({ _id }, _req.body)
            return _res.status(200).json(formateRes("Student updated successfully", res))
        } catch (error) {
            return _res.status(400).json(formateError(error))
        }
    })
    .delete(async (_req, _res) => {
        const _id = _req.query?.id
        try {
            const res = await Student.deleteOne({ _id })
            return _res.status(200).json(formateRes("Student deleted successfully", res))
        } catch (error) {
            return _res.status(400).json(formateError(error))
        }
    })

AttendanceRoute.route('/attendence/course/:id').get(async (_req, _res) => {
    const _id = _req.params.id
    try {
        const res = await Student.find({ courses: _id }).populate(['package'])
        return _res.status(200).json(formateRes("Student fetched successfully", res))
    } catch (error) {
        return _res.status(400).json(formateError(error))
    }
})

AttendanceRoute.route('/attendence/all')
    .get(async (_req, _res) => {
        try {
            const res = await Student.find().populate(['package']).sort('date')
            return _res.status(200).json(formateRes("Student fetched successfully", res))
        } catch (error) {
            return _res.status(400).json(formateError(error))
        }
    })


export default AttendanceRoute


