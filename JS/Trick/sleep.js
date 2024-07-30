
function msleep(n) {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, n);
}

function sleep(n) {
  msleep(n * 1000);
}

async function fooTask(i) {
  console.log(`Task ${i} Begin:` + new Date());
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 3000);
  });
  // sleep(3);
  console.log(`Task ${i} Finish:` + new Date());
  return;
}

async function sleepDemo() {
  for (let i = 0; i < 3; i++) {
    // 此处如果是Promise的休眠，则await会按顺序执行，不加await则会并发执行
    // sleep函数则会单线程执行
    await fooTask(i);
  }
}

sleepDemo();