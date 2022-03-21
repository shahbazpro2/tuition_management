import express from 'express'
import Discount from '../models/Discount.js';
import checkInputs from '../utils/checkInputs.js';
import formateError from '../utils/formateError.js';
import formateRes from '../utils/formateRes.js';
const DiscountRoute = express.Router();

const centerFields = ['description', 'discount', "status"]
DiscountRoute.route('/discount')
    .post(checkInputs(centerFields), async (_req, _res) => {
        try {
            const res = await Discount.create(_req.body)
            return _res.status(201).json({ message: 'Discount added successfully', data: res })
        } catch (error) {
            return _res.status(400).json(formateError(error, "Discount already exist"))
        }
    })
    .get(async (_req, _res) => {
        const _id = _req.query?.id
        try {
            const res = await Discount.findOne({ _id })
            return _res.status(200).json(formateRes("Discount fetched successfully", res))
        } catch (error) {
            return _res.status(400).json(formateError(error))
        }
    })
    .put(async (_req, _res) => {
        const _id = _req.query?.id
        try {
            const res = await Discount.updateOne({ _id }, _req.body)
            return _res.status(200).json(formateRes("Discount updated successfully", res))
        } catch (error) {
            return _res.status(400).json(formateError(error))
        }
    })
    .delete(async (_req, _res) => {
        const _id = _req.query?.id
        try {
            const res = await Discount.deleteOne({ _id })
            return _res.status(200).json(formateRes("Discount deleted successfully", res))
        } catch (error) {
            return _res.status(400).json(formateError(error))
        }
    })

DiscountRoute.route('/discount/all')
    .get(async (_req, _res) => {
        try {
            const res = await Discount.find().sort('date')
            return _res.status(200).json(formateRes("Discount fetched successfully", res))
        } catch (error) {
            return _res.status(400).json(formateError(error))
        }
    })


export default DiscountRoute


