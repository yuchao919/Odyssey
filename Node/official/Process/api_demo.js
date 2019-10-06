// // print process.argv
// process.argv.forEach((val, index) => {
//   console.log(`${index}: ${val}`);
// });

// console.log(process.config);

// console.log(process.cwd());

// console.log(process.env);

/* 
console.log(process.execArgv);
console.log(process.argv);
console.log(process.exitCode);
 */

/* 
const time = process.hrtime();
// [ 1800216, 25 ]
console.log(time);

setTimeout(() => {
  const diff = process.hrtime(time);
  // [ 1, 552 ]
  console.log(diff);

  console.log(`Benchmark took ${diff[0] * 1e9 + diff[1]} nanoseconds`);
  // benchmark took 1000000527 nanoseconds
}, 1000);
 */

/* 
let stderr = process.stderr;
console.log(stderrp); 
 */

/* 
debugger;
console.log(process.uptime());
 */

console.log(process.versions);
