var promise = new Promise(function(resolve, reject) {
  if (true) {
    setTimeout(function() {
      resolve('Done');
    }, 2000);
  } else {
    reject('Error');
  }
});

promise.then(
  function(val) {
    console.log(val);
  },
  function(err) {
    console.log(err);
  }
);

console.log('still working');
