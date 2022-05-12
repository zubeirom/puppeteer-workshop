const mainSelector = require('../selectors/main.selector');

jest.setTimeout(60000)

describe('Main test', () => {

  
  it('Go to Wikipedia', async () => {
    await page.waitFor(2000);
    await page.goto('https://wikipedia.org');
    await page.waitFor(2000);
    expect(await page.url()).toBe('https://www.wikipedia.org/');
  });

  it('Enter Brot in input field', async () => {
    const BROT = 'Brot';
    await page.type(mainSelector.wikipediaMainInput, BROT, { delay: 500 });
    await page.keyboard.press('Enter');
    await page.waitFor(3000);
    const val = await page.$eval('#firstHeading',(el) => {
      return el.innerText;
    });
    expect(val).toContain(BROT);
  });
});

