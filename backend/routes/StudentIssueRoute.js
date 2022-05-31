import express from 'express'
import StudentIssue from '../models/StudentIssue.js';
import checkInputs from '../utils/checkInputs.js';
import formateError from '../utils/formateError.js';
import formateRes from '../utils/formateRes.js';
const StudentIssueRoute = express.Router();

const fields = ['studentId', "inventories"]
StudentIssueRoute.route('/student/issue')
    .post(checkInputs(fields), async (_req, _res) => {
        try {
            const res = await StudentIssue.findOneAndUpdate({ studentId: _req.body.studentId }, { $set: _req.body }, { upsert: true, new: true })
            if (!res) throw "Issued failed"
            return _res.status(201).json({ message: 'Issued successfully', data: res })
        } catch (error) {
            return _res.status(400).json(formateError(error, "Bad request"))
        }
    })
    .get(async (_req, _res) => {
        const _id = _req.query?.id
        try {
            const res = await StudentIssue.findOne({ studentId: _id })
            return _res.status(200).json(formateRes("fetched successfully", res))
        } catch (error) {
            return _res.status(400).json(formateError(error))
        }
    })



export default StudentIssueRoute


