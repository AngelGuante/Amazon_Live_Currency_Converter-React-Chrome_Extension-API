const dop_uds = require('./Services/GoogleFinanceScrapping')
const express = require('express')
const app = express()

app.listen(3000, () => {
    console.log('listening on port 3000')
})

app.get('/', async (_, res) => {
    res.json({'dop_usd': Number(await dop_uds())});
})