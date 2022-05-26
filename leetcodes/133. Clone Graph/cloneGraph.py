"""
# Definition for a Node.
"""
class Node:
    def __init__(self, val = 0, neighbors = None):
        self.val = val
        self.neighbors = neighbors if neighbors is not None else []

'''
DFS: recursively timeO(v+e) spaceO(v)
BFS : iterative time O(v+e) space O(v)
input:a node (but it represents as an array of arrays in LCs)
output: new Node
'''
#dfs
class Solution:

    def cloneGraph(self, node: 'Node') -> 'Node':
      nMap = {} #dict()

      def clone(node):
        if not node:
          return None
        if node.val in nMap: return nMap[node.val]
        newList = []
        #make copy of node
        newNode = Node(node.val)
        newNode.neighbors = newList
        nMap[node.val] = newNode
        for nei in node.neighbors:
          #add nei into newNode.neighbors list (make copy of sublist)
          newNode.neighbors.append(clone(nei))

        return newNode #return copy node from bottom to top
      return clone(node)

#bfs
class Solution:
    def cloneGraph(self, node: 'Node') -> 'Node':
      #push copy from top to bottom
      #return map[node.val] (can't return newNode since it won't be from the top after working til the end)
      if not node: return None
      nMap = {node.val: Node(node.val, [])} #it has to be defined
      stack = [node]
      while len(stack):
        curNode = stack.pop()
        newNode = nMap[curNode.val]
        for nei in curNode.neighbors:
          if nei.val not in nMap:
            neiCopy = Node(nei.val) #define new Node here
            nMap[nei.val] = neiCopy
            stack.append(nei) #only append nei not in map -> to put it into nMap
          newNode.neighbors.append(nMap[nei.val]) #append all clone nodes into newNode neighbors

      return nMap[node.val] #it's the important point