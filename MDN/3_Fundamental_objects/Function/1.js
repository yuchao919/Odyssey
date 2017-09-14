var foo = new Function('a', 'console.log(a)');
foo(123); // 123

var bar = Function.prototype.constructor('a', 'console.log(a)');
bar('111'); // 111
