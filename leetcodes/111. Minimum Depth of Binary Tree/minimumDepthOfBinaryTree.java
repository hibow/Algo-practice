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
 //BFS
 //add from top to bottom
 /* Key point:
 * if a node only has one child -> MUST return the depth of the side with child, i.e. MAX(left, right) + 1
 * if a node has two children on both side -> return min depth of two sides, i.e. MIN(left, right) + 1
 * */
class Solution {
    public int minDepth(TreeNode root) {
      //return 0 when root is null
      if (root == null) return 0;
      // create queue for node
      Queue<TreeNode> queue = new LinkedList<>();
      //add root into queue
      queue.offer(root);
      //create level and set it to 1
      int level = 1;
      //iterate the steps until queue is empty
      while( !queue.isEmpty()){
      //get size of queue
        int size = queue.size();
        //iterate over the queue
        for (int i = 0; i < size; i++) {
          //set curNode as the one poll from queue
          TreeNode curNode = queue.poll();
          //if node.right and node.left is null -> return level (stop here first)
          if (curNode.right == null && curNode.left == null) return level;
          //if node has right -> add right node into queue
          if (curNode.left != null) queue.offer(curNode.left);
          //if node has left -> add left node into queue
          if (curNode.right != null) queue.offer(curNode.right);
        }
      //increase level by 1(go to next level)
        level ++;
      }
    //return level
      return level;
    }
}