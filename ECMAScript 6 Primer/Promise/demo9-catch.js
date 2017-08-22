var someAsyncThing = function() {
  return new Promise(function(resolve, reject) {
    // 下面一行会报错，因为x没有声明
    resolve(x + 2);
  });
};

someAsyncThing()
  .catch(function(error) {
    console.log('oh no', error);
  })
  .then(function() {
    console.log('carry on');
  });
// oh no [ReferenceError: x is not defined]
// carry on
