function getSomething() {
  var r = 0;
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      r = 2;
      resolve(r);
    }, 10);
  });
}

function compute(x) {
  console.log(x * 2);
}

getSomething().then(compute);
