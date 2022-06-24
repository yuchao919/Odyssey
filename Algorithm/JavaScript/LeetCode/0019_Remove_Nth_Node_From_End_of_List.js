/**
 * Given a linked list, remove the nth node from the end of list and return its head.
 * For example,
 *  Given linked list: 1->2->3->4->5, and n = 2.
 *  After removing the second node from the end, the linked list becomes 1->2->3->5.
 * Note:
 * Given n will always be valid.
 * Try to do this in one pass.
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  var curNode = head;
  if (!curNode) {
    return head;
  }

  var p = n - 1;
  while (curNode.next && p > 0) {
    curNode = curNode.next;
    p--;
  }

  if (p > 0) {
    return head;
  }

  var nthPreNode;
  var nthNode = head;

  while (curNode.next) {
    nthPreNode = nthNode;
    nthNode = nthNode.next;
    curNode = curNode.next;
  }

  if (nthPreNode) {
    nthPreNode.next = nthNode.next;
  } else {
    head = head.next;
  }
  return head;
};

var printList = function(head) {
  var str = '';
  var cur = head;
  if (cur) {
    str += `${cur.val}`;
  } else {
    return console.log('[]');
  }

  while (cur.next) {
    cur = cur.next;
    str += `->${cur.val}`;
  }
  console.log(str);
};

var testLinkList = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5
        }
      }
    }
  }
};

var testLinkList2 = {
  val: 1
};

var testLinkList3 = {
  val: 1,
  next: { val: 2, next: null }
};

// printList(testLinkList);
// printList(removeNthFromEnd(testLinkList, 2)); // 1->2->3->5
// printList(removeNthFromEnd(testLinkList2, 1)); // []
// printList(removeNthFromEnd(testLinkList3, 2)); // 2
// printList(removeNthFromEnd(testLinkList3, 1)); // 1
