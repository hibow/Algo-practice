# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
  #It is regular binary tree not sorted but the root is smaller than the leaves
  #Get the lowest common root -> go deeper to the leaves and return true or root when p or q is found(go up one node)
  #recursive method: time O(n), worse case 
  #   space O(n):This is because the maximum amount of space utilized by the recursion stack would be N since the height of a skewed binary tree could be N
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        if root in (None, p, q): return root
        left = self.lowestCommonAncestor(root.left, p, q)
        right = self.lowestCommonAncestor(root.right, p,q)
        return root if left and right else left or right
        # return left == null? right : right == null ? left : root
        #if !left && !right -> null, if left && right -> root, else left or right