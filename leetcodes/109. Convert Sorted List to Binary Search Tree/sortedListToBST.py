# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Solution:
    #Convert list to array then do preorder traversal to build
      #convert list to arr
      #dfs(0, len(arr) - 1) -> get the mid as root, root.left is dfs(left, mid - 1), root.right is dfs(mid + 1, right), return root
      #time O(n) space O(n) for arr space
    # inorder traversal: time O(n), space O(logN)-> the depth of the buildBST recursion take logN
    # height balanced BST -> building in elements from left to right of the linked list; left to root should be the same depth as from right to root
    # how to build tree: get total size of the list to decide the position of node in the list for doing binary search to build sub trees to the whole tree
    # helper(left, right) ->get the mid as the main root 
      #get left node first -> move head to the root -> get right node -> return root

    def sortedListToBST(self, head: ListNode) -> TreeNode:
        def length(head):
            cnt = 0
            while head != None:
                cnt += 1
                head = head.next
            return cnt
        
        def dfs(left, right):
            nonlocal head
            if left > right: return None
            mid = (left + right) // 2
            leftNode = dfs(left, mid - 1)
            
            root = TreeNode(head.val)
            head = head.next
            
            root.left = leftNode
            root.right = dfs(mid + 1, right)
            return root
        
        return dfs(0, length(head)-1)
  

      