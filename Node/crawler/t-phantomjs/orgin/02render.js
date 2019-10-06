var page = require('webpage').create();
page.open('https://www.douyu.com/', function(status) {
  console.log('Status: ' + status);
  if (status === 'success') {
    page.render('douyu.png');
  }
  phantom.exit();
});
