function timeout(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms * 10, 'done');
    setTimeout(reject, ms, 'err');
  });
}

timeout(100).then(
  val => {
    console.log(val);
  },
  err => {
    console.log(err);
  }
);
