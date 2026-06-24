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

// Test data

class LinkedListValue {
  constructor(value, next) {
    this.value = (value === undefined ? 0 : value);
    this.next = (next === undefined ? null : next);
  }
}

class LinkedList {
  Node = class {
    constructor(value, next) {
      this.value = value ?? 0;
      this.next = next ?? null;
    }
  }

  constructor(s) {
    this.start = s
  }

  get = function () {
    if (this.start === undefined) return 0;

    let p = this.start;
    let operator = 1;
    let num = 0;

    while (p != null) {
      num += operator * p.value;
      operator *= 10;
      p = p.next;
    }

    return num;
  }

  put = function () {
    return 0;
  }

  add = function () {
    return 0;
  }
}

// Leetcode test function
var addTwoNumbers = function (l1, l2) {
  let n1 = l1.get();
  let n2 = l2.get();

  return n1 + n2;
};