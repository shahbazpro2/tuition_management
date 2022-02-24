import express from 'express'
import Bank from '../models/Bank.js';
import checkInputs from '../utils/checkInputs.js';
import formateError from '../utils/formateError.js';
const BankRoute = express.Router();

const bankFields = ['name', 'accountNumber']
BankRoute.route('/bank')
    .post(checkInputs(bankFields), async (_req, _res) => {
        try {
            const res = await Bank.create(_req.body)
            return _res.status(201).json({ message: 'Bank added successfully', data: res })
        } catch (error) {
            return _res.status(400).json({ message: formateError(error, "Bank already exist") })
        }
    })
    .get(async (_req, _res) => {
        try {
            const res = await Bank.find()
            return _res.status(200).json({ message: 'Bank fetched successfully', data: res })
        } catch (error) {
            return _res.status(400).json({ message: formateError(error) })
        }
    })


export default BankRoute





