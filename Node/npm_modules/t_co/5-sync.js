// 永远不要想着把异步改成同步
// 最多改称async await的写法


function asyncCompute(num, callback) {
  setTimeout(function() {
    callback(num * 2);
  }, 1000);
}

// asyncCompute(100, val => {
//   console.log(val);
// });
function run(generator, res) {
  const ret = generator.next(res);
  if (ret.done) {
    return ret.value;
  }
  ret.value.then(function(res) {
    run(generator, res);
  });
}

function syncCompute(num) {
  const gen = function*(num) {
    const val = yield new Promise((resolve, reject) => {
      asyncCompute(num, val => {
        resolve(val);
      });
    });
    return val;
  };
  let v = run(gen(num));
  return v;
}

let result = syncCompute(200);
console.log(result);

// yield new Promise((resolve, reject) => {
//   asyncCompute(num, val => {
//     resolve(val);
//   });
// });
// return val;
