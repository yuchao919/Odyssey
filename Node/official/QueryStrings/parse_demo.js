const querystring = require("querystring");

let escapeStr = querystring.escape("<script>alert(123)</script>");
let unescapeStr = querystring.unescape(escapeStr);
console.log(escapeStr); // %3Cscript%3Ealert(123)%3C%2Fscript%3E
console.log(unescapeStr);

let parseObj = querystring.parse("foo=bar&abc=xyz&abc=123");
let obj = {};
console.log(typeof parseObj); // object
console.log(typeof obj); // object
console.log(typeof obj.hasOwnProperty); // function
console.log(typeof parseObj.hasOwnProperty); // undefined
console.log(parseObj); // { foo: 'bar', abc: [ 'xyz', '123' ] }

let stringifyStr = querystring.stringify({
  foo: "bar",
  baz: ["qux", "quux"],
  corge: ""
});
console.log(stringifyStr); // foo=bar&baz=qux&baz=quux&corge=

console.log(querystring.stringify({
  w: "中文",
  foo: "bar"
})); // w=%E4%B8%AD%E6%96%87&foo=bar