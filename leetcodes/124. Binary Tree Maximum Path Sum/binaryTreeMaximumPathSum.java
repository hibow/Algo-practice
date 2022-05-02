/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
  //recursion time O(n), space O(n)
  private int maxSum;
  public int maxSumHelper(TreeNode root){
    //base case
    if (root == null) return 0;

    //recursive case
    int leftMax = maxSumHelper(root.left);
    int rightMax = maxSumHelper(root.right);

    int maxRightLeft = Math.max(leftMax, rightMax);
    int maxWithRoot = Math.max(root.val, (root.val + maxRightLeft));
    int maxAll = Math.max(maxWithRoot, leftMax + rightMax + root.val);

    maxSum = Math.max(maxSum, maxAll);

    return maxWithRoot;
  }

  public int maxPathSum(TreeNode root) {
    maxSum = Integer.MIN_VALUE;
    maxSumHelper(root);
    return maxSum;
  }
}