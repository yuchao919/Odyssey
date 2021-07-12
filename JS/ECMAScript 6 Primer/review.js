function eg1() {
  const promise = new Promise((resolve, reject) => {
    console.log(1);
    resolve();
    console.log(2);
  });
  promise.then(() => {
    console.log(3);
  });
  console.log(4);
}

function eg2() {
  const first = () =>
    new Promise((resolve, reject) => {
      console.log(3);
      let p = new Promise((resolve, reject) => {
        console.log(7);
        setTimeout(() => {
          console.log(5);
          resolve(6);
        }, 0);
        resolve(1);
      });
      resolve(2);
      p.then((arg) => {
        console.log(arg);
      });
    });

  first().then((arg) => {
    console.log(arg);
  });
  console.log(4);
}

function eg3() {
  const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('success');
    }, 1000);
  });
  const promise2 = promise1.then(() => {
    throw new Error('error!!!');
  });

  console.log('promise1', promise1);
  console.log('promise2', promise2);

  setTimeout(() => {
    console.log('promise1', promise1);
    console.log('promise2', promise2);
  }, 2000);
}

function eg4() {
  const promise = new Promise((resolve, reject) => {
    resolve('success1');
    reject('error');
    resolve('success2');
  });

  promise
    .then((res) => {
      console.log('then: ', res);
    })
    .catch((err) => {
      console.log('catch: ', err);
    });
}

function eg5() {
  Promise.resolve(1)
    .then((res) => {
      console.log(res);
      return 2;
    })
    .catch((err) => {
      return 3;
    })
    .then((res) => {
      console.log(res);
    });
}

function eg6() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('once');
      resolve('success');
    }, 1000);
  });

  const start = Date.now();
  promise.then((res) => {
    console.log(res, Date.now() - start);
  });
  promise.then((res) => {
    console.log(res, Date.now() - start);
  });
}

function eg7() {
  Promise.resolve()
    .then(() => {
      return new Error('error!!!');
    })
    .then((res) => {
      console.log('then: ', res);
    })
    .catch((err) => {
      console.log('catch: ', err);
    });
}

function eg8() {
  const promise = Promise.resolve().then(() => {
    return promise;
  });
  promise.catch(console.error);
}

function eg9() {
  Promise.resolve(1).then(2).then(Promise.resolve(3)).then(console.log);
}

function eg10() {
  Promise.resolve()
    .then(
      function success(res) {
        throw new Error('error');
      },
      function fail1(e) {
        console.error('fail1: ', e);
      }
    )
    .catch(function fail2(e) {
      console.error('fail2: ', e);
    });

  Promise.resolve()
    .then(
      function success1(res) {
        throw new Error('error');
      },
      function fail1(e) {
        console.error('fail1: ', e);
      }
    )
    .then(
      function success2(res) {},
      function fail2(e) {
        console.error('fail2: ', e);
      }
    );
}

function eg11() {
  process.nextTick(() => {
    console.log('nextTick');
  });
  Promise.resolve().then(() => {
    console.log('then');
  });
  setImmediate(() => {
    console.log('setImmediate');
  });
  console.log('end');
}

function eg13() {
  const timeout = (ms) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, ms);
    });

  const ajax1 = () =>
    timeout(2000).then(() => {
      console.log('1');
      return 1;
    });

  const ajax2 = () =>
    timeout(1000).then(() => {
      console.log('2');
      return 2;
    });

  const ajax3 = () =>
    timeout(2000).then(() => {
      console.log('3');
      return 3;
    });

  const mergePromise = (ajaxArray) => {
    // 在这里实现你的代码
    // 保存数组中的函数执行后的结果
    var data = [];

    // Promise.resolve方法调用时不带参数，直接返回一个resolved状态的 Promise 对象。
    var sequence = Promise.resolve();

    ajaxArray.forEach((item) => {
      // 第一次的 then 方法用来执行数组中的每个函数，
      // 第二次的 then 方法接受数组中的函数执行后返回的结果，
      // 并把结果添加到 data 中，然后把 data 返回。
      sequence = sequence.then(item).then((res) => {
        data.push(res);
        return data;
      });
    });

    // 遍历结束后，返回一个 Promise，也就是 sequence， 他的 [[PromiseValue]] 值就是 data，
    // 而 data（保存数组中的函数执行后的结果） 也会作为参数，传入下次调用的 then 方法中。
    return sequence;

    // // 在这里实现你的代码
    // if (!Array.isArray(ajaxArray) || ajaxArray.length === 0) {
    //   return Promise.resolve([]);
    // } else if (ajaxArray.length === 1) {
    //   return ajaxArray[0]().then((num) => {
    //     return [num];
    //   });
    // }
    // const data = [];
    //  function getPromise() {
    //   let f1 = ajaxArray.shift();
    //   if (!(f1 instanceof Function)) {
    //     return Promise.resolve(data);
    //   }
    //   let p1 = f1();
    //   if (p1 instanceof Promise) {
    //     return p1.then((num) => {
    //       data.push(num);
    //       return getPromise();
    //     });
    //   }
    // }
    // return getPromise();
  };

  mergePromise([ajax1, ajax2, ajax3]).then((data) => {
    console.log('done');
    console.log(data); // data 为 [1, 2, 3]
  });
  // 要求分别输出
  // 1
  // 2
  // 3
  // done
  // [1, 2, 3]
}

function eg14() {
  /*
    现有8个图片资源的url，已经存储在数组urls中，且已有一个函数function loading，
    输入一个url链接，返回一个Promise，该Promise在图片下载完成的时候resolve，下载失败则reject。

    要求：任何时刻同时下载的链接数量不可以超过3个。

    请写一段代码实现这个需求，要求尽可能快速地将所有图片下载完成。
  */
  var urls = [
    'https://www.kkkk1000.com/images/getImgData/getImgDatadata.jpg',
    'https://www.kkkk1000.com/images/getImgData/gray.gif',
    'https://www.kkkk1000.com/images/getImgData/Particle.gif',
    'https://www.kkkk1000.com/images/getImgData/arithmetic.png',
    'https://www.kkkk1000.com/images/getImgData/arithmetic2.gif',
    'https://www.kkkk1000.com/images/getImgData/getImgDataError.jpg',
    'https://www.kkkk1000.com/images/getImgData/arithmetic.gif',
    'https://www.kkkk1000.com/images/wxQrCode2.png',
  ];

  function loadImg(url) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        console.log('一张图片加载完成');
        resolve();
      };
      img.onerror = reject;
      img.src = url;
    });
  }

  function batchDownloadImg(urls) {

    
  }

  batchDownloadImg(urls);
}
