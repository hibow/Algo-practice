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

#1
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
#2

iterate over both lists
add node values together
if sum is greater than 10 
save the remainder of sum / 10 and add it to next node
  if next node is null, add it to 0 and add to the list


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

function ListNode(val) {
  this.val = val;
  this.next = null;
}

var addTwoNumbers = function(l1, l2) {
  //output: new list
  //edge case: different length between l1 and l2, 
  //           one is empty list(X)
  let newList = new ListNode(0); //return newList.next
  let curNewLst = newList;  //use it as current pointer
  let curL1 = l1;  //l1 pointer
  let curL2 = l2;  //l2 pointer
  let carry = 0;
// iterate over both lists
  while(curL1 !== null || curL2 !== null) {
    // add node values together
    let sum = (( curL1 !== null) ? curL1.val : 0) + ( (curL2 !== null) ? curL2.val : 0) + carry;
    carry = Math.floor(sum / 10);
    curNewLst.next = new ListNode( Math.floor(sum % 10));
    curNewLst = curNewLst.next;
    if (curL1 !== null) curL1 = curL1.next;
    if (curL2 !== null) curL2 = curL2.next;
}
// if sum is greater than 10 => if carry > 0
// save the remainder of sum / 10 and add it to next node
//   if next node is null, add it to 0 and add to the list
  if (carry > 0) {
    curNewLst.next = new ListNode(carry);
  }
  return newList.next;
};
