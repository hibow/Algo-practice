/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
public class Codec {

  // Encodes a tree to a single string.
  public String serialize(TreeNode root) {
    //preorder traverse the whole root with dfs
    return serializeHelper(root, "");
  }
  private String serializeHelper(TreeNode root, String str) {
    if (root == null) {
      str += "null,";
      return str;
    }
    //preorder
    str += root.val +",";
    str = serializeHelper(root.left, str);
    str = serializeHelper(root.right, str);
    return str;
  }

  // Decodes your encoded data to tree.
  public TreeNode deserialize(String data) {

    //put data into array list
      //first index is always the root
      //add next index into left until null
      //add next index into right until null
    String [] data_ = data.split(",");
    List<String> list = new LinkedList<>(Arrays.asList(data_));
    return deserializeHelper(list);

  }
  //create a helper(list)
  private TreeNode deserializeHelper(List<String> list) {
    if (list.get(0).equals("null")){
      list.remove(0);
      return null;
    }
    int val = Integer.valueOf(list.get(0));
    TreeNode root = new TreeNode(val);
    //remove index 0 and set it as root
    list.remove(0);
    //root.left is helper(list)
    root.left = deserializeHelper(list);
    //root.right is helper(list)
    root.right = deserializeHelper(list);
    return root;
  }
}

// Your Codec object will be instantiated and called as such:
// Codec ser = new Codec();
// Codec deser = new Codec();
// TreeNode ans = deser.deserialize(ser.serialize(root));