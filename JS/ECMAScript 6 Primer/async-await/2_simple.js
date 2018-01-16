async function f() {
  console.log(await 'happy '); // 立即输出
  console.log(
    await new Promise(resolve => {
      setTimeout(() => {
        resolve('every ');
      }, 3000);
    })
  ); // 这里会等3秒
  console.log('day');
  return 'DONE';
}
f();

function getType() {
  [
    f, // [object AsyncFunction]
    f() // [object Promise]
  ].forEach(item => {
    console.log(Object.prototype.toString.call(item));
  });
}
