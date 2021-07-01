class Solution {
    public boolean isPalindrome(ListNode head) {
      //create fast slow node and set them to head
      ListNode fast = head;
      ListNode slow = head;

      //iterate over the list with slow and fast pointer, until fast is about to the end..
      //fast's location determines the location of slow
      while(fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
      }
      if (fast != null) { //if it's odd list -> slow will point to the middle
        slow = slow.next;
      }
      //reverse the list starts from slow as right list
      slow = reverse(slow);
      //assign fast to original head as the start of left list
      fast = head;
      //compare the values in right list and left list until right list is over
      while (slow != null) {
        if (slow.val != fast.val) return false;
        slow = slow.next;
        fast = fast.next;
      }
      return true;
    }

    public ListNode reverse(ListNode head) {
      ListNode pre = null;
      while(head != null) {
        ListNode cur = head.next;
        head.next = pre;
        pre = head;
        head = cur;
      }
      return pre;
    }
}