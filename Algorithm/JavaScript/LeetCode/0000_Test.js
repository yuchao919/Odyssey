const assert = require('assert');

module.exports = (testcase, func) => {
  let index = 0;
  if (testcase.length === 0) {
    return;
  }
  let keys = Object.keys(testcase[0]);
  for (let t of testcase) {
    let idx = `Test ${++index}`;
    console.time(idx);
    let output = func(t.input);
    console.timeEnd(idx);

    try {
      assert.deepEqual(output, t.expected);
      console.log(`Rigth. Input: ${t.input}\n`);
    } catch (err) {
      if (err instanceof assert.AssertionError) {
        console.error(
          `Wrong.Input: ${t.input}, Output: ${output}, Expected: ${t.expected}\n`
        );
      } else {
        throw err;
      }
    }
    // console.log(
    //   output === t.expected
    //     ? `Rigth. Input: ${t.input}\n`
    //     : `Wrong.Input: ${t.input}, Output: ${output}, Expected: ${t.expected}\n`
    // );
  }
};
