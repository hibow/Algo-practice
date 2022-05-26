#Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
class Solution:
    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:
     '''
     brute force: time O(nlogn) spaceO(2n)
     1. get all nodes from the list and push them into an array
     2. sort the array
     3. push all nodes into a new list
     '''
     self.nodeArr = []
     cur = ListNode(0)
     newList = cur
     for k in range(0,len(lists)):
      node = lists[k]
      while node:
        self.nodeArr.append(node.val) #push int type into array
        node = node.next

     for node in sorted(self.nodeArr):
      cur.next = ListNode(node) #make sure listnode vs int type
      cur = cur.next

     return newList.next