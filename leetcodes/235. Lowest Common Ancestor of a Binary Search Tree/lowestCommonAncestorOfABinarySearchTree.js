/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
 var lowestCommonAncestor = function(root, p, q) {
   //input: treenode, treenode, treenode
   //output: treenode
   //edge case: a node can be a descendant of itself according to the LCA definition
   //constraint: p != q, all unique nodes in the BST tree (left < root < right)
   /**
    * find the split point -> return the split point
    * LCA: if pval > rootval && qval > rootval -> root = root.right; if pval < rootval && qval < rootval,root = root.left 
    * go to the other side to search the split point if out of boundary
    * if not out of boundary, the current node is the split point. return node
    * 
    * iterative solution 
    * time O(n), space O(1)-> no need to have queue  
    * 
    * 
    */
  if (!root) return null;
  let pVal = p.val;
  let qVal = q.val;
  let node = root;
  while (node) {
    let nodeVal = node.val;
    if (pVal > nodeVal && qVal > nodeVal) {
      node = node.right;
    } else if (qVal < nodeVal && pVal < nodeVal) {
      node = node.left;
    } else {
      return node;
    }
  }
  return null;
    
};