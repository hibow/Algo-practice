import java.util.HashMap;
import java.util.Map;


/**
 * Definition for a binary tree node.
 **/
  public class TreeNode {
      int val;
      TreeNode left;
      TreeNode right;
     TreeNode() {}
      TreeNode(int val) { this.val = val; }
     TreeNode(int val, TreeNode left, TreeNode right) {
         this.val = val;
         this.left = left;
         this.right = right;
 }
}

class Solution {
  int preorderIndex;
  Map<Integer, Integer> inorderIndexMap;
  public TreeNode buildTree(int[] preorder, int[] inorder) {
    //values in preorder and inorder are unique!
    //recursion: time O(n)( hashmap & building the tree), space O(N)(recursion call worse case O(N), avg O(logN))
    //build a hashmap to store value and its index
    preorderIndex = 0;
    inorderIndexMap = new HashMap<>();
    for (int i = 0; i < inorder.length; i++) {
      inorderIndexMap.put(inorder[i],i);
    }
    return arrayToTree(preorder, 0, preorder.length - 1);
  }
  private TreeNode arrayToTree(int[] preorder, int left, int right) {
    if (left > right) return null;
    //get root value from preorder array
    int rootValue = preorder[preorderIndex++];
    TreeNode root = new TreeNode(rootValue);
    //build left and right subtree from inorderIndexMap
    root.left = arrayToTree(preorder, left, inorderIndexMap.get(rootValue) - 1);
    root.right = arrayToTree(preorder, inorderIndexMap.get(rootValue) + 1, right);
    return root;
  }
}