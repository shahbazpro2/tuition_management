import express from 'express'
import CenterInvoice from '../models/CenterInvoice.js';
import StudentInvoice from '../models/StudentInvoice.js';
import checkInputs from '../utils/checkInputs.js';
import formateError from '../utils/formateError.js';
import formateRes from '../utils/formateRes.js';
const ReportRoute = express.Router();

const fields = ['report', 'center', 'fromDate', 'toDate']
ReportRoute.route('/report/center')
    .post(checkInputs(fields), async (_req, _res) => {
        const { report, center, fromDate, toDate } = _req.body
        try {
            const res = await CenterInvoice.find({ status: report, center, invoiceDate: { $gte: fromDate, $lte: toDate } }).populate(['inventory_id', 'center'])

            const data = res?.map(item => {
                const { center, inventory_id, payment_date, status, amount, invoiceDate } = item
                return {
                    center: center.name,
                    inventory: inventory_id?.name,
                    inventory_qty: inventory_id?.qty,
                    payment_date,
                    invoiceDate,
                    amount,
                    status
                }
            })
            return _res.status(201).json(formateRes('Report fetched successfully', data))
        } catch (error) {
            return _res.status(400).json(formateError(error, "Report fetch failed"))
        }
    })
const studentFields = ['report', 'student', 'fromDate', 'toDate']
ReportRoute.route('/report/student')
    .post(checkInputs(studentFields), async (_req, _res) => {
        const { report, student, fromDate, toDate } = _req.body
        try {
            const res = await StudentInvoice.find({ status: report, student, invoiceDate: { $gte: fromDate, $lte: toDate } }).populate(['inventory_id', 'student'])
            console.log('res', res)
            const data = res?.map(item => {
                const { student, inventory_id, payment_date, invoiceDate, status, amount } = item
                return {
                    student: student.name,
                    inventory: inventory_id?.name,
                    inventory_qty: inventory_id?.qty,
                    payment_date,
                    invoiceDate,
                    amount,
                    status
                }
            })
            return _res.status(201).json(formateRes('Report fetched successfully', data))
        } catch (error) {
            return _res.status(400).json(formateError(error, "Report fetch failed"))
        }
    })

export default ReportRoute





