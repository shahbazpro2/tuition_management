import express from 'express'
import Pic from '../models/Pic.js';
import checkInputs from '../utils/checkInputs.js';
import formateError from '../utils/formateError.js';
const PicRoute = express.Router();

const picnameFields = ['name', 'contactNumber']
PicRoute.route('/pic')
    .post(checkInputs(picnameFields), async (_req, _res) => {
        try {
            const res = await Pic.create(_req.body)
            return _res.status(201).json({ message: 'Pic added successfully', data: res })
        } catch (error) {
            return _res.status(400).json({ message: formateError(error, "Pic already exist") })
        }
    })
    .get(async (_req, _res) => {
        try {
            const res = await Pic.find()
            return _res.status(200).json({ message: 'Pic fetched successfully', data: res })
        } catch (error) {
            return _res.status(400).json({ message: formateError(error) })
        }
    })


export default PicRoute





