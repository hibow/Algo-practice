/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
// time O(n), space O(1), if no intersection return null
public class Solution {
  public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
    ListNode l1 = headA;
    ListNode l2 = headB;
    while (l1 != l2) {
      l1 = (l1 == null) ? headB : l1.next;
      l2 = (l2 == null) ? headA : l2.next;
    }
    return l1;
  }
}