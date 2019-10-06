async function async1() {
  console.log('a');
  await async2();
  console.log('b');
}
async function async2() {
  console.log('c');
}
async1();
new Promise(function(resolve) {
  console.log('d');
  resolve();
}).then(function() {
  console.log('e');
});

