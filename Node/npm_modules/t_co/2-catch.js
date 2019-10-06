const co = require('co');

// 经过测试  内存没泄漏
function run() {
  co(function*() {
    var Arr = new Array(65536);
    while (true) {
      try {
        yield new Promise((resolve, reject) => {
          setTimeout(function() {
            let t = new Date().getTime();
            if (t % 2 === 0) {
              // console.log(t + ' Error');
              reject(new Error('Some Error'));
            } else {
              console.log(t + ' OK');
              resolve('OK');
            }
          }, Math.random() * 10);
        });
      } catch (err) {
        throw new Error('ABCD');
      }
    }
  }).catch(err => {
    console.log(err.message);
    run();
  });
}

run();

function dustbin() {
  //
  // const filmArr = [
  //   { No: 1, name: '电影一' },
  //   { No: 2, name: '电影二' },
  //   { No: 3, name: '电影三' }
  // ];
  // const store = [];
  // function find(No, callback) {
  //   let film = filmArr.find(elem => {
  //     return elem.No === No;
  //   });
  //   callback(film);
  // }
  // function save(film, callback) {
  //   const dateTimeStr = new Date().toLocaleString();
  //   store.push({ name: film.name, insert_time: dateTimeStr });
  //   callback(`Stored ${film.name} at ${dateTimeStr}`);
  // }
  // function proFind(No) {
  //   return new Promise((resolve, reject) => {
  //     find(No, film => {
  //       if (film.No === 2) {
  //         reject(new Error('Error happen'));
  //       }
  //       resolve(film);
  //     });
  //   });
  // }
  // function proSave(film) {
  //   return new Promise((resolve, reject) => {
  //     save(film, info => {
  //       resolve(info);
  //     });
  //   });
  // }
  // // Generator
  // function* findAndSave(No) {
  //   let arr = filmArr;
  //   let len = filmArr.length;
  //   let index = 0;
  //   while (index < len) {
  //     try {
  //       let film = yield proFind(arr[index].No);
  //       let info = yield proSave(film);
  //       console.log(`Last info:\n${info}\n`);
  //       index++;
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
  // }
  // co(findAndSave());
}
