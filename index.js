const dop_uds = require('./Services/GoogleFinanceScrapping')
const cors = require('cors')
const express = require('express')
const app = express()

app.use(cors({
    origin: '*',
}))

app.listen(3000, () => {
    console.log('listening on port 3000')
})

app.get('/', async (_, res) => {
    res.json({ 'dop_usd': Number(await dop_uds()) });
})