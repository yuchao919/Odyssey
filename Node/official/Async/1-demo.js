const filmArr = [
  {No: 1, name: "电影一"},
  {No: 2, name: "电影二"},
  {No: 3, name: "电影三"}
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
  store.push({name: film.name, insert_time: dateTimeStr});
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

const asyncFindAndSave = async function(No) {
  const film = await proFind(No);
  const info = await proSave(film);
  console.log(`Last info:\n${info}\n`);
};

asyncFindAndSave(1);
