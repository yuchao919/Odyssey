/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * Example:
 * Input: 1->2->4, 1->3->4
 * Output: 1->1->2->3->4->4
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  var p1 = l1,
    p2 = l2;

  var head, p;

  if (!p1 || !p2) {
    return p1 || p2;
  } else {
    if (p1.val < p2.val) {
      head = p1;
      p = p1;
      p1 = p1.next;
    } else {
      head = p2;
      p = p2;
      p2 = p2.next;
    }
  }

  while (p1 && p2) {
    if (p1.val < p2.val) {
      p.next = p1;
      p1 = p1.next;
    } else {
      p.next = p2;
      p2 = p2.next;
    }
    p = p.next;
  }

  if (p1) {
    p.next = p1;
  }

  if (p2) {
    p.next = p2;
  }

  return head;
};

console.log(
  mergeTwoLists(
    { val: 1, next: { val: 2, next: { val: 4, next: null } } },
    { val: 1, next: { val: 3, next: { val: 4, next: null } } }
  )
);
