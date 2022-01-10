import express from 'express'
import { dbo } from '../utils/mongodb';
const recordRoutes = express.Router();

recordRoutes.route('/listings').get(async function (_req, res) {
    const db = dbo.getDb();

    db.collection('users').insertOne({ name: 'hello' })
});

export default recordRoutes