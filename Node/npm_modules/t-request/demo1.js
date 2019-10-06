const request = require('request').defaults({ jar: true });
const cheerio = require('cheerio');

request.get('http://www.baidu.com', (err, response, body) => {
  const $ = cheerio.load(body);
  debugger;
});
