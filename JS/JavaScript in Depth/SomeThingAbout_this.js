// var a = 10;
// function fn(arguments) {
//   debugger;
//   // console.log(a); // 如果不写这句，在调用fn的时候将会无法调试a的值
// }
// fn();

// function Foo() {
//   this.name = 'Leslie';
//   this.year = 1990;
//   console.log(this);
// }

// var f1 = new Foo();
// console.log(f1.__proto__.constructor === Foo);
// // console.log(f1.name);

// var obj = {
//   x: 10,
//   fn: function() {
//     console.log(this);
//     console.log(this.x);
//   }
// };
// obj.fn();
var x = 100; // 这样写和 浏览器环境是有差异的，浏览器会把x放到window作为一个属性，而node不会

var o1 = {
  x: 10
};

var fn1 = function() {
  console.log(this);
  console.log(this.x);
};
fn1.call(null);
