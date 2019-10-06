const path = require('path');
const fs = require('fs');
const net = require('net');
const http = require('http');

// HTTP Server
http
  .createServer(function(req, res) {
    fs.createReadStream(path.join(__dirname, 'index.html')).pipe(res);
  })
  .listen(8080);

// WS Server
const ws = net.createServer();

let sno = 0;

ws.on('connection', socket => {
  socket.on('connect', err => {
    // 在这里没有监听到这个函数，说明该事件发生到监听之前
    console.log(`${sno++}.Socket.connect`);
  });

  socket.on('data', buf => {
    console.log(buf.toString());
    console.log(`${sno++}.Socket.data`);
  });

  socket.on('drain', err => {
    // 没有监听到，没发生该事件吧
    console.log(`${sno++}.Socket.drain`);
  });

  socket.on('end', err => {
    // 客户端那边的socket调用destroy的时候触发这边的end事件
    console.log(`${sno++}.Socket.end`);
  });

  socket.on('close', err => {
    // 触发error事件会自动触发close
    console.log(`${sno++}.Socket.close`);
  });

  socket.on('error', err => {
    // 客户端的socket不正常关闭就会触发error事件
    console.log(`${sno++}.Socket.error`);
  });
});

ws.on('error', err => {
  console.log(err.message);
});

ws.listen(8081);
