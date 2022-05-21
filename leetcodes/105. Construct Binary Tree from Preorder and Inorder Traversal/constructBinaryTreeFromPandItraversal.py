# Definition for a binary tree node.
from lib2to3.pgen2.pgen import DFAState
from tkinter.tix import Tree


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution: #time O(n): for hashmap + recursive tree(each node), space O(n) -> hash map but recursive stack is O(n)-> worse case
    def buildTree(self, preorder: List[int], inorder: List[int]) -> Optional[TreeNode]:
      self.iMap = dict()
      self.pIdx = 0 #it has to be global variable for dfsRoot.
      for i in range(len(inorder)):
        self.iMap[inorder[i]] = i
      return self.dfsRoot(preorder, 0, len(inorder) - 1)
    def dfsRoot(self, preorder, left, right):
      if left > right:
        return None
      target = preorder[self.pIdx]
      self.pIdx += 1
      cIdx = self.iMap[target]
      root = TreeNode(target)
      root.left = self.dfsRoot(preorder, left, cIdx-1)
      root.right = self.dfsRoot(preorder, cIdx + 1, right)
      return root
