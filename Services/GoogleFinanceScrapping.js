const puppeteer = require('puppeteer')

const url = 'https://www.google.com/search?q=usd+to+dop&oq=us&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDkyBggCEEUYQDIGCAMQRRg7MgYIBBBFGDsyBggFEEUYPTIGCAYQRRg8MgYIBxBFGD3SAQg0ODY5ajFqN6gCALACAA&sourceid=chrome&ie=UTF-8'

const dop_uds = async () => {
    const browser = await puppeteer.launch({
        headless: 'new',
    })

    const page = await browser.newPage()
    await page.goto(url)

    const dolar = await page.evaluate((_) => {
        const dop_uds = (document.getElementsByClassName('lWzCpb a61j6'))[0].value
        return (dop_uds)
    })
    await page.close()
    return dolar
}

module.exports = dop_uds