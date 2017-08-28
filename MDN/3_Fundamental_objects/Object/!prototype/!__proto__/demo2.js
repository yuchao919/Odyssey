var shape = function() {};
var p = {
  a: function() {
    console.log('a');
  }
};

var circle = new shape();
circle.__proto__ = p;

circle.a(); //  a

console.log(shape.prototype === circle.__proto__); //false
