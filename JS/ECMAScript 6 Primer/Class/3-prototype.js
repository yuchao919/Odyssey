class A {
  hello() {
    return 'world';
  }
}

class B extends A {
  hi() {
    return 'JavaScript';
  }
}

let a = new A();

// console.log(A.prototype.__proto__);
A.__proto__ === Function.prototype; // true
a.prototype; // undefined
a.constructor === A; // true
a.__proto__ === A.prototype; // true
B.__proto__ === A; // true
B.prototype.__proto__ === A.prototype; // true
