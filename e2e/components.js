const puppeteer = require('puppeteer-core');
const ct = require('./config/constants');
let browser;
let page;
beforeAll(async () => {
  browser = await puppeteer.launch({
    executablePath: ct.CHROME_PATH,
  });
  page = await browser.newPage();
  await page.setViewport({ width: ct.BT_XL, height: ct.WH });
  await page.goto(`${ct.APP_URL}/docs/components.html`, { waitUntil: 'networkidle0' });
});

describe('SWE Components testing', () => {
  test('Twitter and Facebook feed is working as expected', async () => {
    // twitter widget exist
    const searchInput = await page.$('#twitter-widget-0');
    expect(searchInput).toBeTruthy();
    //facebook widget exist
    const getFbAttr = await page.evaluate('document.querySelector(".fb_iframe_widget").getElementsByTagName("iframe")[0].getAttribute("src")');
    expect(getFbAttr).toMatch(/https:\/\/www.facebook.com/);
  });

  afterAll(async () => {
    await browser.close();
  });
});
