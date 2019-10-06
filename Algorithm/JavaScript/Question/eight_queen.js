// n=11就算不出来了~
function printNQueen(n) {
  var result = [];

  // 初始化，第一轮把所有单个元素添加到结果集中
  for (var i = 0; i < n; ++i) {
    result.push([i]);
  }

  var round = 1;
  while (round < n) {
    // n皇后就代表一个结果要添加n个数，首个数字已初始化
    var len = result.length; // 当前结果集个数

    while (len--) {
      var item = result.shift();

      for (var i = 0; i < n; ++i) {
        var flag = true;
        // 依次检验每个数是否能作为当前结果的新元素
        for (var j = 0; j < round; ++j) {
          var index = item[j]; // 当前结果的每一行位置
          var distance = round - j; // 对角线步长
          if (i === index || i === index - distance || i === index + distance) {
            // 新元素不能等于当前列值和对角线值
            flag = false;
            break;
          }
        }
        if (flag) {
          var newItem = Array.from(item); // 复制该结果
          newItem.push(i); // 添加新元素
          result.push(newItem); // 暂存到结果集中
        }
      }
    }
    round++;
  }
  return result;
}

console.log(printNQueen(11));

// // 当前数组
// // 添加第t+1个数
// // 检验n是否满足第t+1个数的条件
// // [5, 1, 6]
// // [(5-3,5+3),(1-2,1+2),(6-1,6+1)]
// function check(arr, t, n) {
//   for (var i = 0; i < t; ++i) {
//     var val = arr[i];
//     var len = t - i;
//     if (n === val || n === val - len || n === val + len) {
//       return false;
//     }
//   }
//   return true;
// }

// if (check(item, round, i)) {
//   var newItem = Array.from(item);
//   newItem.push(i);
//   result.push(newItem);
// }
