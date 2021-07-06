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
 * @param {number} targetSum
 * @return {boolean}
 */
 var hasPathSum = function(root, targetSum) {
  //input: root, integer
  //output: boolean
  //edge case: if null return false
  //base case:
  //from top
    if (!root) return false;
    if (!root.right && !root.left && root.val === targetSum) return true;

  //recursive case: go to bottom
  //right or left meet the target
  return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val)
};