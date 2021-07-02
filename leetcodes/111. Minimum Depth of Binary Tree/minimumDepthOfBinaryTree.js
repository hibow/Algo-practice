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
 * Key point: nearest leave nodes to the root node
 * if a node only has one child -> MUST return the depth of the side with child, i.e. MAX(left, right) + 1
 * if a node has two children on both side -> return min depth of two sides, i.e. MIN(left, right) + 1
 ***/

//DFS - resursive method
 var minDepth = function(root) {
   //base case: return 0 if root is null
   if (root === null) return 0;
   //recursive case:
   //assign left as all nodes count from left side
   let left = minDepth(root.left);
   //assign right as all nodes count from right side
   let right = minDepth(root.right);
   //return:(from key point)
   return (left === 0 || right === 0)? Math.max(left, right) + 1 : Math.min(left, right) + 1;
   //if one side has child -> return the depth of that side with child
   //if both sides have child -> return min depth of two sides
};

