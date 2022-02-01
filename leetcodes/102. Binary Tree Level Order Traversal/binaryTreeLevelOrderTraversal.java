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
  public List<List<Integer>> levelOrder(TreeNode root) {
    //dfs time O(n) space O(l)
    List<List<Integer>> res = new ArrayList<>();
    if (root == null) return res;
    helper(res, root, 0);
    return res;
  }
  public void helper(List<List<Integer>> res, TreeNode root, int level) {
    if (root == null) return;
    if (level >= res.size()) {
      res.add(new LinkedList<Integer>());
    }
    res.get(level).add(root.val);
    helper(res, root.left, level + 1);
    helper(res, root.right, level + 1);
  }
}