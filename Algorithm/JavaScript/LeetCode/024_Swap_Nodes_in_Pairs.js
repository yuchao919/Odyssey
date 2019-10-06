/**
 * Given a linked list, swap every two adjacent nodes and return its head.
 * For example,
 * Given 1->2->3->4, you should return the list as 2->1->4->3.
 * Your algorithm should use only constant space. You may not modify the values in the list,
 * only nodes itself can be changed.
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
 * @return {ListNode}
 */
var swapPairs = function(head) {
  if (!head) {
    return head;
  }
  var p, n;
  p = head;
  n = head.next;
  if (!n) {
    return head;
  }
  p.next = n.next;
  n.next = p;
  head = n;
  var pre;
  pre = head.next;

  while (pre.next) {
    p = pre.next;
    n = p.next;
    if (!n) {
      break;
    }
    p.next = n.next;
    n.next = p;
    pre.next = n;
    pre = n.next;
  }
  return head;
};

// const should = require('should');
// // const assert = require('assert');

// describe('Test', function() {
//   it('case1', function() {
//     var result = swapPairs({
//       val: 1,
//       next: {
//         val: 2,
//         next: {
//           val: 3,
//           next: {
//             val: 4,
//             next: {
//               val: 5,
//               next: null
//             }
//           }
//         }
//       }
//     });
//     should.deepEqual(result, {
//       val: 2,
//       next: {
//         val: 1,
//         next: {
//           val: 4,
//           next: {
//             val: 3,
//             next: {
//               val: 5,
//               next: null
//             }
//           }
//         }
//       }
//     });
//   });
// });
