var page = require('webpage').create();
page.open('http://www.baidu.com/', function() {
  page.render('baidu.png');
  phantom.exit();
});
