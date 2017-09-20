function getSomething() {
  var r = 0;
  return new Promise(function(resolve) {
    setTimeout(function() {
      r = 2;
      resolve(r);
    }, 10);
  });
}

async function compute() {
  var x = await getSomething();
  console.log(x * 2);
}
compute();
