var o = new Foo();
// JavaScript actually just does
var o = new Object();
o.__proto__ = Foo.prototype;
Foo.call(o);
