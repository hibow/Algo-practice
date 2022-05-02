# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

#one pass: time O(n), space O(1)
class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
      newList = ListNode(0)
      newList.next = head
      fast = newList
      slow = newList
      count = n
      while fast.next:
        if count >0:
          fast = fast.next
          count = count - 1
        elif count == 0:
          fast = fast.next
          slow = slow.next
      slow.next = slow.next.next
      return newList.next