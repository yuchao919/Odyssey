const p1 = new Promise((resolve, reject) => {
  resolve('hello');
})
  .then(result => result)
  .catch(e => e);

const p2 = new Promise((resolve, reject) => {
  // resolve('world');
  throw new Error('报错了');
})
  .then(result => result)
  .catch(e => {
    console.log('p2: ' + e);
    // return Promise.resolve('world');
  });

Promise.all([p1, p2])
  // .then(result => {
  //   console.log(result);
  //   // [ 'hello', 'world' ]
  // })
  .then(([r1, r2]) => {
    console.log(r1);
    console.log(r2);
  })
  .catch(e => console.log('all: ' + e));
// ["hello", Error: 报错了]

// p2: Error: 报错了
// hello
// undefined

