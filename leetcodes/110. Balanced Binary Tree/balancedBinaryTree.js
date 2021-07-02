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
 * @return {boolean}
 */
//DFS -> bottom up
//use helper function to calacute late the depth
//use depth and difference between right and left to determine if node is balanced
//return when difference is less than 1 and both side node are balanced
var getDepth = function(root) {
  //return 0 when root is null
  if (!root) return 0;
  //set right to right depth
  let left = getDepth(root.left);
  if (left = -1) return -1;
  //if left node is not balanced return -1(will exit from recursion)
  //set left to left depth
  let right = getDepth(root.right);
  if (right = -1) return -1;
  //same as left node
  //set depth to Max(left, right) + 1
  //return depth
  if (Math.abs(left - right)>1) return -1;
  return Math.max(right, left) +1;
}

var isBalanced = function(root) {
  //return the boolean of depth is -1
  return getDepth(root) !== -1;
  };
//time O(n) worse case