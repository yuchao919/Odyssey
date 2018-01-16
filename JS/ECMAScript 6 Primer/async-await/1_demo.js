function eg1() {
  function timeout(ms) {
    return new Promise(resolve => {
      setTimeout(resolve, ms);
    });
  }

  async function asyncPrint(value, ms) {
    await timeout(ms);
    console.log(value);
  }
  asyncPrint('hello world', 5000);
}

function eg2() {
  async function timeout(ms) {
    await new Promise(resolve => {
      setTimeout(resolve, ms);
    });
  }

  async function asyncPrint(value, ms) {
    await timeout(ms);
    console.log(value);
  }

  asyncPrint('hello world', 50);
}
