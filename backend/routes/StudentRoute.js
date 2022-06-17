import express from 'express'
import Student from '../models/Student.js';
import Course from '../models/Course.js';
import checkInputs from '../utils/checkInputs.js';
import formateError from '../utils/formateError.js';
import formateRes from '../utils/formateRes.js';
import StudentInvoice from '../models/StudentInvoice.js';
const StudentRoute = express.Router();

const fields = ['name', 'gender', "religion", "address", "contact", "emergencyContact", "fatherName", "motherName", "package", "courses", "health", "language"]
StudentRoute.route('/student')
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

StudentRoute.route('/student/courses/')
    .get(async (_req, _res) => {
        try {
            const res = await Student.distinct('courses')
            const res1 = await Course.find({ _id: { $in: res } }).populate(['language'])
            return _res.status(200).json(formateRes("Courses fetched successfully", res1))
        } catch (error) {
            return _res.status(400).json(formateError(error))
        }
    })

StudentRoute.route('/student/courses/:id')
    .get(async (_req, _res) => {
        const _id = _req.params.id
        try {
            const res = await Student.find({ courses: _id }).populate(['courses'])
            return _res.status(200).json(formateRes("Student fetched successfully", res))
        } catch (error) {
            return _res.status(400).json(formateError(error))
        }
    })

StudentRoute.route('/student/all')
    .get(async (_req, _res) => {
        const date = _req.query?.date
        console.log('date', date)
        try {
            const res = await Student.aggregate([

                {

                    $lookup: {
                        from: 'studentinvoices',

                        let: { id: '$_id' },
                        as: 'invoices',
                        pipeline: [
                            {
                                $match: {
                                    $expr: {
                                        $and: [
                                            { $eq: ['$student', '$$id'] },
                                            { $eq: ['$invoiceDate', date] },
                                        ]
                                    }
                                },

                            },

                        ]
                    }

                }])

            const endRes = await Student.populate(res, ['package'])
            return _res.status(200).json(formateRes("Student fetched successfully", endRes))
        } catch (error) {
            return _res.status(400).json(formateError(error))
        }
    })

StudentRoute.route('/student/invoices/all')
    .get(async (_req, _res) => {
        try {
            const res = await Student.find().populate(['package']).sort('date')
            return _res.status(200).json(formateRes("Student fetched successfully", res))
        } catch (error) {
            return _res.status(400).json(formateError(error))
        }
    })



export default StudentRoute


