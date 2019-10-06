function QuickSort(arr, low, high) {
  if (low < high) {
    var pivotpos = Partition(arr, low, high);
    QuickSort(arr, low, pivotpos - 1);
    QuickSort(arr, pivotpos + 1, high);
  }
}

function Partition(arr, low, high) {
  var pivot = arr[low];
  while (low < high) {
    while (low < high && arr[high] >= pivot) {
      --high;
    }
    arr[low] = arr[high];
    while (low < high && arr[low] <= pivot) {
      ++low;
    }
    arr[high] = arr[low];
  }
  arr[low] = pivot;
  return low;
}

// var arr = [2, 4, 6, 1, 3, 7, 8, 5, 0, 9];
// QuickSort(arr, 0, 9);
// console.log(arr);

module.exports = QuickSort;
