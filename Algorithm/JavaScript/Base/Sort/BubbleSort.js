function BubbleSort(arr) {
  var end, done, temp;
  end = arr.length - 1;
  for (var i = 0; i < end; ++i) {
    done = true;
    for (var j = end; j > i; --j) {
      if (arr[j - 1] > arr[j]) {
        temp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = temp;
        done = false;
      }
    }
    if (done) {
      // 未发生移动则说明排序已完成
      break;
    }
  }
}

var arr = [2, 4, 6, 1, 3, 7, 8, 5, 0, 9];
BubbleSort(arr);
console.log(arr);
