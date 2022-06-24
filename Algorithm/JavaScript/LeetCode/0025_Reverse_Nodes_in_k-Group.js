/**
 *  Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.
 * k is a positive integer and is less than or equal to the length of the linked list.
 * If the number of nodes is not a multiple of k then left-out nodes in the end should remain as it is.
 * You may not alter the values in the nodes, only nodes itself may be changed.
 * Only constant memory is allowed.
 * For example,
 * Given this linked list: 1->2->3->4->5
 * For k = 2, you should return: 2->1->4->3->5
 * For k = 3, you should return: 3->2->1->4->5
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  if (!head || !head.next || k === 1) {
    return head;
  }
  var _head,
    newHead,
    preTail,
    p,
    q,
    stack = [],
    cnt;

  p = head;
  while (true) {
    cnt = k;
    while (p && cnt) {
      stack.push(p);
      p = p.next;
      cnt--;
    }
    if (cnt) {
      // 链空了，不满足倒置条件，结束循环
      return _head || head;
    }

    newHead = stack.pop();
    q = newHead;
    while (stack.length) {
      q.next = stack.pop();
      q = q.next;
    }
    q.next = p;

    if (!_head) {
      _head = newHead; // 首次绑定新头结点
      preTail = q;
      continue;
    }
    preTail.next = newHead;
    preTail = q;
  }
};

console.log(
  reverseKGroup(
    {
      val: 1,
      next: {
        val: 2,
        next: {
          val: 3,
          next: {
            val: 4,
            next: {
              val: 5,
              next: null
            }
          }
        }
      }
    },
    2
  )
);
debugger;
