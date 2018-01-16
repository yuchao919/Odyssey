function eg1() {
  function getFoo() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('world!');
      }, 3000);
    });
  }

  function getBar() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('hello ');
      }, 1000);
    });
  }

  async function f() {
    // 写法一
    // let [foo, bar] = await Promise.all([getFoo(), getBar()]);

    // 写法二
    let fooPromise = getFoo();
    let barPromise = getBar();
    let foo = await fooPromise;
    let bar = await barPromise;
  }

  f();
}

eg1();
