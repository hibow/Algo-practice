import java.util.LinkedList;

class Solution {
  public ListNode reverseList(ListNode head) {
    // input: ListNode
    // output: ListNode
    // edge case: if list is null return null
    // use cur pointer starts from first node of list
    // copy next node to temp
    // copy prev to cur.next
    // copy cur to prev
    // move cur to temp
    // iterates until cur is null, return prev
    // note: it's all about how to code
    if (head == null)
      return null;
    ListNode cur = head;
    ListNode prev = null;
    cur = head;
    while (cur != null) {
      ListNode temp = cur.next;
      cur.next = prev;
      prev = cur;
      cur = temp;
    }
    return prev;
  }
}