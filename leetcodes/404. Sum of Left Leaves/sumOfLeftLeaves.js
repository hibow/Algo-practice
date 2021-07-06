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
 * @return {number}
 */
 var sumOfLeftLeaves = function(root) {
    //input:treenode
    //output: integer (sum)
    /***
     * if root is null return 0;
     * let sum = 0
     * if root.left is not null -> root.left.val = sum
     * return sum + sumOfLeftLeaves(root.left) + sumOfLeaves(root.right) --> it is the sum of all left nodes but not left leaves.
     * 
     * node: leaves is the end of the tree
     * only add root.left.val when it is the end of the tree
     * add both of following as return condition:
     * if (node.left is leave) -> return sum + sumOfLeaves(root.right)
     * return (s of root.left + s of root.right)
     *  use helper to check if this node is leave of parent's left (but parent might still have right children..) 
     *  if node is null -> node is not leave false 
     *  if root.left && root.right all null -> true
     *
     */
     if (!root) return 0;
     if (isLeaf(root.left)) return root.left.val + sumOfLeftLeaves(root.right);
     return sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right) 
};

var isLeaf = function(root) {
  if (!root) return false;
  return (!root.left && !root.right)
}