setImmediate(function() {
  console.log('si');
});

setTimeout(() => {
  console.log('st1');
}, 1);

setTimeout(function() {
  console.log('st0');
}, 0);
