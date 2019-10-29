/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 *   1 2 2 3 4 4 3
 *   each generation should have even numbers
 *   if only two  needs to be the same
 *   if more than two needs to be staggered
 *
 *
 *   [1] [2 2] [3 4 4 3]
 *   node.val
 *   push to temp
 *   key: which two to compare?
 *   mirror
 *   1  2   2  3  4  3  4  n1  n1's left  or n1's right
 *   1  2   2  3  4  3  4  n2  n2's right    n2's left
 *   from 1 or from 2
 *   dequeue =>
 *   if not empty pop them to compare
 *   push next value (right /left)
 *
 *
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  //recursive
  if (!root) {
    return true;
  }
  var isMirror = function(n1, n2) {
    //boolean isMirror (n1, n2)
    //base
    if (n1 === null && n2 === null) {
      return true;
    }
    if (n1 === null || n2 === null) {
      return false;
    }
    // if (n1.val !== n2.val) {
    //   return false;
    // }
    return (
      n1.val === n2.val &&
      isMirror(n1.left, n2.right) &&
      isMirror(n1.right, n2.left)
    );
    //if n1 not equal to n2 return false
    //recursive case
    //else go into isMirror to check n1's left and n2's right or vice versa
  };
  //return ismirror function
  return isMirror(root.left, root.right);
};

//iterative
var isSymmetric = function(root) {
  if (!root) {
    return true;
  }
  let tempQ = [];
  tempQ.push(root.left);
  tempQ.push(root.right);
  while (tempQ.length !== 0) {
    let n1 = tempQ.pop();
    let n2 = tempQ.pop();
    if (n1 === null && n2 === null) continue;
    if (n1 === null || n2 === null) return false;
    if (n1.val !== n2.val) {
      return false;
    }
    tempQ.push(n1.left);
    tempQ.push(n2.right);
    tempQ.push(n1.right);
    tempQ.push(n2.left);
  }
  return true;
};
