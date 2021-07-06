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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
 var isSubtree = function(root, subRoot) {
    //input: treenode treenode
    //output: boolean
    //edge case:
    /**
     * two DFS (recursive):
     *  return -> boolean
     *  if root is null return false; else return isRootSubtree(r,s) || isSubtree left, s || isSubtree right,s
     *  (compare subroot with root, root.left, root.right)
     * 
     *  isRootSubtree recursive func (r,s)
     *  if !root & !subtree true
     *  if !root || !subtree false
     *  if root.val === subtree.val true
     *  return (root.left, subtree.left) && (root.right,subtree.right)
     *
     * space O(n) to O(nlogn)
     * time O(nlogN) to O(n^2) 
    */

    if (!root) return false;
    //note
    return isRootSubtree(root, subRoot) || isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
};

var isRootSubtree = function(root, subRoot) {
  if (!root && !subRoot) return true;
  if (!root || !subRoot) return false;
  //note
  /***if (root.val === subRoot.val) return true; -> it won't pass for the bellow test case
   * root [3,4,5,1,2,null,null,null,null,0]
     subroot [4,1,2]
     use (root.val !== subRoot.val return false or
    return (root.val === subRoot.val) && isRootSubtree(root.left, subRoot.left) && isRootSubtree(root.right, subRoot.right)
   ***/

  //return isRootSubtree(root.left, subRoot.left) && isRootSubtree(root.right, subRoot.right)
  return (root.val === subRoot.val) && isRootSubtree(root.left, subRoot.left) && isRootSubtree(root.right, subRoot.right)
}