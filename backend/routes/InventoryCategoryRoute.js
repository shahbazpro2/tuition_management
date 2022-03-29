import express from 'express'
import InventoryCategory from '../models/InventoryCategory.js';
import checkInputs from '../utils/checkInputs.js';
import formateError from '../utils/formateError.js';
import formateRes from '../utils/formateRes.js';
const InventoryCategoryRoute = express.Router();

const bankFields = ['name']
InventoryCategoryRoute.route('/inventory/category')
    .post(checkInputs(bankFields), async (_req, _res) => {
        try {
            const res = await InventoryCategory.create(_req.body)
            return _res.status(201).json(formateRes('Category added successfully', res))
        } catch (error) {
            return _res.status(400).json(formateError(error, "Category already exist"))
        }
    })
    .get(async (_req, _res) => {
        try {
            const res = await InventoryCategory.find()
            return _res.status(200).json(formateRes('Category fetched successfully', res))
        } catch (error) {
            return _res.status(400).json(formateError(error))
        }
    })


export default InventoryCategoryRoute





