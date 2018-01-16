function chainAnimationsPromise(elem, animations) {
  // 变量ret用来保存上一个动画的返回值
  let ret = null;

  // 新建一个空的Promise
  let p = Promise.resolve();

  // 使用then方法，添加所有动画
  for (let anim of animations) {
    p = p.then(function(val) {
      ret = val;
      return anim(elem);
    });
  }

  // 返回一个部署了错误捕捉机制的Promise
  return p
    .catch(function(e) {
      /* 忽略错误，继续执行 */
    })
    .then(function() {
      return ret;
    });
}

function chainAnimationsGenerator(elem, animations) {
  return spawn(function*() {
    let ret = null;
    try {
      for (let anim of animations) {
        ret = yield anim(elem);
      }
    } catch (e) {
      /* 忽略错误，继续执行 */
    }
    return ret;
  });
}

async function chainAnimationsAsync(elem, animations) {
  let ret = null;
  try {
    for (let anim of animations) {
      ret = await anim(elem);
    }
  } catch (e) {
    /* 忽略错误，继续执行 */
  }
  return ret;
}
