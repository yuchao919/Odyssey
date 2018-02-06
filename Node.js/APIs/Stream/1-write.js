const fs = require('fs');

let ws = fs.createWriteStream(__dirname + '/test.txt');

let times = 0;
/**
 * Event: 'close'
 * Event: 'drain'
 * Event: 'error'
 * Event: 'finish'
 * Event: 'pipe'
 * Event: 'unpipe'
 */

ws.on('close', () => {
  debugger;
});

ws.on('drain', () => {
  debugger;
});

ws.on('error', () => {
  debugger;
});

ws.on('finish', () => {
  debugger;
});

ws.on('pipe', () => {
  debugger;
});

ws.on('unpipe', () => {
  debugger;
});

// 如果写的文件被删除，write 方法将毫无反应
function loop() {
  setTimeout(() => {
    // ws.write(`hello ${times++}\r\n`, () => {
    //   fs.exists(ws.path, e => {
    //     if (!e) {
    //       ws.destroy();
    //       ws = fs.createWriteStream(ws.path);
    //     }
    //   });
    // });
    ws.write(`hello ${times++}\r\n`);
    loop();
  }, 1);
}
loop();
