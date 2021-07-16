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
  public ListNode removeNthFromEnd(ListNode head, int n) {
    //use dummy head as new head and point to head, return dummy.next -> space O(1)
    //one pass -> one while with two pointer -> time O(L)
    //two pass -> one while loop to count and one while loop to track back for nth -> O(2L-> L)
    ListNode dummy = new ListNode(0);
    dummy.next = head;
    ListNode fast = dummy;
    ListNode slow = dummy;
    int count = n;
    while (fast.next != null) {
      if (count > 0) {
        fast = fast.next;
        count --;
      }else if (count == 0) {
        fast = fast.next;
        slow = slow.next;
      }
    }
    slow.next = slow.next.next;
    return dummy.next;
  }
}