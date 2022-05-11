const mainSelector = require('../selectors/main.selector');

jest.setTimeout(60000)

describe('Basic authentication e2e tests', () => {
  // beforeAll( async () => {
  //     await page.setViewport( {
  //       width: 1366,
  //       height: 768,
  //       deviceScaleFactor: 1
  //     } );	
  
  //     await page.goto('https://www.google.com');
  
  //     await page.waitFor(2000);
  // });
  
  it( 'Go to Wikipedia', async () => {
    await page.waitFor(2000);
    await page.goto('https://wikipedia.org');
    await page.waitFor(2000);
    expect(await page.url()).toBe('https://www.wikipedia.org/');
  });

});