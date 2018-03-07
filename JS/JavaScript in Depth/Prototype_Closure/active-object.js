// var x = 10;
// function fn() {
//   console.log(x);
// }

// function show(fn) {
//   var x = 20;
//   fn();
// }

// show(fn);

var a = 10;

function fn() {
  var b = 20;

  function bar() {
    console.log(`${a},${b}`);
  }
  return bar;
}
var x = fn(),
  b = 200;

x();
