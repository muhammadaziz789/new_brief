const puppeteer = require('puppeteer');

async function captureScreenshot(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  const screenshot = await page.screenshot();
  await browser.close();
  return screenshot;
}

module.exports = {
  captureScreenshot,
};