# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
#dfs
class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        '''
        bfs -> time O(h) spaceO(n: all nodes) queue size
        dfs -> time O(h) space O(stack h)
        '''
        res = []
        self.helper(res, root, 0)
        return res

    def helper(self, res, node, level): 
        #calculate the res no return
        if node is None: return 
        if level >= len(res): #len(res) eventually will be level + 1
          res.append([])
        res[level].append(node.val)

        self.helper(res, node.left, level +1 )
        self.helper(res, node.right, level + 1)

#bfs
class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
      res = []
      level = 0
      queue = []
      if root is None: return res
      else: queue.append([root, level])
      while queue:
        node,  level = queue.pop()
        if level >= len(res):
            res.append([])
        res[level].append(node.val)
        #since we use pop() need to swap the order of left and right
        if node.right is not None:
          queue.append([node.right, level + 1])
        if node.left is not None:
          queue.append([node.left, level  + 1])

      return res