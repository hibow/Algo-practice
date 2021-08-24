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
 * @param {number} k
 * @return {boolean}
 */
 var findTarget = function(root, k) {
    //input: tree, integer
    //output: boolean
    /**
     * 1. inorder array time:O(n) space O(n)-> has to dump all the values
     *   main
     *   create nums array
     *   inorder(root, nums) -> dump values from small to large to the nums array
     *   while (i < j) -> i is first index, j is last index
     *      if nums[i] + nums[j] is not k, adjust the i or j based on if sum < k or not 
     *    (just like two sum)
     *   return false -> default
     *   
     *   inorder(root, nums)
     *   if root is null, return;
     *   inorder(root.left, nums)
     *   nums.add(root.val)
     *   inorder(root.right, nums)
     * 
     * 
     * 2. use stack without dumping all the value out in the beginning time O(n), space O(logn)-> balanced tree
     * main:
     *   if root is null, return false
     *   left stack
     *   right stack
     * addnode (leftstack, root, true)
     * addnode (rightstack, root, false)
     * while (lstack.peek()!=rstack.peek() )
     *    sum = left stack.peek.val + right stack.peek.val
     *    if(sum == k) return true
     *    else if (sum > k) stackNext(right stack, false)
     *    else stackNext(left stack, true)
     * 
     * return false
     * 
     * addNode (stack, root, boolean)
     *  while (node != null) stack.push(node), node = (boolean isLeft?) node.left:node.right
     * 
     * stackNext(stack, boolean)
     * node is stack.pop()
     * if (boolean isLeft) {
     *  stackAdd(stack, node.right, isLeft)
     * } else {
     * stackAdd(stack, node.left, isLeft)
     * }
     * 
     * 3. use set with dfs, timeO(n), space O(n)
    it doesn't take the advantage that our binary tree is a binary search tree 
    */  
let set = new Set();
return dfs(root);

function dfs(root) {
  if (!root) {
    return false;
  }
  if (set.has(k - root.val)) return true;
  //dfs, it will carry the result to the top
  set.add(root.val);
  return dfs(root.left) || dfs(root.right);
  }
}
//use set and stack, bfs -> time O(n), space O(H)-> bst's height
var findTarget = function(root, k) {
  if (!root) return false;
  const set = new Set();
  const stack = [root];
  while (stack.length) {
    const node = stack.pop();
    if (set.has(k - node.val)) return true;
    //it will break if it's true
    set.add(node.val);
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
  return false;
};