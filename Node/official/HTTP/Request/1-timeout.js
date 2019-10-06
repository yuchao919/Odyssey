const http = require('http');
const net = require('net');

const req = http.request(
  {
    hostname: 'www.npmjs.com',
    path: '/package/oneapm'
  },
  res => {
    console.log(res instanceof http.IncomingMessage);
    // console.log(typeof res.resume);
    // for (let arg of [...arguments]) {
    //   console.log(Object.prototype.toString.call(arg));
    // }
  }
);

req.on('response', res => {
  // console.log(typeof res.resume);
  // console.log('response:' + arguments.length);
});

req.setTimeout(3000, () => {
  console.log('timeout:' + arguments.length);
});

req.end();
