let promise = new Promise((resolve, reject) => {
  console.log('Promise');
  resolve();
});

promise.then(() => {
  console.log('Resolve');
});

console.log('Hi!');

// Promise
// Hi!
// Resolved
