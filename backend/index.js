import express from 'express'
import recordRoutes from './routes/createUser.js'
import { dbo } from './utils/mongodb.js'
const app = express()

const port = 5000
app.use(recordRoutes);
dbo.connectToServer(function (err) {
    if (err) {
        console.error(err);
        process.exit();
    }
})




app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})