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
 var oddEvenList = function(head) {
  /**
   * use odd list to add odd nodes
   * use even list to add even nodes
   * odd.next is even list
   * return head
   *
   *  time O(n), space O(1)
   */
  if (head === null) return head;
  let odd = head;
  let even = head.next
  let evenList = even
  while (even !== null && even.next != null) {
    odd.next = odd.next.next
    odd = odd.next;
    even.next = even.next.next;
    even = even.next;

  }
  odd.next = evenList
  return head;
};