const mongoose = require('mongoose');

const db1 = mongoose.createConnection('mongodb://192.168.1.101/test1', {
  useMongoClient: true
});

const db2 = mongoose.createConnection('mongodb://192.168.1.101/test2', {
  useMongoClient: true
});

// m1.connect('mongodb://192.168.1.101/test1', {
//   useMongoClient: true
// });

// m2.connect('mongodb://192.168.1.101/test2', {
//   useMongoClient: true
// });

const F1 = db1.model(
  'Foo',
  new mongoose.Schema({
    name: String
  })
);

const F2 = db2.model(
  'Foo',
  new mongoose.Schema({
    name: String
  })
);

F1.create(new F1({ name: '123' }), (err, f) => {
  if (err) {
  }
  console.log(f);
});

F2.create(new F2({ name: '123' }), (err, f) => {
  if (err) {
  }
  console.log(f);
});
