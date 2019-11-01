/**
 * Definition for a binary tree node. public class TreeNode { int val; TreeNode
 * left; TreeNode right; TreeNode(int x) { val = x; } }
 */
class Solution {
  public boolean helper(TreeNode node, Integer min, Integer max) {
    if (node == null)
      return true;
    if ((max != null && node.val >= max) || (min != null && node.val <= min)) {
      return false;
    }
    return helper(node.right, node.val, max) && helper(node.left, min, node.val);
  }

  public boolean isValidBST(TreeNode root) {
    return helper(root, null, null); // type int only, no long..,etc.
  }
}