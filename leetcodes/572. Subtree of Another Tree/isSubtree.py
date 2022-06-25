# Definition for a binary tree node.
from operator import truediv


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Solution:
    def isSubtree(self, root: Optional[TreeNode], subRoot: Optional[TreeNode]) -> bool:
       '''
       dfs: time O(m*n) = each root (m nodes) * subRoot (n nodes) : each root node compares n times (worse case)
            space O(h of root)
       !!subtree -> the end of the tree 
       '''
       if self.isSame(root, subRoot):
         return True
       else:
         return self.isSubtree(root.left, subRoot) or  self.isSubtree(root.right, subRoot) 
    def isSame(self, node, subNode):
      if node is None and subNode is None: return True
      if node is None or subNode is None: return False
      if node.val is not subNode.val: return False
      return self.isSame(node.left, subNode.left) and self.isSame(node.right, subNode.right)
