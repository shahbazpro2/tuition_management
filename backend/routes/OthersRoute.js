import express from 'express'
import Others from '../models/Others.js';
import checkInputs from '../utils/checkInputs.js';
import formateError from '../utils/formateError.js';
import formateRes from '../utils/formateRes.js';
const OthersRoute = express.Router();

const otherFields = ['name', 'description', 'discount', "status"]
OthersRoute.route('/others')
    .post(checkInputs(otherFields), async (_req, _res) => {
        try {
            const res = await Others.create(_req.body)
            return _res.status(201).json({ message: 'Others added successfully', data: res })
        } catch (error) {
            return _res.status(400).json(formateError(error, "Others already exist"))
        }
    })
    .get(async (_req, _res) => {
        const _id = _req.query?.id
        try {
            const res = await Others.findOne({ _id })
            return _res.status(200).json(formateRes("Others fetched successfully", res))
        } catch (error) {
            return _res.status(400).json(formateError(error))
        }
    })
    .put(async (_req, _res) => {
        const _id = _req.query?.id
        try {
            const res = await Others.updateOne({ _id }, _req.body)
            return _res.status(200).json(formateRes("Others updated successfully", res))
        } catch (error) {
            return _res.status(400).json(formateError(error))
        }
    })
    .delete(async (_req, _res) => {
        const _id = _req.query?.id
        try {
            const res = await Others.deleteOne({ _id })
            return _res.status(200).json(formateRes("Others deleted successfully", res))
        } catch (error) {
            return _res.status(400).json(formateError(error))
        }
    })

OthersRoute.route('/others/all')
    .get(async (_req, _res) => {
        try {
            const res = await Others.find().sort('date')
            return _res.status(200).json(formateRes("Others fetched successfully", res))
        } catch (error) {
            return _res.status(400).json(formateError(error))
        }
    })


export default OthersRoute


