import java.util.ArrayList;

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
//dfs- inorder recursive: time O(n), space O(n)
class Solution {
  public int kthSmallest(TreeNode root, int k) {
    ArrayList<Integer> arr = inorder(root, new ArrayList<Integer>());
    return arr.get(k - 1);
  }
  private ArrayList<Integer> inorder(TreeNode root, ArrayList<Integer> arr){
    if (root == null) return arr;
    inorder(root.left, arr);
    arr.add(root.val);
    inorder(root.right, arr);
    return arr;
  }
}

//iterative inorder timeO(H+k), space O(H)
class Solution {
  public int kthSmallest(TreeNode root, int k) {
    LinkedList<TreeNode> stack = new LinkedList<>();
    while(true) {
      while(root!= null){
        stack.push(root);
        root = root.left;
      }
      root = stack.pop();
      if (--k == 0) return root.val;
      root = root.right;
    }
  }
}