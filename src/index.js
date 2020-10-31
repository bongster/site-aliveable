const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://vw290.com/th/th', {
    waitUntil: 'domcontentloaded',
  });
  await page.waitForSelector("#footer", {
    visible: true,
  });
  await page.screenshot({path: 'example.png'});

  await browser.close();
})();
