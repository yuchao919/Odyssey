const phantom = require('phantom');

(async function() {
  const instance = await phantom.create();
  const page = await instance.createPage();
  const settings = await page.property('settings');
  const userAgent = await page.setting('userAgent');
  const status = await page.open('https://www.baidu.com/');
  console.log(status);
  const content = await page.property('content');
  const customHeaders = await page.property('customHeaders');
  console.log(content);
  await instance.exit();
})();
