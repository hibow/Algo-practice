/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 
 * it's about the code
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var findSecondMinimumValue = function(root) {
    //input: treenode
    //output: integer (2ndmin val)
    //edge case: if no 2ndmin return -1 if root is null return -1
    /***
     * [2 2 8 2 2 n n 3 3 4 5 ] -> 3
     * 
     * return node.val (2minVal)
     * 
     * 
     * recursive:
     * time O(n) space(n)
     * 
     * if root null return -1
     * if root.left && root.right are null return -1
     * 
     * leftVal= root.left.val
     * rightVal = root.right.val
     * if (leftVal == root.val)  leftVal = 2min(root.left) -> it won't return until get the val not root.val
     * if (rightVal == root.val) rightVal= 2min(root.right)
     * 
     * if (leftVal != -1 && rightVal != -1 ) return min(leftVal, rightVal)
     * if (leftVal != -1) return leftVal;
     * return rightVal;
     * return node val
     * 
     * 
     */

    if (!root) return -1;
    if (!root.left && !root.right) return -1

    let leftVal = root.left.val;
    let rightVal = root.right.val;
    if (leftVal === root.val) leftVal = findSecondMinimumValue(root.left);
    if (rightVal === root.val) rightVal = findSecondMinimumValue(root.right);

    if (leftVal !== -1 && rightVal !== -1) return Math.min(leftVal, rightVal);
    if (leftVal !== -1) return leftVal;
    return rightVal;

};