import express from 'express'
import cors from 'cors'
import path from 'path'
import dotenv from 'dotenv'
dotenv.config();
const __dirname = path.resolve();
const app = express()
app.use(cors())
app.use(express.json());
const port = process.env.PORT || 5000
const buildPath = path.join(__dirname, '..', 'build')
app.use(express.static(buildPath))
/* app.use(recordRoutes);
dbo.connectToServer(function (err) {
    if (err) {
        console.error(err);
        //process.exit();
    }
}) */

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})