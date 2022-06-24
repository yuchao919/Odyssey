/**
 * Given an integer, convert it to a roman numeral.
 * Input is guaranteed to be within the range from 1 to 3999.
 */

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
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
  let n = 1,
    numStr = '';
  while (num > 0) {
    let m = num % 10;
    m *= n;
    numStr = dict[m] + numStr;
    num = parseInt(num / 10, 10);
    n *= 10;
  }
  return numStr;
};

/**
  * 罗马数字采用七个罗马字母作数字、即Ⅰ（1）、X（10）、C（100）、M（1000）、V（5）、L（50）、D（500）。
  * 记数的方法：
  *   相同的数字连写，所表示的数等于这些数字相加得到的数，如 Ⅲ=3；
  *   小的数字在大的数字的右边，所表示的数等于这些数字相加得到的数，如 Ⅷ=8、Ⅻ=12；
  *   小的数字（限于 Ⅰ、X 和 C）在大的数字的左边，所表示的数等于大数减小数得到的数，如 Ⅳ=4、Ⅸ=9；
  *   在一个数的上面画一条横线，表示这个数增值 1,000 倍，如
  */

require('./000_Test')(
  [
    // {input: 1, expected: 'I'},
    // {input: 2, expected: 'II'},
    // {input: 3, expected: 'III'},
    // {input: 4, expected: 'IV'},
    // {input: 5, expected: 'V'},
    // {input: 6, expected: 'VI'},
    // {input: 7, expected: 'VII'},
    // {input: 8, expected: 'VIII'},
    // {input: 9, expected: 'IX'},
    // {input: 10, expected: 'X'},
    // {input: 20, expected: 'XX'},
    // {input: 30, expected: 'XXX'},
    // {input: 40, expected: 'XL'},
    // {input: 50, expected: 'L'},
    // {input: 60, expected: 'LX'},
    // {input: 70, expected: 'LXX'},
    // {input: 80, expected: 'LXXX'},
    // {input: 90, expected: 'XC'},
    // {input: 100, expected: 'C'},
    // {input: 200, expected: 'CC'},
    // {input: 300, expected: 'CCC'},
    // {input: 400, expected: 'CD'},
    // {input: 500, expected: 'D'},
    // {input: 600, expected: 'DC'},
    // {input: 700, expected: 'DCC'},
    // {input: 800, expected: 'DCCC'},
    // {input: 900, expected: 'CM'},
    // {input: 1000, expected: 'M'},
    // {input: 2000, expected: 'MM'},
    // {input: 3000, expected: 'MMM'},

    {input: 999, expected: 'CMXCIX'},
    {input: 1900, expected: 'MCM'},
    {input: 1990, expected: 'MCMXC'},
    {input: 3999, expected: 'MMMCMXCIX'}
  ],
  intToRoman
);
