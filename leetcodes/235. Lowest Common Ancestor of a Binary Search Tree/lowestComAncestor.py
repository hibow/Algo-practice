# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        #root is not None //time O(H), height of Binary Search tree, space O(1)
        if p.val <= q.val: 
          minN, maxN = p, q
        else:
          minN, maxN = q, p
        node = root
        while node:
          if node.val >= minN.val and node.val <=maxN.val:
            return node
          elif node.val > maxN.val:
            node = node.left
          elif node.val < minN.val:
            node = node.right