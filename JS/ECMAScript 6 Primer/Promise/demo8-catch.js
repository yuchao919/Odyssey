var promise = new Promise(function(resolve, reject) {
  // reject(new Error('test'));
  reject('test');
});

promise
  .then(msg => {
    console.log(msg);
  })
  .catch(function(error) {
    console.log('reject: ' + error);
  });
