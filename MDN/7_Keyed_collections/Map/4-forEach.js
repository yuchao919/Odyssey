function logMapElements(value, key, map) {
  map.set('one', 'yi');
  map.delete('baz');
  console.log(`m[${key}] = ${value}`);
}
new Map([['foo', 3], ['bar', {}], ['baz', undefined]]).forEach(logMapElements);
// logs:
// m[foo] = 3
// m[bar] = [object Object]
// m[one] = yi
