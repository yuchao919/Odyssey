function test() {}
test.prototype.myname = function() {
  console.log('myname');
};
var a = new test();

console.log(a.__proto__ === test.prototype); //true

a.myname(); //myname
