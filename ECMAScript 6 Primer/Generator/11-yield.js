// 如果在 Generator 函数内部，调用另一个 Generator 函数，默认情况下是没有效果的。
function eg1() {
  function* foo() {
    yield 'a';
    yield 'b';
  }

  function* bar() {
    yield 'x';
    foo();
    yield 'y';
  }

  for (let v of bar()) {
    console.log(v);
  }
  // "x"
  // "y"
}

function eg2() {
  function* foo() {
    yield 'a';
    yield 'b';
  }
  function* bar() {
    yield 'x';
    yield* foo();
    yield 'y';
  }

  /* 
  // 等同于
  function* bar() {
    yield 'x';
    yield 'a';
    yield 'b';
    yield 'y';
  }
 */
  /* 
  // 等同于
  function* bar() {
    yield 'x';
    for (let v of foo()) {
      yield v;
    }
    yield 'y';
  } */

  for (let v of bar()) {
    console.log(v);
  }
  // "x"
  // "a"
  // "b"
  // "y"
}

function eg3() {
  function* gen() {
    yield* ['a', 'b', 'c'];
  }

  let g = gen();
  console.log(g.next()); // { value:"a", done:false }
  console.log(g.next()); // { value:"b", done:false }
  console.log(g.next()); // { value:"c", done:false }
  console.log(g.next()); // { value: undefined, done: true }
}

// 任何数据结构只要有 Iterator 接口，就可以被yield*遍历。
function eg4() {
  let read = (function*() {
    yield 'hello';
    yield* 'hello';
  })();

  console.log(read.next().value); // "hello"
  console.log(read.next().value); // "h"
}

function eg5() {
  function* foo() {
    yield 2;
    yield 3;
    return 'foo';
  }

  function* bar() {
    yield 1;
    var v = yield* foo();
    console.log('v: ' + v);
    yield 4;
  }

  var it = bar();

  console.log(it.next());
  // {value: 1, done: false}
  console.log(it.next());
  // {value: 2, done: false}
  console.log(it.next());
  // {value: 3, done: false}
  console.log(it.next());
  // "v: foo"
  // {value: 4, done: false}
  console.log(it.next());
  // {value: undefined, done: true}
}

function eg6() {
  function* genFuncWithReturn() {
    yield 'a';
    yield 'b';
    return 'The result';
  }
  function* logReturned(genObj) {
    let result = yield* genObj;
    console.log(result);
  }

  console.log([...logReturned(genFuncWithReturn())]);
  // The result
  // 值为 [ 'a', 'b' ]
}

// yield*命令可以很方便地取出嵌套数组的所有成员。
function eg7() {
  function* iterTree(tree) {
    if (Array.isArray(tree)) {
      for (let i = 0; i < tree.length; i++) {
        yield* iterTree(tree[i]);
      }
    } else {
      yield tree;
    }
  }

  const tree = ['a', ['b', 'c'], ['d', 'e']];

  for (let x of iterTree(tree)) {
    console.log(x);
  }
  // a
  // b
  // c
  // d
  // e
}

// 使用yield*语句遍历完全二叉树。
function eg8(arguments) {
  // 下面是二叉树的构造函数，
  // 三个参数分别是左树、当前节点和右树
  function Tree(left, label, right) {
    this.left = left;
    this.label = label;
    this.right = right;
  }

  // 下面是中序（inorder）遍历函数。
  // 由于返回的是一个遍历器，所以要用generator函数。
  // 函数体内采用递归算法，所以左树和右树要用yield*遍历
  function* inorder(t) {
    if (t) {
      yield* inorder(t.left);
      yield t.label;
      yield* inorder(t.right);
    }
  }

  // 下面生成二叉树
  function make(array) {
    // 判断是否为叶节点
    if (array.length == 1) return new Tree(null, array[0], null);
    return new Tree(make(array[0]), array[1], make(array[2]));
  }
  let tree = make([[['a'], 'b', ['c']], 'd', [['e'], 'f', ['g']]]);

  // 遍历二叉树
  var result = [];
  for (let node of inorder(tree)) {
    result.push(node);
  }

  console.log(result);
  // ['a', 'b', 'c', 'd', 'e', 'f', 'g']
}
