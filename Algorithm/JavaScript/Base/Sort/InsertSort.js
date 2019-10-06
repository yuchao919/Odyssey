function InsertSort(arr) {
  var i, j, len, temp;
  len = arr.length;
  for (i = 1; i < len; ++i) {
    if (arr[i] < arr[i - 1]) {
      temp = arr[i];
      for (j = i - 1; j > -1 && temp < arr[j]; --j) {
        arr[j + 1] = arr[j];
      }
      arr[j + 1] = temp;
    }
  }
}

var arr = [2, 4, 6, 1, 3, 7, 8, 5, 0, 9];
InsertSort(arr);
console.log(arr);
