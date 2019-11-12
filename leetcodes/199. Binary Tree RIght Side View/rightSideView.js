/**
 * Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

Example:

Input: [1,2,3,null,5,null,4]
Output: [1, 3, 4]
Explanation:
                  BFS or DFS  time: O(n) space O(n)
   1            <--- the right most one of each level
 /   \
2     3         <---
 \     \
  5     4       <---

 */

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
  //only check the last one of each level

  //push each level into stack
  //pop it until find the last one
  let result = [];
  if (root === null) {
    return result;
  }
  let queue = [];
  let level = 1;
  queue.push([root, level]);
  while (queue.length !== 0) {
    let [elem, curLev] = queue.shift();

    if (curLev > result.length) {
      result.push(elem.val);
    }
    if (elem.right !== null) {
      queue.push([elem.right, curLev + 1]);
    }
    if (elem.left !== null) {
      queue.push([elem.left, curLev + 1]);
    }
  }
  return result;
};
