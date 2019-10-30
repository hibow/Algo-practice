# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution(object):
    def isSymmetric(self, root):
        """
        :type root: TreeNode
        :rtype: bool
        """
        if not root:
            return True
        tempQ = []
        tempQ.append((root.left, root.right))  # tuple in array
        while tempQ:
            l, r = tempQ.pop(0)
            if not l and not r:
                continue
            if not l or not r:
                return False
            if l.val != r.val:
                return False
            tempQ.append((l.left, r.right))
            tempQ.append((l.right, r.left))

        return True
