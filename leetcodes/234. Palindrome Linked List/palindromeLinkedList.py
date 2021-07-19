# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
class Solution:
    def isPalindrome(self, head: ListNode) -> bool:
      #two pointer: let slow goes to middle and fast goes to the end (!= null)
      # slow: 1x, fast: 2x for each time
      # when slow goes to the middle, if it's odd numbers, fast is not null, slow can move one step next
      #if it's even numbers, fast is null, slow can stop there.
      # reverse slow
      #assign head to fast
      #compare slow and fast until slow is null, if one value is not matched, return false
      #return true
      fast = head
      slow = head
      prev = None
      while(fast!= None and fast.next != None):
        fast = fast.next.next
        slow = slow.next

      if (fast != None):
        slow = slow.next
      while slow:
        temp = slow.next
        slow.next = prev
        prev = slow
        slow = temp

      slow = prev
      fast = head
      while( slow != None):
        if (fast.val != slow.val):
          return False
        fast = fast.next
        slow = slow.next

      return True

    # def reverse(self, head: ListNode) -> bool:
    #   #use cur to track the list
    #   #use pre to track the tail
    #   #get each cur.next point to pre
    #   #return pre as the new head of the new list
    #   cur = head
    #   pre = None
    #   while (cur != None):
    #     temp = cur.next
    #     cur.next = pre
    #     cur = temp

    #   return pre