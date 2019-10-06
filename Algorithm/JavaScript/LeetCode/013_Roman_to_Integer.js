/**
 * Given a roman numeral, convert it to an integer.
 * Input is guaranteed to be within the range from 1 to 3999.
 */

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  var dict = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };
  var num = 0,
    index = 0,
    len = s.length;
  while (index < len) {
    var c = dict[s[index]];
    if (dict[s[index]] < dict[s[index + 1]]) {
      num += c * -1;
    } else {
      num += c;
    }
    index++;
  }

  return num;
};

require('./000_Test')(
  [
    {expected: 1, input: 'I'},
    {expected: 2, input: 'II'},
    {expected: 3, input: 'III'},
    {expected: 4, input: 'IV'},
    {expected: 5, input: 'V'},
    {expected: 6, input: 'VI'},
    {expected: 7, input: 'VII'},
    {expected: 8, input: 'VIII'},
    {expected: 9, input: 'IX'},
    {expected: 10, input: 'X'},
    {expected: 20, input: 'XX'},
    {expected: 30, input: 'XXX'},
    {expected: 40, input: 'XL'},
    {expected: 50, input: 'L'},
    {expected: 60, input: 'LX'},
    {expected: 70, input: 'LXX'},
    {expected: 80, input: 'LXXX'},
    {expected: 90, input: 'XC'},
    {expected: 100, input: 'C'},
    {expected: 200, input: 'CC'},
    {expected: 300, input: 'CCC'},
    {expected: 400, input: 'CD'},
    {expected: 500, input: 'D'},
    {expected: 600, input: 'DC'},
    {expected: 700, input: 'DCC'},
    {expected: 800, input: 'DCCC'},
    {expected: 900, input: 'CM'},
    {expected: 1000, input: 'M'},
    {expected: 2000, input: 'MM'},
    {expected: 3000, input: 'MMM'},

    {expected: 999, input: 'CMXCIX'},
    {expected: 1900, input: 'MCM'},
    {expected: 1990, input: 'MCMXC'},
    {expected: 3999, input: 'MMMCMXCIX'}
  ],
  romanToInt
);

const dict = {
  0: '',
  1: 'I',
  2: 'II',
  3: 'III',
  4: 'IV',
  5: 'V',
  6: 'VI',
  7: 'VII',
  8: 'VIII',
  9: 'IX',
  10: 'X',
  20: 'XX',
  30: 'XXX',
  40: 'XL',
  50: 'L',
  60: 'LX',
  70: 'LXX',
  80: 'LXXX',
  90: 'XC',
  100: 'C',
  200: 'CC',
  300: 'CCC',
  400: 'CD',
  500: 'D',
  600: 'DC',
  700: 'DCC',
  800: 'DCCC',
  900: 'CM',
  1000: 'M',
  2000: 'MM',
  3000: 'MMM'
};
