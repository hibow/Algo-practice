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
 *
 * it's about how to code..
  compare the max of (left + right) to get the max
*/
var diameterOfBinaryTree = function(root) {
   let max = 0;
   const getDepth = function(root) {
    if (!root) return 0;
    let l = getDepth(root.left);
    let r = getDepth(root.right);
    max = Math.max(max, l + r);
    //compare the max
    return Math.max(l, r) + 1;
    //max depth of the node
   }
  getDepth(root);
  return max;
};