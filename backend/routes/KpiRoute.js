import express from 'express'
import Kpi from '../models/Kpi.js';
import checkInputs from '../utils/checkInputs.js';
import formateError from '../utils/formateError.js';
import formateRes from '../utils/formateRes.js';
const KpiRoute = express.Router();

const kpiFields = ['name', 'amt']
KpiRoute.route('/kpi')
    .post(checkInputs(kpiFields), async (_req, _res) => {
        try {
            const res = await Kpi.create(_req.body)
            return _res.status(201).json(formateRes('Kpi added successfully', res))
        } catch (error) {
            return _res.status(400).json(formateError(error, "Kpi already exist"))
        }
    })
    .get(async (_req, _res) => {
        try {
            const res = await Kpi.find()
            return _res.status(200).json(formateRes('Kpi fetched successfully', res))
        } catch (error) {
            return _res.status(400).json(formateError(error))
        }
    })


export default KpiRoute





