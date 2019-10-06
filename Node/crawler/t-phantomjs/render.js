const phantom = require('phantom');

(async function() {
  const instance = await phantom.create();
  const page = await instance.createPage();

  await page.property('viewportSize', { width: 1024, height: 600 });
  const status = await page.open('https://www.baidu.com/');
  console.log(`Page opened with status [${status}].`);

  await page.render('baidu.pdf');
  console.log(`File created at [./baidu.pdf]`);

  await instance.exit();
})();

// node --harmony-async-await render.js
