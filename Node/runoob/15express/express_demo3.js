var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.send('Hello World');
});

var server = app.listen(8081, function () {
    var address = server.address();
    var host = address.address;
    var port = address.port;

    console.log('应用实例，访问地址为http://%s:%s', host, port);
});