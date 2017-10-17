[
  JSON.parse(
    '{"p": 5}',
    (key, value) =>
      typeof value === 'number'
        ? value * 2 // return value * 2 for numbers
        : value // return everything else unchanged
  ), // { p: 10 });
  JSON.parse('{"1": 1, "2": 2, "3": {"4": 4, "5": {"6": 6}}}', (key, value) => {
    console.log(key); // log the current property name, the last is "".
    // 1
    // 2
    // 4
    // 6
    // 5
    // 3
    // ""

    return value; // return the unchanged property value.
  })
].forEach(obj => {
  console.log(obj);
});

// both will throw a SyntaxError
// JSON.parse('[1, 2, 3, 4, ]');
// JSON.parse('{"foo" : 1, }');
