// console.log(Promise.prototype);
// // Promise {constructor: , then: , catch: , Symbol(Symbol.toStringTag): "Promise"}
// // catch:function catch() { … }
// // constructor:function Promise() { … }
// // Symbol(Symbol.toStringTag):"Promise"
// // then:function then() { … }
// // __proto__:Object {constructor: , __defineGetter__: , __defineSetter__: , …}

// function* gen(params) {}
// console.log(gen.prototype);
// // __proto__:Generator {constructor: GeneratorFunction, next: , return: , …}
// // constructor:GeneratorFunction {prototype: Generator, constructor: , Symbol(Symbol.toStringTag): "GeneratorFunction"}
// // next:function next() { … }
// // return:function return() { … }
// // Symbol(Symbol.toStringTag):"Generator"
// // throw:function throw() { … }
// // __proto__:Object {Symbol(Symbol.iterator):

// async function asyncf() {}
// console.log(asyncf.prototype);
// // undefined

// console.log(asyncf.__proto__);
// // arguments:TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them
// // caller:TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them
// // constructor:function AsyncFunction() { … }
// // Symbol(Symbol.toStringTag):"AsyncFunction"
// // __proto__:function () { … }

function A() {
  this.hello = function() {
    console.log('hello');
  };
}
let a = new A();
console.log(a);

debugger;
