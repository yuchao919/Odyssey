var o = {};
o.constructor === Object; // true

var o = new Object;
o.constructor === Object; //true

var a = [];
a.constructor === Array; // true

var a = new Array;
a.constructor === Array //true

var n = new Number(3);5
n.constructor === Number; // true

function SomeClass() {
  this.prop = 'prop';
}

var o = new SomeClass();
console.log(o.constructor === SomeClass); // true