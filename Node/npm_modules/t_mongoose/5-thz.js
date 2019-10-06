var mongoose = require('mongoose');
mongoose.connect('mongodb://192.168.1.101/thz');

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

Film.findOne({
  serial_number: films[0].serial_number
}, (err, film) => {

  if (film === null) {
    Film.create(films[0], (err, film) => {

      Film.findOne({
        serial_number: films[1].serial_number
      }, (err, film) => {
        if (film === null) {

        }

      })
    })
    Film.findOne({
      serial_number: films[1].serial_number
    }, (err, film) => {
      if (film === null) {

      }

    })
  }


})

//
//
//

function dustbin() {
  function test0() {
    // let film = new Film({
    //   serial_number: 'OFJE-123',
    //   name: '吉沢明歩最新全14タイトルコンプリートBEST',
    //   url: 'thread-1160825-1-1.html'
    // });
    // film.save((err, film, numAffected) => {
    //   if (err) {
    //     return console.log(err);
    //   }
    //   debugger;
    // });
    //
    //
    //
    // Film.findOne({ serial_number: 'OFJE-124' }, (err, film) => {
    //   if (err) {
    //     return console.log(err);
    //   }
    //   if (film) {
    //     Film.create(
    //       {
    //         serial_number: 'OFJE-123',
    //         name: '吉沢明歩最新全14タイトルコンプリートBEST',
    //         url: 'thread-1160825-1-1.html',
    //         upload_date: '2017-8-23'
    //       },
    //       (err, film) => {}
    //     );
    //   }
    // });
    //
    //
    //
  }

  function test1() {
    // //用Promise, Generator方式来写这个东西
    // for (let f of films) {
    //   new Promise((resolve, reject) => {
    //     Film.findOne({ serial_number: f.serial_number }, (err, film) => {
    //       if (err) {
    //         reject(err);
    //       }
    //       resolve(film);
    //     });
    //   }).then(film => {
    //     if (film !== null) {
    //       console.log(`${film.serial_number} is Exists`);
    //       return;
    //     }
    //     Film.create(f, (err, film) => {
    //       console.log(`${film.serial_number} Stored`);
    //     });
    //   });
    // }
    // 这样的结果不行
    // OFJE-123 Stored
    // APAA-293 Stored
    // GTAL-003 Stored
    // OFJE-123 Stored
    // function* saveFilm(film) {
    //   let p1 = yield new Promise((resolve, reject) => {
    //     Film.findOne({ serial_number: f.serial_number }, (err, film) => {
    //       if (err) {
    //         reject(err);
    //       }
    //       resolve(film);
    //     });
    //   });
    //   let p2 = p1.then(film => {
    //     if (film !== null) {
    //       console.log(`${film.serial_number} is Exists`);
    //       return;
    //     }
    //     Film.create(f, (err, film) => {
    //       console.log(`${film.serial_number} Stored`);
    //     });
    //   });
    // }
  }

  function test3() {
    // while (index < len) {
    //   let film = films[index++];
    // }
    // for (let f of films) {
    //   promise.then;
    // }
    // function saveFilm(film) {
    //   return Promise.resolve(() => {
    //     Film.findOne({ serial_number: film.serial_number }, (err, film) => {
    //       if (err) {
    //         reject(err);
    //       }
    //       resolve(film);
    //     });
    //   }).then(film => {
    //     if (film !== null) {
    //       console.log(`${film.serial_number} is Exists`);
    //       return;
    //     }
    //     Film.create(f, (err, film) => {
    //       if (err) {
    //         throw err;
    //       }
    //       console.log(`${film.serial_number} Stored`);
    //     });
    //   });
    // }
  }

  function test4() {
    let promise = Promise.resolve();
    let len = films.length;
    let index = 0;

    let f = films[0];

    Film.findOne({
        serial_number: f.serial_number
      },
      (err, film) => {
        if (film !== null) {
          console.log(`${film.serial_number} is Exist`);
        }
        Film.create(f, (err, film) => {
          if (err) {
            throw err;
          }
          console.log(`${film.serial_number} Stored`);
        });
      }
    );
  }

  function test5() {
    // function* saveFilms(filmArr) {
    //   for (let f of filmArr) {
    //     let isExist = yield new Promise((resolve, reject) => {
    //       Film.findOne({
    //         serial_number: f.serial_number
    //       }, (err, film) => {
    //         if (err) {
    //           return reject(err);
    //         }
    //         resolve(film)
    //       });
    //     });
    //     if (isExist) {
    //       const p2 = yield new Promise((resolve, reject) => {
    //         Film.create(f, (err, film) => {
    //           if (err) {
    //             return reject(err)
    //           }
    //           console.log(`${film.serial_number} Stored`);
    //           resolve(true)
    //         });
    //       });
    //     }
    //   }
    // }
    // let g = saveFilms(films);
    // while (true) {
    //   g.next().then(isExist => {
    //     g.next(isExist)
    //   })
    // }
  }

  function test6() {
    // Promise.resolve(() => {
    //   Film.findOne({
    //     serial_number: film.serial_number
    //   }, (err, film) => {
    //     if (err) {
    //       reject(err);
    //     }
    //     resolve(film);
    //   });
    // }).then(film => {
    //   if (film !== null) {
    //     console.log(`${film.serial_number} is Exists`);
    //     return;
    //   }
    //   Film.create(f, (err, film) => {
    //     if (err) {
    //       throw err;
    //     }
    //     console.log(`${film.serial_number} Stored`);
    //   });
    // });
  }

  function test7() {
    Promise.resolve()
      .then(() => {
        return new Promise((resovle, reject) => {
          let f = films[0];
          Film.findOne({
              serial_number: f.serial_number
            },
            (err, film) => {
              if (err) {
                reject(err);
              }
              resovle({
                isExist: film !== null,
                film: f
              });
            }
          );
        });
      })
      .then(val => {
        if (val.isExist) {
          return console.log(`${val.film.serial_number} is exist`);
        }
        Film.create(val.film, (err, film) => {
          if (err) {
            return console.log(`${val.film.serial_number} store failed`);
          }
          console.log(`${val.film.serial_number} stored`);
        });
      })
      .then(() => {
        return new Promise((resovle, reject) => {
          let f = films[1];
          Film.findOne({
              serial_number: f.serial_number
            },
            (err, film) => {
              if (err) {
                reject(err);
              }
              resovle({
                isExist: film !== null,
                film: f
              });
            }
          );
        });
      })
      .then(val => {
        if (val.isExist) {
          return console.log(`${val.film.serial_number} is exist`);
        }
        Film.create(val.film, (err, film) => {
          if (err) {
            return console.log(`${val.film.serial_number} store failed`);
          }
          console.log(`${val.film.serial_number} stored`);
        });
      })
      .then(() => {
        return new Promise((resovle, reject) => {
          let f = films[2];
          Film.findOne({
              serial_number: f.serial_number
            },
            (err, film) => {
              if (err) {
                reject(err);
              }
              resovle({
                isExist: film !== null,
                film: f
              });
            }
          );
        });
      })
      .then(val => {
        if (val.isExist) {
          return console.log(`${val.film.serial_number} is exist`);
        }
        Film.create(val.film, (err, film) => {
          if (err) {
            return console.log(`${val.film.serial_number} store failed`);
          }
          console.log(`${val.film.serial_number} stored`);
        });
      })
      .then(() => {
        return new Promise((resovle, reject) => {
          let f = films[3];
          Film.findOne({
              serial_number: f.serial_number
            },
            (err, film) => {
              if (err) {
                reject(err);
              }
              resovle({
                isExist: film !== null,
                film: f
              });
            }
          );
        });
      })
      .then(val => {
        if (val.isExist) {
          return console.log(`${val.film.serial_number} is exist`);
        }
        Film.create(val.film, (err, film) => {
          if (err) {
            return console.log(`${val.film.serial_number} store failed`);
          }
          console.log(`${val.film.serial_number} stored`);
        });
      });
  }

  function test8() {

    function* saveFilm(film) {
      while (film !== null) {
        let isExist = yield new Promise((resolve, reject) => {
          Film.findOne({
            serial_number: film.serial_number
          }, (err, f) => {
            if (err) {
              reject(err);
            }
            resolve(f !== null);
          });
        });
        if (!isExist) {
          film = yield new Promise((resovle, reject) => {
            Film.create(film, (err, f) => {
              if (err) {
                reject(err);
              }
              console.log(`${film.serial_number} stored`);
              resovle(f);
            });
          });
        } else {
          console.log(`${film.serial_number} is exist`);
          film = yield;
        }
      }
      return;
    }

    var gen = saveFilm(films[0]);
    gen.next().value.then(isExist => {
      if (!isExist) {
        gen.next(isExist).value.then(f => {
          gen.next(films[1]);
        });
      } else {
        gen.next(films[1]);
      }
    });

  }
}