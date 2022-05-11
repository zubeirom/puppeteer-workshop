const puppeteer = require('puppeteer');

// 1. Go to Wikipedia
// 2. Use search
// 3. Click on dropdown
// 4. Click on link and switch pages
// 5. Make sure to make it slow enough that its viewable
// 6. Use more options

(async () => {
    const browser = await puppeteer.launch({
        headless: false
    });
    const page = await browser.newPage();
    await page.goto('https://google.com');

    await browser.close();
})();