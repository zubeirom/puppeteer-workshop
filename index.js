const puppeteer = require('puppeteer');

// 1. Go to Wikipedia
// 2. Use search
// 3. Click on dropdown
// 4. Click on link and switch pages
// 5. Make sure to make it slow enough that its viewable
// 6. Use more options

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
    });
    const page = await browser.newPage();
    await page.goto('https://wikipedia.com');
    await page.waitFor(4000);
    await page.type('#searchInput', 'Brot', { delay: 500 });
    await page.keyboard.press('Enter');
    await page.waitFor(3000);
    await browser.close();
})();