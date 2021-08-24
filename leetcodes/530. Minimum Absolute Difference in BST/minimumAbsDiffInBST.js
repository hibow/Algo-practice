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
 var getMinimumDifference = function(root) {

  /*1. inorder traverse, time O(n), space O(1), since it is BST, and inorder traversal values are sorted.
    2. what if it's not BST? requires a tree Set and takes O(logN)time to loopup for the newarest values
    pre-order traverse, time O(nlogN), space O(N)
  */
  let prevNodeVal = Number.MAX_VALUE;
  let min = Number.MAX_VALUE;
  
  // traverse Inorder to compare elements sequentially to find min
  function helper(node) {
      if (node == null) {
          return;
      }

      helper(node.left);
      min = Math.min(min, Math.abs(node.val - prevNodeVal))
      prevNodeVal = node.val;
      helper(node.right);    
  }
  
  helper(root);
  return min;
};