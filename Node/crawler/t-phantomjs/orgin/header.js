var webPage = require('webpage');
var page = webPage.create();

console.log(JSON.stringify(page.customHeaders));
phantom.exit();
