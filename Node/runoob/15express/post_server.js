var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// 创建application/x-www-form-urlencoded编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static('public'));

app.get('/index.html', function (req, res) {
    res.sendFile(__dirname + '/' + 'post.html');
});

app.post('/process_post', urlencodedParser, function (req, res) {
    // 输出JSON格式
    var response = {
        first_name: req.body.first_name,
        last_name: req.body.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
})

var server = app.listen(8081, function () {
    var address = server.address();
    var host = address.address;
    var port = address.port;

    console.log('应用实例，访问地址为 http://%s:%s', host, port);
});