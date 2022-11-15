const playwright = require('playwright');
async function main() {
    const browser = await playwright.chromium.launch({
        headless: false // setting this to true will not run the UI
    });

    const page = await browser.newPage();
    await page.goto('https://finance.yahoo.com/world-indices');
    await page.waitForTimeout(5000); // wait for 5 seconds
    await browser.close();
}

main();

// const Nightmare = require('nightmare')
// const nightmare = Nightmare()

// nightmare
// 	.goto('https://search.brave.com/')
// 	.type('#searchbox', 'ScrapingBee')
// 	.click('#submit-button')
// 	.wait('#results a')
// 	.evaluate(
// 		() => document.querySelector('#results a').href
// 	)
// 	.end()
// 	.then((link) => {
// 		console.log('ScrapingBee Web Link:', link)
// 	})
// 	.catch((error) => {
// 		console.error('Search failed:', error)
// 	})

// const puppeteer = require('puppeteer')

// async function getVisual() {
// 	try {
// 		const URL = 'https://www.reddit.com/r/programming/'
// 		const browser = await puppeteer.launch()

// 		const page = await browser.newPage()
// 		await page.goto(URL)

// 		await page.screenshot({ path: 'screenshot.png' })
// 		await page.pdf({ path: 'page.pdf' })

// 		await browser.close()
// 	} catch (error) {
// 		console.error(error)
// 	}
// }

// getVisual()