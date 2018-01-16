function createPromiseArray() {
  return [
    new Promise(resolve => {
      setTimeout(() => {
        resolve('happy');
      }, 3000);
    }),
    new Promise(resolve => {
      setTimeout(() => {
        resolve('every');
      }, 2000);
    }),
    new Promise(resolve => {
      setTimeout(() => {
        resolve('day');
      }, 1000);
    })
  ];
}

// async function f() {
//   for await (const x of createPromiseArray()) {
//     console.log(x);
//   }
// }
// 目前是草案

async function f() {
  for (const p of createPromiseArray()) {
    console.log(await p);
  }
}
f();// 这样会一起输出（并发执行） 不会一个个来