/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
  public ListNode mergeTwoLists(ListNode l1, ListNode l2) {
    //input: two lists
    //output: one list (merged)
    /**1) recursive method time O(n) space O(n)-> stack
        if l1.val < l2.val
            l1.next = recusrive(l1.next, l2)
            return l1
        else
            l2.next = recursive(l2.next, l1)
            return l2
     *
     * 2) iterative method: time O(n), space O(n) -> new linkedlist
     *  create a head = linkedlist(0)
     *  assign head to handler
     *  while (l1 && l2 not null)
     *   use handler to move thru the smallest value from l1 and l2
     *  if l1 is not null, handler moves to l1.next
     *  if l2 is not null, handler moves to l2.next
     * return head.next
     */
    if (l1 == null) return l2;
    if (l2 == null) return l1;
    if (l1.val < l2.val) {
      l1.next = mergeTwoLists(l1.next, l2);
      return l1;
    } else {
      l2.next = mergeTwoLists(l1, l2.next);
      return l2;
    }
  }
}