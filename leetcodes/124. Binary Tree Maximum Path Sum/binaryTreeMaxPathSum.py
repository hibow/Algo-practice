# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from cmath import inf


class Solution:
    def maxPathSum(self, root: Optional[TreeNode]) -> int:
        '''

        BFS: can't from top to bottom calculate the sum.
        ex: [-3] -> -3 ; [1,2] -> 3; [1,-2,3] -> 4
        [1,2,null,3,null,4,null,5] ->15
        DFS: from bottom to top, use sum to carry the max,
            path : the path to traverse thru the entire tree
            maxSum = float(-inf)
            maxPathHelper(root):
            a. carry maxPath for each node level (path goes thru node)
            choose the max(right, left) as the start, and compare with max(maxRightLeft, root) since we can't skip root
            b. use maxSum to get the max of each node level
            sum = compare with root+left+right, maxPath
            maxSum = max(sum, maxSum)
            time O(n): iterate over all nodes once, space O(n) : recursive stack for each node
        '''
        maxSum = float("-inf") #define shared variable
        def maxPathHelper(root):
          nonlocal maxSum #tell it's not the local variable
          if root == None:
            return 0
          leftMax = maxPathHelper(root.left)
          rightMax = maxPathHelper(root.right)
          maxLeftRight = max(leftMax, rightMax)
          maxPath = max(root.val, root.val + maxLeftRight)
          sum = max(maxPath, root.val + leftMax + rightMax)
          maxSum = max(sum, maxSum)
          return maxPath

        maxPathHelper(root)
        return maxSum