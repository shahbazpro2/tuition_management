/* eslint-disable no-undef */
import express from 'express'
import cors from 'cors'
import path from 'path'
import dotenv from 'dotenv'
import './utils/mongodb.js'
import apiRoutes from './routes/routes.js'

const app = express()
app.use(cors())
app.use(express.json());

//Get from process.env
dotenv.config();

const port = process.env.PORT || 8000

//Static path for frontend
const __dirname = path.resolve();
const buildPath = path.join(__dirname + '/build')
app.use(express.static(buildPath))

//Api routes
apiRoutes.map(([routes, url]) => app.use(`/api/${url || ''}`, routes))

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname + '/build', 'index.html'));
});

//Listen node at specified port
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))