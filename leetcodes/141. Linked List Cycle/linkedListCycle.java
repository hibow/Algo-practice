public class Solution {
  public boolean hasCycle(ListNode head) {
    /**
     * two pointer: time O(n) worse case no cycle, spaceO(1) use slow and fast =
     * slow.next.next iterate over the list til null if slow is fast return true
     * else slow.next fast.next.next return false
     * 
     */
    if (head == null || head.next == null)
      return false;
    ListNode slow = head;
    ListNode fast = head.next;
    while (slow != null && fast != null && fast.next != null) {
      if (slow == fast)
        return true;
      slow = slow.next;
      fast = fast.next.next;
    }
    return false;
  }
}