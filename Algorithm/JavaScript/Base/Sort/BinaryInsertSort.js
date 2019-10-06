function BinaryInsertSort(arr) {
  var i, j, low, high, mid, cur, len;
  len = arr.length;

  for (i = 1; i < len; ++i) {
    cur = arr[i];
    low = 0;
    high = i - 1;
    while (low <= high) {
      mid = Math.floor((low + high) / 2);
      if (arr[mid] > cur) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    high += 1;
    for (j = i - 1; j >= high; --j) {
      arr[j + 1] = arr[j];
    }
    arr[high] = cur;
  }
}

var arr = [2, 4, 6, 1, 3, 7, 8, 5, 0, 9];
BinaryInsertSort(arr);
console.log(arr);
