// 这样内存会泄漏
const arr = [];
setInterval(function() {
  arr.push(new Array(65536));
  console.log(arr.length);
}, 10);
