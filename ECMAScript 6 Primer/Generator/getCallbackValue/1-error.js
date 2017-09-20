// 1.错误尝试
function getSomething() {
  var r = 0;
  setTimeout(function() {
    r = 2;
  }, 10);
  return r;
}

function compute() {
  var x = getSomething();
  console.log(x * 2);
}

compute(); // 0
