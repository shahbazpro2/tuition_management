import express from 'express'
import Package from '../models/Package.js';
import checkInputs from '../utils/checkInputs.js';
import formateError from '../utils/formateError.js';
import formateRes from '../utils/formateRes.js';
const PackageRoute = express.Router();

const centerFields = ['name', 'subject', 'days', "amount", "status"]
PackageRoute.route('/package')
    .post(checkInputs(centerFields), async (_req, _res) => {
        const { days } = _req.body
        if (days > 7) {
            return _res.status(400).json(formateError("Days must be less then 7"))
        }
        try {
            const res = await Package.create(_req.body)
            return _res.status(201).json({ message: 'Package added successfully', data: res })
        } catch (error) {
            return _res.status(400).json(formateError(error, "Package already exist"))
        }
    })
    .get(async (_req, _res) => {
        const _id = _req.query?.id
        try {
            const res = await Package.findOne({ _id })
            return _res.status(200).json(formateRes("Package fetched successfully", res))
        } catch (error) {
            return _res.status(400).json(formateError(error))
        }
    })
    .put(checkInputs(centerFields), async (_req, _res) => {
        const _id = _req.query?.id
        try {
            const res = await Package.updateOne({ _id }, _req.body)
            return _res.status(200).json(formateRes("Package updated successfully", res))
        } catch (error) {
            return _res.status(400).json(formateError(error))
        }
    })
    .delete(async (_req, _res) => {
        const _id = _req.query?.id
        try {
            const res = await Package.deleteOne({ _id })
            return _res.status(200).json(formateRes("Package deleted successfully", res))
        } catch (error) {
            return _res.status(400).json(formateError(error))
        }
    })

PackageRoute.route('/package/all')
    .get(async (_req, _res) => {
        try {
            const res = await Package.find().sort('date')
            return _res.status(200).json(formateRes("Package fetched successfully", res))
        } catch (error) {
            return _res.status(400).json(formateError(error))
        }
    })


export default PackageRoute


