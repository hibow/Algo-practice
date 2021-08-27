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
 * @return {number[]}
 */
 var inorderTraversal = function(root) {
  //input: treenode
  //output: int[]
  /**
   * order: left->root->right
   * 1)recursive timeO(n), space O(logn) ->O(n)
   *
   * 2)iterating method using stack
   *
   * 3)morris traversal
   */
  let res = [];
  helper(root, res);
  return res;
};
const helper = (root, res) =>{
  if(root) {
    if (root.left) helper(root.left,res);
    res.push(root.val);
    if(root.right) helper(root.right,res);
  }
}