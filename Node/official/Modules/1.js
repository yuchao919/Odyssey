console.log(
  JSON.stringify(function name(params) {
    console.log(123);
  })
);

function require() {
  const module = { exports: {} };
  ((module, exports) => {
    exports = { x: 1 };
    // exports.x = 1;

    const val = JSON.stringify(module.exports || {});
    if (['{}', undefined].every(x => {x !== val;})) {
      exports = module.exports;
    }
  })(module, module.exports);
  return module.exports;
}

const a = require();

console.log(a.x);
