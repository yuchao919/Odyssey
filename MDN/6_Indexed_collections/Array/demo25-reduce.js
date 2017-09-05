[
  100,
  111,
  222,
  333,
  444
].reduce((accumulator, currentValue, currentIndex, array) => {
  // console.log(`${accumulator}\t\t${currentValue}\t\t${currentIndex}\t\t${array}\t\t${accumulator+currentValue}`);
  return accumulator + currentValue;
}, 10);

// callback       accumulator     currentValue    currentIndex    array               return value
// first call     10              100             0               [0, 1, 2, 3, 4]     110
// second call    10              111             1               [0, 1, 2, 3, 4]     221
// third call     11              222             2               [0, 1, 2, 3, 4]     443
// fourth call    13              333             3               [0, 1, 2, 3, 4]     776
// fifth call     16              444             4               [0, 1, 2, 3, 4]     1220
