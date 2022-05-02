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
  public ListNode midNode(ListNode head) {
    ListNode fast = head, slow = head;
    while(fast.next != null && fast.next.next != null) {
      fast = fast.next.next;
      slow = slow.next;
    }
    return slow;
  }
  public ListNode reverse(ListNode head){
    ListNode cur = head, prev = null, next = null;
    while(cur != null){
      next = cur.next;
      cur.next = prev;
      prev = cur;
      cur = next;
    }
    return prev;
  }
  public void reorderList(ListNode head) {
    //split the list by finding mid point
    //reverse another list
    //merge both list
    //time O(n) space O(1)
    ListNode midNode = midNode(head);
    ListNode nextToMid = midNode.next;
    midNode.next = null;
    ListNode p2 = reverse(nextToMid);
    ListNode p1 = head;
    ListNode p1Next;
    while(p1!= null && p2!= null) {
      p1Next = p1.next;
      p1.next = p2;
      p1 = p2;
      p2 = p1Next;
    }
  }
}