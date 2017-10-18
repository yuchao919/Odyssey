function getSomething() {
  var r = 0;
  setTimeout(function() {
    r = 2;
    it.next(r);
  }, 10);
}

function* compute(x) {
  var x = yield getSomething();
  console.log(x * 2);
}

var it = compute();
it.next();
