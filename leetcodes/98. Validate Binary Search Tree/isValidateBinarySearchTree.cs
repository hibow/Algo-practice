/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left;
 *     public TreeNode right;
 *     public TreeNode(int val=0, TreeNode left=null, TreeNode right=null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
public class Solution {
    public bool IsValidBST(TreeNode root) {
      return helper(root, null, null);
    }
    private bool helper(TreeNode root, TreeNode l, TreeNode r) {
      if (root == null) return true;
      if ((l != null && root.val <= l.val) || (r != null && root.val >= r.val) ) return false;
      return helper(root.left, l, root) && helper(root.right, root,r);
    }
}