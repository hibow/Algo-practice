/**
 * Definition for a binary tree node.
**/
  function TreeNode(val) {
      this.val = val;
      this.left = this.right = null;
  }

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
//bfs- inorder : time O(H+k)H: height, balanced tree O(logN + k), unbalanced tree O(N + k), spaceO(H), worse O(n), balanced tree O(logn)
 var kthSmallest = function(root, k) {
  let stack = []
  while (k) {
    while(root) {
      stack.push(root)
      root = root.left
    }
    root = stack.pop()
    k -= 1
    if (!k) {
      return root.val
    }
    root = root.right
  }
 }
//dfs - inorder timeO(n) -> collect all the n inorderly , space O(n)
var kthSmallest = function(root, k) {
  const inorder = (root, arr) => {
    //if null return arr
    if (!root) return arr
    //left
    inorder(root.left, arr)
    arr.push(root.val)
    //right
    inorder(root.right, arr)
    return arr
  }
  let result = inorder(root, [])
  return result[k - 1]
}