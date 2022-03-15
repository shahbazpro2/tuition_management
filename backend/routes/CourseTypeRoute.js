import express from 'express'
import CourseType from '../models/CourseType.js';
import checkInputs from '../utils/checkInputs.js';
import formateError from '../utils/formateError.js';
import formateRes from '../utils/formateRes.js';
const CourseTypeRoute = express.Router();

const courseTypeFields = ['name']
CourseTypeRoute.route('/course-type')
    .post(checkInputs(courseTypeFields), async (_req, _res) => {
        try {
            const res = await CourseType.create(_req.body)
            return _res.status(201).json(formateRes('Course type added successfully', res))
        } catch (error) {
            return _res.status(400).json(formateError(error, "Course type already exist"))
        }
    })
    .get(async (_req, _res) => {
        try {
            const res = await CourseType.find()
            return _res.status(200).json(formateRes('Course type fetched successfully', res))
        } catch (error) {
            return _res.status(400).json(formateError(error))
        }
    })


export default CourseTypeRoute





