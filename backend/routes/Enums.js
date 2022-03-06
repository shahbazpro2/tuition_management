import express from 'express'
import Bank from '../models/Bank.js';
import Kpi from '../models/Kpi.js';
import Pic from '../models/Pic.js';
import formateError from '../utils/formateError.js';
const Enums = express.Router();


Enums.route('/enums')
    .get(async (_req, _res) => {
        try {
            const pic = await Pic.find()
            const bank = await Bank.find()
            const kpi = await Kpi.find()
            return _res.status(200).json({ message: 'Enums fetched successfully', data: { pic, bank, kpi } })
        } catch (error) {
            return _res.status(400).json({ message: formateError(error) })
        }
    })


export default Enums





