import express from 'express'
import Center from '../models/Center.js';
import checkInputs from '../utils/checkInputs.js';
import formateError from '../utils/formateError.js';
import formateRes from '../utils/formateRes.js';
const CenterRoute = express.Router();

const centerFields = ['name', 'address', "regNumber", "pic", "bank", "officeNumber", "kpi", "status"]
CenterRoute.route('/center')
    .post(checkInputs(centerFields), async (_req, _res) => {
        try {
            const res = await Center.create(_req.body)
            return _res.status(201).json({ message: 'Center added successfully', data: res })
        } catch (error) {
            return _res.status(400).json(formateError(error, "Center already exist"))
        }
    })
    .get(async (_req, _res) => {
        const _id = _req.query?.id
        try {
            const res = await Center.findOne({ _id })
            return _res.status(200).json(formateRes("Center fetched successfully", res))
        } catch (error) {
            return _res.status(400).json(formateError(error))
        }
    })
    .put(async (_req, _res) => {
        const _id = _req.query?.id
        try {
            const res = await Center.updateOne({ _id }, _req.body)
            return _res.status(200).json(formateRes("Center updated successfully", res))
        } catch (error) {
            return _res.status(400).json(formateError(error))
        }
    })
    .delete(async (_req, _res) => {
        const _id = _req.query?.id
        try {
            const res = await Center.deleteOne({ _id })
            return _res.status(200).json(formateRes("Center deleted successfully", res))
        } catch (error) {
            return _res.status(400).json(formateError(error))
        }
    })

/* CenterRoute.route('/center/all')
    .get(async (_req, _res) => {
        try {
            const res = await Center.find().populate(["pic", "kpi"]).sort('date')
            return _res.status(200).json(formateRes("Center fetched successfully", res))
        } catch (error) {
            return _res.status(400).json(formateError(error))
        }
    }) */


CenterRoute.route('/center/all')
    .get(async (_req, _res) => {
        const date = _req.query?.date
        console.log('date', date)
        try {
            const res = await Center.aggregate([

                {

                    $lookup: {
                        from: 'centerinvoices',

                        let: { id: '$_id' },
                        as: 'invoices',
                        pipeline: [
                            {
                                $match: {
                                    $expr: {
                                        $and: [
                                            { $eq: ['$center', '$$id'] },
                                            { $eq: ['$invoiceDate', date] },
                                        ]
                                    }
                                }
                            }
                        ]
                    }

                }])
            const endRes = await Center.populate(res, ['pic'])
            return _res.status(200).json(formateRes("Center fetched successfully", res))
        } catch (error) {
            return _res.status(400).json(formateError(error))
        }
    })


export default CenterRoute





