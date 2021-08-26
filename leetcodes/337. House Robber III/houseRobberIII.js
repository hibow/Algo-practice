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
 var rob = function(root) {
    //input: treeNode
    //output: integer
    /**
     * edge case: can't count two adjacent values
     * 
     * result = max (robInclude(root), robExclude(root)) -> use helper(root) 
     * 
     * recursion to get the value from to bottom space O(logN)
     *   store the sum based on the each node -> space O(n)
     * create res = helper(root)-> int[]
     * return  max(res[0], res[1])
     * 
     * helper(root):
     * 
     * termination condition: if root is null, return new int[2]
     * 
     * set left = helper(root.left)
     * set right = helper(root.right)
     * set res = new int[2]
      res[0] = counts from roots + left[1] + right[1]
       res[1] = the max from left plus right = max(left) + max(right)
       return res  
     * 
     * 
     */
       function helper(root) {
         if (!root) return [0,0];
         let left = helper(root.left);
         let right = helper(root.right);
         let res = new Array(2);
         res[0] = root.val + left[1] + right[1];
         res[1] = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
         return res;
      }
   let res = helper(root);
   return Math.max(res[0],res[1]);


};