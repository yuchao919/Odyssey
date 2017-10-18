if (!Array.isArray) {
  Array.isArray = function(arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
  };
}

(function name(a, b, c) {
  console.log(arguments); // { '0': 1, '1': 2, '2': 3 }
  console.log(Array.isArray(arguments));
})(1, 2, 3);
