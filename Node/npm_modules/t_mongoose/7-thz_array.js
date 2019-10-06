var mongoose = require('mongoose');
mongoose.connect('mongodb://192.168.1.101/thz', { useMongoClient: true });

const fileSchema = mongoose.Schema({
  serial_number: {
    type: String,
    unique: true
  },
  name: String,
  url: String
});

const Film = mongoose.model('Film', fileSchema);

let films = [
  new Film({
    serial_number: 'OFJE-123',
    name: '吉沢明歩最新全14タイトルコンプリートBEST',
    url: 'thread-1160825-1-1.html'
  }),
  new Film({
    serial_number: 'GTAL-003',
    name: 'ゴールデンタイム！おっぱい乱交',
    url: 'thread-213217-1-250.html'
  }),
  new Film({
    serial_number: 'OFJE-123',
    name: '吉沢明歩最新全14タイトルコンプリートBEST',
    url: 'thread-1160825-1-1.html'
  }),
  new Film({
    serial_number: 'APAA-293',
    name: '清楚な巨乳娘・まこ わたしのご奉仕＆絶頂FUCK見てください…。 紺野まこ',
    url: 'thread-221967-1-250.html'
  })
];
let filmIndex = 0;
let filmCount = films.length;

function saveFilm(film) {
  Film.findOne({ serial_number: film.serial_number }, (err, f) => {
    if (err) {
      throw err;
    }
    if (f === null) {
      Film.create(film, (err, f) => {
        if (err) {
          throw err;
        }
        console.log(`${f.serial_number} saved`);
        if (++filmIndex < filmCount) {
          saveFilm(films[filmIndex]);
        } else {
          console.log('All film saved');
        }
      });
    } else {
      console.log(`${film.serial_number} exists`);
      if (++filmIndex < filmCount) {
        saveFilm(films[filmIndex]);
      } else {
        console.log('All film saved');
      }
    }
  });
}
// saveFilm(films[filmIndex]);

// http://thzbbt.net/forum.php?mod=attachment&aid=MzgzOTU2fDMyYTJiNDUwfDE1MDU5MTUxMDN8MHwxMjU0MTcw
// http://thzbbt.net/forum.php?mod=attachment&aid=MTgwNDkwfDU2ZmVkMWU4fDE1MDU5MTUxNTB8MHwxMDU2ODA=qwe
