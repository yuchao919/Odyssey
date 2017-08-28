var foo = {
  hasOwnProperty: function() {
    return false;
  },
  bar: 'Here be dragons'
};

// this method does not check down the object's prototype chain
foo.hasOwnProperty('bar'); // always returns false

// Use another Object's hasOwnProperty
// and call it with 'this' set to foo
({}.hasOwnProperty.call(foo, 'bar')); // true

// It's also possible to use the hasOwnProperty property
// from the Object prototype for this purpose
Object.prototype.hasOwnProperty.call(foo, 'bar'); // true
