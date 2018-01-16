// 如果想要第一次调用next方法时，就能够输入值，可以在 Generator 函数外面再包一层。
function wrapper(generatorFunction, args) {
  return function(...args) {
    let generatorObject = generatorFunction(...args);
    generatorObject.next();
    return generatorObject;
  };
}

const wrapped = wrapper(function*() {
  let count = 0;
  while (true) {
    console.log(`No.${++count} input: ${yield}`);
  }
  return 'DONE';
});

let gen = wrapped();
console.log(gen.next('hello '));
console.log(gen.next('world!'));

// No.1 input: hello
// { value: undefined, done: false }
// No.2 input: world!
// { value: undefined, done: false }
