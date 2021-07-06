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
 var findBottomLeftValue = function(root) {
    //input: treenode
    //output: integer (mostleft node val from last row ) 
    //edge case: 
    /***
     * BFS -> for level problem
     * time O(n), space o(h->n)
     * 
     * at least one node -> will return root.val in the end -> if not the only node, iterate the treenodes by root
     * 
     * push root into queue while queue size is not 0
     * shift node from queue 
     * push child node from right to left into queue
     * 
     * exit when size is 0, return the last val (use the same variable for all the nodes -> root)
     */
  let queue = [];
  queue.push(root);
  while (queue.length !== 0) {
    root = queue.shift();
    if (root.right !== null) queue.push(root.right);
    if (root.left !== null) queue.push(root.left);
  }
    return root.val;
};