console.log('JSON.stringify:');
[
  {01: 01} // {"1":1}
].forEach(jo => {
  console.log(JSON.stringify(jo));
});

console.log('\nJSON.parse:');
[
  '1', // 1
  '{}', // {}
  'true', // true
  'null', // null
  '"foo"', // "foo"
  // 'NaN', // Syntax Error
  // 'undefined', // Syntax Error
  '[1,5,false]' // [ 1, 5, false ]
].forEach(str => {
  console.log(JSON.parse(str));
});
