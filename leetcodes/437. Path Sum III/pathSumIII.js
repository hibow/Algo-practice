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
    * 1) brute force with two DFS(recursive function)
    * what to return: counts -> when root.val = sum count = 1, return count += pathsum left + pathsum right
    * 
    * count from root with (sum - root.val) -> until target sum is meet, calculate counts and return counts
    * count from leaves with sum -> return count from root with (sum - root.val) + count from leaves with sum
    * 
    * Space O(n) to O(logN)
      Space complexity is O(1), due to there is no extra cache. However, for any recursive question, we need to think about stack overflow, namely the recursion should not go too deep.
      Assume we have n TreeNodes in total, the tree height will vary from O(n) (single sided tree) to O(logn)(balanced tree).
      The two DFS will go as deep as the tree height.
      Time O(nlogn) to O(n^2)
      Time complexity depends on the two DFS.
      1st layer DFS will always take O(n), due to here we will take each node out, there are in total n TreeNodes
      2nd layer DFS will take range from O(n) (single sided tree) to O(logn)(balanced tree). This is due to here we are get all the paths from a given node. The length of path is proportional to the tree height.
      Therefore, the total time complexity is O(nlogn) to O(n^2).
      2) Memorization of path sum: space O(n), time O(n)
      TBD
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
