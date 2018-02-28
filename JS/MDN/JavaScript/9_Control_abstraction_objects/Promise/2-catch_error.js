/* 
const wait = ms => {
  setTimeout(function() {
    throw new Error('Some Error');
  }, ms);
};

wait(100); 
*/

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

wait(1000)
  .then(() => console.log('1 seconds'))
  .then(() => console.log('do something else'))
  // .then(() => {
  //   return Promise.reject('reject');
  // })
  .then(() => {
    console.log('do 2');
  })
  .then(() => {
    throw new Error('error happened');
  })
  .then(() => console.log('continue do something'))
  .catch(err => {
    console.log(err);
  });
