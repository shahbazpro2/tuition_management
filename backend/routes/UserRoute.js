import express from 'express'
import checkInputs from '../utils/checkInputs.js';
const UserRoute = express.Router();


const requiredFields = ['name', 'role', 'email', 'password']
UserRoute.route('/users').post(checkInputs(requiredFields), async (_req, _res) => {

    console.log('req', _req.body)
    /* const db = dbo.getDb();

    db.collection('users').insertOne({ name: 'hello' }) */
    _res.json({ message: 'inserted successfully' })
});

export default UserRoute


