import express from 'express'
import Bank from '../models/Bank.js';
import Center from '../models/Center.js';
import checkInputs from '../utils/checkInputs.js';
import formateError from '../utils/formateError.js';
import formateRes from '../utils/formateRes.js';
const BankRoute = express.Router();

const bankFields = ['name', 'accountNumber']
BankRoute.route('/bank')
    .post(checkInputs(bankFields), async (_req, _res) => {
        try {
            const res = await Bank.create(_req.body)
            return _res.status(201).json(formateRes('Bank added successfully', res))
        } catch (error) {
            return _res.status(400).json(formateError(error, "Bank already exist"))
        }
    })
    .get(async (_req, _res) => {
        try {
            const res = await Bank.find()
            return _res.status(200).json(formateRes('Bank fetched successfully', res))
        } catch (error) {
            return _res.status(400).json(formateError(error))
        }
    })
    .put(checkInputs(bankFields), async (_req, _res) => {
        const _id = _req.query?.id
        try {
            const res = await Bank.updateOne({ _id }, _req.body)
            return _res.status(200).json(formateRes("Bank updated successfully", res))
        } catch (error) {
            return _res.status(400).json(formateError(error))
        }
    })
    .delete(async (_req, _res) => {
        const _id = _req.query?.id
        try {
            const isCenterExist = await Center.findOne({ bank: _id })
            if (isCenterExist) {
                return _res.status(400).json(formateError("Bank is assigned to center"))
            }
            const res = await Bank.deleteOne({ _id })
            return _res.status(200).json(formateRes("Bank deleted successfully", res))
        } catch (error) {
            return _res.status(400).json(formateError(error))
        }
    })


export default BankRoute





