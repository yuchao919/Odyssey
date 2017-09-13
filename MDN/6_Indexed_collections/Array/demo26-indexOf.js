var arr = [1, [2], [3, [3]], { 1: 1 }];
console.log(arr.indexOf(1)); // 0
console.log(arr.indexOf([2])); // -1
console.log(arr.indexOf([3, [3]])); // -1
console.log(arr.indexOf({ 1: 1 })); // -1
