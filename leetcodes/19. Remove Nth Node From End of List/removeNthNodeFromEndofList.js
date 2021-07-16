/*
 * [Source]
 *
 * https://leetcode.com/problems/remove-nth-node-from-end-of-list/
 *
 * [Problem Description]
 *
 * Given a linked list, remove the n-th node from the end of list and return its
 * head.
 * Example:
 * Given linked list: 1->2->3->4->5, and n = 2.
 * After removing the second node from the end, the linked list becomes 1->2->3->5.
 * Note:
 * Given n will always be valid.
 * Follow up:
 * Could you do this in one pass?
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
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  //input: list and number
  //output: list
  //one pass and two pass -> iteration times O(n) vs O(2n)
  let newHead = new ListNode(0); //return newHead.next in case only one node in list [1]
  newHead.next = head;
  let fstPt = newHead;
  let secPt = newHead;
 //when fstPt run to the finish line, secPt will be at the position before the nth node.
  //secPt will skip nth node and point its next to next next node
  //return newHead.next
  let count = n;
  while (fstPt.next) {
    if (count > 0) {
      fstPt = fstPt.next;
      count--;
    } else if (count === 0) {
      fstPt = fstPt.next;
      secPt = secPt.next;
    }
  }
  secPt.next = secPt.next.next;

  return newHead.next;
};  //create a gap between fstPt and secPt with n



