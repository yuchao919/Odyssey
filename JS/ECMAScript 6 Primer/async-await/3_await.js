function eg1() {
  async function f() {
    return await 123;
  }

  f().then(v => console.log(v));
  // 123
}

function eg2() {
  async function f() {
    console.log('hello');
    await Promise.reject('出错了');
    console.log('world'); // 这里不会执行
  }
  f()
    .then(v => console.log(v))
    .catch(e => console.log(e));
  // 出错了
}

function eg3() {
  async function f() {
    try {
      await Promise.reject('出错了');
    } catch (e) {}
    return await Promise.resolve('hello world');
  }

  f().then(v => console.log(v));
}

function eg4() {
  async function f() {
    try {
      await new Promise(function(resolve, reject) {
        throw new Error('出错了');
      });
    } catch (e) {}
    return await 'hello world';
  }

  f().then(v => {
    console.log(v);
  });
}
eg4();
