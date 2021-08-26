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
 var preorderTraversal = function(root) {
    //preorder: root -> left -> right
    //input: treenode
    //output: array
    /**
     * 
     * create array
     * use preorder(root) to place values in array
     * (1)recursion: time O(n), space : O(h)-> height, balanced tree O(logn), singly linked tree O(n)
     * 
     * preorder(root):
     *  if node is null return;
     *   push node.val to array
     *   preorder(node.left)
     *   preorder(node.right)
     * (2)stack: binary tree-> time O(h) space O(h)-> the height of binary tree
     * 
     * push root into stack
     * while (stack is not empty)
     *    stack.pop()
     *    push node.val to array
     *    push node.right to stack
     *    push node.left to stack -> first get pop to array next time 
     */
  let result = [];
  let stack = [root];
  while(stack.length) {
    let node = stack.pop();
    if (node){
      result.push(node.val);
      stack.push(node.right);
      stack.push(node.left);
    }
  }
  return result;
};