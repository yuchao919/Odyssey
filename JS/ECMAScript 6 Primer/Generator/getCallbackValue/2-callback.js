// 回调函数
function getSomething(cb) {
  var r = 0;
  setTimeout(function() {
    r = 2;
    cb(r);
  }, 10);
}

function compute(x) {
  console.log(x * 2);
}

getSomething(compute); // 4
