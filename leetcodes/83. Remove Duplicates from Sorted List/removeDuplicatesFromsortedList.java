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
  public ListNode deleteDuplicates(ListNode head) {
    /**
     * 1) create new list
     * create a new head = list(0)
     * head = l1
     * iterate over the list,
     *   if l1.val = l1.next.val
     *      l1 = l1.next.next
     *   else
     *      l1 = l1.next
     * return newHead.next
     *
     * 2) merge the list in recursive method time O(n), space O(n)-> it might get stack overflow..
     *   if head is null or head.next is null, return head
     *   iterate over the list
     *    move head based on if head.val == head.next.val
     *   return head.next.next or head.next
     *
     * 3) merge the list iterative method
     *   O(1) when use head = cur and move cur.....
     */
  ListNode cur = head;
  while( cur != null || cur.next != null) {
    if (cur.val == cur.next.val) {
      cur.next = cur.next.next;
      } else {
      cur = cur.next;
      }
    }
    return head;
  }
}