[0, 1, 2, 3, 4].reduce(function(
  accumulator,
  currentValue,
  currentIndex,
  array
) {
  return accumulator + currentValue;
});

// callback 	  accumulator 	  currentValue    currentIndex    array               return value
// first call 	0               1               1 	            [0, 1, 2, 3, 4]     1
// second call 	1               2               2 	            [0, 1, 2, 3, 4]     3
// third call 	3               3               3 	            [0, 1, 2, 3, 4]     6
// fourth call 	6               4               4 	            [0, 1, 2, 3, 4]     10
