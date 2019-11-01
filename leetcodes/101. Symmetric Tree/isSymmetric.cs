/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left;
 *     public TreeNode right;
 *     public TreeNode(int x) { val = x; }
 * }
 */
public class Solution
{
  public Queue<TreeNode> tempQ = new Queue<TreeNode>();
  public bool IsSymmetric(TreeNode root)
  {
    if (root == null)
      return true;
    tempQ.Enqueue(root.left);
    tempQ.Enqueue(root.right);
    while (tempQ.Count != 0)
    {
      var n1 = tempQ.Dequeue();
      var n2 = tempQ.Dequeue();
      if (n1 == null && n2 == null)
        continue;
      if (n1 == null || n2 == null)
        return false;
      if (n1.val != n2.val)
        return false;
      tempQ.Enqueue(n1.left);
      tempQ.Enqueue(n2.right);
      tempQ.Enqueue(n1.right);
      tempQ.Enqueue(n2.left);
    }
    return true;
  }
}