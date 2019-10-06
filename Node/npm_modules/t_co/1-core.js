const co = require('co');

function run(generator, res) {
  const ret = generator.next(res);
  if (ret.done) return;
  ret.value.then(function(res) {
    run(generator, res);
  });
}

// let count = 1;

// function tick(time) {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       console.log('tick %s after %s ms', count++, time);
//       resolve();
//     }, time);
//   });
// }

// function* main() {
//   console.log('start run...');
//   yield tick(500);
//   yield tick(1000);
//   yield tick(2000);
// }

// run(main());

const filmArr = [
  { No: 1, name: '电影一' },
  { No: 2, name: '电影二' },
  { No: 3, name: '电影三' }
];

const store = [];

function find(No, callback) {
  let film = filmArr.find(elem => {
    return elem.No === No;
  });
  callback(film);
}

function save(film, callback) {
  const dateTimeStr = new Date().toLocaleString();
  store.push({ name: film.name, insert_time: dateTimeStr });
  callback(`Stored ${film.name} at ${dateTimeStr}`);
}

function proFind(No) {
  return new Promise((resolve, reject) => {
    find(No, film => {
      resolve(film);
    });
  });
}

function proSave(film) {
  return new Promise((resolve, reject) => {
    save(film, info => {
      resolve(info);
    });
  });
}

// proFind(1).then(film => {
//   console.log(film.name);
// });

// find(1, film => {
//   console.log(film.name);
// });

// Origin
find(1, film => {
  save(film, info => {
    console.log(`Last info:\n${info}\n`);
  });
});

// Generator
function* findAndSave(No) {
  let film = yield proFind(No);
  let info = yield proSave(film);
  console.log(`Last info:\n${info}\n`);
}

run(findAndSave(2));

co(findAndSave(3));
