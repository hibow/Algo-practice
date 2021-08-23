/**
 * Definition for a binary tree node. public class TreeNode { int val; TreeNode
 * left; TreeNode right; TreeNode() {} TreeNode(int val) { this.val = val; }
 * TreeNode(int val, TreeNode left, TreeNode right) { this.val = val; this.left
 * = left; this.right = right; } }
 */
class Solution {
  public int pathSum(TreeNode root, int targetSum) {
    // input: tree, integer
    // output: integer
    /**
     * DFS: use helper function to count the paths of root, root.left, root.right
     * time O(n)
     * 
     * helper (recursive function) path = 0 if root.val == sum, path++; path =
     * pathSumFromRoot(root.left, sum - root.val) + pathSumFromRoot(root.right, sum
     * - root.val); return path time: O(n) single side node to O(logn) balanced
     * nodes total time : O(n^2) to O(nlogn) space: O(n) single sided nodes to
     * O(logn) balanced nodes it is for recursion
     */
    if (root == null)
      return 0;
    int path = pathSumFromRoot(root, targetSum) + pathSumFromRoot(root.left, targetSum)
        + pathSumFromRoot(root.right, targetSum);
    return path;
  }

  private int pathSumFromRoot(TreeNode root, int sum) {
    if (root == null)
      return 0;
    int path = 0;
    if (root.val == sum)
      path++;
    path += pathSumFromRoot(root.left, sum - root.val) + pathSumFromRoot(root.right, sum - root.val);
    return path;
  }
}