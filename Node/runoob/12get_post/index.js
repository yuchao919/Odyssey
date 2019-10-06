var http = require('http');
var url = require('url');
var util = require('util');

http.createServer(function (req, res) {
    var params = url.parse(req.url, true).query;

    // 解析url参数
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.write('网站名：' + params.name);
    res.write('\n');
    res.write('网站URL：' + params.url);
    res.end();
}).listen(8888);