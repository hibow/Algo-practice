# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def reverseList(self, head: ListNode) -> ListNode:
        prev = None
        tempNext = None
        cur = head
        while(cur != None):
            tempNext = cur.next
            cur.next = prev
            prev = cur
            cur = tempNext
        return prev       

            