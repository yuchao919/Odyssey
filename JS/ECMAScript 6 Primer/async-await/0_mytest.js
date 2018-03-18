// function ajax(options) {
//   const { success } = { success: null, ...options };

//   setTimeout(() => {
//     success && success();
//   }, 3e3);
// }

// // ajax({
// //   success: function() {
// //     console.log('hello');
// //   }
// // });

function delay(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

async function getUpperCase(ch) {
  await delay(3e3);
  return ch.toUpperCase();
}

// getUpperCase('asd').then(val => {
//   console.log(val);
// });

// function getError() {
//   return new Promise((resovle, reject) => {
//     setTimeout(function() {
//       reject('SB');
//     }, 4e3);
//   });
// }

// async function myFunction() {
//   try {
//     await getError();
//   } catch (err) {
//     console.log(err);
//   }
// }
// myFunction()
//   .then(
//     f => {
//       console.log('done');
//     },
//     e => {
//       console.log('oh no');
//     }
//   )
//   .catch(err => {
//     console.log(err);
//   });

async function f() {
  // const pArr = ['a', 'b'].map(val => getUpperCase(val));
  // for (const x of pArr) {
  for (const x of ['a', 'b']) {
    console.log(await getUpperCase(x));
  }
}
f();
