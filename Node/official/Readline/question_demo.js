var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

// question方法
rl.question('what is you name?\n', function(answer) {
  console.log('my name is ' + answer);
  //不加close，则不会结束
  rl.close();
});
// close事件监听
rl.on('close', function() {
  console.log('欢迎下次再来');
  process.exit(0);
});
