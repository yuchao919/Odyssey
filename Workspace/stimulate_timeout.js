setTimeout(function() {
  throw new Error('Time limit exceeded.');
}, 2000);

var processTime = 0;
for (var index = 0; index < 100; index++) {
  process();
}

function process(ele) {
  let tout = setTimeout(function() {
    throw new Error('Time limit exceeded.');
  }, 2000);
  console.log(`process ${++processTime} ${new Date()}`);
  //模拟长时间的处理过程
  sleep(Math.random() * 10000);
}

function sleep(sleepTime) {
  var start = new Date().getTime();
  while (true) {
    if (new Date().getTime() - start > sleepTime) {
      break;
    }
  }
}

function dustbin() {
  //常规操作
  // tcCircle();

  //注释上面的代码 放开下面注释 以执行setTimeout数组分块操作
  // tcCircleUseSetTimeout();
  //time consuming circle
  function tcCircle() {
    var arr = new Array(100);
    for (var i = 0; i < arr.length; i++) {
      process(arr[i]);
    }
    //页面标题栏一直转圈 且下面的语句迟迟无法执行
    console.log('important process');
    console.log('finish!');
  }

  function tcCircleUseSetTimeout() {
    var arr = new Array(100);
    setTimeout(function() {
      var ele = arr.shift();
      process(ele);
      if (arr.length > 0) {
        setTimeout(arguments.callee, 100);
      }
    }, 100);
    console.log('important process');
    console.log('finish!');
  }
}
