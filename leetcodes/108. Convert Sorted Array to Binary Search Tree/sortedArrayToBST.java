/**
 * Definition for a binary tree node. public class TreeNode { int val; TreeNode
 * left; TreeNode right; TreeNode() {} TreeNode(int val) { this.val = val; }
 * TreeNode(int val, TreeNode left, TreeNode right) { this.val = val; this.left
 * = left; this.right = right; } }
 */
class Solution {
  public TreeNode sortedArrayToBST(int[] nums) {
    // input: array
    // output: tree
    /**
     * split array assign to root, split array from both sides and assign to right
     * node and left node..., recursively. time O(n) space O(logn) recursion stack,
     * O(n) as output tree
     * 
     */
    if (nums.length == 0)
      return null;
    TreeNode head = helper(nums, 0, nums.length - 1);
    return head;
  }

  private TreeNode helper(int[] nums, int low, int high) {
    if (low > high)
      return null;
    int mid = (low + high) / 2;
    TreeNode node = new TreeNode(nums[mid]);
    node.left = helper(nums, low, mid - 1);
    node.right = helper(nums, mid + 1, high);
    return node;
  }
}