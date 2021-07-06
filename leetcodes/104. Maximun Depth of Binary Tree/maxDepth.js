/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
  DFS:
max    0         2           3
count  0 1   2
       3  -> 9  ->null
count 0 1      2      3
        3   -> 20  -> 15  -> null

  inital count = 0
  recursive
  check root -> if not valid -> return 0
                 compare with max, if less than max, don't change max
                 if not , replace max
                if valid return 1
  go down to root left  and repeat the above step with carrying count number
  return total and add on to initial count
time O(n) space O(n) worse case
best or average case: space O(logN) -> O(1) for logN times

 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
// var maxDepth = function(root) {
//   let result = 0;
//   let count = 0;
//   if (root === null) {
//     return 0;
//   }
//   const checkDepth = function(node, c) {
//     if (node === null) {
//       return;
//     }
//     if (node !== null) {
//       c++;
//       if (c > result) result = c; //it needs to be place here
//       checkDepth(node.left, c);
//       checkDepth(node.right, c);
//     }
//   };
//   checkDepth(root, count);

//   return result;
// };
var maxDepth = function(root) {
  //base case
  if (root === null) {
    return 0;
  }
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};
