function GetNextArr(str) {
  var j, k, next, end;
  j = 0;
  k = -1;
  next = [-1];
  end = str.length - 1;

  while (j < end) {
    if (k === -1 || str[j] === str[k]) {
      j++;
      k++;
      next[j] = k;
    } else {
      k = next[k];
    }
  }
  return next;
}

// console.log(GetNextArr('abcac'));

function KMPIndex(str, t) {
  var next, i, j, sLen, tLen;
  next = GetNextArr(t);
  i = 0;
  j = 0;
  sLen = str.length;
  tLen = t.length;
  while (i < sLen && j < tLen) {
    if (j === -1 || str[i] === t[j]) {
      i++;
      j++;
    } else {
      j = next[j];
    }
  }

  if (j >= tLen) {
    return i - tLen;
  }
  return -1;
}

console.log(KMPIndex('abcasd', 'as'));
