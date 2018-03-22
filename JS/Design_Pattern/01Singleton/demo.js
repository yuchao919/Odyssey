const getSingle = function(fn) {
  let result;
  return function() {
    return result || (result = fn.apply(this, arguments));
  };
};

const createLayer = function(name) {
  const obj = { name };
  return obj;
};

const createSingleLayer = getSingle(createLayer);

const obj1 = createSingleLayer('hello');
const obj2 = createSingleLayer('world');

console.log(obj1);
console.log(obj2);
console.log(obj1 === obj2);
