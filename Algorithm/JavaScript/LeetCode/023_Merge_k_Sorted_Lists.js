/**
 *  Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  if (!lists || !lists.length) {
    return [];
  }
  var head = lists.pop();
  var l;
  while (lists.length) {
    l = lists.pop();
    head = mergeTwoLists(head, l);
  }
  return head;
};

function mergeTwoLists(l1, l2) {
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
}

console.log(
  mergeKLists([
    { val: 1, next: { val: 6, next: null } },
    { val: 3, next: { val: 5, next: null } },
    { val: 2, next: { val: 4, next: null } }
  ])
);
debugger;
