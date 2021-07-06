/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 *
 * it's about the code
 */
 var mergeTrees = function(root1, root2) {
  //input: Treenode, Treenode
  //output: treenode (return new root)
  //edge case: if null return null
  //base case: if both null or one null -> return null or the other node
  if (!root1 && !root2) return null
  if (!root1) return root2;
  if (!root2) return root1;
  //define root:
  let root = new TreeNode(root1.val + root2.val);
  //recursive case:
  root.left = mergeTrees(root1.left, root2.left);
  //left
  root.right = mergeTrees(root1.right, root2.right);
  //right

  return root
};