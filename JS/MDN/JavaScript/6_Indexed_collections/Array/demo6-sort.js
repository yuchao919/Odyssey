var numbers = [4, 2, 5, 1, 3];

numbers.sort();
console.log(numbers); // [ 1, 2, 3, 4, 5 ]

numbers.sort(function(a, b) {
  return b - a;
});
console.log(numbers); // [ 5, 4, 3, 2, 1 ]
