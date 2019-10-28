# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution(object):
    def isValidBST(self, root):
        """
        :type root: TreeNode
        :rtype: bool
        """
        if not root:
            return True

        def helper(node, min, max):
            if not node:
                return True
            if (node.val >= max or node.val <= min):
                return False
            return helper(node.right, node.val, max) and helper(node.left, min, node.val)
        return helper(root, float('-inf'), float('inf'))
