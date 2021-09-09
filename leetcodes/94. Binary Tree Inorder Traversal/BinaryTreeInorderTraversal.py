# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    #recursion  timeO(n) , space O(n) -> singled side tree is O(n), average tree is O(logN)
    def __init__(self):
        #create List[int] res as new array, use helper(root, res) to traverse result into res, return res
        self.traversal = []
    #helper(root,res)
    def dfs(self, node):
    #if root exists, 
        if node.left:
        #if root.left exists, helper(root.left, res)
            self.dfs(node.left)
        #add root.val into res
        self.traversal.append(node.val)
        #if root.right exists, helper(root.right, res)
        if node.right:
            self.dfs(node.right)
    def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        #input: tree node, output: list
        if root:
            self.dfs(root)
        return self.traversal

#iteration: time O(n) , space O(n)
class Solution:
    def __init__(self):
        self.traversal = []
    
    def inorderTraversal(self, root: TreeNode) -> List[int]:
        stack = []
        curr = root
        while curr or stack:
            while curr:
                # find the left-most node, while storing root nodes in stack
                stack.append(curr)
                curr = curr.left
            curr = stack.pop()
            self.traversal.append(curr.val)
            curr = curr.right
            
        return self.traversal