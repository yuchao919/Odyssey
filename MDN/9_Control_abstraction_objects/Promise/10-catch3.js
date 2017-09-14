//Create a promise which would not call onReject
var p1 = Promise.resolve('calling next');

var p2 = p1.catch(function(reason) {
  //This is never called
  console.log('catch p1!');
  console.log(reason);
});

p2.then(
  function(value) {
    console.log("next promise's onFulfilled"); /* next promise's onFulfilled */
    console.log(value); /* calling next */
  },
  function(reason) {
    console.log("next promise's onRejected");
    console.log(reason);
  }
);
