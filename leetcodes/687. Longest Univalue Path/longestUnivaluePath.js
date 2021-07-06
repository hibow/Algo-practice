/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var longestUnivaluePath = function(root) {
    //input: treenode
    //output: integer (maxlength)
    //edge case: if root is null return 0;
    /***
     * return = maxlength 
     * !!!what counts to a path -> root to left child node, root to right child node, root to both child node
     * 
     * use max as public variable for comparison = 0
     * if root is null return 0
     * else getPath(root)
     * return max
     * 
     * getPath function(root) -> for counting path and getting max -> return counts
     * if root is null return 0
     * if (root.left is not null and root.left === val), lPath = getPath(root.left) + 1  else 0                                                                                                                                                                                                                                                                                                                                                                            
     * if (root.right is not null and root.right === val), rPath = getPath(root.right) + 1 else 0
     * max = max(max, (lPath + rPath))
     * return max (lPath, rPath)
     * 
     * time O(n)
     * space O(n)
     * 
     */
     let max = 0;
     var getPathCount = function(root) {
      if (!root) return 0;
      let lPath = getPathCount(root.left);
      let rPath = getPathCount(root.right);
      if (root.left !== null && root.val === root.left.val) {
        lPath += 1;
      } else {
        lPath = 0;
      } 
      if (root.right !== null && root.val === root.right.val) {
        rPath += 1;
      } else {
        rPath = 0;
      }
      max = Math.max(max, lPath + rPath);//it all connects to root (if having value, root.val = root.left.val = root.right.val)
      return Math.max(lPath, rPath);
     }
     getPathCount(root);
     return max;
};