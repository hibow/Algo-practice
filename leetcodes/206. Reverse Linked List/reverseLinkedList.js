/*
 * [Source]
 *
 * https://leetcode.com/problems/reverse-linked-list/
 *
 * [Problem Description]
 *
 * Reverse a singly linked list.
 * Example:
 * Input: 1->2->3->4->5->NULL
 * Output: 5->4->3->2->1->NULL
 * Follow up:
 * A linked list can be reversed either iteratively or recursively. Could you
 * implement both?
 *
 * [Comments]
 *
 *
 *
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
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  if (head === null) {
    return head;
  }
  //set prev pointer
  /**
   *      1     2   3   4   5   null
   *      ^ next
            prev
   * prev
     next 
   *  
   */
  //iterative
  let prev = null;
  let newNext = null;
  let cur = head;
  while (cur.next !== null) {
    //swap next and prev
    newNext = cur.next;
    cur.next = prev;
    prev = cur;
    cur = newNext;
  }
  cur.next = prev;
  return cur;
};
/**
 *    1   2   3   4     5
 *       cur
 *           cur
 *               cur->
 *                  <- cur
 *             <-
 *           <-
 *       <-
 *
 */
// var reverseList = function(head) {
//   //recursive
//   if (head === null || head.next === null) {
//     return head;
//   } //cur
//   var cur = reverseList(head.next); //head : cur.prev
//   head.next.next = head; //cur point back to head
//   head.next = null; //head won't have next node
//   return cur; //return back head list reference and finally back to original head
// };
