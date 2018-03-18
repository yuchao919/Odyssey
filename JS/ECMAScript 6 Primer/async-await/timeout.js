function lotsofcompute() {
  let i = 0;
  while (i < 1e3) {
    i++;
  }
  return 'Done';
}

function timeout(sec) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Timeout'));
    }, sec * 1e3);
  });
}

Promise.race([timeout(3), timeout(1)]).then(
  val => {
    console.log(val);
  },
  err => {
    console.log(err);
  }
);
