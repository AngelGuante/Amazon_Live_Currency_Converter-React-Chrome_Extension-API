const dop_uds = require('./Services/GoogleFinanceScrapping')
const express = require('express')
const app = express()

app.listen(3000, () => {
    console.log('listening on port 3000')
})

app.get('/', async (req, res) => {
    res.send(await dop_uds());
})