function wrapper(generatorFunction) {
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
