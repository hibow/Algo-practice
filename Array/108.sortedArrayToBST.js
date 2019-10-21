/**
 * Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

Example:

Given the sorted array: [-10,-3,0,5,9],

One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

      0              assign middle as root
     / \
   -3   9            assign next middle point to left and right
   /   /
 -10  5              repeat until no value
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
  function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
  }
var sortedArrayToBST = function(nums, start, end) {
  if (start === undefined && end === undefined ) {
    start = 0;
    end = nums.length -1;
  }
  //find the middle point
  if (start > end) {
    return null;
  }
  let mid = Math.ceil((start + end) /2);
  //assign to root
  let root = new TreeNode(nums[mid]);
  //assign to left
  root.left = sortedArrayToBST(nums, start, mid - 1);
  //assign to right
  root.right = sortedArrayToBST(nums, mid + 1, end);
  return root;
};
/**
 * test case
 */

 var arr = [-10,-3,0,5,9];
 var a = sortedArrayToBST(arr);
 console.log(JSON.stringify(a));