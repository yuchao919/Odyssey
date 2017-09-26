function sorting(a, b) {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
}

var arr = [1, 5, 2, 5, 6, 7, 4, 3];
console.log(arr.sort(sorting));
// arr = [1, 5, 2, 5, 6, 7, 4, 3];
// console.log(arr);
arr = [1, 5, 2, 5, 6, 7, 4, 3];
console.log(arr.sort());

arr = [1, 5, 2, 5, 6, 7, 4, 3];
console.log(
  arr.sort((a, b) => {
    return a < b;
  })
);

arr = [1, 5, 2, 5, 6, 7, 4, 3];
console.log(
  arr.sort((a, b) => {
    return true;
  })
);
