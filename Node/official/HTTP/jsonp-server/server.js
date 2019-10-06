//通过require将http库包含到程序中
const http = require('http');
//引入url模块解析url字符串
const url = require('url');
//引入querystring模块处理query字符串
const querystring = require('querystring');

const fs = require('fs');
const path = require('path');
//创建新的HTTP服务器
const server = http.createServer();
//通过request事件来响应request请求
server.on('request', function(req, res) {
  const urlPath = url.parse(req.url).pathname;
  const qs = querystring.parse(req.url.split('?')[1]);
  if (urlPath === '/asd' && qs.cb) {
    res.writeHead(200, { 'Content-Type': 'application/json;charset=utf-8' });
    const parma = {
      name: 'Monkey'
    };
    data = JSON.stringify(parma);
    const callback = qs.cb + '(' + data + ');';
    res.end(callback);
  } else {
    res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
    fs.createReadStream(path.dirname(__filename) + '/index.html').pipe(res);
  }
});
//监听9000端口
server.listen('9000');
//用于提示我们服务器启动成功
console.log('Server running!');
