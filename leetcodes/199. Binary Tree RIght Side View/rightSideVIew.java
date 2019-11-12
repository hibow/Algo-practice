/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
public class Solution {
  List<Integer> l = new ArrayList<Integer>();
  public List<Integer> rightSideView(TreeNode root) {
      helper(root,0);
      return l;
  }
  
  public void helper(TreeNode root, int index) {
      if (root != null) {
          if (l.size() <= index) {
              l.add(root.val);
          } else {
              l.set(index, root.val);
          }
          helper(root.left, index + 1);
          helper(root.right, index + 1);
      }
  }
}