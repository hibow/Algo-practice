/**
 * Definition for a binary tree node.**/
  class TreeNode {
      val: number
      left: TreeNode | null
      right: TreeNode | null
      constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.left = (left===undefined ? null : left)
          this.right = (right===undefined ? null : right)
    }
  }

  //bfs time O(n) spaceO(n), dfs has simple code
  function isValidBST(root: TreeNode | null): boolean {
    let queue = []
    queue.push([root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY])
    while (queue.length){
      let [node, min, max] = queue.pop()
      let nVal = node.val
      if (node.left) {
        let lVal: number = node.left.val
        if (lVal >= nVal || lVal <= min || lVal >= max) return false
        queue.push([node.left, min, nVal])
      }
      if (node.right) {
        let rVal: number = node.right.val
        if (rVal <= nVal || rVal <= min || rVal >=max) return false
        queue.push([node.right, nVal, max])
      }
    }
    return true
  };