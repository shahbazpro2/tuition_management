/* eslint-disable no-undef */
import jwt from 'jsonwebtoken'
import User from '../models/User.js';
import formateRes from '../utils/formateRes.js';

const accessApi = () => {
    return (_req, _res, next) => {
        try {
            var token = _req.headers['x-access-token'];
            if (!token) return _res.status(401).send(formateRes("No token provided."))

            jwt.verify(token, process.env.secret, async (err, decoded) => {
                if (err) return _res.status(401).send(formateRes("Failed to authenticate token."))

                const res = await User.findOne({ _id: decoded.id })
                if (!res) return _res.status(401).send(formateRes("Failed to authenticate token."))
                next()
            });

        } catch (error) {
            return _res.status(500).send(formateRes("There is something wrong"))
        }
    }
}

export default accessApi