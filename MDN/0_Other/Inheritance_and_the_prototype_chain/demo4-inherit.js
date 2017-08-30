function A(a) {
  this.varA = a;
}

// What is the purpose of including varA in the prototype when A.prototype.varA will always be shadowed by
// this.varA, given the definition of function A above?
A.prototype = {
  varA: null, // Shouldn't we strike varA from the prototype as doing nothing?
  // perhaps intended as an optimization to allocate space in hidden classes?
  // https://developers.google.com/speed/articles/optimizing-javascript#Initializing-instance-variables
  // would be valid if varA wasn't being initialized uniquely for each instance
  doSomething: function(thing) {
    console.log('A doSomething ' + thing);
    // ...
  }
};

function B(a, b) {
  A.call(this, a);
  this.varB = b;
}
B.prototype = Object.create(A.prototype, {
  varB: {
    value: null,
    enumerable: true,
    configurable: true,
    writable: true
  },
  doSomething: {
    value: function(thing) {
      console.log('B doSomething ' + thing);
      // override
      A.prototype.doSomething.apply(this, arguments); // call super
      // ...
    },
    enumerable: true,
    configurable: true,
    writable: true
  }
});
B.prototype.constructor = B;

var b = new B();
b.doSomething('asd');
