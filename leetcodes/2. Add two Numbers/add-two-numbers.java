
// public class ListNode {
//   int val;
//   ListNode next;
//   ListNode() {}
//   ListNode(int val) { this.val = val; }
//   ListNode(int val, ListNode next) { this.val = val; this.next = next; 
//   }
public class Solution {

  public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
    // input : ListNode l1, ListNode L2
    // output ListNode result
    // constrain: no leading zero,
    // edge case: the length of list in [1, 100], value in [0,9]
    /***
     * test cases: l1 = [0,1] l2 = [0,1,2] one list is longer l1 = [1] , l2 = [1] no
     * empty list, same length of both lists l1 = [9, 9] l2 = [1] -> extra carry of
     * one at the end\ generate random nodes in linkedList
     */
    // Give a dummyHead ->ListNode dumHead = new ListNode(0)
    ListNode dumHead = new ListNode(0);
    // result = dumHead -> resultList
    // use p1 and p2 as pointers in L1 and L2
    ListNode p1 = l1, p2 = l2, cur = dumHead;
    // use cur as current pointer to point to next node in resultList
    // set carry = 0
    int carry = 0;
    // iterate over L1 and L2 until both of them has no node
    while (p1 != null || p2 != null) {
      // get values of p1 and p2
      int x1 = (p1 != null) ? p1.val : 0;
      int x2 = (p2 != null) ? p2.val : 0;
      // calculate sum = p1 + p2 + carry
      int sum = carry + x1 + x2;
      // carry = sum/10 as new carry value
      carry = sum / 10;
      // create new node(sum%10) for cur point to in resultList
      cur.next = new ListNode(sum % 10);
      cur = cur.next;
      // if p1 still has node -> p1 moves to next node in l1
      if (p1 != null)
        p1 = p1.next;
      // if p2 still has node -> p2 moves to next node in l2
      if (p2 != null)
        p2 = p2.next;
    }
    // if carry is larger than 0 -> add new node(carry) in result list
    if (carry > 0)
      cur.next = new ListNode(carry);
    // return dumHead.next as resultList
    return dumHead.next;
  }
}
