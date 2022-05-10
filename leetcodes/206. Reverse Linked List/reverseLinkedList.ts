/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
//iterative: time O(n), space O(1)
 function reverseList(head: ListNode | null): ListNode | null {
    let newHead = null;
    let temp = null;
    while(head != null) {
      temp = head.next
      head.next = newHead
      newHead = head
      head = temp
    }
    return newHead;
};
//recursive
function reverseList(head: ListNode | null): ListNode | null {
  return reverse(head, null)
}

function reverse(head: ListNode | null, newHead: ListNode |  null): ListNode | null {
  if (head == null) return newHead;
  let temp = head.next
  head.next = newHead
  return reverse(temp, head)
}
