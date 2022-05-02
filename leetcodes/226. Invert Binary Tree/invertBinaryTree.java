import java.util.Queue;

import javax.swing.tree.TreeNode;

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
  public TreeNode invertTree(TreeNode root) {
    //bfs time O(h) -> worse case O(n), space O(n)
    //if root is null
    if (root == null) return root;
    //create queue
    final Queue<TreeNode> queue = new LinkedList<>();
    //offer root into queue
    queue.offer(root);
    //while queue is not empty
    while (!queue.isEmpty()){
      //poll first elem from queue
      final TreeNode node = queue.poll();
      final TreeNode left = node.left;
      //assign its left to right
      //assign its right to left
      node.left = node.right;
      node.right = left;
      //if its left is not null -> offer to queue
      if (node.left != null) queue.offer(node.left);
      //if its right is not null offer to queue
      if (node.right != null) queue.offer(node.right);
    }
    return root;
  }
}