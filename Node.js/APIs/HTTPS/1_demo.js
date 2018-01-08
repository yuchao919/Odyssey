const https = require('https');

https
  .get('https://translate.google.cn/', res => {
    console.log('statusCode:', res.statusCode);
    console.log('headers:', res.headers);

    res.on('data', d => {
      process.stdout.write(d);
    });
  })
  .on('error', e => {
    console.error(e);
  });
