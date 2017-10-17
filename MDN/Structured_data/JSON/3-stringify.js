console.log('JSON.stringify:');

[
  function() {}, // undefined
  {}, // {}
  undefined // undefined
].forEach(elem => {
  console.log(JSON.stringify(elem));
});

console.log('\n*******************\n');

console.log('with replacer:');
function replacer(key, value) {
  // Filtering out properties
  if (typeof value === 'string') {
    return undefined;
  }
  return value;
}

var foo = {
  foundation: 'Mozilla',
  model: 'box',
  week: 45,
  transport: 'car',
  month: 7
};
console.log(JSON.stringify(foo, replacer)); // '{"week":45,"month":7}'

// If replacer is an array, the array's values indicate
// the names of the properties in the object that should be included in the resulting JSON string.
console.log(JSON.stringify(foo, ['week', 'month']));
// '{"week":45,"month":7}', only keep "week" and "month" properties
