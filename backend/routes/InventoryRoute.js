import express from 'express'
import Inventory from '../models/Inventory.js';
import checkInputs from '../utils/checkInputs.js';
import formateError from '../utils/formateError.js';
import formateRes from '../utils/formateRes.js';
const InventoryRoute = express.Router();

const inventoryFields = ['category', 'description', "qty", "status"]
InventoryRoute.route('/inventory')
    .post(checkInputs(inventoryFields), async (_req, _res) => {
        try {
            const res = await Inventory.create(_req.body)
            return _res.status(201).json({ message: 'Inventory added successfully', data: res })
        } catch (error) {
            return _res.status(400).json(formateError(error, "Inventory already exist"))
        }
    })
    .get(async (_req, _res) => {
        const _id = _req.query?.id
        try {
            const res = await Inventory.findOne({ _id })
            return _res.status(200).json(formateRes("Inventory fetched successfully", res))
        } catch (error) {
            return _res.status(400).json(formateError(error))
        }
    })
    .put(async (_req, _res) => {
        const _id = _req.query?.id
        try {
            const res = await Inventory.updateOne({ _id }, _req.body)
            return _res.status(200).json(formateRes("Inventory updated successfully", res))
        } catch (error) {
            return _res.status(400).json(formateError(error))
        }
    })
    .delete(async (_req, _res) => {
        const _id = _req.query?.id
        try {
            const res = await Inventory.deleteOne({ _id })
            return _res.status(200).json(formateRes("Inventory deleted successfully", res))
        } catch (error) {
            return _res.status(400).json(formateError(error))
        }
    })

InventoryRoute.route('/inventory/all')
    .get(async (_req, _res) => {
        try {
            const res = await Inventory.find().populate(["category"]).sort('date')
            return _res.status(200).json(formateRes("Inventory fetched successfully", res))
        } catch (error) {
            return _res.status(400).json(formateError(error))
        }
    })


export default InventoryRoute





