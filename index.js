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

app.get('/Currency', async (req, res) => {
    res.json({ 'currencys': `${req.query.currency1} -> ${req.query.currency2}`, 'currency-amount': Number(await dop_uds(req.query.currency1, req.query.currency2)) });
})