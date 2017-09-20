const fs = require('fs');
const path = require('path');

function originWay() {
  fs.readFile(`${__dirname}/A.txt`, 'utf-8', (err, data) => {
    console.log(data);
    fs.readFile(`${__dirname}/B.txt`, 'utf-8', (err, data) => {
      console.log(data);
    });
  });
}

function promiseWay() {
  function fsReadFilePromise(filePath, options) {
    return new Promise((resolve, reject) => {
      fs.readFile(filePath, options, (err, data) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(data);
      });
    });
  }

  fsReadFilePromise(`${__dirname}/A.txt`, 'utf-8')
    .then(data => {
      return data;
    })
    .then(data => {
      if (data === 'true') {
        return fsReadFilePromise(`${__dirname}/B.txt`, 'utf-8');
      } else {
        return fsReadFilePromise(`${__dirname}/C.txt`, 'utf-8');
      }
    })
    .then(data => {
      console.log(data);
    })
    .catch(err => {
      console.log(err);
    });
}

promiseWay();
