var p1 = new Promise(function(resolve, reject) {
  resolve('Success');
});

p1
  .then(function(value) {
    console.log(value); // "Success!"
    throw 'oh, no!';
  })
  .catch(function(e) {
    console.log(e); // "oh, no!"
  })
  .then(
    function() {
      console.log('after a catch the chain is restored');
    },
    function() {
      console.log('Not fired due to the catch');
    }
  );

// The following behaves the same as above
p1
  .then(function(value) {
    console.log(value); // "Success!"
    return Promise.reject('oh, no!');
  })
  .catch(function(e) {
    console.log(e); // "oh, no!"
  })
  .then(
    function() {
      console.log('after a catch the chain is restored');
    },
    function() {
      console.log('Not fired due to the catch');
    }
  );
