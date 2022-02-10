/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */

class Solution {
  public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
    //time O(H), height of Binary Search tree, space O(1)
    if (root == null) return null;
    int pval = p.val;
    int qval = q.val;
    TreeNode node = root;
    while (node != null) {
      int nodeVal = node.val;
      if (pval > nodeVal && qval > nodeVal) {
        node = node.right;
      } else if (pval < nodeVal && qval < nodeVal) {
        node = node.left;
      } else {
        return node;
      }
    }
    return null;
  }
}