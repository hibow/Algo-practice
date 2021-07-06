import java.util.LinkedList;
import java.util.Queue;

import javax.swing.tree.TreeNode;

/**
 * Definition for a binary tree node. public class TreeNode { int val; TreeNode
 * left; TreeNode right; TreeNode(int x) { val = x; } }
 */
class Solution {
  public boolean isSymmetric(TreeNode root) {
    if (root == null) {
      return true;
    }
    Queue<TreeNode> tempQ = new LinkedList<>();
    tempQ.add(root.left);
    tempQ.add(root.right);
    while (!tempQ.isEmpty()) {
      TreeNode n1 = tempQ.poll();
      TreeNode n2 = tempQ.poll();
      if (n1 == null && n2 == null)
        continue;
      if (n1 == null || n2 == null)
        return false;
      if (n1.val != n2.val)
        return false;
      tempQ.add(n1.left);
      tempQ.add(n2.right);
      tempQ.add(n1.right);
      tempQ.add(n2.left);
    }
    return true;
  }
}

// recursive solution:
/**
 * time: O(n) -> total numbers of node space: O(n) -> the height of the tree ->
 * worse case: h = n
 */
class Solution {
  public boolean isSymmetric(TreeNode root) {
    if (root == null)
      return true;
    return isBothSymmetric(root.left, root.right);
  }

  private boolean isBothSymmetric(TreeNode root1, TreeNode root2) {
    if (root1 == null && root2 == null)
      return true;
    if (root1 == null || root2 == null)
      return false;
    return (root1.val == root2.val) && isBothSymmetric(root1.left, root2.right)
        && isBothSymmetric(root1.right, root2.left);
  }
}