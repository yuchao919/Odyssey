/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  var nodeArr = [...arguments],
    len = nodeArr.length,
    head, // 头结点
    cn,
    sum = 0,
    m = 0,
    cArr = [],
    n;

  while (nodeArr.length) {
    sum = 0;
    while (nodeArr.length) {
      n = nodeArr.shift();
      sum += n.val;
      if (n.next) {
        cArr.push(n.next);
      }
    }

    nodeArr = cArr;
    cArr = [];

    sum += m;
    m = sum < 10 ? 0 : 1;

    if (!head) {
      head = new ListNode(sum % 10);
      cn = head;
      continue;
    }

    cn.next = new ListNode(sum % 10);
    cn = cn.next;
  }

  if (m === 1) {
    cn.next = new ListNode(1);
  }

  return head;
};

var ll1 = {
  val: 9,
  next: {
    val: 1,
    next: {
      val: 6,
      next: null
    }
  }
};
var ll2 = {
  val: 0,
  next: null
};

console.log(addTwoNumbers(ll1, ll2));
