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
 var postorderTraversal = function(root) {
  //input: treenode
  //output: int[] array
  /**
   * PostOrder: left, right, root
   * 1. DFS(recursive) ->time O(nlogn)->O(n^2), space O(n) ->O(h) or O(logn) if balanced tree(wo counting tree stack)
   *    helper(root)
   *    helper:
   *       if root is null return ;
   *       helper(root.left)
   *       helper(root.right)
   *       handle(root.val)
   *
   * 2. DFS(stack) -> timeO(N), spaceO(h)
   *    result = []
   *    stack = [root] -> decide which condition to push into result in while loop
   *    while stack exit,
   *       get node in stack.pop()
   *       if () -> push into result
   *       else
   *          push node back to stack with flag is true
   *          push node.right to stack
   *          push node.left to stack
   *    return result
   *2.1 stack with reverse
        stack = [root]
        while (stack)
           node is stack.pop()
           *push nodes as root->right->left
           push node.val to result
          stack.push(node.left)
          stack.push node.right
        return reverse(result) -> left->right->root
   *
   */
  if (!root) return [];
  const res  = [];
  res.push(...postorderTraversal(root.left))
  res.push(...postorderTraversal(root.right))
  res.push(root.val)
  return res;
};

const func1 = (root) =>{
  if (!root) return [];
  let result = [];
  let stack = [[root, false]];
  while(stack.length){
    let node = stack.pop()
    if (node[1]){
      result.push(node[0])
    }else if(node[0]){
      //don't push null node into stack
      stack.push([node[0], true]);
      stack.push([node[0].right, false]);
      stack.push([node[0].left, false])
    }
  }
  return result;
}