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
 * @return {string[]}
 *
 * DFS->
 * time O(nlogN) to O(n^2)
 * space O(logN) to O(n)
 * balanced tree is better case, single list tree is worse case
 *
 */
 var binaryTreePaths = function(root) {
  //input: treenode
  //output: array of string
  //edge case: if root is null return []

  let paths = [];
  if (!root) return paths;

  let values = [];
  backTracking(root, values, paths)
  return paths;

};

var backTracking = function(root, values, paths) {
  if (!root) return;
  //root is null, return to prev level
  values.push(root.val);
  if (isLeaf(root)) {
    paths.push(buildPath(values));
  } else {
    backTracking(root.left, values, paths)
    backTracking(root.right, values, paths)
  }
  values.pop();
  //it is not concurrent process, but single thread process, so after tracking left, it needs to reverse back to previous values to right side
}

var isLeaf = function (root) {
  if (!root.left && !root.right) return true
  return false;
}

var buildPath = function(values) {
  let path = ''
  for (let i = 0; i < values.length; i++) {
    path += values[i];
    if (i !== values.length - 1) {
      path += '->'
    }
  }
  return path;
}