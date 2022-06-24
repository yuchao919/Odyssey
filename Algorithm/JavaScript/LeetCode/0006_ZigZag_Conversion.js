/**
 * The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: 
 * (you may want to display this pattern in a fixed font for better legibility)
 * P   A   H   N
 * A P L S I I G
 * Y   I   R
 * And then read line by line: "PAHNAPLSIIGYIR"
 * Write the code that will take a string and make this conversion given a number of rows:
 * string convert(string text, int nRows);
 * convert("PAYPALISHIRING", 3) should return "PAHNAPLSIIGYIR". 
 * 
 * PAYPALISHIRING
 * 01234567890123
 * 
 * numsRow:3
 * P       A       H       N
 * 0       4       8       12     3+1
 * A   P   L   S   I   I   G
 * 1   3   5   7   9   11  13 
 * Y       I       R
 * 2       6       10
 * 
 * 
 * numRows：2
 * 0    2     4               ~ 2
 * 1    3     5               ~ 2
 * 
 * numRows:3
 * 0          4           8   ~ 4
 * 1    3     5     7     9   ~ 2， 2
 * 2          6           10  ~ 2
 * 
 * 
 * numRows:4
 * 0                6             12      ~ 6
 * 1          5     7        11   13      ~ 4, 2
 * 2    4           8   10        14      ~ 2，6 
 * 3                9             15      ~ 6
 * 
 * numRows:9
 * 0                                            16                                              32  ~ 16
 * 1                                      15    17                                        31    33  ~ 14, 2
 * 2                                14          18                                  30          34  ~ 12, 4
 * 3                          13                19                            29                35  ~ 10, 6
 * 4                    12                      20                      28                      36  ~ 8,  8
 * 5              11                            21                27                            37  ~ 6,  10 
 * 6        10                                  22          26                                  38  ~ 4， 12
 * 7    9                                       23    25                                        39  ~ 2,  14
 * 8                                            24                                              40  ~ 16
 * 
 * 题目不难，只是开始没理解题意额。
 * 
 * lastEditTime：2017-08-03 15:28:22
 */

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (numRows === 1) {
    return s;
  }

  var len = s.length,
    str = [],
    gaps = [],
    rowIndex = 0,
    index = 0,
    lastRowIndex = numRows - 1,
    maxGap = lastRowIndex * 2,
    g = 0,
    e = 0;

  //第一行和最后一行特殊
  while (index < len) {
    str.push(s[index]);
    index += maxGap;
  }
  rowIndex = 1;
  while (rowIndex < lastRowIndex) {
    index = rowIndex;
    g = 2 * rowIndex;
    e = 0;
    gaps = [maxGap - g, g];
    while (index < len) {
      str.push(s[index]);
      index += gaps[e];
      e ^= 1;
    }
    ++rowIndex;
  }

  //最后一行
  index = lastRowIndex;
  while (index < len) {
    str.push(s[index]);
    index += maxGap;
  }
  return str.join("");
};

(function main(params) {
  var testcase = [
    {input: "PAYPALISHIRING", numRows: 3, expected: "PAHNAPLSIIGYIR"},
    {input: "AB", numRows: 1, expected: "AB"},
    {input: "ABC", numRows: 2, expected: "ACB"},
    {input: "ABCD", numRows: 2, expected: "ACBD"}
  ];

  for (var t of testcase) {
    var output = convert(t.input, t.numRows);

    console.log(
      output === t.expected
        ? `true  ${output}`
        : `Error,input: ${t.input}, numRows: ${t.numRows}, output: ${output}, expected: ${t.expected}`
    );
  }
})();

function dustbin() {
  // edition: 1
  // if (numRows === 1) {
  //   return s;
  // }
  // for (var i = 0; i < numRows; ++i) {
  //   if (i % 2 === 0) {
  //     gaps.push(numRows + 1);
  //   } else {
  //     gaps.push(numRows - 1);
  //   }
  // }
  // var row = 0;
  // for (var g of gaps) {
  //   i = row;
  //   while (i < len) {
  //     str.push(s[i]);
  //     i += g;
  //   }
  //   row++;
  // }
  // edition: 2
  // if (numRows % 2 === 1) {
  //   while (rowIndex < numRows) {
  //     index = rowIndex;
  //     if (rowIndex % 2 === 0) {
  //       while (index < len) {
  //         str.push(s[index]);
  //         index += evenGap;
  //       }
  //     } else {
  //       var g = Math.ceil(rowIndex / 2);
  //       var e = 0;
  //       oddGap = [numRows - g, halfRows + g];
  //       while (index < len) {
  //         str.push(s[index]);
  //         index += oddGap[e];
  //         e ^= 1;
  //       }
  //     }
  //     ++rowIndex;
  //   }
  // } else {
  //   while (rowIndex < numRows) {
  //     index = rowIndex;
  //     if (rowIndex % 2 === 0) {
  //       var g = Math.ceil(rowIndex / 2);
  //       var e = 0;
  //       oddGap = [numRows - g, halfRows + g];
  //       while (index < len) {
  //         str.push(s[index]);
  //         index += oddGap[e];
  //         e ^= 1;
  //       }
  //     } else {
  //       while (index < len) {
  //         str.push(s[index]);
  //         index += evenGap;
  //       }
  //     }
  //     ++rowIndex;
  //   }
  // }
  // return str.join("");
}
