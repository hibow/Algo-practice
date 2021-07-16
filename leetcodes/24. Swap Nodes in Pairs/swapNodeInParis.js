/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var swapPairs = function(head) {
   //use cur to track, cur = dummy, dummy.next = head, dummy = list(0)
   //use cur to move next next time O(n) while (cur.next != null && cur.next.next != null)
   //l1 = cur.next, l2 = cur.next.next
   //next = l2.next
   //l1.next = next
   //l2.next = l1
   //cur.next = l2 (point to l2, l2 already points to l1, l1 already points to l2.next)
   //cur = l1 (move cur to l1 = l2.next)
  //return dummy.next space O(1)
  let dummy = new ListNode(0);
  dummy.next = head;
  let cur = dummy;
  while (cur.next != null && cur.next.next !== null ){
    let l1 = cur.next;
    let l2 = cur.next.next;
    let next = l2.next;
    l1.next = next;
    l2.next = l1;
    cur.next = l2;
    cur = l1;
  }
  return dummy.next;
};