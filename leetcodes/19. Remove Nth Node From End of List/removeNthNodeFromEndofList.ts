/**
 Definition for singly-linked list. **/
  class ListNode {
     val: number
     next: ListNode | null
     constructor(val?: number, next?: ListNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.next = (next===undefined ? null : next)
      }
  }


 function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    // iterate over the list with slow and fast pointer Time O(n) space O(1)
    //fast runs n times ahead of slow til the end, then slow remove the next, then continue the rest
    let dummyH = new ListNode(0,head)
    let s: ListNode = dummyH
    let f: ListNode = dummyH
    if (f.next == null && n ==1) return null
    while (f.next != null && n) {
      f = f.next
      n -=1
    }

    while (f.next != null) {
      s = s.next
      f = f.next
    }
    s.next = s.next.next

    return dummyH.next
};