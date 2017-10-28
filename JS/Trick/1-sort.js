var arr = [-2, -3, -1, -2, 0, 12, 2, 2, 1, 2, 3];
var arr1 = arr.slice();
var arr2 = arr.slice();
var arr3 = arr.slice();

// console.log(arr1.sort()); // [ -1, -2, -3, 0, 1, 12, 2, 3 ] 根据Unicode来的

arr2.sort((a, b) => {
  // console.log(`[${a}, ${b}]`);
  // console.log(arr2);
  /*     
    // 内部这是快速排序的规

    [-2, 3]
    [ -2, -3, -1, -2, 0, 12, 2, 2, 1, 2, 3 ]
    [-2, 12]
    [ -2, -3, -1, -2, 0, 12, 2, 2, 1, 2, 3 ]
    [3, 12]
    [ -2, -3, -1, -2, 0, 12, 2, 2, 1, 2, 3 ]
    [-1, 3]
    [ -2, 3, -1, -2, 0, -3, 2, 2, 1, 2, 12 ]
    [-2, 3]
    [ -2, -1, 3, -2, 0, -3, 2, 2, 1, 2, 12 ]
    [0, 3]
    [ -2, -1, -2, 3, 0, -3, 2, 2, 1, 2, 12 ]
    [-3, 3]
    [ -2, -1, -2, 0, 3, -3, 2, 2, 1, 2, 12 ]
    [2, 3]
    [ -2, -1, -2, 0, -3, 3, 2, 2, 1, 2, 12 ]
    [2, 3]
    [ -2, -1, -2, 0, -3, 2, 3, 2, 1, 2, 12 ]
    [1, 3]
    [ -2, -1, -2, 0, -3, 2, 2, 3, 1, 2, 12 ]
    [2, 3]
    [ -2, -1, -2, 0, -3, 2, 2, 1, 3, 2, 12 ]
    [-2, -1]
    [ -2, -1, -2, 0, -3, 2, 2, 1, 2, 3, 12 ]
    [-1, -2]
    [ -2, -1, -2, 0, -3, 2, 2, 1, 2, 3, 12 ]
    [-2, -2]
    [ -2, -1, -1, 0, -3, 2, 2, 1, 2, 3, 12 ]
    [-1, 0]
    [ -2, -2, -1, 0, -3, 2, 2, 1, 2, 3, 12 ]
    [0, -3]
    [ -2, -2, -1, 0, -3, 2, 2, 1, 2, 3, 12 ]
    [-1, -3]
    [ -2, -2, -1, 0, 0, 2, 2, 1, 2, 3, 12 ]
    [-2, -3]
    [ -2, -2, -1, -1, 0, 2, 2, 1, 2, 3, 12 ]
    [-2, -3]
    [ -2, -2, -2, -1, 0, 2, 2, 1, 2, 3, 12 ]
    [0, 2]
    [ -3, -2, -2, -1, 0, 2, 2, 1, 2, 3, 12 ]
    [2, 2]
    [ -3, -2, -2, -1, 0, 2, 2, 1, 2, 3, 12 ]
    [2, 1]
    [ -3, -2, -2, -1, 0, 2, 2, 1, 2, 3, 12 ]
    [2, 1]
    [ -3, -2, -2, -1, 0, 2, 2, 2, 2, 3, 12 ]
    [0, 1]
    [ -3, -2, -2, -1, 0, 2, 2, 2, 2, 3, 12 ]
    [2, 2]
    [ -3, -2, -2, -1, 0, 1, 2, 2, 2, 3, 12 ]
  */
  return a > b ? 1 : a === b ? 0 : -1;
});

var arr3 = arr.slice();

function quickSort(array) {
  function sort(prev, numsize) {
    var nonius = prev;
    var j = numsize - 1;
    var flag = array[prev];
    if (numsize - prev > 1) {
      while (nonius < j) {
        for (; nonius < j; j--) {
          if (array[j] < flag) {
            array[nonius++] = array[j]; //a[i] = a[j]; i += 1;
            break;
          }
        }
        for (; nonius < j; nonius++) {
          if (array[nonius] > flag) {
            array[j--] = array[nonius];
            break;
          }
        }
      }
      array[nonius] = flag;
      sort(0, nonius);
      sort(nonius + 1, numsize);
    }
  }
  sort(0, array.length);
  return array;
}
quickSort(arr3);
// console.log(arr3);

var arr_1 = [2, 3, 1, 5, 0, 4];
arr_1.sort((a, b) => {
  // console.log(`[${a}, ${b}]`);
  // console.log(arr_1);
  /**
    [2, 3]
    [ 2, 3, 1, 5, 0, 4 ]
    [3, 1]
    [ 2, 3, 1, 5, 0, 4 ]
    [2, 1]
    [ 2, 3, 3, 5, 0, 4 ]
    [3, 5]
    [ 1, 2, 3, 5, 0, 4 ]
    [5, 0]
    [ 1, 2, 3, 5, 0, 4 ]
    [3, 0]
    [ 1, 2, 3, 5, 5, 4 ]
    [2, 0]
    [ 1, 2, 3, 3, 5, 4 ]
    [1, 0]
    [ 1, 2, 2, 3, 5, 4 ]
    [5, 4]
    [ 0, 1, 2, 3, 5, 4 ]
    [3, 4]
    [ 0, 1, 2, 3, 5, 5 ]
   */
  return a > b ? 1 : a === b ? 0 : -1;
});

function sortFunc(arr) {
  var len = arr.length,
    end = len - 1,
    tmp;

  for (var i = 0; i < end; ++i) {
    if (arr[i] < arr[i + 1]) {
      continue;
    }
    var curr = arr[i + 1];
    arr[i + 1] = arr[i];

    
    for (var j = i; j > 0; --j) {
      var k = j - 1;
      if (arr[k] > arr[j]) {
        arr[j] = arr[k];
      } else {
        arr[k] = curr;
        break;
      }
    }
  }
  return arr;
}
console.log(sortFunc(arr.slice()));
