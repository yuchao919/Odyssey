function run(generator, res) {
  const ret = generator.next(res);
  if (ret.done) return;
  ret.value.then(function(res) {
    run(generator, res);
  });
}

let count = 1;
function tick(time) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('tick %s after %s ms', count++, time);
      resolve();
    }, time);
  });
}
function* main() {
  console.log('start run...');
  yield tick(500);
  yield tick(1000);
  yield tick(2000);
}
run(main());
