const net = require('net');

const socket = net.connect({port: 8124}, () => {
  // console.log(getTime() + '2. connectListener');
});
// 1
socket.on('lookup', (err, address, family, host) => {
  console.log(getTime() + ' 1. event lookup:');
});

// 2
socket.on('connect', () => {
  console.log(getTime() + ' 2. event connect');
});

// 3
socket.on('data', buf => {
  console.log(getTime() + ' receive data : ' + buf);
  console.log(getTime() + ' 3. event data');
});

// 3
socket.on('close', had_error => {
  console.log(getTime() + ' 5. event close');
});

socket.on('drain', () => {
  console.log(getTime() + ' event drain');
});

socket.on('end', () => {
  console.log(getTime() + ' 4. event end');
});

socket.on('error', err => {
  console.log(getTime() + ' 0. event error');
});

socket.write('hello', 'utf8', () => {
  console.log(getTime() + ' socket write hello');
});
socket.write('world!', 'utf8', () => {
  console.log(getTime() + ' socket write world!');
});
// socket.write('close', 'utf8', () => {
//   console.log(getTime() + ' socket write close');
//   socket.end();
//   socket.destroy();
// });

function getTime() {
  let now = new Date(),
    h = now.getHours(),
    m = now.getMinutes(),
    s = now.getSeconds(),
    f = now.getMilliseconds();
  h = h < 10 ? '0' + h : h;
  m = m < 10 ? '0' + m : m;
  s = s < 10 ? '0' + s : s;
  f = f < 100 ? (f < 1 ? '00' + f : '0' + f) : f;
  return `${h}:${m}:${s}.${f}`;
}
