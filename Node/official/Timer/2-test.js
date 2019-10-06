// test.js
setImmediate(() => console.log(1));
setTimeout(() => console.log(2), 0);
Promise.resolve().then(() => console.log(3));
process.nextTick(() => console.log(4));
(() => console.log(5))();

// 5 4 3 2 1
