import express from 'express'
import Course from '../models/Course.js';
import checkInputs from '../utils/checkInputs.js';
import formateError from '../utils/formateError.js';
import formateRes from '../utils/formateRes.js';
const CourseRoute = express.Router();

const courseFields = ['type', 'language', "description", "status"]
CourseRoute.route('/course')
    .post(checkInputs(courseFields), async (_req, _res) => {
        try {
            const res = await Course.create(_req.body)
            return _res.status(201).json(formateRes('Course added successfully', res))
        } catch (error) {
            return _res.status(400).json(formateError(error, "Course already exist"))
        }
    })
    .get(async (_req, _res) => {
        const _id = _req.query?.id
        try {
            const res = await Course.findOne({ _id })
            return _res.status(200).json(formateRes("Course fetched successfully", res))
        } catch (error) {
            return _res.status(400).json(formateError(error))
        }
    })
    .put(async (_req, _res) => {
        const _id = _req.query?.id
        try {
            const res = await Course.updateOne({ _id }, _req.body)
            return _res.status(200).json(formateRes("Course updated successfully", res))
        } catch (error) {
            return _res.status(400).json(formateError(error))
        }
    })
    .delete(async (_req, _res) => {
        const _id = _req.query?.id
        try {
            const res = await Course.deleteOne({ _id })
            return _res.status(200).json(formateRes("Course deleted successfully", res))
        } catch (error) {
            return _res.status(400).json(formateError(error))
        }
    })

CourseRoute.route('/course/all')
    .get(async (_req, _res) => {
        try {
            const res = await Course.find().populate(["pic"]).sort('date')
            return _res.status(200).json(formateRes("Course fetched successfully", res))
        } catch (error) {
            return _res.status(400).json(formateError(error))
        }
    })


export default CourseRoute





