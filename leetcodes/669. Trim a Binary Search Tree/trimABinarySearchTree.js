/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
 var trimBST = function(root, low, high) {
   //input: treenode , integer, integer 
   //output: treenode 
   //edge case: 
   /***
    * test case:
    * Input: root = [3,0,4,null,2,null,null,1], low = 1, high = 3
      Output: [3,2,null,1]
      Example 3:
      Input: root = [1], low = 1, high = 2
      Output: [1]
      Example 4:
      Input: root = [1,null,2], low = 1, high = 3
      Output: [1,null,2]
      Example 5:
      Input: root = [1,null,2], low = 2, high = 4
      Output: [2]
    * 
    * recursive:
    * if root is null return null
    * if root.val is out of boundary -> return trimBST(leftnode or right node)
    * if not out of boundary (keep this root)
    * check left side and right side with trimBST
    * return root
    * 
    * time O(n) -> total numbers of nodes -> iterate each node
    * space: O(h -> n)
    */
  if (!root) return null;
  if (root.val > high) return trimBST(root.left, low, high);
  if (root.val < low) return trimBST(root.right,low, high);

  root.left = trimBST(root.left, low, high);
  root.right = trimBST(root.right, low, high);
  return root;

};