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

var LinkedListValue = function(value, next){
  this.value = (value === undefined ? 0 : value);
  this.next = (next === undefined ? null : next);
}

var getLinkedListNumber = function(l){
  var number = 0;
  var operator = 1;
  var base = 10;

  while(l.next !== null){
    number += l.value * operator;
  }
}

var addTwoNumbers = function(l1, l2) {
  //var n1 =

  return 5;
};


console.log(addTwoNumbers());