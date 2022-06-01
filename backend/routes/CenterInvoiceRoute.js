import express from 'express'
import CenterInvoice from '../models/CenterInvoice.js';
import checkInputs from '../utils/checkInputs.js';
import emptyToNull from '../utils/emptyToNull.js';
import formateError from '../utils/formateError.js';
import formateRes from '../utils/formateRes.js';
const CenterInvoiceRoute = express.Router();

const fields = ['date']
CenterInvoiceRoute.route('/center/invoice')
    .post(checkInputs(fields), async (_req, _res) => {
        try {
            const data = emptyToNull(_req.body)
            const payload = {
                invoiceDate: data.date,
                center: data.center,
                inventory_id: data.inventory_id,
                discount: data.discount
            }
            const res = await CenterInvoice.create(payload)
            return _res.status(201).json({ message: 'Invoice created successfully', data: res })
        } catch (error) {
            return _res.status(400).json(formateError(error, "Invoice created failed"))
        }
    })
    .get(async (_req, _res) => {
        const _id = _req.query?.id
        try {
            const res = await CenterInvoice.findOne({ center: _id }).populate([
                "center", "inventory_id", "discount"

            ]).sort({ createdAt: -1 })
            return _res.status(200).json(formateRes("Invoice fetched successfully", res))
        } catch (error) {
            return _res.status(400).json(formateError(error))
        }
    })
    .put(async (_req, _res) => {
        const _id = _req.query?.id
        try {
            const res = await CenterInvoice.updateOne({ _id }, _req.body)
            return _res.status(200).json(formateRes("Invoice updated successfully", res))
        } catch (error) {
            return _res.status(400).json(formateError(error))
        }
    })


CenterInvoiceRoute.route('/center/invoice/all')
    .get(async (_req, _res) => {
        try {
            const res = await CenterInvoice.find().sort({ createdAt: -1 })
            return _res.status(200).json(formateRes("Invoice fetched successfully", res))
        } catch (error) {
            return _res.status(400).json(formateError(error))
        }
    })

CenterInvoiceRoute.route('/center/invoice/center/')
    .get(async (_req, _res) => {
        const centerId = _req.query?.id
        try {
            const res = await CenterInvoice.find({ center: centerId }).sort({ createdAt: -1 })
            return _res.status(200).json(formateRes("Invoice fetched successfully", res))
        } catch (error) {
            return _res.status(400).json(formateError(error))
        }
    })


export default CenterInvoiceRoute


