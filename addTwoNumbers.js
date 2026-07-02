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

class LinkedList {
  static Node = class {
    constructor(value, next) {
      this.value = value ?? 0;
      this.next = next ?? null;
    }
  }

  constructor() {
    this.start = null;
    this.tail = null;
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

  put = function (n) {
    if (this.start === null) {
      this.start = n;
      this.tail = n;
    } else {
      this.tail.next = n;
      this.tail = n;
    }
  }

  replace = function () {
    return 0;
  }

  add = function (n) {
    return 0;
  }
}

// Leetcode
var addTwoNumbers = function (l1, l2) {
  let n1 = l1.get();
  let n2 = l2.get();

  return n1 + n2;
};

// Test
var n1 = new LinkedList.Node(5, null);
//console.log(n1.value);

var l1 = new LinkedList();
l1.put(n1);
l1.put(new LinkedList.Node(7));
l1.put(new LinkedList.Node(3));

var l2 = new LinkedList();
l2.put(new LinkedList.Node(5));
l2.put(new LinkedList.Node(5));
l2.put(new LinkedList.Node(6));

console.log(l1.get());
console.log(l2.get());
console.log(addTwoNumbers(l1, l2));

//console.log(addTwoNumbers(list, list))