import express from 'express'
import Center from '../models/Center.js';
import checkInputs from '../utils/checkInputs.js';
import formateError from '../utils/formateError.js';
const CenterRoute = express.Router();

const centerFields = ['name', 'address', "regNumber", "pic", "bank", "officeNumber", "kpi"]
CenterRoute.route('/center')
    .post(checkInputs(centerFields), async (_req, _res) => {
        try {
            const res = await Center.create(_req.body)
            return _res.status(201).json({ message: 'Center added successfully', data: res })
        } catch (error) {
            return _res.status(400).json({ message: formateError(error, "Center already exist") })
        }
    })
    .get(async (_req, _res) => {
        try {
            const res = await Center.find()
            return _res.status(200).json({ message: 'Center fetched successfully', data: res })
        } catch (error) {
            return _res.status(400).json({ message: formateError(error) })
        }
    })

CenterRoute.route('/center/all')
    .get(async (_req, _res) => {
        try {
            const res = await Center.find()
            return _res.status(200).json({ message: 'Center fetched successfully', data: res })
        } catch (error) {
            return _res.status(400).json({ message: formateError(error) })
        }
    })


export default CenterRoute





