/**
 * 注意，调用resolve或reject并不会终结 Promise 的参数函数的执行。
 */

new Promise((resolve, reject) => {
  resolve(1);
  console.log(2);
}).then(r => {
  console.log(r);
});
// 2
// 1

new Promise((resolve, reject) => {
  return resolve(11);
  // 后面的语句不会执行
  console.log(22);
})
  .then(r => {
    console.log(r);
    return 'hehe';
  })
  .then(msg => {
    console.log(msg);
  });
