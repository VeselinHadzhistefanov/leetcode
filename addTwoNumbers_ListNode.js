/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
};

var addTwoNumbers = function (l1, l2) {
  let l3;
  let next = ListNode(0, null);
  while (l1.next !== null || l2.next !== null) {
    next.val = next.val + l1.val + l2.val
    
    l3 = ListNode(next.val % 10, next);
    next = ListNode(Math.floor(next.val / 10), null);
  }
};

