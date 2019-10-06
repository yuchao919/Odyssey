var net = require('net');

var server = net.createServer(function (connection) {
    console.log('客户端连接');
    connection.on('end', function () {
        console.log('客户端关闭');
    });
    connection.write('Hello World\n');
    connection.pipe(connection);
});

server.listen(8080, function () {
    console.log('net服务器监听8080');
});