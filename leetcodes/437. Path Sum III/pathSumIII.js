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
 * @return {number}
 */
 var pathSum = function(root, targetSum) {
   //input: TreeNode, integer
   //output: integer (counts)
   //edge case: root.val is [-10^9, 10^9], target sum is [-1000, 1000]
   /**
    * what to return: counts -> when root.val = sum count = 1, return count += pathsum left + pathsum right
    * 
    * count from root with (sum - root.val) -> until target sum is meet, calculate counts and return counts
    * count from leaves with sum -> return count from root with (sum - root.val) + count from leaves with sum
    * 
    */
    
  if (!root) return 0;
  let count = pathSumFromRoot(root, targetSum) + pathSum(root.left,  targetSum) + pathSum(root.right, targetSum);
  return count;
};

var pathSumFromRoot = function(root, targetSum) {
  if (!root) return 0;
  let count = 0;
  if (root.val === targetSum) count = 1;
  count += pathSumFromRoot(root.left, targetSum - root.val) + pathSumFromRoot(root.right, targetSum - root.val);
  return count;
}
