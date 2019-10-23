/**
 * 
 * 19. Remove Nth Node From End of List
 * https://leetcode.com/problems/remove-nth-node-from-end-of-list/
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
  //create a gap between fstPt and secPt with n
  //when fstPt run to the finish line, secPt will be at the position before the nth node.
  //secPt will skip nth node and point its next to next next node
  //return newHead.next
  let count = n;
  while (fstPt.val) {
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
};
