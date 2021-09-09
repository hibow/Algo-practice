# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    #ask for the smallest from BST-> sorting -> inorder -> get kth element from inorder array
    #recursion: time O(n) to build a traversal, space O(n) to keep an inorder traversal
    #iteration: time O(H+k) -> defined by stack: balanced tree O(logN + k), unbalanced and single-sided O(N+K)
         #space O(h) -> keep the stack, balanced tree: O(logn), single sided O(N)
    def kthSmallest(self, root: Optional[TreeNode], k: int) -> int:
      stack = []
      node = root
      count = 0
      while node or stack:
        if node:
          stack.append(node)
          node = node.left
        else:
          cur = stack.pop()
          count += 1
          if count == k:
            return cur.val
          node = cur.right 