function* foo() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
  return 6;
}

for (let v of foo()) {
  console.log(v);
}
// 1
// 2
// 3
// 4
// 5

console.log(Object.prototype.toString.call(foo())); // [object Generator]

function* objectEntries(obj) {
  let propKeys = Reflect.ownKeys(obj);

  for (let propKey of propKeys) {
    yield [propKey, obj[propKey]];
  }
}

let jane = { first: 'Jane', last: 'Doe' };

for (let [key, value] of objectEntries(jane)) {
  console.log(`${key}: ${value}`);
}

// first: Jane
// last: Doe

function* numbers() {
  yield 1;
  yield 2;
  return 3;
  yield 4;
}

// 扩展运算符
[...numbers()]; // [1, 2]

// Array.from 方法
Array.from(numbers()); // [1, 2]

// 解构赋值
let [x, y] = numbers();
x; // 1
y; // 2

// for...of 循环
for (let n of numbers()) {
  console.log(n);
}
// 1
// 2

const genNum = numbers();
console.log(genNum.next().value); // 1
console.log(genNum.next().value); // 2
console.log(genNum.next().value); // 3
console.log(genNum.next().value); //undefined
