var fs = require('fs');

fs.mkdir('./data/', function (err) {
    if (err) {
        console.log(err.stack);
    }

    console.log('创建data文件夹');
});