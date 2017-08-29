function f(n) {
  g(n - 1);
}
function g(n) {
  if (n > 0) {
    f(n);
    console.log(f.caller);
  } else {
    stop();
  }
}
function stop() {
  console.log('stop');
}
f(2);
