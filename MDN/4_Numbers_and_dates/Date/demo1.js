// note that the month is 0-based
console.log(new Date(2017, 12, 31)); // 2018-01-30T16:00:00.000Z
console.log(Date.now()); // 1504518098222
console.log(Date.now() instanceof Date); // false
console.log(typeof Date.now()); // number
console.log(new Date() instanceof Date); // true

var date = new Date();
console.log(date.toString()); // Mon Sep 04 2017 17:39:02 GMT+0800 (中国标准时间)
console.log(date.toISOString()); // 2017-09-04T09:39:38.385Z
console.log(date.toUTCString()); // Mon, 04 Sep 2017 09:40:43 GMT
console.log(date.toDateString()); // Mon Sep 04 2017
console.log(date.toTimeString()); // 17:40:43 GMT+0800 (中国标准时间)
console.log(date.toLocaleString()); // 2017-9-4 17:39:02
console.log(date.toLocaleDateString()); // 2017-9-4
console.log(date.toLocaleTimeString()); // 17:40:43

