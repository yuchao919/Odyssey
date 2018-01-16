function* fibnacci() {
  let [prev, curr] = [0, 1];
  while (1) {
    [prev, curr] = [curr, prev + curr];
    yield curr;
  }
}

// function run(gen) {
//   let g = gen();
//   let result = g.next();
//   while (!result.done) {
//     console.log(result.value);
//     result = g.next(result.value);
//   }
// }

run(fibnacci);

// for (let i of fibnacci()) {
//   if (i > 10000) {
//     break;
//   }
//   console.log(i);
// }
