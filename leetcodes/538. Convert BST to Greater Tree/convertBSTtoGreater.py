# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
  #use small tree to observe the pattern
  #    5     becomes     18  
  #  2   13            20   13
  #BST -> it is sorted by an order
  #traverse left and get the sum and change the node.val, go to root and do the same, then go do right -> sum and node val will add up.
  #time O(n), space O(n)(worse case)
    def __init__(self) -> None:
      self.total = 0
    def convertBST(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
      if root:
          self.convertBST(root.right)
          self.total += root.val
          root.val = self.total
          self.convertBST(root.left)
      return root