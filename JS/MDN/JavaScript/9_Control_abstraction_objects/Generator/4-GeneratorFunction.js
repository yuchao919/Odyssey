var GeneratorFunction = Object.getPrototypeOf(function*() {}).constructor;
var g = new GeneratorFunction('a', 'yield a * 2');
var iterator = g(10);
console.log(iterator.next().value); // 20
