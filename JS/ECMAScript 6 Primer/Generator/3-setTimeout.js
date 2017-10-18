// Generator 函数可以不用yield表达式，这时就变成了一个单纯的暂缓执行函数。
function* f() {
  console.log('执行了！');
}

var generator = f();

setTimeout(function() {
  generator.next();
}, 2000);
// 上面代码中，函数f如果是普通函数，在为变量generator赋值时就会执行。但是，函数f是一个 Generator 函数，就变成只有调用next方法时，函数f才会执行。
