/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 *
 *   2 1 3
 *   input: val, max, min
 *   2  check left -> if 1 < 2
 *                    if min > 2 return false
 *      check right -> if 3 < 2
 *                    if max < 2 return false
 *
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  //recursive
  //O(n) time
  if (!root) {
    return true;
  }
  function helper(root, small = -Infinity, big = +Infinity) {
    if (!root) {
      return true;
    }
    if (root.val <= small || root.val >= big) {
      return false;
    }
    return (
      helper(root.left, small, root.val) && helper(root.right, root.val, big)
    );
  }
  return helper(root);
};
//iterative
