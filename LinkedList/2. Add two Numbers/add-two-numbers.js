/**
 * #2
 * Medium
 * 
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
  
  1)convert linkted list into number:
  push node value into an array  2 4  3  => 2 4 3 
  revert the array 3 4 2 

  O(n) => iterate over list, for each node add it before the num string -> "342"  
  convert it to number -> 342

   5 6 4 => 465 -> int
  2) add two numbers
   342 + 465 = 807 
  3) convert final number into linked list
O(n) => convert number into string
iterate over the string from the end 
add each value to the linked list and convert to number

  convert number into array => 7 0 8
  convert array into linked list =>
   807 => 8 0 7 => 7 -> 0 -> 8


 * 
 * 
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// import LinkedList from "../linkedList.js";
function ListNode(val) {
  this.val = val;
  this.next = null;
}

var addTwoNumbers = function(l1, l2) {
  const listToNum = function(list) {
    let str = "";
    //if list next exist, repeat the loop
    while (list.val) {
      let rootStr = list.val.toString();
      str = rootStr + str;
      //if list value exist, add into string
    }
    return Number(str);
  };
  let sum = listToNum(l1) + listToNum(l2);
  console.log(sum);
  const numToList = function(num) {
    numStr = num.toString();
    let n = numStr.length - 1;
    let result = new ListNode(Number(numStr[n]));
    n--;
    let curr = result;
    while (numStr[n]) {
      curr.next = new ListNode(Number(numStr[n]));
      curr = curr.next;
      n--;
    }
    return result;
  };
  return numToList;
};
