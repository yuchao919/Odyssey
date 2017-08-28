var shape = function() {};
var p = {
  a: function() {
    console.log('aaa');
  }
};
shape.prototype.__proto__ = p;

shape.prototype.b = function() {
  console.log('bbb');
};

var circle = new shape();

circle.a(); //aaa

console.log(shape.prototype === circle.__proto__); //true

console.log(Object.getPrototypeOf(circle) === circle.__proto__); // true

circle.b(); // bbb

// console.log(circle.__proto__); // shape { b: [Function] }
// console.log(circle.prototype); // undefined
// console.log(circle.__proto__.hasOwnProperty('a')); // false
// console.log(circle.__proto__.hasOwnProperty('b')); // true
