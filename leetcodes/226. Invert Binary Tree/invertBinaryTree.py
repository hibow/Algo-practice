# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
      #return 0
      '''
       BFS
          -> exchange left and right for each node and return the root
          space O(1), time O(h) -> worse case O(n)-> one sided tree
       DFS time O(h), spaceO(h)
          -> if !root: return null
          left = root.right
          root.left = dfs(root.right)
          root.right = dfs(left)
          return root
      '''
      if root == None:
        return root
      queue = [root]
      while len(queue):
        node = queue.pop()
        #swapping first -> append swapped nodes later
        Left = node.left
        Right = node.right
        node.right = Left
        node.left = Right
        #don't append None node into the queue
        if node.right != None:
            queue.append(Left)
        if node.left != None:
            queue.append(Right)
      return root
#DFS recursively
class Solution:
    def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
      if root == None:
        return None
      Left = self.invertTree(root.right)
      Right = self.invertTree(root.left)
      root.left = Left
      root.right = Right
      return root