/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
//BFS time O(n), space O(n) if unbalanced tree; O(logN) if balanced tree
 var isSameTree = function(p, q) {
   let stack = [[p, q]];
   while(stack.length> 0) {
     [p, q]= stack.pop();
     if ((p && q) && (p.val === q.val)) {
      stack.push([p.left, q.left],[p.right, q.right]);
     } else if (p || q) {
       return false;
     }
   }
   return true;
};