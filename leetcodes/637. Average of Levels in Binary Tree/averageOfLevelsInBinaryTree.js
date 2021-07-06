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
 var averageOfLevels = function(root) {
  //input: treenode
  //output: numbers array
  //edge case: if root is null return [], nodeval = [2**(-31), 2**(31) -1] , sum to 10**(-5)
  /***
   * BFS is more straightforward
   * time O(n), space O(h->n)
   * 
   */
  let ans = [];
  if (!root) return ans;
  let queue = [];
  queue.push(root);
  while (queue.length !== 0) {
    let size = queue.length;
    let sum = 0;
    //count for each level
    for (let i = 0; i<size; i++) {
      let node = queue.shift();
      sum += node.val;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    ans.push(sum/size);
  } 
    return ans;
};