import express from 'express'
import checkInputs from '../utils/checkInputs.js';
import formateError from '../utils/formateError.js';
import formateRes from '../utils/formateRes.js';
import RequestHq from '../models/RequestHq.js';
const RequestHqRoute = express.Router();

const fields = ['centerId', "inventories"]
RequestHqRoute.route('/request/hq')
    .post(checkInputs(fields), async (_req, _res) => {
        try {
            const res = await RequestHq.findOneAndUpdate({ centerId: _req.body.centerId }, { $set: _req.body }, { upsert: true, new: true })
            if (!res) throw "Request failed"
            return _res.status(201).json({ message: 'Request successful', data: res })
        } catch (error) {
            return _res.status(400).json(formateError(error, "Bad request"))
        }
    })
    .get(async (_req, _res) => {
        const _id = _req.query?.id
        try {
            const res = await RequestHq.findOne({ centerId: _id })
            return _res.status(200).json(formateRes("fetched successfully", res))
        } catch (error) {
            return _res.status(400).json(formateError(error))
        }
    })



export default RequestHqRoute


