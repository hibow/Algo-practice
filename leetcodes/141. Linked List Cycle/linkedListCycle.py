# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None
# time O(n), space O(1) with two pointers

class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
      if not head or not head.next or not head.val:
        return False
      fast = head.next
      slow = head
      while not slow and not fast and not fast.next:
        if fast == slow:
          return True
        slow = slow.next
        fast = fast.next.next
      return False

# compare node == node don't use val
#[1,1,1,1]
# -1
#