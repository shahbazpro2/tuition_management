import express from 'express'
import Invoice from '../models/StudentInvoice.js';
import checkInputs from '../utils/checkInputs.js';
import emptyToNull from '../utils/emptyToNull.js';
import formateError from '../utils/formateError.js';
import formateRes from '../utils/formateRes.js';
const StudentInvoiceRoute = express.Router();

const otherFields = ['date']
StudentInvoiceRoute.route('/student/invoice')
    .post(checkInputs(otherFields), async (_req, _res) => {
        try {
            const data = emptyToNull(_req.body)
            const payload = {
                invoiceDate: data.date,
                student: data.student,
                package_qty: data.package_id ? data.package_qty : null,
                package_id: data.package_id,
                inventory_qty: data.inventory_id ? data.inventory_qty : null,
                inventory_id: data.inventory_id,
                other_qty: data.other_id ? data.other_qty : null,
                other_id: data.other_id,
                discount: data.discount

            }
            const res = await Invoice.create(payload)
            return _res.status(201).json({ message: 'Invoice added successfully', data: res })
        } catch (error) {
            return _res.status(400).json(formateError(error, "Invoice already exist"))
        }
    })
    .get(async (_req, _res) => {
        const _id = _req.query?.id
        try {
            const res = await Invoice.findOne({ student: _id }).populate([{
                path: 'student',
                populate: {
                    path: 'package',
                }
            },
            {
                path: 'discount'
            },
            {
                path: 'package_id',
            },
            {
                path: 'inventory_id',
            },
            {
                path: 'other_id',
            }

            ]).sort({ createdAt: -1 })
            return _res.status(200).json(formateRes("Invoice fetched successfully", res))
        } catch (error) {
            return _res.status(400).json(formateError(error))
        }
    })
    .put(async (_req, _res) => {
        const _id = _req.query?.id
        try {
            const res = await Invoice.updateOne({ _id }, _req.body)
            return _res.status(200).json(formateRes("Invoice updated successfully", res))
        } catch (error) {
            return _res.status(400).json(formateError(error))
        }
    })
    .delete(async (_req, _res) => {
        const _id = _req.query?.id
        try {
            const res = await Invoice.deleteOne({ _id })
            return _res.status(200).json(formateRes("Invoice deleted successfully", res))
        } catch (error) {
            return _res.status(400).json(formateError(error))
        }
    })

StudentInvoiceRoute.route('/student/invoice/all')
    .get(async (_req, _res) => {
        try {
            const res = await Invoice.find().sort({ createdAt: -1 })
            return _res.status(200).json(formateRes("Invoice fetched successfully", res))
        } catch (error) {
            return _res.status(400).json(formateError(error))
        }
    })

StudentInvoiceRoute.route('/student/invoice/student/')
    .get(async (_req, _res) => {
        const studentId = _req.query?.id
        try {
            const res = await Invoice.find({ student: studentId }).sort({ createdAt: -1 })
            return _res.status(200).json(formateRes("Invoice fetched successfully", res))
        } catch (error) {
            return _res.status(400).json(formateError(error))
        }
    })


export default StudentInvoiceRoute


