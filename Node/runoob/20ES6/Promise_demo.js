/*
Promise 的含义
基本用法
Promise.prototype.then()
Promise.prototype.catch()
Promise.all()
Promise.race()
Promise.resolve()
Promise.reject()
两个有用的附加方法
应用
Promise.try()
*/

let promise = new Promise(function(resolve, reject) {
  console.log('Promise');
  resolve();
});

promise.then(function() {
  console.log('Resolved.');
});

console.log('Hi!');


// 例子 读取图片
function loadImageAsync(url) {
  return new Promise(function(resolve, reject) {
    var image = new Image();

    image.onload = function() {
      resolve(image);
    };

    image.onerror = function() {
      reject(new Error('Could not load image at ' + url));
    };

    image.src = url;
  });
}
