import express from 'express'
import CenterInvoice from '../models/CenterInvoice.js';
import checkInputs from '../utils/checkInputs.js';
import formateError from '../utils/formateError.js';
import formateRes from '../utils/formateRes.js';
const ReportRoute = express.Router();

const fields = ['report', 'center', 'fromDate', 'toDate']
ReportRoute.route('/report')
    .post(checkInputs(fields), async (_req, _res) => {
        const { report, center, fromDate, toDate } = _req.body
        try {
            const res = await CenterInvoice.find({ status: report, center, createdAt: { $gte: fromDate, $lte: toDate } })
            return _res.status(201).json(formateRes('Report fetched successfully', res))
        } catch (error) {
            return _res.status(400).json(formateError(error, "Report fetch failed"))
        }
    })

export default ReportRoute





