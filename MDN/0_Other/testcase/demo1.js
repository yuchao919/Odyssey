(function() {
  console.log(typeof this); // object
})();

function methodName(arguments) {
  console.log(typeof this);
}
methodName();
