
 // Definition for a binary tree node.
    function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
  }

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
 var invertTree = function(root) {
    //input: root,
    //output: root
    //edge case: if root is null return null
    /***
     * swap left and right node
     *1) recursive
       time:O(n), space: O(h)-> height <= n, worse case: O(n)
     * left = root.left -> stored first, it will be changed next line..
     * root.left = invertTree(root.right)
     * root.right = invertTree(root.left) -> root.left has to be stored beforehead
     *
     */

    if (!root) return null;
    let left = root.left;
    root.left = invertTree(root.right);
    root.right = invertTree(left);
    return root;
};