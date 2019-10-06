const mongoose = require('mongoose');

// const db = mongoose.createConnection('mongodb://192.168.1.101/thz', {
//   useMongoClient: true
// });
mongoose.connect('mongodb://192.168.1.101/thz', {
  useMongoClient: true
});

const fileSchema = new mongoose.Schema({
  serial_number: {
    type: String,
    unique: true
  },
  name: String,
  url: String,
  isDownloaded: {
    type: Boolean,
    default: false
  }
});

const Film = mongoose.model('Film', fileSchema);

// Film.find({}, (err, filmArr) => {
//   if (err) {
//   }
//   console.log(filmArr.length);
// });

// Film.find(function(err, filmArr) {
//   if (err) {
//     return console.error(err);
//   }
//   // 进不去断点
//   console.log(filmArr.length);
// });

// Film.findOne({}, (err, f) => {
//   if (err) {
//     return console.log(err);
//   }
//   console.log(f);
// });

// Film.find({})
//   .limit(15000)
//   .exec((err, result) => {
//     console.log(result);
//   });

// Film.find({
//     isDownloaded: false
//   })
//   .limit(100)
//   .exec((err, result) => {
//     console.log(result);
//   });

Film.update({}, {
  $set: {
    isDownloaded: false
  }
}, {
  multi: true
}, (err, result) => {
  console.log(result);
})