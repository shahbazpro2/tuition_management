import express from 'express'
import CourseLanguage from '../models/CourseLanguage.js';
import checkInputs from '../utils/checkInputs.js';
import formateError from '../utils/formateError.js';
import formateRes from '../utils/formateRes.js';
const CourseLanguageRoute = express.Router();

const courseLanguageFields = ['name']
CourseLanguageRoute.route('/course-language')
    .post(checkInputs(courseLanguageFields), async (_req, _res) => {
        try {
            const res = await CourseLanguage.create(_req.body)
            return _res.status(201).json(formateRes('Course language added successfully', res))
        } catch (error) {
            return _res.status(400).json(formateError(error, "Course language already exist"))
        }
    })
    .get(async (_req, _res) => {
        try {
            const res = await CourseLanguage.find()
            return _res.status(200).json(formateRes('Course language fetched successfully', res))
        } catch (error) {
            return _res.status(400).json(formateError(error))
        }
    })


export default CourseLanguageRoute





