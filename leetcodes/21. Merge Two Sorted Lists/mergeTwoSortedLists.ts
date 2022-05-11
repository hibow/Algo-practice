/**
  Definition for singly-linked list.
**/
  class ListNode {
      val: number
      next: ListNode | null
      constructor(val?: number, next?: ListNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.next = (next===undefined ? null : next)
      }
  }


 function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  if (list1!= null && list2 != null) return null
  let cur:ListNode = new ListNode(0)
  let head = cur
  //time O(n), space O(n)
  //use a new list as the final answer
  while (list1 != null && list2!= null) {
    if (list1.val < list2.val) {
      cur.next = list1
      list1 = list1.next
    } else {
      cur.next = list2
      list2 = list2.next
    }
      cur = cur.next
  }
  //edge case when list1 or list2 is shorter or null
  if (list1 == null) cur.next = list2
  if (list2 == null) cur.next = list1
  return head.next
};