const url = require('url');

let urlObj1 = url.parse(
  'http://user:pass@host.com:8080/p/a/t/h?query=string#hash'
);

let urlObj2 = url.parse(
  'http://user:pass@host.com:8080/p/a/t/h?query=string#hash',
  true
);

let url1 = url.format(urlObj1);
let url2 = url.format(urlObj2);

console.log(urlObj1);
console.log(urlObj2);
console.log(url1);
console.log(url2);
