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