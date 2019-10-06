console.log('start');
let i = 0;
while (true) {
  ++i;
  if (i > 1000000) {
    console.log('quit');
    break;
  }
}

process.nextTick(() => {
  console.log('nextTick callback');
});

console.log('scheduled');
