function factorial(num) {
  if (isNaN(num)) {
    throw new Error('Error Input');
    return;
  }

  if (num === 0) {
    return 1;
  }
  var result, jinwei, len, i, j, m, n;
  result = [1];
  for (i = 1; i <= num; ++i) {
    jinwei = 0;
    len = result.length;
    for (j = 0; j < len; ++j) {
      n = len - 1 - j;
      m = i * result[n];
      m = m + jinwei;
      jinwei = parseInt(m / 10);
      result[n] = m % 10;
    }
    if (jinwei !== 0) {
      result.unshift(jinwei);
    }
  }
  return result.join('');
}

console.log(factorial(12));
debugger;
