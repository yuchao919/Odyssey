function getFoo() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('Foo finished');
      resolve('world!');
    }, 3000);
  });
}

function getBar() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('Bar finished');
      resolve('hello ');
    }, 1000);
  });
}

function eg1() {
  // 这样写foo bar会并行执行
  async function f() {
    // 写法一
    // let [foo, bar] = await Promise.all([getFoo(), getBar()]);

    // 写法二
    let fooPromise = getFoo();
    let barPromise = getBar();
    let foo = await fooPromise;
    let bar = await barPromise;
    console.log('DONE');
  }

  f();
}

function eg2() {
  // foo、bar串行执行
  async function f() {
    let foo = await getFoo();
    let bar = await getBar();
    console.log('DONE');
  }

  f();
}

eg2();
