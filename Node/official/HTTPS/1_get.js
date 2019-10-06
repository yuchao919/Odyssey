const https = require('https');
const url = require('url');
const tls = require('tls');
const fs = require('fs');

const reqURL = 'https://www.archdaily.cn/cn';
// const reqURL = 'https://www.baidu.com';

const urlObj = url.parse(reqURL);

const options = {
  // ciphers: 'ALL',
  // secureProtocol: 'SSLv23_method',
  // secureProtocol: 'TLSv1_2_method'
  // secureProtocol: 'TLSv1_1_method',
  // requestCert: true,
  // rejectUnauthorized: false,
  // port: 443,
  // key: fs.readFileSync(`${__dirname}/keys/iamafish-key.pem`),
  // cert: fs.readFileSync(`${__dirname}/keys/iamafish-cert.pem`)
};

Object.assign(options, urlObj);
tls.DEFAULT_ECDH_CURVE = 'auto'; // !鬼知道为什么要这句
https
  .get(options, res => {
    console.log('statusCode:', res.statusCode);
    console.log('headers:', res.headers);
    const body = [];
    res.on('data', d => {
      body.push(d);
    });
    res.on('end', () => {
      console.log(body.toString());
    });
  })
  .on('error', e => {
    console.error(e);
  });

// const https = require('https');

// // const options = {
// //   hostname: 'www.archdaily.cn/cn',
// //   port: 443,
// //   path: '/',
// //   method: 'GET'
// // };

// // const req = https.request(options, res => {
// //   console.log('statusCode:', res.statusCode);
// //   console.log('headers:', res.headers);

// //   res.on('data', d => {
// //     process.stdout.write(d);
// //   });
// // });

// // req.on('error', e => {
// //   console.error(e);
// // });
// // req.end();

// https
//   .get('https://encrypted.google.com/', res => {
//     console.log('statusCode:', res.statusCode);
//     console.log('headers:', res.headers);

//     res.on('data', d => {
//       process.stdout.write(d);
//     });
//   })
//   .on('error', e => {
//     console.error(e);
//   });
