require('dotenv').config()
const puppeteer = require('puppeteer')

const Currency = async (currency1, currency2) => {
    const url = `https://www.google.com/search?q=${currency1}+to+${currency2}&oq=us&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDkyBggCEEUYQDIGCAMQRRg7MgYIBBBFGDsyBggFEEUYPTIGCAYQRRg8MgYIBxBFGD3SAQg0ODY5ajFqN6gCALACAA&sourceid=chrome&ie=UTF-8`
    const browser = await puppeteer.launch({
        headless: 'new',
        executablePath: process.env.NODE_ENV === "production" ?
            process.env.PUPPETEER_EXECUTABLE_PATH :
            puppeteer.executablePath()
    })

    const page = await browser.newPage()
    await page.goto(url)

    const currency = await page.evaluate((_) => {
        const value = (document.getElementsByClassName('lWzCpb a61j6'))[0].value
        return (value)
    })
    await page.close()
    return currency
}

module.exports = Currency