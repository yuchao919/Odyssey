const fs = require('fs');
const path = require('path');
const fileAPath = path.resolve(`${__dirname}/A.txt`);
const fileBPath = path.resolve(`${__dirname}/B.txt`);

const co = require('./lib-co');

const readFile = function(filePath, options) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, options, (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(data);
    });
  });
};

function* gen() {
  var f1 = yield readFile(fileAPath);
  var f2 = yield readFile(fileBPath);
  console.log(f1.toString());
  console.log(f2.toString());
}

function eg1() {
  var g = gen();

  g.next().value.then(function(data) {
    g.next(data).value.then(function(data) {
      g.next(data);
    });
  });
}
// eg1();

function eg2() {
  co(gen)
    .then(() => {
      console.log('Generator 函数执行完成');
    })
    .catch(err => {
      console.log(err);
    });
}
// eg2();

function eg3() {
  // 数组的写法
  co(function*() {
    var res = yield [Promise.resolve(1), Promise.resolve(2)];
    console.log(res); // [1, 2]
  }).catch(err => {
    console.log(err);
  });
}
// eg3();

function eg4() {
  // 对象的写法
  co(function*() {
    var res = yield {
      1: Promise.resolve(1),
      2: Promise.resolve(2)
    };
    console.log(res); // { '1': 1, '2': 2 }
  }).catch(err => {
    console.log(err);
  });
}
// eg4();

function eg5() {
  // 允许并发三个somethingAsync异步操作，等到它们全部完成，才会进行下一步。
  co(function*() {
    var values = [n1, n2, n3];
    yield values.map(somethingAsync);
  });

  function* somethingAsync(x) {
    // do something async
    return y;
  }
}
// eg5();

function eg6(arguments) {
  const stream = fs.createReadStream(
    path.resolve(`${__dirname}/les_miserables.txt`)
  );
  let valjeanCount = 0;

  co(function*() {
    while (true) {
      const res = yield Promise.race([
        new Promise(resolve => stream.once('data', resolve)),
        new Promise(resolve => stream.once('end', resolve)),
        new Promise((resolve, reject) => stream.once('error', reject))
      ]);
      if (!res) {
        break;
      }
      stream.removeAllListeners('data');
      stream.removeAllListeners('end');
      stream.removeAllListeners('error');
      // console.log(res.toString());
      valjeanCount += (res.toString().match(/valjean/gi) || []).length;
    }
    console.log('count:', valjeanCount); // count: 472
  });
}
eg6();
