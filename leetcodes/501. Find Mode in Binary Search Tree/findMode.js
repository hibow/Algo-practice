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
 var findMode = function(root) {
    /**
     * input: treenode
     * output: array
     * 
     * BST -> find mode -> if max, get max, if equals get elem into array; else, replace it by new array
     * time O(n) -> it has to traverse each node to get the higher occurrences number
     * space O(n) or O(1) -> depends on if we know the length of the array
     * 
     * use max to store values
     * 
     * main:
     *    helper(root) -> to get the higher occurrences number ->modeIdx -> one pass
     *    modes = new Array(modeidx)
     *    modeIdx = 0
     *    curCount = 0
     *    helper(root)  -> two pass -> to get the modes array with unique values
     *    
     * helper(root):
     *    helper(root.left)
     *    handle(root.val)
     *    helper(root.right)
     * 
     *  
     * modes = []
     * handle(val): if curVal is undefined, or val is not curVal, curVal = val and curCount = 1;
     *              if curVal is val, curCount + 1
     *              if curCount > maxCount, maxCount = curCount, modes[0]= curVal, modeIdx = 1
     *              else if curCount = maxCount, if modes len is not 0, modes[modeIdx] = curVal
     *                      modeIdx ++;
     *            
     * 
     */
    let curVal;
    let curCount = 0;
    let maxCount = 0;
    let modeIdx = 0;
    let modes = [];
    
    function handle(val) {
      if (val!=curVal) {
        curVal = val;
        curCount = 0;
      }
      curCount++;
      if (curCount > maxCount) {
        maxCount = curCount;
        modes[0] = curVal;
        modeIdx = 1;
      } else if (curCount === maxCount) {
        modes[modeIdx] = curVal;
        modeIdx ++;
      }
    }
    function inorder(root) {
      if (root) {
        inorder(root.left)
        handle(root.val)
        inorder(root.right)
      }
    }
    inorder(root);

    modes = new Array(modeIdx)
    curCount = 0;
    modeIdx = 0;
    inorder(root);
    return modes;

};