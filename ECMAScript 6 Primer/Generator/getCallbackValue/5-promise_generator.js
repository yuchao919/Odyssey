function getSomething() {
  var r = 0;
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      r = 2;
      resolve(r);
    }, 10);
  });
}

function* compute() {
  var x = yield getSomething();
  console.log(x * 2);
}

var it = compute();
it.next().value.then(val => {
  it.next(val);
});
