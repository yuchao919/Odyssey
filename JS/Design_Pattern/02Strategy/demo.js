var Bonus = function(salary) {
  var salary = salary;
  return new function() {
    this.getSalary = function() {
      return salary;
    };
  }();
};

/******策略对象******/
var strategies = {
  isNonEmpty: function(value, errorMsg) {
    if (value === "") {
      return errorMsg;
    }
  },
  minLength: function(value, length, errorMsg) {
    if (value.length < length) {
      return errorMsg;
    }
  },
  isMobile: function(value, errorMsg) {
    if (!/(^1[3|5|8][0-9]{9}$)/.test(value)) {
      return errorMsg;
    }
  }
};
