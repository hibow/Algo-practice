# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
class Solution:
    m = 1
    '''
    timeO(n)-> reverse and get mid length
    SpaceO(n)->create new reverse list
    merge reverse and original list time(mid)
    '''
    def reverseList(self, head):
        cur = head
        prev = ListNode(cur.val, None)
        while cur.next:
          cur = cur.next
          copy = ListNode(cur.val, prev)
          prev = copy
          self.m += 1
        return prev
    def reorderList(self, head: Optional[ListNode]) -> None:
        """
        Do not return anything, modify head in-place instead.
        """
        revHead = self.reverseList(head)
        cur = head
        next = None
        mid =self.m // 2
        while cur.next and revHead.next and mid:
          next = cur.next
          if (mid - 1) is 0 and revHead.val == next.val:
            cur.next = ListNode(revHead.val,None)
            break
          cur.next = ListNode(revHead.val, next)
          cur = next
          revHead = revHead.next
          if  (mid - 1) is 0 and revHead.val == next.val:
            next.next = None
            break
          mid -= 1
        return

#split to two list   and reverse the 2nd list , merge two list
# don't understand why it can find mid by two pointers.. maybe we can just count
class Solution:
    def reorderList(self, head):
      cur = head
      count = 1 #total is number counts
      while cur.next:
        cur = cur.next
        count +=1
      mid = count //2 #doesn't care odd or even
      sPoint = head
      while mid:
        sPoint = sPoint.next
        mid -= 1

      #reverse spoint list
      prev, curr = None, sPoint
      while curr:
        prev, curr.next, curr = curr, prev, curr.next
      #prev
      #Merge two lists in place
      first, second = head, prev
      while second.next:
        first.next, first = second, first.next
        second.next, second = first, second.next
      return
      #time O(n) space O(1)