import express from 'express'
import Bank from '../models/Bank.js';
import CourseType from '../models/CourseType.js';
import Kpi from '../models/Kpi.js';
import Pic from '../models/Pic.js';
import formateError from '../utils/formateError.js';
import formateRes from '../utils/formateRes.js';
const EnumsRoute = express.Router();


EnumsRoute.route('/enums')
    .get(async (_req, _res) => {
        try {
            const pic = Pic.find()
            const bank = Bank.find()
            const kpi = Kpi.find()
            const courseType = CourseType.find()

            Promise.all([pic, bank, kpi, courseType]).then((values) => {
                return _res.status(200).json(formateRes('Enums fetched successfully', { pic: values[0], bank: values[1], kpi: values[2], courseType: values[3] }))
            });

        } catch (error) {
            return _res.status(400).json(formateError(error))
        }
    })


export default EnumsRoute





